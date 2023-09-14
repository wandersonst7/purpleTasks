import React from 'react'
import Login from '../pages/Login/Login'
import { Routes, Route } from 'react-router-dom'

const SignRoutes = () => {
  return (
    <Routes>
        <Route element={<Login />} path="/"/>
    </Routes>
  )
}

export default SignRoutes