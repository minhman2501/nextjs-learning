import { Item } from '@/types/Item'
import Tab from '../Tab'

type TabGroupType = {
	path: string
	items: Item[]
}

export default function TabGroup({ path, items }: TabGroupType) {
	return (
		<div className="flex flex-wrap items-center gap-2">
			{items.map((item) => (
				<Tab key={path + item.id} path={path} item={item} />
			))}
		</div>
	)
}
