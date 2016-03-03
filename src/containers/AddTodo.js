import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions/todoActions';

const AddTodo = ({dispatch}) => {
	let text;
	return <div>
		<h1>Add a new task</h1>
		<form onSubmit={(event) => {
			event.preventDefault()
			dispatch(addTodo(text));
		}}>
			<input type="text" onChange={(event) => {
				text = event.target.value;
			}} />
			<button type="submit">Add task</button>
		</form>
	</div>;
};

export default connect()(AddTodo)
