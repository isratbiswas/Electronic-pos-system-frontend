"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { IProduct } from "@/types/product";
import {
  FaBarcode,
  FaTag,
  FaDollarSign,
  FaBoxes,
  FaStar,
  FaAlignLeft,
  FaIdBadge,
} from "react-icons/fa";

interface Props {
  product: IProduct;
  onClose: () => void;
}

/* ⭐ Star Rating Component */
const StarRating = ({ rating = 0 }: { rating?: number }) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <FaStar
          key={star}
          className={star <= rating ? "text-yellow-400" : "text-gray-300"}
        />
      ))}
      <span className="ml-2 text-sm text-gray-600">({rating}/5)</span>
    </div>
  );
};

const ViewProductModal = ({ product, onClose }: Props) => {
  return (
    <Dialog open={!!product} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-md rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            {product.name}
          </DialogTitle>
        </DialogHeader>

        <Card className="border-none shadow-none">
          <CardHeader>
            <CardDescription className="space-y-4 text-left text-gray-700">
              {/* Barcode */}
              <div className="flex items-center gap-2">
                <FaIdBadge className="text-blue-500" />
                <span>
                  <b>ProductId:</b> {product._id}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FaBarcode className="text-blue-500" />
                <span>
                  <b>Bar code:</b> {product.barcode}
                </span>
              </div>

              {/* Category */}
              <div className="flex items-center gap-2">
                <FaTag className="text-green-500" />
                <span>
                  <b>Category:</b> {product.category}
                </span>
              </div>

              {/* Description */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <FaAlignLeft className="text-purple-500" />
                  <b>Description</b>
                </div>
                <div className="rounded-lg border bg-gray-50 p-3 text-sm text-gray-600 leading-relaxed">
                  {product.description || "No description available"}
                </div>
              </div>

              {/* Purchase Price */}
              <div className="flex items-center gap-2">
                <FaDollarSign className="text-yellow-500" />
                <span>
                  <b>Purchase Price:</b> ৳{product.purchasePrice}
                </span>
              </div>

              {/* Stock */}
              <div className="flex items-center gap-2">
                <FaBoxes className="text-red-500" />
                <span>
                  <b>Stock:</b> {product.stock}
                </span>
              </div>

              {/* Rating */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <FaStar className="text-yellow-400" />
                  <b>Rating</b>
                </div>
                <StarRating rating={product.rating} />
              </div>
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="mt-3 rounded-lg bg-blue-50 p-3 text-sm text-blue-600">
              ℹ️ This product information is read-only.
            </div>
          </CardContent>

          <CardFooter className="flex justify-end">
            <button
              onClick={onClose}
              className="rounded-lg bg-blue-500 px-5 py-2 text-white transition hover:bg-blue-600"
            >
              Close
            </button>
          </CardFooter>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default ViewProductModal;
