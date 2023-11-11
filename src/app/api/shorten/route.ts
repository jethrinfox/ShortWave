import { customAlphabet } from "nanoid"

const CHARACTERS =
	"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
const nanoid = customAlphabet(CHARACTERS, 8)

export const memoryDB = new Map<string, string>()

export async function POST(request: Request) {
	const body = await request.json()

	const url = body.url

	if (!url) {
		// return error
		return Response.error()
	}

	// Create a short url id
	const id = nanoid()

	// Save the url in the database
	memoryDB.set(id, url)

	return Response.json({ id })
}
