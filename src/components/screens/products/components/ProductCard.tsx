import { BinBtn } from '@ui/buttons/bin-btn/BinBtn'
import { LikeBtn } from '@ui/buttons/like-btn/LikeButton'

import styles from './ProductCard.module.scss'

export const ProductCard = () => {
	return (
		<div className={styles.wrapper}>
			<LikeBtn />
			<BinBtn />
		</div>
	)
}
