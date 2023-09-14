import { AuthContextProvider } from "./contexts/AuthContext";
import Routes from "./routes/Routes";

function App() {

  return (
    <AuthContextProvider>
      <Routes />
    </AuthContextProvider>
  )
}

export default App
