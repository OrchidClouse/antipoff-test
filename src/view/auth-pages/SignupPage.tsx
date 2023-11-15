import React, { useState } from 'react'
import styles from './Form.module.scss'
import { Button, Input } from 'components'
import { useAppDispatch } from '../../hooks/reduxHooks'
import { useNavigate } from 'react-router-dom'
import { useRegisterMutation } from 'store/api/authUserApiSlice'

export const SignupPage = () => {

  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [register, {isLoading, error}] = useRegisterMutation()

  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const [errors, setErrors] = useState({
    emailError: '',
    passwordError: '',
    confirmPasswordError: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    setErrors({
      emailError: '',
      passwordError: '',
      confirmPasswordError: ''
    });
  
    let isValid = true;
  
    if (!userInfo.email.includes('@')) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        emailError: 'Неправильный Email'
      }));
      isValid = false;
    }
  
    if (userInfo.password.length < 6) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        passwordError: 'Пароль должен содержать не менее 6 символов'
      }));
      isValid = false;
    }
  
    if (userInfo.password !== userInfo.confirmPassword) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPasswordError: 'Пароли не совпадают'
      }));
      isValid = false;
    }
  
    if (isValid) {
      register({
        name: userInfo.name,
        email: userInfo.email,
        password: userInfo.password
      })
      navigate('/main-page')
    }
  };
  
  return (
	<div className={styles.form_container}>
    <h4 className={styles.form_title}>Регистрация</h4>
    <div>
      <div className={styles.form_field}>
        <label htmlFor="name"></label>
        <span>Имя</span>
        <Input 
          onChange={(e) => setUserInfo({...userInfo, name: e.target.value})} 
          type="name" 
          id="name" 
          name="name" 
          placeholder='Введите имя'
          value={userInfo.name} 
        />
      </div>
      <div className={styles.form_field}>
        <label htmlFor="email"></label>
        <span>Электронная почта</span>
        <Input 
          onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}
          type="email"
          id="email"
          name="email"
          placeholder='example@mail.ru'
          value={userInfo.email}
        />
        {errors.emailError && <div className={styles.error}>{errors.emailError}</div>}
      </div>
      <div className={styles.form_field}>
        <label htmlFor="password"></label>
        <span>Пароль</span>
        <Input 
          onChange={(e) => setUserInfo({...userInfo, password: e.target.value})}
         type="password"
          id="password" 
          name="password" 
          placeholder='Пароль'
          value={userInfo.password}
        />
        {errors.passwordError && <div className={styles.error}>{errors.passwordError}</div>}
      </div>
      <div className={styles.form_field}>
        <label htmlFor="confirmPassword"></label>
        <span>Подтвердите пароль</span>
        <Input 
          onChange={(e) => setUserInfo({...userInfo, confirmPassword: e.target.value})} 
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder='Пароль'
          value={userInfo.confirmPassword}
        />
        {errors.confirmPasswordError && <div className={styles.error}>{errors.confirmPasswordError}</div>}
      </div>
    </div>
        <Button onClick={handleSubmit} className={styles.form_button} title='Зарегистрироваться'/> 
  </div>
  )
}
