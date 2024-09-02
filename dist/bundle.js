/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/animations/CatacombTitleAnimation.js":
/*!**************************************************!*\
  !*** ./src/animations/CatacombTitleAnimation.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CatacombTitleAnimation)
/* harmony export */ });
/* harmony import */ var _ui_AnimationPlayer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/AnimationPlayer.js */ "./src/ui/AnimationPlayer.js");
var _CatacombTitleAnimation;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var CatacombTitleAnimation = /*#__PURE__*/function (_AnimationPlayer) {
  function CatacombTitleAnimation() {
    _classCallCheck(this, CatacombTitleAnimation);
    var props = {
      id: 'SplashPageAnimation',
      width: 78,
      height: 20,
      loop: 100,
      frameSpeed: 164,
      frames: CatacombTitleAnimation.frames,
      backfill: true,
      autoPlay: true
    };
    return _callSuper(this, CatacombTitleAnimation, [props]);
  }
  _inherits(CatacombTitleAnimation, _AnimationPlayer);
  return _createClass(CatacombTitleAnimation);
}(_ui_AnimationPlayer_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
_CatacombTitleAnimation = CatacombTitleAnimation;
_defineProperty(CatacombTitleAnimation, "frame0", "\n    .#####  .####.  ####### .######. .####### .######. ##########. #######.\n    ###### .######. ####### ######## ######## ######## ########### ########\n    \u2551#\u2551    ##\u2551  ###   ##\u2551   ##\u2551  ### \u2551##      ##\u2551  ### ##\u2551 ##\u2551 ##\u2551 ##\u2551  ###\n    \u2551#\u2551    \u2551#!  #\u2551#   \u2551#\u2551   \u2551#\u2551  #\u2551# \u2551#\u2551      \u2551#\u2551  #\u2551# \u2551#\u2551 \u2551#\u2551 \u2551#\u2551 \u2551#   #\u2551#\n    \u2551#\u2551    #\u2551#\u2551#\u2551#\u2551   #\u2551\u2551   #\u2551#\u2551#\u2551#\u2551 \u2551#\u2551      #\u2551#  \u2551#\u2551 #\u2551\u2551 '\u2551# #\u2551# #\u2551#\u2551#\u2551# \n    \u2551\u2551\u2551    \u2551\u2551\u2551#\u2551\u2551\u2551\u2551   \u2551\u2551\u2551   \u2551\u2551\u2551#\u2551\u2551\u2551\u2551 \u2551\u2551\u2551      \u2551#\u2551  \u2551\u2551\u2551 \u2551#\u2551   ' \u2551#\u2551 \u2551\u2551\u2551#\u2551\u2551\u2551\u2551\n    !\u2551\u2551    \u2551\u2551!  \u2551\u2551\u2551   \u2551\u2551!   \u2551\u2551!  \u2551\u2551\u2551 !\u2551\u2551      \u2551\u2551!  \u2551\u2551\u2551 \u2551\u2551!     \u2551\u2551! \u2551\u2551!  \u2551\u2551\u2551\n    !\u2551!.   !\u2551!  \u2551!\u2551   !\u2551!   !\u2551!  \u2551!\u2551 !\u2551!      !\u2551!  \u2551!\u2551 !\u2551!     !\u2551! !\u2551!  \u2551!\u2551\n    '!!!!! !!   !!!   '!!   !!'  !!! '!!!!!!! !!!!!!!, !!!     !!' '!! !!!,\n     !!'!'  !   !'!    !     !   !':  !!'!!'! '!'!'!'  '!'     !'  !!'!'!! \n                                                                           \n            |                                                              \n                                                                           \n                       |                                                   \n                                \\./                                     \n    \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n    ");
_defineProperty(CatacombTitleAnimation, "frame1", "\n    .#####  .####.  ####### .######. .####### .######. ##########. #######.\n    ###### .######. ####### ######## ######## ######## ########### ########\n    \u2551#\u2551    ##\u2551  ###   ##\u2551   ##\u2551  ### \u2551##      ##\u2551  ### ##\u2551 ##\u2551 ##\u2551 ##\u2551  ###\n    \u2551#\u2551    \u2551#!  #\u2551#   \u2551#\u2551   \u2551#\u2551  #\u2551# \u2551#\u2551      \u2551#\u2551  #\u2551# \u2551#\u2551 \u2551#\u2551 \u2551#\u2551 \u2551#   #\u2551#\n    \u2551#\u2551    #\u2551#\u2551#\u2551#\u2551   #\u2551\u2551   #\u2551#\u2551#\u2551#\u2551 \u2551#\u2551      #\u2551#  \u2551#\u2551 #\u2551\u2551 '\u2551# #\u2551# #\u2551#\u2551#\u2551# \n    \u2551\u2551\u2551    \u2551\u2551\u2551#\u2551\u2551\u2551\u2551   \u2551\u2551\u2551   \u2551\u2551\u2551#\u2551\u2551\u2551\u2551 \u2551\u2551\u2551      \u2551#\u2551  \u2551\u2551\u2551 \u2551#\u2551   ' \u2551#\u2551 \u2551\u2551\u2551#\u2551\u2551\u2551\u2551\n    !\u2551\u2551    \u2551\u2551!  \u2551\u2551\u2551   \u2551\u2551!   \u2551\u2551!  \u2551\u2551\u2551 !\u2551\u2551      \u2551\u2551!  \u2551\u2551\u2551 \u2551\u2551!     \u2551\u2551! \u2551\u2551!  \u2551\u2551\u2551\n    !\u2551!.   !\u2551!  \u2551!\u2551   !\u2551!   !\u2551!  \u2551!\u2551 !\u2551!      !\u2551!  \u2551!\u2551 !\u2551!     !\u2551! !\u2551!  \u2551!\u2551\n    '!!!!! !!   !!!   '!!   !!'  !!! '!!!!!!! !!!!!!!, !!!     !!' '!! !!!,\n     !!'!'  !   !'!    !     !   !':  !!'!!'! '!'!'!'  '!'     !'  !!'!'!! \n                                                        |                  \n                                                                           \n            |                                                              \n                                                                           \n                       |                                                   \n    \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n    ");
_defineProperty(CatacombTitleAnimation, "frame2", "\n    .#####  .####.  ####### .######. .####### .######. ##########. #######.\n    ###### .######. ####### ######## ######## ######## ########### ########\n    \u2551#\u2551    ##\u2551  ###   ##\u2551   ##\u2551  ### \u2551##      ##\u2551  ### ##\u2551 ##\u2551 ##\u2551 ##\u2551  ###\n    \u2551#\u2551    \u2551#!  #\u2551#   \u2551#\u2551   \u2551#\u2551  #\u2551# \u2551#\u2551      \u2551#\u2551  #\u2551# \u2551#\u2551 \u2551#\u2551 \u2551#\u2551 \u2551#   #\u2551#\n    \u2551#\u2551    #\u2551#\u2551#\u2551#\u2551   #\u2551\u2551   #\u2551#\u2551#\u2551#\u2551 \u2551#\u2551      #\u2551#  \u2551#\u2551 #\u2551\u2551 '\u2551# #\u2551# #\u2551#\u2551#\u2551# \n    \u2551\u2551\u2551    \u2551\u2551\u2551#\u2551\u2551\u2551\u2551   \u2551\u2551\u2551   \u2551\u2551\u2551#\u2551\u2551\u2551\u2551 \u2551\u2551\u2551      \u2551#\u2551  \u2551\u2551\u2551 \u2551#\u2551   ' \u2551#\u2551 \u2551\u2551\u2551#\u2551\u2551\u2551\u2551\n    !\u2551\u2551    \u2551\u2551!  \u2551\u2551\u2551   \u2551\u2551!   \u2551\u2551!  \u2551\u2551\u2551 !\u2551\u2551      \u2551\u2551!  \u2551\u2551\u2551 \u2551\u2551!     \u2551\u2551! \u2551\u2551!  \u2551\u2551\u2551\n    !\u2551!.   !\u2551!  \u2551!\u2551   !\u2551!   !\u2551!  \u2551!\u2551 !\u2551!      !\u2551!  \u2551!\u2551 !\u2551!     !\u2551! !\u2551!  \u2551!\u2551\n    '!!!!! !!   !!!   '!!   !!'  !!! '!!!!!!! !!!!!!!, !!!     !!' '!! !!!,\n     !!'!'  !   !'!    !     !   !':  !!'!!'! '!'!'!'  '!'     !'  !!'!'!! \n                                                                                                                                    \n                                                        |                  \n                                                                           \n            |                                                              \n                     \\./                                                 \n    \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n    ");
_defineProperty(CatacombTitleAnimation, "frame3", "\n    .#####  .####.  ####### .######. .####### .######. ##########. #######.\n    ###### .######. ####### ######## ######## ######## ########### ########\n    \u2551#\u2551    ##\u2551  ###   ##\u2551   ##\u2551  ### \u2551##      ##\u2551  ### ##\u2551 ##\u2551 ##\u2551 ##\u2551  ###\n    \u2551#\u2551    \u2551#!  #\u2551#   \u2551#\u2551   \u2551#\u2551  #\u2551# \u2551#\u2551      \u2551#\u2551  #\u2551# \u2551#\u2551 \u2551#\u2551 \u2551#\u2551 \u2551#   #\u2551#\n    \u2551#\u2551    #\u2551#\u2551#\u2551#\u2551   #\u2551\u2551   #\u2551#\u2551#\u2551#\u2551 \u2551#\u2551      #\u2551#  \u2551#\u2551 #\u2551\u2551 '\u2551# #\u2551# #\u2551#\u2551#\u2551# \n    \u2551\u2551\u2551    \u2551\u2551\u2551#\u2551\u2551\u2551\u2551   \u2551\u2551\u2551   \u2551\u2551\u2551#\u2551\u2551\u2551\u2551 \u2551\u2551\u2551      \u2551#\u2551  \u2551\u2551\u2551 \u2551#\u2551   ' \u2551#\u2551 \u2551\u2551\u2551#\u2551\u2551\u2551\u2551\n    !\u2551\u2551    \u2551\u2551!  \u2551\u2551\u2551   \u2551\u2551!   \u2551\u2551!  \u2551\u2551\u2551 !\u2551\u2551      \u2551\u2551!  \u2551\u2551\u2551 \u2551\u2551!     \u2551\u2551! \u2551\u2551!  \u2551\u2551\u2551\n    !\u2551!.   !\u2551!  \u2551!\u2551   !\u2551!   !\u2551!  \u2551!\u2551 !\u2551!      !\u2551!  \u2551!\u2551 !\u2551!     !\u2551! !\u2551!  \u2551!\u2551\n    '!!!!! !!   !!!   '!!   !!'  !!! '!!!!!!! !!!!!!!, !!!     !!' '!! !!!,\n     !!'!'  !   !'!    !     !   !':  !!'!!'! '!'!'!'  '!'     !'  !!'!'!! \n                                   |                                       \n                                                                           \n                                                        |                  \n                                                                           \n         \\./                                                            \n    \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n    ");
_defineProperty(CatacombTitleAnimation, "frame4", "\n    .#####  .####.  ####### .######. .####### .######. ##########. #######.\n    ###### .######. ####### ######## ######## ######## ########### ########\n    \u2551#\u2551    ##\u2551  ###   ##\u2551   ##\u2551  ### \u2551##      ##\u2551  ### ##\u2551 ##\u2551 ##\u2551 ##\u2551  ###\n    \u2551#\u2551    \u2551#!  #\u2551#   \u2551#\u2551   \u2551#\u2551  #\u2551# \u2551#\u2551      \u2551#\u2551  #\u2551# \u2551#\u2551 \u2551#\u2551 \u2551#\u2551 \u2551#   #\u2551#\n    \u2551#\u2551    #\u2551#\u2551#\u2551#\u2551   #\u2551\u2551   #\u2551#\u2551#\u2551#\u2551 \u2551#\u2551      #\u2551#  \u2551#\u2551 #\u2551\u2551 '\u2551# #\u2551# #\u2551#\u2551#\u2551# \n    \u2551\u2551\u2551    \u2551\u2551\u2551#\u2551\u2551\u2551\u2551   \u2551\u2551\u2551   \u2551\u2551\u2551#\u2551\u2551\u2551\u2551 \u2551\u2551\u2551      \u2551#\u2551  \u2551\u2551\u2551 \u2551#\u2551   ' \u2551#\u2551 \u2551\u2551\u2551#\u2551\u2551\u2551\u2551\n    !\u2551\u2551    \u2551\u2551!  \u2551\u2551\u2551   \u2551\u2551!   \u2551\u2551!  \u2551\u2551\u2551 !\u2551\u2551      \u2551\u2551!  \u2551\u2551\u2551 \u2551\u2551!     \u2551\u2551! \u2551\u2551!  \u2551\u2551\u2551\n    !\u2551!.   !\u2551!  \u2551!\u2551   !\u2551!   !\u2551!  \u2551!\u2551 !\u2551!      !\u2551!  \u2551!\u2551 !\u2551!     !\u2551! !\u2551!  \u2551!\u2551\n    '!!!!! !!   !!!   '!!   !!'  !!! '!!!!!!! !!!!!!!, !!!     !!' '!! !!!,\n     !!'!'  !   !'!    !     !   !':  !!'!!'! '!'!'!'  '!'     !'  !!'!'!! \n                                                                           \n                                   |                                       \n                                                                           \n                                                        |                  \n                                                                           \n    \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n  ");
_defineProperty(CatacombTitleAnimation, "frame5", "\n    .#####  .####.  ####### .######. .####### .######. ##########. #######.\n    ###### .######. ####### ######## ######## ######## ########### ########\n    \u2551#\u2551    ##\u2551  ###   ##\u2551   ##\u2551  ### \u2551##      ##\u2551  ### ##\u2551 ##\u2551 ##\u2551 ##\u2551  ###\n    \u2551#\u2551    \u2551#!  #\u2551#   \u2551#\u2551   \u2551#\u2551  #\u2551# \u2551#\u2551      \u2551#\u2551  #\u2551# \u2551#\u2551 \u2551#\u2551 \u2551#\u2551 \u2551#   #\u2551#\n    \u2551#\u2551    #\u2551#\u2551#\u2551#\u2551   #\u2551\u2551   #\u2551#\u2551#\u2551#\u2551 \u2551#\u2551      #\u2551#  \u2551#\u2551 #\u2551\u2551 '\u2551# #\u2551# #\u2551#\u2551#\u2551# \n    \u2551\u2551\u2551    \u2551\u2551\u2551#\u2551\u2551\u2551\u2551   \u2551\u2551\u2551   \u2551\u2551\u2551#\u2551\u2551\u2551\u2551 \u2551\u2551\u2551      \u2551#\u2551  \u2551\u2551\u2551 \u2551#\u2551   ' \u2551#\u2551 \u2551\u2551\u2551#\u2551\u2551\u2551\u2551\n    !\u2551\u2551    \u2551\u2551!  \u2551\u2551\u2551   \u2551\u2551!   \u2551\u2551!  \u2551\u2551\u2551 !\u2551\u2551      \u2551\u2551!  \u2551\u2551\u2551 \u2551\u2551!     \u2551\u2551! \u2551\u2551!  \u2551\u2551\u2551\n    !\u2551!.   !\u2551!  \u2551!\u2551   !\u2551!   !\u2551!  \u2551!\u2551 !\u2551!      !\u2551!  \u2551!\u2551 !\u2551!     !\u2551! !\u2551!  \u2551!\u2551\n    '!!!!! !!   !!!   '!!   !!'  !!! '!!!!!!! !!!!!!!, !!!     !!' '!! !!!,\n     !!'!'  !   !'!    !     !   !':  !!'!!'! '!'!'!'  '!'     !'  !!'!'!! \n                       |                                                   \n                                                                           \n                                   |                                       \n                                                                           \n                                                        |                  \n    \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n  ");
_defineProperty(CatacombTitleAnimation, "frame6", "\n    .#####  .####.  ####### .######. .####### .######. ##########. #######.\n    ###### .######. ####### ######## ######## ######## ########### ########\n    \u2551#\u2551    ##\u2551  ###   ##\u2551   ##\u2551  ### \u2551##      ##\u2551  ### ##\u2551 ##\u2551 ##\u2551 ##\u2551  ###\n    \u2551#\u2551    \u2551#!  #\u2551#   \u2551#\u2551   \u2551#\u2551  #\u2551# \u2551#\u2551      \u2551#\u2551  #\u2551# \u2551#\u2551 \u2551#\u2551 \u2551#\u2551 \u2551#   #\u2551#\n    \u2551#\u2551    #\u2551#\u2551#\u2551#\u2551   #\u2551\u2551   #\u2551#\u2551#\u2551#\u2551 \u2551#\u2551      #\u2551#  \u2551#\u2551 #\u2551\u2551 '\u2551# #\u2551# #\u2551#\u2551#\u2551# \n    \u2551\u2551\u2551    \u2551\u2551\u2551#\u2551\u2551\u2551\u2551   \u2551\u2551\u2551   \u2551\u2551\u2551#\u2551\u2551\u2551\u2551 \u2551\u2551\u2551      \u2551#\u2551  \u2551\u2551\u2551 \u2551#\u2551   ' \u2551#\u2551 \u2551\u2551\u2551#\u2551\u2551\u2551\u2551\n    !\u2551\u2551    \u2551\u2551!  \u2551\u2551\u2551   \u2551\u2551!   \u2551\u2551!  \u2551\u2551\u2551 !\u2551\u2551      \u2551\u2551!  \u2551\u2551\u2551 \u2551\u2551!     \u2551\u2551! \u2551\u2551!  \u2551\u2551\u2551\n    !\u2551!.   !\u2551!  \u2551!\u2551   !\u2551!   !\u2551!  \u2551!\u2551 !\u2551!      !\u2551!  \u2551!\u2551 !\u2551!     !\u2551! !\u2551!  \u2551!\u2551\n    '!!!!! !!   !!!   '!!   !!'  !!! '!!!!!!! !!!!!!!, !!!     !!' '!! !!!,\n     !!'!'  !   !'!    !     !   !':  !!'!!'! '!'!'!'  '!'     !'  !!'!'!! \n                                                                           \n                       |                                                   \n                                                                           \n                                   |                                       \n                                                     \\./                \n    \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n  ");
_defineProperty(CatacombTitleAnimation, "frame7", "\n    .#####  .####.  ####### .######. .####### .######. ##########. #######.\n    ###### .######. ####### ######## ######## ######## ########### ########\n    \u2551#\u2551    ##\u2551  ###   ##\u2551   ##\u2551  ### \u2551##      ##\u2551  ### ##\u2551 ##\u2551 ##\u2551 ##\u2551  ###\n    \u2551#\u2551    \u2551#!  #\u2551#   \u2551#\u2551   \u2551#\u2551  #\u2551# \u2551#\u2551      \u2551#\u2551  #\u2551# \u2551#\u2551 \u2551#\u2551 \u2551#\u2551 \u2551#   #\u2551#\n    \u2551#\u2551    #\u2551#\u2551#\u2551#\u2551   #\u2551\u2551   #\u2551#\u2551#\u2551#\u2551 \u2551#\u2551      #\u2551#  \u2551#\u2551 #\u2551\u2551 '\u2551# #\u2551# #\u2551#\u2551#\u2551# \n    \u2551\u2551\u2551    \u2551\u2551\u2551#\u2551\u2551\u2551\u2551   \u2551\u2551\u2551   \u2551\u2551\u2551#\u2551\u2551\u2551\u2551 \u2551\u2551\u2551      \u2551#\u2551  \u2551\u2551\u2551 \u2551#\u2551   ' \u2551#\u2551 \u2551\u2551\u2551#\u2551\u2551\u2551\u2551\n    !\u2551\u2551    \u2551\u2551!  \u2551\u2551\u2551   \u2551\u2551!   \u2551\u2551!  \u2551\u2551\u2551 !\u2551\u2551      \u2551\u2551!  \u2551\u2551\u2551 \u2551\u2551!     \u2551\u2551! \u2551\u2551!  \u2551\u2551\u2551\n    !\u2551!.   !\u2551!  \u2551!\u2551   !\u2551!   !\u2551!  \u2551!\u2551 !\u2551!      !\u2551!  \u2551!\u2551 !\u2551!     !\u2551! !\u2551!  \u2551!\u2551\n    '!!!!! !!   !!!   '!!   !!'  !!! '!!!!!!! !!!!!!!, !!!     !!' '!! !!!,\n     !!'!'  !   !'!    !     !   !':  !!'!!'! '!'!'!'  '!'     !'  !!'!'!! \n            |                                                              \n                                                                           \n                       |                                                   \n                                                                           \n                                   |                                       \n    \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n  ");
_defineProperty(CatacombTitleAnimation, "frames", [_CatacombTitleAnimation.frame0.split('\n'), _CatacombTitleAnimation.frame1.split('\n'), _CatacombTitleAnimation.frame2.split('\n'), _CatacombTitleAnimation.frame3.split('\n'), _CatacombTitleAnimation.frame4.split('\n'), _CatacombTitleAnimation.frame5.split('\n'), _CatacombTitleAnimation.frame6.split('\n'), _CatacombTitleAnimation.frame7.split('\n')]);


/***/ }),

