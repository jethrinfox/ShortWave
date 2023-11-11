import { authMiddleware } from "@clerk/nextjs"
import { NextResponse } from "next/server"

export default authMiddleware({
	publicRoutes: ["/"],
	afterAuth(auth, req, evt) {
		if (auth.userId && req.nextUrl.pathname !== "/dashboard") {
			const orgSelection = new URL("/dashboard", req.url)
			return NextResponse.redirect(orgSelection)
		}
	},
})

export const config = {
	matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/"],
}
