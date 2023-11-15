import React, { useState } from 'react'
import styles from './Form.module.scss'
import { Button, Input } from 'components'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import { login } from 'store/authSlice'
import { useNavigate } from 'react-router-dom'
import { useLoginMutation } from 'store/api/authUserApiSlice'

export const LoginPage = () => {

  const navigate = useNavigate()
  const [login] = useLoginMutation()
  
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  })
  
  const [errors, setErrors] = useState({
    emailError: '',
    incorrectData: ''
  });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    setErrors({
      emailError: '',
      incorrectData: '',
    });
    
    let isValid = true;
    
    if (!userInfo.email.includes('@')) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        emailError: 'Неправильный Email'
      }));
      isValid = false;
    }
    
    if (isValid) {
      login({email: userInfo.email, password: userInfo.password}).then((result) => {
        if ('data' in result) {
          navigate('/main-page');
        } else {
          setErrors((prevErrors) => ({
            ...prevErrors,
            incorrectData: 'Неправильный Email или пароль'
          }));
        }
      }).catch((err) => {
        console.log(err);
        setErrors((prevErrors) => ({
          ...prevErrors,
          incorrectData: 'Неправильный Email или пароль'
        }));
      });
    }
  };
  
  return (
	<div className={styles.form_container}>
    <h4 className={styles.form_title}>Войти</h4>
    <div>
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
        {errors.incorrectData && <div className={styles.error}>{errors.incorrectData}</div>}
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
        {errors.incorrectData && <div className={styles.error}>{errors.incorrectData}</div>}
      </div>
        
    </div>
      <Button onClick={handleSubmit} className={styles.form_button} title='Войти'/>
  </div>
  )
}
