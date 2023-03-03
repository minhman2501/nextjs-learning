import { cache } from 'react'

export type Category = {
	name: string
	id: string
	count: number
	items: Omit<Category, 'items'>[]
}

export const getCategories = cache((): Category[] => [
	{
		name: 'Electronics',
		id: 'electronics',
		count: 11,
		items: [
			{ name: 'Phones', id: 'phones', count: 4 },
			{ name: 'Tablets', id: 'tablets', count: 5 },
			{ name: 'Laptops', id: 'laptops', count: 2 }
		]
	},
	{
		name: 'Clothing',
		id: 'clothing',
		count: 12,
		items: [
			{ name: 'Tops', id: 'tops', count: 3 },
			{ name: 'Shorts', id: 'shorts', count: 4 },
			{ name: 'Shoes', id: 'shoes', count: 5 }
		]
	},
	{
		name: 'Books',
		id: 'books',
		count: 10,
		items: [
			{ name: 'Fiction', id: 'fiction', count: 5 },
			{ name: 'Biography', id: 'biography', count: 2 },
			{ name: 'Education', id: 'education', count: 3 }
		]
	}
])

export async function fetchCategoryById(id: string | undefined) {
	// Assuming it always return expected categories
	return getCategories().find((category) => category.id === id)
}

export async function fetchCategories(): Promise<Category[]> {
	return getCategories()
}

async function findSubCategory(category: Category | undefined, subCategoryId: string | undefined) {
	return category?.items.find((category) => category.id === subCategoryId)
}

export async function fetchSubCategory(
	categoryId: string | undefined,
	subCategoryId: string | undefined
) {
	const category = await fetchCategoryById(categoryId)
	return findSubCategory(category, subCategoryId)
}
