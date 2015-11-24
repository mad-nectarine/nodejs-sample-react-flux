import * as React from 'react'
import * as ReactDom from 'react-dom'
import { compose, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import { devTools, persistState } from 'redux-devtools';
import { DebugPanel, DevTools, LogMonitor } from 'redux-devtools/lib/react';

import App from '../containers/TodoApp'
import Reducer from '../reducers/TodoApp'

let finalCreateStore = compose(
	// Enables your middleware:
	applyMiddleware(thunk), // any Redux middleware, e.g. redux-thunk
	// Provides support for DevTools:
	devTools(),
	// Lets you write ?debug_session=<name> in address bar to persist debug sessions
	persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore);

let rootElement = document.getElementById("root");
let initialState = JSON.parse(rootElement.getAttribute("data-initialstate"));
let store = finalCreateStore(Reducer, initialState);

ReactDom.render(
	<div>
		<Provider store={store}>
		<App />
			</Provider>
		<DebugPanel top right bottom>
		<DevTools store={store} monitor={LogMonitor} />
			</DebugPanel >
		</div>
	, rootElement
)