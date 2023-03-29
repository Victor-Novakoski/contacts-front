import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { RecentContacts } from '../../components/RecentContacts'
import { UserInfo } from '../../components/UserInfo'
import { useContactContext } from '../../providers/ContactContext'
import { useUserContext } from '../../providers/UserContext'
import { Container } from './style'

export function Home() {
  const { token } = useUserContext()
  const { loadContact } = useContactContext()

  useEffect(() => {
    loadContact()
  }, [])

  return (
    <Container>
      {token ? (
        <>
          <UserInfo />
          <RecentContacts />
        </>
      ) : (
        <Navigate to={'/'} />
      )}
    </Container>
  )
}
