import { authMiddleware } from "@clerk/nextjs"

export default authMiddleware({
	publicRoutes: ["/"],
})

export const config = {
	matcher: [
		"/",
		"/dashboard",
		"/(api)(.*)",
		"/(sign-in)(.*)",
		"/(sign-up)(.*)",
	],
}