/***/ "./src/animations/CatacombsBackground.js":
/*!***********************************************!*\
  !*** ./src/animations/CatacombsBackground.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CatacombsBackground)
/* harmony export */ });
var _CatacombsBackground;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var CatacombsBackground = /*#__PURE__*/_createClass(function CatacombsBackground() {
  _classCallCheck(this, CatacombsBackground);
});
_CatacombsBackground = CatacombsBackground;
// Point of View Image Parts
_defineProperty(CatacombsBackground, "near_left_wall", ['╲      ', '.╲     ', '  ╲    ', ' . ╲   ', '  . ╲  ', '  .  ╲ ', '.   . ╲', '   .  ⏐', '    . ⏐', ' .   .⏐', ' . .  ⏐', '.   . ⏐', ' .   .⏐', '   .  ⏐', '  .   ⏐', '.    .⏐', ' .  . ⏐', ' .    ⏐', '  .  .╱', '     ╱ ', ' .  ╱  ', '   ╱   ', '. ╱    ', ' ╱     ', '╱      ']);
_defineProperty(CatacombsBackground, "near_left_door", ['╲      ', '.╲     ', '  ╲    ', '. .╲   ', ' . .╲  ', '. . .╲ ', ' . . .╲', '. ⏐╲ .⏐', ' .⏐:╲ ⏐', '. ⏐:⎹.⏐', ' .⏐:⎹ ⏐', '. ⏐:⎹.⏐', ' .⏐:⎹ ⏐', '. ⏐:⎹.⏐', ' .⏐:⎹ ⏐', '. ⏐:⎹.⏐', ' .⏐:⎹ ⏐', '. ⏐:⎹.⏐', ' .⏐:⎹.╱', '. ⏐:⎹╱ ', ' .⏐:╱  ', '. ⏐╱   ', '. ╱    ', ' ╱     ', '╱      ']);
_defineProperty(CatacombsBackground, "near_left_hall", ['       ', '       ', '       ', '       ', '       ', '       ', '______ ', ' .  . |', '  .   |', '.  .  |', '.    .|', '  .   |', ' .  . |', '.    .|', '  .  .|', ' .  . |', '  .  .|', '______|']);
_defineProperty(CatacombsBackground, "middle_left_wall", ['   ', '   ', '   ', '   ', '   ', '   ', '   ', '╲  ', '.╲ ', ' .╲', '. |', ' .|', '. |', ' .|', '. |', ' .╱', '.╱ ', '╱  ']);
_defineProperty(CatacombsBackground, "middle_left_door", ['   ', '   ', '   ', '   ', '   ', '   ', '   ', '╲  ', '.╲ ', ' .╲', ':.|', '::|', '::|', '::|', '::|', '::╱', ':╱ ', '╱  ']);
_defineProperty(CatacombsBackground, "middle_left_hall", ['   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '__ ', '. |', ' .|', '. |', ' .|', '__|']);
_defineProperty(CatacombsBackground, "far_left_wall", ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '╲ ', '.╲', ' |', '.|', '╱ ']);
_defineProperty(CatacombsBackground, "far_left_door", ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '╲ ', '.╲', ':|', ':|', '╱ ']);
_defineProperty(CatacombsBackground, "far_left_hall", ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '_ ', '.|', '_|']);
_defineProperty(CatacombsBackground, "middle_center_wall", ['      ', '      ', '      ', '      ', '      ', '      ', '      ', '      ', '      ', '______', '.  . .', ' .  . ', '. . . ', ' . . .', '______']);
_defineProperty(CatacombsBackground, "near_center_wall", ['            ', '            ', '            ', '            ', '            ', '            ', '____________', ' .    .   . ', '  .     .   ', '    .       ', ' .     .  . ', '   .  .     ', ' .        . ', '.   .   .   ', '     .      ', '  .    .  . ', ' .  .    .  ', '____________']);
_defineProperty(CatacombsBackground, "far_center_wall", ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '__', '. ', '__']);
_defineProperty(CatacombsBackground, "far_center_door", ['  ']);
_defineProperty(CatacombsBackground, "far_center_hall", ['  ']);
_defineProperty(CatacombsBackground, "middle_center_door", ['      ']);
_defineProperty(CatacombsBackground, "near_center_door", ['            ']);
_defineProperty(CatacombsBackground, "near_right_wall", ['      ╱', '     ╱.', '    ╱  ', '   ╱.  ', '  ╱. . ', ' ╱  .  ', '╱ .  . ', '|  .  .', '|.  .  ', '|  .   ', '| .  . ', '|  .  .', '| .  . ', '|   .  ', '|.   . ', '|  .   ', '|.   . ', '| .    ', '╲ .  . ', ' ╲ .  .', '  ╲  . ', '   ╲.  ', '    ╲  ', '     ╲.', '        ╲']);
_defineProperty(CatacombsBackground, "near_right_door", ['      ╱', '     ╱.', '    ╱  ', '   ╱. .', '  ╱ .  ', ' ╱ . . ', '╱.  . .', '| .╱|. ', '| ╱:| .', '|.|:|. ', '| |:| .', '|.|:|. ', '| |:| .', '|.|:|. ', '| |:| .', '|.|:|. ', '| |:| .', '|.|:|. ', '╲ |:| .', ' ╲|:|. ', '  ╲:| .', '   ╲|. ', '    ╲. ', '     ╲ ', '      ╲']);
_defineProperty(CatacombsBackground, "near_right_hall", ['       ', '       ', '       ', '       ', '       ', '       ', ' ______', '|.   . ', '|  .  .', '|.  .  ', '|  .  .', '|.   . ', '| .   .', '|.  .  ', '| .   .', '|.  .  ', '| .   .', '|______']);
_defineProperty(CatacombsBackground, "middle_right_wall", ['   ', '   ', '   ', '   ', '   ', '   ', '   ', '  ╱', ' ╱.', '╱. ', '| .', '|. ', '| .', '|. ', '| .', '╲ .', ' ╲ ', '  ╲']);
_defineProperty(CatacombsBackground, "middle_right_hall", ['   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', '   ', ' __', '|. ', '| .', '|. ', '| .', '|__']);
_defineProperty(CatacombsBackground, "middle_right_door", ['   ', '   ', '   ', '   ', '   ', '   ', '   ', '  ╱', ' ╱.', '╱  ', '|.:', '|::', '|::', '|::', '|::', '╲::', ' ╲:', '  ╲']);
_defineProperty(CatacombsBackground, "far_right_wall", ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', ' ╱', '╱.', '|.', '|.', ' ╲']);
_defineProperty(CatacombsBackground, "far_right_hall", ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', ' _', '|.', '|_']);
_defineProperty(CatacombsBackground, "far_right_door", ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', ' ╱', '╱.', '|:', '|:', ' ╲']);
_defineProperty(CatacombsBackground, "sprites", {
  layer_1_door: _CatacombsBackground.near_left_door,
  layer_1_wall: _CatacombsBackground.near_left_wall,
  layer_1_hall: _CatacombsBackground.near_left_hall,
  layer_2_door: _CatacombsBackground.middle_left_door,
  layer_2_wall: _CatacombsBackground.middle_left_wall,
  layer_2_hall: _CatacombsBackground.middle_left_hall,
  layer_3_door: _CatacombsBackground.far_left_door,
  layer_3_wall: _CatacombsBackground.far_left_wall,
  layer_3_hall: _CatacombsBackground.far_left_hall,
  layer_4_door: _CatacombsBackground.near_center_door,
  layer_4_wall: _CatacombsBackground.near_center_wall,
  layer_5_door: _CatacombsBackground.middle_center_door,
  layer_5_wall: _CatacombsBackground.middle_center_wall,
  layer_6_door: _CatacombsBackground.far_center_door,
  layer_6_wall: _CatacombsBackground.far_center_wall,
  layer_6_hall: _CatacombsBackground.far_center_hall,
  layer_7_door: _CatacombsBackground.far_right_door,
  layer_7_wall: _CatacombsBackground.far_right_wall,
  layer_7_hall: _CatacombsBackground.far_right_hall,
  layer_8_door: _CatacombsBackground.middle_right_door,
  layer_8_wall: _CatacombsBackground.middle_right_wall,
  layer_8_hall: _CatacombsBackground.middle_right_hall,
  layer_9_door: _CatacombsBackground.near_right_door,
  layer_9_wall: _CatacombsBackground.near_right_wall,
  layer_9_hall: _CatacombsBackground.near_right_hall
});


/***/ }),

/***/ "./src/animations/Confetti.js":
/*!************************************!*\
  !*** ./src/animations/Confetti.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Confetti)
/* harmony export */ });
/* harmony import */ var _ui_AnimationPlayer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/AnimationPlayer.js */ "./src/ui/AnimationPlayer.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

var Confetti = /*#__PURE__*/function (_AnimationPlayer) {
  function Confetti() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, Confetti);
    var width = props.width,
      height = props.height;
    var confettiProbability = 0.16; // Initial dense confetti
    var confettiDecreaseRate = 0.004; // Rate at which confetti density decreases
    var frames = [];
    var prevFrame = buildFrame({
      width: width,
      height: height,
      confettiProbability: confettiProbability
    });
    frames.push(prevFrame);
    for (var i = 1; i < height * 2.5; i++) {
      prevFrame = buildFrame({
        prevFrame: prevFrame,
        width: width,
        height: height,
        confettiProbability: confettiProbability
      });
      frames.push(prevFrame);
      confettiProbability -= confettiDecreaseRate;
      if (confettiProbability < 0) confettiProbability = 0;
    }
    props.border = false;
    props.backfill = true;
    props.frames = frames;
    return _callSuper(this, Confetti, [props]);
  }
  _inherits(Confetti, _AnimationPlayer);
  return _createClass(Confetti);
}(_ui_AnimationPlayer_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

var confettiChars = ['/', '≡', '│', '\\', '-'];
function buildFrame(props) {
  var prevFrame = props.prevFrame,
    width = props.width,
    height = props.height,
    confettiProbability = props.confettiProbability;
  var frame = [];
  // first row of the frame is new each time
  frame.push(Array(width).fill().map(function () {
    return Math.random() < confettiProbability ? confettiChars[Math.floor(Math.random() * confettiChars.length)] : '@';
  }));
  // rest of the rows should be based on the previous frame, sliding the confetti down
  for (var i = 1; i < height; i++) {
    var nextRow = '';
    for (var j = 0; j < width; j++) {
      if (prevFrame) {
        var prevCell = prevFrame[i - 1][j];
        if (confettiChars.includes(prevCell)) {
          var dripIndex = confettiChars.indexOf(prevCell);
          nextRow += confettiChars[(dripIndex + 1) % confettiChars.length];
        } else {
          nextRow += prevCell;
        }
      } else {
        nextRow += '@';
      }
    }
    frame.push(nextRow.split(''));
  }
  return frame;
}

/***/ }),

/***/ "./src/animations/FadeIn.js":
/*!**********************************!*\
  !*** ./src/animations/FadeIn.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FadeIn)
/* harmony export */ });
/* harmony import */ var _ui_AnimationPlayer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/AnimationPlayer.js */ "./src/ui/AnimationPlayer.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

var FadeIn = /*#__PURE__*/function (_AnimationPlayer) {
  function FadeIn() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, FadeIn);
    var width = props.width,
      height = props.height;
    var frames = [];
    for (var i = 0; i < height + 4; i++) frames.push(buildFrame({
      width: width,
      height: height,
      size: i + 1
    }));
    props.border = false;
    props.frames = frames;
    props.backfill = true;
    return _callSuper(this, FadeIn, [props]);
  }
  _inherits(FadeIn, _AnimationPlayer);
  return _createClass(FadeIn);
}(_ui_AnimationPlayer_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

function buildFrame(props) {
  var width = props.width,
    height = props.height,
    size = props.size;
  var centerX = Math.floor(width / 2);
  var centerY = Math.floor(height / 2);
  var frame = [];
  // rest of the rows should be based on the previous frame, sliding the confetti down
  for (var i = 1; i < height; i++) {
    var nextRow = '';
    for (var j = 0; j < width; j++) {
      var distance = Math.sqrt(Math.pow(centerX - j, 2) + Math.pow(centerY - i, 2));
      if (distance < size) {
        nextRow += '@';
      } else {
        nextRow += ' ';
      }
    }
    frame.push(nextRow.split(''));
  }
  return frame;
}

/***/ }),

/***/ "./src/animations/FireCracker.js":
/*!***************************************!*\
  !*** ./src/animations/FireCracker.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FireCracker)
/* harmony export */ });
/* harmony import */ var _ui_AnimationPlayer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/AnimationPlayer.js */ "./src/ui/AnimationPlayer.js");
var _FireCracker;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var FireCracker = /*#__PURE__*/function (_AnimationPlayer) {
  function FireCracker() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, FireCracker);
    var colors = props.colors,
      parent = props.parent;
    // generate random id
    var id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    var color;
    if (colors) color = colors[Math.floor(Math.random() * colors.length)];
    return _callSuper(this, FireCracker, [{
      id: 'FireCracker-' + id,
      width: FireCracker.frame0[0].length,
      height: FireCracker.frame0.length,
      loop: 0,
      frameSpeed: 128,
      frames: FireCracker.frames,
      color: color,
      sound: 'sounds/firework.mp3',
      backfill: true,
      parent: parent
    }]);
  }
  _inherits(FireCracker, _AnimationPlayer);
  return _createClass(FireCracker);
}(_ui_AnimationPlayer_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
_FireCracker = FireCracker;
_defineProperty(FireCracker, "frame0", ['@@@@@@@', '@@@@@@@', '@@@@@@@', '@@@o@@@', '@@@@@@@', '@@@@@@@', '@@@@@@@']);
_defineProperty(FireCracker, "frame1", ['@@@@@@@', '@@@@@@@', '@@@@@@@', '@@@*@@@', '@@@@@@@', '@@@@@@@', '@@@@@@@']);
_defineProperty(FireCracker, "frame2", ['@@@@@@@', '@@@@@@@', '@@╲|╱@@', '@@-@-@@', '@@╱|╲@@', '@@@@@@@', '@@@@@@@']);
_defineProperty(FireCracker, "frame3", ['@@@@@@@', '@╲@|@╱@', '@@@@@@@', '@-@@@-@', '@@@@@@@', '@╱@|@╲@', '@@@@@@@']);
_defineProperty(FireCracker, "frame4", ["'@@@@@'", '@@@@@@@', '@@@@@@@', '.@@@@@.', '@@@@@@@', '@@@@@@@', "'@@@@@'"]);
_defineProperty(FireCracker, "frame5", ['.@@@@@.', '@@@@@@@', '@@@@@@@', '@@@@@@@', "'@@@@@'", '@@@@@@@', '.@@@@@.']);
_defineProperty(FireCracker, "frame6", ['@@@@@@@', "'@@@@@'", '@@@@@@@', '@@@@@@@', '.@@@@@.', '@@@@@@@', '@@@@@@@']);
_defineProperty(FireCracker, "frame7", ['@@@@@@@', '@@@@@@@', '@@@@@@@', '@@@@@@@', '@@@@@@@', '@@@@@@@', '@@@@@@@']);
// create different colors for each frame
_defineProperty(FireCracker, "frames", [_FireCracker.frame0, _FireCracker.frame1, _FireCracker.frame2, _FireCracker.frame3, _FireCracker.frame4, _FireCracker.frame5, _FireCracker.frame6, _FireCracker.frame7]);
_defineProperty(FireCracker, "colors", ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#FFFFFF']);


/***/ }),

/***/ "./src/game/GameObject.js":
/*!********************************!*\
  !*** ./src/game/GameObject.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameObject)
/* harmony export */ });
/* harmony import */ var _Guid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Guid.js */ "./src/game/Guid.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var GameObject = /*#__PURE__*/function () {
  function GameObject(type, data) {
    _classCallCheck(this, GameObject);
    this.data = data;
    this.data.id = (0,_Guid_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    this.data.type = type;
  }
  return _createClass(GameObject, [{
    key: "getId",
    value: function getId() {
      return this.data.id;
    }
  }, {
    key: "getType",
    value: function getType() {
      return this.data.type;
    }
  }, {
    key: "getNameArticle",
    value: function getNameArticle() {
      var nameArticle = 'a';
      if (this.data.name.startsWith('a') || this.data.name.startsWith('e') || this.data.name.startsWith('i') || this.data.name.startsWith('o') || this.data.name.startsWith('u')) {
        nameArticle = 'an';
      }
      return nameArticle;
    }
  }, {
    key: "getName",
    value: function getName() {
      var _this$data;
      return ((_this$data = this.data) === null || _this$data === void 0 ? void 0 : _this$data.name) || '???';
    }
  }, {
    key: "getNameWithArticle",
    value: function getNameWithArticle() {
      return "".concat(this.getNameArticle().toLowerCase(), " ").concat(this.getName().toLowerCase());
    }
  }, {
    key: "getDescription",
    value: function getDescription() {
      var _this$data2;
      return ((_this$data2 = this.data) === null || _this$data2 === void 0 ? void 0 : _this$data2.description) || '???';
    }
  }, {
    key: "getImage",
    value: function getImage() {
      var _this$data3, _this$data4, _this$data5;
      if ((_this$data3 = this.data) !== null && _this$data3 !== void 0 && _this$data3.image) return this.data.image;else if ((_this$data4 = this.data) !== null && _this$data4 !== void 0 && (_this$data4 = _this$data4.perspective) !== null && _this$data4 !== void 0 && _this$data4.here) return this.data.perspective.here.frames[0];
      return ((_this$data5 = this.data) === null || _this$data5 === void 0 ? void 0 : _this$data5.image) || undefined;
    }
  }, {
    key: "obstructsMovement",
    value: function obstructsMovement() {
      var _this$data$obstructsM, _this$data6;
      return (_this$data$obstructsM = (_this$data6 = this.data) === null || _this$data6 === void 0 ? void 0 : _this$data6.obstructsMovement) !== null && _this$data$obstructsM !== void 0 ? _this$data$obstructsM : false;
    }
  }, {
    key: "allowsPickup",
    value: function allowsPickup() {
      var _this$data$allowsPick, _this$data7;
      return (_this$data$allowsPick = (_this$data7 = this.data) === null || _this$data7 === void 0 ? void 0 : _this$data7.allowsPickup) !== null && _this$data$allowsPick !== void 0 ? _this$data$allowsPick : false;
    }
  }, {
    key: "getHealth",
    value: function getHealth() {
      if (this.data.health === undefined) this.data.health = 1;
      return this.data.health;
    }
  }, {
    key: "setHealth",
    value: function setHealth(health) {
      this.data.health = health;
    }
  }, {
    key: "updateHealth",
    value: function updateHealth(newValue) {
      this.data.health = newValue;
    }
  }, {
    key: "getCraftingRequirements",
    value: function getCraftingRequirements() {
      var _this$data8;
      return ((_this$data8 = this.data) === null || _this$data8 === void 0 ? void 0 : _this$data8.craftingRequirements) || [];
    }
  }, {
    key: "getUsage",
    value: function getUsage() {
      var _this$data9;
      return ((_this$data9 = this.data) === null || _this$data9 === void 0 ? void 0 : _this$data9.usage) || undefined;
    }
  }, {
    key: "getAttack",
    value: function getAttack() {
      return this.data.attack;
    }
  }, {
    key: "getPerspective",
    value: function getPerspective(name) {
      if (this.data.perspective && name in this.data.perspective) {
        return this.data.perspective[name];
      }
      return undefined;
    }
  }, {
    key: "getDestroyedSound",
    value: function getDestroyedSound() {
      return this.data.destroyedSound;
    }
  }]);
}();


/***/ }),

/***/ "./src/game/GameObjectLoader.js":
/*!**************************************!*\
  !*** ./src/game/GameObjectLoader.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GameObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameObject.js */ "./src/game/GameObject.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var GameObjectLoader = /*#__PURE__*/function () {
  function GameObjectLoader() {
    _classCallCheck(this, GameObjectLoader);
    this.initialized = false;
    this.gameObjects = new Map();
  }
  return _createClass(GameObjectLoader, [{
    key: "initialize",
    value: function () {
      var _initialize = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var response, objectsJson, i, objectName, objectAsString, objectJson;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (this.initialized) {
                _context.next = 22;
                break;
              }
              _context.next = 3;
              return fetch(GameObjectLoader.ACTIVE_OBJECTS_FILE);
            case 3:
              response = _context.sent;
              _context.next = 6;
              return response.json();
            case 6:
              objectsJson = _context.sent;
              i = 0;
            case 8:
              if (!(i < objectsJson.objects.length)) {
                _context.next = 20;
                break;
              }
              objectName = objectsJson.objects[i];
              _context.next = 12;
              return fetch("mods/objects/".concat(objectName, ".json"));
            case 12:
              objectAsString = _context.sent;
              _context.next = 15;
              return objectAsString.json();
            case 15:
              objectJson = _context.sent;
              this.gameObjects.set(objectName, objectJson);
            case 17:
              i++;
              _context.next = 8;
              break;
            case 20:
              console.log("Game Objects loaded: ".concat(this.gameObjects.size));
              this.initialized = true;
            case 22:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function initialize() {
        return _initialize.apply(this, arguments);
      }
      return initialize;
    }()
  }, {
    key: "getInstanceOf",
    value: function getInstanceOf(type) {
      if (!this.gameObjects.has(type)) {
        throw new Error("Game Object ".concat(type, " not found."));
      }
      // make a deep copy
      var data = JSON.parse(JSON.stringify(this.gameObjects.get(type)));
      // return an item object
      return new _GameObject_js__WEBPACK_IMPORTED_MODULE_0__["default"](type, data);
    }
  }]);
}();
_defineProperty(GameObjectLoader, "ACTIVE_OBJECTS_FILE", 'mods/objects/active-objects.json');
var items = new GameObjectLoader();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (items);

/***/ }),

/***/ "./src/game/Guid.js":
/*!**************************!*\
  !*** ./src/game/Guid.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ guid)
/* harmony export */ });
function guid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
      v = c == 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
}

/***/ }),

