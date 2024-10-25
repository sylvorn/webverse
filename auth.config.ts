import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { NextAuthConfig } from "next-auth";
import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";

const authConfig: NextAuthConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID ?? "",
      clientSecret: process.env.AUTH_GOOGLE_SECRET ?? "",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        if (!credentials?.email || !credentials?.password) return null;

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
          select: {
            id: true,
            fname: true,
            lname: true,
            email: true,
            password: true,
            role: true,
            isVerfiy: true,
          },
        });

        if (user) {
          if (user.isVerfiy) {
            const isPasswordValid = await bcrypt.compare(credentials.password, user.password);
            if (isPasswordValid) {
              return {
                id: user.id,
                fname: user.fname,
                lname: user.lname,
                email: user.email,
                role: user.role,
              };
            } else {
              throw new Error("InvalidPassword");
            }
          } else {
            throw new Error("UserNotVerify");
          }
        } else {
          throw new Error("UserNotFound");
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log(user);
      if (account?.provider === "google") {
        const existingUser = await prisma.user.findUnique({
          where: {
            email: user.email!,
          },
        });

        if (!existingUser) {
          const hashedPassword = await bcrypt.hash(Math.random().toString(36).slice(-8), 10);
          const newUser = await prisma.user.create({
            data: {
              email: user.email!,
              fname: user.name?.split(" ")[0] ?? "",
              lname: user.name?.split(" ").slice(1).join(" ") ?? "",
              role: "Client",
              password: hashedPassword,
              isVerfiy: true,
            },
          });

          user.id = newUser.id;
          user.fname = newUser.fname || "";
          user.lname = newUser.lname || "";
          user.role = newUser.role;
        } else {
          user.id = existingUser.id;
          user.fname = existingUser.fname || "";
          user.lname = existingUser.lname || "";
          user.role = existingUser.role;
        }
      }
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id || "";
        token.fname = user.fname;
        token.lname = user.lname;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.fname = token.fname;
      session.user.lname = token.lname;
      session.user.role = token.role;
      return session;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
  },
  session: { strategy: "jwt" },
  pages: {
    signIn: "/signin",
    newUser: "/onboard",
  },
};

export default authConfig;
