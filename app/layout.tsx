import './globals.css'
import Link from 'next/link'

export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className="bg-gray-800">
				<nav className="m-3 flex items-center gap-3 font-semibold text-white">
					{[
						{ text: 'Home', path: '/' },
						{ text: 'Nested Layout', path: '/nestedlayout' }
					].map((link) => (
						<Link className="text-2xl font-bold underline" href={link.path}>
							{link.text}
						</Link>
					))}
				</nav>

				<main>{children}</main>
			</body>
		</html>
	)
}