/***/ "./src/game/Hero.js":
/*!**************************!*\
  !*** ./src/game/Hero.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Hero),
/* harmony export */   getHeroLevelTitle: () => (/* binding */ getHeroLevelTitle)
/* harmony export */ });
/* harmony import */ var _SharedState_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SharedState.js */ "./src/game/SharedState.js");
/* harmony import */ var _ui_AudioPlayer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/AudioPlayer.js */ "./src/ui/AudioPlayer.js");
/* harmony import */ var _GameObjectLoader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameObjectLoader.js */ "./src/game/GameObjectLoader.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var Hero = /*#__PURE__*/function () {
  function Hero() {
    var _this = this;
    _classCallCheck(this, Hero);
    _SharedState_js__WEBPACK_IMPORTED_MODULE_0__["default"].set({
      key: 'hero.stamina',
      value: {
        current: 60,
        max: 100
      }
    });
    _SharedState_js__WEBPACK_IMPORTED_MODULE_0__["default"].set({
      key: 'hero.health',
      value: {
        current: 35,
        max: 100
      }
    });
    _SharedState_js__WEBPACK_IMPORTED_MODULE_0__["default"].set({
      key: 'hero.hunger',
      value: {
        current: 85,
        max: 100
      }
    });
    _SharedState_js__WEBPACK_IMPORTED_MODULE_0__["default"].set({
      key: 'hero.magic',
      value: {
        current: 0,
        max: 100
      }
    });
    _SharedState_js__WEBPACK_IMPORTED_MODULE_0__["default"].set({
      key: 'companion.health',
      value: {
        current: 0,
        max: 100
      }
    });
    _SharedState_js__WEBPACK_IMPORTED_MODULE_0__["default"].set({
      key: 'hero.armor',
      value: 0
    });
    _SharedState_js__WEBPACK_IMPORTED_MODULE_0__["default"].set({
      key: 'hero.equipped.weapon',
      value: null
    });
    var inventory = [];
    inventory.push(_GameObjectLoader_js__WEBPACK_IMPORTED_MODULE_2__["default"].getInstanceOf('watch'));
    inventory.push(_GameObjectLoader_js__WEBPACK_IMPORTED_MODULE_2__["default"].getInstanceOf('journal'));
    inventory.push(_GameObjectLoader_js__WEBPACK_IMPORTED_MODULE_2__["default"].getInstanceOf('bone-knife'));
    _SharedState_js__WEBPACK_IMPORTED_MODULE_0__["default"].set({
      key: 'hero.inventory',
      value: inventory
    });
    _SharedState_js__WEBPACK_IMPORTED_MODULE_0__["default"].set({
      key: 'hero.xp',
      value: {
        current: 10,
        nextLevel: 1000
      }
    });
    _SharedState_js__WEBPACK_IMPORTED_MODULE_0__["default"].set({
      key: 'hero.level',
      value: 1
    });
    _SharedState_js__WEBPACK_IMPORTED_MODULE_0__["default"].set({
      key: 'hero.score',
      value: 0
    });
    _SharedState_js__WEBPACK_IMPORTED_MODULE_0__["default"].set({
      key: 'hero.abilities',
      value: []
    });
    _SharedState_js__WEBPACK_IMPORTED_MODULE_0__["default"].set({
      key: 'hero.crafts',
      value: []
    });
    _SharedState_js__WEBPACK_IMPORTED_MODULE_0__["default"].set({
      key: 'hero.companion',
      value: null
    });
    _SharedState_js__WEBPACK_IMPORTED_MODULE_0__["default"].set({
      key: 'hero.alive',
      value: true
    });
    _SharedState_js__WEBPACK_IMPORTED_MODULE_0__["default"].set({
      key: 'hero.lastMoved',
      value: new Date()
    });
    _SharedState_js__WEBPACK_IMPORTED_MODULE_0__["default"].set({
      key: 'hero.journal',
      value: []
    });
    this.recoveryTimeThreshold = 2000; // Initial recovery time threshold in milliseconds
    this.minimumRecoveryThreshold = 200; // Minimum recovery time threshold to prevent too short intervals
    setInterval(function () {
      return _this._recoverStamina();
    }, 500);
  }
  return _createClass(Hero, [{
    key: "addJournalEntry",
    value: function addJournalEntry(text) {
      var entries = _SharedState_js__WEBPACK_IMPORTED_MODULE_0__["default"].get('hero.journal');
      if (!entries) entries = [];
      entries.push({
        date: _SharedState_js__WEBPACK_IMPORTED_MODULE_0__["default"].get('game.time'),
        text: text
      });
      _SharedState_js__WEBPACK_IMPORTED_MODULE_0__["default"].set({
        key: 'hero.journal',
        value: entries
      });
    }
  }, {
    key: "attack",
    value: function attack() {
      _SharedState_js__WEBPACK_IMPORTED_MODULE_0__["default"].set({
        key: 'hero.lastMoved',
        value: new Date()
      });
      var weapon = _SharedState_js__WEBPACK_IMPORTED_MODULE_0__["default"].get('hero.equipped.weapon');
      if (!weapon) {
        _SharedState_js__WEBPACK_IMPORTED_MODULE_0__["default"].set({
          key: 'message.center',
          value: 'equip a weapon first!'
        });
        new Audio('sounds/nope.mp3').play();
        return;
      } else {
        var staminaCost = weapon.getAttack().stamina;
        if (_SharedState_js__WEBPACK_IMPORTED_MODULE_0__["default"].get('hero.stamina').current < staminaCost) {
          _SharedState_js__WEBPACK_IMPORTED_MODULE_0__["default"].set({
            key: 'message.center',
            value: "you are too tired to attack!"
          });
          new Audio('sounds/out-of-breath.mp3').play();
        } else {
          var stamina = _SharedState_js__WEBPACK_IMPORTED_MODULE_0__["default"].get('hero.stamina');
          stamina.current -= staminaCost;
          _SharedState_js__WEBPACK_IMPORTED_MODULE_0__["default"].set({
            key: 'hero.stamina',
            value: stamina
          });
          // if an item or creature is 'here', do damage to it.
          var movementEngine = _SharedState_js__WEBPACK_IMPORTED_MODULE_0__["default"].get('movement');
          var position = _SharedState_js__WEBPACK_IMPORTED_MODULE_0__["default"].get('hero.position');
          var target = movementEngine.getGameObjectAt(position);
          if (target) {
            var damage = weapon.getAttack().damage;
            target.setHealth(target.getHealth() - damage);
            if (target.getHealth() <= 0) {
              movementEngine.removeGameObjectAt(position);
              if (target.getDestroyedSound()) {
                new Audio(target.getDestroyedSound()).play();
              } else {
                new Audio('sounds/break.mp3').play();
              }
            }
          }
          _SharedState_js__WEBPACK_IMPORTED_MODULE_0__["default"].set({
            key: 'hero.action',
            value: weapon.getAttack()
          });
          _SharedState_js__WEBPACK_IMPORTED_MODULE_0__["default"].set({
            key: 'message.center',
            value: "you attack with ".concat(weapon.getName().toLowerCase())
          });
        }
      }
    }
  }, {
    key: "pickUp",
    value: function pickUp() {
      var position = _SharedState_js__WEBPACK_IMPORTED_MODULE_0__["default"].get('hero.position');
      var movement = _SharedState_js__WEBPACK_IMPORTED_MODULE_0__["default"].get('movement');
      var item = movement.getGameObjectAt(position);
      if (!item) return;
      if (!item.allowsPickup()) {
        _SharedState_js__WEBPACK_IMPORTED_MODULE_0__["default"].set({
          key: 'message.center',
          value: "cannot pick up ".concat(item.getName().toLowerCase())
        });
        new Audio('sounds/nope.mp3').play();
        return;
      }
      if (this.getInventoryItemsByType(item.getType()).length >= 10) {
        _SharedState_js__WEBPACK_IMPORTED_MODULE_0__["default"].set({
          key: 'message.center',
          value: "inventory is full"
        });
        return;
      }
      _SharedState_js__WEBPACK_IMPORTED_MODULE_0__["default"].get('hero.inventory').push(item); // the inventory will not notify the UI of the change
      movement.removeGameObjectAt(position);
      new _ui_AudioPlayer_js__WEBPACK_IMPORTED_MODULE_1__["default"]('sounds/pickup-item.mp3').play();
      _SharedState_js__WEBPACK_IMPORTED_MODULE_0__["default"].set({
        key: 'message.center',
        value: "you pick up the ".concat(item.getName().toLowerCase())
      });
    }
  }, {
    key: "getInventoryItemsByType",
    value: function getInventoryItemsByType(type) {
      var inventory = _SharedState_js__WEBPACK_IMPORTED_MODULE_0__["default"].get('hero.inventory');
      return inventory.filter(function (item) {
        return item.type === type;
      });
    }
  }, {
    key: "useItem",
    value: function useItem(itemType) {
      // remove the item from the inventory
      var inventory = _SharedState_js__WEBPACK_IMPORTED_MODULE_0__["default"].get('hero.inventory');
      var index = inventory.findIndex(function (item) {
        return item.getType() === itemType;
      });
      if (index === -1) {
        new Audio('sounds/nope.mp3').play();
        _SharedState_js__WEBPACK_IMPORTED_MODULE_0__["default"].set({
          key: 'message.center',
          value: "item ".concat(itemType, " not found in inventory")
        });
        return;
      }
      var item = inventory[index];
      if (item.getUsage() && item.getUsage().type === 'consumable') this._consume(item);else if (item.getUsage() && item.getUsage().type === 'equippable') this._equip(item);else {
        _SharedState_js__WEBPACK_IMPORTED_MODULE_0__["default"].set({
          key: 'message.center',
          value: "".concat(item.getName().toLowerCase(), " cannot be used directly from inventory")
        });
        new Audio('sounds/nope.mp3').play(); // item unusable
      }
    }
  }, {
    key: "_consume",
    value: function _consume(item) {
      var usage = item.getUsage();
      var hunger = _SharedState_js__WEBPACK_IMPORTED_MODULE_0__["default"].get('hero.hunger');
      hunger.current += usage.hunger;
      if (hunger.current > hunger.max) hunger.current = hunger.max;
      _SharedState_js__WEBPACK_IMPORTED_MODULE_0__["default"].set({
        key: 'hero.hunger',
        value: hunger
      });
      var stamina = _SharedState_js__WEBPACK_IMPORTED_MODULE_0__["default"].get('hero.stamina');
      stamina.current += usage.stamina;
      if (stamina.current > stamina.max) stamina.current = stamina.max;
      _SharedState_js__WEBPACK_IMPORTED_MODULE_0__["default"].set({
        key: 'hero.stamina',
        value: stamina
      });
      var health = _SharedState_js__WEBPACK_IMPORTED_MODULE_0__["default"].get('hero.health');
      health.current += usage.health;
      if (health.current > health.max) health.current = health.max;
      _SharedState_js__WEBPACK_IMPORTED_MODULE_0__["default"].set({
        key: 'hero.health',
        value: health
      });
      if (usage.sound) new _ui_AudioPlayer_js__WEBPACK_IMPORTED_MODULE_1__["default"](usage.sound).play();
      var inventory = _SharedState_js__WEBPACK_IMPORTED_MODULE_0__["default"].get('hero.inventory');
      var index = inventory.findIndex(function (anItem) {
        return anItem.id === item.id;
      });
      inventory.splice(index, 1)[0];
      _SharedState_js__WEBPACK_IMPORTED_MODULE_0__["default"].set({
        key: 'hero.inventory',
        value: inventory
      });
    }
  }, {
    key: "_equip",
    value: function _equip(item) {
      if (item.getUsage().slot === 'weapon') {
        _SharedState_js__WEBPACK_IMPORTED_MODULE_0__["default"].set({
          key: 'hero.equipped.weapon',
          value: item
        });
        new _ui_AudioPlayer_js__WEBPACK_IMPORTED_MODULE_1__["default"]('sounds/item-equip.mp3').play();
      }
    }
  }, {
    key: "moved",
    value: function moved() {
      _SharedState_js__WEBPACK_IMPORTED_MODULE_0__["default"].set({
        key: 'hero.lastMoved',
        value: new Date()
      });
      var stamina = _SharedState_js__WEBPACK_IMPORTED_MODULE_0__["default"].get('hero.stamina');
      stamina.current--;
      _SharedState_js__WEBPACK_IMPORTED_MODULE_0__["default"].set({
        key: 'hero.stamina',
        value: stamina
      });
    }

    // method for stamina recovery
  }, {
    key: "_recoverStamina",
    value: function _recoverStamina() {
      var stamina = _SharedState_js__WEBPACK_IMPORTED_MODULE_0__["default"].get('hero.stamina');
      if (stamina.current < stamina.max) {
        var lastMoved = _SharedState_js__WEBPACK_IMPORTED_MODULE_0__["default"].get('hero.lastMoved');
        var now = new Date();
        if (now.getTime() - lastMoved.getTime() > 2000) {
          stamina.current += 5; // Recover a fixed amount of stamina
          if (stamina.current > stamina.max) {
            stamina.current = stamina.max;
          }
          // Reduce the recovery threshold to increase frequency, down to a minimum
          this.recoveryTimeThreshold = Math.max(this.minimumRecoveryThreshold, this.recoveryTimeThreshold - 200);
          _SharedState_js__WEBPACK_IMPORTED_MODULE_0__["default"].set({
            key: 'hero.stamina',
            value: stamina
          });
        } else {
          this.recoveryTimeThreshold = 2000;
        }
      } else {
        // Reset the recovery time threshold when stamina is full
        this.recoveryTimeThreshold = 2000;
      }
    }
  }]);
}();

var HeroLevelTitles = [{
  name: 'Noob',
  levelRange: [1, 4]
}, {
  name: 'Novice Explorer',
  levelRange: [5, 8]
}, {
  name: 'Apprentice Historian',
  levelRange: [9, 12]
}, {
  name: 'Skilled Surveyor',
  levelRange: [13, 16]
}, {
  name: 'Artifact Collector',
  levelRange: [17, 20]
}, {
  name: 'Field Researcher',
  levelRange: [21, 24]
}, {
  name: 'Culture Scholar',
  levelRange: [25, 28]
}, {
  name: 'Relic Hunter',
  levelRange: [29, 32]
}, {
  name: 'Time Navigator',
  levelRange: [33, 36]
}, {
  name: 'Chronicle Keeper',
  levelRange: [37, 40]
}, {
  name: 'Lost Civilization Specialist',
  levelRange: [41, 44]
}, {
  name: 'Myth Breaker',
  levelRange: [45, 48]
}, {
  name: 'Guardian of Antiquity',
  levelRange: [49, 52]
}, {
  name: 'Master of the Past',
  levelRange: [53, 56]
}, {
  name: 'Time Weaver',
  levelRange: [57, 60]
}, {
  name: 'Legacy Preserver',
  levelRange: [61, 64]
}, {
  name: 'Eternal Explorer',
  levelRange: [65, 68]
}];
function getHeroLevelTitle(level) {
  for (var i = 0; i < HeroLevelTitles.length; i++) {
    if (level >= HeroLevelTitles[i].levelRange[0] && level <= HeroLevelTitles[i].levelRange[1]) return HeroLevelTitles[i].name;
  }
  return 'Eternal Explorer';
}


/***/ }),

/***/ "./src/game/LevelGenerator.js":
/*!************************************!*\
  !*** ./src/game/LevelGenerator.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LevelGenerator),
/* harmony export */   locationHash: () => (/* binding */ locationHash)
/* harmony export */ });
/* harmony import */ var _SharedState_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SharedState.js */ "./src/game/SharedState.js");
/* harmony import */ var _GameObjectLoader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameObjectLoader.js */ "./src/game/GameObjectLoader.js");
/* harmony import */ var _LevelLoader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LevelLoader.js */ "./src/game/LevelLoader.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var LevelGenerator = /*#__PURE__*/function () {
  // Map is a 2D array of chars.
  // example 10x10 grid = [
  //      0123456789012345678
  //    0'+-0-+---+---+---+---+',
  //    1'0 1 2 3 4 5 6 7 8 9 |',
  //    2'+-2-+---+---+---+---+',
  //    3'| 3 |   |           |',
  //    4'+-4-+   +   +   +   +',
  //    5'| 5 |       |   |   |',
  //    6'+-6-+   +---+   +   +',
  //    7'| 7 |   |       |   |',
  //    8'+-8-+   +   +---+   +',
  //    9'| 9 |   |           |',
  //     '+---+---+---+---+---+',
  //     ]
  // is actually a 11x19 2d array
  // conversion: y = y, x = x*2
  // only place items and creatures on odd values of y and x

  function LevelGenerator() {
    _classCallCheck(this, LevelGenerator);
    this.level = -1;
    this.objective = undefined;
    this.x = 0;
    this.y = 0;
    this.direction = 'south';
    this.map = undefined;
    this.gameObjects = {};
    this.startNewLevel();
    _SharedState_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe({
      key: 'catacombs.next.level',
      callback: this.startNewLevel.bind(this)
    });
  }
  return _createClass(LevelGenerator, [{
    key: "startNewLevel",
    value: function () {
      var _startNewLevel = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var levelGuide, i, gameObject, position, hero;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _LevelLoader_js__WEBPACK_IMPORTED_MODULE_2__["default"].initialize();
            case 2:
              _context.next = 4;
              return _GameObjectLoader_js__WEBPACK_IMPORTED_MODULE_1__["default"].initialize();
            case 4:
              this.level++;
              levelGuide = _LevelLoader_js__WEBPACK_IMPORTED_MODULE_2__["default"].get(this.level);
              this.map = this.createMaze(levelGuide.mapWidth, levelGuide.mapHeight);
              this.gameObjects = {};
              this.addExit(levelGuide.mapWidth, levelGuide.mapHeight);
              this.addTombs(levelGuide.mapWidth, levelGuide.mapHeight);
              for (i = 0; i < levelGuide.objects.length; i++) {
                gameObject = levelGuide.objects[i];
                this.addItem(gameObject.id, gameObject.count, levelGuide.mapWidth, levelGuide.mapHeight);
              }
              position = {
                x: this.x,
                y: this.y,
                direction: this.direction
              };
              _SharedState_js__WEBPACK_IMPORTED_MODULE_0__["default"].set({
                key: 'catacombs.map',
                value: this.map
              });
              _SharedState_js__WEBPACK_IMPORTED_MODULE_0__["default"].set({
                key: 'catacombs.objects',
                value: this.gameObjects
              });
              _SharedState_js__WEBPACK_IMPORTED_MODULE_0__["default"].set({
                key: 'catacombs.level.objective',
                value: levelGuide.objective
              });
              _SharedState_js__WEBPACK_IMPORTED_MODULE_0__["default"].set({
                key: 'catacombs.level',
                value: this.level
              });
              _SharedState_js__WEBPACK_IMPORTED_MODULE_0__["default"].set({
                key: 'hero.position',
                value: position
              });
              hero = _SharedState_js__WEBPACK_IMPORTED_MODULE_0__["default"].get('hero');
              hero.addJournalEntry(levelGuide.journalEntry);
            case 19:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function startNewLevel() {
        return _startNewLevel.apply(this, arguments);
      }
      return startNewLevel;
    }()
  }, {
    key: "addExit",
    value: function addExit(mazeWidth, mazeHeight) {
      this.y = this.yOffset(0);
      this.x = this.xOffset(0);
      this.direction = 'south';
      var upperLeft = locationHash(this.y, this.x);
      var lowerRight = locationHash(this.yOffset(mazeHeight - 1), this.xOffset(mazeWidth - 1));
      if (this.level % 2 === 0) {
        var up = this.level === 0 ? _GameObjectLoader_js__WEBPACK_IMPORTED_MODULE_1__["default"].getInstanceOf('hole-in-ceiling') : _GameObjectLoader_js__WEBPACK_IMPORTED_MODULE_1__["default"].getInstanceOf('ladder-up');
        this.gameObjects[upperLeft] = up;
        this.gameObjects[lowerRight] = _GameObjectLoader_js__WEBPACK_IMPORTED_MODULE_1__["default"].getInstanceOf('ladder-down');
      } else {
        this.y = this.yOffset(mazeHeight - 1);
        this.x = this.xOffset(mazeWidth - 1);
        this.direction = 'north';
        this.gameObjects[upperLeft] = _GameObjectLoader_js__WEBPACK_IMPORTED_MODULE_1__["default"].getInstanceOf('ladder-down');
        this.gameObjects[lowerRight] = _GameObjectLoader_js__WEBPACK_IMPORTED_MODULE_1__["default"].getInstanceOf('ladder-up');
      }
    }

    // Tombs are marked with a 'o'.
    // Doors are placed at all dead ends with openings to the north and south.
  }, {
    key: "addTombs",
    value: function addTombs(mazeWidth, mazeHeight) {
      for (var y = 0; y < mazeHeight; y++) {
        var yPos = this.yOffset(y);
        for (var x = 0; x < mazeWidth; x++) {
          var xPos = this.xOffset(x);
          this.replaceSpacesWithDoors(xPos, yPos);
        }
      }
    }

    // identify dead ends to the north or south.
    // If there is a dead end to the north or south, then specify the x and y position of the opening.
  }, {
    key: "replaceSpacesWithDoors",
    value: function replaceSpacesWithDoors(xPos, yPos) {
      if (this.map[yPos][xPos] != ' ') return;
      if (this.gameObjects[locationHash(yPos, xPos)]) return;
      var wallDirections = [];
      if (this.map[yPos][xPos - 2] != ' ' && this.map[yPos][xPos - 2] != 'o') wallDirections.push('west');
      if (this.map[yPos][xPos + 2] != ' ' && this.map[yPos][xPos + 2] != 'o') wallDirections.push('east');
      if (this.map[yPos - 1][xPos] != ' ' && this.map[yPos - 1][xPos] != 'o') wallDirections.push('north');
      if (this.map[yPos + 1][xPos] != ' ' && this.map[yPos + 1][xPos] != 'o') wallDirections.push('south');
      if (wallDirections.length == 3) {
        if (wallDirections.includes('north') && !wallDirections.includes('south')) {
          this.map[yPos + 1] = this.replaceAt(this.map[yPos + 1], xPos - 1, '-');
          this.map[yPos + 1] = this.replaceAt(this.map[yPos + 1], xPos, 'o');
          this.map[yPos + 1] = this.replaceAt(this.map[yPos + 1], xPos + 1, '-');
          this.gameObjects[locationHash(yPos + 1, xPos)] = _GameObjectLoader_js__WEBPACK_IMPORTED_MODULE_1__["default"].getInstanceOf('door');
          this.gameObjects[locationHash(yPos, xPos)] = _GameObjectLoader_js__WEBPACK_IMPORTED_MODULE_1__["default"].getInstanceOf('sarcophagus');
        } else if (!wallDirections.includes('north') && wallDirections.includes('south')) {
          this.map[yPos - 1] = this.replaceAt(this.map[yPos - 1], xPos - 1, '-');
          this.map[yPos - 1] = this.replaceAt(this.map[yPos - 1], xPos, 'o');
          this.map[yPos - 1] = this.replaceAt(this.map[yPos - 1], xPos + 1, '-');
          this.gameObjects[locationHash(yPos - 1, xPos)] = _GameObjectLoader_js__WEBPACK_IMPORTED_MODULE_1__["default"].getInstanceOf('door');
          this.gameObjects[locationHash(yPos, xPos)] = _GameObjectLoader_js__WEBPACK_IMPORTED_MODULE_1__["default"].getInstanceOf('sarcophagus');
        }
      }
    }
  }, {
    key: "addItem",
    value: function addItem(itemName, count, mazeWidth, mazeHeight) {
      var offByOne = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      for (var i = 0; i < count; i++) {
        var posX = Math.floor(Math.random() * mazeWidth);
        var posY = Math.floor(Math.random() * mazeHeight);
        var x = this.xOffset(posX);
        var y = this.yOffset(posY);
        if (offByOne) y--;
        if (this.map[y][x] === ' ' && !this.gameObjects[locationHash(y, x)]) {
          this.gameObjects[locationHash(y, x)] = _GameObjectLoader_js__WEBPACK_IMPORTED_MODULE_1__["default"].getInstanceOf(itemName);
        } else {
          i--; // try again
        }
      }
    }
  }, {
    key: "xOffset",
    value: function xOffset(x) {
      return x * 4 + 2;
    }
  }, {
    key: "yOffset",
    value: function yOffset(y) {
      return y * 2 + 1;
    }
  }, {
    key: "replaceAt",
    value: function replaceAt(string, index, replacement) {
      return string.substr(0, index) + replacement + string.substr(index + replacement.length);
    }
  }, {
    key: "createMaze",
    value: function createMaze(width, height) {
      // Establish variables and starting grid
      var totalCells = height * width;
      var unvisited = []; // cells that are unvisited.
      var maze = [];
      for (var y = 0; y < height; y++) {
        unvisited[y] = [];
        maze[y * 2] = '';
        maze[y * 2 + 1] = '';
        for (var x = 0; x < width; x++) {
          maze[y * 2] += '+---';
          maze[y * 2 + 1] += '|   ';
          unvisited[y][x] = true;
        }
        maze[y * 2] += '+';
        maze[y * 2 + 1] += '|';
      }
      maze[height * 2] = '';
      for (var _x = 0; _x < width; _x++) {
        maze[height * 2] += '+---';
      }
      maze[height * 2] += '+';

      // Set a random position to start from
      var current = [Math.floor(Math.random() * height), Math.floor(Math.random() * width)];
      var path = [current];
      unvisited[current[0]][current[1]] = false;
      var visited = 1;

      // // Loop through all available cell positions (given walls take up half the cells, we divide the total by two)
      while (visited < totalCells) {
        // Determine neighboring cells (0,1) and pathways to them (2,3)
        var south = [current[0] - 1, current[1], 'north'];
        var north = [current[0] + 1, current[1], 'south'];
        var east = [current[0], current[1] - 1, 'west'];
        var west = [current[0], current[1] + 1, 'east'];
        var possibleNeighbors = [south, north, east, west];
        var neighbors = [];

        // Determine if each neighboring cell is in game grid, and whether it has already been checked
        for (var i = 0; i < possibleNeighbors.length; i++) {
          if (possibleNeighbors[i][0] > -1 && possibleNeighbors[i][0] < height && possibleNeighbors[i][1] > -1 && possibleNeighbors[i][1] < width && unvisited[possibleNeighbors[i][0]][possibleNeighbors[i][1]] == true) {
            neighbors.push(possibleNeighbors[i]);
          }
        }

        // If at least one active neighboring cell has been found
        if (neighbors.length > 0) {
          // Choose one of the neighbors at random
          var next = neighbors[Math.floor(Math.random() * neighbors.length)];

          // Remove the wall between the current cell and the chosen neighboring cell in the maze view.
          // split maze
          var xBorderToRemove = 0;
          var yBorderToRemove = 0;
          if (next[2] == 'south') {
            yBorderToRemove = this.yOffset(next[0]) - 1;
            xBorderToRemove = this.xOffset(next[1]);
            maze[yBorderToRemove] = this.replaceAt(maze[yBorderToRemove], xBorderToRemove - 1, ' ');
            maze[yBorderToRemove] = this.replaceAt(maze[yBorderToRemove], xBorderToRemove + 1, ' ');
          } else if (next[2] == 'north') {
            yBorderToRemove = this.yOffset(next[0]) + 1;
            xBorderToRemove = this.xOffset(next[1]);
            maze[yBorderToRemove] = this.replaceAt(maze[yBorderToRemove], xBorderToRemove - 1, ' ');
            maze[yBorderToRemove] = this.replaceAt(maze[yBorderToRemove], xBorderToRemove + 1, ' ');
          } else if (next[2] == 'east') {
            yBorderToRemove = this.yOffset(next[0]);
            xBorderToRemove = this.xOffset(next[1]) - 2;
          } else if (next[2] == 'west') {
            yBorderToRemove = this.yOffset(next[0]);
            xBorderToRemove = this.xOffset(next[1]) + 2;
          }
          maze[yBorderToRemove] = this.replaceAt(maze[yBorderToRemove], xBorderToRemove, ' ');

          // Mark the neighbor as visited, and set it as the current cell
          current = next;
          unvisited[current[0]][current[1]] = false;
          visited++;
          path.push(current);
        }
        // Otherwise go back up a step and keep going
        else {
          current = path.pop();
        }
      }
      return maze;
    }
  }]);
}();

function locationHash(y, x) {
  return 'y' + y + ',x' + x;
}

/***/ }),

/***/ "./src/game/LevelLoader.js":
/*!*********************************!*\
  !*** ./src/game/LevelLoader.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var LevelLoader = /*#__PURE__*/function () {
  function LevelLoader() {
    _classCallCheck(this, LevelLoader);
    this.initialized = false;
    this.levels = [];
  }
  return _createClass(LevelLoader, [{
    key: "initialize",
    value: function () {
      var _initialize = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var response, levelsJson, i, levelAsString, levelJson;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (this.initialized) {
                _context.next = 21;
                break;
              }
              _context.next = 3;
              return fetch(LevelLoader.ACTIVE_LEVELS_FILE);
            case 3:
              response = _context.sent;
              _context.next = 6;
              return response.json();
            case 6:
              levelsJson = _context.sent;
              i = 0;
            case 8:
              if (!(i < levelsJson.levels.length)) {
                _context.next = 19;
                break;
              }
              _context.next = 11;
              return fetch("mods/levels/".concat(levelsJson.levels[i], ".json"));
            case 11:
              levelAsString = _context.sent;
              _context.next = 14;
              return levelAsString.json();
            case 14:
              levelJson = _context.sent;
              this.levels.push(levelJson);
            case 16:
              i++;
              _context.next = 8;
              break;
            case 19:
              console.log("Levels Loaded: ".concat(this.levels.length));
              this.initialized = true;
            case 21:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function initialize() {
        return _initialize.apply(this, arguments);
      }
      return initialize;
    }()
  }, {
    key: "get",
    value: function get(index) {
      if (index < 0 || index >= this.levels.length) {
        throw new Error("Level index ".concat(index, " out of bounds."));
      }
      return this.levels[index];
    }
  }]);
}();
_defineProperty(LevelLoader, "ACTIVE_LEVELS_FILE", 'mods/levels/active-levels.json');
var levels = new LevelLoader();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (levels);

