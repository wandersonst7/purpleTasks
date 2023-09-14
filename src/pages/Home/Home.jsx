import { useAuth } from "../../contexts/AuthContext"

const Home = () => {

  const { logout, name } = useAuth();

  return (
    <div>
      <h1>Home</h1>
      <button onClick={ logout }>Logout</button>
    </div>
  )
}

export default Home