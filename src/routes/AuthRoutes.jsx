import {Routes, Route} from 'react-router-dom';

import Home from '../pages/Home/Home';
import Task from '../pages/Task/Task';
import NotFound from '../pages/NotFound/NotFound';

const AuthRoutes = () => {
  return (
    <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Task />} path="/task" />
        <Route element={<Task />} path="/task/:id" />
        <Route element={<NotFound />} path="*" />
    </Routes>
  )
}

export default AuthRoutes