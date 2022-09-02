import React, {useEffect, useState} from 'react'
import empty from 'is-empty'
import image from '../../../img/happy.png'
import {request} from '../../helpers/request.jsx'

const TodoContainer = () => {
	const [todos,setTodos] = useState()
	const [newTodo, setNewTodo] = useState("")
	const [isLoading, setIsLoading] = useState(true)
	const url = "https://assets.breatheco.de/apis/fake/todos/user/leonarmed"

	const handleKeyDown = async (event) => {
		setNewTodo(event.target.value)
		if (event.key === 'Enter' && !empty(newTodo)) {
			setIsLoading(true)
			
			const options = {
				url: url,
				method: 'PUT',
				body: JSON.stringify([...todos, {"label":newTodo, "done":false}])
			};

			const res = await request(options)
			if(res){
				getTodos()
			}
		}
	}

	const deleteElement = async (i) => {
		// setIsLoading(true)
		const newTodos = todos.filter((todo,index)=>{
			if(i!==index){
				return(todo[i])
			}
		})
		console.log(newTodos) 
		
		// const options = {
		// 	method: 'PUT',
		// 	body: []
		// };
		// console.log(res())
		// await fetch("https://assets.breatheco.de/apis/fake/todos/user/leonarmed", options)
		// .then(response => response.json())
		// .then(response => {
		// 	console.log(response)
		// 	setTodos([...todos, {"label":newTodo, "done":false}])
		// 	setNewTodo('')
		// })
		// .catch(err => console.error(err))
		// .finally(()=>setIsLoading(false))
		// setTodos(res)
	}

	async function getTodos(){
		const res = await request({url})
		if(res){
			setTodos(res)
			setIsLoading(false)
			return(res)
		}
	}

	useEffect(()=>{
		getTodos()
	},[])

    return (
        <div className="container">
            <h1>TODOS</h1>
			<div className="card" style={{width:"18rem", margin:'auto'}}>
				<ul className="list-group list-group-flush">
					<li key="input" className="list-group-item">
						<input 
							type="text"
							className="input-todo"
							value={newTodo}
							placeholder='Agrega una tarea'
							onKeyDownCapture={handleKeyDown}
							onChange={(e)=>setNewTodo(e.target.value)}/>
					</li>
					{todos && !empty(todos) && !isLoading ? 
						todos.map((todo,i)=>{
						return <li key={i} className="list-group-item" >{todo.label}<i className="fas fa-trash-alt" onClick={()=>deleteElement(i)}></i></li>	
					})
					: 
						<div>
							{isLoading ? <p>Cargando ...</p> : <div className="d-flex flex-column align-items-center"><img src={image} width="120px"/><p>No hay tareas, puedes agregar una nueva</p></div>}
						</div>
					}
				</ul>
				<div className="card-body text-start">
					{todos &&
						<small>{todos.length} tareas pendientes</small>
					}
				</div>
            </div>
        </div>
    )
}
export default TodoContainer;