import { db } from "@/db"
import { shortUrls } from "@/db/schema"
import { eq } from "drizzle-orm"

export async function GET(
	_: Request,
	{ params }: { params: { urlId: string } },
) {
	const urlId = params.urlId

	if (!urlId) {
		// return error
		return Response.error()
	}

	// call the database to get the url
	const shortUrl = db
		.select()
		.from(shortUrls)
		.where(eq(shortUrls.id, urlId))
		.get()

	if (!shortUrl) {
		// return error
		return Response.error()
	}

	const url = shortUrl.originUrl

	db.update(shortUrls)
		.set({ clicks: shortUrl.clicks + 1 })
		.where(eq(shortUrls.id, urlId))
		.execute()

	return Response.redirect(url)
}
