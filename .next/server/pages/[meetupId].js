(function() {
var exports = {};
exports.id = "pages/[meetupId]";
exports.ids = ["pages/[meetupId]"];
exports.modules = {

/***/ "./components/meetups/MeetupDetail.js":
/*!********************************************!*\
  !*** ./components/meetups/MeetupDetail.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MeetupDetail.module.css */ "./components/meetups/MeetupDetail.module.css");
/* harmony import */ var _MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\MANJULA\\Nextjs-app\\Project-2\\013 06-onwards-to-a-bigger-project-starting-project\\06-onwards-to-a-bigger-project-starting-project\\components\\meetups\\MeetupDetail.js";


function MeetupDetail(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_1___default().detail),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: props.image,
        alt: props.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: props.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("address", {
        children: props.address
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
        children: props.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

/* harmony default export */ __webpack_exports__["default"] = (MeetupDetail);

/***/ }),

/***/ "./pages/[meetupId].js":
/*!*****************************!*\
  !*** ./pages/[meetupId].js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticPaths": function() { return /* binding */ getStaticPaths; },
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/meetups/MeetupDetail */ "./components/meetups/MeetupDetail.js");

var _jsxFileName = "C:\\Users\\MANJULA\\Nextjs-app\\Project-2\\013 06-onwards-to-a-bigger-project-starting-project\\06-onwards-to-a-bigger-project-starting-project\\pages\\[meetupId].js";


const MeetupDetailPage = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_1__.default, {
    image: "https://www.shbarcelona.com/blog/en/wp-content/uploads/2016/02/barcelonameetups.jpg",
    title: "First meetup",
    address: "some address 5 some city",
    description: "This is a First Meetup"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }, undefined);
};

async function getStaticPaths() {
  return {
    fallback: true,
    paths: [{
      params: {
        meetupId: "m1"
      }
    }, {
      params: {
        meetupId: "m2"
      }
    }]
  };
}
async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  return {
    props: {
      meetupData: {
        image: "https://www.shbarcelona.com/blog/en/wp-content/uploads/2016/02/barcelonameetups.jpg",
        id: meetupId,
        title: "First meetup",
        address: "some address 5 some city",
        description: "This is a First Meetup"
      }
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (MeetupDetailPage);

/***/ }),

