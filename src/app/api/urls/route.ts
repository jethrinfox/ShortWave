import { db } from "@/db"
import { shortUrls } from "@/db/schema"
import { auth } from "@clerk/nextjs"
import { eq } from "drizzle-orm"

export async function GET() {
	const { userId } = auth()

	if (!userId) {
		// return error
		return Response.error()
	}

	// Save the url in the database
	const urls = await db
		.select()
		.from(shortUrls)
		.where(eq(shortUrls.userId, userId))
		.execute()

	return Response.json({ status: "success", urls })
}
