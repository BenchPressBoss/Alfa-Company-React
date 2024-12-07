import { useDispatch } from 'react-redux'

import styles from './PlusButton.module.scss'
import { addProduct } from '@/store/slices/productSlice'

export const PlusButton = () => {
	const dispatch = useDispatch()

	const handleAddProduct = () => {
		const newProduct = {
			id: Date.now(),
			img: './img/ava.jpg',
			name: 'New Product',
			price: 100
		}
		dispatch(addProduct(newProduct))
	}

	return (
		<button className={styles.plusButton} onClick={handleAddProduct}>
			<img src='./icons/plus.svg' alt='addProduct' />
		</button>
	)
}
