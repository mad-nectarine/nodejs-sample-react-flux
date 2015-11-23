import * as React from 'react';
import * as ReactRedux from 'react-redux';
import { TodoActionCreator, VisibilityFilters } from '../actions/TodoActions';
import TodoApp from '../reducers/TodoApp'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'
import Footer from '../components/Footer'
import { TodoItem } from '../components/Todo'


export interface TodoAppProps {
  dispatch?
  visibleTodos?: Array<TodoItem>
  visibilityFilter?: VisibilityFilters
}

class App extends React.Component<TodoAppProps,any> {
  render() {
    // Injected by connect() call:
    const { dispatch, visibleTodos, visibilityFilter } = this.props
    return (
      <div>
        <AddTodo
          onAddClick={text =>
            dispatch(TodoActionCreator.addTodo(text))
          } />
        <TodoList
          todos={visibleTodos}
          onTodoClick={index =>
            dispatch(TodoActionCreator.completeTodo(index))
          } />
        <Footer
          filter={visibilityFilter}
          onFilterChange={nextFilter =>
            dispatch(TodoActionCreator.setVisibilityFilter(nextFilter))
          } />
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
    visibilityFilter: state.visibilityFilter
  }
}

// Wrap the component to inject dispatch and state into it
export default ReactRedux.connect(select)(App)