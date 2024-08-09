import { Navigate } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'

type props = {
  children: JSX.Element | JSX.Element[]
}

export function ProtectedRoute({ children }: props) {
  const { user, loading } = useAuth()

  if (loading)
    return (
      <main className='w-full h-full flex justify-center items-center'>
        <h1>Loading</h1>
      </main>
    )

  if (!user) return <Navigate to='/auth/Login' />

  return <>{children}</>
}
