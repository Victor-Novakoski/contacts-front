import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react'
import { toast } from 'react-toastify'
import api from '../services/api'
import { IUserProviderProps, useUserContext } from './UserContext'

export interface IcontactRequest {
  name: string
  email: string
  phone: string
}

interface IContact {
  id: string
  email: string
  name: string
  phone: string
  createdAt: Date
  updatedAt: Date
}

interface IContactContext {
  createContactFunc(formData: IcontactRequest): void
  modalVisible: boolean
  setModalVisible: Dispatch<SetStateAction<boolean>>
  recentContact: IContact[] | undefined
  setRecentContact: Dispatch<IContact[]>
  search: string
  setSearch: Dispatch<string>
  modalContactConfig: boolean
  setModalContactConfig: Dispatch<boolean>
  deleteContact(contactId: string): void
  patchContact(formData: IcontactRequest): void
  contactId: string
  setContactId: Dispatch<string>
  loadContact(): void
}
export const ContactContext = createContext<IContactContext>(
  {} as IContactContext
)

export const ContactProvider = ({ children }: IUserProviderProps) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [modalContactConfig, setModalContactConfig] = useState(false)
  const [createContact, setCreateContact] = useState<IContact[]>([])
  const [recentContact, setRecentContact] = useState<IContact[]>([])
  const [search, setSearch] = useState('')
  const [contactId, setContactId] = useState('')
  const { token } = useUserContext()

  const loadContact = async () => {
    try {
      api.defaults.headers.common.Authorization = `Bearer ${token}`
      const { data } = await api.get('/contact')
      setRecentContact(data)
    } catch (error) {
      console.log(error)
    }
  }
  const createContactFunc = async (formData: IcontactRequest) => {
    try {
      const { data } = await api.post('/contact', formData)
      setCreateContact([...createContact, data])
      loadContact()
      toast.success('contato adicionado com sucesso')
    } catch (error) {
      toast.error('você já tem esse contato cadastrado')
    }
  }

  const deleteContact = (id: string): void => {
    try {
      api.delete(`/contact/${id}`)
      toast.success('Contato excluido com sucesso')
      const newContact = recentContact?.filter(
        currentContact => currentContact.id !== id
      )
      setRecentContact(newContact)
    } catch (error) {
      toast.error('algo deu errado')
    }
  }

  const patchContact = async (formData: IcontactRequest) => {
    try {
      const newData = Object.fromEntries(
        Object.entries(formData).filter(([_, v]) => v != '')
      )
      const { data } = await api.patch(`/contact/${contactId}`, newData)
      setRecentContact(data)
      toast.success('contato atualizado com sucesso')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ContactContext.Provider
      value={{
        search,
        setSearch,
        createContactFunc,
        modalVisible,
        setModalVisible,
        recentContact,
        setRecentContact,
        modalContactConfig,
        setModalContactConfig,
        deleteContact,
        patchContact,
        contactId,
        setContactId,
        loadContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  )
}

export function useContactContext(): IContactContext {
  const context = useContext(ContactContext)

  return context
}
