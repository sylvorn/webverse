import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.AUTH_SECRET });
  if (!token) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  const { role } = token as { role: string };
  const adminPath = "/admin";
  const clientPath = "/client";

  if (req.nextUrl.pathname.startsWith(adminPath) && role !== "Admin") {
    return NextResponse.redirect(new URL("/client/dashboard", req.url));
  }

  if (req.nextUrl.pathname.startsWith(clientPath) && role !== "Client") {
    return NextResponse.redirect(new URL("/admin/dashboard", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/client/:path*"],
};
