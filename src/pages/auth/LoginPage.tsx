import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function LoginPage() {
  return (
    <motion.div
      layoutId='auth-form'
      className='flex items-center justify-center w-full h-full'>
      <div className='flex flex-col items-center bg-brand-light-accent-400 dark:bg-brand-dark-accent-900/70 rounded-md shadow-lg p-8'>
        <h1 className='text-4xl font-bold mb-6 cursor-default select-none'>
          Inicio de Sesión
        </h1>

        <form className='flex flex-col gap-8 w-[60dvw] h-fit'>
          <div className=''>
            <p className='font-semibold text-lg cursor-default select-none'>
              Correo
            </p>
            <input
              type='text'
              name=''
              id=''
              className='w-full px-4 py-2 rounded-md shadow-md'
            />
          </div>

          <div className=''>
            <p className='font-semibold text-lg cursor-default select-none w-fit'>
              Contraseña
            </p>
            <input
              type='password'
              name=''
              id=''
              className='w-full px-4 py-2 rounded-md shadow-md'
            />
            <div className='w-fit'>
              <Link to='/auth/ResetPassword'>
                <p className='text-brand-dark-shades-200 dark:text-brand-light-shades-800 text-[0.8rem] w-fit cursor-pointer select-none mt-1'>
                  ¿Olvidaste tu Contraseña?
                </p>
              </Link>
            </div>
          </div>

          <button
            type='submit'
            className='font-semibold bg-brand-light-accent-600 dark:bg-brand-dark-accent-500 px-4 py-1 rounded-md shadow-md'>
            Login
          </button>
        </form>
      </div>
    </motion.div>
  )
}
