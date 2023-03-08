import { fetchCategoryById, fetchSubCategory } from '@/constants/value/category'
import { notFound } from 'next/navigation'

export default async function Page({
	params
}: {
	params: { categoryId: string; subCategoryId: string }
}) {
	const subCategory = await fetchSubCategory(params.categoryId, params.subCategoryId)
	if (!subCategory) notFound()

	return (
		<div className="space-y-4 text-white">
			<div className="flex items-center space-x-3">
				<h2 className="text-xl font-medium text-gray-300">{subCategory.name}</h2>
			</div>
			<div className="grid grid-cols-1 gap-2 lg:grid-cols-6">
				{Array.from({ length: subCategory.count }).map((_, i) => (
					<div className="rounded-xl border-gray-300 bg-gray-600 p-4">
						<h3>{`${subCategory.name}: ${i}`}</h3>
					</div>
				))}
			</div>
		</div>
	)
}
