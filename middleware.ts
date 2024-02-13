import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/") {
    const url = request.nextUrl.clone();

    url.pathname = "/foo/folder";
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}
