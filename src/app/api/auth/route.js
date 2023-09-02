import { SignJWT } from "jose";
import { cookies } from "next/dist/client/components/headers";
import { NextRequest } from "next/server";

export const POST = async (request) => {
    const body = await request.json();
    const secret = new TextEncoder().encode(process.env.jwt_secret);
    const alg = "HS256";

    const jwt = await new SignJWT(body)
      .setProtectedHeader({ alg })
      .setIssuedAt()
      .setExpirationTime("2d")
      .sign(secret);

      cookies().set({
        name: "jwt-token",
        value: `Bearer ${jwt}`,
        secure: true,
        httpOnly: true,
      });

      return NextRequest.json({message: "Token created"});
}