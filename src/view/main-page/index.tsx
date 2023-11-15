import { Button } from 'components/Button'
import { HeaderComponent, Card } from 'components'
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks'
import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from 'store/authSlice'
import styles from './MainPage.module.scss'
import { useFetchUserQuery } from 'store/api/fetchUserApiSlice'
import { User } from 'types/users'


export const MainPage = () => {

	const dispatch = useAppDispatch()
	const navigation = useNavigate()
	const {data, error, isLoading} = useFetchUserQuery('')
	const [visibleCards, setVisibleCards] = React.useState(5)
	
	console.log(data?.length)

  return (
	<div>
		<HeaderComponent 
			title='Наша команда'
			subtitle='Это опытные специалисты, хорошо разбирающиеся во всех задачах,
			которые ложатся на их плечи, и умеющие находить выход из любых, даже самых сложных ситуаций.'
			exit={() => {
				dispatch(logout())
				navigation('/')
			}}
		/>
		<div className={styles.container}>
			<div className={styles.cardsContainer}>
			{error && <div>Произошла ошибка</div>}
			{isLoading && <div>Загрузка...</div>}
			{data?.slice(0, visibleCards).map((el: User) =>
				<Card
				key={el.id}
				id={el.id}
				title={el.name}
				onClick={() => navigation(`/profile/${el.id}`)}
				/>
			)}
			</div>
			<div className={styles.buttonContainer}>
			{data && data.length >= visibleCards && 
				<Button 
					title='Показать еще '
					disabled={data.length === visibleCards}
					onClick={() => setVisibleCards(visibleCards + 5)}
				/>
			}
			</div>
		</div>
	</div>
  )
}
