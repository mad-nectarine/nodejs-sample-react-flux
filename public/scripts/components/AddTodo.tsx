import * as React from 'react'

export interface AddTodoProps {
	 onAddClick: { (inputText: string): void }
}

export default class AddTodo extends React.Component<AddTodoProps, {}> {
  render() {
    return (
      <section>
      <div className="input-form">
        <input type='text' ref='input' />
        <input type="button" onClick={(e) => this.handleClick(e) } value="Add" />
        </div>
        </section>
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