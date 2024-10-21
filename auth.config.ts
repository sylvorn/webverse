import CredentialProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import db from "@/lib/prisma";
import { NextAuthConfig } from "next-auth";
import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";

const authConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID ?? "",
      clientSecret: process.env.AUTH_GOOGLE_SECRET ?? "",
    }),
    CredentialProvider({
      credentials: {
        email: {
          type: "email",
        },
        password: {
          type: "password",
        },
      },
      async authorize(credentials: any) {
        console.log(credentials);
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
          select: {
            fname: true,
            lname: true,
            email: true,
            password: true,
            mobile: true,
            role: true,
          },
        });

        if (user) {
          const comparedPassword = await bcrypt.compare(credentials.password, user.password);
          if (comparedPassword) {
            return user;
          }
          return null;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.role = token.role;
      return session;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
  },
  session: { strategy: "jwt" },
  pages: {
    signIn: "/",
  },
} satisfies NextAuthConfig;

export default authConfig;
