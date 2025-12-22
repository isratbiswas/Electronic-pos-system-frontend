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
      className={cn(
        "min-h-screen flex items-center justify-center bg-background",
        className
      )}
      {...props}
    >
      <Card className="w-full max-w-2xl shadow-lg">
        <CardContent className="p-6 md:p-8">
          <form action={formAction} className="space-y-6">
            {/* Header */}
            <div className="text-center space-y-1">
              <h1 className="text-2xl font-bold">Create Product</h1>
              <p className="text-sm text-muted-foreground">
                Add a new product to inventory
              </p>
            </div>

            <FieldGroup>
              {/* Product Name */}
              <Field>
                <FieldLabel htmlFor="name">Product Name</FieldLabel>
                <Input
                  id="name"
                  name="name"
                  placeholder="Electric Device"
                  required
                />
              </Field>

              {/* Category */}
              <Field>
                <FieldLabel htmlFor="category">Category</FieldLabel>
                <Input
                  id="category"
                  name="category"
                  placeholder="Electronics"
                  required
                />
              </Field>

              {/* Description */}
              <Field>
                <FieldLabel htmlFor="description">Description</FieldLabel>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Write product details, features, usage..."
                  rows={4}
                  required
                />
              </Field>

              {/* Purchase Price */}
              <Field>
                <FieldLabel htmlFor="purchasePrice">Purchase Price</FieldLabel>
                <Input
                  id="purchasePrice"
                  name="purchasePrice"
                  type="number"
                  placeholder="1000"
                  required
                />
              </Field>

              {/* Stock */}
              <Field>
                <FieldLabel htmlFor="stock">Stock</FieldLabel>
                <Input
                  id="stock"
                  name="stock"
                  type="number"
                  placeholder="10"
                  defaultValue={0}
                />
              </Field>

              {/* Availability */}
              <Field>
                <FieldLabel htmlFor="productAvailable">
                  Product Availability
                </FieldLabel>
                <select
                  id="productAvailable"
                  name="productAvailable"
                  className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  defaultValue="IN_STOCK"
                >
                  <option value="IN_STOCK">In Stock</option>
                  <option value="OUT_OF_STOCK">Out of Stock</option>
                  <option value="LOW_STOCK">Low Stock</option>
                </select>
              </Field>

              {/* Rating */}
              <Field>
                <FieldLabel>Rating</FieldLabel>

                <input type="hidden" name="rating" value={rating} />

                <Select
                  defaultValue="5"
                  onValueChange={(value) => setRating(value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select rating" />
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
                <FieldLabel htmlFor="barcode">Barcode</FieldLabel>
                <Input id="barcode" name="barcode" placeholder="1234567890" />
              </Field>

              <Button type="submit" className="w-full" disabled={isPending}>
                {isPending ? "Adding..." : "Add Product"}
              </Button>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
