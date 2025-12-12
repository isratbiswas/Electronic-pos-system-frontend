/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect, startTransition, useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Field, FieldLabel, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

import { createOrder } from "@/services/cashier/ordersManagement";
import { ICartItem } from "@/types/order";

export function OrderCreateForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [items, setItems] = useState<ICartItem[]>([]);
  const [paymentAmount, setPaymentAmount] = useState(0);

  // Item fields
  const [newProduct, setNewProduct] = useState("");
  const [newQuantity, setNewQuantity] = useState(1);
  const [newPrice, setNewPrice] = useState(0);

  const [state, formAction, isPending] = useActionState(createOrder, null);

  const [productId, setProductId] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  // Total & Change Auto Calculated
  const totalAmount = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  // console.log(totalAmount, items, "mira");
  const changeAmount = paymentAmount - totalAmount;
  console.log(changeAmount, "eorejr");
  useEffect(() => {
    if (state && !state.success && state.message) {
      toast.error(state.message);
    }
  }, [state]);
  // Add Item to List
  const handleAddItem = () => {
    // if (!newProduct || newQuantity <= 0 || newPrice <= 0) {
    //   toast.error("Invalid item details!");
    //   return;
    // }
    // toast.success("Order created Successfully");
    // return;
    setItems([
      ...items,
      { product: newProduct, quantity: newQuantity, price: newPrice },
    ]);
    setNewProduct("");
    setNewQuantity(1);
    setNewPrice(0);
  };

  // Submit Order
  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   if (!customerId || !customerName) {
  //     toast.error("Customer details missing!");
  //     return;
  //   }

  //   if (items.length === 0) {
  //     toast.error("Add at least one item");
  //     return;
  //   }
  // };

  return (
    <div
      className={cn(
        "min-h-screen flex items-center justify-center bg-background p-4",
        className
      )}
      {...props}
    >
      <Card className="w-full max-w-2xl shadow-lg">
        <CardContent className="p-6 md:p-8 space-y-6">
          <h1 className="text-2xl font-bold text-center">Create Order</h1>
          <form
            action={async (formData: FormData) => {
              // Build items array manually
              const items = [
                {
                  product: productId,
                  quantity: Number(quantity),
                  price: Number(price),
                },
              ];

              // Add items into FormData as JSON
              formData.append("items", JSON.stringify(items));

              // Call server action
              await formAction(formData);
            }}
            className="space-y-6"
          >
            {/* Customer Info */}
            <FieldGroup className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field>
                <FieldLabel htmlFor="customerId">Customer ID</FieldLabel>
                <Input
                  id="customerId"
                  name="customerId"
                  placeholder="Customer ID"
                  required
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="customerName">Customer Name</FieldLabel>
                <Input
                  id="customerName"
                  name="customerName"
                  placeholder="Customer Name"
                  required
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="barcode">Barcode</FieldLabel>
                <Input id="barcode" name="barcode" placeholder="1234567890" />
              </Field>

              <Field>
                <FieldLabel htmlFor="paymentAmount">Payment Amount</FieldLabel>
                <Input
                  id="paymentAmount"
                  name="paymentAmount"
                  type="number"
                  value={paymentAmount}
                  onChange={(e) => setPaymentAmount(Number(e.target.value))}
                />
              </Field>
            </FieldGroup>

            {/* Add Item */}
            <Card className="p-4 bg-gray-50">
              <h2 className="font-semibold mb-3">Add Item</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                <Field>
                  <FieldLabel htmlFor="productId">Product ID</FieldLabel>
                  <Input
                    id="productId"
                    placeholder="Product ID"
                    value={productId}
                    onChange={(e) => setProductId(e.target.value)}
                    required
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="quantity">Quantity</FieldLabel>
                  <Input
                    id="quantity"
                    type="number"
                    placeholder="Quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="price">Price</FieldLabel>
                  <Input
                    id="price"
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </Field>
                <Button type="button" className="mt-8" onClick={handleAddItem}>
                  Add Item
                </Button>
              </div>
              {/* Show Items */}
              {items.length > 0 && (
                <ul className="mt-3 space-y-1">
                  {items.map((item, idx) => (
                    <li key={idx} className="flex justify-between text-sm">
                      <span>{productId}</span>
                      <span>
                        {quantity} × {price} ={" "}
                        {Number(quantity) * Number(price)}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </Card>

            {/* Summary */}
            <div className="space-y-1 font-medium">
              <Field>
                <FieldLabel htmlFor="price">Total Amount:</FieldLabel>
                {/* <Input
                  id="totalAmount"
                  name="totalAmount"
                  type="number"
                  defaultValue={0}
                /> */}
                {price} * {quantity}= {Number(quantity) * Number(price)}
              </Field>
              <Field>
                <FieldLabel htmlFor="changeAmount">Change Amount:</FieldLabel>
                {/* <Input
                  id="changeAmount"
                  name="changeAmount"
                  type="number"
                  className="none"
                  defaultValue={0}
                /> */}
                {paymentAmount}-{price} * {quantity}
              </Field>
            </div>

            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? "Processing..." : "Create Order"}
            </Button>
          </form>
          {/* Order Created Summary */}
          {state?.success && state.data && (
            <Card className="bg-green-50 p-4 mt-4">
              <h3 className="font-bold">Order Summary</h3>
              <p>Customer: {state.data.customerName}</p>
              <p>Total: {state.data.totalAmount}</p>

              <ul className="mt-2 text-sm">
                {state.data.items.map((item: any, idx: number) => (
                  <li key={idx}>
                    {item.product} - {quantity} × {price}
                  </li>
                ))}
              </ul>
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
