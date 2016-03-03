import React from 'react';

const Todo = ({id, text, completed, onTodoCompleted}) => {
	let item;
	if(!completed) {
		item = text;
	} else {
		item = <s>{text}</s>;
	}
	return (<li>
		<span onClick={ () => onTodoCompleted(id) }>{item}</span>
	</li>);
};

export default Todo;
