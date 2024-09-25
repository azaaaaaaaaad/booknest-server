import { NextResponse } from "next/server";

const allowedOrigins = ["http://localhost:3000", "https://booknest-self.vercel.app"]; // Adjust for production

export function middleware(request) {
  const origin = request.headers.get("origin") ?? "";
  const isPreflight = request.method === "OPTIONS";

  // Handle preflight requests
  if (isPreflight) {
    const response = NextResponse.next();
    response.headers.set("Access-Control-Allow-Origin", origin);
    response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
    return response;
  }

  // Handle normal requests
  const response = NextResponse.next();
  if (allowedOrigins.includes(origin)) {
    response.headers.set("Access-Control-Allow-Origin", origin);
  }

  return response;
}

export const config = {
  matcher: "/api/:path*",
};
