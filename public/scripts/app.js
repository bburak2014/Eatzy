"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./App.css");

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _Home = _interopRequireDefault(require("./Roots/Home"));

var _List = _interopRequireDefault(require("./Roots/List"));

var _Detail = _interopRequireDefault(require("./Components/Details/Detail"));

var _Header = _interopRequireDefault(require("./Components/Header/Header"));

var _Footer = _interopRequireDefault(require("./Components/Footer/Footer"));

var _PageNotFound = _interopRequireDefault(require("./Components/PageNotFound/PageNotFound"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App() {
  return /*#__PURE__*/_react.default.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react.default.createElement(_Header.default, null), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Routes, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/",
    element: /*#__PURE__*/_react.default.createElement(_Home.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/Portfolio",
    element: /*#__PURE__*/_react.default.createElement(_List.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/Portfolio/:id",
    element: /*#__PURE__*/_react.default.createElement(_Detail.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "*",
    element: /*#__PURE__*/_react.default.createElement(_PageNotFound.default, null)
  })), /*#__PURE__*/_react.default.createElement(_Footer.default, null));
}

var _default = App;
exports.default = _default;
