import React from 'react'
import styles from './Card.module.scss'
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import { likeUser, unlikeUser, selectLikes } from 'store/likeSlice';

interface ICardProps{
	imgSrc?: string;
	title?: string;
	onClick?: () => void;
	id?: number | undefined
}

export const Card: React.FC<ICardProps> = ({
	imgSrc = '/usericon.png',
	title = '',
	onClick = () => {},
	id = '',
}) => {
	const dispatch = useAppDispatch()
	
	const handleLike = (e: React.MouseEvent) =>{
		e.stopPropagation()
		if(isLiked){
			dispatch(unlikeUser(id?.toString()))
		} else {
			dispatch(likeUser(id?.toString()))
		}
	}
	
	const isLiked = useAppSelector(selectLikes)?.includes(id?.toString());
	// console.log(isLiked)

  return (
	<div onClick={onClick} className={styles.card_container}>
		<div className={styles.user_icon}>
			<img src={imgSrc} alt="userIcon" />
		</div>
		<span className={styles.user_title}>{title}</span>
		<button onClick={handleLike} className={styles.like_button}>
			<img src={isLiked ? '/filledHeartIcon.svg' : "/emptyHeartDepressionIcon.svg"} alt="like" />
		</button>
	</div>
  )
}
