import { Link } from "react-router-dom";
import { useTasks } from "../../hooks/useTasks";
import { useAuth } from "../../contexts/AuthContext";

import "./Home.css";
import SideBar from "../../components/SideBar";


import { AiOutlinePlus } from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';
import { useEffect, useState } from "react";

const Home = () => {

  document.title = "Home"

  const { logout } = useAuth();
  const { tasks, deleteTask } = useTasks();

  const [message, setMessage] = useState();

  useEffect(() => {
    const storedMessage = localStorage.getItem('MESSAGE');

    if (storedMessage) {
        setMessage(storedMessage);
        
        localStorage.removeItem('MESSAGE');
    }
  }, []);

  useEffect(() => {
    if(message){
      const timer = setTimeout(() => {
        setMessage("")
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [message])

  const handleDeleteTask = (taskId) => {
    deleteTask(taskId);
    setMessage("Tarefa excluída com sucesso.");
    navigate("/");
  }

  return (
    <div className="homePage">
      <SideBar />
      <main>
        <div className="titlePage">
          <h1 className="logo">PurpleTasks</h1>
          <h1>Todas as tarefas</h1>
          <p>Cadastrar as suas tarefas vai te ajudar a organizar melhor seu dia.</p>
        </div>
        { message && <p className="msg">{message}</p> }
        <div className="tasks">
          { tasks.map((task) => (

            <div key={task.id} className="task">
              <span></span>
              <div>
                <h2>{task.name}</h2>
                <div className="taskInfo">
                  <p><strong>Hora Início:</strong> {task.startTime}</p>
                  <p><strong>Hora Fim:</strong> {task.endTime}</p>
                  <p><strong>Detalhes:</strong> {task.details}</p>
                </div>
                <div className="taskButtons">
                  <button type="button" className="deleteTask" onClick={() => handleDeleteTask(task.id)}>Excluir</button>
                  <Link className="editTask" to={`/task/${task.id}`}>Editar</Link>
                </div>
              </div>
            </div>

          ))}

        </div>
      </main>
      <nav className="navMobile">
        <div>
            <span></span>
            <Link to="/task"> <AiOutlinePlus /> </Link>
            <button type="button" onClick={ logout }><FiLogOut /></button>
        </div>
      </nav>
    </div>
  )
}

export default Home