import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useState, useTransition } from "react";
import { notificationSchema } from "@/schemas";
import FormSuccess from "../auth/form-success";
import { Label } from "@/components/ui/label";
import FormError from "../auth/form-error";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { UpdateNotification } from "@/actions/update-notification";

interface NotificationSectionProps {
  marketing: boolean;
  security: boolean;
  newsletter: boolean;
}

export default function NotificationSection({ marketing, security, newsletter }: NotificationSectionProps) {
  const [success, setSuccess] = useState<string | undefined>("");
  const [error, setError] = useState<string | undefined>("");
  const [loading, startTransition] = useTransition();
  const notificationForm = useForm<z.infer<typeof notificationSchema>>({
    resolver: zodResolver(notificationSchema),
    defaultValues: {
      marketing: marketing,
      security: security,
      newsletter: newsletter,
    },
  });

  function onNotificationSubmit(values: z.infer<typeof notificationSchema>) {
    setSuccess("");
    setError("");
    startTransition(async () => {
      const res = await UpdateNotification(values);
      if (res.error) setError(res.error);
      if (res.success) setSuccess(res.success);
    });
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>Manage your email notification preferences.</CardDescription>
      </CardHeader>
      <Form {...notificationForm}>
        <form onSubmit={notificationForm.handleSubmit(onNotificationSubmit)}>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <Label>Email Notifications</Label>
              {[
                { id: "marketing", label: "Product Updates", description: "Receive emails about new features and improvements." },
                { id: "security", label: "Security Alerts", description: "Get notified about important security updates." },
                { id: "newsletter", label: "Newsletter", description: "Subscribe to our monthly newsletter." },
              ].map(({ id, label, description }) => (
                <FormField
                  disabled={loading}
                  key={id}
                  control={notificationForm.control}
                  name={id as "marketing" | "security" | "newsletter"}
                  render={({ field }) => (
                    <FormItem className="flex items-center justify-between space-x-2">
                      <div className="space-y-0.5">
                        <FormLabel>{label}</FormLabel>
                        <FormDescription>{description}</FormDescription>
                      </div>
                      <FormControl>
                        <Switch checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              ))}
            </div>

            <FormSuccess message={success} />
            <FormError message={error} />
          </CardContent>
          <CardFooter>
            <Button type="submit">Update Preferences</Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
