import { NextResponse } from "next/server";

export const POST = async (request) => {
  const response = new NextResponse(
    JSON.stringify({
      message: "Logout Successfully",
    })
  );

  response.cookies.set("jwt-token", "", {
    expires: new Date(Date.now())
  })
  return response;
};
