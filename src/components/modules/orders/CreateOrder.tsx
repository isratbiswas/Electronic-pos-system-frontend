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

  const totalAmount = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const changeAmount = paymentAmount - totalAmount;

  useEffect(() => {
    if (state) {
      if (state?.success) {
        toast.success("Order created successfully!");
        const timer = setTimeout(() => {
          setItems([]);
          setPaymentAmount(0);
          setNewProduct("");
          setNewQuantity(1);
          setNewPrice(0);
        }, 0);
        return () => clearTimeout(timer);
      } else if (!state.success && state.message) {
        toast.error(state.message);
      }
    }
  }, [state]);

  const handleAddItem = () => {
    if (!newProduct || newQuantity <= 0 || newPrice <= 0) {
      toast.error("Invalid item details");
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

  const handleRemoveItem = (index: number) =>
    setItems(items.filter((_, i) => i !== index));

  return (
    <div
      className={cn(
        "min-h-screen w-full bg-gray-100 p-3 sm:p-6 md:p-8",
        className
      )}
      {...props}
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* ================= LEFT: ORDER FORM ================= */}
        <Card className="lg:col-span-2 w-full shadow-xl rounded-xl">
          <CardContent className="p-4 sm:p-6 space-y-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-blue-900">
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
              <FieldGroup className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field>
                  <FieldLabel>Customer ID</FieldLabel>
                  <Input name="customerId" required />
                </Field>
                <Field>
                  <FieldLabel>Customer Name</FieldLabel>
                  <Input name="customerName" required />
                </Field>
                <Field>
                  <FieldLabel>Barcode</FieldLabel>
                  <Input name="barcode" />
                </Field>
                <Field>
                  <FieldLabel>Payment Amount</FieldLabel>
                  <Input
                    type="number"
                    value={paymentAmount}
                    onChange={(e) => setPaymentAmount(Number(e.target.value))}
                  />
                </Field>
              </FieldGroup>

              {/* Add Item */}
              <Card className="p-4 bg-white shadow-inner">
                <h2 className="font-semibold mb-3">Add Item</h2>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                  <Input
                    placeholder="Product"
                    value={newProduct}
                    onChange={(e) => setNewProduct(e.target.value)}
                  />
                  <Input
                    type="number"
                    placeholder="Qty"
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
                    className="bg-indigo-500 hover:bg-indigo-800"
                  >
                    Add
                  </Button>
                </div>

                {/* Item List */}
                {items.length > 0 && (
                  <ul className="mt-4 divide-y">
                    {items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex flex-col sm:flex-row justify-between py-2 gap-2"
                      >
                        <span>{item.product}</span>
                        <span>
                          {item.quantity} × {item.price} ={" "}
                          {item.quantity * item.price}
                        </span>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => handleRemoveItem(idx)}
                        >
                          Remove
                        </Button>
                      </li>
                    ))}
                  </ul>
                )}
              </Card>

              <Button
                type="submit"
                disabled={isPending}
                className="w-full py-3 text-lg bg-indigo-500 hover:bg-indigo-800"
              >
                {isPending ? "Processing..." : "Create Order"}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* ================= RIGHT: SUMMARY ================= */}
        <div className="w-full space-y-4">
          {/* Order Summary */}
          {state?.success && state.data && (
            <Card className="p-4 shadow-inner">
              <h3 className="font-bold text-lg  text-indigo-400 mt-9">
                Order Summary
              </h3>
              <p className="text-md font-semibold text-gray-800">
                Customer : {state.data.customerName}
              </p>
              <p className="text-md font-bold text-gray-800">
                Total: {state.data.totalAmount}
              </p>
              <ul className="mt-2 text-sm divide-y divide-gray-200 w-full">
                {state.data.items.map((item: any, idx: number) => (
                  <li key={idx} className="py-1 text-md text-gray-600">
                    {item.product} - {item.quantity} × {item.price}
                  </li>
                ))}
              </ul>
            </Card>
          )}
          <Card className="p-4 shadow-inner">
            <h2 className="font-semibold text-lg text-green-600">Change</h2>
            <p
              className={cn(
                "text-2xl font-bold",
                changeAmount < 0 ? "text-red-500" : "text-green-600"
              )}
            >
              {changeAmount < 0 ? 0 : changeAmount}
            </p>
            <Button
              className="w-full mt-3 bg-indigo-600"
              onClick={() => setIsChangeModalOpen(true)}
            >
              Show Change
            </Button>
          </Card>
        </div>
      </div>

      {/* Change Modal */}
      <Dialog open={isChangeModalOpen} onOpenChange={setIsChangeModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-indigo-500">Change Amount</DialogTitle>
          </DialogHeader>
          <div className="text-center text-3xl font-bold py-6 text-green-600">
            {changeAmount < 0 ? 0 : changeAmount}
          </div>
          <DialogFooter>
            <Button
              className="bg-slate-500"
              onClick={() => setIsChangeModalOpen(false)}
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
