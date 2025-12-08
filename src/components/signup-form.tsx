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
import { Select } from "./ui/select"

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [state,formAction, isPending] = useActionState(registerUser, null);
  useEffect(() =>{
   if(state && !state.success && state.message){
    toast.error(state.message)
   }
  }, [state])
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form action={formAction} className="p-6 md:p-8">
            <FieldGroup>
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Create your account</h1>
              </div>
              <Field>
                <FieldLabel htmlFor="name">Name</FieldLabel>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Israt Jahan"
                  required
                />
               
              </Field>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  name="email"
                  type="text"
                  placeholder="m@example.com"
                  required
                />
               
              </Field>
              <Field>
                <FieldLabel htmlFor="address">Address</FieldLabel>
                <Input
                  id="address"
                  name="address"
                  type="address"
                  placeholder="Rajshahi"
                 
                />
                
              </Field>
              <Field>
                <FieldLabel htmlFor="phone">Phone</FieldLabel>
                <Input
                  id="phone"
                  name="phone"
                  type="phone"
                  placeholder="017********"
                />
              </Field>
              <Field>
                <Field className="grid grid-cols-2 gap-4">
                  <Field>
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <Input id="password" name="password" type="password"  required />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="confirm-password">
                      Confirm Password
                    </FieldLabel>
                    <Input id="confirmPassword"
              name="confirmPassword"
              type="password" required />
                  </Field>
                </Field>
                <FieldDescription>
                  Must be at least 6 characters long.
                </FieldDescription>
              </Field>
              {/* <Select name="role" required >
            <option value="">Select role</option>
            <option value="ADMIN">Admin</option>
            <option value="MANAGER">Manager</option>
            <option value="CASHIER">Cashier</option>
          </Select> */}
              <Field>
                <Button type="submit">Create Account</Button>
              </Field>
             
              <FieldDescription className="text-center">
                Already have an account? <a href="#">Login</a>
              </FieldDescription>
            </FieldGroup>
          </form>
          <div className="bg-muted relative hidden md:block">
            <img
              src="https://i.pinimg.com/1200x/93/8b/51/938b51ebe57c633bc28cdadfeea30ab9.jpg"
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
    
    </div>
  )
}
