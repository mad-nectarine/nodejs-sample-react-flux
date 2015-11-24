'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Reducer = undefined;
exports.CreateStateData = CreateStateData;

var _redux = require('redux');

var Redux = _interopRequireWildcard(_redux);

var _TodoActions = require('../actions/TodoActions');

var _TodoModels = require('../models/TodoModels');

var _nodeUuid = require('node-uuid');

var uuid = _interopRequireWildcard(_nodeUuid);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

//Reducer
function visibilityFilter() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? _TodoModels.VisibilityFilters.SHOW_ALL : arguments[0];
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
                key: uuid.v4(),
                text: action.inputText,
                completed: false
            }]);
        case _TodoActions.TodoActionTypes.COMPLETE:
            var target = state.find(function (x) {
                return x.key == action.key;
            });
            var targetIndex = state.indexOf(target);
            return [].concat(_toConsumableArray(state.slice(0, targetIndex)), [
            //complete todo item and return it
            Object.assign({}, state[targetIndex], {
                completed: true
            })], _toConsumableArray(state.slice(targetIndex + 1)));
        default:
            return state;
    }
}
function message() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
    var action = arguments[1];

    switch (action.type) {
        case _TodoActions.TodoActionTypes.SHOW_MESSAGE:
            return action.message;
        case _TodoActions.TodoActionTypes.CLEAR_MESSAGE:
            return null;
        default:
            return state;
    }
}
var Reducer = exports.Reducer = Redux.combineReducers({ visibilityFilter: visibilityFilter, todos: todos, message: message });
exports.default = Reducer;
function CreateStateData(data) {
    var state = {
        visibilityFilter: _TodoModels.VisibilityFilters.SHOW_ALL,
        todos: new Array()
    };
    if (data != null) {
        state = Object.assign(state, data);
    }
    return state;
}