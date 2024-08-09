import { createContext, useEffect, useState } from 'react'
import {
  User as FirebaseUser,
  getAuth,
  onAuthStateChanged,
  signOut
} from 'firebase/auth'
import {
  loginWithEmailAndPassword,
  registerWithEmailAndPassword
} from '@/services/firebase'

type props = {
  children: JSX.Element | JSX.Element[]
}

export const AuthContext = createContext({})

export function AuthProvider({ children }: props) {
  const [user, setUser] = useState<FirebaseUser | null>(null)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState(true)

  const signup = (email: string, password: string) => {
    registerWithEmailAndPassword(email, password)
  }

  const login = async (email: string, password: string) => {
    loginWithEmailAndPassword(email, password)
  }

  const logout = () => signOut(getAuth())

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const unsuscribe = onAuthStateChanged(getAuth(), (currentUser) => {
      console.log(currentUser)
      setUser(currentUser)
      setLoading(false)
    })
  }, [])

  return (
    <AuthContext.Provider value={{ signup, login, logout, loading, user }}>
      {children}
    </AuthContext.Provider>
  )
}
