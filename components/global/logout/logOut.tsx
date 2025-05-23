"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LogOut, Loader2 } from "lucide-react";
import { signOut } from "next-auth/react";

export default function LogoutPage() {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    setIsLoggingOut(true);
    signOut();
    setIsLoggingOut(false);
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <div className="flex items-center justify-center w-full h-full">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Logout Confirmation</CardTitle>
          <CardDescription className="text-center">Are you sure you want to log out?</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          <LogOut className="w-16 h-16 text-gray-400" />
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={handleCancel} disabled={isLoggingOut}>
            Cancel
          </Button>
          <Button variant="destructive" onClick={handleLogout} disabled={isLoggingOut}>
            {isLoggingOut ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Logging out...
              </>
            ) : (
              "Logout"
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
