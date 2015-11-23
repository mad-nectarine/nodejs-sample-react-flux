"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddTodo = (function (_React$Component) {
    _inherits(AddTodo, _React$Component);

    function AddTodo() {
        _classCallCheck(this, AddTodo);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(AddTodo).apply(this, arguments));
    }

    _createClass(AddTodo, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            return React.createElement("div", null, React.createElement("input", { "type": 'text', "ref": 'input' }), React.createElement("button", { "onClick": function onClick(e) {
                    return _this2.handleClick(e);
                } }, "Add"));
        }
    }, {
        key: "handleClick",
        value: function handleClick(e) {
            var node = this.refs.input;
            var text = node.value; //.trim()
            this.props.onAddClick(text);
            node.value = "";
        }
    }]);

    return AddTodo;
})(React.Component);

exports.default = AddTodo;