import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  )
}

export default Router
