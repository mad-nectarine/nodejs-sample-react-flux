import * as React from 'react';

export interface TodoProps extends TodoItem {
  key: string,
  onClick: { (): void },
}

export interface TodoItem
{
  text: string,
  completed: boolean
  
}

export default class Todo extends React.Component<TodoProps, any> {
  render() {
    return (
      <li
        onClick={this.props.onClick}
        style={{
          textDecoration: this.props.completed ? 'line-through' : 'none',
          cursor: this.props.completed ? 'default' : 'pointer'
        }}>
        {this.props.text}
        </li>
    )
  }
}