import { db } from "@/db"
import { shortUrls } from "@/db/schema"
import { auth } from "@clerk/nextjs"
import { customAlphabet } from "nanoid"
import { eq } from "drizzle-orm"

const CHARACTERS =
	"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
const nanoid = customAlphabet(CHARACTERS, 8)

export async function POST(request: Request) {
	const body = await request.json()

	const url = body.url

	if (!url) {
		// return error
		return Response.error()
	}

	// Create a short url id
	const id = nanoid()

	const { userId } = auth()

	if (!userId) {
		// return error
		return Response.error()
	}

	// Save the url in the database
	await db
		.insert(shortUrls)
		.values({
			id,
			userId,
			originUrl: url,
		})
		.execute()

	return Response.json({ status: "success" })
}

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
