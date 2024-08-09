import { AuthContext } from '@/context/AuthContext'
import { useContext } from 'react'

interface AuthContextType {
  signup: () => void
  login: () => void
  logout: () => void
  loading: boolean
  user: { name: string; email: string } | null
}

export function useAuth() {
  return useContext(AuthContext) as AuthContextType
}
