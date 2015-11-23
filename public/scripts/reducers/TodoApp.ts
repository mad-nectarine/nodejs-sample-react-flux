import * as Redux from 'redux';
import { TodoActionTypes, VisibilityFilters } from '../actions/TodoActions';

class reducer {

	visibilityFilter(state : VisibilityFilters = VisibilityFilters.SHOW_ALL, action) {
		switch (action.type) {
			case TodoActionTypes.SET_VISIBILITY_FILTER:
				return action.filter
			default:
				return state
		}
	}
	
	todos(state = [], action) {
		switch (action.type) {
			case TodoActionTypes.ADD:
				return [
					...state,
					//add todo item
					{
						text: action.text,
						completed: false
					}
				];
			case TodoActionTypes.COMPLETE:
				return [
					//return pre complete items
					...state.slice(0, action.index),
					//complete todo item and return it 
					Object.assign({}, state[action.index], {
						completed: true
					}),
					//return post complete items 
					...state.slice(action.index + 1)
				];
			default:
				return state;
		}
	}
}

//To Reducer and export as default
const TodoApp = Redux.combineReducers(reducer);
export default TodoApp;
