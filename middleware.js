// export function middleware(request) {
//   console.log(request);

import { auth } from "@/app/_lib/auth";

//   return NextResponse.redirect(new URL("/about", request.url));
// }

export const middleware = auth;

export const config = {
  matcher: ["/account"],
};
