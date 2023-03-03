import TabGroup from '@/components/TabGroup'
import { fetchCategoryById } from '@/constants/value/category'
import { notFound } from 'next/navigation'

export default async function Layout({
	children,
	params
}: {
	children: React.ReactNode
	params: { categorySlug: string }
}) {
	const category = await fetchCategoryById(params.categorySlug)
	if (!category) notFound()

	return (
		<div className="space-y-9">
			<div className="flex justify-between">
				<TabGroup
					path={`/layouts/${category.id}`}
					items={[
						{
							text: 'All'
						},
						...category.items.map((x) => ({
							text: x.name,
							id: x.id
						}))
					]}
				/>
			</div>

			<div>{children}</div>
		</div>
	)
}
