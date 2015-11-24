import * as React from 'react'
import { render } from 'react-dom'
import { compose, createStore, applyMiddleware } from 'redux'
import { Provider,ElementClass } from 'react-redux'
import App from '../containers/TodoApp'
import { devTools, persistState } from 'redux-devtools';
import { DebugPanel, DevTools, LogMonitor } from 'redux-devtools/lib/react';

export default function GetRenderElement<P>(reducer,component : React.ReactElement<P>, initialState:any){

	// const finalCreateStore = compose(
	// 	// Enables your middleware:
	// 	applyMiddleware(), // any Redux middleware, e.g. redux-thunk
	// 	// Provides support for DevTools:
	// 	devTools(),
	// 	// Lets you write ?debug_session=<name> in address bar to persist debug sessions
	// 	persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
	const finalCreateStore = compose(
	// Enables your middleware:
	applyMiddleware(), // any Redux middleware, e.g. redux-thunk
	// Provides support for DevTools:
	devTools()
	)(createStore);

	let store = finalCreateStore(reducer, initialState);
	var result = 
	{
		Element :<div>
				<Provider store={store}>
					{component}
					</Provider>
				<DebugPanel top right bottom>
					<DevTools store={store} monitor={LogMonitor} />
					</DebugPanel>
					</div>,
	   Store: store	
		
	}
	return result;
}