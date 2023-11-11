import ShortUrlForm from "@/components/ShortUrlForm"
import { FC } from "react"

const Page: FC = () => {
	return (
		<>
			<h1 className='text-2xl font-bold mb-4'>Dashboard</h1>
			<p className='mb-8'>Welcome to the dashboard </p>

			<ShortUrlForm />
		</>
	)
}

export default Page
