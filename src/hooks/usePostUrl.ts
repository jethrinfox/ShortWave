import { useMutation, useQueryClient } from "@tanstack/react-query"
import { SHORT_URLS_KEY } from "./useGetUrls"

function usePostUrl() {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: async (url: string) => {
			const res = await fetch("/api/shorten", {
				method: "POST",
				body: JSON.stringify({ url }),
				headers: {
					"Content-Type": "application/json",
				},
			})

			if (!res.ok) {
				throw new Error("Failed to shorten url")
			}

			const json = await res.json()

			if (json.status !== "success") {
				throw new Error("Failed to shorten url")
			}
		},

		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: [SHORT_URLS_KEY],
			})
		},
	})
}

export default usePostUrl
