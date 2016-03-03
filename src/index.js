import { render } from 'react-dom';
import React from 'react';
import App from './components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoApp from './reducers/todoApp';
import { addTodo, deleteTodo } from './actions/todoActions';

let store = createStore(
	todoApp,
	window.devToolsExtension ? window.devToolsExtension() : undefined
);

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

store.dispatch(addTodo('Text 1'));
store.dispatch(addTodo('Text 2'));
