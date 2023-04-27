import React from 'react'
import { Container } from './styles'
import { Outlet } from 'react-router-dom'

export function FundoPages() {
  return (
    <>
      <Container>
        <img
          src="https://static.vecteezy.com/system/resources/previews/021/536/826/original/connected-gears-and-icons-for-logistic-service-shipping-distribution-transport-market-communicate-concepts-phone-contact-remove-gear-blue-icon-set-on-white-background-vector.jpg"
          alt="imagem de fundo"
        />
      </Container>
      <Outlet />
    </>
  )
}
