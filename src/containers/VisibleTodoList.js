import {connect} from 'react-redux';
import TodoList from '../components/TodoList';
import {completeTodo} from '../actions/todoActions';


const matchStateToProps = (state) => {
	return {
		todos: state.todos
	};
};

const matchDispatchToProps = (dispatch) => {
	return {
		onTodoCompleted: (id) => dispatch(completeTodo(id))
	}
}

export default connect(
	matchStateToProps,
	matchDispatchToProps
)(TodoList);
