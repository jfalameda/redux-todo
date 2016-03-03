import { combineReducers }       from 'redux';
import { ADD_TODO, DELETE_TODO, COMPLETE_TODO } from '../action-types/actionTypes';

const initialState = {
	_lastIndex: 0,
	todos: []
};

export default function todoApp(state = initialState, action) {
	switch (action.type) {
		case ADD_TODO:
			return Object.assign({}, state, {
				_lastIndex: state._lastIndex + 1,
				todos: [ ...state.todos,
					{
						id: state._lastIndex + 1,
						text: action.text,
						completed: false
					}
				]
			});
		case DELETE_TODO:
		case COMPLETE_TODO:
			let index = state.todos.findIndex((todo) => todo.id === action.id);
			return Object.assign({}, state, {
				todos: [
					...state.todos.slice(0,index),
					Object.assign({}, state.todos[index], {
						completed: true
					}),
					...state.todos.slice(index+1)
				]
			});

		default:
			return state;
	}
}
