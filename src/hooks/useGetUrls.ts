import { UrlType } from "@/db/schema"
import { useQuery } from "@tanstack/react-query"

export const SHORT_URLS_KEY = "short-urls"

function useGetUrls() {
	return useQuery({
		queryKey: [SHORT_URLS_KEY],
		queryFn: async () => {
			const response = await fetch("/api/shorten")
			if (!response.ok) {
				throw new Error("Network response was not ok")
			}
			const json = await response.json()

			if (json.status !== "success") {
				throw new Error("Network response was not ok")
			}

			return json.urls as UrlType[]
		},
	})
}

export default useGetUrls
