"use strict";

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

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

/*
 * action types
 */
var TodoActionTypes = exports.TodoActionTypes = {
    ADD: "TODO.INCREMENT",
    COMPLETE: "TODO.DECREMENT",
    SET_VISIBILITY_FILTER: "TODO.SET_VISIBILITY_FILTER "
};
/*
 * other constants
 */
var VisibilityFilters = exports.VisibilityFilters = undefined;
(function (VisibilityFilters) {
    VisibilityFilters[VisibilityFilters["SHOW_ALL"] = 0] = "SHOW_ALL";
    VisibilityFilters[VisibilityFilters["SHOW_COMPLETED"] = 1] = "SHOW_COMPLETED";
    VisibilityFilters[VisibilityFilters["SHOW_ACTIVE"] = 2] = "SHOW_ACTIVE";
})(VisibilityFilters || (exports.VisibilityFilters = VisibilityFilters = {}));
;

var TodoActionCreator = exports.TodoActionCreator = (function () {
    function TodoActionCreator() {
        _classCallCheck(this, TodoActionCreator);
    }

    _createClass(TodoActionCreator, [{
        key: "addTodo",

        /*
        * action creators
        */
        value: function addTodo(text) {
            return { type: TodoActionTypes.ADD, text: text };
        }
    }, {
        key: "completeTodo",
        value: function completeTodo(index) {
            return { type: TodoActionTypes.COMPLETE, index: index };
        }
    }, {
        key: "setVisibilityFilter",
        value: function setVisibilityFilter(filter) {
            return { type: TodoActionTypes.SET_VISIBILITY_FILTER, filter: filter };
        }
    }]);

    return TodoActionCreator;
})();