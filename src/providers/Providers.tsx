import { ContactProvider } from './ContactContext'
import { IUserProviderProps, UserContextProvider } from './UserContext'

function Providers({ children }: IUserProviderProps) {
  return (
    <UserContextProvider>
      <ContactProvider>{children}</ContactProvider>
    </UserContextProvider>
  )
}

export default Providers
