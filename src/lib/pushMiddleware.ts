// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const user = request.cookies.get("user")?.value;

  // Check if user is missing or not a supervisor
  if (!user || JSON.parse(user).role.toLowerCase() !== "supervisor") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/your-protected-route"], // Adjust as needed
};
