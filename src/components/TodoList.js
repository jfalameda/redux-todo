import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, onTodoCompleted}) => (
	<div>
		{todos.map((todo) =>
			<Todo key={todo.id} {...todo} onTodoCompleted={onTodoCompleted} />
		)}
	</div>
);

export default TodoList;
