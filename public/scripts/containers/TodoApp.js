'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactRedux = require('react-redux');

var ReactRedux = _interopRequireWildcard(_reactRedux);

var _redux = require('redux');

var Redux = _interopRequireWildcard(_redux);

var _TodoModels = require('../models/TodoModels');

var _TodoActions = require('../actions/TodoActions');

var TodoActionCreator = _interopRequireWildcard(_TodoActions);

var _AddTodo = require('../components/AddTodo');

var _AddTodo2 = _interopRequireDefault(_AddTodo);

var _TodoList = require('../components/TodoList');

var _TodoList2 = _interopRequireDefault(_TodoList);

var _TodoFilter = require('../components/TodoFilter');

var _TodoFilter2 = _interopRequireDefault(_TodoFilter);

var _MessageArea = require('../components/MessageArea');

var _MessageArea2 = _interopRequireDefault(_MessageArea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = (function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            // Injected by connect() call:
            var _props = this.props;
            var visibleTodos = _props.visibleTodos;
            var visibilityFilter = _props.visibilityFilter;
            var message = _props.message;
            var addTodoWithValidate = _props.addTodoWithValidate;
            var clearMessage = _props.clearMessage;
            var showMessage = _props.showMessage;
            var setVisibilityFilter = _props.setVisibilityFilter;
            var completeTodo = _props.completeTodo;

            return React.createElement("div", null, React.createElement(_MessageArea2.default, { "message": message }), React.createElement(_AddTodo2.default, { "onAddClick": addTodoWithValidate }), React.createElement("section", null, React.createElement(_TodoFilter2.default, { "filter": visibilityFilter, "onFilterChange": setVisibilityFilter }), React.createElement(_TodoList2.default, { "todos": visibleTodos, "onTodoClick": completeTodo })));
        }
    }]);

    return App;
})(React.Component);

function selectTodos(todos, filter) {
    switch (filter) {
        case _TodoModels.VisibilityFilters.SHOW_ALL:
            return todos;
        case _TodoModels.VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(function (todo) {
                return todo.completed;
            });
        case _TodoModels.VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(function (todo) {
                return !todo.completed;
            });
    }
}
// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
    return {
        visibleTodos: selectTodos(state.todos, state.visibilityFilter),
        visibilityFilter: state.visibilityFilter,
        message: state.message
    };
}
function mapDispatchToProps(dispatch) {
    return Redux.bindActionCreators(TodoActionCreator, dispatch);
}
exports.default = ReactRedux.connect(select, mapDispatchToProps)(App);