// Level Ideas:
// const objectives = [
//   'Stop the bleeding.',
//   'Find the map of the current level.',
//   'Gather enough food to survive the next two levels.',
//   'Discover a hidden room.',
//   'Solve a puzzle to unlock a secret weapon cache.',
//   'Defeat a mini-boss to acquire a key to the next level.',
//   'Rescue a trapped animal companion.',
//   'Restore a broken piece of ancient machinery.',
//   'Navigate through a maze without a map.',
//   'Collect three pieces of ancient lore.',
//   'Survive a level without using any weapons.',
//   'Repair your armor using materials found in the level.',
//   'Discover and decipher an ancient inscription.',
//   'Light all the torches in a level to reveal a hidden passage.',
//   'Collect water from a sacred well to restore stamina.',
//   'Find and activate an ancient altar.',
//   'Escape from a trap within a limited time.',
//   'Use a companion to retrieve an unreachable item.',
//   'Solve a riddle posed by a statue.',
//   'Clear a path blocked by rubble.',
//   'Defeat a group of enemies using only magic.',
//   'Gather ingredients to craft a healing potion.',
//   'Find the pieces of a broken key.',
//   'Assemble the key and unlock the door to the next level.',
//   'Survive a level without replenishing your health.',
//   'Use stealth to bypass a group of patrolling enemies.',
//   'Find a way to light up a completely dark level.',
//   "Collect all the lore pieces to learn about the catacomb's history.",
//   'Acquire a rare weapon guarded by a powerful enemy.',
//   'Navigate a level filled with dangerous traps.',
//   'Solve a complex mechanical puzzle to open a secret chamber.',
//   'Defeat an enemy using a weapon found in the same level.',
//   'Restore a piece of ancient artwork.',
//   'Find a secret passage by following a hidden clue.',
//   'Gather rare materials to craft a powerful artifact.',
//   'Survive an ambush.',
//   'Complete a level without activating any traps.',
//   'Decode an ancient language with clues scattered throughout the level.',
//   'Use an animal companion to scare away enemies.',
//   'Reveal a hidden story by placing artifacts in their rightful places.',
//   'Defeat a ghost haunting a level.',
//   'Find a way to cross a deadly chasm.',
//   'Survive a level with decreasing health due to a curse.',
//   'Break a curse affecting a level.',
//   'Collect all pieces of an ancient manuscript.',
//   'Solve a puzzle to purify tainted water.',
//   'Use a mystical item to reveal hidden enemies.',
//   'Find and repair a broken bridge.',
//   "Gather intelligence on Tahara's minions.",
//   'Decode a message left by a previous explorer.',
//   'Find a lost companion in a labyrinth.',
//   'Defeat a shadow creature using light.',
//   'Survive a level with limited visibility due to fog.',
//   'Escape a collapsing section of the catacomb.',
//   'Uncover the burial site of a fallen hero.',
//   'Pay tribute to the hero to gain their weapon.',
//   'Solve a time-based puzzle to escape a room.',
//   'Find a way to bypass a magical barrier.',
//   'Use a companion to unlock a door.',
//   'Gather all the components to craft a mystical key.',
//   'Craft the mystical key and open the gateway to a hidden area.',
//   'Defeat an ancient guardian to retrieve a powerful artifact.',
//   'Use the artifact to cleanse a corrupted area.',
//   'Find a hidden sanctuary and rest without being disturbed.',
//   'Collect rare herbs to cure a poison affecting the player.',
//   'Translate an ancient prophecy.',
//   'Align statues to reveal a hidden passageway.',
//   'Use environmental hazards to defeat enemies.',
//   'Survive a level filled with aggressive fauna.',
//   'Discover a way to breathe underwater to explore a flooded section.',
//   'Retrieve an ancient emblem from a sunken area.',
//   'Convince a group of neutral creatures to allow passage.',
//   'Complete a level in complete silence to avoid awakening an enemy.',
//   'Find and collect all parts of an ancient armor set.',
//   'Assemble the ancient armor set for significant protection.',
//   'Use a companion to solve a puzzle that requires teamwork.',
//   'Craft a unique weapon with materials found across several levels.',
//   'Discover a shortcut that skips a level but is risky.',
//   'Solve a musical puzzle to calm a beast.',
//   'Redirect light to reveal the path forward.',
//   'Survive a trial that tests all player abilities.',
//   'Escort a non-combatant through a dangerous area.',
//   'Find and use a one-time use item that grants invincibility.',
//   'Collect the lore that explains the origin of the companions.',
//   'Repair a mechanism to stop a deadly environmental hazard.',
//   'Survive a level where the map constantly changes.',
//   'Gather the components to create a teleportation device.',
//   'Teleport past an otherwise impassable obstacle.',
//   'Defeat an enemy using only items found in that level.',
//   'Survive a duel against a rival explorer.',
//   'Find a way to temporarily gain the ability to see through walls.',
//   'Solve a puzzle that requires manipulating time.',
//   'Conserve resources to survive a level with scarce supplies.',
//   'Find a hidden garden and gather its mystical fruits.',
//   'Use the fruits to gain temporary enhancements.',
//   'Unravel the mystery of a vanished civilization.',
//   'Survive a level where gravity is inconsistent.',
//   'Gather the testimonies of spirits to learn a crucial secret.',
//   'Overcome a trial of courage, wisdom, and strength.',
//   'Use a mystical item to control elements for puzzle-solving.',
//   'Find a way to merge two animal companions into a more powerful ally.',
//   'Discover a lost city hidden within the catacombs.',
//   'Find and activate ancient machinery to power up the lost city.',
//   'Use the resources of the lost city to prepare for the final battle.',
//   'Navigate a level that mimics the surface world.',
//   'Gather the blessings of ancient deities for the final battle.',
//   'Decode the ultimate prophecy regarding Tahara.',
//   'Use a mystical mirror to reveal the true path.',
//   "Find and use a series of ancient totems to weaken Tahara's power.",
//   'Collect the essences of fallen enemies to forge a legendary weapon.',
//   'Find a way to resurrect a fallen hero to aid in the battle.',
//   "Use the hero's knowledge to find Tahara's weakness.",
//   'Gather allies by proving your worth through trials.',
//   "Solve the final puzzle that reveals the entrance to Tahara's lair.",
//   'Prepare for the final battle by collecting ancient artifacts.',
//   'Rally your companions and allies for the final descent.',
//   'Navigate a level with dynamically changing environments.',
//   "Decipher Tahara's plans by collecting scattered notes.",
//   'Find and use an ancient artifact that grants understanding of all languages.',
//   "Collect the elemental stones to forge a shield against Tahara's magic.",
//   "Use a magical beacon to light the path to Tahara's chamber.",
//   "Solve a puzzle to disarm traps guarding Tahara's lair.",
//   'Gather the tears of the moon to enchant your weapon.',
//   'Survive the hall of echoes, where your worst fears are manifested.',
//   'Find the ancient scrolls that contain the incantations to bind Tahara.',
//   'Use the scrolls to weaken Tahara during the final battle.',
//   "Collect the three keys guarded by Tahara's lieutenants.",
//   "Use the keys to unlock the gate to Tahara's sanctum.",
//   'Defeat Tahara, sealing away the ancient evil forever.'
// ]

/***/ }),

/***/ "./src/game/MovementEngine.js":
/*!************************************!*\
  !*** ./src/game/MovementEngine.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MovementEngine)
/* harmony export */ });
/* harmony import */ var _LevelGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LevelGenerator.js */ "./src/game/LevelGenerator.js");
/* harmony import */ var _SharedState_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SharedState.js */ "./src/game/SharedState.js");
/* harmony import */ var _GameObjectLoader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameObjectLoader.js */ "./src/game/GameObjectLoader.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var MovementEngine = /*#__PURE__*/function () {
  function MovementEngine(hero) {
    _classCallCheck(this, MovementEngine);
    // layers to pov mapping:
    // 'layer_1_door': this.near_left_door,
    // 'layer_2_door': this.middle_left_door,
    // 'layer_3_door': this.far_left_door,
    // 'layer_4_door': this.near_center_door,
    // 'layer_5_door': this.middle_center_door,
    // 'layer_6_door': this.far_center_door,
    // 'layer_7_door': this.far_right_door,
    // 'layer_8_door': this.middle_right_door,
    // 'layer_9_door': this.near_right_door,
    // 3x3 view offsets for each direction
    // format: [layer, y, x]
    _defineProperty(this, "NorthView", [['layer_3_', -2, -2], ['layer_6_', -3, 0], ['layer_7_', -2, 2], ['layer_2_', -1, -2], ['layer_5_', -2, 0], ['layer_8_', -1, 2], ['layer_1_', 0, -2], ['layer_4_', -1, 0], ['layer_9_', 0, 2] // near_right
    ]);
    _defineProperty(this, "SouthView", [['layer_3_', 2, 2], ['layer_6_', 3, 0], ['layer_7_', 2, -2], ['layer_2_', 1, 2], ['layer_5_', 2, 0], ['layer_8_', 1, -2], ['layer_1_', 0, 2], ['layer_4_', 1, 0], ['layer_9_', 0, -2]]);
    // --- start here ---
    _defineProperty(this, "EastView", [['layer_3_', -1, 4], ['layer_6_', 0, 6], ['layer_7_', 1, 4], ['layer_2_', -1, 2], ['layer_5_', 0, 4], ['layer_8_', 1, 2], ['layer_1_', -1, 0], ['layer_4_', 0, 2], ['layer_9_', 1, 0]]);
    _defineProperty(this, "WestView", [['layer_3_', 1, -4], ['layer_6_', 0, -6], ['layer_7_', -1, -4], ['layer_2_', 1, -2], ['layer_5_', 0, -4], ['layer_8_', -1, -2], ['layer_1_', 1, 0], ['layer_4_', 0, -2], ['layer_9_', -1, 0]]);
    this.hero = hero;
    _SharedState_js__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe({
      key: 'hero.position',
      callback: this.setPointOfView.bind(this)
    });
  }
  return _createClass(MovementEngine, [{
    key: "moveDown",
    value: function moveDown() {
      var position = _SharedState_js__WEBPACK_IMPORTED_MODULE_1__["default"].get('hero.position');
      var current = this.getGameObjectAt(position);
      // first check to see if we are engaged in combat with a creature
      if (current !== undefined) {
        if (current.getType() === 'ladder-down') {
          // we can move the hero to the next level
          _SharedState_js__WEBPACK_IMPORTED_MODULE_1__["default"].set({
            key: 'catacombs.next.level',
            value: true
          });
          this.hero.moved();
          new Audio('sounds/level-complete.mp3').play();
          return true;
        }
      }
      return false;
    }
  }, {
    key: "moveForward",
    value: function moveForward() {
      var position = _SharedState_js__WEBPACK_IMPORTED_MODULE_1__["default"].get('hero.position');

      // now check to see if we are too tired to move
      var stamina = _SharedState_js__WEBPACK_IMPORTED_MODULE_1__["default"].get('hero.stamina');
      if (stamina.value < 1) {
        _SharedState_js__WEBPACK_IMPORTED_MODULE_1__["default"].set({
          key: 'message.center',
          value: "you are too tired to move"
        });
        return;
      }

      // get next catacomb feature or entity at the next location.
      var newX = position.x;
      var newY = position.y;
      if (position.direction === 'north') newY = newY - 1;
      if (position.direction === 'south') newY = newY + 1;
      if (position.direction === 'east') newX = newX + 2;
      if (position.direction === 'west') newX = newX - 2;
      var next = this.getGameObjectAt({
        y: newY,
        x: newX
      });

      // if there is an obstruction, don't move the hero.
      if (next !== undefined && next.obstructsMovement()) return;

      // we can move the hero...
      position.x = newX;
      position.y = newY;
      _SharedState_js__WEBPACK_IMPORTED_MODULE_1__["default"].set({
        key: 'message.center',
        value: ''
      });
      _SharedState_js__WEBPACK_IMPORTED_MODULE_1__["default"].set({
        key: 'hero.position',
        value: position
      });
      this.hero.moved();
      new Audio('sounds/footstep.mp3').play();
    }
  }, {
    key: "turnLeft",
    value: function turnLeft() {
      var position = _SharedState_js__WEBPACK_IMPORTED_MODULE_1__["default"].get('hero.position');
      if (position.direction === 'north') position.direction = 'west';else if (position.direction === 'west') position.direction = 'south';else if (position.direction === 'south') position.direction = 'east';else if (position.direction === 'east') position.direction = 'north';
      _SharedState_js__WEBPACK_IMPORTED_MODULE_1__["default"].set({
        key: 'hero.position',
        value: position
      });
    }
  }, {
    key: "turnRight",
    value: function turnRight() {
      var position = _SharedState_js__WEBPACK_IMPORTED_MODULE_1__["default"].get('hero.position');
      if (position.direction === 'north') position.direction = 'east';else if (position.direction === 'east') position.direction = 'south';else if (position.direction === 'south') position.direction = 'west';else if (position.direction === 'west') position.direction = 'north';
      _SharedState_js__WEBPACK_IMPORTED_MODULE_1__["default"].set({
        key: 'hero.position',
        value: position
      });
    }
  }, {
    key: "setPointOfView",
    value: function setPointOfView() {
      var position = _SharedState_js__WEBPACK_IMPORTED_MODULE_1__["default"].get('hero.position');
      var background = [];
      var offsets = this.NorthView;
      if (position.direction === 'south') offsets = this.SouthView;
      if (position.direction === 'east') offsets = this.EastView;
      if (position.direction === 'west') offsets = this.WestView;
      for (var i = 0; i < offsets.length; i++) {
        var backgroundFeature = this.getBackgroundFeatureAt(position.y + offsets[i][1], position.x + offsets[i][2]);
        if (backgroundFeature) background.push(offsets[i][0] + backgroundFeature);
      }
      background = background.sort();

      // remove center hallways
      background = background.filter(function (element) {
        return !element.startsWith('layer_4_hall');
      });
      background = background.filter(function (element) {
        return !element.startsWith('layer_5_hall');
      });

      // if we have a layer_4, we cannot have a layer_3, layer_5, layer_6, layer_7
      if (background.some(function (element) {
        return element.startsWith('layer_4_');
      })) {
        background = background.filter(function (element) {
          return !element.startsWith('layer_2_');
        });
        background = background.filter(function (element) {
          return !element.startsWith('layer_3_');
        });
        background = background.filter(function (element) {
          return !element.startsWith('layer_5_');
        });
        background = background.filter(function (element) {
          return !element.startsWith('layer_6_');
        });
        background = background.filter(function (element) {
          return !element.startsWith('layer_7_');
        });
        background = background.filter(function (element) {
          return !element.startsWith('layer_8_');
        });
      } else if (background.some(function (element) {
        return element.startsWith('layer_5_');
      })) {
        background = background.filter(function (element) {
          return !element.startsWith('layer_3_');
        });
        background = background.filter(function (element) {
          return !element.startsWith('layer_6_');
        });
        background = background.filter(function (element) {
          return !element.startsWith('layer_7_');
        });
      }
      var response = {
        background: background
      };

      // Now look for objects in the viewable area and add them to the response
      var near = this.getLayer(offsets, 'layer_4_');
      var middle = this.getLayer(offsets, 'layer_5_');
      var far = this.getLayer(offsets, 'layer_6_');
      var hereEntity = this.getGameObjectAt({
        y: position.y,
        x: position.x
      });
      var nearEntity = this.getGameObjectAt({
        y: position.y + near[1],
        x: position.x + near[2]
      });
      var midEntity = this.getGameObjectAt({
        y: position.y + middle[1],
        x: position.x + middle[2]
      });
      var farEntity = this.getGameObjectAt({
        y: position.y + far[1],
        x: position.x + far[2]
      });
      if (hereEntity) {
        response.here = hereEntity.getPerspective('here');
        _SharedState_js__WEBPACK_IMPORTED_MODULE_1__["default"].set({
          key: 'message.center',
          value: "you see ".concat(hereEntity.getNameWithArticle())
        });
      }
      if (nearEntity) response.nearby = nearEntity.getPerspective('nearby');
      if (midEntity) response.midRange = midEntity.getPerspective('midRange');
      if (farEntity) response.farAway = farEntity.getPerspective('farAway');
      _SharedState_js__WEBPACK_IMPORTED_MODULE_1__["default"].set({
        key: 'hero.viewpoint',
        value: response
      });
    }
  }, {
    key: "getLayer",
    value: function getLayer(offsets, name) {
      for (var i = 0; i < offsets.length; i++) {
        if (offsets[i][0] === name) return offsets[i];
      }
      return undefined;
    }
  }, {
    key: "getGameObjectAt",
    value: function getGameObjectAt(props) {
      var y = props.y,
        x = props.x;
      var map = _SharedState_js__WEBPACK_IMPORTED_MODULE_1__["default"].get('catacombs.map');
      var entities = _SharedState_js__WEBPACK_IMPORTED_MODULE_1__["default"].get('catacombs.objects');
      if (y < 0 || y >= map.length) return undefined;
      if (x < 0 || x >= map[y].length) return undefined;
      if ((0,_LevelGenerator_js__WEBPACK_IMPORTED_MODULE_0__.locationHash)(y, x) in entities) return entities[(0,_LevelGenerator_js__WEBPACK_IMPORTED_MODULE_0__.locationHash)(y, x)];
      var symbol = map[y][x];
      if (symbol === ' ') return undefined;
      if (symbol === '|' || symbol === '+' || symbol === '-') return _GameObjectLoader_js__WEBPACK_IMPORTED_MODULE_2__["default"].getInstanceOf('wall');
    }
  }, {
    key: "removeGameObjectAt",
    value: function removeGameObjectAt(props) {
      var y = props.y,
        x = props.x;
      var entities = _SharedState_js__WEBPACK_IMPORTED_MODULE_1__["default"].get('catacombs.objects');
      if ((0,_LevelGenerator_js__WEBPACK_IMPORTED_MODULE_0__.locationHash)(y, x) in entities) delete entities[(0,_LevelGenerator_js__WEBPACK_IMPORTED_MODULE_0__.locationHash)(y, x)];
      _SharedState_js__WEBPACK_IMPORTED_MODULE_1__["default"].set({
        key: 'catacombs.objects',
        value: entities
      });
      this.setPointOfView();
    }
  }, {
    key: "getBackgroundFeatureAt",
    value: function getBackgroundFeatureAt(y, x) {
      var map = _SharedState_js__WEBPACK_IMPORTED_MODULE_1__["default"].get('catacombs.map');
      if (y < 0 || y >= map.length) return undefined;
      if (x < 0 || x >= map[y].length) return undefined;
      var symbol = map[y][x];
      if (symbol === '|') return 'wall';
      if (symbol === '+') return 'wall';
      if (symbol === '-') return 'wall';
      if (symbol === 'o') return 'door';
      if (symbol === ' ') return 'hall';else return 'hall';
    }
  }]);
}();


/***/ }),

/***/ "./src/game/ScreenBrightness.js":
/*!**************************************!*\
  !*** ./src/game/ScreenBrightness.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ScreenBrightness)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var ScreenBrightness = /*#__PURE__*/_createClass(function ScreenBrightness() {
  _classCallCheck(this, ScreenBrightness);
});
_defineProperty(ScreenBrightness, "Dark", '#0d3f0d');
_defineProperty(ScreenBrightness, "Dim", '#145214');
_defineProperty(ScreenBrightness, "Balanced", '#1e6f1e');
_defineProperty(ScreenBrightness, "Light", '#27a327');
_defineProperty(ScreenBrightness, "Bright", '#2cd03a');


/***/ }),

/***/ "./src/game/SharedState.js":
/*!*********************************!*\
  !*** ./src/game/SharedState.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var SharedState = /*#__PURE__*/function () {
  function SharedState() {
    _classCallCheck(this, SharedState);
    this.data = {};
    this.listeners = {};
  }
  return _createClass(SharedState, [{
    key: "get",
    value: function get(key) {
      return this.data[key];
    }
  }, {
    key: "remove",
    value: function remove(key) {
      this.unsubscribe({
        key: key
      });
      delete this.data[key];
    }

    /*
      Set a value in shared state and notify subscribers
      If value is a primative and doesn't change don't notify
      If value is a complex object notify every time as we don't know if a containing value has changed
    */
  }, {
    key: "set",
    value: function set(props) {
      var key = props.key,
        value = props.value;
      this.data[key] = value;
      this._notify(key, value);
    }

    /*
      Dump memory
    */
  }, {
    key: "dump",
    value: function dump() {
      return this.data;
    }
  }, {
    key: "subscribe",
    value: function subscribe(props) {
      var key = props.key,
        callback = props.callback;
      if (!this.listeners[key]) {
        this.listeners[key] = [];
      }
      if (this.listeners[key].includes(callback)) return;
      this.listeners[key].push(callback);
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(props) {
      var key = props.key,
        callback = props.callback;
      if (this.listeners[key]) {
        if (callback) {
          this.listeners[key] = this.listeners[key].filter(function (listener) {
            return listener !== callback;
          });
        } else {
          delete this.listeners[key];
        }
      }
    }
  }, {
    key: "_notify",
    value: function _notify(key, value) {
      if (this.listeners[key]) {
        this.listeners[key].forEach(function (callback) {
          return callback(value);
        });
      }
    }
  }]);
}();
var state = new SharedState();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (state);

/***/ }),

/***/ "./src/game/Time.js":
/*!**************************!*\
  !*** ./src/game/Time.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Time)
/* harmony export */ });
/* harmony import */ var _SharedState_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SharedState.js */ "./src/game/SharedState.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var Time = /*#__PURE__*/function () {
  function Time() {
    _classCallCheck(this, Time);
    this.time = new Date(1974, 10, 23, 9, 0, 0);
    this.intervalId = null;
    _SharedState_js__WEBPACK_IMPORTED_MODULE_0__["default"].set({
      key: 'game.time',
      value: this.time
    });
  }
  return _createClass(Time, [{
    key: "start",
    value: function start() {
      var _this = this;
      this.intervalId = setInterval(function () {
        _this.time.setMinutes(_this.time.getMinutes() + 1);
        _SharedState_js__WEBPACK_IMPORTED_MODULE_0__["default"].set({
          key: 'game.time',
          value: _this.time
        });
      }, 2000);
    }
  }, {
    key: "stop",
    value: function stop() {
      clearInterval(this.intervalId);
    }
  }]);
}();


/***/ }),

/***/ "./src/hud/CompanionVitals.js":
/*!************************************!*\
  !*** ./src/hud/CompanionVitals.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CompanionVitals)
/* harmony export */ });
/* harmony import */ var _ui_Grid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/Grid.js */ "./src/ui/Grid.js");
/* harmony import */ var _ui_Progress_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/Progress.js */ "./src/ui/Progress.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


var CompanionVitals = /*#__PURE__*/function (_Grid) {
  function CompanionVitals() {
    var _this;
    _classCallCheck(this, CompanionVitals);
    _this = _callSuper(this, CompanionVitals, [{
      id: 'CompanionVitals',
      width: 26,
      height: 7,
      border: true
    }]);
    _this.add({
      x: 2,
      y: 0,
      string: ' Companion ',
      force: true
    });
    _this.add({
      x: 2,
      y: 2,
      grid: new _ui_Progress_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
        label: 'Health',
        stateKey: 'companion.health'
      })
    });
    return _this;
  }
  _inherits(CompanionVitals, _Grid);
  return _createClass(CompanionVitals);
}(_ui_Grid_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/hud/FPS.js":
/*!************************!*\
  !*** ./src/hud/FPS.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FPS)
/* harmony export */ });
/* harmony import */ var _ui_Grid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/Grid.js */ "./src/ui/Grid.js");
/* harmony import */ var _game_SharedState_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game/SharedState.js */ "./src/game/SharedState.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


