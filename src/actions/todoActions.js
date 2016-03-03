import { ADD_TODO, DELETE_TODO, COMPLETE_TODO } from '../action-types/actionTypes';

export function addTodo(text) {
	return {
		type: ADD_TODO,
		text
	};
}

export function deleteTodo(id) {
	return {
		type: DELETE_TODO,
		id
	}
}

export function completeTodo(id) {
	return {
		type: COMPLETE_TODO,
		id
	}
}
