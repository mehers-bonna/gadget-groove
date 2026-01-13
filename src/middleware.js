import { NextResponse } from 'next/server';

export function middleware(request) {
  return NextResponse.next();
}

// Shudhu dashboard route-e protection thakbe
export const config = {
  matcher: ['/dashboard/:path*'],
};