var FPS = /*#__PURE__*/function (_Grid) {
  function FPS() {
    var _this;
    _classCallCheck(this, FPS);
    _this = _callSuper(this, FPS, [{
      id: 'FPS',
      width: 25,
      height: 1,
      border: false
    }]);
    _game_SharedState_js__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe({
      key: 'fps.update',
      callback: _this.updateFPS.bind(_this)
    });
    return _this;
  }
  _inherits(FPS, _Grid);
  return _createClass(FPS, [{
    key: "updateFPS",
    value: function updateFPS(fpsUpdate) {
      this.clear();
      var adjusted = fpsUpdate.lastUpdate / 1000;
      adjusted = fpsUpdate.fps / adjusted;
      this.add({
        x: 'right',
        y: 0,
        string: 'FPS: ' + adjusted.toFixed(2).padStart(4, '0') + ' (' + fpsUpdate.fps.toString().padStart(3, '0') + '/' + fpsUpdate.lastUpdate + 'ms)'
      });
    }
  }]);
}(_ui_Grid_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/hud/FirstPersonView.js":
/*!************************************!*\
  !*** ./src/hud/FirstPersonView.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FirstPersonView)
/* harmony export */ });
/* harmony import */ var _ui_Grid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/Grid.js */ "./src/ui/Grid.js");
/* harmony import */ var _game_SharedState_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game/SharedState.js */ "./src/game/SharedState.js");
/* harmony import */ var _ui_AnimationPlayer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/AnimationPlayer.js */ "./src/ui/AnimationPlayer.js");
/* harmony import */ var _game_ScreenBrightness_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../game/ScreenBrightness.js */ "./src/game/ScreenBrightness.js");
/* harmony import */ var _animations_CatacombsBackground_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../animations/CatacombsBackground.js */ "./src/animations/CatacombsBackground.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }





var verticalPositions = {
  far: {
    ceiling: 12,
    floor: 14
  },
  mid: {
    ceiling: 11,
    floor: 15
  },
  near: {
    ceiling: 9,
    floor: 18
  },
  here: {
    ceiling: 5,
    floor: 25
  },
  action: {
    ceiling: 2,
    floor: 27
  }
};
var midDarkness = [['.    .', '  .  .', '.  .  ', ' .  . ', '.  .  ', ' .  . ', '  .   ', '.    .']];
var farDarkness = [['. ', ' .', '. ']];
var heroAnimationProps = {
  id: 'HeroAnimation',
  width: 26,
  height: 25,
  fill: '@',
  zIndex: 5,
  autoPlay: true
};
var hereProps = {
  id: 'HereViewableEntity',
  width: 26,
  height: 25,
  fill: '@',
  zIndex: 4,
  autoPlay: true
};
var nearbyProps = {
  id: 'NearViewableEntity',
  width: 26,
  height: 25,
  fill: '@',
  zIndex: 3,
  autoPlay: true
};
var midRangeProps = {
  id: 'MidViewableEntity',
  width: 26,
  height: 25,
  fill: '@',
  zIndex: 2,
  autoPlay: true
};
var farAwayProps = {
  id: 'FarViewableEntity',
  width: 26,
  height: 25,
  fill: '@',
  zIndex: 1,
  autoPlay: true
};
var FirstPersonView = /*#__PURE__*/function (_Grid) {
  function FirstPersonView() {
    var _this;
    _classCallCheck(this, FirstPersonView);
    _this = _callSuper(this, FirstPersonView, [{
      id: 'FirstPersonView',
      width: 28,
      height: 29,
      fill: ' ',
      border: true
    }]);
    _this.add({
      x: 2,
      y: 0,
      string: ' View ',
      force: true
    });
    _game_SharedState_js__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe({
      key: 'hero.viewpoint',
      callback: _this.updateViewpoint.bind(_this)
    });
    _game_SharedState_js__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe({
      key: 'hero.action',
      callback: _this.showHeroAnimation.bind(_this)
    });
    return _this;
  }
  _inherits(FirstPersonView, _Grid);
  return _createClass(FirstPersonView, [{
    key: "updateViewpoint",
    value: function updateViewpoint(viewpoint) {
      this.clear();
      viewpoint.background.sort();

      // build background image
      var blockX = 1;
      for (var i = 0; i < viewpoint.background.length; i++) {
        var block = _animations_CatacombsBackground_js__WEBPACK_IMPORTED_MODULE_4__["default"].sprites[viewpoint.background[i]];
        this.add({
          x: blockX,
          y: 1,
          block: block
        });
        blockX += block[0].length;
      }

      // add foreground images
      this.removeGrid('FarViewableEntity');
      this.removeGrid('MidViewableEntity');
      this.removeGrid('NearViewableEntity');
      this.removeGrid('HereViewableEntity');
      if (viewpoint.here) {
        var animationProps = _objectSpread(_objectSpread({}, hereProps), viewpoint.here);
        var hereAnimation = new _ui_AnimationPlayer_js__WEBPACK_IMPORTED_MODULE_2__["default"](animationProps);
        var y = 0;
        if (viewpoint.here.position) {
          var frameHeight = viewpoint.here.frames[0].length;
          var yPosition = verticalPositions.here[viewpoint.here.position];
          y = yPosition - frameHeight + 1;
        } else {
          console.log('no position specified: ', viewpoint.here);
        }
        this.add({
          x: 1,
          y: y,
          grid: hereAnimation
        });
      }
      var inventory = _game_SharedState_js__WEBPACK_IMPORTED_MODULE_1__["default"].get('hero.inventory');
      var torch = inventory.find(function (item) {
        return item.getType() === 'torch';
      });
      if (viewpoint.nearby) {
        var _animationProps = _objectSpread(_objectSpread({}, nearbyProps), viewpoint.nearby);
        var nearAnimation = new _ui_AnimationPlayer_js__WEBPACK_IMPORTED_MODULE_2__["default"](_animationProps);
        var _frameHeight = viewpoint.nearby.frames[0].length;
        var _yPosition = verticalPositions.near[viewpoint.nearby.position];
        var _y = _yPosition - _frameHeight + 1;
        this.add({
          x: 1,
          y: _y,
          grid: nearAnimation
        });
      }
      if (!torch) {
        var midRangeAnimation = new _ui_AnimationPlayer_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
          id: 'MidViewableEntity',
          width: 26,
          height: 27,
          fill: '@',
          zIndex: 2,
          frames: midDarkness,
          color: _game_ScreenBrightness_js__WEBPACK_IMPORTED_MODULE_3__["default"].Dark,
          autoPlay: true
        });
        var _frameHeight2 = midDarkness[0].length;
        var _yPosition2 = verticalPositions.mid.floor + 1;
        var _y2 = _yPosition2 - _frameHeight2 + 1;
        this.add({
          x: 1,
          y: _y2,
          grid: midRangeAnimation
        });
      } else if (viewpoint.midRange) {
        var _animationProps2 = _objectSpread(_objectSpread({}, midRangeProps), viewpoint.midRange);
        var _midRangeAnimation = new _ui_AnimationPlayer_js__WEBPACK_IMPORTED_MODULE_2__["default"](_animationProps2);
        var _frameHeight3 = viewpoint.midRange.frames[0].length;
        var _yPosition3 = verticalPositions.mid[viewpoint.midRange.position];
        var _y3 = _yPosition3 - _frameHeight3 + 1;
        this.add({
          x: 1,
          y: _y3,
          grid: _midRangeAnimation
        });
      } else if (viewpoint.farAway) {
        var _animationProps3 = _objectSpread(_objectSpread({}, farAwayProps), viewpoint.farAway);
        var farAwayAnimation = new _ui_AnimationPlayer_js__WEBPACK_IMPORTED_MODULE_2__["default"](_animationProps3);
        var _frameHeight4 = viewpoint.farAway.frames[0].length;
        var _yPosition4 = verticalPositions.far[viewpoint.farAway.position];
        var _y4 = _yPosition4 - _frameHeight4 + 1;
        this.add({
          x: 1,
          y: _y4,
          grid: farAwayAnimation
        });
      } else {
        var _farAwayAnimation = new _ui_AnimationPlayer_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
          id: 'FarViewableEntity',
          width: 26,
          height: 27,
          fill: '@',
          zIndex: 1,
          frames: farDarkness,
          color: _game_ScreenBrightness_js__WEBPACK_IMPORTED_MODULE_3__["default"].Dark,
          autoPlay: true
        });
        var _frameHeight5 = farDarkness[0].length;
        var _yPosition5 = verticalPositions.far.floor;
        var _y5 = _yPosition5 - _frameHeight5 + 1;
        this.add({
          x: 1,
          y: _y5,
          grid: _farAwayAnimation
        });
      }
    }
  }, {
    key: "showHeroAnimation",
    value: function showHeroAnimation(heroAction) {
      this.removeGrid('HeroAnimation');
      var animationProps = _objectSpread(_objectSpread({}, heroAnimationProps), heroAction);
      var action = new _ui_AnimationPlayer_js__WEBPACK_IMPORTED_MODULE_2__["default"](animationProps);
      var frameHeight = animationProps.frames[0].length;
      var yPosition = verticalPositions.action[animationProps.position];
      var y = yPosition - frameHeight + 1;
      this.add({
        x: 1,
        y: y,
        grid: action
      });
    }
  }]);
}(_ui_Grid_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/hud/GameStats.js":
/*!******************************!*\
  !*** ./src/hud/GameStats.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameStats)
/* harmony export */ });
/* harmony import */ var _ui_Grid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/Grid.js */ "./src/ui/Grid.js");
/* harmony import */ var _game_SharedState_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game/SharedState.js */ "./src/game/SharedState.js");
/* harmony import */ var _game_Hero_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../game/Hero.js */ "./src/game/Hero.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }



var GameStats = /*#__PURE__*/function (_Grid) {
  function GameStats() {
    var _this;
    _classCallCheck(this, GameStats);
    _this = _callSuper(this, GameStats, [{
      id: 'GameStats',
      width: 80,
      height: 7,
      fill: ' ',
      border: true
    }]);
    _this.add({
      x: 'center',
      y: 0,
      string: ' ' + _game_SharedState_js__WEBPACK_IMPORTED_MODULE_1__["default"].get('hero.first.name') + ' ' + _game_SharedState_js__WEBPACK_IMPORTED_MODULE_1__["default"].get('hero.last.name') + ' ',
      force: true
    });
    _this.updateHeroLevel(_game_SharedState_js__WEBPACK_IMPORTED_MODULE_1__["default"].get('hero.level'));
    _this.updateXP(_game_SharedState_js__WEBPACK_IMPORTED_MODULE_1__["default"].get('hero.xp'));
    _this.updateTime(_game_SharedState_js__WEBPACK_IMPORTED_MODULE_1__["default"].get('game.time'));
    _this.updateCatacombsLevel(_game_SharedState_js__WEBPACK_IMPORTED_MODULE_1__["default"].get('catacombs.level'));
    _game_SharedState_js__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe({
      key: 'game.time',
      callback: _this.updateTime.bind(_this)
    });
    _game_SharedState_js__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe({
      key: 'hero.level',
      callback: _this.updateHeroLevel.bind(_this)
    });
    _game_SharedState_js__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe({
      key: 'catacombs.level',
      callback: _this.updateCatacombsLevel.bind(_this)
    });
    _game_SharedState_js__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe({
      key: 'hero.xp',
      callback: _this.updateXP.bind(_this)
    });
    return _this;
  }
  _inherits(GameStats, _Grid);
  return _createClass(GameStats, [{
    key: "updateHeroLevel",
    value: function updateHeroLevel(level) {
      this.add({
        x: 'left',
        y: 2,
        string: "Level ".concat(level, " (").concat((0,_game_Hero_js__WEBPACK_IMPORTED_MODULE_2__.getHeroLevelTitle)(level), ")")
      });
      _game_SharedState_js__WEBPACK_IMPORTED_MODULE_1__["default"].set({
        key: 'request.screen.draw',
        value: true
      });
    }
  }, {
    key: "updateCatacombsLevel",
    value: function updateCatacombsLevel() {
      var objective = _game_SharedState_js__WEBPACK_IMPORTED_MODULE_1__["default"].get('catacombs.level.objective');
      this.add({
        x: 'right',
        y: 4,
        string: "Objective: ".concat(objective)
      });
      _game_SharedState_js__WEBPACK_IMPORTED_MODULE_1__["default"].set({
        key: 'request.screen.draw',
        value: true
      });
    }
  }, {
    key: "updateXP",
    value: function updateXP(xp) {
      var in50Parts = Math.round(xp.current / xp.nextLevel * 50);
      // const xpBar = 'Score: ' + ''.repeat(in50Parts) + ' '.repeat(50 - in50Parts)
      var xpBar = 'Score: ' + xp.current;
      this.add({
        x: 'left',
        y: 4,
        string: xpBar
      });
    }
  }, {
    key: "updateTime",
    value: function updateTime(time) {
      var inventory = _game_SharedState_js__WEBPACK_IMPORTED_MODULE_1__["default"].get('hero.inventory');
      var watch = inventory.find(function (item) {
        return item.getType() === 'watch';
      });
      if (!watch) return;
      // Create an Intl.DateTimeFormat instance for formatting the date part
      var dateFormatter = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      });

      // Use the formatter to format the date and time
      var formattedDate = dateFormatter.format(time);
      this.add({
        x: 'right',
        y: 2,
        string: formattedDate
      });

      // if midnight, play a 'night is here' sound
      // if (time.hour === 0 && time.minute === 0) {
      //   const bell = new Audio('sounds/the-bell-tolls.mp3')
      //   bell.play()
      // }
      _game_SharedState_js__WEBPACK_IMPORTED_MODULE_1__["default"].set({
        key: 'request.screen.draw',
        value: true
      });
    }
  }]);
}(_ui_Grid_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/hud/HeroVitals.js":
/*!*******************************!*\
  !*** ./src/hud/HeroVitals.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HeroVitals)
/* harmony export */ });
/* harmony import */ var _ui_Grid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/Grid.js */ "./src/ui/Grid.js");
/* harmony import */ var _ui_Progress_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/Progress.js */ "./src/ui/Progress.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


var HeroVitals = /*#__PURE__*/function (_Grid) {
  function HeroVitals() {
    var _this;
    _classCallCheck(this, HeroVitals);
    _this = _callSuper(this, HeroVitals, [{
      id: 'HeroVitals',
      width: 26,
      height: 22,
      fill: ' ',
      border: true
    }]);
    _this.add({
      x: 2,
      y: 0,
      string: ' Vitals ',
      force: true
    });
    _this.add({
      x: 2,
      y: 2,
      grid: new _ui_Progress_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
        label: 'Health',
        stateKey: 'hero.health'
      })
    });
    _this.add({
      x: 2,
      y: 7,
      grid: new _ui_Progress_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
        label: 'Stamina',
        stateKey: 'hero.stamina'
      })
    });
    _this.add({
      x: 2,
      y: 12,
      grid: new _ui_Progress_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
        label: 'Magic',
        stateKey: 'hero.magic'
      })
    });
    _this.add({
      x: 2,
      y: 17,
      grid: new _ui_Progress_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
        label: 'Hunger',
        stateKey: 'hero.hunger'
      })
    });
    return _this;
  }
  _inherits(HeroVitals, _Grid);
  return _createClass(HeroVitals);
}(_ui_Grid_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/hud/MapView.js":
/*!****************************!*\
  !*** ./src/hud/MapView.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MapView)
/* harmony export */ });
/* harmony import */ var _ui_Grid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/Grid.js */ "./src/ui/Grid.js");
/* harmony import */ var _game_SharedState_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game/SharedState.js */ "./src/game/SharedState.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


var MapView = /*#__PURE__*/function (_Grid) {
  function MapView() {
    var _this;
    _classCallCheck(this, MapView);
    _this = _callSuper(this, MapView, [{
      id: 'MapView',
      width: 26,
      height: 29,
      fill: '·',
      border: true
    }]);
    _this.add({
      x: 'left',
      y: 0,
      string: ' Map ',
      force: true
    });
    _this.mapUpdate(_game_SharedState_js__WEBPACK_IMPORTED_MODULE_1__["default"].get('catacombs.map'));
    _this.positionUpdate(_game_SharedState_js__WEBPACK_IMPORTED_MODULE_1__["default"].get('hero.position'));
    _game_SharedState_js__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe({
      key: 'hero.position',
      callback: _this.positionUpdate.bind(_this)
    });
    _game_SharedState_js__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe({
      key: 'catacombs.map',
      callback: _this.mapUpdate.bind(_this)
    });
    return _this;
  }

  /*
    When a map change occurs, update the MapView to put the hero
    in the center, marking them with a direction arrow.
  */
  _inherits(MapView, _Grid);
  return _createClass(MapView, [{
    key: "positionUpdate",
    value: function positionUpdate(position) {
      var inventory = _game_SharedState_js__WEBPACK_IMPORTED_MODULE_1__["default"].get('hero.inventory');
      var map = inventory.find(function (item) {
        return item.getType() === 'map';
      });
      if (!map) return;
      var x = position.x,
        y = position.y,
        direction = position.direction;
      if (this.map) {
        var editedMap = _toConsumableArray(this.map);
        var marker = this._getDirectionMarker(direction);
        editedMap[y] = editedMap[y].substring(0, x) + marker + editedMap[y].substring(x + 1);
        var viewCenter = {
          x: Math.round(this.width / 2),
          y: Math.round(this.height / 2)
        };
        var heroOffset = {
          x: viewCenter.x - x,
          y: viewCenter.y - y
        };
        this.add({
          x: heroOffset.x,
          y: heroOffset.y,
          block: editedMap,
          backfill: true
        });
      }
    }
  }, {
    key: "mapUpdate",
    value: function mapUpdate(map) {
      this.map = map;
    }
  }, {
    key: "_getDirectionMarker",
    value: function _getDirectionMarker(direction) {
      if (direction === 'north') {
        return '↑';
      } else if (direction === 'south') {
        return '↓';
      }
      if (direction === 'east') {
        return '→';
      }
      if (direction === 'west') {
        return '←';
      }
    }
  }]);
}(_ui_Grid_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/hud/Messages.js":
/*!*****************************!*\
  !*** ./src/hud/Messages.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Messages)
/* harmony export */ });
/* harmony import */ var _ui_Grid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/Grid.js */ "./src/ui/Grid.js");
/* harmony import */ var _game_SharedState_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game/SharedState.js */ "./src/game/SharedState.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


var Messages = /*#__PURE__*/function (_Grid) {
  function Messages() {
    var _this;
    _classCallCheck(this, Messages);
    _this = _callSuper(this, Messages, [{
      id: 'MessagesPanel',
      width: 80,
      height: 7,
      border: true
    }]);
    _this.add({
      x: 'center',
      y: 0,
      string: ' Messages ',
      force: true
    });
    _game_SharedState_js__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe({
      key: 'message.center',
      callback: _this._showNewMessage.bind(_this)
    });
    return _this;
  }
  _inherits(Messages, _Grid);
  return _createClass(Messages, [{
    key: "_showNewMessage",
    value: function _showNewMessage(message) {
      this.clear();
      var messageBlock = this._wrapText(message, 80);
      var y = 4 - messageBlock.length;
      this.add({
        x: 'center',
        y: y,
        block: messageBlock
      });
    }
  }, {
    key: "_wrapText",
    value: function _wrapText(text, width) {
      var words = text.split(' ');
      var lines = [];
      var line = '';
      for (var i = 0; i < words.length; i++) {
        var word = words[i];
        if (line.length + word.length + 1 < width) {
          line += "".concat(word, " ");
        } else {
          lines.push(line);
          line = "".concat(word, " ");
        }
      }
      lines.push(line);
      return lines;
    }
  }]);
}(_ui_Grid_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/menus/Map.js":
/*!**************************!*\
  !*** ./src/menus/Map.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Map)
/* harmony export */ });
/* harmony import */ var _ui_Grid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/Grid.js */ "./src/ui/Grid.js");
/* harmony import */ var _game_SharedState_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game/SharedState.js */ "./src/game/SharedState.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


var Map = /*#__PURE__*/function (_Grid) {
  function Map() {
    var _this;
    _classCallCheck(this, Map);
    _this = _callSuper(this, Map, [{
      width: 60,
      height: 30,
      fill: '·',
      border: true
    }]);
    _this.map = _game_SharedState_js__WEBPACK_IMPORTED_MODULE_1__["default"].get('catacombs.map');
    _this.drawMap(_game_SharedState_js__WEBPACK_IMPORTED_MODULE_1__["default"].get('hero.position'));
    return _this;
  }
  _inherits(Map, _Grid);
  return _createClass(Map, [{
    key: "drawMap",
    value: function drawMap(position) {
      var inventory = _game_SharedState_js__WEBPACK_IMPORTED_MODULE_1__["default"].get('hero.inventory');
      var map = inventory.find(function (item) {
        return item.getType() === 'map';
      });
      if (!map) this.add({
        x: 'center',
        y: 'center',
        string: 'You do not have a map to view.',
        force: true
      });
      var x = position.x,
        y = position.y,
        direction = position.direction;
      if (this.map) {
        var editedMap = _toConsumableArray(this.map);
        var marker = this._getDirectionMarker(direction);
        editedMap[y] = editedMap[y].substring(0, x) + marker + editedMap[y].substring(x + 1);
        var viewCenter = {
          x: Math.round(this.width / 2),
          y: Math.round(this.height / 2)
        };
        var heroOffset = {
          x: viewCenter.x - x,
          y: viewCenter.y - y
        };
        this.add({
          x: heroOffset.x,
          y: heroOffset.y,
          block: editedMap,
          backfill: true
        });
      }
    }
  }, {
    key: "_getDirectionMarker",
    value: function _getDirectionMarker(direction) {
      if (direction === 'north') {
        return '↑';
      } else if (direction === 'south') {
        return '↓';
      }
      if (direction === 'east') {
        return '→';
      }
      if (direction === 'west') {
        return '←';
      }
    }
  }]);
}(_ui_Grid_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/menus/TBD.js":
/*!**************************!*\
  !*** ./src/menus/TBD.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TBD)
/* harmony export */ });
/* harmony import */ var _ui_Grid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/Grid.js */ "./src/ui/Grid.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

var TBD = /*#__PURE__*/function (_Grid) {
  function TBD(name) {
    var _this;
    _classCallCheck(this, TBD);
    _this = _callSuper(this, TBD, [{
      width: 60,
      height: 30,
      border: true
    }]);
    _this.add({
      x: 'center',
      y: 'center',
      string: "".concat(name, " coming soon!")
    });
    return _this;
  }
  _inherits(TBD, _Grid);
  return _createClass(TBD, [{
    key: "keyPressed",
    value: function keyPressed(e) {
      console.log('TBD keyPressed:', e.key);
    }
  }]);
}(_ui_Grid_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/modals/Help.js":
/*!****************************!*\
  !*** ./src/modals/Help.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Help)
/* harmony export */ });
/* harmony import */ var _ui_Grid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/Grid.js */ "./src/ui/Grid.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

