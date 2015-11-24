import * as React from 'react';
import Todo from './Todo';
import {TodoItem} from '../models/TodoModels';

export interface TodoListProps {
  onTodoClick: { (key: string): void },
  todos: Array<TodoItem>
}

export default class TodoList extends React.Component<TodoListProps, any> {
  render() {
    return (
      <ul className="list">
        {this.props.todos.map((todo, index) =>
          <Todo {...todo}
            key={todo.key }
            onClick={() => this.props.onTodoClick(todo.key) } />
        ) }
        </ul>
    )
  }
}