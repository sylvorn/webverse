"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { newUserSchema } from "@/schemas";
import FormError from "@/components/sections/auth/form-error";
import FormSuccess from "@/components/sections/auth/form-success";
import newUser from "@/actions/new-user";
import { useRouter } from "next/navigation";

type UserFormData = z.infer<typeof newUserSchema>;

export default function NewUserForm() {
  const router = useRouter();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSucess] = useState<string | undefined>("");
  const [loading, startTransition] = useTransition();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormData>({
    resolver: zodResolver(newUserSchema),
  });

  const onSubmit = async (data: UserFormData) => {
    setError("");
    setSucess("");
    startTransition(async () => {
      const res = await newUser(data);
      if (res.error) setError(res.error);
      if (res.success) {
        setSucess(res.success);
        router.push("/admin/users");
      }
    });
  };

  return (
    <Card className="w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" {...register("firstName")} disabled={loading} />
              {errors.firstName && <p className="text-sm text-red-500">{errors.firstName.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" {...register("lastName")} disabled={loading} />
              {errors.lastName && <p className="text-sm text-red-500">{errors.lastName.message}</p>}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" {...register("email")} disabled={loading} />
            {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="mobile">Mobile</Label>
            <Input id="mobile" {...register("mobile")} disabled={loading} />
            {errors.mobile && <p className="text-sm text-red-500">{errors.mobile.message}</p>}
          </div>
          <div className="space-y-2">
            <Label>Role</Label>
            <RadioGroup defaultValue="Client" disabled={loading}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Admin" id="admin" {...register("role")} />
                <Label htmlFor="Admin">Admin</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Client" id="client" {...register("role")} />
                <Label htmlFor="Client">Client</Label>
              </div>
            </RadioGroup>
            {errors.role && <p className="text-sm text-red-500">{errors.role.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" {...register("password")} disabled={loading} />
            {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Creating..." : "Create User"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
