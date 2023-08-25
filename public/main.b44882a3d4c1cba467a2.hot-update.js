"use strict";
self["webpackHotUpdateSetup"]("main",{

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _effects_intersection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./effects/intersection */ "./app/effects/intersection.js");
/* harmony import */ var _effects_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./effects/text */ "./app/effects/text.js");
/* harmony import */ var _effects_aladino__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./effects/aladino */ "./app/effects/aladino.js");
/* harmony import */ var _effects_preloader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./effects/preloader */ "./app/effects/preloader.js");




window.addEventListener("DOMContentLoaded", () => {
  class App {
    constructor() {
      this.createWebgl();
      this.createPreloder();
    }
    createWebgl() {
      this.effects = {
        wave: new _effects_aladino__WEBPACK_IMPORTED_MODULE_2__["default"](),
        text: new _effects_text__WEBPACK_IMPORTED_MODULE_1__["default"]({
          animate: this.animate
        }),
        scroll: new _effects_intersection__WEBPACK_IMPORTED_MODULE_0__["default"]()
      };
    }
    createPreloder() {
      this.preloader = new _effects_preloader__WEBPACK_IMPORTED_MODULE_3__["default"]({
        eventEmitter: this.eventEmitter,
        loader: this.loader,
        lines: this.lines,
        preloaderNumber: this.preloaderNumber,
        preloader1: this.preloader1
      });
      this.preloader.eventEmitter.on('completed', () => this.loadComplete());
    }
    loadComplete() {
      if (this.preloader.preloaderNumber) {
        this.effects.text.animate.fromTo(this.preloader.preloaderNumber, {
          opacity: 1
        }, {
          opacity: 0,
          y: -50,
          duration: 1,
          ease: "Power4.easeInOut"
        });
      }
      if (this.preloader.lines) {
        this.effects.text.animate.to(this.preloader.lines, {
          height: 0,
          duration: 1.5,
          ease: "Expo.easeOut"
        });
      }
      if (this.preloader.loader) {
        this.effects.text.animate.to(this.preloader.loader, {
          height: 0,
          duration: 2,
          stagger: 0.1,
          ease: "Expo.easeOut"
        });
      }
      if (this.preloader.preloader1) {
        this.effects.text.animate.to(this.preloader.preloader1, {
          height: 0,
          duration: 0.5,
          ease: "Power4.easeInOut",
          onComplete: () => {
            document.body.removeEventListener('wheel', this.preloader.scrollDisable);
          }
        });
      }
      this.effects.text.createComponents();
    }
  }
  new App();
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("fb64981bf1d5148af374")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBTyxFQUFDLElBQUksQ0FBQ25CLFNBQVMsQ0FBQ29CLGFBQWEsQ0FBQztVQUV2RTtRQUVBLENBQUMsQ0FBQztNQUdGO01BSUEsSUFBSSxDQUFDekIsT0FBTyxDQUFDRSxJQUFJLENBQUN3QixnQkFBZ0IsRUFBRTtJQUtwQztFQU1BO0VBR0EsSUFBSTlCLEdBQUcsRUFBRTtBQUtULENBQUMsQ0FBQzs7Ozs7Ozs7VUNySkYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9TZXR1cC8uL2FwcC9pbmRleC5qcyIsIndlYnBhY2s6Ly9TZXR1cC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEludGVyc2VjdCBmcm9tIFwiLi9lZmZlY3RzL2ludGVyc2VjdGlvblwiXHJcbmltcG9ydCBUZXh0IGZyb20gXCIuL2VmZmVjdHMvdGV4dFwiXHJcbmltcG9ydCBXYXZlIGZyb20gXCIuL2VmZmVjdHMvYWxhZGlub1wiXHJcbmltcG9ydCBQcmVsb2FkZXIgZnJvbSBcIi4vZWZmZWN0cy9wcmVsb2FkZXJcIlxyXG5cclxuXHJcblxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsKCk9PntcclxuXHJcblxyXG5cclxuY2xhc3MgQXBwe1xyXG5cclxuY29uc3RydWN0b3IoKXtcclxuXHJcblxyXG5cclxuXHJcbnRoaXMuY3JlYXRlV2ViZ2woKVxyXG50aGlzLmNyZWF0ZVByZWxvZGVyKClcclxuXHJcbn1cclxuXHJcbmNyZWF0ZVdlYmdsKCl7XHJcblxyXG50aGlzLmVmZmVjdHMgPXtcclxuXHJcbiAgICBcclxud2F2ZSA6IG5ldyBXYXZlKCksICAgIFxyXG50ZXh0IDogbmV3IFRleHQoe2FuaW1hdGU6dGhpcy5hbmltYXRlfSksXHJcbnNjcm9sbCA6IG5ldyBJbnRlcnNlY3QoKSxcclxuXHJcblxyXG5cclxufSBcclxuXHJcblxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5cclxuY3JlYXRlUHJlbG9kZXIoKXtcclxuXHJcbnRoaXMucHJlbG9hZGVyID0gbmV3IFByZWxvYWRlcih7XHJcblxyXG5ldmVudEVtaXR0ZXI6IHRoaXMuZXZlbnRFbWl0dGVyLFxyXG5sb2FkZXI6dGhpcy5sb2FkZXIsXHJcbmxpbmVzOnRoaXMubGluZXMsXHJcbnByZWxvYWRlck51bWJlcjp0aGlzLnByZWxvYWRlck51bWJlcixcclxucHJlbG9hZGVyMTp0aGlzLnByZWxvYWRlcjFcclxuXHJcbn0pXHJcblxyXG50aGlzLnByZWxvYWRlci5ldmVudEVtaXR0ZXIub24oJ2NvbXBsZXRlZCcsKCk9PnRoaXMubG9hZENvbXBsZXRlKCkpXHJcblxyXG59XHJcblxyXG5sb2FkQ29tcGxldGUoKXtcclxuXHJcblxyXG5cclxuaWYgKHRoaXMucHJlbG9hZGVyLnByZWxvYWRlck51bWJlcikge1xyXG50aGlzLmVmZmVjdHMudGV4dC5hbmltYXRlLmZyb21Ubyh0aGlzLnByZWxvYWRlci5wcmVsb2FkZXJOdW1iZXIse1xyXG5vcGFjaXR5OjFcclxufSx7XHJcbm9wYWNpdHk6MCxcclxueTotNTAsXHJcbmR1cmF0aW9uOjEsXHJcbmVhc2U6XCJQb3dlcjQuZWFzZUluT3V0XCIgICBcclxufSkgICBcclxuICAgIFxyXG59XHJcblxyXG5cclxuXHJcbmlmICh0aGlzLnByZWxvYWRlci5saW5lcykge1xyXG5cclxudGhpcy5lZmZlY3RzLnRleHQuYW5pbWF0ZS50byh0aGlzLnByZWxvYWRlci5saW5lcyx7XHJcbmhlaWdodDowLFxyXG5kdXJhdGlvbjoxLjUsXHJcbmVhc2U6XCJFeHBvLmVhc2VPdXRcIlxyXG5cclxufSlcclxuXHJcblxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5pZiAodGhpcy5wcmVsb2FkZXIubG9hZGVyKSB7XHJcblxyXG50aGlzLmVmZmVjdHMudGV4dC5hbmltYXRlLnRvKHRoaXMucHJlbG9hZGVyLmxvYWRlcix7XHJcbmhlaWdodDowLFxyXG5kdXJhdGlvbjoyLFxyXG5zdGFnZ2VyOjAuMSxcclxuZWFzZTpcIkV4cG8uZWFzZU91dFwiXHJcblxyXG59KVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbmlmICh0aGlzLnByZWxvYWRlci5wcmVsb2FkZXIxKSB7XHJcbiAgICBcclxudGhpcy5lZmZlY3RzLnRleHQuYW5pbWF0ZS50byh0aGlzLnByZWxvYWRlci5wcmVsb2FkZXIxLHtcclxuICAgIFxyXG5oZWlnaHQ6MCxcclxuZHVyYXRpb246MC41LFxyXG5lYXNlOlwiUG93ZXI0LmVhc2VJbk91dFwiLFxyXG5cclxub25Db21wbGV0ZTooKT0+e1xyXG5cclxuZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCd3aGVlbCcsdGhpcy5wcmVsb2FkZXIuc2Nyb2xsRGlzYWJsZSlcclxuXHJcbn1cclxuXHJcbn0pXHJcblxyXG5cclxufVxyXG5cclxuXHJcblxyXG50aGlzLmVmZmVjdHMudGV4dC5jcmVhdGVDb21wb25lbnRzKClcclxuXHJcblxyXG5cclxuICAgIFxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxufVxyXG5cclxuXHJcbm5ldyBBcHAoKVxyXG5cclxuXHJcblxyXG4gICAgXHJcbn0pXHJcblxyXG5cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZmI2NDk4MWJmMWQ1MTQ4YWYzNzRcIikiXSwibmFtZXMiOlsiSW50ZXJzZWN0IiwiVGV4dCIsIldhdmUiLCJQcmVsb2FkZXIiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiQXBwIiwiY29uc3RydWN0b3IiLCJjcmVhdGVXZWJnbCIsImNyZWF0ZVByZWxvZGVyIiwiZWZmZWN0cyIsIndhdmUiLCJ0ZXh0IiwiYW5pbWF0ZSIsInNjcm9sbCIsInByZWxvYWRlciIsImV2ZW50RW1pdHRlciIsImxvYWRlciIsImxpbmVzIiwicHJlbG9hZGVyTnVtYmVyIiwicHJlbG9hZGVyMSIsIm9uIiwibG9hZENvbXBsZXRlIiwiZnJvbVRvIiwib3BhY2l0eSIsInkiLCJkdXJhdGlvbiIsImVhc2UiLCJ0byIsImhlaWdodCIsInN0YWdnZXIiLCJvbkNvbXBsZXRlIiwiZG9jdW1lbnQiLCJib2R5IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNjcm9sbERpc2FibGUiLCJjcmVhdGVDb21wb25lbnRzIl0sInNvdXJjZVJvb3QiOiIifQ==