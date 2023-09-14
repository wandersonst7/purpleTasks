import { AuthContextProvider } from "./contexts/AuthContext";
import {  GoogleOAuthProvider  } from '@react-oauth/google' ;
import Routes from "./routes/Routes";

function App() {

  return (
    <GoogleOAuthProvider clientId = "600035637607-d9140dgoiu21oqg8e9spp9deuegel3na.apps.googleusercontent.com">
      <AuthContextProvider>
          <Routes />
      </AuthContextProvider>
    </GoogleOAuthProvider>
  )
}

export default App
