import { jwtVerify } from "jose";
import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export const middleware = async (request) => {
  const { pathname } = request.nextUrl;

  // to check the current path মানে বর্তমানে কোন path এ আছে..
  const isPath = (path) => pathname.startsWith(path);

  try {
    let cookie = request.cookies.get("jwt-token")?.value;

    //  যদি cookie না থাকে বা, cookie যদি “Bearer” লেখা দিয়ে না শুরু হয়, সেটি চেক করে Error throw করা যায়
    if (!cookie || !cookie.startsWith("Bearer")) {
      throw new Error("Invalid token");
    }
    const secret = new TextEncoder().encode(process.env.jwt_secret);
    await jwtVerify(cookie.split("Bearer ")[1], secret);

    // যদি কোন user logged-in থাকে এবং সে যদি login বা signup এ পুনরায় যেতে চায়, তবে তাকে "/" মানে HomePage এ redirect করে দিয়ে দিবে
    if (isPath("/login") || isPath("/signup")) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    return NextResponse.next();
  } catch (error) {
    console.log(error.message);
    
    // login বা signup এর ক্ষেত্রে যদি কোন error হয়ে যায়, তাহলে login বা signup করতে না পারার কারনে next() কে call করে দিতে হবে
    if (isPath("/login") || isPath("/signup")) {
      return NextResponse.next();
    }
    return NextResponse.redirect(
      new URL(`/login?redirectURL=${pathname}`, request.url)
    );
  }
};


// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/profile/:path*",
    "/dashboard/:path*",
    "/login/:path*",
    "/signup/:path*",
  ],
};