var content = "\n\n  Main Screen             Menu System      \n\u250C\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u23D0 Key \u23D0 Action         \u23D0 \u23D0 Key    \u23D0 Action       \u23D0\n\u251C\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524 \u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u23D0  W  \u23D0 Walk Forward   \u23D0 \u23D0   W    \u23D0 Select Above \u23D0\n\u251C\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524 \u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u23D0  A  \u23D0 Turn Left      \u23D0 \u23D0   S    \u23D0 Select Below \u23D0\n\u251C\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524 \u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u23D0  D  \u23D0 Turn Right     \u23D0 \u23D0   D    \u23D0 Tab Right    \u23D0\n\u251C\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524 \u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u23D0  E  \u23D0 Pickup Item    \u23D0 \u23D0   A    \u23D0 Tab Left     \u23D0\n\u251C\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524 \u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u23D0  E  \u23D0 Pickup Item    \u23D0 \u23D0 Return \u23D0 Select       \u23D0\n\u251C\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524 \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u23D0  F  \u23D0 Fight          \u23D0                          \n\u251C\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524                          \n\u23D0  Q  \u23D0 Menu System    \u23D0                          \n\u251C\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524                          \n\u23D0  J  \u23D0 Open Journal   \u23D0                         \n\u251C\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524                          \n\u23D0 Esc \u23D0 Help Menu      \u23D0                          \n\u2514\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518                          \n";
var Help = /*#__PURE__*/function (_Grid) {
  function Help(props) {
    var _this;
    _classCallCheck(this, Help);
    _this = _callSuper(this, Help, [props]);
    _this.add({
      x: 'center',
      y: 0,
      block: content.split('\n')
    });
    return _this;
  }
  _inherits(Help, _Grid);
  return _createClass(Help, [{
    key: "keyPressed",
    value: function keyPressed(e) {
      console.log('Help Panel: keyPressed:', e.key);
    }
  }]);
}(_ui_Grid_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/modals/Inventory.js":
/*!*********************************!*\
  !*** ./src/modals/Inventory.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Inventory)
/* harmony export */ });
/* harmony import */ var _ui_Grid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/Grid.js */ "./src/ui/Grid.js");
/* harmony import */ var _game_SharedState_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game/SharedState.js */ "./src/game/SharedState.js");
/* harmony import */ var _ui_SelectionList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/SelectionList.js */ "./src/ui/SelectionList.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }



var Inventory = /*#__PURE__*/function (_Grid) {
  function Inventory(props) {
    var _this;
    _classCallCheck(this, Inventory);
    // why not have the parent pass width/height/border?
    _this = _callSuper(this, Inventory, [props]);
    var summaryOfItems = _this.getInventorySummary();
    var inventoryItemList = new _ui_SelectionList_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
      id: 'InventoryItemList',
      width: 32,
      height: 30,
      border: true,
      items: summaryOfItems
    });
    inventoryItemList.add({
      x: 'left',
      y: 0,
      string: ' Items ',
      force: true
    });
    _this.add({
      x: 1,
      y: 0,
      grid: inventoryItemList
    });
    var itemImagePanel = new _ui_Grid_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
      id: 'SelectedItemImage',
      width: 30,
      height: 18,
      border: true
    });
    itemImagePanel.add({
      x: 'left',
      y: 0,
      string: ' Image ',
      force: true
    });
    _this.add({
      x: 'right',
      y: 0,
      grid: itemImagePanel
    });
    var itemDescriptionPanel = new _ui_Grid_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
      id: 'SelectedItemDescription',
      width: 30,
      height: 12,
      border: true
    });
    itemDescriptionPanel.add({
      x: 'left',
      y: 0,
      string: ' Description ',
      force: true
    });
    _this.add({
      x: 'right',
      y: 18,
      grid: itemDescriptionPanel
    });

    // set the initial item image and description
    _this.setImageAndDescription(summaryOfItems[0]);
    return _this;
  }

  // Return a list of items in the inventory with a count by id
  _inherits(Inventory, _Grid);
  return _createClass(Inventory, [{
    key: "getInventorySummary",
    value: function getInventorySummary() {
      var summarizedItems = [];
      var inventory = _game_SharedState_js__WEBPACK_IMPORTED_MODULE_1__["default"].get('hero.inventory');
      var _loop = function _loop() {
        var item = inventory[i];
        var equipped = '   ';
        var equippedWeapon = _game_SharedState_js__WEBPACK_IMPORTED_MODULE_1__["default"].get('hero.equipped.weapon');
        if (equippedWeapon && equippedWeapon.getType() === item.getType()) equipped = ' ◆ ';
        var summarizedItem = summarizedItems.find(function (summaryItem) {
          return summaryItem.id === item.getType();
        });
        if (!summarizedItem) {
          summarizedItems.push({
            id: item.getType(),
            value: equipped + item.getName(),
            name: item.getName(),
            image: item.getImage(),
            description: item.getDescription(),
            equipped: equipped,
            count: 1
          });
        } else {
          summarizedItem.count++;
          summarizedItem.value = "".concat(equipped).concat(summarizedItem.name, " (x").concat(summarizedItem.count, ")");
        }
      };
      for (var i = 0; i < inventory.length; i++) {
        _loop();
      }
      console.log('summarizedItems:', summarizedItems);
      return summarizedItems;
    }
  }, {
    key: "keyPressed",
    value: function keyPressed(e) {
      if (e.key === 'w' || e.key === 'ArrowUp') {
        var selected = this.getGrid('InventoryItemList').up();
        this.setImageAndDescription(selected);
      } else if (e.key === 's' || e.key === 'ArrowDown') {
        var _selected = this.getGrid('InventoryItemList').down();
        this.setImageAndDescription(_selected);
      } else if (e.key === 'Enter') {
        var inventoryItems = this.getGrid('InventoryItemList');
        var _selected2 = inventoryItems.selectItem();
        var hero = _game_SharedState_js__WEBPACK_IMPORTED_MODULE_1__["default"].get('hero');
        hero.useItem(_selected2.id);
        inventoryItems.updateItems(this.getInventorySummary());
        this.setImageAndDescription(inventoryItems.selectItem());
      } else {
        console.log('Inventory keyPressed:', e.key);
      }
    }
  }, {
    key: "setImageAndDescription",
    value: function setImageAndDescription(summarizedItem) {
      var imageGrid = this.getGrid('SelectedItemImage');
      imageGrid.clear();
      var descriptionGrid = this.getGrid('SelectedItemDescription');
      descriptionGrid.clear();
      if (!summarizedItem) return;

      // center the image vertically
      var imageYOffset = Math.floor((imageGrid.height - summarizedItem.image.length) / 2);
      imageGrid.add({
        x: 'center',
        y: imageYOffset,
        block: summarizedItem.image
      });
      descriptionGrid.add({
        x: 'left',
        y: 2,
        block: this.wrapText(summarizedItem.description, descriptionGrid.width - 2)
      });
      _game_SharedState_js__WEBPACK_IMPORTED_MODULE_1__["default"].set({
        key: 'request.screen.draw',
        value: true
      });
    }
  }, {
    key: "wrapText",
    value: function wrapText(text, width) {
      var words = text.split(' ');
      var lines = [];
      var line = '';
      for (var i = 0; i < words.length; i++) {
        var word = words[i];
        if (line.length + word.length + 1 < width) {
          line += "".concat(word, " ");
        } else {
          lines.push(line);
          line = "".concat(word, " ");
        }
      }
      lines.push(line);
      return lines;
    }
  }]);
}(_ui_Grid_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/modals/Journal.js":
/*!*******************************!*\
  !*** ./src/modals/Journal.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Jornal)
/* harmony export */ });
/* harmony import */ var _game_SharedState_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game/SharedState.js */ "./src/game/SharedState.js");
/* harmony import */ var _ui_Modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/Modal.js */ "./src/ui/Modal.js");
/* harmony import */ var _ui_CelticBorder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/CelticBorder.js */ "./src/ui/CelticBorder.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }



var Jornal = /*#__PURE__*/function (_Modal) {
  function Jornal(props) {
    var _this;
    _classCallCheck(this, Jornal);
    _this = _callSuper(this, Jornal, [{
      id: 'JournalModal',
      width: 76,
      height: 39,
      border: true,
      parent: props.parent
    }]);
    _this.add({
      x: 0,
      y: 0,
      block: _ui_CelticBorder_js__WEBPACK_IMPORTED_MODULE_2__.upperLeft,
      force: true
    });
    _this.add({
      x: 67,
      y: 0,
      block: _ui_CelticBorder_js__WEBPACK_IMPORTED_MODULE_2__.upperRight,
      force: true
    });
    _this.add({
      x: 0,
      y: 31,
      block: _ui_CelticBorder_js__WEBPACK_IMPORTED_MODULE_2__.lowerLeft,
      force: true
    });
    _this.add({
      x: 68,
      y: 31,
      block: _ui_CelticBorder_js__WEBPACK_IMPORTED_MODULE_2__.lowerRight,
      force: true
    });
    _this.update();
    return _this;
  }
  _inherits(Jornal, _Modal);
  return _createClass(Jornal, [{
    key: "keyPressed",
    value: function keyPressed(e) {
      if (e.key === 'a' || e.key === 'ArrowLeft') {
        // page left
      } else if (e.key === 'd' || e.key === 'ArrowRight') {
        // page right
      } else if (e.key === 'j' || e.key === 'Escape') {
        this.close();
        _game_SharedState_js__WEBPACK_IMPORTED_MODULE_0__["default"].set({
          key: 'request.screen.draw',
          value: true
        });
      } else {
        console.log('Journal keyPressed:', e.key);
      }
    }
  }, {
    key: "update",
    value: function update() {
      var entries = _game_SharedState_js__WEBPACK_IMPORTED_MODULE_0__["default"].get('hero.journal');
      var previousEntry = null;
      var y = 6;
      for (var i = 0; i < entries.length; i++) {
        var entry = entries[i];
        if (!previousEntry) {
          this.add({
            x: 6,
            y: y,
            string: "".concat(this._getFormattedDate(entry.date))
          });
          this.add({
            x: 6,
            y: y + 1,
            string: '⎻'.repeat(28)
          });
          y = y + 2;
        } else {
          // get dates from the previous and current entries
          // if they match, do not display the date.  Otherwise, display the date
          if (previousEntry.date !== entry.date) {
            this.add({
              x: 6,
              y: y + 1,
              string: "".concat(entry.date)
            });
            this.add({
              x: 6,
              y: y + 2,
              string: '⎻'.repeat(28)
            });
            y = y + 3;
          }
        }
        var block = this._wrapText("".concat(entry.text), 32);
        this.add({
          x: 6,
          y: y,
          string: '◊'
        });
        this.add({
          x: 7,
          y: y,
          block: block
        });
        y += block.length + 1;
        previousEntry = entry;
      }
    }

    // format the date as MMMM DD (e.g. November 25th)
  }, {
    key: "_getFormattedDate",
    value: function _getFormattedDate(time) {
      var day = time.getDate();
      var month = time.getMonth() + 1;
      var monthName = this._getMonthName(month);
      // add the ordinal suffix to the day
      var lastDigit = day % 10;
      var suffix = 'th';
      if (lastDigit === 1) suffix = 'st';
      if (lastDigit === 2) suffix = 'nd';
      if (lastDigit === 3) suffix = 'rd';
      return "".concat(monthName, " ").concat(day).concat(suffix);
    }
  }, {
    key: "_getMonthName",
    value: function _getMonthName(month) {
      switch (month) {
        case 1:
          return 'January';
        case 2:
          return 'February';
        case 3:
          return 'March';
        case 4:
          return 'April';
        case 5:
          return 'May';
        case 6:
          return 'June';
        case 7:
          return 'July';
        case 8:
          return 'August';
        case 9:
          return 'September';
        case 10:
          return 'October';
        case 11:
          return 'November';
        case 12:
          return 'December';
      }
    }
  }, {
    key: "_wrapText",
    value: function _wrapText(text, width) {
      var words = text.split(' ');
      var lines = [];
      var line = '';
      for (var i = 0; i < words.length; i++) {
        var word = words[i];
        if (line.length + word.length + 1 < width) {
          line += "".concat(word, " ");
        } else {
          lines.push(line);
          line = "".concat(word, " ");
        }
      }
      lines.push(line);
      return lines;
    }
  }]);
}(_ui_Modal_js__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./src/modals/LevelComplete.js":
/*!*************************************!*\
  !*** ./src/modals/LevelComplete.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LevelComplete)
/* harmony export */ });
/* harmony import */ var _ui_Modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/Modal.js */ "./src/ui/Modal.js");
/* harmony import */ var _animations_Confetti_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../animations/Confetti.js */ "./src/animations/Confetti.js");
/* harmony import */ var _animations_FireCracker_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animations/FireCracker.js */ "./src/animations/FireCracker.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }



var LevelComplete = /*#__PURE__*/function (_Modal) {
  function LevelComplete(props) {
    var _this;
    _classCallCheck(this, LevelComplete);
    _this = _callSuper(this, LevelComplete, [{
      id: 'LevelCompleteModal',
      width: 80,
      height: 43,
      border: true,
      parent: props.parent
    }]);
    _this.add({
      x: 'center',
      y: 4,
      string: ' L E V E L   C O M P L E T E'
    });
    _this.add({
      x: 1,
      y: 1,
      grid: new _animations_Confetti_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
        id: 'Confetti',
        width: 78,
        height: 40,
        frameSpeed: 64,
        parent: _this
      })
    });
    return _this;
  }
  _inherits(LevelComplete, _Modal);
  return _createClass(LevelComplete, [{
    key: "keyPressed",
    value: function keyPressed() {
      // todo
    }
  }, {
    key: "firecrackers",
    value: function firecrackers() {
      var _this2 = this;
      // randomly place firecrackers on the screen
      for (var i = 0; i < 40; i++) {
        var delay = Math.floor(Math.random() * 6000);
        setTimeout(function () {
          _this2.addFireCracker();
        }, delay);
      }
    }
  }, {
    key: "addFireCracker",
    value: function addFireCracker() {
      var x = Math.floor(Math.random() * 70) + 2;
      var y = Math.floor(Math.random() * 32) + 2;
      this.add({
        x: x,
        y: y,
        grid: new _animations_FireCracker_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
          colors: false
        })
      });
    }
  }, {
    key: "wrapText",
    value: function wrapText(text, width) {
      var words = text.split(' ');
      var lines = [];
      var line = '';
      for (var i = 0; i < words.length; i++) {
        var word = words[i];
        if (line.length + word.length + 1 < width) {
          line += "".concat(word, " ");
        } else {
          lines.push(line);
          line = "".concat(word, " ");
        }
      }
      lines.push(line);
      return lines;
    }
  }]);
}(_ui_Modal_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/modals/Menus.js":
/*!*****************************!*\
  !*** ./src/modals/Menus.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Menus)
/* harmony export */ });
/* harmony import */ var _game_SharedState_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game/SharedState.js */ "./src/game/SharedState.js");
/* harmony import */ var _ui_Modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/Modal.js */ "./src/ui/Modal.js");
/* harmony import */ var _ui_CelticBorder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/CelticBorder.js */ "./src/ui/CelticBorder.js");
/* harmony import */ var _ui_Tabs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/Tabs.js */ "./src/ui/Tabs.js");
/* harmony import */ var _Inventory_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Inventory.js */ "./src/modals/Inventory.js");
/* harmony import */ var _menus_TBD_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../menus/TBD.js */ "./src/menus/TBD.js");
/* harmony import */ var _menus_Map_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../menus/Map.js */ "./src/menus/Map.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }







var Menus = /*#__PURE__*/function (_Modal) {
  function Menus(props) {
    var _this;
    _classCallCheck(this, Menus);
    _this = _callSuper(this, Menus, [{
      id: 'MenusModal',
      width: 76,
      height: 39,
      border: true,
      parent: props.parent
    }]);
    _this.tabs = props.tabs || [];
    _this.selectedTab = props.selectedTab || 0;
    _this.add({
      x: 0,
      y: 0,
      block: _ui_CelticBorder_js__WEBPACK_IMPORTED_MODULE_2__.upperLeft,
      force: true
    });
    _this.add({
      x: 67,
      y: 0,
      block: _ui_CelticBorder_js__WEBPACK_IMPORTED_MODULE_2__.upperRight,
      force: true
    });
    _this.add({
      x: 0,
      y: 31,
      block: _ui_CelticBorder_js__WEBPACK_IMPORTED_MODULE_2__.lowerLeft,
      force: true
    });
    _this.add({
      x: 68,
      y: 31,
      block: _ui_CelticBorder_js__WEBPACK_IMPORTED_MODULE_2__.lowerRight,
      force: true
    });
    _this.tabsPanel = new _ui_Tabs_js__WEBPACK_IMPORTED_MODULE_3__["default"]({
      width: _this.width - 12,
      height: _this.height - 4,
      parent: _this,
      tabs: [{
        name: 'Inventory',
        grid: new _Inventory_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
          width: 64,
          height: 34,
          border: false,
          parent: _this
        })
      }, {
        name: 'Crafting',
        grid: new _menus_TBD_js__WEBPACK_IMPORTED_MODULE_5__["default"]('Crafting')
      }, {
        name: 'Magic',
        grid: new _menus_TBD_js__WEBPACK_IMPORTED_MODULE_5__["default"]('Magic')
      }, {
        name: 'Map',
        grid: new _menus_Map_js__WEBPACK_IMPORTED_MODULE_6__["default"]()
      }, {
        name: 'Profile',
        grid: new _menus_TBD_js__WEBPACK_IMPORTED_MODULE_5__["default"]('Profile')
      }]
    });
    _this.add({
      x: 6,
      y: 2,
      grid: _this.tabsPanel,
      force: true
    });
    return _this;
  }
  _inherits(Menus, _Modal);
  return _createClass(Menus, [{
    key: "keyPressed",
    value: function keyPressed(e) {
      if (e.key === 'Escape' || e.key === 'q') {
        this.close();
        _game_SharedState_js__WEBPACK_IMPORTED_MODULE_0__["default"].set({
          key: 'request.screen.draw',
          value: true
        });
      } else {
        this.tabsPanel.keyPressed(e);
      }
    }
  }]);
}(_ui_Modal_js__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./src/screens/GameSetup.js":
/*!**********************************!*\
  !*** ./src/screens/GameSetup.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameSetup)
/* harmony export */ });
/* harmony import */ var _ui_Screen_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/Screen.js */ "./src/ui/Screen.js");
/* harmony import */ var _game_SharedState_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game/SharedState.js */ "./src/game/SharedState.js");
/* harmony import */ var _ui_SelectionList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/SelectionList.js */ "./src/ui/SelectionList.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var GameSetup = /*#__PURE__*/function (_Screen) {
  function GameSetup() {
    var _this;
    _classCallCheck(this, GameSetup);
    _this = _callSuper(this, GameSetup, [{
      id: 'GameSetup',
      width: 60,
      height: 50,
      border: false
    }]);
    _defineProperty(_this, "firstNames", ['Zoey', 'Nikki', 'Abby', 'Lilly', 'Mary Rose', 'Ella', 'Eloise', 'Skye', 'Luna', 'Maeve', 'Aria', 'Gemma', 'Ivy', 'Hazel', 'Scarlett', 'Aurora', 'Violet', 'Olive', 'Willow', 'Layla', 'Sophia', 'Emma', 'Isabella', 'Ava', 'Mia', 'Emily', 'Amelia', 'Charlotte', 'Harper', 'Grace', 'Mara', 'Chloe', 'Zara', 'Molly', 'Jade', 'Lila', 'Ruby', 'Alice', 'Lola', 'Penny', 'Rosie', 'Eliza', 'Tessa', 'Nora', 'Isla', 'Lucy', 'Sadie', 'Giselle', 'Fiona', 'Stella', 'Bella', 'Daisy', 'Eve']);
    _defineProperty(_this, "lastNames", ['Fireheart', 'Swordspear', 'Thunderforge', 'Stormbringer', 'Shadowbane', 'Windstrider', 'Moonshadow', 'Starfall', 'Sunblade', 'Nightbloom', 'Frostveil', 'Flamefury', 'Ravenwing', 'Dragonheart', 'Wolfswift', 'Ironhand', 'Stonefist', 'Lightbringer', 'Darkwater', 'Silvervein', 'Goldleaf', 'Skywalker', 'Earthbound', 'Seastorm', 'Rivermist', 'Forestglade', 'Mountainash', 'Cloudseeker', 'Oceanwhisper', 'Lakefrost', 'Dawnfire', 'Duskbane', 'Lightshadow', 'Darkshine', 'Crystalgaze', 'Gemstone', 'Steelclaw', 'Bronzebeard', 'Coppervein', 'Silkwind', 'Velvetnight', 'Graniteheart', 'Emeraldsky', 'Rubyeye', 'Sapphiremind', 'Opalmoon', 'Topazsun', 'Amethyststar', 'Jadeearth', 'Pearlwater', 'Obsidianice', 'Quartzsand', 'Diamondspace', 'Onyxdream', 'Turquoisepain', 'Coraljoy', 'Ivorysorrow', 'Ambersmile', 'Garnetfrown', 'Jasperscream', 'Lapislazulilaugh', 'Malachitesigh', 'Moonstoneyawn', 'Sunstonestare', 'Bloodstoneblink', 'Fireopalwhisper', 'Wateragateshout', 'Airmarblewhistle', 'Earthquartzhum', 'Etherpearlgroan', 'Flamezirconmurmur', 'Frosttopazwhimper', 'Thunderamethystry', 'Stormsapphireplead', 'Shadowjaderage']);
    var names = [];
    for (var i = 0; i < 8; i++) names.push(_this.generateName());
    _this.add({
      x: 'center',
      y: 4,
      grid: new _ui_SelectionList_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
        id: 'SelectName',
        width: 60,
        height: 19,
        border: true,
        items: names
      })
    });
    _this.add({
      x: 'center',
      y: 2,
      string: 'Select your protagonist to begin her journey:'
    });
    _this.add({
      x: 'center',
      y: 24,
      string: 'Press [Space Bar] to find more options'
    });
    return _this;
  }
  _inherits(GameSetup, _Screen);
  return _createClass(GameSetup, [{
    key: "keyPressed",
    value: function keyPressed(e) {
      if (e.key === 'w' || e.key === 'ArrowUp') {
        this.getGrid('SelectName').up();
      } else if (e.key === 's' || e.key === 'ArrowDown') {
        this.getGrid('SelectName').down();
      } else if (e.key === ' ') {
        var selectName = this.getGrid('SelectName');
        var names = [];
        for (var i = 0; i < 8; i++) names.push(this.generateName());
        selectName.updateItems(names);
      } else if (e.key === 'Enter') {
        var selection = this.getGrid('SelectName').selectItem();
        _game_SharedState_js__WEBPACK_IMPORTED_MODULE_1__["default"].set({
          key: 'hero.first.name',
          value: selection.first
        });
        _game_SharedState_js__WEBPACK_IMPORTED_MODULE_1__["default"].set({
          key: 'hero.last.name',
          value: selection.last
        });
        _game_SharedState_js__WEBPACK_IMPORTED_MODULE_1__["default"].set({
          key: 'game.state',
          value: 'wake-up'
        });
      }
    }
  }, {
    key: "generateName",
    value: function generateName() {
      var firstName = this.firstNames[Math.floor(Math.random() * this.firstNames.length)];
      var lastName = this.lastNames[Math.floor(Math.random() * this.lastNames.length)];
      var fullName = "".concat(firstName, " ").concat(lastName);
      return {
        id: fullName,
        value: fullName,
        first: firstName,
        last: lastName
      };
    }
  }]);
}(_ui_Screen_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/screens/HUD.js":
/*!****************************!*\
  !*** ./src/screens/HUD.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HUD)
/* harmony export */ });
/* harmony import */ var _hud_FPS_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hud/FPS.js */ "./src/hud/FPS.js");
/* harmony import */ var _game_Time_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game/Time.js */ "./src/game/Time.js");
/* harmony import */ var _game_Hero_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../game/Hero.js */ "./src/game/Hero.js");
/* harmony import */ var _modals_Menus_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modals/Menus.js */ "./src/modals/Menus.js");
/* harmony import */ var _game_SharedState_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../game/SharedState.js */ "./src/game/SharedState.js");
/* harmony import */ var _ui_Screen_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/Screen.js */ "./src/ui/Screen.js");
/* harmony import */ var _hud_MapView_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hud/MapView.js */ "./src/hud/MapView.js");
/* harmony import */ var _hud_Messages_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hud/Messages.js */ "./src/hud/Messages.js");
/* harmony import */ var _hud_GameStats_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hud/GameStats.js */ "./src/hud/GameStats.js");
/* harmony import */ var _hud_HeroVitals_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../hud/HeroVitals.js */ "./src/hud/HeroVitals.js");
/* harmony import */ var _modals_LevelComplete_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../modals/LevelComplete.js */ "./src/modals/LevelComplete.js");
/* harmony import */ var _game_LevelGenerator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../game/LevelGenerator.js */ "./src/game/LevelGenerator.js");
/* harmony import */ var _game_MovementEngine_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../game/MovementEngine.js */ "./src/game/MovementEngine.js");
/* harmony import */ var _hud_CompanionVitals_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../hud/CompanionVitals.js */ "./src/hud/CompanionVitals.js");
/* harmony import */ var _hud_FirstPersonView_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../hud/FirstPersonView.js */ "./src/hud/FirstPersonView.js");
/* harmony import */ var _modals_Inventory_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../modals/Inventory.js */ "./src/modals/Inventory.js");
/* harmony import */ var _animations_FadeIn_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../animations/FadeIn.js */ "./src/animations/FadeIn.js");
/* harmony import */ var _modals_Journal_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../modals/Journal.js */ "./src/modals/Journal.js");
/* harmony import */ var _modals_Help_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../modals/Help.js */ "./src/modals/Help.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }



















