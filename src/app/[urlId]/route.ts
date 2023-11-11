import { memoryDB } from "../api/shorten/route"

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
	const url = memoryDB.get(urlId)

	if (!url) {
		// return error
		return Response.error()
	}

	return Response.redirect(url)
}
