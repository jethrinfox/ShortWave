"use client"

import { FC, useState } from "react"

const postUrl = async (url: string) => {
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

	return res.json()
}

interface ShortUrlFormProps {}

const ShortUrlForm: FC<ShortUrlFormProps> = () => {
	const [urlState, setUrlState] = useState({
		url: "",
		shortenUrl: "",
	})

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const url = e.currentTarget.url.value
		try {
			const { id } = await postUrl(url)
			setUrlState({
				url: url,
				shortenUrl: `http://${window.location.hostname}:${window.location.port}/${id}`,
			})
		} catch (err) {
			alert("Failed to shorten url")
		}
	}

	const handleShortUrlClick = () => {
		navigator.clipboard.writeText(urlState.shortenUrl)
	}

	return (
		<>
			<form
				className='flex flex-col items-center mb-10'
				onSubmit={handleSubmit}
			>
				<div className='flex flex-col mb-4'>
					<label className='text-white text-lg mb-1' htmlFor='url'>
						Url
					</label>

					<input
						id='url'
						type='text'
						placeholder='enter a url to shorten'
						className='input input-bordered w-80 max-w-xs'
					/>
				</div>
				<button className='btn btn-primary' type='submit'>
					Create short url
				</button>
			</form>
			<div className='flex flex-col items-center'>
				{urlState.url && (
					<button
						onClick={handleShortUrlClick}
						className='btn normal-case'
					>
						{urlState.shortenUrl}
					</button>
				)}
			</div>
		</>
	)
}

export default ShortUrlForm
