"use client"

import useGetUrls from "@/hooks/useGetUrls"
import { hostname } from "@/utils/host"

import { FC } from "react"
import Loader from "./Loader"
import Alert from "./Alert"

const ShortenedUrlsList: FC = () => {
	const query = useGetUrls()

	const handleShortUrlClick = (url: string) => {
		navigator.clipboard.writeText(url)
	}

	return (
		<div className='flex flex-col items-center'>
			{query.isLoading && <Loader />}

			{query.isError && <Alert />}

			{query.data?.map((url) => {
				const parsedUrl = hostname + "/" + url.id

				return (
					<button
						key={url.id}
						onClick={() => handleShortUrlClick(parsedUrl)}
						className='btn normal-case mb-2 w-80'
					>
						{parsedUrl} - {url.clicks}
					</button>
				)
			})}
		</div>
	)
}

export default ShortenedUrlsList
