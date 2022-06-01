import React from 'react'

const TodoInputUncontroled = ({ inputRef, uncontroledSubmit }) => {
	return (
		<form onSubmit={uncontroledSubmit}>
			<label>Uncontroled input:</label>
			<input ref={inputRef} />
			<button type='submit'>Add todo </button>
		</form>
	)
}

export default TodoInputUncontroled
