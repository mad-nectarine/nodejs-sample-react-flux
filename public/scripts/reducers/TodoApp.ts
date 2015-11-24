import * as Redux from 'redux';
import { TodoActionTypes } from '../actions/TodoActions';
import { TodoItem, VisibilityFilters } from '../models/TodoModels';
import * as uuid from 'node-uuid';

//Reducer
function visibilityFilter(state: VisibilityFilters = VisibilityFilters.SHOW_ALL, action) {
	switch (action.type) {
		case TodoActionTypes.SET_VISIBILITY_FILTER:
			return action.filter
		default:
			return state
	}
}
function todos(state = [], action) {
	switch (action.type) {
		case TodoActionTypes.ADD:
			return [
				...state,
				//add todo item
				{
					key: uuid.v4(),
					text: action.inputText,
					completed: false
				}
			];
		case TodoActionTypes.COMPLETE:
			let target = state.find(x => x.key == action.key);
			let targetIndex = state.indexOf(target);
			return [
				//return pre complete items
				...state.slice(0, targetIndex),
				//complete todo item and return it 
				Object.assign({}, state[targetIndex], {
					completed: true
				}),
				//return post complete items 
				...state.slice(targetIndex + 1)
			];
		default:
			return state;
	}
}

function message(state: { text: string, type: string } = null, action) {
	switch (action.type) {
		case TodoActionTypes.SHOW_MESSAGE:
			return action.message;
		case TodoActionTypes.CLEAR_MESSAGE:
			return null;
		default:
			return state;
	}
}

export const Reducer = Redux.combineReducers({ visibilityFilter, todos, message});
export default Reducer;

//create state
export interface TodoAppState {
	visibilityFilter?: VisibilityFilters,
	todos?: Array<TodoItem>,
	message?: { text: string, type: string }
}
export function CreateStateData(data: TodoAppState): TodoAppState {
	var state = {
		visibilityFilter: VisibilityFilters.SHOW_ALL,
		todos: new Array<TodoItem>()
	};
	if (data != null) {
		state = Object.assign(state, data);
	}
	return state;
}

