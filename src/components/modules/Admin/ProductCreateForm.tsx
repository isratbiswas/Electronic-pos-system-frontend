

"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useActionState, useEffect } from "react"
import { registerUser } from "@/services/auth/registerUser"
import { toast } from "sonner"
import { createProduct } from "@/services/admin/productManagement"


export function ProductCreateForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [state,formAction, isPending] = useActionState(createProduct, null);
  useEffect(() =>{
   if(state && !state.success && state.message){
    toast.error(state.message)
   }
  }, [state])
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
            <div className="text-center">
              <h1 className="text-2xl font-bold">Create Product</h1>
              <p className="text-sm text-muted-foreground">
                Add a new product to inventory
              </p>
            </div>

            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name">Product Name</FieldLabel>
                <Input
                  id="name"
                  name="name"
                  placeholder="Electric Device"
                  required
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="category">Category</FieldLabel>
                <Input
                  id="category"
                  name="category"
                  placeholder="Electronics"
                  required
                />
              </Field>

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
                  <option value="DISCONTINUED">Low Stock</option>
                </select>
              </Field>

              <Field>
                <FieldLabel htmlFor="barcode">Barcode</FieldLabel>
                <Input
                  id="barcode"
                  name="barcode"
                  placeholder="1234567890"
                />
              </Field>

              <Button
                type="submit"
                className="w-full"
                disabled={isPending}
              >
                {isPending ? "Adding..." : "Add Product"}
              </Button>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}