'use strict';

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactDom = require('react-dom');

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _TodoApp = require('../containers/TodoApp');

var _TodoApp2 = _interopRequireDefault(_TodoApp);

var _TodoApp3 = require('../reducers/TodoApp');

var _TodoApp4 = _interopRequireDefault(_TodoApp3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var store = (0, _redux.createStore)(_TodoApp4.default);
var rootElement = document.getElementById('root');
(0, _reactDom.render)(React.createElement(_reactRedux.Provider, { "store": store }, React.createElement(_TodoApp2.default, null)), rootElement);