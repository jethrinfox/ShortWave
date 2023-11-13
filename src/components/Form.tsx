"use client"

import usePostUrl from "@/hooks/usePostUrl"
import { FC } from "react"

const Form: FC = () => {
	const postUrl = usePostUrl()

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const url = e.currentTarget.url.value

		postUrl.mutate(url)
	}

	return (
		<form
			className='flex flex-col items-center mb-12'
			onSubmit={handleSubmit}
		>
			<div className='flex flex-col mb-6'>
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
	)
}

export default Form
