"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useActionState, useEffect, useState } from "react";
import { toast } from "sonner";
import { createProduct } from "@/services/admin/productManagement";
import { Textarea } from "@/components/ui/textarea";

export function ProductCreateForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [state, formAction, isPending] = useActionState(createProduct, null);
  const [rating, setRating] = useState("5");

  useEffect(() => {
    if (!state) return;

    if (state.success) {
      toast.success("Product created successfully!");
    } else if (state.message) {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <div
      className={cn("w-full px-4 md:px-10 py-6 bg-background", className)}
      {...props}
    >
      <Card className="w-full shadow-md">
        <CardContent className="p-6 md:p-10">
          <form action={formAction} className="space-y-8">
            {/* Header */}
            <div className="space-y-1">
              <h1 className="text-3xl font-bold text-blue-900">
                Create Product
              </h1>
              <p className="text-sm text-muted-foreground">
                Add a new product to inventory
              </p>
            </div>

            {/* Form Grid */}
            <FieldGroup className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Product Name */}
              <Field>
                <FieldLabel htmlFor="name" className="text-gray-700">
                  Product Name
                </FieldLabel>
                <Input id="name" name="name" required />
              </Field>

              {/* Category */}
              <Field>
                <FieldLabel htmlFor="category" className="text-gray-700">
                  Category
                </FieldLabel>
                <Input id="category" name="category" required />
              </Field>

              {/* Description (Full Width) */}
              <Field className="md:col-span-2">
                <FieldLabel htmlFor="description" className="text-gray-700">
                  Description
                </FieldLabel>
                <Textarea
                  id="description"
                  name="description"
                  rows={4}
                  required
                />
              </Field>

              {/* Purchase Price */}
              <Field>
                <FieldLabel htmlFor="purchasePrice" className="text-gray-700">
                  Purchase Price
                </FieldLabel>
                <Input
                  id="purchasePrice"
                  name="purchasePrice"
                  type="number"
                  required
                />
              </Field>

              {/* Stock */}
              <Field>
                <FieldLabel htmlFor="stock" className="text-gray-700">
                  Stock
                </FieldLabel>
                <Input id="stock" name="stock" type="number" defaultValue={0} />
              </Field>

              {/* Availability */}
              <Field>
                <FieldLabel className="text-gray-700">
                  Product Availability
                </FieldLabel>
                <select
                  name="productAvailable"
                  defaultValue="IN_STOCK"
                  className="w-full rounded-md border px-3 py-2 text-sm"
                >
                  <option value="IN_STOCK">In Stock</option>
                  <option value="OUT_OF_STOCK">Out of Stock</option>
                  <option value="LOW_STOCK">Low Stock</option>
                </select>
              </Field>

              {/* Rating */}
              <Field>
                <FieldLabel className="text-gray-700">Rating</FieldLabel>
                <input type="hidden" name="rating" value={rating} />
                <Select defaultValue="5" onValueChange={setRating}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">⭐ 1 Star</SelectItem>
                    <SelectItem value="2">⭐⭐ 2 Stars</SelectItem>
                    <SelectItem value="3">⭐⭐⭐ 3 Stars</SelectItem>
                    <SelectItem value="4">⭐⭐⭐⭐ 4 Stars</SelectItem>
                    <SelectItem value="5">⭐⭐⭐⭐⭐ 5 Stars</SelectItem>
                  </SelectContent>
                </Select>
              </Field>

              {/* Barcode */}
              <Field>
                <FieldLabel htmlFor="barcode" className="text-gray-700">
                  Barcode
                </FieldLabel>
                <Input id="barcode" name="barcode" />
              </Field>

              {/* Submit Button (Full Width) */}
              <div className="md:col-span-2">
                <Button
                  type="submit"
                  className="w-full bg-indigo-500 hover:bg-indigo-800"
                  disabled={isPending}
                >
                  {isPending ? "Adding..." : "Add Product"}
                </Button>
              </div>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
