/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ // The require scope
  /******/ var __webpack_require__ = {};
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  /*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */ default: () => /* binding */ makeContactDiv,
    /* harmony export */
  });
  /* eslint-disable no-param-reassign */
  function makeContactDiv(element) {
    element.innerHTML = "";
    element.style.height = "55vh";

    const contactDiv = document.createElement("div");
    contactDiv.classList = "contact";

    const address = document.createElement("div");
    address.classList = "address";
    address.innerHTML = "15 Albata St. India";

    const phone = document.createElement("div");
    phone.classList = "phone";
    phone.innerHTML = "+20 50 123 458";

    const workingHours = document.createElement("div");
    workingHours.classList = "hours";
    workingHours.innerHTML = "Saturday - Wednesday: 9AM - 11PM";

    const weekend = document.createElement("div");
    weekend.classList = "weekend";
    weekend.innerHTML = "Thursday - Friday: 9AM - 1AM";

    contactDiv.appendChild(address);
    contactDiv.appendChild(phone);
    contactDiv.appendChild(workingHours);
    contactDiv.appendChild(weekend);
    element.appendChild(contactDiv);
  }
  /******/
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1ha2VDb250YWN0RGl2KGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBcIjU1dmhcIjtcblxuICAgIGNvbnN0IGNvbnRhY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhY3REaXYuY2xhc3NMaXN0ID0gXCJjb250YWN0XCI7XG5cbiAgICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhZGRyZXNzLmNsYXNzTGlzdCA9IFwiYWRkcmVzc1wiO1xuICAgIGFkZHJlc3MuaW5uZXJIVE1MID0gXCIxNSBBbGJhdGEgU3QuIEluZGlhXCI7XG5cbiAgICBjb25zdCBwaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcGhvbmUuY2xhc3NMaXN0ID0gXCJwaG9uZVwiO1xuICAgIHBob25lLmlubmVySFRNTCA9IFwiKzIwIDUwIDEyMyA0NThcIjtcblxuICAgIGNvbnN0IHdvcmtpbmdIb3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgd29ya2luZ0hvdXJzLmNsYXNzTGlzdCA9IFwiaG91cnNcIjtcbiAgICB3b3JraW5nSG91cnMuaW5uZXJIVE1MID0gXCJTYXR1cmRheSAtIFdlZG5lc2RheTogOUFNIC0gMTFQTVwiO1xuXG4gICAgY29uc3Qgd2Vla2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgd2Vla2VuZC5jbGFzc0xpc3QgPSBcIndlZWtlbmRcIjtcbiAgICB3ZWVrZW5kLmlubmVySFRNTCA9IFwiVGh1cnNkYXkgLSBGcmlkYXk6IDlBTSAtIDFBTVwiO1xuXG4gICAgY29udGFjdERpdi5hcHBlbmRDaGlsZChhZGRyZXNzKTtcbiAgICBjb250YWN0RGl2LmFwcGVuZENoaWxkKHBob25lKTtcbiAgICBjb250YWN0RGl2LmFwcGVuZENoaWxkKHdvcmtpbmdIb3Vycyk7XG4gICAgY29udGFjdERpdi5hcHBlbmRDaGlsZCh3ZWVrZW5kKTtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNvbnRhY3REaXYpO1xufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
