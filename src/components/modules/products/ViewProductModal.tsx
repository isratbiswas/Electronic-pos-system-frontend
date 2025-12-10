"use client";

import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { IProduct } from "@/types/product";
import { FaBarcode, FaTag, FaDollarSign, FaBoxes } from "react-icons/fa";

interface Props {
  product: IProduct;
  onClose: () => void;
}

const ViewProductModal = ({ product, onClose }: Props) => {
  return (
    <Dialog open={!!product} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>{product.name}</DialogTitle>
        </DialogHeader>

        <Card>
          <CardHeader>
            <CardDescription className="space-y-2 text-left text-gray-700">
              <p className="flex items-center gap-2">
                <FaBarcode className="text-blue-500" /> <span><b>Bar code:</b> {product.barcode}</span>
              </p>
              <p className="flex items-center gap-2">
                <FaTag className="text-green-500" /> <span><b>Category:</b> {product.category}</span>
              </p>
              <p className="flex items-center gap-2">
                <FaDollarSign className="text-yellow-500" /> <span><b>Purchase Price:</b> ৳{product.purchasePrice}</span>
              </p>
              <p className="flex items-center gap-2">
                <FaBoxes className="text-red-500" /> <span><b>Stock:</b> {product.stock}</span>
              </p>
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="mt-2 bg-gray-50 rounded-lg p-3 shadow-inner text-sm text-gray-500">
              This is additional information about the product.
            </div>
          </CardContent>

          <CardFooter>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={onClose}
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
