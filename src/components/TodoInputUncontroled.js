import React from 'react'

const TodoInputUncontrolled = ({ inputRef, uncontroledSubmit }) => {
	return (
		<form onSubmit={uncontroledSubmit}>
			<label>Uncontrolled input:</label>
			<input ref={inputRef} />
			<button type='submit'>Add todo </button>
		</form>
	)
}

export default TodoInputUncontrolled
