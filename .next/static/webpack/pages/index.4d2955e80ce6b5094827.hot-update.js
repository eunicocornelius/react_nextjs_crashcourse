webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Prices.js":
/*!******************************!*\
  !*** ./components/Prices.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);








var _jsxFileName = "E:\\Personal Projects\\react_nextjs_crashcourse\\components\\Prices.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var Prices = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Prices, _React$Component);

  var _super = _createSuper(Prices);

  function Prices() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Prices);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      currency: 'USD'
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Prices, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props$bpi = this.props.bpi,
          USD = _this$props$bpi.USD,
          GBP = _this$props$bpi.GBP,
          EUR = _this$props$bpi.EUR;
      console.log(typeof USD.code);
      var list = '';

      if (this.state.currency === 'USD') {
        list = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("li", {
          className: "list-group-item",
          children: ["Bitcoin rate for ", USD.description, ":", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("span", {
            className: "badge badge-primary",
            children: USD.code
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 11
          }, this), ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("strong", {
            children: USD.rate
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 9
        }, this);
      } else if (this.state.currency === 'GBP') {
        list = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("li", {
          className: "list-group-item",
          children: ["Bitcoin rate for ", GBP.description, ":", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("span", {
            className: "badge badge-primary",
            children: GBP.code
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 11
          }, this), ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("strong", {
            children: GBP.rate
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 9
        }, this);
      } else if (this.state.currency === 'EUR') {
        list = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("li", {
          className: "list-group-item",
          children: ["Bitcoin rate for ", EUR.description, ":", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("span", {
            className: "badge badge-primary",
            children: EUR.code
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 11
          }, this), ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("strong", {
            children: EUR.rate
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 9
        }, this);
      }

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("select", {
          onChange: function onChange(e) {
            return _this2.setState({
              currency: e.target.value
            });
          },
          className: "form-control",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("option", {
            value: "USD",
            children: "USD"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("option", {
            value: "GBP",
            children: "GBP"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("option", {
            value: "EUR",
            children: "EUR"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("ul", {
          className: "list-group",
          children: list
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 7
      }, this);
    }
  }]);

  return Prices;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Prices);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QcmljZXMuanMiXSwibmFtZXMiOlsiUHJpY2VzIiwiY3VycmVuY3kiLCJwcm9wcyIsImJwaSIsIlVTRCIsIkdCUCIsIkVVUiIsImNvbnNvbGUiLCJsb2ciLCJjb2RlIiwibGlzdCIsInN0YXRlIiwiZGVzY3JpcHRpb24iLCJyYXRlIiwiZSIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0lBRU1BLE07Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ0k7QUFDTkMsY0FBUSxFQUFFO0FBREosSzs7Ozs7Ozs2QkFJQztBQUFBOztBQUFBLDRCQUNtQixLQUFLQyxLQUFMLENBQVdDLEdBRDlCO0FBQUEsVUFDQ0MsR0FERCxtQkFDQ0EsR0FERDtBQUFBLFVBQ01DLEdBRE4sbUJBQ01BLEdBRE47QUFBQSxVQUNXQyxHQURYLG1CQUNXQSxHQURYO0FBRVBDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQU9KLEdBQUcsQ0FBQ0ssSUFBdkI7QUFDQSxVQUFJQyxJQUFJLEdBQUcsRUFBWDs7QUFDQSxVQUFJLEtBQUtDLEtBQUwsQ0FBV1YsUUFBWCxLQUF3QixLQUE1QixFQUFtQztBQUNqQ1MsWUFBSSxnQkFDRjtBQUFJLG1CQUFTLEVBQUMsaUJBQWQ7QUFBQSwwQ0FDb0JOLEdBQUcsQ0FBQ1EsV0FEeEIsT0FDc0MsR0FEdEMsZUFFRTtBQUFNLHFCQUFTLEVBQUMscUJBQWhCO0FBQUEsc0JBQXVDUixHQUFHLENBQUNLO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkYsRUFFMEQsR0FGMUQsZUFHRTtBQUFBLHNCQUFTTCxHQUFHLENBQUNTO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREY7QUFPRCxPQVJELE1BUU8sSUFBSSxLQUFLRixLQUFMLENBQVdWLFFBQVgsS0FBd0IsS0FBNUIsRUFBbUM7QUFDeENTLFlBQUksZ0JBQ0Y7QUFBSSxtQkFBUyxFQUFDLGlCQUFkO0FBQUEsMENBQ29CTCxHQUFHLENBQUNPLFdBRHhCLE9BQ3NDLEdBRHRDLGVBRUU7QUFBTSxxQkFBUyxFQUFDLHFCQUFoQjtBQUFBLHNCQUF1Q1AsR0FBRyxDQUFDSTtBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGLEVBRTBELEdBRjFELGVBR0U7QUFBQSxzQkFBU0osR0FBRyxDQUFDUTtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGO0FBT0QsT0FSTSxNQVFBLElBQUksS0FBS0YsS0FBTCxDQUFXVixRQUFYLEtBQXdCLEtBQTVCLEVBQW1DO0FBQ3hDUyxZQUFJLGdCQUNGO0FBQUksbUJBQVMsRUFBQyxpQkFBZDtBQUFBLDBDQUNvQkosR0FBRyxDQUFDTSxXQUR4QixPQUNzQyxHQUR0QyxlQUVFO0FBQU0scUJBQVMsRUFBQyxxQkFBaEI7QUFBQSxzQkFBdUNOLEdBQUcsQ0FBQ0c7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRixFQUUwRCxHQUYxRCxlQUdFO0FBQUEsc0JBQVNILEdBQUcsQ0FBQ087QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERjtBQU9EOztBQUNELDBCQUNFO0FBQUEsZ0NBQ0U7QUFDRSxrQkFBUSxFQUFFLGtCQUFDQyxDQUFEO0FBQUEsbUJBQU8sTUFBSSxDQUFDQyxRQUFMLENBQWM7QUFBRWQsc0JBQVEsRUFBRWEsQ0FBQyxDQUFDRSxNQUFGLENBQVNDO0FBQXJCLGFBQWQsQ0FBUDtBQUFBLFdBRFo7QUFFRSxtQkFBUyxFQUFDLGNBRlo7QUFBQSxrQ0FJRTtBQUFRLGlCQUFLLEVBQUMsS0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKRixlQUtFO0FBQVEsaUJBQUssRUFBQyxLQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxGLGVBTUU7QUFBUSxpQkFBSyxFQUFDLEtBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBU0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFURixlQVVFO0FBQUksbUJBQVMsRUFBQyxZQUFkO0FBQUEsb0JBQTRCUDtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBY0Q7Ozs7RUFoRGtCUSw0Q0FBSyxDQUFDQyxTOztBQW1EWm5CLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjRkMjk1NWU4MGNlNmI1MDk0ODI3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgUHJpY2VzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIGN1cnJlbmN5OiAnVVNEJyxcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IFVTRCwgR0JQLCBFVVIgfSA9IHRoaXMucHJvcHMuYnBpO1xyXG4gICAgY29uc29sZS5sb2codHlwZW9mIFVTRC5jb2RlKTtcclxuICAgIGxldCBsaXN0ID0gJyc7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW5jeSA9PT0gJ1VTRCcpIHtcclxuICAgICAgbGlzdCA9IChcclxuICAgICAgICA8bGkgY2xhc3NOYW1lPSdsaXN0LWdyb3VwLWl0ZW0nPlxyXG4gICAgICAgICAgQml0Y29pbiByYXRlIGZvciB7VVNELmRlc2NyaXB0aW9ufTp7JyAnfVxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdiYWRnZSBiYWRnZS1wcmltYXJ5Jz57VVNELmNvZGV9PC9zcGFuPnsnICd9XHJcbiAgICAgICAgICA8c3Ryb25nPntVU0QucmF0ZX08L3N0cm9uZz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmN1cnJlbmN5ID09PSAnR0JQJykge1xyXG4gICAgICBsaXN0ID0gKFxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9J2xpc3QtZ3JvdXAtaXRlbSc+XHJcbiAgICAgICAgICBCaXRjb2luIHJhdGUgZm9yIHtHQlAuZGVzY3JpcHRpb259OnsnICd9XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2JhZGdlIGJhZGdlLXByaW1hcnknPntHQlAuY29kZX08L3NwYW4+eycgJ31cclxuICAgICAgICAgIDxzdHJvbmc+e0dCUC5yYXRlfTwvc3Ryb25nPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuY3VycmVuY3kgPT09ICdFVVInKSB7XHJcbiAgICAgIGxpc3QgPSAoXHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT0nbGlzdC1ncm91cC1pdGVtJz5cclxuICAgICAgICAgIEJpdGNvaW4gcmF0ZSBmb3Ige0VVUi5kZXNjcmlwdGlvbn06eycgJ31cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nYmFkZ2UgYmFkZ2UtcHJpbWFyeSc+e0VVUi5jb2RlfTwvc3Bhbj57JyAnfVxyXG4gICAgICAgICAgPHN0cm9uZz57RVVSLnJhdGV9PC9zdHJvbmc+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgY3VycmVuY3k6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nVVNEJz5VU0Q8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9J0dCUCc+R0JQPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdFVVInPkVVUjwvb3B0aW9uPlxyXG4gICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9J2xpc3QtZ3JvdXAnPntsaXN0fTwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByaWNlcztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==