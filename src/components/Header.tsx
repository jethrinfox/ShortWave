import { auth, SignOutButton, UserButton } from "@clerk/nextjs"
import Link from "next/link"
import { FC } from "react"

const Header: FC = () => {
	const { userId } = auth()

	return (
		<>
			<div className='bg-violet-400 h-20 px-8 flex items-center justify-between text-white'>
				<div className='text-xl'>ShortWave</div>
				<div className='flex gap-6 items-center'>
					{!userId ? (
						<>
							<Link href={"/sign-in"}>Sign In</Link>
							<Link href={"/sign-up"}>Sign Up</Link>
						</>
					) : (
						<>
							<Link href={"/dashboard"}>Dashboard</Link>
							<SignOutButton />
							<UserButton />
						</>
					)}
				</div>
			</div>
		</>
	)
}

export default Header
