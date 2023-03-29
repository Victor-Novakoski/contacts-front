import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ReactNode } from 'react'
import { useContext } from 'react'
import { IUserLogin } from '../pages/Login'
import api from '../services/api'
import { IUserRegister } from '../pages/Register'
import { useContactContext } from './ContactContext'

export interface IUserProviderProps {
  children: ReactNode
}

export interface IContacts {
  id: string
  name: string
  email: string
  phone: string
}

export interface IUser {
  id: string
  name: string
  password: string
  email: string
  phone?: string
  imageProfile: string
}

interface IUserContext {
  user: IUser | null
  setUser: Dispatch<SetStateAction<IUser | null>>
  registerSubmit(formRegister: IUserRegister): void
  loginFunction(formLogin: IUserLogin): void
  logout(): void
  patchUser(formData: IUser): void
  modalConfigVisible: boolean
  setModalConfigVisible: Dispatch<SetStateAction<boolean>>
  token: string
  setToken: Dispatch<string>
}

export const AuthContext = createContext<IUserContext>({} as IUserContext)

export const UserContextProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null)
  const [modalConfigVisible, setModalConfigVisible] = useState(false)
  const [token, setToken] = useState('')

  const navigate = useNavigate()

  const loginFunction = (formLogin: IUserLogin) => {
    api
      .post('/auth', formLogin)
      .then(resp => {
        setToken(resp.data.token)
        api
          .get('/users/profile', {
            headers: {
              Authorization: `Bearer ${resp.data.token}`,
            },
          })
          .then(resp => {
            setUser(resp.data)
            navigate('/home', { replace: true })
            toast.success(`bem vindo ${resp.data.name}`)
          })
      })
      .catch(err => toast.error('email ou senha inválido'))
  }

  const patchUser = async (formData: IUser) => {
    try {
      const newData = Object.fromEntries(
        Object.entries(formData).filter(([_, v]) => v != '')
      )
      const { data } = await api.patch('/users/profile', newData)
      setUser(data)
      toast.success('usuario atualizado com sucesso')
    } catch (error) {
      console.log(error)
    }
  }

  const registerSubmit = (formRegister: IUserRegister) => {
    try {
      const newData = Object.fromEntries(
        Object.entries(formRegister).filter(([_, v]) => v != '')
      )
      api.post('/users', newData)
      toast.success('conta criada com sucesso!')
    } catch (error) {
      toast.error(`ops, algo de errado`)
    }
  }

  const logout = async (): Promise<void> => {
    setToken('')
    setUser(null)
    navigate('/')
  }

  return (
    <AuthContext.Provider
      value={{
        modalConfigVisible,
        setModalConfigVisible,
        user,
        setUser,
        loginFunction,
        registerSubmit,
        logout,
        patchUser,
        token,
        setToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useUserContext(): IUserContext {
  const context = useContext(AuthContext)

  return context
}
