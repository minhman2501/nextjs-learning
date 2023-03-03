import { fetchCategoryById } from '@/constants/value/category'
import { notFound } from 'next/navigation'

export default async function Page({ params }: { params: { categoryId: string } }) {
	const category = await fetchCategoryById(params.categoryId)
	if (!category) notFound()

	return (
		<div className="space-y-4">
			<h1 className="text-xl font-medium text-gray-400/80">All {category.name}</h1>

			<div className="grid grid-cols-1 gap-6 lg:grid-cols-3">I got nothing</div>
		</div>
	)
}
