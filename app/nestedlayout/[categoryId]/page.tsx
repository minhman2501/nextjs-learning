import { fetchCategoryById } from '@/constants/value/category'
import { notFound } from 'next/navigation'

export default async function Page({ params }: { params: { categoryId: string } }) {
	const category = await fetchCategoryById(params.categoryId)
	if (!category) notFound()

	return (
		<div className="space-y-4 text-white">
			<div className="flex items-center space-x-3">
				<h2 className="text-xl font-medium text-gray-300">All {category.name}</h2>
			</div>

			<div className="grid grid-cols-1 gap-6 lg:grid-cols-3">I got nothing</div>
		</div>
	)
}
