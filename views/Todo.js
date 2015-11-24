'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _server = require('react-dom/server');

var ReactDom = _interopRequireWildcard(_server);

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reactRedux = require('react-redux');

var _reduxDevtools = require('redux-devtools');

var _react2 = require('redux-devtools/lib/react');

var _DefaultLayout = require('./layout/DefaultLayout');

var _DefaultLayout2 = _interopRequireDefault(_DefaultLayout);

var _todoApp = require('../public/scripts/reducers/todoApp');

var _TodoApp = require('../public/scripts/containers/TodoApp');

var _TodoApp2 = _interopRequireDefault(_TodoApp);

var _todomodels = require('../public/scripts/models/todomodels');

var _nodeUuid = require('node-uuid');

var uuid = _interopRequireWildcard(_nodeUuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Todo = (function (_React$Component) {
    _inherits(Todo, _React$Component);

    function Todo() {
        _classCallCheck(this, Todo);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Todo).apply(this, arguments));
    }

    _createClass(Todo, [{
        key: 'render',
        value: function render() {
            var initStoreData = (0, _todoApp.CreateStateData)({
                visibilityFilter: _todomodels.VisibilityFilters.SHOW_COMPLETED,
                todos: [{ key: uuid.v4(), text: "init1", completed: false }, { key: uuid.v4(), text: "init2", completed: true }, { key: uuid.v4(), text: "init3", completed: false }]
            });
            var finalCreateStore = (0, _redux.compose)(
            // Enables your middleware:
            (0, _redux.applyMiddleware)(_reduxThunk2.default), // any Redux middleware, e.g. redux-thunk
            // Provides support for DevTools:
            (0, _reduxDevtools.devTools)())(_redux.createStore);
            var store = finalCreateStore(_todoApp.Reducer, initStoreData);
            // store.dispatch(TodoActionCreator.addTodo("add after"))
            var el = React.createElement("div", null, React.createElement(_reactRedux.Provider, { "store": store }, React.createElement(_TodoApp2.default, null)), React.createElement(_react2.DebugPanel, { "top": true, "right": true, "bottom": true }, React.createElement(_react2.DevTools, { "store": store, "monitor": _react2.LogMonitor })));
            var html = ReactDom.renderToString(el);
            var initialState = store.getState();
            return React.createElement(_DefaultLayout2.default, { "title": this.props.title, "initialState": initialState, "pageName": "todoIndex", "html": html });
        }
    }]);

    return Todo;
})(React.Component);

exports.default = Todo;

module.exports = Todo;