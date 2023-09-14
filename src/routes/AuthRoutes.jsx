import {Routes, Route} from 'react'
import Home from '../pages/Home/Home';

const AuthRoutes = () => {
  return (
    <Routes>
        <Route element={<Home />} path="/" />
    </Routes>
  )
}

export default AuthRoutes