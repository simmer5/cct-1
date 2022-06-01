import React from 'react'

const TodoList = ({ todoes }) => {
	return (
		<ul>
			{todoes.map(todo => (
				<li key={todo}>{todo}</li>
			))}
		</ul>
	)
}

export default TodoList
