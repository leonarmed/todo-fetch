import React, {useState} from 'react'
import empty from 'is-empty'
import image from '../../../img/happy.png'

const TodoContainer = ({Tasks}) => {
	const [todos,setTodos] = useState(Tasks)
	const [newTodo, setNewTodo] = useState("")

	const handleKeyDown = (event) => {
		setNewTodo(event.target.value)
		if (event.key === 'Enter' && !empty(newTodo)) {
			setTodos([...todos, newTodo])
			setNewTodo('')
		}
	}

	const deleteElement = (i) => {
		const res = prev => {
			const newTodos = prev.filter((todo,index)=>{
				return !(todo[i]===todo[index])
			})
			return newTodos
		}
		setTodos(res)
	}

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
					{todos && !empty(todos) ? 
						todos.map((todo,i)=>{
						return <li key={i} className="list-group-item" >{todo}<i className="fas fa-trash-alt" onClick={()=>deleteElement(i)}></i></li>	
					})
					: 
						<div>
							<img src={image} width="120px"/>
							<p>No hay tareas, puedes agregar una nueva</p>
						</div>
					}
				</ul>
				<div className="card-body text-start">
					<small>{todos.length} tareas pendientes</small>
				</div>
            </div>
        </div>
    )
}
export default TodoContainer;