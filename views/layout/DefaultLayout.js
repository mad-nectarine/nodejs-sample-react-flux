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

var DefaultLayout = (function (_React$Component) {
    _inherits(DefaultLayout, _React$Component);

    function DefaultLayout() {
        _classCallCheck(this, DefaultLayout);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(DefaultLayout).apply(this, arguments));
    }

    _createClass(DefaultLayout, [{
        key: "render",
        value: function render() {
            var stateJson = JSON.stringify(this.props.initialState);
            return React.createElement("html", null, React.createElement("head", null, React.createElement("title", null, this.props.title), React.createElement("link", { "rel": "stylesheet", "href": "/stylesheets/style.css" })), React.createElement("body", null, React.createElement("header", null, React.createElement("a", { "href": "/", "className": "title" }, "Redux")), React.createElement("h1", null, this.props.title), React.createElement("div", { "id": "root", "dangerouslySetInnerHTML": { __html: this.props.html }, "data-initialstate": stateJson }), React.createElement("script", null), React.createElement("script", { "type": "text/javascript", "src": "/scripts/pages/built/" + this.props.pageName + ".debug.js" })));
        }
    }]);

    return DefaultLayout;
})(React.Component);

exports.default = DefaultLayout;

module.exports = DefaultLayout;