var HUD = /*#__PURE__*/function (_Screen) {
  function HUD() {
    var _this;
    _classCallCheck(this, HUD);
    _this = _callSuper(this, HUD, [{
      id: 'HUD',
      width: 80,
      height: 48,
      border: false
    }]);

    // create the main game objects
    _this.time = new _game_Time_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    _this.catacombs = new _game_LevelGenerator_js__WEBPACK_IMPORTED_MODULE_11__["default"]();
    _game_SharedState_js__WEBPACK_IMPORTED_MODULE_4__["default"].set({
      key: 'catacombs',
      value: _this.catacombs
    });
    _this.hero = new _game_Hero_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
    _game_SharedState_js__WEBPACK_IMPORTED_MODULE_4__["default"].set({
      key: 'hero',
      value: _this.hero
    });
    _this.movement = new _game_MovementEngine_js__WEBPACK_IMPORTED_MODULE_12__["default"](_this.hero);
    _game_SharedState_js__WEBPACK_IMPORTED_MODULE_4__["default"].set({
      key: 'movement',
      value: _this.movement
    });

    // add the main game ui components
    _this.add({
      grid: new _hud_GameStats_js__WEBPACK_IMPORTED_MODULE_8__["default"](),
      x: 0,
      y: 0
    });
    _this.add({
      grid: new _hud_HeroVitals_js__WEBPACK_IMPORTED_MODULE_9__["default"](),
      x: 0,
      y: 7
    });
    _this.add({
      grid: new _hud_CompanionVitals_js__WEBPACK_IMPORTED_MODULE_13__["default"](),
      x: 0,
      y: 29
    });
    _this.add({
      grid: new _hud_FirstPersonView_js__WEBPACK_IMPORTED_MODULE_14__["default"](),
      x: 26,
      y: 7
    });
    _this.add({
      grid: new _hud_MapView_js__WEBPACK_IMPORTED_MODULE_6__["default"](),
      x: 54,
      y: 7
    });
    // this.add({ grid: new EnemyVitals(), x: 54, y: 28 })
    _this.add({
      grid: new _hud_Messages_js__WEBPACK_IMPORTED_MODULE_7__["default"](),
      x: 0,
      y: 36
    });
    _this.add({
      grid: new _hud_FPS_js__WEBPACK_IMPORTED_MODULE_0__["default"](),
      x: 'right',
      y: 43
    });
    _this.add({
      x: 0,
      y: 0,
      grid: new _animations_FadeIn_js__WEBPACK_IMPORTED_MODULE_16__["default"]({
        id: 'FadeIn',
        width: 80,
        height: 48,
        frameSpeed: 32,
        autoPlay: true
      })
    });
    _this.time.start();
    return _this;
  }
  _inherits(HUD, _Screen);
  return _createClass(HUD, [{
    key: "showHelp",
    value: function showHelp() {}
  }, {
    key: "keyPressed",
    value: function keyPressed(e) {
      if (this.getGrid('InventoryModal')) {
        this.getGrid('InventoryModal').keyPressed(e);
        return;
      }
      if (this.getGrid('JournalModal')) {
        this.getGrid('JournalModal').keyPressed(e);
        return;
      }
      if (this.getGrid('HelpMenu')) {
        this.getGrid('HelpMenu').keyPressed(e);
        return;
      }
      if (this.getGrid('MenusModal')) {
        this.getGrid('MenusModal').keyPressed(e);
        return;
      }
      if (e.key === 'w' || e.key === 'ArrowUp') {
        this.movement.moveForward();
        _game_SharedState_js__WEBPACK_IMPORTED_MODULE_4__["default"].set({
          key: 'request.screen.draw',
          value: true
        });
      } else if (e.key === 's' || e.key === 'ArrowDown') {
        // movement.moveBackward()
        // canvas.innerHTML = hud.draw()
      } else if (e.key === 'a' || e.key === 'ArrowLeft') {
        this.movement.turnLeft();
        _game_SharedState_js__WEBPACK_IMPORTED_MODULE_4__["default"].set({
          key: 'request.screen.draw',
          value: true
        });
      } else if (e.key === 'd' || e.key === 'ArrowRight') {
        this.movement.turnRight();
        _game_SharedState_js__WEBPACK_IMPORTED_MODULE_4__["default"].set({
          key: 'request.screen.draw',
          value: true
        });
      } else if (e.key === 'Enter') {
        var levelComplete = this.movement.moveDown();
        if (levelComplete) {
          this.add({
            grid: new _modals_LevelComplete_js__WEBPACK_IMPORTED_MODULE_10__["default"]({
              parent: this
            }),
            x: 0,
            y: 0
          });
          _game_SharedState_js__WEBPACK_IMPORTED_MODULE_4__["default"].set({
            key: 'request.screen.draw',
            value: true
          });
        }
      } else if (e.key === 'Escape') {
        this.add({
          grid: new _modals_Help_js__WEBPACK_IMPORTED_MODULE_18__["default"]({
            parent: this
          }),
          x: 'center',
          y: 5
        });
        _game_SharedState_js__WEBPACK_IMPORTED_MODULE_4__["default"].set({
          key: 'request.screen.draw',
          value: true
        });
      } else if (e.key === 'f') {
        this.hero.attack();
        _game_SharedState_js__WEBPACK_IMPORTED_MODULE_4__["default"].set({
          key: 'request.screen.draw',
          value: true
        });
      } else if (e.key === 'e') {
        this.hero.pickUp();
        _game_SharedState_js__WEBPACK_IMPORTED_MODULE_4__["default"].set({
          key: 'request.screen.draw',
          value: true
        });
      } else if (e.key === 'j') {
        this.add({
          grid: new _modals_Journal_js__WEBPACK_IMPORTED_MODULE_17__["default"]({
            parent: this
          }),
          x: 'center',
          y: 2
        });
        _game_SharedState_js__WEBPACK_IMPORTED_MODULE_4__["default"].set({
          key: 'request.screen.draw',
          value: true
        });
      } else if (e.key === 'q') {
        this.add({
          grid: new _modals_Menus_js__WEBPACK_IMPORTED_MODULE_3__["default"]({
            parent: this
          }),
          x: 'center',
          y: 2
        });
        _game_SharedState_js__WEBPACK_IMPORTED_MODULE_4__["default"].set({
          key: 'request.screen.draw',
          value: true
        });
      } else if (e.key === 'i') {
        this.add({
          id: 'InventoryModal',
          grid: new _modals_Inventory_js__WEBPACK_IMPORTED_MODULE_15__["default"]({
            parent: this
          }),
          x: 'center',
          y: 2
        });
        _game_SharedState_js__WEBPACK_IMPORTED_MODULE_4__["default"].set({
          key: 'request.screen.draw',
          value: true
        });
      } else {
        console.log('key', e.key);
      }
    }
  }]);
}(_ui_Screen_js__WEBPACK_IMPORTED_MODULE_5__["default"]);


/***/ }),

/***/ "./src/screens/Intertitle.js":
/*!***********************************!*\
  !*** ./src/screens/Intertitle.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Intertitle)
/* harmony export */ });
/* harmony import */ var _ui_Screen_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/Screen.js */ "./src/ui/Screen.js");
/* harmony import */ var _game_SharedState_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game/SharedState.js */ "./src/game/SharedState.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


var Intertitle = /*#__PURE__*/function (_Screen) {
  function Intertitle(props) {
    var _this;
    _classCallCheck(this, Intertitle);
    var font = props.font,
      lines = props.lines,
      lineHeight = props.lineHeight;
    _this = _callSuper(this, Intertitle, [{
      id: 'Intertitle',
      width: 60,
      height: 50,
      border: false
    }]);
    _this.intertitleSequence(font, lines, lineHeight);
    return _this;
  }
  _inherits(Intertitle, _Screen);
  return _createClass(Intertitle, [{
    key: "keyPressed",
    value: function keyPressed() {
      // Ignore all key presses
    }
  }, {
    key: "intertitleSequence",
    value: function intertitleSequence(font, lines) {
      var _this2 = this;
      var lineHeight = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 8;
      setTimeout(function () {
        new Audio('sounds/gong.mp3').play();
      }, 750);
      setTimeout(function () {
        var vSpace = _this2.height / 2 - lines.length * lineHeight / 2;
        for (var i = 0; i < lines.length; i++) {
          _this2.add({
            x: 'center',
            y: vSpace,
            fig: {
              text: lines[i],
              font: font
            }
          });
          vSpace += lineHeight;
        }
        _game_SharedState_js__WEBPACK_IMPORTED_MODULE_1__["default"].set({
          key: 'request.screen.draw',
          value: true
        });
      }, 1000);
      setTimeout(function () {
        _game_SharedState_js__WEBPACK_IMPORTED_MODULE_1__["default"].set({
          key: 'game.state',
          value: 'in-game'
        });
      }, 6000);
    }
  }]);
}(_ui_Screen_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/screens/TitleSequence.js":
/*!**************************************!*\
  !*** ./src/screens/TitleSequence.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TitleSequence)
/* harmony export */ });
/* harmony import */ var _ui_Grid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/Grid.js */ "./src/ui/Grid.js");
/* harmony import */ var _ui_Screen_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/Screen.js */ "./src/ui/Screen.js");
/* harmony import */ var _game_SharedState_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../game/SharedState.js */ "./src/game/SharedState.js");
/* harmony import */ var _ui_AudioPlayer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/AudioPlayer.js */ "./src/ui/AudioPlayer.js");
/* harmony import */ var _animations_CatacombTitleAnimation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../animations/CatacombTitleAnimation.js */ "./src/animations/CatacombTitleAnimation.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }





var TitleSequence = /*#__PURE__*/function (_Screen) {
  function TitleSequence() {
    var _this;
    _classCallCheck(this, TitleSequence);
    _this = _callSuper(this, TitleSequence, [{
      id: 'TitleSequence',
      width: 80,
      height: 50,
      border: false
    }]);
    _defineProperty(_this, "startTitleSequence", "\n         \u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256E         \n   Press \u2502 Enter \u23CE \u2502 to Begin\n         \u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256F         \n");
    _defineProperty(_this, "startGame", "\n         \u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256E        \n   Press \u2502 Enter \u23CE \u2502 to Play\n         \u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256F        \n");
    _this.add({
      x: 'center',
      y: 18,
      block: _this.startTitleSequence.split('\n')
    });
    _this.audio = new _ui_AudioPlayer_js__WEBPACK_IMPORTED_MODULE_3__["default"]('sounds/fenras-theme-trailer-music-intro-music-by-oliver-weckauf.mp3');
    _this.ranTitleSequency = false;
    return _this;
  }
  _inherits(TitleSequence, _Screen);
  return _createClass(TitleSequence, [{
    key: "ready",
    value: function ready() {}
  }, {
    key: "keyPressed",
    value: function keyPressed(e) {
      if (e.key === 'Enter') {
        if (!this.ranTitleSequency) {
          this.titleSequence();
          this.ranTitleSequency = true;
        } else {
          this.audio.fadeOut(2000);
          _game_SharedState_js__WEBPACK_IMPORTED_MODULE_2__["default"].set({
            key: 'game.state',
            value: 'setup-game'
          });
        }
      }
    }
  }, {
    key: "titleSequence",
    value: function titleSequence() {
      var _this2 = this;
      this.clear();
      this.audio.play();
      this.showAsciiArcade();
      setTimeout(function () {
        _this2.removeGrid('AsciiArcade');
        _this2.showInAssociationWith();
      }, 5000);
      setTimeout(function () {
        _this2.removeGrid('InAssociationWith');
        _this2.showGrubyStudios();
      }, 9000);
      setTimeout(function () {
        _this2.removeGrid('GrubStudios');
        _this2.add({
          x: 1,
          y: 12,
          grid: new _animations_CatacombTitleAnimation_js__WEBPACK_IMPORTED_MODULE_4__["default"]()
        });
      }, 17000);
      setTimeout(function () {
        _this2.add({
          x: 'center',
          y: 32,
          string: 'T H E   T O M B   O F   T A H A R A'
        });
        _game_SharedState_js__WEBPACK_IMPORTED_MODULE_2__["default"].set({
          key: 'request.screen.draw',
          value: true
        });
      }, 19000);
      setTimeout(function () {
        _this2.add({
          x: 'center',
          y: 36,
          block: _this2.startGame.split('\n')
        });
        _game_SharedState_js__WEBPACK_IMPORTED_MODULE_2__["default"].set({
          key: 'request.screen.draw',
          value: true
        });
      }, 22000);
    }
  }, {
    key: "showGrubyStudios",
    value: function showGrubyStudios() {
      var grid = new _ui_Grid_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
        id: 'GrubStudios',
        width: 76,
        height: 28,
        border: false
      });
      grid.add({
        x: 'center',
        y: 1,
        fig: {
          text: 'Gruby',
          font: 'Crawford2'
        }
      });
      grid.add({
        x: 'center',
        y: 9,
        fig: {
          text: 'Studios',
          font: 'Crawford2'
        }
      });
      this.add({
        x: 2,
        y: 6,
        grid: grid
      });
      _game_SharedState_js__WEBPACK_IMPORTED_MODULE_2__["default"].set({
        key: 'request.screen.draw',
        value: true
      });
    }
  }, {
    key: "showInAssociationWith",
    value: function showInAssociationWith() {
      var grid = new _ui_Grid_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
        id: 'InAssociationWith',
        width: 76,
        height: 28,
        border: false
      });
      grid.add({
        x: 'center',
        y: 1,
        fig: {
          text: 'In',
          font: 'Standard'
        }
      });
      grid.add({
        x: 'center',
        y: 9,
        fig: {
          text: 'Association',
          font: 'Standard'
        }
      });
      grid.add({
        x: 'center',
        y: 17,
        fig: {
          text: 'With',
          font: 'Standard'
        }
      });
      this.add({
        x: 2,
        y: 6,
        grid: grid
      });
      _game_SharedState_js__WEBPACK_IMPORTED_MODULE_2__["default"].set({
        key: 'request.screen.draw',
        value: true
      });
    }
  }, {
    key: "showAsciiArcade",
    value: function showAsciiArcade() {
      var grid = new _ui_Grid_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
        id: 'AsciiArcade',
        width: 76,
        height: 28,
        border: false
      });
      grid.add({
        x: 'center',
        y: 1,
        fig: {
          text: 'Ascii',
          font: 'Crawford2'
        }
      });
      grid.add({
        x: 'center',
        y: 9,
        fig: {
          text: 'Arcade',
          font: 'Crawford2'
        }
      });
      grid.add({
        x: 'center',
        y: 19,
        fig: {
          text: 'presents...',
          font: 'Slant'
        }
      });
      this.add({
        x: 2,
        y: 10,
        grid: grid
      });
      _game_SharedState_js__WEBPACK_IMPORTED_MODULE_2__["default"].set({
        key: 'request.screen.draw',
        value: true
      });
    }
  }]);
}(_ui_Screen_js__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./src/ui/AnimationPlayer.js":
/*!***********************************!*\
  !*** ./src/ui/AnimationPlayer.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AnimationPlayer)
/* harmony export */ });
/* harmony import */ var _Grid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Grid.js */ "./src/ui/Grid.js");
/* harmony import */ var _game_SharedState_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game/SharedState.js */ "./src/game/SharedState.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }



// Class to hold a set of images that make up a moving sprite.  This component can't be changed after
// being created.  If you need to get rid of it, just remove it from the canvas.
var AnimationPlayer = /*#__PURE__*/function (_Grid) {
  // When creating an animation, it is assumed to be started.
  function AnimationPlayer(props) {
    var _this;
    _classCallCheck(this, AnimationPlayer);
    // generate an id if it doesn't exist
    if (!props.id) props.id = "Animation_".concat(Math.floor(Math.random() * 1000000));
    _this = _callSuper(this, AnimationPlayer, [props]);
    var frames = props.frames,
      loop = props.loop,
      frameSpeed = props.frameSpeed,
      backfill = props.backfill,
      color = props.color,
      sound = props.sound,
      autoPlay = props.autoPlay,
      parent = props.parent;
    _this.color = color || undefined;
    _this.sound = sound || undefined;
    _this.frames = frames || []; // frames for this animation.
    _this.loop = loop || 0; // number of times to loop the animation.
    _this.frameSpeed = frameSpeed || 100; // play speed, in milliseconds.
    _this.backfill = backfill || false;
    _this.parent = parent || undefined; // if this animation has a parent we will delete it when it finishes it's animation.
    if (autoPlay) _this.play();
    return _this;
  }
  _inherits(AnimationPlayer, _Grid);
  return _createClass(AnimationPlayer, [{
    key: "play",
    value: function () {
      var _play = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _this2 = this;
        var i, frame;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (this.sound) new Audio(this.sound).play();
            case 1:
              if (!(this.loop > -1)) {
                _context.next = 16;
                break;
              }
              i = 0;
            case 3:
              if (!(i < this.frames.length)) {
                _context.next = 13;
                break;
              }
              frame = this.frames[i];
              this.add({
                x: 'center',
                y: 0,
                block: frame,
                backfill: this.backfill,
                color: this.color
              });
              _game_SharedState_js__WEBPACK_IMPORTED_MODULE_1__["default"].set({
                key: 'request.screen.draw',
                value: true
              });
              // Pause the functioning thread
              if (!(this.frameSpeed > 0)) {
                _context.next = 10;
                break;
              }
              _context.next = 10;
              return new Promise(function (resolve) {
                return setTimeout(resolve, _this2.frameSpeed);
              });
            case 10:
              i++;
              _context.next = 3;
              break;
            case 13:
              this.loop--;
              _context.next = 1;
              break;
            case 16:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function play() {
        return _play.apply(this, arguments);
      }
      return play;
    }()
  }, {
    key: "stop",
    value: function () {
      var _stop = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              this.loop = -1;
              if (this.parent) this.parent.removeGrid(this.id);
            case 2:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function stop() {
        return _stop.apply(this, arguments);
      }
      return stop;
    }()
  }]);
}(_Grid_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/ui/AudioPlayer.js":
/*!*******************************!*\
  !*** ./src/ui/AudioPlayer.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AudioPlayer)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var AudioPlayer = /*#__PURE__*/function () {
  function AudioPlayer(audio) {
    _classCallCheck(this, AudioPlayer);
    this.audio = new Audio(audio);
  }
  return _createClass(AudioPlayer, [{
    key: "play",
    value: function play(props) {
      if (!props) props = {};
      var _props = props,
        loop = _props.loop,
        volume = _props.volume;
      this.audio.loop = loop || false;
      this.audio.volume = volume || 1.0;
      this.audio.play();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.audio.pause();
    }
  }, {
    key: "fadeOut",
    value: function fadeOut(duration) {
      var audioElement = this.audio;
      var originalVolume = audioElement.volume; // Store the original volume
      var fadeOutInterval = 50; // Milliseconds for interval
      var volumeStep = originalVolume / (duration / fadeOutInterval); // Calculate the volume decrement step

      var fadeAudio = setInterval(function () {
        // Reduce the volume
        if (audioElement.volume > volumeStep) {
          audioElement.volume -= volumeStep;
        } else {
          // When volume is close to zero, stop the interval and set volume to 0
          audioElement.volume = 0;
          clearInterval(fadeAudio);
          // Pause and reset audio if needed
          audioElement.pause();
          audioElement.currentTime = 0;
        }
      }, fadeOutInterval);
    }
  }]);
}();


/***/ }),

/***/ "./src/ui/Cell.js":
/*!************************!*\
  !*** ./src/ui/Cell.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cell)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Cell = /*#__PURE__*/function () {
  function Cell(props) {
    _classCallCheck(this, Cell);
    if (!props || _typeof(props) !== 'object') {
      throw new Error('Invalid props provided');
    }
    var value = props.value,
      color = props.color,
      highlight = props.highlight;
    if (typeof value !== 'string') {
      throw new Error('Invalid value provided');
    }
    if (color && typeof color !== 'string') {
      throw new Error('Invalid color provided');
    }
    if (highlight && typeof highlight !== 'boolean') {
      throw new Error('Invalid highlight provided');
    }
    this.value = value;
    this.color = color || '#2cd03a';
    this.highlight = highlight || false;
  }
  return _createClass(Cell, [{
    key: "draw",
    value: function draw() {
      if (typeof this.value !== 'string') {
        throw new Error('Invalid cell value');
      }
      var output = this.value;
      if (this.value === '@') return null;
      if (this.highlight || this.color) output = this._style(output);
      return output;
    }
  }, {
    key: "_style",
    value: function _style(text) {
      if (!this.color) this.color = '#2cd03a';
      var backgroundColor = this.highlight ? this.color : '#000000';
      var color = this.highlight ? '#000000' : this.color;
      return "<span style=\"color: ".concat(color, "; background-color: ").concat(backgroundColor, ";\">").concat(text, "</span>");
    }
  }]);
}();


/***/ }),

/***/ "./src/ui/CelticBorder.js":
/*!********************************!*\
  !*** ./src/ui/CelticBorder.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lowerLeft: () => (/* binding */ lowerLeft),
/* harmony export */   lowerRight: () => (/* binding */ lowerRight),
/* harmony export */   upperLeft: () => (/* binding */ upperLeft),
/* harmony export */   upperRight: () => (/* binding */ upperRight)
/* harmony export */ });
var lowerRight = ['       ⏐', '       ⏐', '      ⏐⏐', '      ⏐⏐', '     ╭⏐╯', '    ╭⏐⎯╮', '  ⎯⎯⎯⎯╯⏐', '⎯⎯⎯⎯╯╰⎯╯'];
var upperLeft = ['╭⎯╮╭⎯⎯⎯⎯⎯', '⏐╭⎯⎯⎯⎯', '╰⎯⏐╯', '╭⏐╯', '⏐⏐', '⏐⏐', '⏐', '⏐'];
var upperRight = ['⎯⎯⎯⎯⎯╮╭⎯╮', '  ⎯⎯⎯⎯⎯╮⏐', '     ╰⏐⎯╯', '      ╰⏐╮', '       ⏐⏐', '       ⏐⏐', '        ⏐', '        ⏐'];
var lowerLeft = ['⏐', '⏐', '⏐⏐', '⏐⏐', '╰⏐╮', '╭⎯⏐╮', '⏐╰⎯⎯⎯⎯⎯', '╰⎯╯╰⎯⎯⎯⎯⎯'];

/***/ }),

/***/ "./src/ui/Grid.js":
/*!************************!*\
  !*** ./src/ui/Grid.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Grid)
/* harmony export */ });
/* harmony import */ var _Cell_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cell.js */ "./src/ui/Cell.js");
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

// import standard from "figlet/importable-fonts/Standard.js";
// figlet.parseFont("Standard", standard);

// eslint-disable-next-line no-undef
figlet.defaults({
  fontPath: 'figlet/fonts'
});
var fonts = ['Bloody', 'Crawford2', 'Elite', 'Slant', 'Soft', 'Standard', 'Star Wars'];
// eslint-disable-next-line no-undef
figlet.preloadFonts(fonts, function (err) {
  if (err) {
    console.log('Figlet load fonts error:', err);
  } else {
    console.log("Figlet fonts loaded: ".concat(fonts.length));
  }
});

