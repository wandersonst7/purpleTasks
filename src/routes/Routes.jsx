import { BrowserRouter} from 'react-router-dom';

import SignRoutes from './SignRoutes';
import AuthRoutes from './AuthRoutes';
import { useAuth } from '../contexts/AuthContext';

const Routes = () => {
  const { token } = useAuth();

  return (
    <BrowserRouter>
        {token ? (<AuthRoutes />) : (<SignRoutes />)}
    </BrowserRouter>
  )
}

export default Routes