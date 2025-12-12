/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import Modal from "@/components/ui/Modal";
import { revalidate } from "@/lib/revalidate";
import {
  getProducts,
  updateProducts,
} from "@/services/admin/productManagement";
import { IProduct } from "@/types/product";
import { useState } from "react";
import { toast } from "sonner";
interface Props {
  product: IProduct | null;
  onClose: () => void;
}

const EditProductModal = ({ product, onClose }: Props) => {
  const [form, setForm] = useState<Partial<IProduct>>(product || {});
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(false);
  if (!product || !form) return null;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
  };
  const handleSubmit = async () => {
    console.log("updated Data", form);
    if (!product._id) return;
    try {
      setLoading(true);
      const result = await updateProducts(product._id, form);
      if (result.success) {
        toast.success(result.message || "Product updated successfully");
        const updatedList = await getProducts();
        // setProducts(updatedList.data)
        await revalidate(updatedList);
        onClose();
      } else {
        toast.error(result.message || "Failed to update product");
      }
    } catch (error: any) {
      toast.error(error.message || "Something went wrong");
    }
  };
  return (
    <Dialog open={!!product} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Edit Product</DialogTitle>
        </DialogHeader>

        <Card>
          <CardHeader className="space-y-3">
            <Input
              placeholder="Product Name"
              name="name"
              value={form.name || ""}
              onChange={handleChange}
            />
            <Input
              type="number"
              placeholder="Purchase Price"
              name="purchasePrice"
              value={form.purchasePrice ?? ""}
              onChange={handleChange}
            />
            <Input
              type="number"
              placeholder="Stock"
              name="stock"
              value={form.stock ?? ""}
              onChange={handleChange}
            />
          </CardHeader>

          <CardContent className="text-sm text-gray-500">
            Update product information carefully.
          </CardContent>

          <CardFooter className="flex justify-end gap-2">
            <Button variant="secondary" onClick={onClose} disabled={loading}>
              Cancel
            </Button>
            <Button onClick={handleSubmit} disabled={loading}>
              {loading ? "Updating..." : "Update Product"}
            </Button>
          </CardFooter>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default EditProductModal;
