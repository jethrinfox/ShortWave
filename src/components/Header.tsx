import { auth, UserButton } from "@clerk/nextjs"
import Link from "next/link"
import { FC } from "react"

const Header: FC = () => {
	const { userId } = auth()

	return (
		<>
			<div className='navbar bg-violet-500 text-white px-6'>
				<div className='flex-1'>
					<h1 className='btn btn-ghost normal-case text-xl'>
						ShortWave
					</h1>
				</div>
				<div className='flex-none'>
					<div className='flex gap-6 items-center'>
						{!userId ? (
							<>
								<Link
									className='btn btn-ghost'
									href={"/sign-in"}
								>
									Sign In
								</Link>
								<Link
									className='btn btn-ghost'
									href={"/sign-up"}
								>
									Sign Up
								</Link>
							</>
						) : (
							<>
								<Link
									className='btn btn-ghost'
									href={"/dashboard"}
								>
									Dashboard
								</Link>
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
