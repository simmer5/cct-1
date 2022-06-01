import { useState, useRef } from 'react'
import TodoInputControled from './components/TodoInputControled'
import TodoInputUncontroled from './components/TodoInputUncontroled'
import TodoList from './components/TodoList'
import './App.css'

function App() {
	const inputRef = useRef(null)
	const [todoes, setTodoes] = useState([])
	const [todo, setTodo] = useState('')

	const handleControledInput = e => {
		e.preventDefault()
		setTodoes(prev => [...prev, todo])
		setTodo('')
	}
	const handleUncontroledInput = e => {
		e.preventDefault()
		const newTodo = inputRef.current.value
		setTodoes(prev => [...prev, newTodo])
		inputRef.current.value = ''
	}

	return (
		<div className='App'>
			<h1>Hello this is CCT Todo app</h1>
			<TodoInputControled
				handleSubmit={handleControledInput}
				handleChange={e => setTodo(e.target.value)}
				value={todo}
			/>
			<TodoInputUncontroled
				inputRef={inputRef}
				uncontroledSubmit={handleUncontroledInput}
			/>
			<TodoList todoes={todoes} />
		</div>
	)
}

export default App
