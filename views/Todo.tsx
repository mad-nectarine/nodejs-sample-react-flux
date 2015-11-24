import * as React from 'react';
import * as ReactDom from 'react-dom/server';
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider, ElementClass } from 'react-redux'
import { devTools, persistState } from 'redux-devtools';
import { DebugPanel, DevTools, LogMonitor } from 'redux-devtools/lib/react';

import DefaultLayout from './layout/DefaultLayout';
import { Reducer, CreateStateData } from  '../public/scripts/reducers/todoApp'
import App from '../public/scripts/containers/TodoApp'
import * as TodoActionCreator from '../public/scripts/actions/TodoActions';
import { VisibilityFilters } from '../public/scripts/models/todomodels';
import * as uuid from 'node-uuid';

export interface TodoProps {
	title: string
}

export default class Todo extends React.Component<TodoProps, any>
{
	render() {
		var initStoreData = CreateStateData(
		{
			visibilityFilter: VisibilityFilters.SHOW_COMPLETED,
			todos:[
				{ key: uuid.v4(), text: "init1", completed: false },
				{ key: uuid.v4(), text: "init2", completed: true },
				{ key: uuid.v4(), text: "init3", completed: false },
			]
		});
		
		const finalCreateStore = compose(
			// Enables your middleware:
			applyMiddleware(thunk), // any Redux middleware, e.g. redux-thunk
			// Provides support for DevTools:
			devTools()
		)(createStore);

		let store = finalCreateStore(Reducer, initStoreData);
		// store.dispatch(TodoActionCreator.addTodo("add after"))
		
		let el = <div>
				<Provider store={store}>
					<App />
					</Provider>
				<DebugPanel top right bottom>
					<DevTools store={store} monitor={LogMonitor} />
					</DebugPanel>
			</div>;
		let html = ReactDom.renderToString(el);
		let initialState = store.getState();

		return <DefaultLayout 
		title={this.props.title} 
		initialState={initialState} 
		pageName="todoIndex" 
		html={html} />;
	}
}

module.exports = Todo;