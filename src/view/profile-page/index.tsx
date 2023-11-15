import { HeaderComponent } from 'components'
import { useNavigate } from 'react-router-dom'
import styles from './ProfilePage.module.scss'
import { useGetUserByIdQuery } from 'store/api/fetchUserApiSlice'
import { useParams } from 'react-router-dom'

export const ProfilePage = () => {

  const params = useParams()
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
