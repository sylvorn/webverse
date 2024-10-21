// middleware.ts
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.AUTH_SECRET });

  // If no token is present, redirect to login page
  if (!token) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  // Check if user has the required role
  const { role } = token as { role: string };

  // Define the paths for admin and client
  const adminPath = "/admin";
  const clientPath = "/client";

  // For admin routes, ensure the user has the 'admin' role
  if (req.nextUrl.pathname.startsWith(adminPath) && role !== "Admin") {
    return NextResponse.redirect(new URL("/client/dashboard", req.url));
  }

  // For client routes, ensure the user has the 'client' role
  if (req.nextUrl.pathname.startsWith(clientPath) && role !== "Client") {
    return NextResponse.redirect(new URL("/admin/dashboard", req.url));
  }

  // Allow access if the user role matches the route
  return NextResponse.next();
}

// Apply middleware to specific routes
export const config = {
  matcher: ["/admin/:path*", "/client/:path*"],
};
