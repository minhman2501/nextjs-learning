import TabGroup from '@/components/TabGroup'
import { fetchCategories } from '@/constants/value/category'
import { Children } from '@/types'

export default async function PageLayout({ children }: Children) {
	const categories = await fetchCategories()
	return (
		<div className="space-y-9">
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
			<div className="">{children}</div>
		</div>
	)
}
