import Form from "@/components/Form"
import ShortenedUrlsList from "@/components/ShortenedUrlsList"
import { FC } from "react"

const Page: FC = () => {
	return (
		<>
			<h1 className='text-2xl font-bold mb-4'>Dashboard</h1>
			<p className='mb-8'>You can create new short links below</p>

			<Form />

			<ShortenedUrlsList />
		</>
	)
}

export default Page
