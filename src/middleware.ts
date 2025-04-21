import { NextRequest, NextResponse } from "next/server";
import { authConfig } from "./auth.congig";
import NextAuth from "next-auth";

const { auth } = NextAuth(authConfig);

const middleware = async (request: NextRequest) => {
    const { pathname } = request.nextUrl;
    const session = await auth();
    const isAuthenticated = !!session?.user;
    console.log(isAuthenticated, pathname);

    const publicPaths = ["/", "/contact", "/login", "/signup"];

    if (!isAuthenticated && !publicPaths.includes(pathname)) {
        return NextResponse.redirect(new URL("/login", request.url));
    }
    return NextResponse.next();
};

export const config = {
    matcher: [
        "/create-task"
    ]
}

export default middleware;
