import { BrowserRouter} from 'react-router-dom';

import SignRoutes from './SignRoutes';
import AuthRoutes from './AuthRoutes';

const Routes = () => {
  return (
    <BrowserRouter>
        <SignRoutes />
    </BrowserRouter>
  )
}

export default Routes