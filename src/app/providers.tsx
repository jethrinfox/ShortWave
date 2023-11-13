"use client"

import { ClerkProvider } from "@clerk/nextjs"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { FC, PropsWithChildren, useState } from "react"

const Providers: FC<PropsWithChildren> = ({ children }) => {
	const [queryClient] = useState(() => new QueryClient())

	return (
		<QueryClientProvider client={queryClient}>
			<ClerkProvider>{children}</ClerkProvider>
		</QueryClientProvider>
	)
}

export default Providers
