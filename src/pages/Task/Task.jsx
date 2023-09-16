import { useEffect, useState } from "react";
import { useTasks } from "../../hooks/useTasks";
import { useParams, Link } from "react-router-dom";

import './Task.css'

const Task = () => {

  const { saveTask, updateTask, getOneTask } = useTasks();
  const { id } = useParams();

  const [data, setData] = useState({
    name: "",
    startTime: "",
    endTime: "",
    details: ""
  })

  useEffect(() => {

    if(id){
      const dataTask = getOneTask(id);
      setData({ ...dataTask });
    }else{
      setData({
        name: "",
        startTime: "",
        endTime: "",
        details: ""
      })
    }

  }, [id, getOneTask])

  const handleSubmit = (e) => {
    e.preventDefault();

    if(id){
      updateTask(id, data)
    }else{
      saveTask(data);
      redirect("/")
    }
  }

  return (
    <div className="taskPage">
      <main>
        <div className="titlePage titleTaskPage">
          <div>
            {id ? (
              <h1>Editar Tarefa</h1>
            ): (
              <h1>Nova Tarefa</h1>
            )}
            <p>Você poderá editar a tarefa a qualquer momento</p>
          </div>
          <div>
            <Link to="/">Voltar</Link>
          </div>
        </div>
        <div className="formContainer">
          <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome da Tarefa:</label>
                <input id="name" name="name" type="text" placeholder="Digite o nome da tarefa" 
                onChange={(e) => setData({...data, name: e.target.value})} 
                value={data.name ? data.name : ""} />
            </div>
            <div>
                <label htmlFor="startTime">Hora Início: </label>
                <input id="startTime" name="startTime" type="text" placeholder="Digite a hora de início" 
                onChange={(e) => setData({...data, startTime: e.target.value})} 
                value={data.startTime ? data.startTime : ""} />
            </div>
            <div>
                <label htmlFor="endTime">Hora Fim: </label>
                <input id="endTime" name="endTime" type="text" placeholder="Digite a hora de fim" 
                onChange={(e) => setData({...data, endTime: e.target.value})} 
                value={data.endTime ? data.endTime : ""}/>
            </div>
            <div>
                <label htmlFor="details">Detalhes</label>
                <input id="details" name="details" type="text" placeholder="Digite os detalhes da tarefa" 
                onChange={(e) => setData({...data, details: e.target.value})} value={data.details ? data.details : ""}/>
            </div>
            <button type="submit">Salvar</button>
          </form>
        </div>
      </main>
    </div>
  )
}

export default Task