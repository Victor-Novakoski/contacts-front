import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import { FundoPages } from '../components/FundoPages'

const Router: React.FC = () => {
  return (
    <Routes>
      <Route element={<FundoPages />}>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  )
}

export default Router
