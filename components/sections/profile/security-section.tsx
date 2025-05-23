import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import UpdateSecurity from "@/actions/update-security";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { useState, useTransition } from "react";
import FormSuccess from "../auth/form-success";
import { Input } from "@/components/ui/input";
import { securitySchema } from "@/schemas";
import FormError from "../auth/form-error";
import { useForm } from "react-hook-form";
import * as z from "zod";

export default function SecuritySection() {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [loading, startTranisiton] = useTransition();
  const securityForm = useForm<z.infer<typeof securitySchema>>({
    resolver: zodResolver(securitySchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  function onSecuritySubmit(values: z.infer<typeof securitySchema>) {
    setError("");
    setSuccess("");
    startTranisiton(async () => {
      const res = await UpdateSecurity(values);
      if (res.error) setError(res.error);
      if (res.success) setSuccess(res.success);
    });
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>Security Settings</CardTitle>
        <CardDescription>Manage your account security and password.</CardDescription>
      </CardHeader>
      <Form {...securityForm}>
        <form onSubmit={securityForm.handleSubmit(onSecuritySubmit)}>
          <CardContent className="space-y-4">
            <FormField
              disabled={loading}
              control={securityForm.control}
              name="currentPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Current Password</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              disabled={loading}
              control={securityForm.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New Password</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              disabled={loading}
              control={securityForm.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm New Password</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormError message={error} />
            <FormSuccess message={success} />
          </CardContent>
          <CardFooter>
            <Button disabled={loading} type="submit">
              Update Password
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
