// types/next-auth.d.ts

import NextAuth, { DefaultSession, DefaultUser } from "next-auth";
import { JWT } from "next-auth/jwt";

// Extend the User interface to include the role
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: string;
      fname: string;
      lname: string;
      email: string;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    fname: string;
    lname: string;
    email: string;
    role: string;
  }
}

// Extend the JWT interface to include the role
declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    fname: string;
    lname: string;
    email: string;
    role: string;
  }
}
