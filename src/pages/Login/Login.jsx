import { useAuth } from '../../contexts/AuthContext'
import './Login.css';

import { BsGoogle } from 'react-icons/bs'

const Login = () => {

  document.title = "Login";

  const { loginGoogle } = useAuth();

  return (
    <div className='loginPage'>
        <header>
            <h1>PurpleTasks</h1>
        </header>
        <main>
            <div>
                <h2>Seu Melhor Gerenciador de Tarefas</h2>
                <p>Organize suas tarefas de forma fácil</p>
                <p className='cto'>Comece agora mesmo!</p>
                <button onClick={loginGoogle} className="buttonLoginGoogle" type="button"> <BsGoogle /> Logar com o Google</button>
            </div>
        </main>
    </div>
  )
}

export default Login