import TabGroup from '@/components/TabGroup'
import { fetchCategories } from '@/constants/value/category'
import { Children } from '@/types'

export default async function PageLayout({ children }: Children) {
	const categories = await fetchCategories()
	return (
		<div className="m-7 space-y-5 rounded-lg border-2 border-white bg-black p-6">
			<TabGroup
				path="/nestedlayout"
				items={[
					{ text: 'Home' },
					...categories.map((category) => ({
						text: category.name,
						id: category.id
					}))
				]}
			/>
			<div className="space-y-5 rounded-xl border-2 border-dotted border-gray-400 p-9">
				<span className="text-bold rounded-xl bg-pink-600 p-2 text-lg text-gray-50">
					Children
				</span>
				{children}
			</div>
		</div>
	)
}
