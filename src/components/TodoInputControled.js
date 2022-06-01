const TodoInputControlled = ({ handleSubmit, handleChange, value }) => {
	return (
		<form onSubmit={handleSubmit}>
			<label>Controled input:</label>
			<input id='todo' onChange={handleChange} value={value} />
			<button type='submit'>Add todo </button>
		</form>
	)
}

export default TodoInputControlled
