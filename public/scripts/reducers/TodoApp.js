'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.visibilityFilter = visibilityFilter;
exports.todos = todos;

var _redux = require('redux');

var Redux = _interopRequireWildcard(_redux);

var _TodoActions = require('../actions/TodoActions');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function visibilityFilter() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? _TodoActions.VisibilityFilters.SHOW_ALL : arguments[0];
    var action = arguments[1];

    switch (action.type) {
        case _TodoActions.TodoActionTypes.SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}
function todos() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
    var action = arguments[1];

    switch (action.type) {
        case _TodoActions.TodoActionTypes.ADD:
            return [].concat(_toConsumableArray(state), [
            //add todo item
            {
                text: action.text,
                completed: false
            }]);
        case _TodoActions.TodoActionTypes.COMPLETE:
            return [].concat(_toConsumableArray(state.slice(0, action.index)), [
            //complete todo item and return it
            Object.assign({}, state[action.index], {
                completed: true
            })], _toConsumableArray(state.slice(action.index + 1)));
        default:
            return state;
    }
}
//To Reducer and export as default
var TodoApp = Redux.combineReducers({ visibilityFilter: visibilityFilter, todos: todos });
exports.default = TodoApp;