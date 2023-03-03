'use client'

import { Item } from '@/types/Item'
import Link from 'next/link'
import clsx from 'clsx'
import { useSelectedLayoutSegment } from 'next/navigation'

export type TabType = {
	path: string
	item: Item
}

export default function Tab({ path, item }: TabType) {
	const segment = useSelectedLayoutSegment()

	// * Check if the item has the id to create the item route path
	const href = item.id ? path + '/' + item.id : path

	// * Check if the current tab is selected
	const isActive =
		(!item.id && segment === null) || segment === item.segment || segment === item.id

	return (
		<Link
			href={href}
			className={clsx('rounded-lg px-3 py-2 text-base font-medium', {
				'bg-gray-300 text-black hover:bg-gray-700 hover:text-gray-100': !isActive,
				'bg-red-800 text-white': isActive
			})}
		>
			{item.text}
		</Link>
	)
}
