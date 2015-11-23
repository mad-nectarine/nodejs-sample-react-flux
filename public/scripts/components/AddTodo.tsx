import * as React from 'react'

export interface AddTodoProps {
	 onAddClick: { (text: string): void }
}

export default class AddTodo extends React.Component<AddTodoProps, {}> {
  render() {
    return (
      <div>
        <input type='text' ref='input' />
        <button onClick={(e) => this.handleClick(e) }>
          Add
          </button>
        </div>
    )
  }

  handleClick(e) {
    const node = this.refs.input;
    const text = node.value; //.trim()
    this.props.onAddClick(text);
    node.value = "";
  }
  refs: any
} 