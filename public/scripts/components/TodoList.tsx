import * as React from 'react';
import Todo from './Todo';
import { TodoItem } from './Todo';

export interface TodoListProps {
  onTodoClick: { (index: number): void },
  todos: Array<TodoItem>
}

export default class TodoList extends React.Component<TodoListProps, any> {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo, index) =>
          <Todo {...todo}
            key={index.toString() }
            onClick={() => this.props.onTodoClick(index) } />
        ) }
        </ul>
    )
  }
}