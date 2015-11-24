import * as React from 'react';
import * as ReactRedux from 'react-redux';
import * as Redux from 'redux';
import {TodoItem, VisibilityFilters} from '../models/TodoModels';
import * as TodoActionCreator from '../actions/TodoActions';
import TodoApp from '../reducers/TodoApp'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'
import Filter from '../components/TodoFilter'
import MessageArea from '../components/MessageArea'
import { bindActionCreators } from 'redux'


export interface TodoAppProps extends TodoActionCreator.TodoActionApi {
  dispatch?
  visibleTodos?: Array<TodoItem>
  visibilityFilter?: VisibilityFilters
  message?: { text: string, type: string }
}

class App extends React.Component<TodoAppProps, any> {
  render() {
    // Injected by connect() call:
    const { 
      visibleTodos, 
      visibilityFilter, 
      message,
      addTodoWithValidate,
      clearMessage,
      showMessage,
      setVisibilityFilter,
      completeTodo
    } = this.props;
    
    return (
      <div>
        <MessageArea message={message}/>
        <AddTodo
          onAddClick={addTodoWithValidate} />
        <section>
        <Filter
          filter={visibilityFilter}
          onFilterChange={setVisibilityFilter}
           />
        <TodoList
          todos={visibleTodos}
          onTodoClick={completeTodo}
           />
          </section>
        </div>
    )
  }
}

function selectTodos(todos: Array<TodoItem>, filter: VisibilityFilters) {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed)
  }
}

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
  return {
    visibleTodos: selectTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter,
    message: state.message
  }
}

function mapDispatchToProps(dispatch) {
  return Redux.bindActionCreators(TodoActionCreator, dispatch)
}

// Wrap the component to inject dispatch and state into it
export default ReactRedux.connect(select,mapDispatchToProps)(App)