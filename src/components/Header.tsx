import { auth, UserButton } from "@clerk/nextjs"
import Link from "next/link"
import { FC } from "react"

const Header: FC = () => {
	const { userId } = auth()

	return (
		<>
			<div className='navbar bg-violet-500 text-white'>
				<div className='flex-1'>
					<h1 className='btn btn-ghost normal-case text-xl'>
						daisyUI
					</h1>
				</div>
				<div className='flex-none'>
					<div className='flex gap-6 items-center'>
						{!userId ? (
							<>
								<Link href={"/sign-in"}>Sign In</Link>
								<Link href={"/sign-up"}>Sign Up</Link>
							</>
						) : (
							<>
								<Link href={"/dashboard"}>Dashboard</Link>
								<UserButton />
							</>
						)}
					</div>
				</div>
			</div>
		</>
	)
}

export default Header
