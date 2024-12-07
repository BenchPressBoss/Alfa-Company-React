import { useState } from 'react'

import styles from './LikeButton.module.scss'

export const LikeBtn = () => {
	const [isFavorite, setIsFavorite] = useState<boolean>(false)

	const toggleFavorite = (e: React.MouseEvent) => {
		e.stopPropagation()
		setIsFavorite(!isFavorite)
	}
	return (
		<button className={styles.likeButton} onClick={toggleFavorite}>
			{isFavorite ? (
				<img src='./icons/likeCrack.svg' alt='removeFavorite' />
			) : (
				<img src='./icons/like.svg' alt='addFavorite' />
			)}
		</button>
	)
}
