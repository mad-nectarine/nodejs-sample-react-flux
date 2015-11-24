"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.addTodo = addTodo;
exports.addTodoWithValidate = addTodoWithValidate;
exports.showMessage = showMessage;
exports.clearMessage = clearMessage;
exports.completeTodo = completeTodo;
exports.setVisibilityFilter = setVisibilityFilter;
/*
 * action types
 */
var TodoActionTypes = exports.TodoActionTypes = {
    ADD: "TODO.INCREMENT",
    COMPLETE: "TODO.DECREMENT",
    SET_VISIBILITY_FILTER: "TODO.SET_VISIBILITY_FILTER ",
    SHOW_MESSAGE: "TODO.SHOW_MESSAGE",
    CLEAR_MESSAGE: "TODO.CLEAR_MESSAGE"
};
/*
* action creators
*/
function addTodo(inputText) {
    return { type: TodoActionTypes.ADD, inputText: inputText };
}
;
function addTodoWithValidate(inputText) {
    return function (dispatch, getState) {
        var _getState = getState();

        var todos = _getState.todos;
        //validate

        var err = "";
        if (inputText == null || inputText == "") {
            err = "please input todo.";
        } else if (todos.find(function (x) {
            return x.text == inputText;
        }) != null) {
            err = "already registerd.";
        }
        //Show Error or Add Todo
        if (err) {
            //Error
            dispatch(showMessage({
                text: err,
                type: "error"
            }));
        } else {
            //Add
            dispatch(addTodo(inputText));
            dispatch(clearMessage());
        }
    };
}
;
function showMessage(message) {
    return { type: TodoActionTypes.SHOW_MESSAGE, message: message };
}
;
function clearMessage() {
    return { type: TodoActionTypes.CLEAR_MESSAGE };
}
;
function completeTodo(key) {
    return { type: TodoActionTypes.COMPLETE, key: key };
}
;
function setVisibilityFilter(filter) {
    return { type: TodoActionTypes.SET_VISIBILITY_FILTER, filter: filter };
}
;