import { VisibilityFilters } from '../models/ToDoModels' 
/*
 * action types
 */
export const TodoActionTypes = {
  ADD: "TODO.INCREMENT",
  COMPLETE: "TODO.DECREMENT",
  SET_VISIBILITY_FILTER: "TODO.SET_VISIBILITY_FILTER ",
  SHOW_MESSAGE: "TODO.SHOW_MESSAGE",
  CLEAR_MESSAGE: "TODO.CLEAR_MESSAGE"
};

export interface TodoActionApi {
  addTodo?: { (text: string): void },
  addTodoWithValidate?: { (): void },
  showMessage?: { (message: { text: string, type: string }): void }
  clearMessage?: { (): void }
  setVisibilityFilter?: { (filter: VisibilityFilters): void }
  completeTodo?: { (key: string): void }
}

/*
* action creators
*/
export function addTodo(inputText: string) {
  return { type: TodoActionTypes.ADD, inputText };
};

export function addTodoWithValidate(inputText: string) {
  return (dispatch, getState) => {
    const { todos } = getState()
      
    //validate
    var err = "";
    if (inputText == null || inputText == "") {
      err = "please input todo.";
    } else if (todos.find(x => x.text == inputText) != null) {
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
  }
};
export function showMessage(message) {
  return { type: TodoActionTypes.SHOW_MESSAGE, message }
};
export function clearMessage() {
  return { type: TodoActionTypes.CLEAR_MESSAGE }
};

export function completeTodo(key) {
  return { type: TodoActionTypes.COMPLETE, key }
};

export function setVisibilityFilter(filter: VisibilityFilters) {
  return { type: TodoActionTypes.SET_VISIBILITY_FILTER, filter }
};
 