/***/ "./components/meetups/MeetupDetail.module.css":
/*!****************************************************!*\
  !*** ./components/meetups/MeetupDetail.module.css ***!
  \****************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"detail": "MeetupDetail_detail__C_8IT"
};


/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/[meetupId].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cERldGFpbC5qcyIsIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vcGFnZXMvW21lZXR1cElkXS5qcyIsIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cERldGFpbC5tb2R1bGUuY3NzIiwid2VicGFjazovL25leHRqcy1jb3Vyc2UvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJNZWV0dXBEZXRhaWwiLCJwcm9wcyIsImNsYXNzZXMiLCJpbWFnZSIsInRpdGxlIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiTWVldHVwRGV0YWlsUGFnZSIsImdldFN0YXRpY1BhdGhzIiwiZmFsbGJhY2siLCJwYXRocyIsInBhcmFtcyIsIm1lZXR1cElkIiwiZ2V0U3RhdGljUHJvcHMiLCJjb250ZXh0IiwibWVldHVwRGF0YSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQSxTQUFTQSxZQUFULENBQXNCQyxLQUF0QixFQUE2QjtBQUMzQixzQkFDRTtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFFQyx3RUFBaEI7QUFBQSw4QkFDRTtBQUFLLFdBQUcsRUFBRUQsS0FBSyxDQUFDRSxLQUFoQjtBQUF1QixXQUFHLEVBQUVGLEtBQUssQ0FBQ0c7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBQSxrQkFBS0gsS0FBSyxDQUFDRztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUdFO0FBQUEsa0JBQVVILEtBQUssQ0FBQ0k7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGLGVBSUU7QUFBQSxrQkFBS0osS0FBSyxDQUFDSztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQVVEOztBQUVELCtEQUFlTixZQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBOztBQUNBLE1BQU1PLGdCQUFnQixHQUFHLE1BQU07QUFDN0Isc0JBQ0UsOERBQUMscUVBQUQ7QUFDRSxTQUFLLEVBQUMscUZBRFI7QUFFRSxTQUFLLEVBQUMsY0FGUjtBQUdFLFdBQU8sRUFBQywwQkFIVjtBQUlFLGVBQVcsRUFBQztBQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVFELENBVEQ7O0FBVU8sZUFBZUMsY0FBZixHQUFnQztBQUNyQyxTQUFPO0FBQ0xDLFlBQVEsRUFBQyxJQURKO0FBRUxDLFNBQUssRUFBRSxDQUFDO0FBQUVDLFlBQU0sRUFBRTtBQUFFQyxnQkFBUSxFQUFFO0FBQVo7QUFBVixLQUFELEVBQWlDO0FBQUVELFlBQU0sRUFBRTtBQUFFQyxnQkFBUSxFQUFFO0FBQVo7QUFBVixLQUFqQztBQUZGLEdBQVA7QUFJRDtBQUNNLGVBQWVDLGNBQWYsQ0FBOEJDLE9BQTlCLEVBQXVDO0FBQzVDLFFBQU1GLFFBQVEsR0FBR0UsT0FBTyxDQUFDSCxNQUFSLENBQWVDLFFBQWhDO0FBQ0EsU0FBTztBQUNMWCxTQUFLLEVBQUU7QUFDTGMsZ0JBQVUsRUFBRTtBQUNWWixhQUFLLEVBQ0gscUZBRlE7QUFHVmEsVUFBRSxFQUFFSixRQUhNO0FBSVZSLGFBQUssRUFBRSxjQUpHO0FBS1ZDLGVBQU8sRUFBRSwwQkFMQztBQU1WQyxtQkFBVyxFQUFFO0FBTkg7QUFEUDtBQURGLEdBQVA7QUFZRDtBQUNELCtEQUFlQyxnQkFBZixFOzs7Ozs7Ozs7O0FDaENBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNIQSxtRCIsImZpbGUiOiJwYWdlcy9bbWVldHVwSWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vTWVldHVwRGV0YWlsLm1vZHVsZS5jc3NcIjtcclxuZnVuY3Rpb24gTWVldHVwRGV0YWlsKHByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRldGFpbH0+XHJcbiAgICAgICAgPGltZyBzcmM9e3Byb3BzLmltYWdlfSBhbHQ9e3Byb3BzLnRpdGxlfSAvPlxyXG4gICAgICAgIDxoMz57cHJvcHMudGl0bGV9PC9oMz5cclxuICAgICAgICA8YWRkcmVzcz57cHJvcHMuYWRkcmVzc308L2FkZHJlc3M+XHJcbiAgICAgICAgPGg0Pntwcm9wcy5kZXNjcmlwdGlvbn08L2g0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lZXR1cERldGFpbDtcclxuIiwiaW1wb3J0IE1lZXR1cERldGFpbCBmcm9tIFwiLi4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cERldGFpbFwiO1xyXG5jb25zdCBNZWV0dXBEZXRhaWxQYWdlID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TWVldHVwRGV0YWlsXHJcbiAgICAgIGltYWdlPVwiaHR0cHM6Ly93d3cuc2hiYXJjZWxvbmEuY29tL2Jsb2cvZW4vd3AtY29udGVudC91cGxvYWRzLzIwMTYvMDIvYmFyY2Vsb25hbWVldHVwcy5qcGdcIlxyXG4gICAgICB0aXRsZT1cIkZpcnN0IG1lZXR1cFwiXHJcbiAgICAgIGFkZHJlc3M9XCJzb21lIGFkZHJlc3MgNSBzb21lIGNpdHlcIlxyXG4gICAgICBkZXNjcmlwdGlvbj1cIlRoaXMgaXMgYSBGaXJzdCBNZWV0dXBcIlxyXG4gICAgLz5cclxuICApO1xyXG59O1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGZhbGxiYWNrOnRydWUsXHJcbiAgICBwYXRoczogW3sgcGFyYW1zOiB7IG1lZXR1cElkOiBcIm0xXCIgfSB9LCB7IHBhcmFtczogeyBtZWV0dXBJZDogXCJtMlwiIH0gfV0sXHJcbiAgfTtcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IG1lZXR1cElkID0gY29udGV4dC5wYXJhbXMubWVldHVwSWQ7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIG1lZXR1cERhdGE6IHtcclxuICAgICAgICBpbWFnZTpcclxuICAgICAgICAgIFwiaHR0cHM6Ly93d3cuc2hiYXJjZWxvbmEuY29tL2Jsb2cvZW4vd3AtY29udGVudC91cGxvYWRzLzIwMTYvMDIvYmFyY2Vsb25hbWVldHVwcy5qcGdcIixcclxuICAgICAgICBpZDogbWVldHVwSWQsXHJcbiAgICAgICAgdGl0bGU6IFwiRmlyc3QgbWVldHVwXCIsXHJcbiAgICAgICAgYWRkcmVzczogXCJzb21lIGFkZHJlc3MgNSBzb21lIGNpdHlcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgRmlyc3QgTWVldHVwXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTWVldHVwRGV0YWlsUGFnZTtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZGV0YWlsXCI6IFwiTWVldHVwRGV0YWlsX2RldGFpbF9fQ184SVRcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==