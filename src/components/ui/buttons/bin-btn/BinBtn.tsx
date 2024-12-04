import styles from './BinBtn.module.scss'

export const BinBtn = () => {
	return (
		<button className={styles.binButton}>
			<img src='./icons/bin.svg' alt='bin' />
		</button>
	)
}
