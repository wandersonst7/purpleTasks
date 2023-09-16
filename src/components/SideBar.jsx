import { Link } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext';
import './SideBar.css';

const SideBar = () => {

    const { logout } = useAuth();
 
  return (
    <nav className="sideBar">
        <div>
        <Link to="/"><h2>PurpleTasks</h2></Link>
        <Link to="/task">Nova Tarefa</Link>
        </div>
        <button onClick={ logout }>Logout</button>
    </nav>
  )
}

export default SideBar