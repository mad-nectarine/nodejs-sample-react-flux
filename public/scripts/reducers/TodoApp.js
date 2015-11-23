'use strict';

var _createClass = (function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
})();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = require('redux');

var Redux = _interopRequireWildcard(_redux);

var _TodoActions = require('../actions/TodoActions');

function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    } else {
        var newObj = {};if (obj != null) {
            for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
            }
        }newObj.default = obj;return newObj;
    }
}

function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
        }return arr2;
    } else {
        return Array.from(arr);
    }
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var reducer = (function () {
    function reducer() {
        _classCallCheck(this, reducer);
    }

    _createClass(reducer, [{
        key: 'visibilityFilter',
        value: function visibilityFilter() {
            var state = arguments.length <= 0 || arguments[0] === undefined ? _TodoActions.VisibilityFilters.SHOW_ALL : arguments[0];
            var action = arguments[1];

            switch (action.type) {
                case _TodoActions.TodoActionTypes.SET_VISIBILITY_FILTER:
                    return action.filter;
                default:
                    return state;
            }
        }
    }, {
        key: 'todos',
        value: function todos() {
            var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
            var action = arguments[1];

            switch (action.type) {
                case _TodoActions.TodoActionTypes.ADD:
                    return [].concat(_toConsumableArray(state), [
                    //add todo item
                    {
                        text: action.text,
                        completed: false
                    }]);
                case _TodoActions.TodoActionTypes.COMPLETE:
                    return [].concat(_toConsumableArray(state.slice(0, action.index)), [
                    //complete todo item and return it
                    Object.assign({}, state[action.index], {
                        completed: true
                    })], _toConsumableArray(state.slice(action.index + 1)));
                default:
                    return state;
            }
        }
    }]);

    return reducer;
})();
//To Reducer and export as default

var TodoApp = Redux.combineReducers(reducer);
exports.default = TodoApp;