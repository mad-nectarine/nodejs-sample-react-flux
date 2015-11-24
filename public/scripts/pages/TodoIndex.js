'use strict';

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactDom = require('react-dom');

var ReactDom = _interopRequireWildcard(_reactDom);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxDevtools = require('redux-devtools');

var _react2 = require('redux-devtools/lib/react');

var _TodoApp = require('../containers/TodoApp');

var _TodoApp2 = _interopRequireDefault(_TodoApp);

var _TodoApp3 = require('../reducers/TodoApp');

var _TodoApp4 = _interopRequireDefault(_TodoApp3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var finalCreateStore = (0, _redux.compose)(
// Enables your middleware:
(0, _redux.applyMiddleware)(_reduxThunk2.default), // any Redux middleware, e.g. redux-thunk
// Provides support for DevTools:
(0, _reduxDevtools.devTools)(),
// Lets you write ?debug_session=<name> in address bar to persist debug sessions
(0, _reduxDevtools.persistState)(window.location.href.match(/[?&]debug_session=([^&]+)\b/)))(_redux.createStore);
var rootElement = document.getElementById("root");
var initialState = JSON.parse(rootElement.getAttribute("data-initialstate"));
var store = finalCreateStore(_TodoApp4.default, initialState);
ReactDom.render(React.createElement("div", null, React.createElement(_reactRedux.Provider, { "store": store }, React.createElement(_TodoApp2.default, null)), React.createElement(_react2.DebugPanel, { "top": true, "right": true, "bottom": true }, React.createElement(_react2.DevTools, { "store": store, "monitor": _react2.LogMonitor }))), rootElement);