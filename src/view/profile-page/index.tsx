import { Button } from 'components/Button'
import { HeaderComponent, Card } from 'components'
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks'
import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from 'store/authSlice'
import styles from './ProfilePage.module.scss'
import { useGetUserByIdQuery } from 'store/api/fetchUserApiSlice'
import { User } from 'types/users'
import { useParams } from 'react-router-dom'


export const ProfilePage = () => {

  const params = useParams()
	const dispatch = useAppDispatch()
	const navigation = useNavigate()
	const {data} = useGetUserByIdQuery(parseInt(params.id || ''))
	
  return (
	<div>
		<HeaderComponent 
			title={data?.name}
			subtitle={`Сайт: ${data?.website}`}
      back
      backButton={() => navigation('/main-page')}
      withIcon
			exit={() => {
				dispatch(logout())
				navigation('/')
			}}
		/>
    <div className={styles.user_info}>
      <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum veritatis reprehenderit quas molestiae voluptatibus, minus modi fugiat vitae ea? Dolorem nostrum sed molestiae, quod incidunt repellat. Aperiam eaque tempora eos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum veritatis reprehenderit quas molestiae voluptatibus.<br /> Minus modi fugiat vitae ea? Dolorem nostrum sed molestiae, quod incidunt repellat. Aperiam eaque tempora eos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum veritatis reprehenderit quas molestiae voluptatibus, minus modi fugiat vitae ea? Dolorem nostrum sed molestiae, quod incidunt repellat. Aperiam eaque tempora eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum veritatis reprehenderit quas molestiae voluptatibus, minus modi fugiat vitae ea? Dolorem nostrum sed molestiae, quod incidunt repellat. Aperiam eaque tempora eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum veritatis reprehenderit quas molestiae voluptatibus, minus modi fugiat vitae ea? Dolorem nostrum sed molestiae, quod incidunt repellat. Aperiam eaque tempora eos.</p>
      <ul className={styles.contact_info}>
        <li>
          <img src="/phoneIcon.svg" alt="phone" />
          {data?.phone}
        </li>
        <li>
          <img src="/emailIcon.svg" alt="email" />
          {data?.email}
        </li>
      </ul>
    </div>
	</div>
  )
}
