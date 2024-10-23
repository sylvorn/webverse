"use client";
import { useSession } from "next-auth/react";

export default function () {
  const { data: session, status } = useSession();
  if (session) {
    console.log(session);
  }
  return (
    <div>
      Client Dashboard : {session?.user.role} || {session?.user.email}
    </div>
  );
}