/*
  Basic UI Grid that renders our ascii experience.
  You can add other Grids, Blocks, Strings, or Cells to the Grid and
  it will render when draw() is called.
*/
var Grid = /*#__PURE__*/function () {
  function Grid(props) {
    _classCallCheck(this, Grid);
    if (!props || _typeof(props) !== 'object') {
      throw new Error('Invalid props provided, not of type object:', props);
    }
    var id = props.id,
      width = props.width,
      height = props.height,
      fill = props.fill,
      border = props.border,
      zIndex = props.zIndex;
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be positive numbers');
    }
    // random unique id
    this.id = id || Math.random().toString(36).substring(7);
    this.width = width || 3;
    this.height = height || 3;
    this.fill = fill || ' ';
    this.border = border || false;
    this.zIndex = zIndex || 0;
    this.edge = 0;
    this.grid = []; // 2D array of Cells
    this.children = [];
    this._init();
    if (this.border) this._border();
  }

  /* Adds a grid, block, string, or cell to the grid */
  return _createClass(Grid, [{
    key: "add",
    value: function add(props) {
      if (!props || _typeof(props) !== 'object') {
        throw new Error('Invalid props provided');
      }
      if (props.grid) {
        this._addGrid(props);
      } else if (props.fig) {
        this._addFig(props);
      } else if (props.block) {
        this._addBlock(props);
      } else if (props.string) {
        this._addString(props);
      } else if (props.cell) {
        this._addCell(props);
      } else {
        throw new Error('add requires a grid, block, string, or cell');
      }
    }
  }, {
    key: "getCell",
    value: function getCell(props) {
      var x = props.x,
        y = props.y;
      if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('Invalid x or y provided');
      }
      if (x < 0 || x > this.width - 1 || y < 0 || y > this.height - 1) return null;
      return this.grid[y][x];
    }

    /*
      Removes a grid from the children
    */
  }, {
    key: "removeGrid",
    value: function removeGrid(id) {
      if (typeof id !== 'string') {
        throw new Error('Invalid id provided');
      }
      var index = this.children.findIndex(function (g) {
        return g.grid.id === id;
      });
      if (index !== -1) this.children.splice(index, 1);
    }

    /*
      Gets a grid from the children
    */
  }, {
    key: "getGrid",
    value: function getGrid(id) {
      if (typeof id !== 'string') {
        throw new Error('Invalid id provided');
      }
      var index = this.children.findIndex(function (g) {
        return g.grid.id === id;
      });
      if (index === -1) return null;
      return this.children[index].grid;
    }

    /*
      Clears the grid, ignore the border
    */
  }, {
    key: "clear",
    value: function clear() {
      this.children = [];
      for (var y = 0; y < this.height; y++) {
        for (var x = 0; x < this.width; x++) {
          this._addCell({
            x: x,
            y: y,
            cell: new _Cell_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
              value: this.fill
            })
          });
        }
      }
    }

    /*
      Create Output HTML that can be rendered within a <p/> tag
    */
  }, {
    key: "draw",
    value: function draw() {
      if (!Array.isArray(this.grid) || this.grid.length !== this.height) {
        throw new Error('Grid is not properly initialized');
      }
      var flat = this._flatten({
        grid: this
      });
      var output = '';
      for (var y = 0; y < this.height; y++) {
        for (var x = 0; x < this.width; x++) {
          var cell = flat[y][x].draw();
          if (cell) output += cell;
        }
        output += '\n';
      }
      return output;
    }
  }, {
    key: "_init",
    value: function _init() {
      var defaultCell = new _Cell_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
        value: this.fill
      });
      for (var y = 0; y < this.height; y++) {
        var row = [];
        for (var x = 0; x < this.width; x++) row.push(defaultCell);
        this.grid.push(row);
      }
    }
  }, {
    key: "_border",
    value: function _border() {
      this._addCell({
        x: 0,
        y: 0,
        cell: new _Cell_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
          value: '╭'
        })
      });
      this._addCell({
        x: this.width - 1,
        y: 0,
        cell: new _Cell_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
          value: '╮'
        })
      });
      this._addCell({
        x: 0,
        y: this.height - 1,
        cell: new _Cell_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
          value: '╰'
        })
      });
      this._addCell({
        x: this.width - 1,
        y: this.height - 1,
        cell: new _Cell_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
          value: '╯'
        })
      });
      for (var x = 1; x < this.width - 1; x++) {
        this._addCell({
          x: x,
          y: 0,
          cell: new _Cell_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
            value: '─'
          })
        });
        this._addCell({
          x: x,
          y: this.height - 1,
          cell: new _Cell_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
            value: '─'
          })
        });
      }
      for (var y = 1; y < this.height - 1; y++) {
        this._addCell({
          x: 0,
          y: y,
          cell: new _Cell_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
            value: '│'
          })
        });
        this._addCell({
          x: this.width - 1,
          y: y,
          cell: new _Cell_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
            value: '│'
          })
        });
      }
      this.edge = 1;
    }

    /*
      Adds a Cell to the Grid.
      If the x and y are out of bounds, it will be ignored.
    */
  }, {
    key: "_addCell",
    value: function _addCell(props) {
      var x = props.x,
        y = props.y,
        cell = props.cell,
        force = props.force;
      if (typeof x !== 'number' || typeof y !== 'number' || !(cell instanceof _Cell_js__WEBPACK_IMPORTED_MODULE_0__["default"])) {
        throw new Error('Invalid x, y, or cell provided');
      }
      if (force) {
        // force the cell to be added even if its in the border region
        if (x < 0 || x > this.width - 1 || y < 0 || y > this.height - 1) return;
      } else {
        if (x < this.edge || x > this.width - 1 - this.edge || y < this.edge || y > this.height - 1 - this.edge) return;
      }
      this.grid[y][x] = cell;
    }

    /*
    Adds a simple string to the Grid. If the x and y are out of bounds, it will be ignored.
    The string will be converted to GridCells using the default color and background.
    */
  }, {
    key: "_addString",
    value: function _addString(props) {
      var x = props.x,
        y = props.y,
        string = props.string,
        highlight = props.highlight,
        color = props.color,
        force = props.force,
        backfill = props.backfill;
      if (backfill) {
        for (var i = 0; i < this.width; i++) {
          this._addCell({
            x: i,
            y: y,
            cell: new _Cell_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
              value: this.fill
            })
          });
        }
      }
      if (x === 'left') {
        x = 2;
      } else if (x === 'center') {
        x = Math.floor((this.width - string.length) / 2);
      } else if (x === 'right') {
        x = this.width - (string.length + 2);
      }
      if (y === 'top') {
        y = 2;
      } else if (y === 'center') {
        y = Math.floor((this.height - 1) / 2);
      } else if (y === 'bottom') {
        y = this.height - 2;
      }
      var tokens = _toConsumableArray(string);
      for (var _i = 0; _i < tokens.length; _i++) {
        var shouldHighlight = false;
        if (typeof highlight === 'boolean') {
          shouldHighlight = highlight; // Highlight entire string if highlight is true
        } else if (highlight && _typeof(highlight) === 'object') {
          // Highlight specific area if highlight is an object with x and length
          shouldHighlight = _i >= highlight.x && _i < highlight.x + highlight.length;
        }
        this._addCell({
          x: x + _i,
          y: y,
          force: force,
          cell: new _Cell_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
            value: tokens[_i],
            color: color,
            highlight: shouldHighlight
          })
        });
      }
    }

    /*
    Adds a 2D array of chars to the Grid. If the x and y are out of bounds, it will be ignored.
    The string will be converted to GridCells using the default color and background.
    */
  }, {
    key: "_addBlock",
    value: function _addBlock(props) {
      var x = props.x,
        y = props.y,
        block = props.block,
        color = props.color,
        highlight = props.highlight,
        force = props.force,
        backfill = props.backfill;
      if (!Array.isArray(block)) {
        throw new Error('Invalid block provided:', block);
      }
      if (y === 'center') {
        y = Math.floor((this.height - block.length) / 2) - Math.floor(block.length / 2);
      } else if (y === 'bottom') {
        y = this.height - block.length - 2;
      } else if (y === 'top') {
        y = 2;
      }
      if (backfill) {
        for (var i = 0; i < this.height; i++) {
          this._addString({
            x: 0,
            y: i,
            string: '',
            force: force,
            backfill: backfill
          });
        }
      }
      for (var _i2 = 0; _i2 < block.length; _i2++) {
        var lineHighlight = false;
        if (highlight === true) {
          // If highlight is true, highlight all lines
          lineHighlight = true;
        } else if (highlight && _typeof(highlight) === 'object' && _i2 === highlight.y) {
          // Specific line highlighting based on highlight object
          lineHighlight = highlight;
        }

        // Call _addString for each row in the block
        this._addString({
          x: x,
          y: y + _i2,
          string: block[_i2],
          color: color,
          highlight: lineHighlight,
          force: force
        });
      }
    }
  }, {
    key: "_addFig",
    value: function _addFig(props) {
      var fig = props.fig;
      if (!fig || _typeof(fig) !== 'object' || typeof fig.text !== 'string' || typeof fig.font !== 'string') {
        throw new Error('Invalid fig provided');
      }
      var text = fig.text,
        font = fig.font;
      // eslint-disable-next-line no-undef
      props.block = figlet.textSync(text, {
        font: font || 'Crawford2',
        horizontalLayout: 'full',
        verticalLayout: 'default',
        whitespaceBreak: true
      }).split('\n');
      this._addBlock(props);
    }
  }, {
    key: "_addGrid",
    value: function _addGrid(props) {
      var x = props.x,
        y = props.y,
        grid = props.grid;
      if (!(grid instanceof Grid)) {
        throw new Error('Invalid grid provided');
      }
      if (x === 'center') {
        x = Math.floor((this.width - grid.width) / 2);
      } else if (x === 'right') {
        x = this.width - grid.width - 1;
      } else if (x === 'left') {
        x = 2;
      }
      if (y === 'center') {
        y = Math.floor((this.height - grid.height) / 2);
      } else if (y === 'bottom') {
        y = this.height - grid.height - 2;
      } else if (y === 'top') {
        y = 2;
      }
      this.children.push({
        x: x,
        y: y,
        grid: grid
      });
      this.children.sort(function (a, b) {
        return a.grid.zIndex - b.grid.zIndex;
      });
    }

    /*
      Applies children grids to the copy.
      This allows us to calculate the final ascii UI before rendering.
    */
  }, {
    key: "_flatten",
    value: function _flatten(props) {
      var grid = props.grid;
      if (!(grid instanceof Grid)) {
        throw new Error('Invalid grid provided');
      }
      // Initialize a copy of the grid to work with
      var copy = [];
      for (var y = 0; y < grid.height; y++) {
        var row = [];
        for (var x = 0; x < grid.width; x++) row.push(grid.grid[y][x]);
        copy.push(row);
      }

      // Gather child grids and sort by zIndex or another criteria if needed
      var childDrawings = [];
      var _iterator = _createForOfIteratorHelper(grid.children),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _child = _step.value;
          // Recursively gather child grid drawings without integrating them
          var childDrawing = this._flatten({
            grid: _child.grid
          });
          childDrawings.push({
            drawing: childDrawing,
            x: _child.x,
            y: _child.y,
            grid: _child.grid
          });
        }

        // Integrate child grids into the parent grid, ensuring parent grids are fully processed first
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      for (var _i3 = 0, _childDrawings = childDrawings; _i3 < _childDrawings.length; _i3++) {
        var child = _childDrawings[_i3];
        for (var _y = 0; _y < child.grid.height; _y++) {
          for (var _x = 0; _x < child.grid.width; _x++) {
            var absoluteX = _x + child.x;
            var absoluteY = _y + child.y;
            if (copy[absoluteY] && copy[absoluteY][absoluteX]) {
              var cell = child.drawing[_y][_x];
              // Replace the parent cell with the child cell if not null/empty
              if (cell.draw() !== null) copy[absoluteY][absoluteX] = cell;
            }
          }
        }
      }
      return copy;
    }
  }]);
}();


/***/ }),

/***/ "./src/ui/Modal.js":
/*!*************************!*\
  !*** ./src/ui/Modal.js ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Modal)
/* harmony export */ });
/* harmony import */ var _Screen_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Screen.js */ "./src/ui/Screen.js");
/* harmony import */ var _game_SharedState_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game/SharedState.js */ "./src/game/SharedState.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


var Modal = /*#__PURE__*/function (_Screen) {
  function Modal(props) {
    var _this;
    _classCallCheck(this, Modal);
    if (!props.parent) throw new Error('Modal must have a parent screen');
    _this = _callSuper(this, Modal, [props]);
    _this.parent = parent;
    return _this;
  }
  _inherits(Modal, _Screen);
  return _createClass(Modal, [{
    key: "close",
    value: function close() {
      console.log('closing modal: ', this);
      this.parent.removeGrid(this.id);
      _game_SharedState_js__WEBPACK_IMPORTED_MODULE_1__["default"].set({
        key: 'request.screen.draw',
        value: true
      });
    }
  }]);
}(_Screen_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/ui/Progress.js":
/*!****************************!*\
  !*** ./src/ui/Progress.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Progress)
/* harmony export */ });
/* harmony import */ var _Grid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Grid.js */ "./src/ui/Grid.js");
/* harmony import */ var _game_SharedState_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game/SharedState.js */ "./src/game/SharedState.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


var Progress = /*#__PURE__*/function (_Grid) {
  function Progress(props) {
    var _this;
    _classCallCheck(this, Progress);
    if (!props) throw new Error('Progress requires a label and a memory item to subscribe to');
    if (!props.label) throw new Error('Progress must have a label');
    if (!props.stateKey) throw new Error('Progress must have a state key to subscribe to');
    if (!props.width) props.width = 22;
    if (!props.height) props.height = 4;
    if (!props.border) props.border = false;
    _this = _callSuper(this, Progress, [props]);
    _this.add({
      x: 0,
      y: 0,
      string: props.label
    });
    _this.add({
      x: 1,
      y: 1,
      string: '⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽'
    });
    _this.add({
      x: 1,
      y: 3,
      string: '⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺'
    });
    _this.update(_game_SharedState_js__WEBPACK_IMPORTED_MODULE_1__["default"].get(props.stateKey));
    _game_SharedState_js__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe({
      key: props.stateKey,
      callback: _this.update.bind(_this)
    });
    return _this;
  }
  _inherits(Progress, _Grid);
  return _createClass(Progress, [{
    key: "_calcBar",
    value: function _calcBar(current, max) {
      var bar = Math.round(current / max * 20);
      if (bar < 0) bar = 0;
      return '⎹' + '█'.repeat(bar) + ' '.repeat(20 - bar) + '⎸';
    }
  }, {
    key: "update",
    value: function update(data) {
      this.add({
        x: 0,
        y: 2,
        string: this._calcBar(data.current, data.max)
      });
    }
  }]);
}(_Grid_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/ui/Screen.js":
/*!**************************!*\
  !*** ./src/ui/Screen.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Screen)
/* harmony export */ });
/* harmony import */ var _Grid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Grid.js */ "./src/ui/Grid.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

var Screen = /*#__PURE__*/function (_Grid) {
  function Screen(props) {
    _classCallCheck(this, Screen);
    var id = props.id,
      width = props.width,
      height = props.height;
    if (!id) props.id = 'Screen';
    if (!width) props.width = 80;
    if (!height) props.height = 42;
    return _callSuper(this, Screen, [props]);
  }
  _inherits(Screen, _Grid);
  return _createClass(Screen, [{
    key: "keyPressed",
    value: function keyPressed(e) {
      console.log("key press '".concat(e.key, "' seen by ").concat(this.id, " screen... you should override this method in your screen class"));
    }
  }]);
}(_Grid_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/ui/SelectionList.js":
/*!*********************************!*\
  !*** ./src/ui/SelectionList.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SelectionList)
/* harmony export */ });
/* harmony import */ var _Grid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Grid.js */ "./src/ui/Grid.js");
/* harmony import */ var _game_SharedState_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game/SharedState.js */ "./src/game/SharedState.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


var SelectionList = /*#__PURE__*/function (_Grid) {
  // Example:
  //          Item 1
  // .-----------------------.
  // |        Item 2         |
  // |                       |<-- viewable area
  // |    === Item 3 ===     |
  // '-----------------------'
  //          Item 4

  function SelectionList(props) {
    var _this;
    _classCallCheck(this, SelectionList);
    _this = _callSuper(this, SelectionList, [props]);

    // items are expected to be in the format of {id: id, value: value, ... }
    // common use is {id: 'item.id', value: 'item.name'}, the value will be displayed.
    // but you can have as many properties as you want on the object.
    var items = props.items,
      itemInFocus = props.itemInFocus;
    _this.items = items || [];
    _this.itemInFocus = itemInFocus || 0;
    _this.build();
    return _this;
  }
  _inherits(SelectionList, _Grid);
  return _createClass(SelectionList, [{
    key: "updateItems",
    value: function updateItems(items) {
      this.items = items;
      this.itemInFocus = 0;
      this.build();
      _game_SharedState_js__WEBPACK_IMPORTED_MODULE_1__["default"].set({
        key: 'request.screen.draw',
        value: true
      });
    }
  }, {
    key: "build",
    value: function build() {
      var _this2 = this;
      // clear out the existing components
      this.clear();
      var availableSlots = Math.round(this.height / 2) - 2; // each item requires 2 lines
      var visibleItems = [];
      if (this.items.length <= availableSlots) {
        visibleItems = this.items;
      } else {
        if (this.itemInFocus < availableSlots) {
          visibleItems = this.items.slice(0, availableSlots);
        } else {
          // if the selected item is not within the first available slots, then show the selected item at the bottom of slots.
          visibleItems = this.items.slice(this.itemInFocus - availableSlots + 1, this.itemInFocus + 1);
        }
      }
      visibleItems.forEach(function (item, index) {
        var focusItem = _this2.items[_this2.itemInFocus];
        var highlight = item === focusItem;
        var repeat = _this2.width - item.value.length - 4;
        if (repeat < 0) repeat = 0;
        var string = item.value + ' '.repeat(repeat);
        _this2.add({
          x: 'right',
          y: 2 + index * 2,
          string: string,
          highlight: highlight
        });
      });
      _game_SharedState_js__WEBPACK_IMPORTED_MODULE_1__["default"].set({
        key: 'request.screen.draw',
        value: true
      });
    }
  }, {
    key: "up",
    value: function up() {
      if (this.itemInFocus > 0) {
        this.itemInFocus--;
        this.build();
      }
      return this.items[this.itemInFocus];
    }
  }, {
    key: "down",
    value: function down() {
      if (this.itemInFocus < this.items.length - 1) {
        this.itemInFocus++;
        this.build();
      }
      return this.items[this.itemInFocus];
    }
  }, {
    key: "selectItem",
    value: function selectItem() {
      return this.items[this.itemInFocus];
    }
  }]);
}(_Grid_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/ui/Tabs.js":
/*!************************!*\
  !*** ./src/ui/Tabs.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Tabs)
/* harmony export */ });
/* harmony import */ var _Grid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Grid.js */ "./src/ui/Grid.js");
/* harmony import */ var _game_SharedState_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game/SharedState.js */ "./src/game/SharedState.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


var Tabs = /*#__PURE__*/function (_Grid) {
  function Tabs(props) {
    var _this;
    _classCallCheck(this, Tabs);
    props.id = 'TabGrid';
    _this = _callSuper(this, Tabs, [props]);
    _this.tabs = props.tabs || [];
    _this.selectedTab = props.selectedTab || 0;
    _this.activeGrid = _this.tabs[_this.selectedTab].grid;
    _this._build();
    return _this;
  }
  _inherits(Tabs, _Grid);
  return _createClass(Tabs, [{
    key: "_build",
    value: function _build() {
      this.clear();
      var tabLine1 = '╭';
      var tabLine2 = '⏐';
      var tabLine3 = '╰';
      var highlight = false;
      for (var i = 0; i < this.tabs.length; i++) {
        var name = this.tabs[i].name;
        tabLine1 += '⎯' + '⎯'.repeat(name.length) + '⎯┬';
        var tabLabel = ' ' + name + ' ';
        if (i === this.selectedTab) {
          highlight = {
            x: tabLine2.length,
            y: 1,
            length: tabLabel.length
          };
        }
        tabLine2 += tabLabel + '⏐';
        tabLine3 += '⎯' + '⎯'.repeat(name.length) + '⎯┴';
      }
      tabLine1 = tabLine1.slice(0, -1) + '╮';
      tabLine2 = tabLine2.slice(0, -1) + '⏐';
      tabLine3 = tabLine3.slice(0, -1) + '╯';
      var tabBlock = [tabLine1, tabLine2, tabLine3];
      this.add({
        x: 'center',
        y: 0,
        block: tabBlock,
        highlight: highlight
      });
      this.add({
        x: 'center',
        y: 4,
        grid: this.activeGrid
      });
      _game_SharedState_js__WEBPACK_IMPORTED_MODULE_1__["default"].set({
        key: 'request.screen.draw',
        value: true
      });
    }
  }, {
    key: "keyPressed",
    value: function keyPressed(e) {
      if (e.key === 'a' || e.key === 'ArrowLeft') {
        if (this.selectedTab > 0) {
          this.selectedTab--;
          this.activeGrid = this.tabs[this.selectedTab].grid;
          this._build();
        }
      } else if (e.key === 'd' || e.key === 'ArrowRight') {
        if (this.selectedTab < this.tabs.length - 1) {
          this.selectedTab++;
          this.activeGrid = this.tabs[this.selectedTab].grid;
          this._build();
        }
      } else {
        console.log('Tabs keyPressed:', e.key);
        this.activeGrid.keyPressed(e);
      }
    }
  }]);
}(_Grid_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game_GameObjectLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game/GameObjectLoader.js */ "./src/game/GameObjectLoader.js");
/* harmony import */ var _screens_HUD_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screens/HUD.js */ "./src/screens/HUD.js");
/* harmony import */ var _game_SharedState_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game/SharedState.js */ "./src/game/SharedState.js");
/* harmony import */ var _screens_GameSetup_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./screens/GameSetup.js */ "./src/screens/GameSetup.js");
/* harmony import */ var _screens_Intertitle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./screens/Intertitle.js */ "./src/screens/Intertitle.js");
/* harmony import */ var _screens_TitleSequence_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./screens/TitleSequence.js */ "./src/screens/TitleSequence.js");






_game_GameObjectLoader_js__WEBPACK_IMPORTED_MODULE_0__["default"].initialize();
var canvas = document.getElementById('canvas');
canvas.style.fontFamily = 'PrintChar21';
var screen = null;
var fpsCounter = {
  fps: 0,
  lastFPSUpdate: new Date().getTime(),
  update: function update() {
    this.fps++;
    var now = new Date().getTime();
    var timeSinceLastUpdate = now - this.lastFPSUpdate;
    if (timeSinceLastUpdate > 1000) {
      _game_SharedState_js__WEBPACK_IMPORTED_MODULE_2__["default"].set({
        key: 'fps.update',
        value: {
          fps: this.fps,
          lastUpdate: timeSinceLastUpdate
        }
      });
      this.fps = 0;
      this.lastFPSUpdate = now;
    }
  }
};
_game_SharedState_js__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe({
  key: 'game.state',
  callback: function callback(state) {
    if (state === 'title-sequence') {
      screen = new _screens_TitleSequence_js__WEBPACK_IMPORTED_MODULE_5__["default"]();
      canvas.innerHTML = screen.draw();
    } else if (state === 'setup-game') {
      screen = new _screens_GameSetup_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
      canvas.innerHTML = screen.draw();
    } else if (state === 'wake-up') {
      screen = new _screens_Intertitle_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
        font: 'Bloody',
        lines: ['Day', 'One'],
        lineHeight: 12
      });
      canvas.innerHTML = screen.draw();
    } else if (state === 'in-game') {
      screen = new _screens_HUD_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
      canvas.innerHTML = screen.draw();
    } else if (state === 'post-game') {
      // TBD
    }
  }
});

// now bind keys to movement
document.addEventListener('keyup', function (e) {
  screen.keyPressed(e);
});

// register to listen for updates
_game_SharedState_js__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe({
  key: 'request.screen.draw',
  callback: function callback(draw) {
    if (draw) canvas.innerHTML = screen.draw();
    fpsCounter.update();
  }
});
_game_SharedState_js__WEBPACK_IMPORTED_MODULE_2__["default"].set({
  key: 'game.state',
  value: 'title-sequence'
});
/******/ })()
;
//# sourceMappingURL=bundle.js.map