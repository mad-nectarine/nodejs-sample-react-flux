'use strict';

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

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

var _react = require('react');

var React = _interopRequireWildcard(_react);

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

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Footer = (function (_React$Component) {
    _inherits(Footer, _React$Component);

    function Footer() {
        _classCallCheck(this, Footer);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Footer).apply(this, arguments));
    }

    _createClass(Footer, [{
        key: 'renderFilter',
        value: function renderFilter(filter, name) {
            var _this2 = this;

            if (filter === this.props.filter) {
                return name;
            }
            return React.createElement("a", { "href": '#', "onClick": function onClick(e) {
                    e.preventDefault();
                    _this2.props.onFilterChange(filter);
                } }, name);
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement("p", null, "Show:", ' ', this.renderFilter(_TodoActions.VisibilityFilters.SHOW_ALL, 'All'), ', ', this.renderFilter(_TodoActions.VisibilityFilters.SHOW_COMPLETED, 'Completed'), ', ', this.renderFilter(_TodoActions.VisibilityFilters.SHOW_ACTIVE, 'Active'), ".");
        }
    }]);

    return Footer;
})(React.Component);

exports.default = Footer;