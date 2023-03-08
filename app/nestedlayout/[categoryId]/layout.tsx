import TabGroup from '@/components/TabGroup'
import { fetchCategories, fetchCategoryById, fetchSubCategory } from '@/constants/value/category'
import { Children } from '@/types'
import { notFound } from 'next/navigation'
import React from 'react'

export default async function PageLayout({
	children,
	params
}: {
	children: React.ReactNode
	params: {
		categoryId: string
	}
}) {
	const category = await fetchCategoryById(params.categoryId)
	if (!category) notFound()
	return (
		<div className="space-y-5">
			<div className="flex items-center ">
				<h3 className="mr-5 text-lg text-white">{category.name} Category:</h3>
				<nav>
					<TabGroup
						path={`/nestedlayout/${category.id}`}
						items={[
							{
								text: 'All'
							},
							...category.items.map((subCategory) => ({
								text: subCategory.name,
								id: subCategory.id
							}))
						]}
					/>
				</nav>
			</div>
			<div className="space-y-5 rounded-xl border-2 border-dotted border-gray-400 p-9">
				<span className="text-bold rounded-xl bg-pink-600 p-2 text-sm text-gray-50">
					Children
				</span>
				{children}
			</div>
		</div>
	)
}
