import { useSelector } from 'react-redux'

import { PlusButton } from '@ui/buttons/plus-btn/PlusButton'

import { ProductCard } from './components/ProductCard'
import { RootState } from '@/store/store'

export const Products = () => {
	const products = useSelector((state: RootState) => state.product.products)
	return (
		<>
			products
			{products.map(product => (
				<ProductCard key={product.id} product={product} />
			))}
			<PlusButton />
		</>
	)
}
