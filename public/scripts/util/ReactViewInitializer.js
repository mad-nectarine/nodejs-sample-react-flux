'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = GetRenderElement;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _reduxDevtools = require('redux-devtools');

var _react2 = require('redux-devtools/lib/react');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function GetRenderElement(reducer, component, initialState) {
    // const finalCreateStore = compose(
    // 	// Enables your middleware:
    // 	applyMiddleware(), // any Redux middleware, e.g. redux-thunk
    // 	// Provides support for DevTools:
    // 	devTools(),
    // 	// Lets you write ?debug_session=<name> in address bar to persist debug sessions
    // 	persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
    var finalCreateStore = (0, _redux.compose)(
    // Enables your middleware:
    (0, _redux.applyMiddleware)(), // any Redux middleware, e.g. redux-thunk
    // Provides support for DevTools:
    (0, _reduxDevtools.devTools)())(_redux.createStore);
    var store = finalCreateStore(reducer, initialState);
    var result = {
        Element: React.createElement("div", null, React.createElement(_reactRedux.Provider, { "store": store }, component), React.createElement(_react2.DebugPanel, { "top": true, "right": true, "bottom": true }, React.createElement(_react2.DevTools, { "store": store, "monitor": _react2.LogMonitor }))),
        Store: store
    };
    return result;
}