"use client";

import VerifyAccountContent from "@/sections/auth/verify-user/verify-account-content";
import { Suspense } from "react";

export default function VerifyAccountPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifyAccountContent />
    </Suspense>
  );
}
