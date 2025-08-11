import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";

const protectedRoutes = ["/dashboard", "/admin", "/profile"];

export async function middleware(request: NextRequest) {
  const session = await auth();
  const isLoggedIn = !!session?.user;
  const role = session?.user.role;
  const { pathname } = request.nextUrl;

  const res = NextResponse.next();

  if (
    !pathname.startsWith("/signin") &&
    !pathname.startsWith("/signup") &&
    !pathname.startsWith("/api") &&
    !pathname.startsWith("/_next") &&
    !pathname.startsWith("/.well-known") && // <-- Tambahkan ini
    !pathname.startsWith("/favicon.ico")
  ) {
    res.cookies.set("last_visited", pathname, { path: "/" });
  }

  if (!isLoggedIn && protectedRoutes.some((route) => pathname.startsWith(route))) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  if (isLoggedIn && role !== "admin" && role !== "editor" && pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (isLoggedIn && role !== "admin" && pathname.startsWith("/admin/user")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (isLoggedIn && (pathname.startsWith("/signin") || pathname.startsWith("/signup"))) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return res;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)"],
};
