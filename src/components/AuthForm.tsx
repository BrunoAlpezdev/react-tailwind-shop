import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  loginWithEmailAndPassword,
  registerWithEmailAndPassword
} from '@/services/firebase'

type props = {
  formType: 'Login' | 'Register'
}

export const AuthForm: React.FC<props> = (props) => {
  const [usuario, setUser] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const { email, password } = usuario
    if (props.formType === 'Login') {
      loginWithEmailAndPassword(email, password)
    }
    if (props.formType === 'Register') {
      registerWithEmailAndPassword(email, password)
    }
  }

  return (
    <motion.div
      layoutId='auth-form'
      className='flex flex-col gap-6 items-center justify-center w-full h-full'>
      <div className='flex flex-col items-center bg-brand-light-accent-400 dark:bg-brand-dark-accent-900/70 rounded-md shadow-lg p-8'>
        {props.formType === 'Login' ? (
          <h1 className='text-4xl font-bold mb-6 cursor-default select-none'>
            Inicio de Sesión
          </h1>
        ) : (
          <h1 className='text-4xl font-bold mb-6 cursor-default select-none'>
            Registro
          </h1>
        )}

        <form
          className='flex flex-col gap-8 w-[40dvw] h-fit'
          onSubmit={handleSubmit}>
          <div>
            <p className='font-semibold text-lg cursor-default select-none'>
              Correo
            </p>
            <input
              onChange={(e) => setUser({ ...usuario, email: e.target.value })}
              type='email'
              placeholder='tucorreo@dominio.com'
              autoComplete='off'
              name='inpEmail'
              id='inpEmail'
              className='w-full px-4 py-2 rounded-md shadow-md outline-none'
            />
          </div>

          <div>
            <p className='font-semibold text-lg cursor-default select-none w-fit'>
              Contraseña
            </p>
            <input
              onChange={(e) =>
                setUser({ ...usuario, password: e.target.value })
              }
              type='password'
              name='inpPassword'
              id='inpPassword'
              className='w-full px-4 py-2 rounded-md shadow-md outline-none'
            />
            {props.formType === 'Login' ? (
              <div className='w-fit'>
                <Link to='/auth/ResetPassword'>
                  <p className='text-brand-dark-shades-200 dark:text-brand-light-shades-800 text-[0.8rem] w-fit cursor-pointer select-none mt-1'>
                    ¿Olvidaste tu Contraseña?
                  </p>
                </Link>
              </div>
            ) : (
              <></>
            )}
          </div>

          <button
            type='submit'
            disabled={!usuario.email || usuario.password.length < 6}
            className='font-semibold bg-brand-light-accent-600 dark:bg-brand-dark-accent-500 px-4 py-1 rounded-md shadow-md disabled:bg-brand-light-accent-600/40 disabled:dark:bg-brand-dark-accent-500/40'>
            {props.formType === 'Login' ? <p>Login</p> : <p>SignUp</p>}
          </button>
        </form>
      </div>
      {props.formType === 'Login' ? (
        <div className='flex flex-col items-center bg-brand-light-accent-400 dark:bg-brand-dark-accent-900/70 rounded-md shadow-lg px-8 py-4 gap-3'>
          <p className='text-white text-[0.8rem] cursor-pointer select-none'>
            ¿No tienes cuenta?
          </p>
          <Link
            to='/auth/Registro'
            className='bg-brand-light-accent-600 dark:bg-brand-dark-accent-500/70 px-4 py-1 rounded-md shadow-md tracking-wide'>
            ¡¡Regístrate!!
          </Link>
        </div>
      ) : (
        <div className='flex flex-col items-center bg-brand-light-accent-400 dark:bg-brand-dark-accent-900/70 rounded-md shadow-lg px-8 py-4 gap-3'>
          <p className='text-white text-[0.8rem] cursor-pointer select-none'>
            ¿Ya tienes una cuenta?
          </p>
          <Link
            to='/auth/Login'
            className='bg-brand-light-accent-600 dark:bg-brand-dark-accent-500/70 px-4 py-1 rounded-md shadow-md tracking-wide'>
            Inicia Sesión
          </Link>
        </div>
      )}
    </motion.div>
  )
}
