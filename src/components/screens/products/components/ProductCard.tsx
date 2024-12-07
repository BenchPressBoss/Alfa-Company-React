// import { useNavigate } from 'react-router-dom'
import { BinBtn } from '@ui/buttons/bin-btn/BinBtn'
import { LikeBtn } from '@ui/buttons/like-btn/LikeButton'

import styles from './ProductCard.module.scss'
import { routeConfig } from '@/routes/PageRoutesConfig'

type ProductCardProps = {
	product: {
		id: number
		img: string
		name: string
		price: number
	}
}
export const ProductCard = ({ product }: ProductCardProps) => {
	// const navigate = useNavigate()
	const openProductInfo = () => {
		const url = routeConfig.product
		window.location.href = url

		// Выбран этот вариант для возможности открытия продукта в новом окне
	}
	return (
		<div className={styles.wrapper} onClick={openProductInfo}>
			<div className={styles.buttonsBlock}>
				<BinBtn />
				<LikeBtn />
			</div>
			<div className={styles.productDescription}>
				<img src={product.img} alt='img' className={styles.productImg} />
				<p>{product.name}</p>
				<p>{product.price}</p>
			</div>
		</div>
	)
}
