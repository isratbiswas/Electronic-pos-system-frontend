/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect, useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Field, FieldLabel, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

import { createOrder } from "@/services/cashier/ordersManagement";
import { ICartItem } from "@/types/order";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function OrderCreateForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [isChangeModalOpen, setIsChangeModalOpen] = useState(false);
  const [items, setItems] = useState<ICartItem[]>([]);
  const [paymentAmount, setPaymentAmount] = useState(0);

  const [newProduct, setNewProduct] = useState("");
  const [newQuantity, setNewQuantity] = useState(1);
  const [newPrice, setNewPrice] = useState(0);

  const [state, formAction, isPending] = useActionState(createOrder, null);
  console.log(state, "state");

  const totalAmount = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const changeAmount = paymentAmount - totalAmount;

  // Show toast & reset form after successful creation
  useEffect(() => {
    console.log("State:", state);
    if (state) {
      if (state?.success) {
        toast.success("Order created successfully!");
        console.log(state, "state-3");
        // Reset all inputs and items
        const timer = setTimeout(() => {
          setItems([]);
          setPaymentAmount(0);
          setNewProduct("");
          setNewQuantity(1);
        }, 0);

        return () => clearTimeout(timer);

        // Optional: reset other input fields in the form
        const form = document.querySelector("form");
        form?.reset();
      } else if (state && !state.success && state.message) {
        toast.error(state.message);
      }
    }
  }, [state]);

  const handleAddItem = () => {
    if (!newProduct || newQuantity <= 0 || newPrice <= 0) {
      toast.error("Please enter valid item details");
      return;
    }

    setItems([
      ...items,
      { product: newProduct, quantity: newQuantity, price: newPrice },
    ]);
    setNewProduct("");
    setNewQuantity(1);
    setNewPrice(0);
  };

  const handleRemoveItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const handleShowChangeModal = () => {
    if (paymentAmount > 0) {
      setIsChangeModalOpen(true);
    }
  };

  return (
    <div
      className={cn(
        "min-h-screen flex items-center justify-center bg-gray-100 p-4",
        className
      )}
      {...props}
    >
      <Card className="w-full max-w-3xl shadow-xl rounded-xl">
        <CardContent className="p-6 md:p-8 space-y-6">
          <h1 className="text-3xl font-bold text-center text-blue-900">
            Create Order
          </h1>

          <form
            action={async (formData: FormData) => {
              formData.append("items", JSON.stringify(items));
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

            {/* Add Item Section */}
            <Card className="bg-white p-4 shadow-inner rounded-lg">
              <h2 className="text-xl font-semibold mb-3 text-gray-700">
                Add Item
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                <Input
                  placeholder="Product"
                  value={newProduct}
                  onChange={(e) => setNewProduct(e.target.value)}
                />
                <Input
                  type="number"
                  placeholder="Quantity"
                  value={newQuantity}
                  onChange={(e) => setNewQuantity(Number(e.target.value))}
                />
                <Input
                  type="number"
                  placeholder="Price"
                  value={newPrice}
                  onChange={(e) => setNewPrice(Number(e.target.value))}
                />
                <Button
                  type="button"
                  onClick={handleAddItem}
                  className="w-full bg-indigo-600  hover:bg-indigo-800"
                >
                  Add
                </Button>
              </div>

              {/* Item List */}
              {items.length > 0 && (
                <ul className="mt-4 divide-y divide-gray-200">
                  {items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex justify-between items-center py-2"
                    >
                      <span className="font-medium">{item.product}</span>
                      <span>
                        {item.quantity} × {item.price} ={" "}
                        {item.quantity * item.price}
                      </span>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleRemoveItem(idx)}
                      >
                        Remove
                      </Button>
                    </li>
                  ))}
                </ul>
              )}
            </Card>

            {/* Summary */}
            <Card className="bg-gray-50 p-4 rounded-lg shadow-inner">
              <div className="flex justify-between text-lg font-medium">
                <span>Total Amount:</span>
                <span>{totalAmount}</span>
              </div>
              <div className="flex justify-between text-lg font-medium mt-2">
                <span>Change:</span>
                <span
                  className={
                    changeAmount < 0 ? "text-red-500" : "text-green-600"
                  }
                >
                  {changeAmount}
                </span>
                <Button
                  type="button"
                  size="sm"
                  onClick={handleShowChangeModal}
                  className="ml-2 bg-indigo-600 hover:bg-indigo-800"
                >
                  Show
                </Button>
              </div>
            </Card>

            <Button
              type="submit"
              className="w-full py-3 text-lg bg-indigo-600 hover:bg-indigo-800"
              disabled={isPending}
            >
              {isPending ? "Processing..." : "Create Order"}
            </Button>
          </form>

          {/* Order Summary */}
          {state?.success && state.data && (
            <Card className="bg-green-50 p-4 mt-4 rounded-lg shadow-inner">
              <h3 className="font-bold text-lg mb-2">Order Summary</h3>
              <p>Customer: {state.data.customerName}</p>
              <p>Total: {state.data.totalAmount}</p>
              <ul className="mt-2 text-sm divide-y divide-gray-200">
                {state.data.items.map((item: any, idx: number) => (
                  <li key={idx} className="py-1">
                    {item.product} - {item.quantity} × {item.price}
                  </li>
                ))}
              </ul>
            </Card>
          )}
        </CardContent>
      </Card>
      {/* Shadcn Modal for Change Amount */}
      <Dialog open={isChangeModalOpen} onOpenChange={setIsChangeModalOpen}>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Change Amount</DialogTitle>
          </DialogHeader>
          <div className="text-center text-2xl font-semibold py-4">
            {changeAmount < 0 ? 0 : changeAmount}
          </div>
          <DialogFooter>
            <Button onClick={() => setIsChangeModalOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
