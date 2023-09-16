import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom';

export const useTasks = () => {
    // states
    const [tasks, setTasks] = useState([]);
    const [request, setRequest] = useState(false);

    const redirect = useNavigate();

    //other
    function generateId() {
        const timestamp = new Date().getTime();
        const randomNumber = Math.random();
        const strId = `${timestamp}${randomNumber}`;
        const uniqueId = strId.replace('.', "")
        return uniqueId;
      }

    // requests
    const getOneTask = useCallback((id) => {
        return tasks.find((task) => task.id === id);
    }, [tasks])

    const saveTask = (data) => {
        const newId = generateId();
        data.id = newId;
        setTasks(prevTasks => [...prevTasks, data])

        localStorage.setItem('MESSAGE', 'Tarefa cadastrada com sucesso.')
        setRequest(true)
    }

    const deleteTask = (id) => {
        setTasks(prevTasks => {
            return prevTasks.filter((task) => task.id !== id)
        })
        
        setRequest(true)
    }

    const updateTask = (id, data) => {

        setTasks(prevTasks => {
            return prevTasks.map((task) => {
                if(task.id === id){
                    return { ...task, ...data };
                }

                return task;
            })
        })

        localStorage.setItem('MESSAGE', 'Tarefa atualizada com sucesso.')
        setRequest(true)
    }

    // useEffect
    useEffect(() => {
        const tasksStoraged = JSON.parse(localStorage.getItem('tasksStoraged'));
        setRequest(false)
        
        if(tasksStoraged){
            setTasks(tasksStoraged)
        }
    }, [])

    useEffect(() => {
        if(request){
            localStorage.setItem('tasksStoraged', JSON.stringify(tasks));                
            redirect("/")
        }
    }, [tasks, request])

  return { tasks, getOneTask, saveTask, updateTask, deleteTask }
}

export default useTasks;