import React from 'react'
import styles from './Header.module.scss'
import { Button } from 'components'

interface IHeaderProps{
	title?: string
	subtitle?: string
	exit?: () => void
	back?: boolean
	backButton?: () => void
	withIcon?: boolean
	icon?: string
}


// export const HeaderComponent: React.FC<IHeaderProps> = ({
// 	title = '',
// 	subtitle = '',
// 	exit = () => {},
// 	back = false,
// 	backButton = () => {},
// 	withIcon = false,
// 	icon = '',
// }) => {
//   return (
// 	<div className={styles.header_container}>
// 		<h1 className={styles.header_title}>{title}</h1>
// 		<p className={styles.header_subtitle}>{subtitle}</p>
// 		{withIcon ? <img className={styles.header_icon} src={icon} alt="icon"/> : null}
// 		<Button className={styles.exit_button} type='primary' title='Выйти' onClick={exit}/>
// 		{back ? <Button className={styles.back_button} type='primary' title='Назад' onClick={backButton}/> : null}
// 	</div>
//   )
// }

export const HeaderComponent: React.FC<IHeaderProps> = ({
	title = '',
	subtitle = '',
	exit = () => {},
	back = false,
	backButton = () => {},
	withIcon = false,
	icon = '',
  }) => {
	return (
	  <div className={styles.header_container}>
		<div className={withIcon ? styles.header_content_with_icon : styles.header_content}>
		  {withIcon ? <img className={styles.header_icon} src='/usericon.png' alt="icon"/> : null}
		  <div className={styles.header_text}>
			<h1 className={styles.header_title}>{title}</h1>
			<p className={styles.header_subtitle}>{subtitle}</p>
		  </div>
		</div>
		<div>
			<Button className={styles.exit_button} type='primary' onClick={exit}>
				<span className={styles.button_text}>Выйти</span>
				<img className={styles.button_icon} src="/logoutIcon.svg" alt="Exit"/>
			</Button>
		</div>
		{back ? 
		<Button className={styles.back_button} type='primary' onClick={backButton}>
			<span className={styles.button_text}>Назад</span>
			<img className={styles.button_icon} src="/backIcon.svg" alt="Back"/>
		</Button> : null}
	  </div>
	)
}
