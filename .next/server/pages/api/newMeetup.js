(function() {
var exports = {};
exports.id = "pages/api/newMeetup";
exports.ids = ["pages/api/newMeetup"];
exports.modules = {

/***/ "./pages/api/newMeetup.js":
/*!********************************!*\
  !*** ./pages/api/newMeetup.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ "mongodb");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);


async function handler(req, res) {
  if (req.method == "POST") {
    const data = req.body;
    const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect("mongodb+srv://Manjula:Manju123@cluster0.wohhw4h.mongodb.net/meetups?retryWrites=true&w=majority");
    const db = client.db();
    const meetupscollection = db.collection("meetups");
    const result = await meetupscollection.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({
      message: "Meetup inserted!"
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (handler);

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ (function(module) {

"use strict";
module.exports = require("mongodb");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/newMeetup.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vcGFnZXMvYXBpL25ld01lZXR1cC5qcyIsIndlYnBhY2s6Ly9uZXh0anMtY291cnNlL2V4dGVybmFsIFwibW9uZ29kYlwiIl0sIm5hbWVzIjpbImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJkYXRhIiwiYm9keSIsImNsaWVudCIsIk1vbmdvQ2xpZW50IiwiZGIiLCJtZWV0dXBzY29sbGVjdGlvbiIsImNvbGxlY3Rpb24iLCJyZXN1bHQiLCJpbnNlcnRPbmUiLCJjb25zb2xlIiwibG9nIiwiY2xvc2UiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBLGVBQWVBLE9BQWYsQ0FBdUJDLEdBQXZCLEVBQTRCQyxHQUE1QixFQUFpQztBQUMvQixNQUFJRCxHQUFHLENBQUNFLE1BQUosSUFBYyxNQUFsQixFQUEwQjtBQUN4QixVQUFNQyxJQUFJLEdBQUdILEdBQUcsQ0FBQ0ksSUFBakI7QUFDQSxVQUFNQyxNQUFNLEdBQUcsTUFBTUMsd0RBQUEsQ0FDbkIsaUdBRG1CLENBQXJCO0FBR0EsVUFBTUMsRUFBRSxHQUFHRixNQUFNLENBQUNFLEVBQVAsRUFBWDtBQUNBLFVBQU1DLGlCQUFpQixHQUFHRCxFQUFFLENBQUNFLFVBQUgsQ0FBYyxTQUFkLENBQTFCO0FBQ0EsVUFBTUMsTUFBTSxHQUFHLE1BQU1GLGlCQUFpQixDQUFDRyxTQUFsQixDQUE0QlIsSUFBNUIsQ0FBckI7QUFDQVMsV0FBTyxDQUFDQyxHQUFSLENBQVlILE1BQVo7QUFDQUwsVUFBTSxDQUFDUyxLQUFQO0FBQ0FiLE9BQUcsQ0FBQ2MsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGFBQU8sRUFBRTtBQUFYLEtBQXJCO0FBQ0Q7QUFDRjs7QUFDRCwrREFBZWxCLE9BQWYsRTs7Ozs7Ozs7Ozs7QUNmQSxxQyIsImZpbGUiOiJwYWdlcy9hcGkvbmV3TWVldHVwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xyXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgaWYgKHJlcS5tZXRob2QgPT0gXCJQT1NUXCIpIHtcclxuICAgIGNvbnN0IGRhdGEgPSByZXEuYm9keTtcclxuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXHJcbiAgICAgIFwibW9uZ29kYitzcnY6Ly9NYW5qdWxhOk1hbmp1MTIzQGNsdXN0ZXIwLndvaGh3NGgubW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIlxyXG4gICAgKTtcclxuICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcbiAgICBjb25zdCBtZWV0dXBzY29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oXCJtZWV0dXBzXCIpO1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbWVldHVwc2NvbGxlY3Rpb24uaW5zZXJ0T25lKGRhdGEpO1xyXG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgIGNsaWVudC5jbG9zZSgpO1xyXG4gICAgcmVzLnN0YXR1cygyMDEpLmpzb24oeyBtZXNzYWdlOiBcIk1lZXR1cCBpbnNlcnRlZCFcIiB9KTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==