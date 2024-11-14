"use client";

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { verifyUserSchema } from "@/schemas";
import { useForm } from "react-hook-form";
import { z } from "zod";
import FormError from "../form-error";
import { useTransition, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import verifyUser from "@/actions/verify-user";

export default function verifyUserForm() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email") ?? "";
  const [error, setError] = useState<string | undefined>("");
  const [loading, startTransition] = useTransition();
  const router = useRouter();
  const form = useForm<z.infer<typeof verifyUserSchema>>({
    resolver: zodResolver(verifyUserSchema),
    defaultValues: {
      otp: "",
      email,
    },
  });

  function onSubmit(data: z.infer<typeof verifyUserSchema>) {
    setError("");

    startTransition(() => {
      verifyUser(data).then((data) => {
        setError(data.error);
        if (data.success) router.push(`/signin`);
      });
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-2 grid grid-cols-1">
        <FormField
          disabled={loading}
          control={form.control}
          name="otp"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <InputOTP maxLength={6} {...field}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormError message={error} />

        <Button disabled={loading} className="ml-auto w-full" type="submit">
          Verify OTP
        </Button>
      </form>
    </Form>
  );
}
