/*
 * action types
 */
export const TodoActionTypes = {
  ADD : "TODO.INCREMENT",
  COMPLETE : "TODO.DECREMENT",
  SET_VISIBILITY_FILTER : "TODO.SET_VISIBILITY_FILTER "
};

/*
 * other constants
 */

export enum VisibilityFilters {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE
};

export class TodoActionCreator
{
  /*
  * action creators
  */
  static addTodo(text) {
    return { type: TodoActionTypes.ADD, text }
  };
  
  static completeTodo(index) {
    return { type: TodoActionTypes.COMPLETE, index }
  };
  
  static setVisibilityFilter(filter : VisibilityFilters) {
    return { type: TodoActionTypes.SET_VISIBILITY_FILTER, filter }
  };  
}  
