import Header from "@/components/Header"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../styles/globals.css"
import Providers from "./providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "ShortWave - A link shortener for the modern web",
	description: "ShortWave is a link shortener for the modern web",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Providers>
					<main className='mx-auto'>
						<Header />
						<div className='flex items-start justify-center min-h-screen'>
							<div className='mt-20'>{children}</div>
						</div>
					</main>
				</Providers>
			</body>
		</html>
	)
}
