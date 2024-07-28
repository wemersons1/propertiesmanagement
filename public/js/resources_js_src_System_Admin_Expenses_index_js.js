(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_System_Admin_Expenses_index_js"],{

/***/ "./node_modules/@restart/hooks/esm/index.js":
/*!**************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCallbackRef": () => (/* reexport safe */ _useCallbackRef__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "useCommittedRef": () => (/* reexport safe */ _useCommittedRef__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "useEventCallback": () => (/* reexport safe */ _useEventCallback__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "useEventListener": () => (/* reexport safe */ _useEventListener__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "useGlobalListener": () => (/* reexport safe */ _useGlobalListener__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "useImage": () => (/* reexport safe */ _useImage__WEBPACK_IMPORTED_MODULE_11__["default"]),
/* harmony export */   "useInterval": () => (/* reexport safe */ _useInterval__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   "useMergeState": () => (/* reexport safe */ _useMergeState__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   "useMergeStateFromProps": () => (/* reexport safe */ _useMergeStateFromProps__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   "useMounted": () => (/* reexport safe */ _useMounted__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   "usePrevious": () => (/* reexport safe */ _usePrevious__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   "useRafInterval": () => (/* reexport safe */ _useRafInterval__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   "useResizeObserver": () => (/* reexport safe */ _useResizeObserver__WEBPACK_IMPORTED_MODULE_12__["default"])
/* harmony export */ });
/* harmony import */ var _useCallbackRef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useCallbackRef */ "./node_modules/@restart/hooks/esm/useCallbackRef.js");
/* harmony import */ var _useCommittedRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useCommittedRef */ "./node_modules/@restart/hooks/esm/useCommittedRef.js");
/* harmony import */ var _useEventCallback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useEventCallback */ "./node_modules/@restart/hooks/esm/useEventCallback.js");
/* harmony import */ var _useEventListener__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useEventListener */ "./node_modules/@restart/hooks/esm/useEventListener.js");
/* harmony import */ var _useGlobalListener__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useGlobalListener */ "./node_modules/@restart/hooks/esm/useGlobalListener.js");
/* harmony import */ var _useInterval__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useInterval */ "./node_modules/@restart/hooks/esm/useInterval.js");
/* harmony import */ var _useRafInterval__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useRafInterval */ "./node_modules/@restart/hooks/esm/useRafInterval.js");
/* harmony import */ var _useMergeState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./useMergeState */ "./node_modules/@restart/hooks/esm/useMergeState.js");
/* harmony import */ var _useMergeStateFromProps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./useMergeStateFromProps */ "./node_modules/@restart/hooks/esm/useMergeStateFromProps.js");
/* harmony import */ var _useMounted__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./useMounted */ "./node_modules/@restart/hooks/esm/useMounted.js");
/* harmony import */ var _usePrevious__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./usePrevious */ "./node_modules/@restart/hooks/esm/usePrevious.js");
/* harmony import */ var _useImage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./useImage */ "./node_modules/@restart/hooks/esm/useImage.js");
/* harmony import */ var _useResizeObserver__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./useResizeObserver */ "./node_modules/@restart/hooks/esm/useResizeObserver.js");















/***/ }),

/***/ "./node_modules/@restart/hooks/esm/useEventListener.js":
/*!*************************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useEventListener.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useEventListener)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _useEventCallback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useEventCallback */ "./node_modules/@restart/hooks/esm/useEventCallback.js");



/**
 * Attaches an event handler outside directly to specified DOM element
 * bypassing the react synthetic event system.
 *
 * @param element The target to listen for events on
 * @param event The DOM event name
 * @param handler An event handler
 * @param capture Whether or not to listen during the capture event phase
 */
function useEventListener(eventTarget, event, listener, capture) {
  if (capture === void 0) {
    capture = false;
  }

  var handler = (0,_useEventCallback__WEBPACK_IMPORTED_MODULE_1__["default"])(listener);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var target = typeof eventTarget === 'function' ? eventTarget() : eventTarget;
    target.addEventListener(event, handler, capture);
    return function () {
      return target.removeEventListener(event, handler, capture);
    };
  }, [eventTarget]);
}

/***/ }),

/***/ "./node_modules/@restart/hooks/esm/useForceUpdate.js":
/*!***********************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useForceUpdate.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useForceUpdate)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

/**
 * Returns a function that triggers a component update. the hook equivalent to
 * `this.forceUpdate()` in a class component. In most cases using a state value directly
 * is preferable but may be required in some advanced usages of refs for interop or
 * when direct DOM manipulation is required.
 *
 * ```ts
 * const forceUpdate = useForceUpdate();
 *
 * const updateOnClick = useCallback(() => {
 *  forceUpdate()
 * }, [forceUpdate])
 *
 * return <button type="button" onClick={updateOnClick}>Hi there</button>
 * ```
 */

function useForceUpdate() {
  // The toggling state value is designed to defeat React optimizations for skipping
  // updates when they are stricting equal to the last state value
  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(function (state) {
    return !state;
  }, false),
      dispatch = _useReducer[1];

  return dispatch;
}

/***/ }),

/***/ "./node_modules/@restart/hooks/esm/useGlobalListener.js":
/*!**************************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useGlobalListener.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useGlobalListener)
/* harmony export */ });
/* harmony import */ var _useEventListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useEventListener */ "./node_modules/@restart/hooks/esm/useEventListener.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");



/**
 * Attaches an event handler outside directly to the `document`,
 * bypassing the react synthetic event system.
 *
 * ```ts
 * useGlobalListener('keydown', (event) => {
 *  console.log(event.key)
 * })
 * ```
 *
 * @param event The DOM event name
 * @param handler An event handler
 * @param capture Whether or not to listen during the capture event phase
 */
function useGlobalListener(event, handler, capture) {
  if (capture === void 0) {
    capture = false;
  }

  var documentTarget = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {
    return document;
  }, []);
  return (0,_useEventListener__WEBPACK_IMPORTED_MODULE_0__["default"])(documentTarget, event, handler, capture);
}

/***/ }),

/***/ "./node_modules/@restart/hooks/esm/useImage.js":
/*!*****************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useImage.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useImage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


/**
 * Fetch and load an image for programatic use such as in a `<canvas>` element.
 *
 * @param imageOrUrl The `HtmlImageElement` or image url to load
 * @param crossOrigin The `crossorigin` attribute to set
 *
 * ```ts
 * const { image, error } = useImage('/static/kittens.png')
 * const ref = useRef<HTMLCanvasElement>()
 *
 * useEffect(() => {
 *   const ctx = ref.current.getContext('2d')
 *
 *   if (image) {
 *     ctx.drawImage(image, 0, 0)
 *   }
 * }, [ref, image])
 *
 * return (
 *   <>
 *     {error && "there was a problem loading the image"}
 *     <canvas ref={ref} />
 *   </>
 * ```
 */
function useImage(imageOrUrl, crossOrigin) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    image: null,
    error: null
  }),
      state = _useState[0],
      setState = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!imageOrUrl) return undefined;
    var image;

    if (typeof imageOrUrl === 'string') {
      image = new Image();
      if (crossOrigin) image.crossOrigin = crossOrigin;
      image.src = imageOrUrl;
    } else {
      image = imageOrUrl;

      if (image.complete && image.naturalHeight > 0) {
        setState({
          image: image,
          error: null
        });
        return;
      }
    }

    function onLoad() {
      setState({
        image: image,
        error: null
      });
    }

    function onError(error) {
      setState({
        image: image,
        error: error
      });
    }

    image.addEventListener('load', onLoad);
    image.addEventListener('error', onError);
    return function () {
      image.removeEventListener('load', onLoad);
      image.removeEventListener('error', onError);
    };
  }, [imageOrUrl, crossOrigin]);
  return state;
}

/***/ }),

/***/ "./node_modules/@restart/hooks/esm/useInterval.js":
/*!********************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useInterval.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _useCommittedRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useCommittedRef */ "./node_modules/@restart/hooks/esm/useCommittedRef.js");


/**
 * Creates a `setInterval` that is properly cleaned up when a component unmounted
 *
 * ```tsx
 *  function Timer() {
 *    const [timer, setTimer] = useState(0)
 *    useInterval(() => setTimer(i => i + 1), 1000)
 *
 *    return <span>{timer} seconds past</span>
 *  }
 * ```
 *
 * @param fn an function run on each interval
 * @param ms The milliseconds duration of the interval
 */

function useInterval(fn, ms, paused, runImmediately) {
  if (paused === void 0) {
    paused = false;
  }

  if (runImmediately === void 0) {
    runImmediately = false;
  }

  var handle;
  var fnRef = (0,_useCommittedRef__WEBPACK_IMPORTED_MODULE_1__["default"])(fn); // this ref is necessary b/c useEffect will sometimes miss a paused toggle
  // orphaning a setTimeout chain in the aether, so relying on it's refresh logic is not reliable.

  var pausedRef = (0,_useCommittedRef__WEBPACK_IMPORTED_MODULE_1__["default"])(paused);

  var tick = function tick() {
    if (pausedRef.current) return;
    fnRef.current();
    schedule(); // eslint-disable-line no-use-before-define
  };

  var schedule = function schedule() {
    clearTimeout(handle);
    handle = setTimeout(tick, ms);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (runImmediately) {
      tick();
    } else {
      schedule();
    }

    return function () {
      return clearTimeout(handle);
    };
  }, [paused, runImmediately]);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useInterval);

/***/ }),

/***/ "./node_modules/@restart/hooks/esm/useIsomorphicEffect.js":
/*!****************************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useIsomorphicEffect.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var isReactNative = typeof __webpack_require__.g !== 'undefined' && // @ts-ignore
__webpack_require__.g.navigator && // @ts-ignore
__webpack_require__.g.navigator.product === 'ReactNative';
var isDOM = typeof document !== 'undefined';
/**
 * Is `useLayoutEffect` in a DOM or React Native environment, otherwise resolves to useEffect
 * Only useful to avoid the console warning.
 *
 * PREFER `useEffect` UNLESS YOU KNOW WHAT YOU ARE DOING.
 *
 * @category effects
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isDOM || isReactNative ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect);

/***/ }),

/***/ "./node_modules/@restart/hooks/esm/useMergeState.js":
/*!**********************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useMergeState.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useMergeState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



/**
 * Mimics a React class component's state model, of having a single unified
 * `state` object and an updater that merges updates into the existing state, as
 * opposed to replacing it.
 *
 * ```js
 * const [state, setState] = useMergeState({ name: 'Betsy', age: 24 })
 *
 * setState({ name: 'Johan' }) // { name: 'Johan', age: 24 }
 *
 * setState(state => ({ age: state.age + 10 })) // { name: 'Johan', age: 34 }
 * ```
 *
 * @param initialState The initial state object
 */
function useMergeState(initialState) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialState),
      state = _useState[0],
      setState = _useState[1];

  var updater = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (update) {
    if (update === null) return;

    if (typeof update === 'function') {
      setState(function (state) {
        var nextState = update(state);
        return nextState == null ? state : _extends({}, state, nextState);
      });
    } else {
      setState(function (state) {
        return _extends({}, state, update);
      });
    }
  }, [setState]);
  return [state, updater];
}

/***/ }),

/***/ "./node_modules/@restart/hooks/esm/useMergeStateFromProps.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useMergeStateFromProps.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useMergeStateFromProps)
/* harmony export */ });
/* harmony import */ var _useMergeState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useMergeState */ "./node_modules/@restart/hooks/esm/useMergeState.js");

function useMergeStateFromProps(props, gDSFP, initialState) {
  var _useMergeState = (0,_useMergeState__WEBPACK_IMPORTED_MODULE_0__["default"])(initialState),
      state = _useMergeState[0],
      setState = _useMergeState[1];

  var nextState = gDSFP(props, state);
  if (nextState !== null) setState(nextState);
  return [state, setState];
}

/***/ }),

/***/ "./node_modules/@restart/hooks/esm/useRafInterval.js":
/*!***********************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useRafInterval.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _useCommittedRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useCommittedRef */ "./node_modules/@restart/hooks/esm/useCommittedRef.js");



function useRafInterval(fn, ms, paused) {
  if (paused === void 0) {
    paused = false;
  }

  var handle;
  var start = new Date().getTime();
  var fnRef = (0,_useCommittedRef__WEBPACK_IMPORTED_MODULE_1__["default"])(fn); // this ref is necessary b/c useEffect will sometimes miss a paused toggle
  // orphaning a setTimeout chain in the aether, so relying on it's refresh logic is not reliable.

  var pausedRef = (0,_useCommittedRef__WEBPACK_IMPORTED_MODULE_1__["default"])(paused);

  function loop() {
    var current = new Date().getTime();
    var delta = current - start;
    if (pausedRef.current) return;

    if (delta >= ms && fnRef.current) {
      fnRef.current();
      start = new Date().getTime();
    }

    cancelAnimationFrame(handle);
    handle = requestAnimationFrame(loop);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    handle = requestAnimationFrame(loop);
    return function () {
      return cancelAnimationFrame(handle);
    };
  }, []);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useRafInterval);

/***/ }),

/***/ "./node_modules/@restart/hooks/esm/useResizeObserver.js":
/*!**************************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useResizeObserver.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useResizeObserver)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _useIsomorphicEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useIsomorphicEffect */ "./node_modules/@restart/hooks/esm/useIsomorphicEffect.js");


var targetMap = new WeakMap();
var resizeObserver;

function getResizeObserver() {
  // eslint-disable-next-line no-return-assign
  return resizeObserver = resizeObserver || new window.ResizeObserver(function (entries) {
    entries.forEach(function (entry) {
      var handler = targetMap.get(entry.target);
      if (handler) handler(entry.contentRect);
    });
  });
}
/**
 * Efficiently observe size changes on an element. Depends on the `ResizeObserver` api,
 * and polyfills are needed in older browsers.
 *
 * ```ts
 * const [ref, attachRef] = useCallbackRef(null);
 *
 * const rect = useResizeObserver(ref);
 *
 * return (
 *  <div ref={attachRef}>
 *    {JSON.stringify(rect)}
 *  </div>
 * )
 * ```
 *
 * @param element The DOM element to observe
 */


function useResizeObserver(element) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      rect = _useState[0],
      setRect = _useState[1];

  (0,_useIsomorphicEffect__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
    if (!element) return;
    getResizeObserver().observe(element);
    setRect(element.getBoundingClientRect());
    targetMap.set(element, function (rect) {
      setRect(rect);
    });
    return function () {
      targetMap.delete(element);
    };
  }, [element]);
  return rect;
}

/***/ }),

/***/ "./node_modules/@restart/ui/esm/Anchor.js":
/*!************************************************!*\
  !*** ./node_modules/@restart/ui/esm/Anchor.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "isTrivialHref": () => (/* binding */ isTrivialHref)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _restart_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @restart/hooks */ "./node_modules/@restart/hooks/esm/index.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button */ "./node_modules/@restart/ui/esm/Button.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
const _excluded = ["onKeyDown"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-disable jsx-a11y/no-static-element-interactions */

/* eslint-disable jsx-a11y/anchor-has-content */




function isTrivialHref(href) {
  return !href || href.trim() === '#';
}

/**
 * An generic `<a>` component that covers a few A11y cases, ensuring that
 * cases where the `href` is missing or trivial like "#" are treated like buttons.
 */
const Anchor = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((_ref, ref) => {
  let {
    onKeyDown
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  const [buttonProps] = (0,_Button__WEBPACK_IMPORTED_MODULE_3__.useButtonProps)(Object.assign({
    tagName: 'a'
  }, props));
  const handleKeyDown = (0,_restart_hooks__WEBPACK_IMPORTED_MODULE_1__.useEventCallback)(e => {
    buttonProps.onKeyDown(e);
    onKeyDown == null ? void 0 : onKeyDown(e);
  });

  if (isTrivialHref(props.href) && !props.role || props.role === 'button') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", Object.assign({
      ref: ref
    }, props, buttonProps, {
      onKeyDown: handleKeyDown
    }));
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", Object.assign({
    ref: ref
  }, props, {
    onKeyDown: onKeyDown
  }));
});
Anchor.displayName = 'Anchor';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Anchor);

/***/ }),

/***/ "./node_modules/@restart/ui/esm/Button.js":
/*!************************************************!*\
  !*** ./node_modules/@restart/ui/esm/Button.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "isTrivialHref": () => (/* binding */ isTrivialHref),
/* harmony export */   "useButtonProps": () => (/* binding */ useButtonProps)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
const _excluded = ["as", "disabled"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function isTrivialHref(href) {
  return !href || href.trim() === '#';
}
function useButtonProps({
  tagName,
  disabled,
  href,
  target,
  rel,
  onClick,
  tabIndex = 0,
  type
}) {
  if (!tagName) {
    if (href != null || target != null || rel != null) {
      tagName = 'a';
    } else {
      tagName = 'button';
    }
  }

  const meta = {
    tagName
  };

  if (tagName === 'button') {
    return [{
      type: type || 'button',
      disabled
    }, meta];
  }

  const handleClick = event => {
    if (disabled || tagName === 'a' && isTrivialHref(href)) {
      event.preventDefault();
    }

    if (disabled) {
      event.stopPropagation();
      return;
    }

    onClick == null ? void 0 : onClick(event);
  };

  const handleKeyDown = event => {
    if (event.key === ' ') {
      event.preventDefault();
      handleClick(event);
    }
  };

  if (tagName === 'a') {
    // Ensure there's a href so Enter can trigger anchor button.
    href || (href = '#');

    if (disabled) {
      href = undefined;
    }
  }

  return [{
    role: 'button',
    // explicitly undefined so that it overrides the props disabled in a spread
    // e.g. <Tag {...props} {...hookProps} />
    disabled: undefined,
    tabIndex: disabled ? undefined : tabIndex,
    href,
    target: tagName === 'a' ? target : undefined,
    'aria-disabled': !disabled ? undefined : disabled,
    rel: tagName === 'a' ? rel : undefined,
    onClick: handleClick,
    onKeyDown: handleKeyDown
  }, meta];
}
const Button = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((_ref, ref) => {
  let {
    as: asProp,
    disabled
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  const [buttonProps, {
    tagName: Component
  }] = useButtonProps(Object.assign({
    tagName: asProp,
    disabled
  }, props));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Component, Object.assign({}, props, buttonProps, {
    ref: ref
  }));
});
Button.displayName = 'Button';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

/***/ }),

/***/ "./node_modules/@restart/ui/esm/Nav.js":
/*!*********************************************!*\
  !*** ./node_modules/@restart/ui/esm/Nav.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var dom_helpers_querySelectorAll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dom-helpers/querySelectorAll */ "./node_modules/dom-helpers/esm/querySelectorAll.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _restart_hooks_useForceUpdate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @restart/hooks/useForceUpdate */ "./node_modules/@restart/hooks/esm/useForceUpdate.js");
/* harmony import */ var _restart_hooks_useMergedRefs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @restart/hooks/useMergedRefs */ "./node_modules/@restart/hooks/esm/useMergedRefs.js");
/* harmony import */ var _NavContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./NavContext */ "./node_modules/@restart/ui/esm/NavContext.js");
/* harmony import */ var _SelectableContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SelectableContext */ "./node_modules/@restart/ui/esm/SelectableContext.js");
/* harmony import */ var _TabContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TabContext */ "./node_modules/@restart/ui/esm/TabContext.js");
/* harmony import */ var _DataKey__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DataKey */ "./node_modules/@restart/ui/esm/DataKey.js");
/* harmony import */ var _NavItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./NavItem */ "./node_modules/@restart/ui/esm/NavItem.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
const _excluded = ["as", "onSelect", "activeKey", "role", "onKeyDown"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }













// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

const EVENT_KEY_ATTR = (0,_DataKey__WEBPACK_IMPORTED_MODULE_5__.dataAttr)('event-key');
const Nav = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((_ref, ref) => {
  let {
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = 'div',
    onSelect,
    activeKey,
    role,
    onKeyDown
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // A ref and forceUpdate for refocus, b/c we only want to trigger when needed
  // and don't want to reset the set in the effect
  const forceUpdate = (0,_restart_hooks_useForceUpdate__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const needsRefocusRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
  const parentOnSelect = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_SelectableContext__WEBPACK_IMPORTED_MODULE_6__["default"]);
  const tabContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_TabContext__WEBPACK_IMPORTED_MODULE_7__["default"]);
  let getControlledId, getControllerId;

  if (tabContext) {
    role = role || 'tablist';
    activeKey = tabContext.activeKey; // TODO: do we need to duplicate these?

    getControlledId = tabContext.getControlledId;
    getControllerId = tabContext.getControllerId;
  }

  const listNode = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);

  const getNextActiveTab = offset => {
    const currentListNode = listNode.current;
    if (!currentListNode) return null;
    const items = (0,dom_helpers_querySelectorAll__WEBPACK_IMPORTED_MODULE_0__["default"])(currentListNode, `[${EVENT_KEY_ATTR}]:not([aria-disabled=true])`);
    const activeChild = currentListNode.querySelector('[aria-selected=true]');
    if (!activeChild || activeChild !== document.activeElement) return null;
    const index = items.indexOf(activeChild);
    if (index === -1) return null;
    let nextIndex = index + offset;
    if (nextIndex >= items.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = items.length - 1;
    return items[nextIndex];
  };

  const handleSelect = (key, event) => {
    if (key == null) return;
    onSelect == null ? void 0 : onSelect(key, event);
    parentOnSelect == null ? void 0 : parentOnSelect(key, event);
  };

  const handleKeyDown = event => {
    onKeyDown == null ? void 0 : onKeyDown(event);

    if (!tabContext) {
      return;
    }

    let nextActiveChild;

    switch (event.key) {
      case 'ArrowLeft':
      case 'ArrowUp':
        nextActiveChild = getNextActiveTab(-1);
        break;

      case 'ArrowRight':
      case 'ArrowDown':
        nextActiveChild = getNextActiveTab(1);
        break;

      default:
        return;
    }

    if (!nextActiveChild) return;
    event.preventDefault();
    handleSelect(nextActiveChild.dataset[(0,_DataKey__WEBPACK_IMPORTED_MODULE_5__.dataProp)('EventKey')] || null, event);
    needsRefocusRef.current = true;
    forceUpdate();
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (listNode.current && needsRefocusRef.current) {
      const activeChild = listNode.current.querySelector(`[${EVENT_KEY_ATTR}][aria-selected=true]`);
      activeChild == null ? void 0 : activeChild.focus();
    }

    needsRefocusRef.current = false;
  });
  const mergedRef = (0,_restart_hooks_useMergedRefs__WEBPACK_IMPORTED_MODULE_3__["default"])(ref, listNode);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_SelectableContext__WEBPACK_IMPORTED_MODULE_6__["default"].Provider, {
    value: handleSelect,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_NavContext__WEBPACK_IMPORTED_MODULE_8__["default"].Provider, {
      value: {
        role,
        // used by NavLink to determine it's role
        activeKey: (0,_SelectableContext__WEBPACK_IMPORTED_MODULE_6__.makeEventKey)(activeKey),
        getControlledId: getControlledId || noop,
        getControllerId: getControllerId || noop
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Component, Object.assign({}, props, {
        onKeyDown: handleKeyDown,
        ref: mergedRef,
        role: role
      }))
    })
  });
});
Nav.displayName = 'Nav';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object.assign(Nav, {
  Item: _NavItem__WEBPACK_IMPORTED_MODULE_9__["default"]
}));

/***/ }),

/***/ "./node_modules/@restart/ui/esm/NavContext.js":
/*!****************************************************!*\
  !*** ./node_modules/@restart/ui/esm/NavContext.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

const NavContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
NavContext.displayName = 'NavContext';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavContext);

/***/ }),

/***/ "./node_modules/@restart/ui/esm/NavItem.js":
/*!*************************************************!*\
  !*** ./node_modules/@restart/ui/esm/NavItem.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "useNavItem": () => (/* binding */ useNavItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @restart/hooks/useEventCallback */ "./node_modules/@restart/hooks/esm/useEventCallback.js");
/* harmony import */ var _NavContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NavContext */ "./node_modules/@restart/ui/esm/NavContext.js");
/* harmony import */ var _SelectableContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SelectableContext */ "./node_modules/@restart/ui/esm/SelectableContext.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Button */ "./node_modules/@restart/ui/esm/Button.js");
/* harmony import */ var _DataKey__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DataKey */ "./node_modules/@restart/ui/esm/DataKey.js");
/* harmony import */ var _TabContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TabContext */ "./node_modules/@restart/ui/esm/TabContext.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
const _excluded = ["as", "active", "eventKey"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










function useNavItem({
  key,
  onClick,
  active,
  id,
  role,
  disabled
}) {
  const parentOnSelect = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_SelectableContext__WEBPACK_IMPORTED_MODULE_3__["default"]);
  const navContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_NavContext__WEBPACK_IMPORTED_MODULE_4__["default"]);
  const tabContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_TabContext__WEBPACK_IMPORTED_MODULE_5__["default"]);
  let isActive = active;
  const props = {
    role
  };

  if (navContext) {
    if (!role && navContext.role === 'tablist') props.role = 'tab';
    const contextControllerId = navContext.getControllerId(key != null ? key : null);
    const contextControlledId = navContext.getControlledId(key != null ? key : null); // @ts-ignore

    props[(0,_DataKey__WEBPACK_IMPORTED_MODULE_6__.dataAttr)('event-key')] = key;
    props.id = contextControllerId || id;
    isActive = active == null && key != null ? navContext.activeKey === key : active;
    /**
     * Simplified scenario for `mountOnEnter`.
     *
     * While it would make sense to keep 'aria-controls' for tabs that have been mounted at least
     * once, it would also complicate the code quite a bit, for very little gain.
     * The following implementation is probably good enough.
     *
     * @see https://github.com/react-restart/ui/pull/40#issuecomment-1009971561
     */

    if (isActive || !(tabContext != null && tabContext.unmountOnExit) && !(tabContext != null && tabContext.mountOnEnter)) props['aria-controls'] = contextControlledId;
  }

  if (props.role === 'tab') {
    props['aria-selected'] = isActive;

    if (!isActive) {
      props.tabIndex = -1;
    }

    if (disabled) {
      props.tabIndex = -1;
      props['aria-disabled'] = true;
    }
  }

  props.onClick = (0,_restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_1__["default"])(e => {
    if (disabled) return;
    onClick == null ? void 0 : onClick(e);

    if (key == null) {
      return;
    }

    if (parentOnSelect && !e.isPropagationStopped()) {
      parentOnSelect(key, e);
    }
  });
  return [props, {
    isActive
  }];
}
const NavItem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((_ref, ref) => {
  let {
    as: Component = _Button__WEBPACK_IMPORTED_MODULE_7__["default"],
    active,
    eventKey
  } = _ref,
      options = _objectWithoutPropertiesLoose(_ref, _excluded);

  const [props, meta] = useNavItem(Object.assign({
    key: (0,_SelectableContext__WEBPACK_IMPORTED_MODULE_3__.makeEventKey)(eventKey, options.href),
    active
  }, options)); // @ts-ignore

  props[(0,_DataKey__WEBPACK_IMPORTED_MODULE_6__.dataAttr)('active')] = meta.isActive;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component, Object.assign({}, options, props, {
    ref: ref
  }));
});
NavItem.displayName = 'NavItem';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavItem);

/***/ }),

/***/ "./node_modules/@restart/ui/esm/SelectableContext.js":
/*!***********************************************************!*\
  !*** ./node_modules/@restart/ui/esm/SelectableContext.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "makeEventKey": () => (/* binding */ makeEventKey)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

const SelectableContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
const makeEventKey = (eventKey, href = null) => {
  if (eventKey != null) return String(eventKey);
  return href || null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectableContext);

/***/ }),

/***/ "./node_modules/@restart/ui/esm/TabContext.js":
/*!****************************************************!*\
  !*** ./node_modules/@restart/ui/esm/TabContext.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

const TabContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TabContext);

/***/ }),

/***/ "./resources/js/src/System/Admin/Expenses/index.js":
/*!*********************************************************!*\
  !*** ./resources/js/src/System/Admin/Expenses/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_HeaderButtonPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/HeaderButtonPage */ "./resources/js/src/components/HeaderButtonPage/index.js");
/* harmony import */ var _Hook_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Hook/Context */ "./resources/js/src/Hook/Context.js");
/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Table */ "./resources/js/src/components/Table/index.js");
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Spinner */ "./resources/js/src/components/Spinner/index.js");
/* harmony import */ var _components_Message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/Message */ "./resources/js/src/components/Message/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var _components_Filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/Filter */ "./resources/js/src/components/Filter/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/Pagination */ "./resources/js/src/components/Pagination/index.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/Button */ "./resources/js/src/components/Button/index.js");
/* harmony import */ var _components_SweetAlert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/SweetAlert */ "./resources/js/src/components/SweetAlert/index.js");
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-icons/ri */ "./node_modules/react-icons/ri/index.esm.js");
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/Input */ "./resources/js/src/components/Input/index.js");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var _components_Select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/Select */ "./resources/js/src/components/Select/index.js");
/* harmony import */ var react_icons_gi__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-icons/gi */ "./node_modules/react-icons/gi/index.esm.js");
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/Card */ "./resources/js/src/components/Card/index.js");
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-icons/bi */ "./node_modules/react-icons/bi/index.esm.js");
/* harmony import */ var _Expenses_module_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Expenses.module.css */ "./resources/js/src/System/Admin/Expenses/Expenses.module.css");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





























var Expenses = function Expenses() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      show = _useState4[0],
      setShow = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      sweetShow = _useState6[0],
      setSweetShow = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('success'),
      _useState8 = _slicedToArray(_useState7, 2),
      sweetType = _useState8[0],
      setSweetType = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState10 = _slicedToArray(_useState9, 2),
      sweetText = _useState10[0],
      setSweetText = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState12 = _slicedToArray(_useState11, 2),
      sweetTitle = _useState12[0],
      setSweetTitle = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
      _useState14 = _slicedToArray(_useState13, 2),
      success = _useState14[0],
      setSuccess = _useState14[1];

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
      _useState16 = _slicedToArray(_useState15, 2),
      page = _useState16[0],
      setPage = _useState16[1];

  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState18 = _slicedToArray(_useState17, 2),
      expenses = _useState18[0],
      setExpenses = _useState18[1];

  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState20 = _slicedToArray(_useState19, 2),
      total = _useState20[0],
      setTotal = _useState20[1];

  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState22 = _slicedToArray(_useState21, 2),
      itemsCountPerPage = _useState22[0],
      setItemsCountPerPage = _useState22[1];

  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
      _useState24 = _slicedToArray(_useState23, 2),
      totalItemsCount = _useState24[0],
      setTotalItemsCount = _useState24[1];

  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState26 = _slicedToArray(_useState25, 2),
      idDelete = _useState26[0],
      setIdDelete = _useState26[1];

  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(new Date().toJSON().slice(0, 10)),
      _useState28 = _slicedToArray(_useState27, 2),
      from = _useState28[0],
      setFrom = _useState28[1];

  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(new Date().toJSON().slice(0, 10)),
      _useState30 = _slicedToArray(_useState29, 2),
      to = _useState30[0],
      setTo = _useState30[1];

  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState32 = _slicedToArray(_useState31, 2),
      allPaymentsForms = _useState32[0],
      setAllPaymentsForms = _useState32[1];

  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState34 = _slicedToArray(_useState33, 2),
      paymentChange = _useState34[0],
      setPaymentChange = _useState34[1];

  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState36 = _slicedToArray(_useState35, 2),
      loadingExpenses = _useState36[0],
      setLoadingExpenses = _useState36[1];

  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState38 = _slicedToArray(_useState37, 2),
      type = _useState38[0],
      setType = _useState38[1];

  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState40 = _slicedToArray(_useState39, 2),
      status = _useState40[0],
      setStatus = _useState40[1];

  var _useState41 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState42 = _slicedToArray(_useState41, 2),
      situation = _useState42[0],
      setSituation = _useState42[1];

  var _useState43 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState44 = _slicedToArray(_useState43, 2),
      send = _useState44[0],
      setSend = _useState44[1];

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_Hook_Context__WEBPACK_IMPORTED_MODULE_2__["default"]),
      token = _useContext.token,
      role = _useContext.role,
      user = _useContext.user;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    axios__WEBPACK_IMPORTED_MODULE_14___default().get('/api/v1/payment-forms', {
      headers: {
        Authorization: "Bearer ".concat(token)
      }
    }).then(function (response) {
      setAllPaymentsForms(response.data);
    });
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setLoadingExpenses(true);
    var params = {};
    params['page'] = page;
    params['from'] = from;
    params['to'] = to;
    +paymentChange ? params['payment_form_id'] = paymentChange : null;
    +type ? params['expenses_type_id'] = type : null;
    +status === 1 ? params['paid'] = 1 : +status === 2 ? params['paid'] = 0 : null;
    axios__WEBPACK_IMPORTED_MODULE_14___default().get('/api/v1/expenses?size=10', {
      headers: {
        Authorization: "Bearer ".concat(token)
      },
      params: params
    }).then(function (response) {
      setExpenses(response.data.data.data.map(function (item) {
        var datePayment = item.date_payment.split(' ')[0].split('-');
        datePayment = "".concat(datePayment[2], "/").concat(datePayment[1], "/").concat(datePayment[0]);
        var situation =  false ? /*#__PURE__*/0 : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("span", {
          className: 'text-success',
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(react_icons_gi__WEBPACK_IMPORTED_MODULE_16__.GiAlarmClock, {
            className: 'icon-left icon-success'
          }), "Em dias"]
        });
        return _objectSpread(_objectSpread({}, item), {}, {
          status: item.type.name === 'in' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("span", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(react_icons_ai__WEBPACK_IMPORTED_MODULE_17__.AiOutlineArrowUp, {
              className: 'icon-left icon-success'
            }), "Entrada"]
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("span", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(react_icons_ai__WEBPACK_IMPORTED_MODULE_17__.AiOutlineArrowDown, {
              className: 'icon-left icon-danger'
            }), "Sa\xEDda"]
          }),
          total: parseFloat(item.value).toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            style: 'currency',
            currency: 'BRL'
          }),
          date_payment: datePayment,
          payment_form: item.payment_form.name,
          url: item.payment_id ? "/orders/".concat(item.payment.cart_id) : item.payment_employee_advisor_id ? "/payments-employees/".concat(item.payment_employee_advisor_id) : "/expenses/".concat(item.id)
        });
      }));
      setTotal(response.data);
      setTotalItemsCount(response.data.data.total);
      setItemsCountPerPage(response.data.data.per_page);
    })["finally"](function () {
      setLoading(false);
      setLoadingExpenses(false);
    });
  }, [page, success, from, to, paymentChange, type, status]);
  var columns = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return [{
      Header: 'Id',
      accessor: 'id'
    }, {
      Header: 'Descrição',
      accessor: 'description'
    }, {
      Header: 'Status',
      accessor: 'status'
    }, {
      Header: 'Data',
      accessor: 'date_payment'
    }, {
      Header: 'Forma pgto.',
      accessor: 'payment_form'
    }, {
      Header: 'Total',
      accessor: 'total'
    }, {
      Header: 'Ação',
      Cell: function Cell(row) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.Fragment, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Link, {
            to: row.row.original.url,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(react_icons_io__WEBPACK_IMPORTED_MODULE_19__.IoMdSearch, {
              size: 20,
              color: "#2F4F4F"
            })
          })
        });
      }
    }];
  }, []);

  var deleteItem = function deleteItem() {
    setShow(false);
    axios__WEBPACK_IMPORTED_MODULE_14___default()["delete"]("/api/v1/expenses/".concat(idDelete), {
      headers: {
        Authorization: "Bearer ".concat(token)
      }
    }).then(function (response) {
      setSweetType('success');
      setSweetText('Operação realizada com sucesso');
      setSweetTitle('Sucesso');
      setSuccess(!success);
    })["catch"](function (err) {
      setSweetType('error');
      setSweetText(err.response.data.message);
      setSweetTitle('Erro');
    })["finally"](function () {
      return setSweetShow(true);
    });
  };

  var getPrint = function getPrint() {
    var params = {};
    params['from'] = from;
    params['to'] = to;
    params['pdf'] = true;
    axios__WEBPACK_IMPORTED_MODULE_14___default().get('/api/v1/expenses', {
      headers: {
        Authorization: "Bearer ".concat(token)
      },
      params: params
    }).then(function (response) {
      var _user$company;

      var logo = ((_user$company = user.company) === null || _user$company === void 0 ? void 0 : _user$company.imageLogoCode.length) > 15 ? user.company.imageLogoCode : '';
      document.getElementById('section-to-print').innerHTML = response.data.content_html.split('<body>')[1].split('</body>')[0];
      document.getElementById('logo').src = logo;
      window.print();
    });
  };

  var downloadExcel = function downloadExcel() {
    setSend(true);
    var params = {
      from: from,
      to: to,
      excel: true
    };
    axios__WEBPACK_IMPORTED_MODULE_14___default().get("/api/v1/expenses", {
      responseType: 'blob',
      headers: {
        "Authorization": "Bearer ".concat(token)
      },
      params: params
    }).then(function (response) {
      var url = window.URL.createObjectURL(new Blob([response.data]));
      var link = document.createElement('a');
      link.href = url;
      var fromTreated = from.split('-');
      fromTreated = "".concat(fromTreated[2], "/").concat(fromTreated[1], "/").concat(fromTreated[0]);
      var toTreated = to.split('-');
      toTreated = "".concat(toTreated[2], "/").concat(toTreated[1], "/").concat(toTreated[0]);
      link.setAttribute('download', "Entradas_sa\xEDdas_".concat(fromTreated, " - ").concat(toTreated, ".xlsx"));
      document.body.appendChild(link);
      link.click();
    })["finally"](function () {
      return setSend(false);
    });
  };

  if (loading) return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_Spinner__WEBPACK_IMPORTED_MODULE_4__["default"], {});
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
      id: "section-to-print"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_HeaderButtonPage__WEBPACK_IMPORTED_MODULE_1__["default"], {
      h1: 'Entrada/Saída',
      type: 'store',
      to: '/expenses/create',
      showStore: true
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_Filter__WEBPACK_IMPORTED_MODULE_6__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_20__["default"], {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_21__["default"], {
          lg: 3,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_Input__WEBPACK_IMPORTED_MODULE_10__["default"], {
            label: 'Período inicial',
            value: from,
            type: 'date',
            onChange: function onChange(e) {
              return setFrom(e.target.value);
            }
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_21__["default"], {
          lg: 3,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_Input__WEBPACK_IMPORTED_MODULE_10__["default"], {
            label: 'Período final',
            value: to,
            type: 'date',
            onChange: function onChange(e) {
              return setTo(e.target.value);
            }
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_21__["default"], {
          lg: 3,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_components_Select__WEBPACK_IMPORTED_MODULE_11__["default"], {
            onChange: function onChange(e) {
              return setType(e.target.value);
            },
            value: type,
            label: 'Tipo',
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("option", {
              value: 0,
              children: "Todos"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("option", {
              value: 2,
              children: "Sa\xEDda"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("option", {
              value: 1,
              children: "Entrada"
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_21__["default"], {
          lg: 3,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_components_Select__WEBPACK_IMPORTED_MODULE_11__["default"], {
            onChange: function onChange(e) {
              return setPaymentChange(e.target.value);
            },
            value: paymentChange,
            label: 'Tipo de pgto.',
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("option", {
              value: 0,
              children: "Todos"
            }), allPaymentsForms.map(function (payment) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("option", {
                value: payment.id,
                children: payment.name
              }, payment.id);
            })]
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_20__["default"], {
      className: 'd-flex justify-content-end',
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_21__["default"], {
        md: 3,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_components_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
          disabled: send,
          onClick: downloadExcel,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(react_icons_ri__WEBPACK_IMPORTED_MODULE_22__.RiFileExcel2Line, {
            style: {
              fill: "white"
            },
            className: 'icon-left'
          }), " Excel ", send && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_Spinner__WEBPACK_IMPORTED_MODULE_4__["default"], {
            size: 'small'
          })]
        })
      })
    }), loadingExpenses ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_Spinner__WEBPACK_IMPORTED_MODULE_4__["default"], {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.Fragment, {
      children: [expenses.length ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_Table__WEBPACK_IMPORTED_MODULE_3__["default"], {
        columns: columns,
        data: expenses
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_Message__WEBPACK_IMPORTED_MODULE_5__["default"], {
        type: 'info',
        children: "Nenhuma despesa registrada per\xEDodo"
      }), totalItemsCount > itemsCountPerPage && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_Pagination__WEBPACK_IMPORTED_MODULE_7__["default"], {
        handlePageChange: function handlePageChange(e) {
          return setPage(e);
        },
        activePage: page,
        itemsCountPerPage: itemsCountPerPage,
        totalItemsCount: totalItemsCount,
        pageRangeDisplayed: 5
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_20__["default"], {
      className: _Expenses_module_css__WEBPACK_IMPORTED_MODULE_13__["default"].Border,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_21__["default"], {
        md: '3',
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_Card__WEBPACK_IMPORTED_MODULE_12__["default"], {
          type: 'model-3',
          title: 'Total entradas',
          icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(react_icons_ai__WEBPACK_IMPORTED_MODULE_17__.AiOutlineArrowUp, {
            className: "icon-left icon-success",
            size: 50
          }),
          value: parseFloat(total.total_in).toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            style: 'currency',
            currency: 'BRL'
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_21__["default"], {
        md: '3',
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_Card__WEBPACK_IMPORTED_MODULE_12__["default"], {
          type: 'model-3',
          title: 'Total saída',
          icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(react_icons_ai__WEBPACK_IMPORTED_MODULE_17__.AiOutlineArrowDown, {
            className: "icon-left icon-danger",
            size: 50
          }),
          value: parseFloat(total.total_out).toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            style: 'currency',
            currency: 'BRL'
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_21__["default"], {
        md: '3',
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_Card__WEBPACK_IMPORTED_MODULE_12__["default"], {
          type: 'model-3',
          title: 'Saldo do caixa',
          icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(react_icons_ri__WEBPACK_IMPORTED_MODULE_22__.RiMoneyDollarCircleLine, {
            className: "icon-left",
            size: 50
          }),
          value: (parseFloat(total.total_in) - parseFloat(total.total_out)).toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            style: 'currency',
            currency: 'BRL'
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_21__["default"], {
        md: '3',
        className: 'd-flex justify-content-end',
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("button", {
          className: _Expenses_module_css__WEBPACK_IMPORTED_MODULE_13__["default"].Print,
          onClick: getPrint,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
            children: "Impress\xE3o"
          }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(react_icons_bi__WEBPACK_IMPORTED_MODULE_23__.BiPrinter, {
            size: 30,
            style: {
              fill: "white"
            }
          })]
        })
      })]
    }), role === 'clerk' ? null : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_20__["default"], {
      className: _Expenses_module_css__WEBPACK_IMPORTED_MODULE_13__["default"].ResultGeneral,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_21__["default"], {
        md: '3',
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_Card__WEBPACK_IMPORTED_MODULE_12__["default"], {
          type: 'model-3',
          title: 'Custo produtos vendidos',
          icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(react_icons_ri__WEBPACK_IMPORTED_MODULE_22__.RiMoneyDollarCircleLine, {
            className: "icon-left icon-danger",
            size: 45
          }),
          value: parseFloat(total.total_products_sold).toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            style: 'currency',
            currency: 'BRL'
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_21__["default"], {
        md: '3',
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_Card__WEBPACK_IMPORTED_MODULE_12__["default"], {
          type: 'model-3',
          title: 'Resultado geral',
          icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(react_icons_ri__WEBPACK_IMPORTED_MODULE_22__.RiMoneyDollarCircleLine, {
            className: "icon-left icon-success",
            size: 45
          }),
          value: (parseFloat(total.total_in) - parseFloat(total.total_out) - parseFloat(total.total_products_sold)).toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            style: 'currency',
            currency: 'BRL'
          })
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_SweetAlert__WEBPACK_IMPORTED_MODULE_9__["default"], {
      onConfirm: deleteItem,
      onCancel: function onCancel() {
        return setShow(false);
      },
      showCancel: true,
      title: 'Atenção',
      type: 'warning',
      btnConfirmStyle: 'success',
      text: 'Tem certeza que deseja excluir despesa ?',
      show: show,
      confirmBtnText: 'Ok',
      cancelBtnText: 'Cancelar',
      closeOnClickOutside: false
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_SweetAlert__WEBPACK_IMPORTED_MODULE_9__["default"], {
      onConfirm: function onConfirm() {
        return setSweetShow(false);
      },
      title: sweetTitle,
      type: sweetType,
      btnConfirmStyle: 'success',
      text: sweetText,
      show: sweetShow,
      confirmBtnText: 'Ok',
      closeOnClickOutside: false
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Expenses);

/***/ }),

/***/ "./resources/js/src/components/Card/Quantity/index.js":
/*!************************************************************!*\
  !*** ./resources/js/src/components/Card/Quantity/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Quantity_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Quantity.module.css */ "./resources/js/src/components/Card/Quantity/Quantity.module.css");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var _InputMoney__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../InputMoney */ "./resources/js/src/components/InputMoney/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");









var Quantity = function Quantity(_ref) {
  var quantity = _ref.quantity,
      quantitySelected = _ref.quantitySelected,
      setConfigsChange = _ref.setConfigsChange;

  var addQuantity = function addQuantity() {
    var quantityTreated = null;

    if (quantitySelected + 1 > quantity) {
      quantityTreated = quantity;
    } else {
      quantityTreated = quantitySelected + 1;
    }

    var e = {
      target: {
        name: "quantity_selected",
        value: quantityTreated
      }
    };
    setConfigsChange(e);
  };

  var removeQuantity = function removeQuantity() {
    var quantityTreated = null;

    if (quantitySelected - 1 < 0) {
      quantityTreated = 0;
    } else {
      quantityTreated = quantitySelected - 1;
    }

    var e = {
      target: {
        name: "quantity_selected",
        value: quantityTreated
      }
    };
    setConfigsChange(e);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: 'd-flex align-items-end',
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
          onClick: removeQuantity,
          className: _Quantity_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].Remove,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_md__WEBPACK_IMPORTED_MODULE_6__.MdOutlineRemoveCircleOutline, {
            style: {
              fill: "white"
            },
            size: 25
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
        xs: 4,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: _Quantity_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].Quantity,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
            type: 'mask',
            max: quantity,
            value: quantitySelected,
            onChange: setConfigsChange,
            name: 'quantity_selected'
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
          onClick: addQuantity,
          className: _Quantity_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].Add,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_icons_io__WEBPACK_IMPORTED_MODULE_7__.IoMdAddCircleOutline, {
            style: {
              fill: "white"
            },
            size: 25
          })
        })
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Quantity);

/***/ }),

/***/ "./resources/js/src/components/Card/index.js":
/*!***************************************************!*\
  !*** ./resources/js/src/components/Card/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.module.css */ "./resources/js/src/components/Card/Card.module.css");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Nav.js");
/* harmony import */ var _Quantity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Quantity */ "./resources/js/src/components/Card/Quantity/index.js");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");
/* harmony import */ var _Hook_Context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Hook/Context */ "./resources/js/src/Hook/Context.js");
/* harmony import */ var _Hook_util_help__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Hook/util/help */ "./resources/js/src/Hook/util/help.js");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Button */ "./resources/js/src/components/Button/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util */ "./resources/js/src/components/Card/util.js");
/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Message */ "./resources/js/src/components/Message/index.js");
/* harmony import */ var _InputMoney__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../InputMoney */ "./resources/js/src/components/InputMoney/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _excluded = ["showBigger", "setShowBigger", "product", "setProducts", "index", "products", "title", "footer", "type", "value", "children", "icon", "color", "render", "renderDelete", "renderInput", "size", "setConfigs", "allProducts", "setIndexChanged", "setProductsSize", "info", "id"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




















var Card = function Card(_ref) {
  var showBigger = _ref.showBigger,
      setShowBigger = _ref.setShowBigger,
      product = _ref.product,
      setProducts = _ref.setProducts,
      index = _ref.index,
      products = _ref.products,
      title = _ref.title,
      footer = _ref.footer,
      type = _ref.type,
      value = _ref.value,
      children = _ref.children,
      icon = _ref.icon,
      color = _ref.color,
      render = _ref.render,
      renderDelete = _ref.renderDelete,
      renderInput = _ref.renderInput,
      size = _ref.size,
      setConfigs = _ref.setConfigs,
      allProducts = _ref.allProducts,
      setIndexChanged = _ref.setIndexChanged,
      setProductsSize = _ref.setProductsSize,
      info = _ref.info,
      id = _ref.id,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_Hook_Context__WEBPACK_IMPORTED_MODULE_3__["default"]),
      addItemCart = _useContext.addItemCart,
      removeItemCart = _useContext.removeItemCart,
      role = _useContext.role,
      token = _useContext.token;

  if (children && !type) {
    var renderModal = function renderModal() {
      setShowBigger(true);
    };

    var renderContent = function renderContent() {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
          className: 'd-flex justify-content-center',
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h4", {
            children: title
          })
        }), children]
      });
    };

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: _Card_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].Card,
        id: id,
        children: [title ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
          className: 'd-flex justify-content-between',
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h4", {
            children: title
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("button", {
            onClick: function onClick() {
              return renderModal();
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_icons_bs__WEBPACK_IMPORTED_MODULE_10__.BsEye, {
              className: _Card_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].IconEyes
            })
          })]
        }) : null, children]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
        show: showBigger,
        size: "lg",
        "aria-labelledby": "contained-modal-title-vcenter",
        centered: true,
        onHide: function onHide() {
          return setShowBigger(false);
        },
        animation: true,
        style: {
          textAlign: "center"
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"].Header, {
          closeButton: function closeButton() {
            return setShowBigger(false);
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"].Title, {
            style: {
              width: "100%"
            },
            id: "contained-modal-title-vcenter"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"].Body, {
          children: renderContent()
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"].Footer, {})]
      })]
    });
  }

  if (type === 'model-1') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      className: _Card_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].Card,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"], {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["default"], {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h2", {
            className: "text-start fw-bold",
            children: (0,_Hook_util_help__WEBPACK_IMPORTED_MODULE_4__.firstLetterUppercase)(title)
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"], {
        className: "m-4",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["default"], {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h1", {
            className: "text-center fw-bold",
            children: value
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"], {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"], {
          className: "d-flex justify-content-center",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["default"], {
            sm: 5,
            className: 'text-center',
            children: footer
          })
        })
      })]
    });
  } else if (type === 'model-2') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      className: _Card_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].Card,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: "d-flex align-items-center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
          children: icon
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
          className: "h2 mt-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h4", {
            className: 'text-center',
            style: {
              textTransform: "uppercase"
            },
            children: title
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
            className: 'text-center',
            children: value
          })]
        })]
      })
    });
  } else if (type === 'model-3') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      className: _Card_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].Card3,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: _Card_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].Card3Container,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
          children: icon
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
          className: "h2 mt-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h5", {
            className: 'text-center',
            style: {
              textTransform: "uppercase"
            },
            children: title
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
            className: 'text-center',
            children: value
          })]
        })]
      })
    });
  } else if (type === 'model-4') {
    var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
        _useState2 = _slicedToArray(_useState, 2),
        addItem = _useState2[0],
        setAddItem = _useState2[1];

    var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
        _useState4 = _slicedToArray(_useState3, 2),
        subTotal = _useState4[0],
        setSubTotal = _useState4[1];

    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
      var totalCard = 0;

      for (var i = 0; i < props.configs.length; i++) {
        for (var j = 0; j < props.configs[i].length; j++) {
          if (props.configs[i][j].product_id === info.id) {
            for (var k = 0; k < props.configs[i].length; k++) {
              totalCard = totalCard + parseFloat(props.configs[i][k].price_final) * +props.configs[i][k].quantityChanged;
            }

            break;
          }
        }
      }

      if (products) {
        for (var _i2 = 0; _i2 < products.length; _i2++) {
          for (var _j = 0; _j < products[_i2].length; _j++) {
            if (products[_i2][_j].product_id === info.id) {
              setAddItem(true);
              break;
            }
          }
        }

        setSubTotal(totalCard);
      }
    }, [size, props.configs]);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      className: "".concat(_Card_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].Card4),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
        style: {
          width: "80%",
          margin: "0 auto"
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h1", {
          children: (0,_Hook_util_help__WEBPACK_IMPORTED_MODULE_4__.firstLetterUppercase)(info.name)
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
        style: {
          display: 'flex',
          justifyContent: "center",
          height: '250px'
        },
        children: info.image && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("img", {
          className: _Card_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].Image,
          src: window.location.pathname.split('/')[0] + '/product/image' + "?image=".concat(info.image)
        })
      }), render ? render : null, renderInput, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"], {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["default"], {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Link, {
            to: "/products/" + info.id,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_components_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_icons_ai__WEBPACK_IMPORTED_MODULE_15__.AiTwotoneEdit, {
                className: 'icon icon-left',
                type: 'button'
              }), "Editar"]
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["default"], {
          children: renderDelete()
        })]
      })]
    });
  } else if (type === 'model-5') {
    var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
        _useState6 = _slicedToArray(_useState5, 2),
        _addItem = _useState6[0],
        _setAddItem = _useState6[1];

    var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
        _useState8 = _slicedToArray(_useState7, 2),
        quantity = _useState8[0],
        setQuantity = _useState8[1];

    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
      var _JSON$parse;

      var products = (_JSON$parse = JSON.parse(localStorage.getItem('@QuickSale:cart'))) === null || _JSON$parse === void 0 ? void 0 : _JSON$parse.products;

      if (products) {
        for (var i = 0; i < products.length; i++) {
          for (var j = 0; j < products[i].length; j++) {
            if (products[i][j].product_id === info.id) {
              _setAddItem(true);

              break;
            }
          }
        }
      }
    }, [size]);

    var addItemChange = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var copyProducts, response, copyCart;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_addItem) {
                  _context.next = 5;
                  break;
                }

                _setAddItem(true);

                addItemCart(props.configs[props.index]);
                _context.next = 17;
                break;

              case 5:
                removeItemCart(JSON.stringify(props.configs[props.index]));
                copyProducts = [];
                allProducts.forEach(function (item) {
                  if (+item.id !== +props.configs[props.index][0].product_id) {
                    copyProducts.push(item);
                  }
                });
                setProducts(copyProducts);

                _setAddItem(false);

                _context.next = 12;
                return (0,_util__WEBPACK_IMPORTED_MODULE_6__.updateProductsApi)(token);

              case 12:
                response = _context.sent;
                setIndexChanged(response.new_array_indexes);
                setProductsSize(response.products_size_treated);
                setProducts(response.products);
                setConfigsChange(response.products_size_treated);

              case 17:
                copyCart = JSON.parse(localStorage.getItem('@QuickSale:cart'));
                setConfigs(copyCart.products);

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function addItemChange() {
        return _ref2.apply(this, arguments);
      };
    }();

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      className: "".concat(_Card_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].Card5),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        style: {
          width: "80%",
          margin: "0 auto"
        },
        children: [role !== 'seller' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h1", {
          children: (0,_Hook_util_help__WEBPACK_IMPORTED_MODULE_4__.firstLetterUppercase)(info.brand.name)
        }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h1", {
          children: (0,_Hook_util_help__WEBPACK_IMPORTED_MODULE_4__.firstLetterUppercase)(info.name)
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: 'd-flex',
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
            style: {
              display: 'flex',
              justifyContent: "center",
              height: '180px'
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("img", {
              className: _Card_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].Image,
              src: info.imageProductCode
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
          style: {
            margin: "auto 0"
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Quantity__WEBPACK_IMPORTED_MODULE_2__["default"], {
            quantity: quantity,
            setConfigsChange: setConfigsChange,
            index: props.index,
            indexChanged: props.indexChanged,
            configs: props.configs
          }), role === 'seller' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"], {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["default"], {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("button", {
                className: !_addItem ? _Card_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].ButtonCart : _Card_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].ButtonRemove,
                onClick: addItemChange,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_icons_bs__WEBPACK_IMPORTED_MODULE_10__.BsCart4, {
                  style: {
                    fill: "white"
                  },
                  size: 25
                }), !_addItem ? "Adicionar" : "Remover"]
              })
            })
          }) : null]
        })]
      }), render ? render : null, renderInput ? renderInput : null]
    });
  } else if (type === 'model-product') {
    var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
        _useState10 = _slicedToArray(_useState9, 2),
        indexSize = _useState10[0],
        setIndexSize = _useState10[1];

    var _setConfigsChange = function _setConfigsChange(e) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'config';
      var productsStorageTreated = [];

      var copyProducts = _toConsumableArray(products);

      if (type === 'config') {
        var configsTreated = _toConsumableArray(copyProducts[index].configs);

        configsTreated[indexSize] = _objectSpread(_objectSpread({}, configsTreated[indexSize]), {}, _defineProperty({}, e.target.name, e.target.value));
        copyProducts[index] = _objectSpread(_objectSpread({}, copyProducts[index]), {}, {
          configs: configsTreated
        });
        setProducts(copyProducts);
        var productsStorage = JSON.parse(localStorage.getItem('@QuickSale:products'));
        var verify = false;

        var _loop = function _loop(i) {
          var productChanged = {};

          if (+productsStorage[i].id === +copyProducts[index].id && !verify) {
            if (!verify) {
              for (var j = 0; j < productsStorage[i].configs.length; j++) {
                if (+copyProducts[index].configs[indexSize].id === +productsStorage[i].configs[j].id) {
                  productChanged = copyProducts[index].configs[indexSize];
                  verify = true;
                  break;
                }
              }
            }
          }

          if (!(0,_Hook_util_help__WEBPACK_IMPORTED_MODULE_4__.isObjectEmpty)(productChanged)) {
            var _configsTreated = [];
            productsStorage[i].configs.forEach(function (config) {
              if (+config.id === +productChanged.id) {
                _configsTreated.push(productChanged);
              } else {
                _configsTreated.push(config);
              }
            });
            productsStorageTreated.push(_objectSpread(_objectSpread({}, productsStorage[i]), {}, {
              configs: _configsTreated
            }));
          } else {
            productsStorageTreated.push(productsStorage[i]);
          }
        };

        for (var i = 0; i < productsStorage.length; i++) {
          _loop(i);
        }

        localStorage.setItem('@QuickSale:products', JSON.stringify(productsStorageTreated));
      } else {
        var _copyProducts$index;

        copyProducts[index] = _objectSpread(_objectSpread({}, copyProducts[index]), {}, _defineProperty({}, e.target.name, e.target.value));

        var oldValue = _toConsumableArray(copyProducts);

        copyProducts[index] = (_copyProducts$index = {}, _defineProperty(_copyProducts$index, e.target.name, e.target.value), _defineProperty(_copyProducts$index, "configs", copyProducts[index].configs), _defineProperty(_copyProducts$index, "id", copyProducts[index].id), _defineProperty(_copyProducts$index, "name", copyProducts[index].name), _defineProperty(_copyProducts$index, "image", copyProducts[index].image), _copyProducts$index);
        setProducts(oldValue);

        var _productsStorage = JSON.parse(localStorage.getItem('@QuickSale:products'));

        _productsStorage.forEach(function (item) {
          if (+item.id === +copyProducts[index].id) {
            productsStorageTreated.push(copyProducts[index]);
          } else {
            productsStorageTreated.push(item);
          }
        });

        localStorage.setItem('@QuickSale:products', JSON.stringify(productsStorageTreated));
      }
    };

    var calculateSubtotal = function calculateSubtotal(configs) {
      var total = 0;
      configs.forEach(function (config) {
        total = total + config.quantity_selected * config.price_final;
      });
      return total;
    };

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      className: "".concat(_Card_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].Card4),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        style: {
          width: "80%",
          margin: "0 auto"
        },
        children: [role !== 'seller' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h1", {
          children: (0,_Hook_util_help__WEBPACK_IMPORTED_MODULE_4__.firstLetterUppercase)(product.brand.name)
        }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h1", {
          children: (0,_Hook_util_help__WEBPACK_IMPORTED_MODULE_4__.firstLetterUppercase)(product.name)
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        style: {
          display: 'flex',
          justifyContent: "center",
          height: '250px',
          flexDirection: "column"
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("img", {
          className: _Card_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].Image,
          src: window.location.pathname.split('/')[0] + '/product/image' + "?image=".concat(product.image)
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
          className: 'd-flex justify-content-center',
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["default"], {
            variant: "pills",
            defaultActiveKey: product.configs[0].size_name,
            children: product.configs.map(function (item, index) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["default"].Item, {
                onClick: function onClick() {
                  return setIndexSize(index);
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__["default"].Link, {
                  eventKey: item.size_name,
                  children: item.size_name
                })
              }, item.id);
            })
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"], {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["default"], {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_InputMoney__WEBPACK_IMPORTED_MODULE_8__["default"], {
            className: 'border',
            label: 'Preço de venda',
            value: product.configs[indexSize].price_final,
            onChange: function onChange(e, value) {
              var eTreated = {
                target: {
                  name: "price_final",
                  value: value
                }
              };

              _setConfigsChange(eTreated);
            }
          }), parseFloat(product.configs[indexSize].price_final) < parseFloat(product.configs[indexSize].price) ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Message__WEBPACK_IMPORTED_MODULE_7__["default"], {
            type: "error",
            children: ["Valor inferior \xE0 ", parseFloat(product.configs[indexSize].price).toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
              style: 'currency',
              currency: 'BRL'
            })]
          }) : null]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["default"], {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_InputMoney__WEBPACK_IMPORTED_MODULE_8__["default"], {
            label: 'Subtotal',
            disabled: true,
            value: calculateSubtotal(product.configs)
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Quantity__WEBPACK_IMPORTED_MODULE_2__["default"], {
        quantity: +product.configs[indexSize].quantity,
        quantitySelected: +product.configs[indexSize].quantity_selected,
        setConfigsChange: _setConfigsChange
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("button", {
        onClick: function onClick() {
          var copyProducts = _toConsumableArray(products);

          copyProducts[index] = _objectSpread(_objectSpread({}, copyProducts[index]), {}, {
            add_cart: !copyProducts[index].add_cart
          });
          setProducts(copyProducts);
          var e = {
            target: {
              name: "add_cart",
              value: copyProducts[index].add_cart
            }
          };

          _setConfigsChange(e, type = 'cart');

          props.setShowItemCart(props.showIconCart());
        },
        className: !product.add_cart ? _Card_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].ButtonCart : _Card_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].ButtonRemove,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_icons_bs__WEBPACK_IMPORTED_MODULE_10__.BsCart4, {
          style: {
            fill: "white"
          },
          size: 25
        }), !product.add_cart ? "Adicionar ao carrinho" : "Remover do carrinho"]
      })]
    });
  } else if (type === 'model-chart') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      className: _Card_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].ModelChart,
      children: children
    });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

/***/ }),

/***/ "./resources/js/src/components/Card/util.js":
/*!**************************************************!*\
  !*** ./resources/js/src/components/Card/util.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateProductsApi": () => (/* binding */ updateProductsApi)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var updateProductsApi = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(token) {
    var _cart$products;

    var params, cart, productsTreated, _JSON$parse, i, j, response, productsSizeTreated, configTreated, products, newArrayIndexes, data;

    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            params = {};
            cart = JSON.parse(localStorage.getItem('@QuickSale:cart'));
            productsTreated = [];

            if (!(cart !== null && cart !== void 0 && (_cart$products = cart.products) !== null && _cart$products !== void 0 && _cart$products.length)) {
              _context.next = 19;
              break;
            }

            for (i = 0; i < cart.products.length; i++) {
              for (j = 0; j < cart.products[i].length; j++) {
                productsTreated.push(cart.products[i][j]);
              }
            }

            _context.next = 7;
            return axios__WEBPACK_IMPORTED_MODULE_0___default().post("/api/v1/orders/products", {
              products: productsTreated
            }, {
              headers: {
                Authorization: "Bearer ".concat(token)
              },
              params: params
            });

          case 7:
            response = _context.sent;
            productsSizeTreated = new Array(response.data.length);
            configTreated = new Array(response.data.length);
            products = (_JSON$parse = JSON.parse(localStorage.getItem('@QuickSale:cart'))) === null || _JSON$parse === void 0 ? void 0 : _JSON$parse.products;
            newArrayIndexes = [];
            response.data.forEach(function (product, index) {
              newArrayIndexes.push(0);
              productsSizeTreated[index] = [];
              configTreated[index] = [];
              product.configs.forEach(function (config) {
                productsSizeTreated[index].push(config.size);

                if (products) {
                  var verify = false;

                  for (var _i = 0; _i < products.length; _i++) {
                    for (var _j = 0; _j < products[_i].length; _j++) {
                      if (products[_i][_j].id === config.id) {
                        verify = true;
                        configTreated[index].push(_objectSpread(_objectSpread({}, config), {}, {
                          quantityChanged: products[_i][_j].quantityChanged,
                          price_final: products[_i][_j].price_final
                        }));
                        break;
                      }
                    }
                  }

                  if (!verify) configTreated[index].push(_objectSpread(_objectSpread({}, config), {}, {
                    quantityChanged: 0
                  }));
                } else {
                  configTreated[index].push(_objectSpread(_objectSpread({}, config), {}, {
                    quantityChanged: 0
                  }));
                }
              });
            });
            data = {};
            data['new_array_indexes'] = newArrayIndexes;
            data['config_treated'] = configTreated;
            data['products_size_treated'] = productsSizeTreated;
            data['products'] = response.data;
            return _context.abrupt("return", data);

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function updateProductsApi(_x) {
    return _ref.apply(this, arguments);
  };
}();



/***/ }),

/***/ "./resources/js/src/components/Filter/index.js":
/*!*****************************************************!*\
  !*** ./resources/js/src/components/Filter/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Filter_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Filter.module.css */ "./resources/js/src/components/Filter/Filter.module.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var Filter = function Filter(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: _Filter_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].Filter,
    children: children
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Filter);

/***/ }),

/***/ "./resources/js/src/components/HeaderButtonPage/index.js":
/*!***************************************************************!*\
  !*** ./resources/js/src/components/HeaderButtonPage/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _HeaderButtonPage_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderButtonPage.module.css */ "./resources/js/src/components/HeaderButtonPage/HeaderButtonPage.module.css");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Button */ "./resources/js/src/components/Button/index.js");
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/ri */ "./node_modules/react-icons/ri/index.esm.js");
/* harmony import */ var _Hook_Context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Hook/Context */ "./resources/js/src/Hook/Context.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var _Hook_util_help__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Hook/util/help */ "./resources/js/src/Hook/util/help.js");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");












var HeaderButtonPage = function HeaderButtonPage(_ref) {
  var type = _ref.type,
      to = _ref.to,
      h1 = _ref.h1,
      h2 = _ref.h2,
      showStore = _ref.showStore;

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_Hook_Context__WEBPACK_IMPORTED_MODULE_3__["default"]),
      user = _useContext.user,
      role = _useContext.role;

  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useNavigate)();

  if (type === 'store') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: _HeaderButtonPage_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].SpaceManu,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
          lg: 10,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h1", {
            children: h1
          })
        }), ((0,_Hook_util_help__WEBPACK_IMPORTED_MODULE_4__.checkUser)(user, 'admin') || (0,_Hook_util_help__WEBPACK_IMPORTED_MODULE_4__.checkUser)(user, 'master') || showStore) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
          lg: 2,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, {
            to: to,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
              type: 'button',
              children: ["Cadastrar", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_icons_ri__WEBPACK_IMPORTED_MODULE_10__.RiAddCircleLine, {
                className: _HeaderButtonPage_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].Icon
              })]
            })
          })
        })]
      })
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "".concat(_HeaderButtonPage_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].SpaceManu, " ").concat(_HeaderButtonPage_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].Back),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      children: role === 'seller' ? null : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
        back: true,
        onClick: function onClick() {
          return navigate(-1);
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_icons_bs__WEBPACK_IMPORTED_MODULE_11__.BsArrowLeft, {
          className: _HeaderButtonPage_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].Icon
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h2", {
      className: 'mt-4',
      children: h2
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {})]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderButtonPage);

/***/ }),

/***/ "./resources/js/src/components/InputMoney/index.js":
/*!*********************************************************!*\
  !*** ./resources/js/src/components/InputMoney/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_intl_currency_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl-currency-input */ "./node_modules/react-intl-currency-input/dist/index.js");
/* harmony import */ var _InputMoney_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InputMoney.module.css */ "./resources/js/src/components/InputMoney/InputMoney.module.css");
/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Message */ "./resources/js/src/components/Message/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







var InputMoney = function InputMoney(props) {
  var _props$id, _props$id2;

  var currencyConfig = {
    locale: "pt-BR",
    formats: {
      number: {
        BRL: {
          style: "currency",
          currency: "BRL",
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        }
      }
    }
  };
  var randomId = Math.floor(Math.random() * (10000 - 1 + 1)) + 1;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "".concat(_InputMoney_module_css__WEBPACK_IMPORTED_MODULE_2__["default"][props.className] === 'border' ? "".concat(_InputMoney_module_css__WEBPACK_IMPORTED_MODULE_2__["default"][props.className], " ").concat(_InputMoney_module_css__WEBPACK_IMPORTED_MODULE_2__["default"].FormGroup) : "".concat(_InputMoney_module_css__WEBPACK_IMPORTED_MODULE_2__["default"][props.className] && _InputMoney_module_css__WEBPACK_IMPORTED_MODULE_2__["default"][props.className] !== 'border' ? _InputMoney_module_css__WEBPACK_IMPORTED_MODULE_2__["default"][props.className] : _InputMoney_module_css__WEBPACK_IMPORTED_MODULE_2__["default"].FormGroup)),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
      htmlFor: (_props$id = props.id) !== null && _props$id !== void 0 ? _props$id : randomId.toString(),
      children: props.label
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_intl_currency_input__WEBPACK_IMPORTED_MODULE_1__["default"], {
      currency: "BRL",
      config: currencyConfig,
      required: props.required,
      id: (_props$id2 = props.id) !== null && _props$id2 !== void 0 ? _props$id2 : randomId.toString(),
      onChange: props.onChange,
      onKeyUp: props.onKeyUp,
      onBlur: props.onBlur,
      placeholder: props.placeholder,
      min: props.min,
      className: "".concat("".concat(_InputMoney_module_css__WEBPACK_IMPORTED_MODULE_2__["default"][props.className] === 'border' ? "".concat(_InputMoney_module_css__WEBPACK_IMPORTED_MODULE_2__["default"][props.className], " ").concat(_InputMoney_module_css__WEBPACK_IMPORTED_MODULE_2__["default"].Input) : "".concat(_InputMoney_module_css__WEBPACK_IMPORTED_MODULE_2__["default"][props.className] && _InputMoney_module_css__WEBPACK_IMPORTED_MODULE_2__["default"][props.className] !== 'border' ? _InputMoney_module_css__WEBPACK_IMPORTED_MODULE_2__["default"][props.className] : _InputMoney_module_css__WEBPACK_IMPORTED_MODULE_2__["default"].Input))),
      type: 'string',
      value: props.value,
      maxLength: props.maxLength,
      disabled: props.disabled,
      style: props.style
    }), props.value < props.min && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_Message__WEBPACK_IMPORTED_MODULE_3__["default"], {
      type: 'error',
      children: ["Valor m\xEDnimo ", props.min.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        style: 'currency',
        currency: 'BRL'
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputMoney);

/***/ }),

/***/ "./resources/js/src/components/Message/index.js":
/*!******************************************************!*\
  !*** ./resources/js/src/components/Message/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Message_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Message.module.css */ "./resources/js/src/components/Message/Message.module.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var Message = function Message(props) {
  if (props.type === 'simple') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: _Message_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].Simple,
      children: props.children
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: _Message_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].Message,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: props.type ? _Message_module_css__WEBPACK_IMPORTED_MODULE_1__["default"][props.type] : null,
      children: props.children
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Message);

/***/ }),

/***/ "./resources/js/src/components/Pagination/index.js":
/*!*********************************************************!*\
  !*** ./resources/js/src/components/Pagination/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Paginate_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Paginate.module.css */ "./resources/js/src/components/Pagination/Paginate.module.css");
/* harmony import */ var react_js_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-js-pagination */ "./node_modules/react-js-pagination/dist/Pagination.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var Pagination = function Pagination(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: _Paginate_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].Paginate,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_js_pagination__WEBPACK_IMPORTED_MODULE_2__["default"], {
      activePage: props.activePage,
      itemsCountPerPage: props.itemsCountPerPage,
      totalItemsCount: props.totalItemsCount,
      pageRangeDisplayed: props.pageRangeDisplayed,
      innerClass: 'pagination',
      itemClass: "page-item",
      linkClass: "page-link",
      activeLinkClass: 'active',
      onChange: props.handlePageChange,
      lastPageText: props.lastPageText,
      firstPageText: props.firstPageText
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pagination);

/***/ }),

/***/ "./resources/js/src/components/Select/index.js":
/*!*****************************************************!*\
  !*** ./resources/js/src/components/Select/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Select_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Select.module.css */ "./resources/js/src/components/Select/Select.module.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var Select = function Select(props) {
  var _props$id, _props$id2;

  var randomId = Math.floor(Math.random() * (10000 - 1 + 1)) + 1;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: _Select_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].FormGroup,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("label", {
      htmlFor: (_props$id = props.id) !== null && _props$id !== void 0 ? _props$id : randomId.toString(),
      children: [props.label, " ", props.required ? '*' : null]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("select", {
      disabled: props.disabled,
      name: props.name,
      value: props.value,
      onChange: props.onChange,
      placeholder: props.placeholder,
      id: (_props$id2 = props.id) !== null && _props$id2 !== void 0 ? _props$id2 : randomId.toString(),
      className: _Select_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].Select,
      onBlur: props.onBlur,
      required: props.required,
      defaultValue: props.defaultValue,
      children: props.children
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Select);

/***/ }),

/***/ "./resources/js/src/components/Spinner/index.js":
/*!******************************************************!*\
  !*** ./resources/js/src/components/Spinner/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Spinner_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Spinner.css */ "./resources/js/src/components/Spinner/Spinner.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var Spinner = function Spinner(_ref) {
  var className = _ref.className,
      size = _ref.size;

  if (size === 'small') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "sk-fading-circle ".concat(className),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "sk-circle1 sk-circle"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "sk-circle2 sk-circle"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "sk-circle3 sk-circle"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "sk-circle4 sk-circle"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "sk-circle5 sk-circle"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "sk-circle6 sk-circle"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "sk-circle7 sk-circle"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "sk-circle8 sk-circle"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "sk-circle9 sk-circle"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "sk-circle10 sk-circle"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "sk-circle11 sk-circle"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "sk-circle12 sk-circle"
      })]
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "loader",
    children: "Loading..."
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Spinner);

/***/ }),

/***/ "./resources/js/src/components/SweetAlert/index.js":
/*!*********************************************************!*\
  !*** ./resources/js/src/components/SweetAlert/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap_sweetalert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap-sweetalert */ "./node_modules/react-bootstrap-sweetalert/dist/index.js");
/* harmony import */ var react_bootstrap_sweetalert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_sweetalert__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var SweetAlerts = function SweetAlerts(_ref, props) {
  var show = _ref.show,
      showCancel = _ref.showCancel,
      onConfirm = _ref.onConfirm,
      onCancel = _ref.onCancel,
      type = _ref.type,
      title = _ref.title,
      btnConfirmStyle = _ref.btnConfirmStyle,
      btnCancelStyle = _ref.btnCancelStyle,
      confirmBtnText = _ref.confirmBtnText,
      cancelBtnText = _ref.cancelBtnText,
      text = _ref.text,
      children = _ref.children;
  var cancelBtnStyle = {
    width: '10rem',
    height: "5rem",
    fontSize: "2rem",
    paddingTop: '0.9rem',
    backgroundColor: "#d9534f",
    color: "white",
    textDecoration: "none"
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)((react_bootstrap_sweetalert__WEBPACK_IMPORTED_MODULE_1___default()), {
      closeOnClickOutside: false,
      type: type,
      showCancel: showCancel,
      confirmBtnText: confirmBtnText,
      cancelBtnText: cancelBtnText,
      confirmBtnBsStyle: btnConfirmStyle,
      cancelBtnBsStyle: btnCancelStyle,
      confirmBtnStyle: {
        width: '10rem',
        height: "5rem",
        fontSize: "2rem",
        paddingTop: '0.9rem'
      },
      cancelBtnStyle: cancelBtnStyle,
      onConfirm: onConfirm,
      onCancel: onCancel,
      openAnim: {
        name: 'showSweetAlert',
        duration: 900
      },
      closeAnim: {
        name: 'hideSweetAlert',
        duration: 200
      },
      title: title,
      show: show,
      children: text !== null && text !== void 0 ? text : children
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SweetAlerts);

/***/ }),

/***/ "./resources/js/src/components/Table/index.js":
/*!****************************************************!*\
  !*** ./resources/js/src/components/Table/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-table */ "./node_modules/react-table/index.js");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Table_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Table.css */ "./resources/js/src/components/Table/Table.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var Table = function Table(_ref) {
  var size = _ref.size,
      columns = _ref.columns,
      data = _ref.data;

  var _useTable = (0,react_table__WEBPACK_IMPORTED_MODULE_1__.useTable)({
    columns: columns,
    data: data
  }, react_table__WEBPACK_IMPORTED_MODULE_1__.useSortBy),
      getTableProps = _useTable.getTableProps,
      getTableBodyProps = _useTable.getTableBodyProps,
      headerGroups = _useTable.headerGroups,
      rows = _useTable.rows,
      prepareRow = _useTable.prepareRow;

  if (size === "small") {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: 'table-responsible small',
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("table", _objectSpread(_objectSpread({
        className: 'customers'
      }, getTableProps()), {}, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("thead", {
          children: headerGroups.map(function (headerGroup) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("tr", _objectSpread(_objectSpread({}, headerGroup.getHeaderGroupProps()), {}, {
              children: headerGroup.headers.map(function (column) {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("th", _objectSpread(_objectSpread({}, column.getHeaderProps(column.getSortByToggleProps())), {}, {
                  children: [column.render('Header'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                    className: _Table_css__WEBPACK_IMPORTED_MODULE_2__["default"].SortIndication,
                    children: column.isSorted ? column.isSortedDesc ? String.fromCharCode(8593) : //Arrow up
                    String.fromCharCode(8595) // Arrow down
                    : ''
                  })]
                }));
              })
            }));
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("tbody", _objectSpread(_objectSpread({}, getTableBodyProps()), {}, {
          children: rows.map(function (row, i) {
            prepareRow(row);
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("tr", _objectSpread(_objectSpread({}, row.getRowProps()), {}, {
              children: row.cells.map(function (cell) {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", _objectSpread(_objectSpread({}, cell.getCellProps()), {}, {
                  children: cell.render('Cell')
                }));
              })
            }));
          })
        }))]
      }))
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: 'table-responsible',
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("table", _objectSpread(_objectSpread({
      className: 'customers'
    }, getTableProps()), {}, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("thead", {
        children: headerGroups.map(function (headerGroup) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("tr", _objectSpread(_objectSpread({}, headerGroup.getHeaderGroupProps()), {}, {
            children: headerGroup.headers.map(function (column) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("th", _objectSpread(_objectSpread({}, column.getHeaderProps(column.getSortByToggleProps())), {}, {
                children: [column.render('Header'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  className: _Table_css__WEBPACK_IMPORTED_MODULE_2__["default"].SortIndication,
                  children: column.isSorted ? column.isSortedDesc ? String.fromCharCode(8593) : //Arrow up
                  String.fromCharCode(8595) // Arrow down
                  : ''
                })]
              }));
            })
          }));
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("tbody", _objectSpread(_objectSpread({}, getTableBodyProps()), {}, {
        children: rows.map(function (row, i) {
          prepareRow(row);
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("tr", _objectSpread(_objectSpread({}, row.getRowProps()), {}, {
            children: row.cells.map(function (cell) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", _objectSpread(_objectSpread({}, cell.getCellProps()), {}, {
                children: cell.render('Cell')
              }));
            })
          }));
        })
      }))]
    }))
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Table);

/***/ }),

/***/ "./node_modules/big.js/big.js":
/*!************************************!*\
  !*** ./node_modules/big.js/big.js ***!
  \************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
 *  big.js v5.2.2
 *  A small, fast, easy-to-use library for arbitrary-precision decimal arithmetic.
 *  Copyright (c) 2018 Michael Mclaughlin <M8ch88l@gmail.com>
 *  https://github.com/MikeMcl/big.js/LICENCE
 */
;(function (GLOBAL) {
  'use strict';
  var Big,


/************************************** EDITABLE DEFAULTS *****************************************/


    // The default values below must be integers within the stated ranges.

    /*
     * The maximum number of decimal places (DP) of the results of operations involving division:
     * div and sqrt, and pow with negative exponents.
     */
    DP = 20,          // 0 to MAX_DP

    /*
     * The rounding mode (RM) used when rounding to the above decimal places.
     *
     *  0  Towards zero (i.e. truncate, no rounding).       (ROUND_DOWN)
     *  1  To nearest neighbour. If equidistant, round up.  (ROUND_HALF_UP)
     *  2  To nearest neighbour. If equidistant, to even.   (ROUND_HALF_EVEN)
     *  3  Away from zero.                                  (ROUND_UP)
     */
    RM = 1,             // 0, 1, 2 or 3

    // The maximum value of DP and Big.DP.
    MAX_DP = 1E6,       // 0 to 1000000

    // The maximum magnitude of the exponent argument to the pow method.
    MAX_POWER = 1E6,    // 1 to 1000000

    /*
     * The negative exponent (NE) at and beneath which toString returns exponential notation.
     * (JavaScript numbers: -7)
     * -1000000 is the minimum recommended exponent value of a Big.
     */
    NE = -7,            // 0 to -1000000

    /*
     * The positive exponent (PE) at and above which toString returns exponential notation.
     * (JavaScript numbers: 21)
     * 1000000 is the maximum recommended exponent value of a Big.
     * (This limit is not enforced or checked.)
     */
    PE = 21,            // 0 to 1000000


/**************************************************************************************************/


    // Error messages.
    NAME = '[big.js] ',
    INVALID = NAME + 'Invalid ',
    INVALID_DP = INVALID + 'decimal places',
    INVALID_RM = INVALID + 'rounding mode',
    DIV_BY_ZERO = NAME + 'Division by zero',

    // The shared prototype object.
    P = {},
    UNDEFINED = void 0,
    NUMERIC = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;


  /*
   * Create and return a Big constructor.
   *
   */
  function _Big_() {

    /*
     * The Big constructor and exported function.
     * Create and return a new instance of a Big number object.
     *
     * n {number|string|Big} A numeric value.
     */
    function Big(n) {
      var x = this;

      // Enable constructor usage without new.
      if (!(x instanceof Big)) return n === UNDEFINED ? _Big_() : new Big(n);

      // Duplicate.
      if (n instanceof Big) {
        x.s = n.s;
        x.e = n.e;
        x.c = n.c.slice();
      } else {
        parse(x, n);
      }

      /*
       * Retain a reference to this Big constructor, and shadow Big.prototype.constructor which
       * points to Object.
       */
      x.constructor = Big;
    }

    Big.prototype = P;
    Big.DP = DP;
    Big.RM = RM;
    Big.NE = NE;
    Big.PE = PE;
    Big.version = '5.2.2';

    return Big;
  }


  /*
   * Parse the number or string value passed to a Big constructor.
   *
   * x {Big} A Big number instance.
   * n {number|string} A numeric value.
   */
  function parse(x, n) {
    var e, i, nl;

    // Minus zero?
    if (n === 0 && 1 / n < 0) n = '-0';
    else if (!NUMERIC.test(n += '')) throw Error(INVALID + 'number');

    // Determine sign.
    x.s = n.charAt(0) == '-' ? (n = n.slice(1), -1) : 1;

    // Decimal point?
    if ((e = n.indexOf('.')) > -1) n = n.replace('.', '');

    // Exponential form?
    if ((i = n.search(/e/i)) > 0) {

      // Determine exponent.
      if (e < 0) e = i;
      e += +n.slice(i + 1);
      n = n.substring(0, i);
    } else if (e < 0) {

      // Integer.
      e = n.length;
    }

    nl = n.length;

    // Determine leading zeros.
    for (i = 0; i < nl && n.charAt(i) == '0';) ++i;

    if (i == nl) {

      // Zero.
      x.c = [x.e = 0];
    } else {

      // Determine trailing zeros.
      for (; nl > 0 && n.charAt(--nl) == '0';);
      x.e = e - i - 1;
      x.c = [];

      // Convert string to array of digits without leading/trailing zeros.
      for (e = 0; i <= nl;) x.c[e++] = +n.charAt(i++);
    }

    return x;
  }


  /*
   * Round Big x to a maximum of dp decimal places using rounding mode rm.
   * Called by stringify, P.div, P.round and P.sqrt.
   *
   * x {Big} The Big to round.
   * dp {number} Integer, 0 to MAX_DP inclusive.
   * rm {number} 0, 1, 2 or 3 (DOWN, HALF_UP, HALF_EVEN, UP)
   * [more] {boolean} Whether the result of division was truncated.
   */
  function round(x, dp, rm, more) {
    var xc = x.c,
      i = x.e + dp + 1;

    if (i < xc.length) {
      if (rm === 1) {

        // xc[i] is the digit after the digit that may be rounded up.
        more = xc[i] >= 5;
      } else if (rm === 2) {
        more = xc[i] > 5 || xc[i] == 5 &&
          (more || i < 0 || xc[i + 1] !== UNDEFINED || xc[i - 1] & 1);
      } else if (rm === 3) {
        more = more || !!xc[0];
      } else {
        more = false;
        if (rm !== 0) throw Error(INVALID_RM);
      }

      if (i < 1) {
        xc.length = 1;

        if (more) {

          // 1, 0.1, 0.01, 0.001, 0.0001 etc.
          x.e = -dp;
          xc[0] = 1;
        } else {

          // Zero.
          xc[0] = x.e = 0;
        }
      } else {

        // Remove any digits after the required decimal places.
        xc.length = i--;

        // Round up?
        if (more) {

          // Rounding up may mean the previous digit has to be rounded up.
          for (; ++xc[i] > 9;) {
            xc[i] = 0;
            if (!i--) {
              ++x.e;
              xc.unshift(1);
            }
          }
        }

        // Remove trailing zeros.
        for (i = xc.length; !xc[--i];) xc.pop();
      }
    } else if (rm < 0 || rm > 3 || rm !== ~~rm) {
      throw Error(INVALID_RM);
    }

    return x;
  }


  /*
   * Return a string representing the value of Big x in normal or exponential notation.
   * Handles P.toExponential, P.toFixed, P.toJSON, P.toPrecision, P.toString and P.valueOf.
   *
   * x {Big}
   * id? {number} Caller id.
   *         1 toExponential
   *         2 toFixed
   *         3 toPrecision
   *         4 valueOf
   * n? {number|undefined} Caller's argument.
   * k? {number|undefined}
   */
  function stringify(x, id, n, k) {
    var e, s,
      Big = x.constructor,
      z = !x.c[0];

    if (n !== UNDEFINED) {
      if (n !== ~~n || n < (id == 3) || n > MAX_DP) {
        throw Error(id == 3 ? INVALID + 'precision' : INVALID_DP);
      }

      x = new Big(x);

      // The index of the digit that may be rounded up.
      n = k - x.e;

      // Round?
      if (x.c.length > ++k) round(x, n, Big.RM);

      // toFixed: recalculate k as x.e may have changed if value rounded up.
      if (id == 2) k = x.e + n + 1;

      // Append zeros?
      for (; x.c.length < k;) x.c.push(0);
    }

    e = x.e;
    s = x.c.join('');
    n = s.length;

    // Exponential notation?
    if (id != 2 && (id == 1 || id == 3 && k <= e || e <= Big.NE || e >= Big.PE)) {
      s = s.charAt(0) + (n > 1 ? '.' + s.slice(1) : '') + (e < 0 ? 'e' : 'e+') + e;

    // Normal notation.
    } else if (e < 0) {
      for (; ++e;) s = '0' + s;
      s = '0.' + s;
    } else if (e > 0) {
      if (++e > n) for (e -= n; e--;) s += '0';
      else if (e < n) s = s.slice(0, e) + '.' + s.slice(e);
    } else if (n > 1) {
      s = s.charAt(0) + '.' + s.slice(1);
    }

    return x.s < 0 && (!z || id == 4) ? '-' + s : s;
  }


  // Prototype/instance methods


  /*
   * Return a new Big whose value is the absolute value of this Big.
   */
  P.abs = function () {
    var x = new this.constructor(this);
    x.s = 1;
    return x;
  };


  /*
   * Return 1 if the value of this Big is greater than the value of Big y,
   *       -1 if the value of this Big is less than the value of Big y, or
   *        0 if they have the same value.
  */
  P.cmp = function (y) {
    var isneg,
      x = this,
      xc = x.c,
      yc = (y = new x.constructor(y)).c,
      i = x.s,
      j = y.s,
      k = x.e,
      l = y.e;

    // Either zero?
    if (!xc[0] || !yc[0]) return !xc[0] ? !yc[0] ? 0 : -j : i;

    // Signs differ?
    if (i != j) return i;

    isneg = i < 0;

    // Compare exponents.
    if (k != l) return k > l ^ isneg ? 1 : -1;

    j = (k = xc.length) < (l = yc.length) ? k : l;

    // Compare digit by digit.
    for (i = -1; ++i < j;) {
      if (xc[i] != yc[i]) return xc[i] > yc[i] ^ isneg ? 1 : -1;
    }

    // Compare lengths.
    return k == l ? 0 : k > l ^ isneg ? 1 : -1;
  };


  /*
   * Return a new Big whose value is the value of this Big divided by the value of Big y, rounded,
   * if necessary, to a maximum of Big.DP decimal places using rounding mode Big.RM.
   */
  P.div = function (y) {
    var x = this,
      Big = x.constructor,
      a = x.c,                  // dividend
      b = (y = new Big(y)).c,   // divisor
      k = x.s == y.s ? 1 : -1,
      dp = Big.DP;

    if (dp !== ~~dp || dp < 0 || dp > MAX_DP) throw Error(INVALID_DP);

    // Divisor is zero?
    if (!b[0]) throw Error(DIV_BY_ZERO);

    // Dividend is 0? Return +-0.
    if (!a[0]) return new Big(k * 0);

    var bl, bt, n, cmp, ri,
      bz = b.slice(),
      ai = bl = b.length,
      al = a.length,
      r = a.slice(0, bl),   // remainder
      rl = r.length,
      q = y,                // quotient
      qc = q.c = [],
      qi = 0,
      d = dp + (q.e = x.e - y.e) + 1;    // number of digits of the result

    q.s = k;
    k = d < 0 ? 0 : d;

    // Create version of divisor with leading zero.
    bz.unshift(0);

    // Add zeros to make remainder as long as divisor.
    for (; rl++ < bl;) r.push(0);

    do {

      // n is how many times the divisor goes into current remainder.
      for (n = 0; n < 10; n++) {

        // Compare divisor and remainder.
        if (bl != (rl = r.length)) {
          cmp = bl > rl ? 1 : -1;
        } else {
          for (ri = -1, cmp = 0; ++ri < bl;) {
            if (b[ri] != r[ri]) {
              cmp = b[ri] > r[ri] ? 1 : -1;
              break;
            }
          }
        }

        // If divisor < remainder, subtract divisor from remainder.
        if (cmp < 0) {

          // Remainder can't be more than 1 digit longer than divisor.
          // Equalise lengths using divisor with extra leading zero?
          for (bt = rl == bl ? b : bz; rl;) {
            if (r[--rl] < bt[rl]) {
              ri = rl;
              for (; ri && !r[--ri];) r[ri] = 9;
              --r[ri];
              r[rl] += 10;
            }
            r[rl] -= bt[rl];
          }

          for (; !r[0];) r.shift();
        } else {
          break;
        }
      }

      // Add the digit n to the result array.
      qc[qi++] = cmp ? n : ++n;

      // Update the remainder.
      if (r[0] && cmp) r[rl] = a[ai] || 0;
      else r = [a[ai]];

    } while ((ai++ < al || r[0] !== UNDEFINED) && k--);

    // Leading zero? Do not remove if result is simply zero (qi == 1).
    if (!qc[0] && qi != 1) {

      // There can't be more than one zero.
      qc.shift();
      q.e--;
    }

    // Round?
    if (qi > d) round(q, dp, Big.RM, r[0] !== UNDEFINED);

    return q;
  };


  /*
   * Return true if the value of this Big is equal to the value of Big y, otherwise return false.
   */
  P.eq = function (y) {
    return !this.cmp(y);
  };


  /*
   * Return true if the value of this Big is greater than the value of Big y, otherwise return
   * false.
   */
  P.gt = function (y) {
    return this.cmp(y) > 0;
  };


  /*
   * Return true if the value of this Big is greater than or equal to the value of Big y, otherwise
   * return false.
   */
  P.gte = function (y) {
    return this.cmp(y) > -1;
  };


  /*
   * Return true if the value of this Big is less than the value of Big y, otherwise return false.
   */
  P.lt = function (y) {
    return this.cmp(y) < 0;
  };


  /*
   * Return true if the value of this Big is less than or equal to the value of Big y, otherwise
   * return false.
   */
  P.lte = function (y) {
    return this.cmp(y) < 1;
  };


  /*
   * Return a new Big whose value is the value of this Big minus the value of Big y.
   */
  P.minus = P.sub = function (y) {
    var i, j, t, xlty,
      x = this,
      Big = x.constructor,
      a = x.s,
      b = (y = new Big(y)).s;

    // Signs differ?
    if (a != b) {
      y.s = -b;
      return x.plus(y);
    }

    var xc = x.c.slice(),
      xe = x.e,
      yc = y.c,
      ye = y.e;

    // Either zero?
    if (!xc[0] || !yc[0]) {

      // y is non-zero? x is non-zero? Or both are zero.
      return yc[0] ? (y.s = -b, y) : new Big(xc[0] ? x : 0);
    }

    // Determine which is the bigger number. Prepend zeros to equalise exponents.
    if (a = xe - ye) {

      if (xlty = a < 0) {
        a = -a;
        t = xc;
      } else {
        ye = xe;
        t = yc;
      }

      t.reverse();
      for (b = a; b--;) t.push(0);
      t.reverse();
    } else {

      // Exponents equal. Check digit by digit.
      j = ((xlty = xc.length < yc.length) ? xc : yc).length;

      for (a = b = 0; b < j; b++) {
        if (xc[b] != yc[b]) {
          xlty = xc[b] < yc[b];
          break;
        }
      }
    }

    // x < y? Point xc to the array of the bigger number.
    if (xlty) {
      t = xc;
      xc = yc;
      yc = t;
      y.s = -y.s;
    }

    /*
     * Append zeros to xc if shorter. No need to add zeros to yc if shorter as subtraction only
     * needs to start at yc.length.
     */
    if ((b = (j = yc.length) - (i = xc.length)) > 0) for (; b--;) xc[i++] = 0;

    // Subtract yc from xc.
    for (b = i; j > a;) {
      if (xc[--j] < yc[j]) {
        for (i = j; i && !xc[--i];) xc[i] = 9;
        --xc[i];
        xc[j] += 10;
      }

      xc[j] -= yc[j];
    }

    // Remove trailing zeros.
    for (; xc[--b] === 0;) xc.pop();

    // Remove leading zeros and adjust exponent accordingly.
    for (; xc[0] === 0;) {
      xc.shift();
      --ye;
    }

    if (!xc[0]) {

      // n - n = +0
      y.s = 1;

      // Result must be zero.
      xc = [ye = 0];
    }

    y.c = xc;
    y.e = ye;

    return y;
  };


  /*
   * Return a new Big whose value is the value of this Big modulo the value of Big y.
   */
  P.mod = function (y) {
    var ygtx,
      x = this,
      Big = x.constructor,
      a = x.s,
      b = (y = new Big(y)).s;

    if (!y.c[0]) throw Error(DIV_BY_ZERO);

    x.s = y.s = 1;
    ygtx = y.cmp(x) == 1;
    x.s = a;
    y.s = b;

    if (ygtx) return new Big(x);

    a = Big.DP;
    b = Big.RM;
    Big.DP = Big.RM = 0;
    x = x.div(y);
    Big.DP = a;
    Big.RM = b;

    return this.minus(x.times(y));
  };


  /*
   * Return a new Big whose value is the value of this Big plus the value of Big y.
   */
  P.plus = P.add = function (y) {
    var t,
      x = this,
      Big = x.constructor,
      a = x.s,
      b = (y = new Big(y)).s;

    // Signs differ?
    if (a != b) {
      y.s = -b;
      return x.minus(y);
    }

    var xe = x.e,
      xc = x.c,
      ye = y.e,
      yc = y.c;

    // Either zero? y is non-zero? x is non-zero? Or both are zero.
    if (!xc[0] || !yc[0]) return yc[0] ? y : new Big(xc[0] ? x : a * 0);

    xc = xc.slice();

    // Prepend zeros to equalise exponents.
    // Note: reverse faster than unshifts.
    if (a = xe - ye) {
      if (a > 0) {
        ye = xe;
        t = yc;
      } else {
        a = -a;
        t = xc;
      }

      t.reverse();
      for (; a--;) t.push(0);
      t.reverse();
    }

    // Point xc to the longer array.
    if (xc.length - yc.length < 0) {
      t = yc;
      yc = xc;
      xc = t;
    }

    a = yc.length;

    // Only start adding at yc.length - 1 as the further digits of xc can be left as they are.
    for (b = 0; a; xc[a] %= 10) b = (xc[--a] = xc[a] + yc[a] + b) / 10 | 0;

    // No need to check for zero, as +x + +y != 0 && -x + -y != 0

    if (b) {
      xc.unshift(b);
      ++ye;
    }

    // Remove trailing zeros.
    for (a = xc.length; xc[--a] === 0;) xc.pop();

    y.c = xc;
    y.e = ye;

    return y;
  };


  /*
   * Return a Big whose value is the value of this Big raised to the power n.
   * If n is negative, round to a maximum of Big.DP decimal places using rounding
   * mode Big.RM.
   *
   * n {number} Integer, -MAX_POWER to MAX_POWER inclusive.
   */
  P.pow = function (n) {
    var x = this,
      one = new x.constructor(1),
      y = one,
      isneg = n < 0;

    if (n !== ~~n || n < -MAX_POWER || n > MAX_POWER) throw Error(INVALID + 'exponent');
    if (isneg) n = -n;

    for (;;) {
      if (n & 1) y = y.times(x);
      n >>= 1;
      if (!n) break;
      x = x.times(x);
    }

    return isneg ? one.div(y) : y;
  };


  /*
   * Return a new Big whose value is the value of this Big rounded using rounding mode rm
   * to a maximum of dp decimal places, or, if dp is negative, to an integer which is a
   * multiple of 10**-dp.
   * If dp is not specified, round to 0 decimal places.
   * If rm is not specified, use Big.RM.
   *
   * dp? {number} Integer, -MAX_DP to MAX_DP inclusive.
   * rm? 0, 1, 2 or 3 (ROUND_DOWN, ROUND_HALF_UP, ROUND_HALF_EVEN, ROUND_UP)
   */
  P.round = function (dp, rm) {
    var Big = this.constructor;
    if (dp === UNDEFINED) dp = 0;
    else if (dp !== ~~dp || dp < -MAX_DP || dp > MAX_DP) throw Error(INVALID_DP);
    return round(new Big(this), dp, rm === UNDEFINED ? Big.RM : rm);
  };


  /*
   * Return a new Big whose value is the square root of the value of this Big, rounded, if
   * necessary, to a maximum of Big.DP decimal places using rounding mode Big.RM.
   */
  P.sqrt = function () {
    var r, c, t,
      x = this,
      Big = x.constructor,
      s = x.s,
      e = x.e,
      half = new Big(0.5);

    // Zero?
    if (!x.c[0]) return new Big(x);

    // Negative?
    if (s < 0) throw Error(NAME + 'No square root');

    // Estimate.
    s = Math.sqrt(x + '');

    // Math.sqrt underflow/overflow?
    // Re-estimate: pass x coefficient to Math.sqrt as integer, then adjust the result exponent.
    if (s === 0 || s === 1 / 0) {
      c = x.c.join('');
      if (!(c.length + e & 1)) c += '0';
      s = Math.sqrt(c);
      e = ((e + 1) / 2 | 0) - (e < 0 || e & 1);
      r = new Big((s == 1 / 0 ? '1e' : (s = s.toExponential()).slice(0, s.indexOf('e') + 1)) + e);
    } else {
      r = new Big(s);
    }

    e = r.e + (Big.DP += 4);

    // Newton-Raphson iteration.
    do {
      t = r;
      r = half.times(t.plus(x.div(t)));
    } while (t.c.slice(0, e).join('') !== r.c.slice(0, e).join(''));

    return round(r, Big.DP -= 4, Big.RM);
  };


  /*
   * Return a new Big whose value is the value of this Big times the value of Big y.
   */
  P.times = P.mul = function (y) {
    var c,
      x = this,
      Big = x.constructor,
      xc = x.c,
      yc = (y = new Big(y)).c,
      a = xc.length,
      b = yc.length,
      i = x.e,
      j = y.e;

    // Determine sign of result.
    y.s = x.s == y.s ? 1 : -1;

    // Return signed 0 if either 0.
    if (!xc[0] || !yc[0]) return new Big(y.s * 0);

    // Initialise exponent of result as x.e + y.e.
    y.e = i + j;

    // If array xc has fewer digits than yc, swap xc and yc, and lengths.
    if (a < b) {
      c = xc;
      xc = yc;
      yc = c;
      j = a;
      a = b;
      b = j;
    }

    // Initialise coefficient array of result with zeros.
    for (c = new Array(j = a + b); j--;) c[j] = 0;

    // Multiply.

    // i is initially xc.length.
    for (i = b; i--;) {
      b = 0;

      // a is yc.length.
      for (j = a + i; j > i;) {

        // Current sum of products at this digit position, plus carry.
        b = c[j] + yc[i] * xc[j - i - 1] + b;
        c[j--] = b % 10;

        // carry
        b = b / 10 | 0;
      }

      c[j] = (c[j] + b) % 10;
    }

    // Increment result exponent if there is a final carry, otherwise remove leading zero.
    if (b) ++y.e;
    else c.shift();

    // Remove trailing zeros.
    for (i = c.length; !c[--i];) c.pop();
    y.c = c;

    return y;
  };


  /*
   * Return a string representing the value of this Big in exponential notation to dp fixed decimal
   * places and rounded using Big.RM.
   *
   * dp? {number} Integer, 0 to MAX_DP inclusive.
   */
  P.toExponential = function (dp) {
    return stringify(this, 1, dp, dp);
  };


  /*
   * Return a string representing the value of this Big in normal notation to dp fixed decimal
   * places and rounded using Big.RM.
   *
   * dp? {number} Integer, 0 to MAX_DP inclusive.
   *
   * (-0).toFixed(0) is '0', but (-0.1).toFixed(0) is '-0'.
   * (-0).toFixed(1) is '0.0', but (-0.01).toFixed(1) is '-0.0'.
   */
  P.toFixed = function (dp) {
    return stringify(this, 2, dp, this.e + dp);
  };


  /*
   * Return a string representing the value of this Big rounded to sd significant digits using
   * Big.RM. Use exponential notation if sd is less than the number of digits necessary to represent
   * the integer part of the value in normal notation.
   *
   * sd {number} Integer, 1 to MAX_DP inclusive.
   */
  P.toPrecision = function (sd) {
    return stringify(this, 3, sd, sd - 1);
  };


  /*
   * Return a string representing the value of this Big.
   * Return exponential notation if this Big has a positive exponent equal to or greater than
   * Big.PE, or a negative exponent equal to or less than Big.NE.
   * Omit the sign for negative zero.
   */
  P.toString = function () {
    return stringify(this);
  };


  /*
   * Return a string representing the value of this Big.
   * Return exponential notation if this Big has a positive exponent equal to or greater than
   * Big.PE, or a negative exponent equal to or less than Big.NE.
   * Include the sign for negative zero.
   */
  P.valueOf = P.toJSON = function () {
    return stringify(this, 4);
  };


  // Export


  Big = _Big_();

  Big['default'] = Big.Big = Big;

  //AMD.
  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () { return Big; }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

  // Node and other CommonJS-like environments that support module.exports.
  } else {}
})(this);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/System/Admin/Expenses/Expenses.module.css":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/System/Admin/Expenses/Expenses.module.css ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".pgIn4GPy9HZZU8\\+Fcm69EQ\\=\\= {\n    display: flex;\n    align-items: center;\n    border: 2px solid rgb(125, 125, 125);\n    padding: .25rem;\n}\n\n.u\\+4K53wkIJR3XGCEfuVerg\\=\\= {\n    padding: 1rem;\n    border: 1px solid black;\n    background-color: #464cbe;\n    border-radius: .5rem;\n}\n\n.u\\+4K53wkIJR3XGCEfuVerg\\=\\= span {\n    font-size: 1.6rem;\n    color: white;\n    font-weight: bold;\n}\n\n.LNveuZYffCAVs0zItTbS6w\\=\\= {\n    display: flex;\n    justify-content: center;\n    margin-top: 2rem;\n}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"Border": "pgIn4GPy9HZZU8+Fcm69EQ==",
	"Print": "u+4K53wkIJR3XGCEfuVerg==",
	"ResultGeneral": "LNveuZYffCAVs0zItTbS6w=="
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/components/Card/Card.module.css":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/components/Card/Card.module.css ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".AhVq7Tq4SDWN7h9dq5L\\+Gg\\=\\= {\n    padding: 1.5rem;\n    background-color: white;\n    border-radius: .1rem;\n    box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;\n    margin: .5rem;\n\n}\n\n._9wkQjD248EkIdw0Bey3sYw\\=\\= {\n\n    padding: 1.5rem;\n    background-color: white;\n    border-radius: .1rem;\n    box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;\n    margin: .5rem;\n    height: 250px;\n    border: 2px solid black;\n}\n\n.pP8VIgUQR1yBT3fwwRgAtQ\\=\\= {\n    background-color: white;\n    border-radius: .1rem;\n    box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;\n    margin: .5rem;\n}\n\n.SE4OeG7S2qX2EqlDQag7HA\\=\\= {\n    border: 2px solid var(--color-success);\n}\n\n.Lwq1e-\\+k0O6ZJLzl2iInEg\\=\\= {\n    border: 2px solid lightgrey;\n}\n\n.z26rUlYYbinrgHtgt0CYSQ\\=\\= {\n    text-align: center;\n    font-weight: bold;\n    font-size: 2rem;\n}\n\n.pP8VIgUQR1yBT3fwwRgAtQ\\=\\=, .AhVq7Tq4SDWN7h9dq5L\\+Gg\\=\\= {\n    cursor: default;\n}\n\n._2efWXzXeeVaqNiAijAyhKA\\=\\= {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n._2efWXzXeeVaqNiAijAyhKA\\=\\= h5 {\n    font-size: 1.3rem;\n    font-weight: bold;\n}\n\n._2t2S2J8EvXqyewfSPIPwKw\\=\\=, .zb6ZLV58yv20BicYjpIc5Q\\=\\= {\n    padding: 1rem;\n    border: 1px solid lightgrey;\n    border-radius: 5px;\n    background-color: white;\n    margin: 1rem;\n\n}\n\n._2t2S2J8EvXqyewfSPIPwKw\\=\\= .h4A6OGjBLShbMI1J5073OA\\=\\=, .zb6ZLV58yv20BicYjpIc5Q\\=\\= .h4A6OGjBLShbMI1J5073OA\\=\\= {\n    width: 80%;\n    margin: 1rem auto;\n    border-radius: 3px;\n    height: 90%;\n}\n\n._2t2S2J8EvXqyewfSPIPwKw\\=\\=:hover, .zb6ZLV58yv20BicYjpIc5Q\\=\\=:hover {\n    cursor: default;\n}\n\n.x25XmOgLBE3mmgks00hvDw\\=\\= {\n    padding: .7rem;\n    border-radius: .3rem;\n    margin-top: 1rem;\n    width: 100%;\n    color: white;\n    background-color: var(--color-primary);\n    font-size: 1.5rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.jZi8T2zlEXLgyz6xk4DWWg\\=\\= {\n    padding: .7rem;\n    border-radius: .3rem;\n    margin-top: 1rem;\n    width: 100%;\n    color: white;\n    background-color: var(--color-pending);\n    font-size: 1.5rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.qQFmkp57Z2hEDag\\+wPq-kA\\=\\= {\n    font-size: 1.7rem;\n}\n\n.AhVq7Tq4SDWN7h9dq5L\\+Gg\\=\\= div button {\n    padding: 0 1rem;\n    background-color: transparent;\n}\n\n\n.AhVq7Tq4SDWN7h9dq5L\\+Gg\\=\\= div button:hover {\n    background-color:rgba(0, 0, 0, 0.09);\n    border-radius: .2rem;\n    transition: 0.2s ease-in;\n    -webkit-transition: 0.2s ease-in;\n}\n\n.AhVq7Tq4SDWN7h9dq5L\\+Gg\\=\\= div h4 {\n\n    font-size: 1.6rem;\n\n}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"Card": "AhVq7Tq4SDWN7h9dq5L+Gg==",
	"ModelChart": "_9wkQjD248EkIdw0Bey3sYw==",
	"Card3": "pP8VIgUQR1yBT3fwwRgAtQ==",
	"green": "SE4OeG7S2qX2EqlDQag7HA==",
	"grey": "Lwq1e-+k0O6ZJLzl2iInEg==",
	"ContentCenter": "z26rUlYYbinrgHtgt0CYSQ==",
	"Card3Container": "_2efWXzXeeVaqNiAijAyhKA==",
	"Card4": "_2t2S2J8EvXqyewfSPIPwKw==",
	"Card5": "zb6ZLV58yv20BicYjpIc5Q==",
	"Image": "h4A6OGjBLShbMI1J5073OA==",
	"ButtonCart": "x25XmOgLBE3mmgks00hvDw==",
	"ButtonRemove": "jZi8T2zlEXLgyz6xk4DWWg==",
	"IconEyes": "qQFmkp57Z2hEDag+wPq-kA=="
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/components/Card/Quantity/Quantity.module.css":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/components/Card/Quantity/Quantity.module.css ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".ONw2eolEg8fwRNeOehae8Q\\=\\= {\n    background-color: #88c54b;\n    width: 100%;\n}\n\n._59UIuIWK\\+bh0ciVszKDKVg\\=\\= {\n    background-color: var(--color-danger);\n    width: 100%;\n}\n\n.ONw2eolEg8fwRNeOehae8Q\\=\\=, ._59UIuIWK\\+bh0ciVszKDKVg\\=\\= {\n    padding: .7rem;\n    border-radius: .3rem;\n    margin-top: 1rem;\n}\n\n.kV1h5469gldBP\\+MHUAibeA\\=\\= {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 40px;\n    width: 100%;\n    border: 1px solid lightgrey;\n}\n\n.kV1h5469gldBP\\+MHUAibeA\\=\\= input {\n    height: 100%;\n    border: 1px solid lightgrey;\n    font-size: 1.5rem;\n    text-align: center;\n    width: 100%;\n    background-color: transparent;\n    color: grey;\n}\n\n.kV1h5469gldBP\\+MHUAibeA\\=\\= input:focus {\n    box-shadow: 0 0 0 0;\n    outline: 0;\n}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"Add": "ONw2eolEg8fwRNeOehae8Q==",
	"Remove": "_59UIuIWK+bh0ciVszKDKVg==",
	"Quantity": "kV1h5469gldBP+MHUAibeA=="
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/components/Filter/Filter.module.css":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/components/Filter/Filter.module.css ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".dQVqatFPfTDfkeI9RkVUCg\\=\\= {\n    padding: 1rem;\n    border-radius: 1rem;\n    background-color: var(--color-light);\n}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"Filter": "dQVqatFPfTDfkeI9RkVUCg=="
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/components/HeaderButtonPage/HeaderButtonPage.module.css":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/components/HeaderButtonPage/HeaderButtonPage.module.css ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".U3rQAVkjnBZMKE-Eqv3yfQ\\=\\= {\n    display: flex;\n    justify-content: space-between;\n}\n\n.U3rQAVkjnBZMKE-Eqv3yfQ\\=\\= > div {\n    flex: 1;\n}\n\n.U3rQAVkjnBZMKE-Eqv3yfQ\\=\\= > div button{\n    max-width: 58px;\n}\n\n.U3rQAVkjnBZMKE-Eqv3yfQ\\=\\= h2 {\n    text-align: left;\n    text-transform: uppercase;\n}\n\n.ZEvILBzsZkKI2AtXj4-9Dw\\=\\= {\n    fill: white;\n    font-size: 2.5rem;\n}\n\n.U3rQAVkjnBZMKE-Eqv3yfQ\\=\\= > div > div > button {\n    width: 150px;\n    margin-bottom: 1rem;\n    padding: 1.7rem!important;\n    font-size: 2rem;\n    border-radius: 50% !important;\n}\n\n@media(max-width: 500px){\n    .U3rQAVkjnBZMKE-Eqv3yfQ\\=\\= > div > div > button  {\n        width: 80vw;\n    }\n\n    .U3rQAVkjnBZMKE-Eqv3yfQ\\=\\= {\n        display: flex;\n        justify-content: center;\n    }\n}\n\n.LeS5ZWXmpYzeO6gU\\+SUgqA\\=\\= {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    margin-bottom: 2rem;\n}\n\n.LeS5ZWXmpYzeO6gU\\+SUgqA\\=\\= a {\n    text-decoration: none;\n}\n\n.LeS5ZWXmpYzeO6gU\\+SUgqA\\=\\= button {\n    width: 250px;\n    font-size: 1.5rem;\n    margin-bottom: 1rem;\n}\n\n@media(max-width: 600px) {\n    .LeS5ZWXmpYzeO6gU\\+SUgqA\\=\\= {\n        justify-content: center;\n    }\n    .LeS5ZWXmpYzeO6gU\\+SUgqA\\=\\= button {\n        width: 90vw;\n    }\n}\n\n@media(max-width: 768px) {\n\n    .WG8hoVEBCd2KuZuBIVJz4g\\=\\= {\n        flex-direction: column;\n    }\n\n    ._5G3YfIhPIGfnLrpbA-tilQ\\=\\= {\n       margin-top: 50px;\n    }\n\n    .U3rQAVkjnBZMKE-Eqv3yfQ\\=\\= h2{\n        text-align: center;\n    }\n}\n\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"Back": "U3rQAVkjnBZMKE-Eqv3yfQ==",
	"Icon": "ZEvILBzsZkKI2AtXj4-9Dw==",
	"HeaderStoreButton": "LeS5ZWXmpYzeO6gU+SUgqA==",
	"System": "WG8hoVEBCd2KuZuBIVJz4g==",
	"SpaceManu": "_5G3YfIhPIGfnLrpbA-tilQ=="
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/components/InputMoney/InputMoney.module.css":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/components/InputMoney/InputMoney.module.css ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".DClYwapmRryjUj2KYDwcCQ\\=\\= input {\n    border: none;\n    padding: .5rem;\n    text-align: center;\n}\n\n.DClYwapmRryjUj2KYDwcCQ\\=\\= input:focus {\n    outline: none;\n    background-color: #3dd5f3;\n}\n\n.Ew1t7jH4GI50QgC2snUDEw\\=\\= {\n    position: relative;\n    width: 100%;\n    margin: .5rem;\n}\n\n.Ew1t7jH4GI50QgC2snUDEw\\=\\= label{\n    font-size: 1rem;\n    font-weight: 700;\n    margin-top: -.2rem;\n    display: block;\n    transition: all .3s ;\n    padding: .8rem 1rem;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    color: var(--color-light-dark);\n}\n\n.Ew1t7jH4GI50QgC2snUDEw\\=\\= input:-moz-placeholder-shown + label {\n    opacity: 0;\n    visibility: hidden;\n    transform: translateX(-4rem);\n}\n\n.Ew1t7jH4GI50QgC2snUDEw\\=\\= input:placeholder-shown + label {\n    opacity: 0;\n    visibility: hidden;\n    transform: translateX(-4rem);\n}\n\n._4F9LsSMMdvAbY8rgGtjtUQ\\=\\= {\n    padding: .7rem;\n    font-size: 1.4rem;\n    margin: 1rem 0;\n    width: 100%;\n    color: var(--color-primary);\n    text-align: center;\n    outline: none;\n    border: none;\n    border-bottom: 3px solid transparent;\n    border-radius: 3px;\n    transition: all .2s;\n}\n\n._4F9LsSMMdvAbY8rgGtjtUQ\\=\\=:focus {\n    outline: none;\n    border-bottom: 3px solid var(--color-primary);\n    box-shadow: 0 10px 27px -19px rgba(0,0,0,0.74);\n}\n\n\n._4F9LsSMMdvAbY8rgGtjtUQ\\=\\=:focus:invalid {\n    outline: none;\n    border-bottom: 3px solid var(--color-tertiary);\n    box-shadow: 0 10px 27px -19px rgba(0,0,0,0.74);\n}\n\n._4F9LsSMMdvAbY8rgGtjtUQ\\=\\=::-moz-placeholder {\n    color: lightgrey;\n    font-size: 1.2rem;\n    font-weight: 700;\n}\n\n._4F9LsSMMdvAbY8rgGtjtUQ\\=\\=::placeholder {\n    color: lightgrey;\n    font-size: 1.2rem;\n    font-weight: 700;\n}\n\n._2I8lDksZhQn4Iroo0hZO8Q\\=\\= {\n    margin: .7rem;\n}\n\n.v0RXIl1KaJPj29ffncnJbA\\=\\= {\n    display: flex;\n    flex-direction: column;\n}\n\n.v0RXIl1KaJPj29ffncnJbA\\=\\= span{\n    font-size: 1.2rem;\n}\n\n.ouiR1swVvq\\+ZCc2WdCDvUg\\=\\= {\n    padding: .3rem 1rem;\n    background-color: var(--color-primary);\n    color: white!important;\n    font-weight: bold;\n    border-radius: .4rem;\n    margin-right: .5rem;\n}\n\n.ouiR1swVvq\\+ZCc2WdCDvUg\\=\\=:hover {\n    cursor: pointer;\n    transition: all .4s ease;\n    -webkit-transition: all .8s ease;\n}\n\n.v0RXIl1KaJPj29ffncnJbA\\=\\=  div {\n    font-size: 1rem;\n}\n\n.v0RXIl1KaJPj29ffncnJbA\\=\\= label {\n    font-weight: bold;\n    color: var(--color-light-dark);\n    font-size: 1rem;\n}\n\n\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"Normal": "DClYwapmRryjUj2KYDwcCQ==",
	"FormGroup": "Ew1t7jH4GI50QgC2snUDEw==",
	"Input": "_4F9LsSMMdvAbY8rgGtjtUQ==",
	"Radio": "_2I8lDksZhQn4Iroo0hZO8Q==",
	"InputFile": "v0RXIl1KaJPj29ffncnJbA==",
	"ButtonFile": "ouiR1swVvq+ZCc2WdCDvUg=="
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/components/Message/Message.module.css":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/components/Message/Message.module.css ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".CkHw07s4F-WYCud\\+z63fUA\\=\\= {\n    font-size: 1.2rem;\n    font-weight: bold;\n    text-align: center;\n    margin: .5rem;\n    width: 100%;\n}\n\n.CkHw07s4F-WYCud\\+z63fUA\\=\\= > div {\n    text-align: center;\n    color: white;\n    border-radius: .5rem;\n}\n\n.igMdqSEGufHRqIXcMN3u2w\\=\\= {\n    font-size: 1.5rem;\n    background-color: var(--color-primary);\n}\n\n._2fnVv9bjnOeudCf1mNhfBg\\=\\= {\n    color: var(--color-danger);\n    background-color: var(--color-danger);\n}\n\n.iFQk6AcvsGHpTIqd8spi4Q\\=\\= {\n    background-color: white;\n    color: var(--color-danger)!important;\n}\n\n._4S5lvRHyhgz7OztkVGd0eg\\=\\= {\n    background: transparent;\n    color: var(--color-primary)!important;\n    font-weight: bold;\n    width: 100%;\n    padding: .3rem;\n    font-size: 1rem;\n}\n\n._4S5lvRHyhgz7OztkVGd0eg\\=\\=:hover {\n    filter: brightness(0.4);\n    transition: all .4s ease;\n    -webkit-transition: all .8s ease;\n}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"Message": "CkHw07s4F-WYCud+z63fUA==",
	"info": "igMdqSEGufHRqIXcMN3u2w==",
	"error": "_2fnVv9bjnOeudCf1mNhfBg==",
	"danger": "iFQk6AcvsGHpTIqd8spi4Q==",
	"Simple": "_4S5lvRHyhgz7OztkVGd0eg=="
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/components/Pagination/Paginate.module.css":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/components/Pagination/Paginate.module.css ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".yZp1Hz3i\\+afPt0WsUkFabw\\=\\= {\n    display: flex;\n    justify-content: center;\n    background-color: white;\n}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"Paginate": "yZp1Hz3i+afPt0WsUkFabw=="
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/components/Select/Select.module.css":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/components/Select/Select.module.css ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "._9PQvcfANTf8ZbKI23mWk8A\\=\\= {\n    position: relative;\n    width: 100%;\n    margin: .5rem;\n}\n\n._9PQvcfANTf8ZbKI23mWk8A\\=\\= label{\n    font-size: 1rem;\n    font-weight: 700;\n    margin-top: -.2rem;\n    display: block;\n    transition: all .3s ;\n    padding: .8rem 1rem;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    color: var(--color-light-dark);\n}\n\n._9PQvcfANTf8ZbKI23mWk8A\\=\\= select:-moz-placeholder-shown + label {\n    opacity: 0;\n    visibility: hidden;\n    transform: translateX(-4rem);\n}\n\n._9PQvcfANTf8ZbKI23mWk8A\\=\\= select:placeholder-shown + label {\n    opacity: 0;\n    visibility: hidden;\n    transform: translateX(-4rem);\n}\n\n.OXPDBn1ALXZsXTPETXGzCg\\=\\= {\n    height: 38px;\n    font-size: 1.4rem;\n    margin: 1rem 0;\n    width: 100%;\n    color: var(--color-primary);\n    text-align: center!important;\n    outline: none;\n    border: none;\n    border-bottom: 3px solid transparent;\n    border-radius: 3px;\n    transition: all .2s;\n}\n\n.OXPDBn1ALXZsXTPETXGzCg\\=\\= select {\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex: 1;\n    background-color: white!important;\n}\n\n.OXPDBn1ALXZsXTPETXGzCg\\=\\=:focus {\n    outline: none;\n    border-bottom: 3px solid var(--color-primary);\n    box-shadow: 0 10px 27px -19px rgba(0,0,0,0.74);\n}\n\n.OXPDBn1ALXZsXTPETXGzCg\\=\\=:focus:invalid {\n    outline: none;\n    border-bottom: 3px solid var(--color-tertiary);\n    box-shadow: 0 10px 27px -19px rgba(0,0,0,0.74);\n}\n\n.OXPDBn1ALXZsXTPETXGzCg\\=\\=::-moz-placeholder {\n    color: lightgrey;\n    font-size: 1.2rem;\n    font-weight: 700;\n}\n\n.OXPDBn1ALXZsXTPETXGzCg\\=\\=::placeholder {\n    color: lightgrey;\n    font-size: 1.2rem;\n    font-weight: 700;\n}\n\n\n\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"FormGroup": "_9PQvcfANTf8ZbKI23mWk8A==",
	"Select": "OXPDBn1ALXZsXTPETXGzCg=="
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/components/Spinner/Spinner.css":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/components/Spinner/Spinner.css ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".loader {\n    color: var(--color-primary);\n    font-size: 70px;\n    text-indent: -9999em;\n    overflow: hidden;\n    width: 1em;\n    height: 1em;\n    border-radius: 50%;\n    margin: 72px auto;\n    position: relative;\n    transform: translateZ(0);\n    -webkit-animation: load6 1.7s infinite ease, round 1.7s infinite ease;\n    animation: load6 1.7s infinite ease, round 1.7s infinite ease;\n}\n\n@-webkit-keyframes load6 {\n    0% {\n        box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n    }\n    5%,\n    95% {\n        box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n    }\n    10%,\n    59% {\n        box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;\n    }\n    20% {\n        box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;\n    }\n    38% {\n        box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;\n    }\n    100% {\n        box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n    }\n}\n@keyframes load6 {\n    0% {\n        box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n    }\n    5%,\n    95% {\n        box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n    }\n    10%,\n    59% {\n        box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;\n    }\n    20% {\n        box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;\n    }\n    38% {\n        box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;\n    }\n    100% {\n        box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n    }\n}\n@-webkit-keyframes round {\n    0% {\n        transform: rotate(0deg);\n    }\n    100% {\n        transform: rotate(360deg);\n    }\n}\n@keyframes round {\n    0% {\n        transform: rotate(0deg);\n    }\n    100% {\n        transform: rotate(360deg);\n    }\n}\n\n.sk-fading-circle {\n    margin: 0 15px;\n    width: 15px;\n    height: 15px;\n    position: relative;\n    color: white!important;\n}\n\n.m-0 {\n    margin: 0;\n}\n\n.sk-fading-circle .sk-circle {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n}\n\n.sk-fading-circle .sk-circle:before {\n    content: '';\n    display: block;\n    margin: 0 auto;\n    width: 15%;\n    height: 15%;\n    background-color: white;\n    border-radius: 100%;\n    -webkit-animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;\n    animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;\n}\n.sk-fading-circle .sk-circle2 {\n    transform: rotate(30deg);\n}\n.sk-fading-circle .sk-circle3 {\n    transform: rotate(60deg);\n}\n.sk-fading-circle .sk-circle4 {\n    transform: rotate(90deg);\n}\n.sk-fading-circle .sk-circle5 {\n    transform: rotate(120deg);\n}\n.sk-fading-circle .sk-circle6 {\n    transform: rotate(150deg);\n}\n.sk-fading-circle .sk-circle7 {\n    transform: rotate(180deg);\n}\n.sk-fading-circle .sk-circle8 {\n    transform: rotate(210deg);\n}\n.sk-fading-circle .sk-circle9 {\n    transform: rotate(240deg);\n}\n.sk-fading-circle .sk-circle10 {\n    transform: rotate(270deg);\n}\n.sk-fading-circle .sk-circle11 {\n    transform: rotate(300deg);\n}\n.sk-fading-circle .sk-circle12 {\n    transform: rotate(330deg);\n}\n.sk-fading-circle .sk-circle2:before {\n    -webkit-animation-delay: -1.1s;\n    animation-delay: -1.1s;\n}\n.sk-fading-circle .sk-circle3:before {\n    -webkit-animation-delay: -1s;\n    animation-delay: -1s;\n}\n.sk-fading-circle .sk-circle4:before {\n    -webkit-animation-delay: -0.9s;\n    animation-delay: -0.9s;\n}\n.sk-fading-circle .sk-circle5:before {\n    -webkit-animation-delay: -0.8s;\n    animation-delay: -0.8s;\n}\n.sk-fading-circle .sk-circle6:before {\n    -webkit-animation-delay: -0.7s;\n    animation-delay: -0.7s;\n}\n.sk-fading-circle .sk-circle7:before {\n    -webkit-animation-delay: -0.6s;\n    animation-delay: -0.6s;\n}\n.sk-fading-circle .sk-circle8:before {\n    -webkit-animation-delay: -0.5s;\n    animation-delay: -0.5s;\n}\n.sk-fading-circle .sk-circle9:before {\n    -webkit-animation-delay: -0.4s;\n    animation-delay: -0.4s;\n}\n.sk-fading-circle .sk-circle10:before {\n    -webkit-animation-delay: -0.3s;\n    animation-delay: -0.3s;\n}\n.sk-fading-circle .sk-circle11:before {\n    -webkit-animation-delay: -0.2s;\n    animation-delay: -0.2s;\n}\n.sk-fading-circle .sk-circle12:before {\n    -webkit-animation-delay: -0.1s;\n    animation-delay: -0.1s;\n}\n\n@-webkit-keyframes sk-circleFadeDelay {\n    0%, 39%, 100% { opacity: 0; }\n    40% { opacity: 1; }\n}\n\n@keyframes sk-circleFadeDelay {\n    0%, 39%, 100% { opacity: 0; }\n    40% { opacity: 1; }\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/components/Table/Table.css":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/components/Table/Table.css ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".small td, .small th, .small tr{\n    font-size: 10px;\n    padding: 5px!important;\n\n}\n\n.small td:first-child{\n    font-size: 8px;\n    padding: 5px!important;\n\n}\n\n.small {\n    overflow-x: hidden!important;\n}\n\n.customers {\n    border-collapse:collapse;\n    width: 100%;\n    font-size: 1.2rem;\n    border-left: 1px solid lightgrey;\n}\n\n.customers tr:hover {\n    cursor: default;\n    filter: brightness(85%);\n}\n\n.customers > thead {\n    border-bottom: 2px solid lightgrey;\n    margin-bottom: 2px;\n}\n\n.customers td{\n    padding: 8px;\n    text-align: center;\n    background-color: white;\n    border-bottom: 1px solid  #e9e9e9;\n}\n\n.customers th {\n    padding: 8px;\n    text-align: center;\n}\n.customers tr:nth-child(even){background-color: var(--color-light-white);}\n\n.customers tr:nth-child(odd){background-color: #f0f0f0;}\n\n.customers tr:hover {background-color: #ddd;}\n\n.customers th {\n    padding-top: 12px;\n    padding-bottom: 12px;\n    /*text-align: left;*/\n    background-color: var(--color-light-white);\n    color: black;\n}\n\n.idCamp{\n    width: 5%;\n}\n\n.dateCamp{\n    width: 14%;\n}\n\n.SortIndication {\n    font-size: 1rem;\n}\n\n.customers tr td a {\n    margin-right: 0.5rem;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/paginator/index.js":
/*!*****************************************!*\
  !*** ./node_modules/paginator/index.js ***!
  \*****************************************/
/***/ ((module) => {

module.exports = Paginator;

// Paginator constructor
//
// `per_page` is the number of results per page, `length` is the number of
// pages to display. They default to `25` and `10` respectively.
function Paginator(per_page, length) {
  // You really should be calling this with `new Paginator`, but WHATEVER.
  if (!(this instanceof Paginator)) {
    return new Paginator(per_page, length);
  }

  // Woo, defaults!
  this.per_page = per_page || 25;
  this.length = length || 10;
}

// Build an object with all the necessary information for outputting pagination
// controls.
//
// (new Paginator(paginator.build(100, 2)
Paginator.prototype.build = function(total_results, current_page) {
  // We want the number of pages, rounded up to the nearest page.
  var total_pages = Math.ceil(total_results / this.per_page);

  // Ensure both total_results and current_page are treated as Numbers
  total_results = parseInt(total_results, 10);
  current_page  = parseInt(current_page, 10) || 1;

  // Obviously we can't be on a negative or 0 page.
  if (current_page < 1) { current_page = 1; }
  // If the user has done something like /page/99999 we want to clamp that back
  // down.
  if (current_page > total_pages) { current_page = total_pages; }

  // This is the first page to be displayed as a numbered link.
  var first_page = Math.max(1, current_page - Math.floor(this.length / 2));

  // And here's the last page to be displayed specifically.
  var last_page = Math.min(total_pages, current_page + Math.floor(this.length / 2));

  // This is triggered if we're at or near one of the extremes; we won't have
  // enough page links. We need to adjust our bounds accordingly.
  if (last_page - first_page + 1 < this.length) {
    if (current_page < (total_pages / 2)) {
      last_page = Math.min(total_pages, last_page + (this.length - (last_page - first_page)));
    } else {
      first_page = Math.max(1, first_page - (this.length - (last_page - first_page)));
    }
  }

  // This can be triggered if the user wants an odd number of pages.
  if (last_page - first_page + 1 > this.length) {
    // We want to move towards whatever extreme we're closest to at the time.
    if (current_page > (total_pages / 2)) {
      first_page++;
    } else {
      last_page--;
    }
  }

  // First result on the page. This, along with the field below, can be used to
  // do "showing x to y of z results" style things.
  var first_result = this.per_page * (current_page - 1);
  if (first_result < 0) { first_result = 0; }

  // Last result on the page.
  var last_result = (this.per_page * current_page) - 1;
  if (last_result < 0) { last_result = 0; }
  if (last_result > Math.max(total_results - 1, 0)) { last_result = Math.max(total_results - 1, 0); }

  // GIMME THAT OBJECT
  return {
    total_pages: total_pages,
    pages: Math.min(last_page - first_page + 1, total_pages),
    current_page: current_page,
    first_page: first_page,
    last_page: last_page,
    previous_page: current_page - 1,
    next_page: current_page + 1,
    has_previous_page: current_page > 1,
    has_next_page: current_page < total_pages,
    total_results: total_results,
    results: Math.min(last_result - first_result + 1, total_results),
    first_result: first_result,
    last_result: last_result,
  };
};


/***/ }),

/***/ "./node_modules/prop-types-extra/lib/all.js":
/*!**************************************************!*\
  !*** ./node_modules/prop-types-extra/lib/all.js ***!
  \**************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = all;

var _createChainableTypeChecker = __webpack_require__(/*! ./utils/createChainableTypeChecker */ "./node_modules/prop-types-extra/lib/utils/createChainableTypeChecker.js");

var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function all() {
  for (var _len = arguments.length, validators = Array(_len), _key = 0; _key < _len; _key++) {
    validators[_key] = arguments[_key];
  }

  function allPropTypes() {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var error = null;

    validators.forEach(function (validator) {
      if (error != null) {
        return;
      }

      var result = validator.apply(undefined, args);
      if (result != null) {
        error = result;
      }
    });

    return error;
  }

  return (0, _createChainableTypeChecker2.default)(allPropTypes);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/prop-types-extra/lib/utils/createChainableTypeChecker.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/prop-types-extra/lib/utils/createChainableTypeChecker.js ***!
  \*******************************************************************************/
/***/ ((module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = createChainableTypeChecker;
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

// Mostly taken from ReactPropTypes.

function createChainableTypeChecker(validate) {
  function checkType(isRequired, props, propName, componentName, location, propFullName) {
    var componentNameSafe = componentName || '<<anonymous>>';
    var propFullNameSafe = propFullName || propName;

    if (props[propName] == null) {
      if (isRequired) {
        return new Error('Required ' + location + ' `' + propFullNameSafe + '` was not specified ' + ('in `' + componentNameSafe + '`.'));
      }

      return null;
    }

    for (var _len = arguments.length, args = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
      args[_key - 6] = arguments[_key];
    }

    return validate.apply(undefined, [props, propName, componentNameSafe, location, propFullNameSafe].concat(args));
  }

  var chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true);

  return chainedCheckType;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-bootstrap-sweetalert/dist/components/Buttons.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-bootstrap-sweetalert/dist/components/Buttons.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var styles = __importStar(__webpack_require__(/*! ../styles/SweetAlertStyles */ "./node_modules/react-bootstrap-sweetalert/dist/styles/SweetAlertStyles.js"));
var SweetAlertStyles_1 = __webpack_require__(/*! ../styles/SweetAlertStyles */ "./node_modules/react-bootstrap-sweetalert/dist/styles/SweetAlertStyles.js");
var Buttons = /** @class */ (function (_super) {
    __extends(Buttons, _super);
    function Buttons() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.buttonStyles = {};
        _this.confirmButtonElement = null;
        _this.cancelButtonElement = null;
        _this.setConfirmButtonElementRef = function (element) {
            _this.confirmButtonElement = element;
        };
        _this.setCancelButtonElementRef = function (element) {
            _this.cancelButtonElement = element;
        };
        _this.getButtonStyle = function (bsStyle) {
            if (bsStyle === 'error')
                bsStyle = 'danger';
            if (_this.buttonStyles[bsStyle] == null) {
                var style = Buttons.styles[bsStyle] || Buttons.styles.default;
                _this.buttonStyles[bsStyle] = {
                    borderColor: "" + style.borderColor,
                    boxShadow: "inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px " + style.shadowColor,
                };
            }
            return _this.buttonStyles[bsStyle];
        };
        return _this;
    }
    Buttons.prototype.componentDidMount = function () {
        this.focusButton();
    };
    Buttons.prototype.componentDidUpdate = function (prevProps) {
        var _this = this;
        // when displaying back to back alerts React will treat this
        // as an update to the same alert. this causes componentDidMount
        // to not be called for the subsequent alerts. i hope to find a better
        // way to handle this in the future, but for now i'm checking if the
        // title, type, or button text has changed
        if (prevProps.type !== this.props.type ||
            prevProps.confirmBtnText !== this.props.confirmBtnText ||
            prevProps.title !== this.props.title) {
            setTimeout(function () { return _this.focusButton(); }, 0);
        }
    };
    Buttons.prototype.focusButton = function () {
        if (this.props.focusCancelBtn && this.cancelButtonElement) {
            try {
                this.cancelButtonElement.focus();
            }
            catch (e) {
                // whoops
            }
        }
        else if (this.props.focusConfirmBtn && this.confirmButtonElement) {
            try {
                this.confirmButtonElement.focus();
            }
            catch (e) {
                // whoops
            }
        }
    };
    Buttons.prototype.confirmButtonRender = function () {
        var _this = this;
        if (!this.props.showConfirm)
            return false;
        var confirmBtnBsStyle = this.props.confirmBtnBsStyle === 'error' ? 'danger' : this.props.confirmBtnBsStyle;
        var confirmButtonStyle = Object.assign({}, styles.button, this.getButtonStyle(confirmBtnBsStyle), this.props.confirmBtnStyle || {});
        /**
         * These buttons are <a> anchor tags because for some reason React is triggering click events on <button>
         * elements when an enter key event is fired from an input field in the alert.
         * Please do not change this back to any other type of element.
         */
        return (react_1.default.createElement("a", { ref: this.setConfirmButtonElementRef, href: '#', style: confirmButtonStyle, className: "btn btn-" + this.props.btnSize + " btn-" + confirmBtnBsStyle + " " + this.props.confirmBtnCssClass + " " + (this.props.disabled ? 'disabled' : ''), onClick: function (e) {
                e.stopPropagation();
                e.preventDefault();
                if (!_this.props.disabled) {
                    _this.props.onConfirm();
                }
            } }, this.props.confirmBtnText));
    };
    Buttons.prototype.cancelButtonRender = function () {
        var _this = this;
        if (!this.props.showCancel)
            return false;
        var cancelBtnBsStyle = this.props.cancelBtnBsStyle === 'error' ? 'danger' : this.props.cancelBtnBsStyle;
        var cancelButtonStyle = Object.assign({}, styles.button, this.props.cancelBtnStyle || {});
        /**
         * These buttons are <a> anchor tags because for some reason React is triggering click events on <button>
         * elements when an enter key event is fired from an input field in the alert.
         * Please do not change this back to any other type of element.
         */
        return (react_1.default.createElement("a", { ref: this.setCancelButtonElementRef, href: '#', style: cancelButtonStyle, className: "btn btn-" + this.props.btnSize + " btn-" + cancelBtnBsStyle + " " + this.props.cancelBtnCssClass, onClick: function (e) {
                e.stopPropagation();
                e.preventDefault();
                _this.props.onCancel();
            } }, this.props.cancelBtnText));
    };
    Buttons.prototype.render = function () {
        if (!this.props.showConfirm && !this.props.showCancel) {
            return false;
        }
        return (react_1.default.createElement("p", { style: SweetAlertStyles_1.actions }, this.props.customButtons ? (this.props.customButtons) : (react_1.default.createElement(react_1.default.Fragment, null, !this.props.reverseButtons ? (react_1.default.createElement(react_1.default.Fragment, null,
            this.cancelButtonRender(),
            this.confirmButtonRender())) : (react_1.default.createElement(react_1.default.Fragment, null,
            this.confirmButtonRender(),
            this.cancelButtonRender()))))));
    };
    Buttons.defaultProps = {
        confirmBtnText: 'OK',
        confirmBtnBsStyle: 'primary',
        confirmBtnCssClass: '',
        confirmBtnStyle: {},
        cancelBtnText: 'Cancel',
        cancelBtnBsStyle: 'link',
        cancelBtnCssClass: '',
        cancelBtnStyle: {},
        focusConfirmBtn: true,
        focusCancelBtn: false,
        showConfirm: true,
        showCancel: false,
        reverseButtons: false,
        btnSize: 'lg',
    };
    Buttons.styles = {
        primary: {
            borderColor: '#286090',
            shadowColor: 'rgb(165, 202, 234)'
        },
        success: {
            borderColor: '#4cae4c',
            shadowColor: 'rgba(76, 174, 76, 0.6)'
        },
        info: {
            borderColor: '#46b8da',
            shadowColor: 'rgba(70, 184, 218, 0.6)'
        },
        danger: {
            borderColor: '#d43f3a',
            shadowColor: 'rgba(212, 63, 58, 0.6)'
        },
        warning: {
            borderColor: '#eea236',
            shadowColor: 'rgba(238, 162, 54, 0.6)'
        },
        default: {
            borderColor: '#cccccc',
            shadowColor: 'rgba(204, 204, 204, 0.6)'
        },
        secondary: {
            borderColor: '#cccccc',
            shadowColor: 'rgba(204, 204, 204, 0.6)'
        }
    };
    return Buttons;
}(react_1.default.Component));
exports["default"] = Buttons;
//# sourceMappingURL=Buttons.js.map

/***/ }),

/***/ "./node_modules/react-bootstrap-sweetalert/dist/components/Content.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-bootstrap-sweetalert/dist/components/Content.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var SweetAlertStyles_1 = __webpack_require__(/*! ../styles/SweetAlertStyles */ "./node_modules/react-bootstrap-sweetalert/dist/styles/SweetAlertStyles.js");
var Content = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement("div", { style: SweetAlertStyles_1.contentContainer }, children));
};
exports["default"] = Content;
//# sourceMappingURL=Content.js.map

/***/ }),

/***/ "./node_modules/react-bootstrap-sweetalert/dist/components/CustomIcon.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-bootstrap-sweetalert/dist/components/CustomIcon.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var styles = __importStar(__webpack_require__(/*! ../styles/SweetAlertStyles */ "./node_modules/react-bootstrap-sweetalert/dist/styles/SweetAlertStyles.js"));
var defaultStyle = Object.assign({}, styles.icon, styles.iconCustom);
var CustomIcon = function (_a) {
    var iconUrl = _a.iconUrl;
    var backgroundImage = "url(" + iconUrl;
    var style = Object.assign({}, defaultStyle, { backgroundImage: backgroundImage });
    return react_1.default.createElement("div", { style: style });
};
exports["default"] = CustomIcon;
//# sourceMappingURL=CustomIcon.js.map

/***/ }),

/***/ "./node_modules/react-bootstrap-sweetalert/dist/components/ErrorIcon.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-bootstrap-sweetalert/dist/components/ErrorIcon.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var styles = __importStar(__webpack_require__(/*! ../styles/SweetAlertStyles */ "./node_modules/react-bootstrap-sweetalert/dist/styles/SweetAlertStyles.js"));
var ErrorIcon = function () { return (react_1.default.createElement("div", { style: Object.assign({}, styles.icon, styles.iconError) },
    react_1.default.createElement("span", { style: styles.iconErrorX },
        react_1.default.createElement("span", { style: Object.assign({}, styles.iconErrorLine, styles.iconErrorLineLeft) }),
        react_1.default.createElement("span", { style: Object.assign({}, styles.iconErrorLine, styles.iconErrorLineRight) })))); };
exports["default"] = ErrorIcon;
//# sourceMappingURL=ErrorIcon.js.map

/***/ }),

/***/ "./node_modules/react-bootstrap-sweetalert/dist/components/InfoIcon.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-bootstrap-sweetalert/dist/components/InfoIcon.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var styles = __importStar(__webpack_require__(/*! ../styles/SweetAlertStyles */ "./node_modules/react-bootstrap-sweetalert/dist/styles/SweetAlertStyles.js"));
var InfoIcon = function () { return (react_1.default.createElement("div", { style: Object.assign({}, styles.icon, styles.iconInfo) },
    react_1.default.createElement("div", { style: styles.iconInfoBefore }),
    react_1.default.createElement("div", { style: styles.iconInfoAfter }))); };
exports["default"] = InfoIcon;
//# sourceMappingURL=InfoIcon.js.map

/***/ }),

/***/ "./node_modules/react-bootstrap-sweetalert/dist/components/Input.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-bootstrap-sweetalert/dist/components/Input.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var styles = __importStar(__webpack_require__(/*! ../styles/SweetAlertStyles */ "./node_modules/react-bootstrap-sweetalert/dist/styles/SweetAlertStyles.js"));
var Input = /** @class */ (function (_super) {
    __extends(Input, _super);
    function Input() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputElement = null;
        _this.setInputElementRef = function (element) {
            _this.inputElement = element;
        };
        return _this;
    }
    Input.prototype.componentDidMount = function () {
        if (this.props.type === 'input') {
            try {
                this.inputElement.focus();
            }
            catch (e) {
                // whoops
            }
        }
    };
    Input.prototype.render = function () {
        var _this = this;
        return (react_1.default.createElement("div", { style: { position: 'relative' } },
            this.props.inputType === 'textarea' ? (react_1.default.createElement("textarea", { ref: this.setInputElementRef, rows: 4, className: "form-control", value: this.props.inputValue || '', onChange: function (e) { return _this.props.onChangeInput(e); }, onKeyDown: function (e) { return _this.props.onInputKeyDown(e); }, placeholder: this.props.placeholder })) : (react_1.default.createElement("input", { type: this.props.inputType, ref: this.setInputElementRef, className: "form-control", value: this.props.inputValue || '', onChange: function (e) { return _this.props.onChangeInput(e); }, onKeyDown: function (e) { return _this.props.onInputKeyDown(e); }, placeholder: this.props.placeholder })),
            this.props.showValidationMessage && (react_1.default.createElement("div", { style: styles.inputErrorIcon },
                react_1.default.createElement("div", { style: Object.assign({}, styles.inputErrorIconBeforeAfter, styles.inputErrorIconBefore) }),
                react_1.default.createElement("div", { style: Object.assign({}, styles.inputErrorIconBeforeAfter, styles.inputErrorIconAfter) })))));
    };
    return Input;
}(react_1.default.Component));
exports["default"] = Input;
//# sourceMappingURL=Input.js.map

/***/ }),

/***/ "./node_modules/react-bootstrap-sweetalert/dist/components/Overlay.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-bootstrap-sweetalert/dist/components/Overlay.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var SweetAlertStyles_1 = __webpack_require__(/*! ../styles/SweetAlertStyles */ "./node_modules/react-bootstrap-sweetalert/dist/styles/SweetAlertStyles.js");
var Overlay = /** @class */ (function (_super) {
    __extends(Overlay, _super);
    function Overlay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.overlayElement = null;
        _this.setOverlayElementRef = function (element) {
            _this.overlayElement = element;
        };
        return _this;
    }
    Overlay.prototype.componentDidMount = function () {
        if (this.overlayElement) {
            this.overlayElement.scrollTop = 0;
        }
    };
    Overlay.prototype.render = function () {
        var _a = this.props, show = _a.show, onClick = _a.onClick, onKeyDown = _a.onKeyDown, children = _a.children;
        return show ? (react_1.default.createElement("div", { ref: this.setOverlayElementRef, style: __assign(__assign({}, SweetAlertStyles_1.overlay), SweetAlertStyles_1.sweetAlertContainer), onClick: function (e) { return onClick(e); }, tabIndex: 0, onKeyDown: function (e) { return onKeyDown(e); } }, children)) : (react_1.default.createElement("div", { style: SweetAlertStyles_1.sweetAlertContainer, tabIndex: 0, onKeyDown: function (e) { return onKeyDown(e); } }, children));
    };
    return Overlay;
}(react_1.default.Component));
exports["default"] = Overlay;
//# sourceMappingURL=Overlay.js.map

/***/ }),

/***/ "./node_modules/react-bootstrap-sweetalert/dist/components/SuccessIcon.js":
/*!********************************************************************************!*\
  !*** ./node_modules/react-bootstrap-sweetalert/dist/components/SuccessIcon.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var styles = __importStar(__webpack_require__(/*! ../styles/SweetAlertStyles */ "./node_modules/react-bootstrap-sweetalert/dist/styles/SweetAlertStyles.js"));
var SuccessIcon = function () { return (react_1.default.createElement("div", { style: Object.assign({}, styles.icon, styles.iconSuccess) },
    react_1.default.createElement("div", { style: Object.assign({}, styles.iconSuccessBeforeAfter, styles.iconSuccessBefore) }),
    react_1.default.createElement("span", { style: Object.assign({}, styles.iconSuccessLine, styles.iconSuccessLineTip) }),
    react_1.default.createElement("span", { style: Object.assign({}, styles.iconSuccessLine, styles.iconSuccessLineLong) }),
    react_1.default.createElement("div", { style: styles.iconSuccessPlaceholder }),
    react_1.default.createElement("div", { style: styles.iconSuccessFix }),
    react_1.default.createElement("div", { style: Object.assign({}, styles.iconSuccessBeforeAfter, styles.iconSuccessAfter) }))); };
exports["default"] = SuccessIcon;
//# sourceMappingURL=SuccessIcon.js.map

/***/ }),

/***/ "./node_modules/react-bootstrap-sweetalert/dist/components/SweetAlert.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-bootstrap-sweetalert/dist/components/SweetAlert.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
// third-party
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
// components
var SuccessIcon_1 = __importDefault(__webpack_require__(/*! ./SuccessIcon */ "./node_modules/react-bootstrap-sweetalert/dist/components/SuccessIcon.js"));
var ErrorIcon_1 = __importDefault(__webpack_require__(/*! ./ErrorIcon */ "./node_modules/react-bootstrap-sweetalert/dist/components/ErrorIcon.js"));
var InfoIcon_1 = __importDefault(__webpack_require__(/*! ./InfoIcon */ "./node_modules/react-bootstrap-sweetalert/dist/components/InfoIcon.js"));
var WarningIcon_1 = __importDefault(__webpack_require__(/*! ./WarningIcon */ "./node_modules/react-bootstrap-sweetalert/dist/components/WarningIcon.js"));
var CustomIcon_1 = __importDefault(__webpack_require__(/*! ./CustomIcon */ "./node_modules/react-bootstrap-sweetalert/dist/components/CustomIcon.js"));
var Buttons_1 = __importDefault(__webpack_require__(/*! ./Buttons */ "./node_modules/react-bootstrap-sweetalert/dist/components/Buttons.js"));
var Input_1 = __importDefault(__webpack_require__(/*! ./Input */ "./node_modules/react-bootstrap-sweetalert/dist/components/Input.js"));
var ValidationMessage_1 = __importDefault(__webpack_require__(/*! ./ValidationMessage */ "./node_modules/react-bootstrap-sweetalert/dist/components/ValidationMessage.js"));
var Title_1 = __importDefault(__webpack_require__(/*! ./Title */ "./node_modules/react-bootstrap-sweetalert/dist/components/Title.js"));
var Content_1 = __importDefault(__webpack_require__(/*! ./Content */ "./node_modules/react-bootstrap-sweetalert/dist/components/Content.js"));
var Overlay_1 = __importDefault(__webpack_require__(/*! ./Overlay */ "./node_modules/react-bootstrap-sweetalert/dist/components/Overlay.js"));
// other
var styles = __importStar(__webpack_require__(/*! ../styles/SweetAlertStyles */ "./node_modules/react-bootstrap-sweetalert/dist/styles/SweetAlertStyles.js"));
var Patterns = __importStar(__webpack_require__(/*! ../constants/patterns */ "./node_modules/react-bootstrap-sweetalert/dist/constants/patterns.js"));
var prop_types_1 = __webpack_require__(/*! ../prop-types */ "./node_modules/react-bootstrap-sweetalert/dist/prop-types.js");
var default_props_1 = __webpack_require__(/*! ../default-props */ "./node_modules/react-bootstrap-sweetalert/dist/default-props.js");
var SWEET_ALERT_DEFAULT_STYLES = styles.sweetAlert;
var _resetting = {};
var debugLogger = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    // uncomment the next line to get some debugging logs.
    // console.log(...args);
};
var SweetAlert = /** @class */ (function (_super) {
    __extends(SweetAlert, _super);
    function SweetAlert(props) {
        var _this = _super.call(this, props) || this;
        _this.inputElement = null;
        _this.unsupportedProp = function (oldProp, message) {
            try {
                console.warn("react-bootstrap-sweetalert: Unsupported prop '" + oldProp + "'. Please " + message);
            }
            catch (e) {
                // do nothing
            }
        };
        _this.focusInput = function () {
            debugLogger('inputElement', _this.inputElement);
            if (_this.inputElement) {
                debugLogger('inputElement trying to focus', _this.inputElement);
                try {
                    _this.inputElement.focus();
                }
                catch (e) {
                    debugLogger('inputElement focus error', e);
                    // whoops
                }
            }
        };
        _this.getIcon = function () {
            switch (_this.state.type) {
                case 'danger':
                case 'error':
                    return react_1.default.createElement(ErrorIcon_1.default, null);
                case 'warning':
                    return react_1.default.createElement(WarningIcon_1.default, null);
                case 'info':
                    return react_1.default.createElement(InfoIcon_1.default, null);
                case 'success':
                    return react_1.default.createElement(SuccessIcon_1.default, null);
                case 'custom':
                    if (_this.props.customIcon) {
                        if (typeof _this.props.customIcon == 'string') {
                            return react_1.default.createElement(CustomIcon_1.default, { iconUrl: _this.props.customIcon });
                        }
                        return _this.props.customIcon;
                    }
                    return null;
                default:
                    return null;
            }
        };
        _this.onChangeInput = function (e) {
            var target = e.target;
            _this.setState({
                inputValue: target.value,
                showValidationMessage: false
            });
        };
        _this.isValidInput = function () {
            if (!_this.props.required) {
                return true;
            }
            var regex = _this.props.validationRegex || (_this.props.inputType === 'email' ? Patterns.emailRegex : Patterns.defaultRegex);
            return regex.test(_this.state.inputValue);
        };
        _this.isDisabled = function () {
            return _this.props.onCancel && _this.props.disabled;
        };
        _this.onAlertClose = function (callback) {
            _resetting[_this.state.id] = true;
            debugLogger('onAlertClose resetting state');
            _this.setState(__assign(__assign({}, SweetAlert.getDefaultState()), { id: _this.state.id }), function () {
                _resetting[_this.state.id] = false;
                callback();
            });
        };
        _this.beforeCloseAlert = function (closingAction, callback) {
            debugLogger('in beforeCloseAlert: setting show to false');
            _this.setState({ show: false, closingAction: closingAction }, function () {
                debugLogger('state updated', _this.state.show);
                if (!_this.state.show) {
                    debugLogger('invoking callback');
                    callback();
                }
            });
        };
        _this.onConfirm = function (handleCloseAnimations) {
            if (handleCloseAnimations === void 0) { handleCloseAnimations = true; }
            if (_this.isDisabled()) {
                return;
            }
            // if this is an input alert, then we will send the input value to the props.onConfirm function
            var isInput = _this.state.type === 'input';
            var inputValue = _this.state.inputValue;
            // if this is a controlled alert, then we will send the dependencies value to the props.onConfirm function
            var isControlled = _this.state.type === 'controlled';
            var dependencies = __spreadArrays(_this.state.dependencies);
            if (isInput && !_this.isValidInput()) {
                _this.setState({
                    showValidationMessage: true
                });
                return;
            }
            var confirm = function () {
                debugLogger('in confirm callback');
                if (isInput) {
                    _this.onAlertClose(function () {
                        _this.props.onConfirm(inputValue);
                    });
                }
                else if (isControlled) {
                    _this.onAlertClose(function () {
                        _this.props.onConfirm(dependencies);
                    });
                }
                else {
                    _this.onAlertClose(function () { return _this.props.onConfirm(); });
                }
            };
            if (handleCloseAnimations) {
                debugLogger('calling beforeCloseAlert');
                _this.beforeCloseAlert('confirm', function () { return confirm(); });
            }
            else {
                confirm();
            }
        };
        _this.onCancel = function (handleCloseAnimations) {
            if (handleCloseAnimations === void 0) { handleCloseAnimations = true; }
            var cancel = function () {
                _this.onAlertClose(function () {
                    if (_this.props.onCancel) {
                        _this.props.onCancel();
                    }
                });
            };
            if (handleCloseAnimations) {
                _this.beforeCloseAlert('cancel', function () { return cancel(); });
            }
            else {
                cancel();
            }
        };
        _this.onInputKeyDown = function (e) {
            if (e.keyCode == 13) {
                e.stopPropagation();
                _this.onConfirm();
            }
        };
        _this.onKeyDown = function (e) {
            if (e.keyCode == 27) {
                if (_this.props.allowEscape && _this.props.onCancel) {
                    e.stopPropagation();
                    _this.onCancel();
                }
            }
        };
        _this.onClickInside = function (e) {
            e.stopPropagation();
        };
        _this.onClickOutside = function () {
            if (_this.props.closeOnClickOutside && _this.props.onCancel) {
                _this.onCancel();
            }
        };
        _this.setAutoFocusInputRef = function (element) {
            _this.inputElement = element;
        };
        _this.getComposedStyle = function () {
            return Object.assign({}, SWEET_ALERT_DEFAULT_STYLES, _this.props.style, { animation: _this.state.animation });
        };
        _this.getAlertContent = function () {
            // Support for render props for content of alert
            if (typeof _this.props.children === 'function') {
                var renderProps = {
                    onEnterKeyDownConfirm: function (event) {
                        if (event.key === 'Enter') {
                            event.preventDefault();
                            event.stopPropagation();
                            _this.onConfirm();
                        }
                    },
                    confirm: function () { return _this.onConfirm(); },
                    cancel: function () { return _this.onCancel(); },
                    setAutoFocusInputRef: _this.setAutoFocusInputRef.bind(_this),
                };
                return _this.props.children(renderProps);
            }
            return _this.props.children;
        };
        _this.getCloseButton = function () {
            if (!_this.props.showCloseButton || !_this.props.onCancel) {
                return null;
            }
            return (react_1.default.createElement("span", { className: 'btn', style: Object.assign({}, styles.closeButton, _this.props.closeBtnStyle), onClick: function () { return _this.onCancel(); } }, "x"));
        };
        _this.getInputField = function () {
            if (_this.state.type !== 'input') {
                return null;
            }
            return (react_1.default.createElement(Input_1.default, __assign({}, _this.props, _this.state, { type: _this.state.type, onInputKeyDown: _this.onInputKeyDown, onChangeInput: _this.onChangeInput })));
        };
        _this.getValidationMessage = function () {
            if (!_this.state.showValidationMessage) {
                return null;
            }
            return react_1.default.createElement(ValidationMessage_1.default, __assign({}, _this.props));
        };
        _this.getButtons = function () {
            return (react_1.default.createElement(Buttons_1.default, __assign({}, _this.props, { type: _this.state.type, onConfirm: _this.onConfirm, onCancel: _this.onCancel, focusConfirmBtn: _this.state.focusConfirmBtn, focusCancelBtn: _this.state.focusCancelBtn, disabled: _this.isDisabled() })));
        };
        _this.getInjectedStyles = function () {
            return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("style", { type: "text/css", dangerouslySetInnerHTML: {
                        __html: "\n                body.sweetalert-overflow-hidden {\n                  overflow: hidden;\n                }\n                body .sweet-alert button {\n                  outline: none !important;\n                }\n              "
                    } }),
                react_1.default.createElement("style", { type: "text/css" }, "@-webkit-keyframes showSweetAlert {  0% {    transform: scale(0.7);    -webkit-transform: scale(0.7);  }  45% {    transform: scale(1.05);    -webkit-transform: scale(1.05);  }  80% {    transform: scale(0.95);    -webkit-tranform: scale(0.95);  }  100% {    transform: scale(1);    -webkit-transform: scale(1);  }}@keyframes showSweetAlert {  0% {    transform: scale(0.7);    -webkit-transform: scale(0.7);  }  45% {    transform: scale(1.05);    -webkit-transform: scale(1.05);  }  80% {    transform: scale(0.95);    -webkit-tranform: scale(0.95);  }  100% {    transform: scale(1);    -webkit-transform: scale(1);  }}@-webkit-keyframes hideSweetAlert {  0% {    transform: scale(1);    -webkit-transform: scale(1);  }  100% {    transform: scale(0.4);    -webkit-transform: scale(0.4);  }}@keyframes hideSweetAlert {  0% {    transform: scale(1);    -webkit-transform: scale(1);  }  100% {    transform: scale(0.4);    -webkit-transform: scale(0.4);  }}@-webkit-keyframes animateSuccessTip {  0% {    width: 0;    left: 1px;    top: 19px;  }  54% {    width: 0;    left: 1px;    top: 19px;  }  70% {    width: 50px;    left: -8px;    top: 37px;  }  84% {    width: 17px;    left: 21px;    top: 48px;  }  100% {    width: 25px;    left: 14px;    top: 45px;  }}@keyframes animateSuccessTip {  0% {    width: 0;    left: 1px;    top: 19px;  }  54% {    width: 0;    left: 1px;    top: 19px;  }  70% {    width: 50px;    left: -8px;    top: 37px;  }  84% {    width: 17px;    left: 21px;    top: 48px;  }  100% {    width: 25px;    left: 14px;    top: 45px;  }}@-webkit-keyframes animateSuccessLong {  0% {    width: 0;    right: 46px;    top: 54px;  }  65% {    width: 0;    right: 46px;    top: 54px;  }  84% {    width: 55px;    right: 0px;    top: 35px;  }  100% {    width: 47px;    right: 8px;    top: 38px;  }}@keyframes animateSuccessLong {  0% {    width: 0;    right: 46px;    top: 54px;  }  65% {    width: 0;    right: 46px;    top: 54px;  }  84% {    width: 55px;    right: 0px;    top: 35px;  }  100% {    width: 47px;    right: 8px;    top: 38px;  }}@-webkit-keyframes rotatePlaceholder {  0% {    transform: rotate(-45deg);    -webkit-transform: rotate(-45deg);  }  5% {    transform: rotate(-45deg);    -webkit-transform: rotate(-45deg);  }  12% {    transform: rotate(-405deg);    -webkit-transform: rotate(-405deg);  }  100% {    transform: rotate(-405deg);    -webkit-transform: rotate(-405deg);  }}@keyframes rotatePlaceholder {  0% {    transform: rotate(-45deg);    -webkit-transform: rotate(-45deg);  }  5% {    transform: rotate(-45deg);    -webkit-transform: rotate(-45deg);  }  12% {    transform: rotate(-405deg);    -webkit-transform: rotate(-405deg);  }  100% {    transform: rotate(-405deg);    -webkit-transform: rotate(-405deg);  }}@-webkit-keyframes animateErrorIcon {  0% {    transform: rotateX(100deg);    -webkit-transform: rotateX(100deg);    opacity: 0;  }  100% {    transform: rotateX(0deg);    -webkit-transform: rotateX(0deg);    opacity: 1;  }}@keyframes animateErrorIcon {  0% {    transform: rotateX(100deg);    -webkit-transform: rotateX(100deg);    opacity: 0;  }  100% {    transform: rotateX(0deg);    -webkit-transform: rotateX(0deg);    opacity: 1;  }}@-webkit-keyframes animateXMark {  0% {    transform: scale(0.4);    -webkit-transform: scale(0.4);    margin-top: 26px;    opacity: 0;  }  50% {    transform: scale(0.4);    -webkit-transform: scale(0.4);    margin-top: 26px;    opacity: 0;  }  80% {    transform: scale(1.15);    -webkit-transform: scale(1.15);    margin-top: -6px;  }  100% {    transform: scale(1);    -webkit-transform: scale(1);    margin-top: 0;    opacity: 1;  }}@keyframes animateXMark {  0% {    transform: scale(0.4);    -webkit-transform: scale(0.4);    margin-top: 26px;    opacity: 0;  }  50% {    transform: scale(0.4);    -webkit-transform: scale(0.4);    margin-top: 26px;    opacity: 0;  }  80% {    transform: scale(1.15);    -webkit-transform: scale(1.15);    margin-top: -6px;  }  100% {    transform: scale(1);    -webkit-transform: scale(1);    margin-top: 0;    opacity: 1;  }}@-webkit-keyframes pulseWarning {  0% {    border-color: #F8D486;  }  100% {    border-color: #F8BB86;  }}@keyframes pulseWarning {  0% {    border-color: #F8D486;  }  100% {    border-color: #F8BB86;  }}@-webkit-keyframes pulseWarningIns {  0% {    background-color: #F8D486;  }  100% {    background-color: #F8BB86;  }}@keyframes pulseWarningIns {  0% {    background-color: #F8D486;  }  100% {    background-color: #F8BB86;  }}")));
        };
        if (_this.props.beforeUpdate) {
            _this.unsupportedProp('beforeUpdate', 'use props.afterUpdate');
        }
        var newState = Object.assign(SweetAlert.getDefaultState(), {
            hideTimeoutHandlerFunc: _this.hideTimeoutHandler.bind(_this)
        });
        if (_this.props.defaultValue != null) {
            newState.inputValue = _this.props.defaultValue;
        }
        _this.state = newState;
        _this.props.beforeMount();
        return _this;
    }
    SweetAlert.prototype.componentDidMount = function () {
        document.body.classList.add('sweetalert-overflow-hidden');
        this.focusInput();
        if (this.props.afterMount) {
            this.props.afterMount();
        }
    };
    SweetAlert.generateId = function () {
        return '' + Date.now() + Math.ceil(Math.random() * 10000000000) + Math.ceil(Math.random() * 10000000000);
    };
    SweetAlert.getDefaultState = function () {
        return {
            id: SweetAlert.generateId(),
            show: true,
            focusConfirmBtn: true,
            focusCancelBtn: false,
            inputValue: '',
            showValidationMessage: false,
            timer: null,
            animation: "",
            prevTimeout: 0,
            closingAction: null,
            dependencies: [],
        };
    };
    SweetAlert.getDerivedStateFromProps = function (nextProps, nextState) {
        if (_resetting[nextState.id]) {
            return {};
        }
        var newState = {};
        var typeChanged = nextState.type !== SweetAlert.getTypeFromProps(nextProps);
        var dependenciesChanged = nextState.dependencies !== nextProps.dependencies;
        var timeoutChanged = nextState.prevTimeout !== nextProps.timeout;
        // if the type of the alert changed, or the dependencies changed, then update the state from props
        if (typeChanged || dependenciesChanged) {
            newState = __assign(__assign({}, newState), SweetAlert.getStateFromProps(nextProps));
        }
        // if the state is changing, or the timeout changed, then reset the timeout timer
        if (JSON.stringify(newState) !== '{}' || timeoutChanged) {
            newState = __assign(__assign({}, newState), SweetAlert.handleTimeout(nextProps, nextState.timer));
        }
        // return the partially updated state
        return __assign(__assign({}, newState), SweetAlert.handleAnimState(nextProps, nextState, nextState.hideTimeoutHandlerFunc));
    };
    SweetAlert.prototype.componentDidUpdate = function (prevProps, prevState) {
        if (this.props.beforeUpdate) {
            this.props.beforeUpdate(prevProps, prevState);
        }
        if (!prevState.show && this.state.show) {
            this.focusInput();
        }
        this.props.afterUpdate(this.props, this.state);
    };
    SweetAlert.prototype.componentWillUnmount = function () {
        document.body.classList.remove('sweetalert-overflow-hidden');
        if (this.state.timer) {
            clearTimeout(this.state.timer);
        }
        if (this.props.beforeUnmount) {
            this.props.beforeUnmount();
        }
    };
    SweetAlert.prototype.hideTimeoutHandler = function (time) {
        var _this = this;
        setTimeout(function () {
            var closingAction = _this.state.closingAction;
            /**
             * Removing the closing action (shouldn't trigger another animation timeout)
             */
            _this.setState({ show: false, closingAction: null }, function () {
                // handle the action that was started before the closing animation was started
                switch (closingAction) {
                    case 'confirm':
                        _this.onConfirm(false);
                        break;
                    case 'cancel':
                        _this.onCancel(false);
                        break;
                    default:
                        break;
                }
            });
        }, time);
    };
    ;
    SweetAlert.handleTimeout = function (props, currentTimer) {
        if (currentTimer) {
            clearTimeout(currentTimer);
        }
        if (props.timeout && props.timeout > 0) {
            var timer = setTimeout(function () { return props.onConfirm(); }, props.timeout);
            return { timer: timer, prevTimeout: props.timeout };
        }
        return null;
    };
    SweetAlert.isAnimation = function (animProp) {
        return animProp && typeof animProp !== 'boolean';
    };
    SweetAlert.animationFromProp = function (animProp) {
        return animProp.name + ' ' + animProp.duration + 'ms';
    };
    SweetAlert.handleAnimState = function (props, state, hideTimeout) {
        var userDefinedShow = typeof props.show === 'boolean';
        var show = (userDefinedShow && !state.closingAction) ? props.show : state.show;
        var animation = '';
        if (show) {
            if (props.openAnim) {
                if (SweetAlert.isAnimation(props.openAnim)) {
                    animation = SweetAlert.animationFromProp(props.openAnim);
                }
                else if (SweetAlert.isAnimation(SweetAlert.defaultProps.openAnim)) {
                    animation = SweetAlert.animationFromProp(SweetAlert.defaultProps.openAnim);
                }
            }
        }
        else if (state.closingAction && props.closeAnim) {
            var animProp = void 0;
            if (SweetAlert.isAnimation(props.closeAnim)) {
                animProp = props.closeAnim;
            }
            else if (SweetAlert.isAnimation(SweetAlert.defaultProps.closeAnim)) {
                animProp = SweetAlert.defaultProps.closeAnim;
            }
            if (animProp) {
                animation = SweetAlert.animationFromProp(animProp);
                hideTimeout(animProp.duration);
                show = true;
            }
        }
        return { show: show, animation: animation };
    };
    ;
    SweetAlert.prototype.render = function () {
        if (!this.state.show) {
            return null;
        }
        return (react_1.default.createElement("div", null,
            this.getInjectedStyles(),
            react_1.default.createElement(Overlay_1.default, { show: !this.props.hideOverlay, onClick: this.onClickOutside, onKeyDown: this.onKeyDown },
                react_1.default.createElement("div", { style: this.getComposedStyle(), tabIndex: 0, onKeyDown: this.onKeyDown, onClick: this.onClickInside, className: 'sweet-alert ' + this.props.customClass },
                    this.getCloseButton(),
                    this.getIcon(),
                    react_1.default.createElement(Title_1.default, null, this.props.title),
                    react_1.default.createElement(Content_1.default, null, this.getAlertContent()),
                    this.getInputField(),
                    this.getValidationMessage(),
                    this.getButtons()))));
    };
    SweetAlert.propTypes = prop_types_1.SWEET_ALERT_PROP_TYPES;
    SweetAlert.defaultProps = default_props_1.SWEET_ALERT_DEFAULT_PROPS;
    SweetAlert.SuccessIcon = SuccessIcon_1.default;
    SweetAlert.ErrorIcon = ErrorIcon_1.default;
    SweetAlert.InfoIcon = InfoIcon_1.default;
    SweetAlert.WarningIcon = WarningIcon_1.default;
    SweetAlert.CustomIcon = CustomIcon_1.default;
    SweetAlert.Buttons = Buttons_1.default;
    SweetAlert.Input = Input_1.default;
    SweetAlert.ValidationMessage = ValidationMessage_1.default;
    SweetAlert.Title = Title_1.default;
    SweetAlert.Content = Content_1.default;
    SweetAlert.getStateFromProps = function (props) {
        var type = SweetAlert.getTypeFromProps(props);
        return {
            type: type,
            focusConfirmBtn: props.focusConfirmBtn && type !== 'input',
            focusCancelBtn: props.focusCancelBtn && type !== 'input',
            dependencies: props.dependencies,
        };
    };
    SweetAlert.getTypeFromProps = function (props) {
        if (props.type)
            return props.type;
        if (props.secondary)
            return 'secondary';
        if (props.info)
            return 'info';
        if (props.success)
            return 'success';
        if (props.warning)
            return 'warning';
        if (props.danger || props.error)
            return 'danger';
        if (props.input)
            return 'input';
        if (props.custom)
            return 'custom';
        return 'default';
    };
    return SweetAlert;
}(react_1.default.Component));
exports["default"] = SweetAlert;
//# sourceMappingURL=SweetAlert.js.map

/***/ }),

/***/ "./node_modules/react-bootstrap-sweetalert/dist/components/Title.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-bootstrap-sweetalert/dist/components/Title.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var SweetAlertStyles_1 = __webpack_require__(/*! ../styles/SweetAlertStyles */ "./node_modules/react-bootstrap-sweetalert/dist/styles/SweetAlertStyles.js");
var Title = function (_a) {
    var children = _a.children;
    return react_1.default.createElement("h2", { style: SweetAlertStyles_1.title }, children);
};
exports["default"] = Title;
//# sourceMappingURL=Title.js.map

/***/ }),

/***/ "./node_modules/react-bootstrap-sweetalert/dist/components/ValidationMessage.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/react-bootstrap-sweetalert/dist/components/ValidationMessage.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var styles = __importStar(__webpack_require__(/*! ../styles/SweetAlertStyles */ "./node_modules/react-bootstrap-sweetalert/dist/styles/SweetAlertStyles.js"));
var defaultMessage = 'Please enter a response!';
var emailMessage = 'Please enter a valid email!';
var ValidationMessage = function (_a) {
    var validationMsg = _a.validationMsg, inputType = _a.inputType;
    var message = validationMsg || (inputType === 'email' ? emailMessage : defaultMessage);
    return (react_1.default.createElement("div", { style: styles.validationMessage },
        react_1.default.createElement("div", { style: styles.exclamationIcon }, "!"),
        message));
};
exports["default"] = ValidationMessage;
//# sourceMappingURL=ValidationMessage.js.map

/***/ }),

/***/ "./node_modules/react-bootstrap-sweetalert/dist/components/WarningIcon.js":
/*!********************************************************************************!*\
  !*** ./node_modules/react-bootstrap-sweetalert/dist/components/WarningIcon.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var styles = __importStar(__webpack_require__(/*! ../styles/SweetAlertStyles */ "./node_modules/react-bootstrap-sweetalert/dist/styles/SweetAlertStyles.js"));
exports["default"] = (function () { return (react_1.default.createElement("div", { style: Object.assign({}, styles.icon, styles.iconWarning) },
    react_1.default.createElement("span", { style: styles.iconWarningBody }),
    react_1.default.createElement("span", { style: styles.iconWarningDot }))); });
//# sourceMappingURL=WarningIcon.js.map

/***/ }),

/***/ "./node_modules/react-bootstrap-sweetalert/dist/constants/patterns.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-bootstrap-sweetalert/dist/constants/patterns.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.emailRegex = exports.defaultRegex = void 0;
exports.defaultRegex = /^.+$/;
// tslint:disable-next-line:max-line-length
exports.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//# sourceMappingURL=patterns.js.map

/***/ }),

/***/ "./node_modules/react-bootstrap-sweetalert/dist/default-props.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-bootstrap-sweetalert/dist/default-props.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SWEET_ALERT_DEFAULT_PROPS = void 0;
exports.SWEET_ALERT_DEFAULT_PROPS = {
    allowEscape: true,
    closeOnClickOutside: true,
    inputType: "text",
    customClass: "",
    validationMsg: null,
    validationRegex: null,
    hideOverlay: false,
    required: true,
    disabled: false,
    focusConfirmBtn: true,
    focusCancelBtn: false,
    showCloseButton: false,
    confirmBtnBsStyle: "primary",
    cancelBtnBsStyle: "link",
    beforeMount: function () { },
    afterMount: function () { },
    beforeUpdate: null,
    afterUpdate: function () { },
    beforeUnmount: function () { },
    style: {},
    closeBtnStyle: {},
    timeout: 0,
    openAnim: { name: "showSweetAlert", duration: 300 },
    closeAnim: false,
    reverseButtons: false,
    dependencies: [],
};
//# sourceMappingURL=default-props.js.map

/***/ }),

/***/ "./node_modules/react-bootstrap-sweetalert/dist/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-bootstrap-sweetalert/dist/index.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var SweetAlert_1 = __importDefault(__webpack_require__(/*! ./components/SweetAlert */ "./node_modules/react-bootstrap-sweetalert/dist/components/SweetAlert.js"));
exports["default"] = SweetAlert_1.default;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-bootstrap-sweetalert/dist/prop-types.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-bootstrap-sweetalert/dist/prop-types.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SWEET_ALERT_PROP_TYPES = void 0;
var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));
exports.SWEET_ALERT_PROP_TYPES = {
    type: prop_types_1.default.oneOf(["default", "info", "success", "warning", "danger", "error", "input", "custom", "controlled"]),
    // shortcut props for type
    info: prop_types_1.default.bool,
    success: prop_types_1.default.bool,
    warning: prop_types_1.default.bool,
    danger: prop_types_1.default.bool,
    error: prop_types_1.default.bool,
    input: prop_types_1.default.bool,
    custom: prop_types_1.default.bool,
    controlled: prop_types_1.default.bool,
    title: prop_types_1.default.oneOfType([prop_types_1.default.node, prop_types_1.default.string]).isRequired,
    onCancel: prop_types_1.default.func,
    onConfirm: prop_types_1.default.func.isRequired,
    confirmBtnText: prop_types_1.default.oneOfType([prop_types_1.default.node, prop_types_1.default.string]),
    confirmBtnBsStyle: prop_types_1.default.string,
    confirmBtnCssClass: prop_types_1.default.string,
    confirmBtnStyle: prop_types_1.default.object,
    cancelBtnText: prop_types_1.default.oneOfType([prop_types_1.default.node, prop_types_1.default.string]),
    cancelBtnBsStyle: prop_types_1.default.string,
    cancelBtnCssClass: prop_types_1.default.string,
    cancelBtnStyle: prop_types_1.default.object,
    btnSize: prop_types_1.default.string,
    customIcon: prop_types_1.default.oneOfType([prop_types_1.default.node, prop_types_1.default.string]),
    show: prop_types_1.default.bool,
    required: prop_types_1.default.bool,
    placeholder: prop_types_1.default.string,
    validationMsg: prop_types_1.default.string,
    validationRegex: prop_types_1.default.object,
    defaultValue: prop_types_1.default.oneOfType([prop_types_1.default.number, prop_types_1.default.string]),
    inputType: prop_types_1.default.string,
    style: prop_types_1.default.object,
    closeBtnStyle: prop_types_1.default.object,
    customClass: prop_types_1.default.string,
    showConfirm: prop_types_1.default.bool,
    showCancel: prop_types_1.default.bool,
    showCloseButton: prop_types_1.default.bool,
    allowEscape: prop_types_1.default.bool,
    closeOnClickOutside: prop_types_1.default.bool,
    hideOverlay: prop_types_1.default.bool,
    disabled: prop_types_1.default.bool,
    focusConfirmBtn: prop_types_1.default.bool,
    focusCancelBtn: prop_types_1.default.bool,
    beforeMount: prop_types_1.default.func,
    afterMount: prop_types_1.default.func,
    beforeUpdate: prop_types_1.default.func,
    afterUpdate: prop_types_1.default.func,
    beforeUnmount: prop_types_1.default.func,
    timeout: prop_types_1.default.number,
    openAnim: prop_types_1.default.any,
    closeAnim: prop_types_1.default.any,
    reverseButtons: prop_types_1.default.bool,
    customButtons: prop_types_1.default.node,
    dependencies: prop_types_1.default.arrayOf(prop_types_1.default.any),
};
//# sourceMappingURL=prop-types.js.map

/***/ }),

/***/ "./node_modules/react-bootstrap-sweetalert/dist/styles/SweetAlertStyles.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/react-bootstrap-sweetalert/dist/styles/SweetAlertStyles.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.closeButton = exports.inputErrorIconAfter = exports.inputErrorIconBefore = exports.inputErrorIconBeforeAfter = exports.inputErrorIcon = exports.exclamationIcon = exports.validationMessage = exports.button = exports.iconCustom = exports.iconSuccessLineLong = exports.iconSuccessLineTip = exports.iconSuccessLine = exports.iconSuccessFix = exports.iconSuccessPlaceholder = exports.iconSuccessAfter = exports.iconSuccessBefore = exports.iconSuccessBeforeAfter = exports.iconSuccess = exports.iconInfoAfter = exports.iconInfoBefore = exports.iconInfo = exports.iconWarningDot = exports.iconWarningBody = exports.iconWarning = exports.iconErrorLineRight = exports.iconErrorLineLeft = exports.iconErrorLine = exports.iconErrorX = exports.iconError = exports.icon = exports.actions = exports.contentContainer = exports.title = exports.sweetAlert = exports.sweetAlertContainer = exports.overlay = void 0;
exports.overlay = {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    position: "fixed",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 5000
};
exports.sweetAlertContainer = {
    display: "flex",
    position: "fixed",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: ".625em",
    overflowX: "hidden",
    overflowY: "auto",
    zIndex: 5400
};
exports.sweetAlert = {
    display: "flex",
    overflow: "hidden",
    backgroundColor: "#fff",
    outline: "none",
    width: "32em",
    padding: "1.25rem",
    margin: "auto",
    borderRadius: ".3125em",
    textAlign: "center",
    position: "relative",
    flexDirection: "column",
    justifyContent: "center",
    maxWidth: "100%",
    zIndex: 5600
};
exports.title = {
    position: "relative",
    maxWidth: "100%",
    margin: "0 0 .4em",
    padding: 0,
    fontSize: "1.875em",
    fontWeight: 600,
    textAlign: "center",
    textTransform: "none",
    wordWrap: "break-word"
};
exports.contentContainer = {
    zIndex: 1,
    justifyContent: "center",
    margin: 0,
    padding: 0,
    fontSize: "1.125em",
    fontWeight: 300,
    lineHeight: "normal",
    textAlign: "center",
    wordWrap: "break-word"
};
exports.actions = {
    display: "flex",
    zIndex: 1,
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    margin: "1.25em auto 0"
};
exports.icon = {
    width: 80,
    height: 80,
    borderWidth: 4,
    borderStyle: "solid",
    borderColor: "gray",
    borderRadius: "50%",
    margin: "20px auto",
    position: "relative",
    boxSizing: "content-box"
};
exports.iconError = {
    borderColor: "#d43f3a",
    animation: "animateErrorIcon 0.5s"
};
exports.iconErrorX = {
    position: "relative",
    display: "block",
    animation: "animateXMark 0.5s"
};
exports.iconErrorLine = {
    position: "absolute",
    height: 5,
    width: 47,
    backgroundColor: "#d9534f",
    display: "block",
    top: 37,
    borderRadius: 2
};
exports.iconErrorLineLeft = {
    transform: "rotate(45deg)",
    left: 17
};
exports.iconErrorLineRight = {
    transform: "rotate(-45deg)",
    right: 16
};
exports.iconWarning = {
    borderColor: "#eea236",
    animation: "pulseWarning 0.75s infinite alternate"
};
exports.iconWarningBody = {
    position: "absolute",
    width: 5,
    height: 47,
    left: "50%",
    top: 10,
    borderRadius: 2,
    marginLeft: -2,
    backgroundColor: "#f0ad4e",
    animation: "pulseWarningIns 0.75s infinite alternate"
};
exports.iconWarningDot = {
    position: "absolute",
    width: 7,
    height: 7,
    borderRadius: "50%",
    marginLeft: -3,
    left: "50%",
    bottom: 10,
    backgroundColor: "#f0ad4e",
    animation: "pulseWarningIns 0.75s infinite alternate"
};
exports.iconInfo = {
    borderColor: "#46b8da"
};
exports.iconInfoBefore = {
    content: "",
    position: "absolute",
    width: 5,
    height: 29,
    left: "50%",
    bottom: 17,
    borderRadius: 2,
    marginLeft: -2,
    backgroundColor: "#5bc0de"
};
exports.iconInfoAfter = {
    content: "",
    position: "absolute",
    width: 7,
    height: 7,
    borderRadius: "50%",
    marginLeft: -3,
    left: "50%",
    top: 19,
    backgroundColor: "#5bc0de"
};
exports.iconSuccess = {
    borderColor: "#4cae4c"
};
exports.iconSuccessBeforeAfter = {
    content: "",
    borderRadius: "50%",
    position: "absolute",
    width: 60,
    height: 120,
    background: "white",
    transform: "rotate(45deg)"
};
exports.iconSuccessBefore = {
    borderRadius: "120px 0 0 120px",
    height: 100,
    top: -7,
    left: -33,
    transform: "rotate(-45deg)",
    transformOrigin: "60px 60px"
};
exports.iconSuccessAfter = {
    borderRadius: "0 120px 120px 0",
    top: -11,
    left: 30,
    transform: "rotate(-45deg)",
    transformOrigin: "0px 60px",
    animation: "rotatePlaceholder 4.25s ease-in"
};
exports.iconSuccessPlaceholder = {
    width: 80,
    height: 80,
    border: "4px solid rgba(92, 184, 92, 0.2)",
    borderRadius: "50%",
    boxSizing: "content-box",
    position: "absolute",
    left: -4,
    top: -4,
    zIndex: 2
};
exports.iconSuccessFix = {
    width: 5,
    height: 90,
    backgroundColor: "#fff",
    position: "absolute",
    left: 28,
    top: 8,
    zIndex: 1,
    transform: "rotate(-45deg)"
};
exports.iconSuccessLine = {
    height: 5,
    backgroundColor: "#5cb85c",
    display: "block",
    borderRadius: 2,
    position: "absolute",
    zIndex: 2
};
exports.iconSuccessLineTip = {
    width: 25,
    left: 14,
    top: 46,
    transform: "rotate(45deg)",
    animation: "animateSuccessTip 0.75s"
};
exports.iconSuccessLineLong = {
    width: 47,
    right: 8,
    top: 38,
    transform: "rotate(-45deg)",
    animation: "animateSuccessLong 0.75s"
};
exports.iconCustom = {
    backgroundSize: "contain",
    borderRadius: 0,
    border: "none",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat"
};
exports.button = {
    marginRight: 8,
};
exports.validationMessage = {
    display: "block",
    backgroundColor: "#f1f1f1",
    marginLeft: "-1.25rem",
    marginRight: "-1.25rem",
    marginTop: 20,
    overflow: "hidden",
    padding: 10,
    maxHeight: 100,
    transition: "padding 0.25s, max-height 0.25s",
    color: "#797979",
    fontSize: 16,
    textAlign: "center",
    fontWeight: 300
};
exports.exclamationIcon = {
    display: "inline-block",
    width: 24,
    height: 24,
    borderRadius: "50%",
    backgroundColor: "#ea7d7d",
    color: "white",
    lineHeight: "24px",
    textAlign: "center",
    marginRight: 5
};
exports.inputErrorIcon = {
    position: "absolute",
    top: 8,
    right: 8,
    width: 20,
    height: 20,
    transformOrigin: "50% 50%",
    transition: "all 0.1s",
    opacity: 1,
    transform: "scale(1)"
};
exports.inputErrorIconBeforeAfter = {
    content: "",
    width: 20,
    height: 6,
    backgroundColor: "#f06e57",
    borderRadius: 3,
    position: "absolute",
    top: "50%",
    marginTop: -4,
    left: "50%",
    marginLeft: -9
};
exports.inputErrorIconBefore = {
    transform: "rotate(-45deg)"
};
exports.inputErrorIconAfter = {
    transform: "rotate(45deg)"
};
exports.closeButton = {
    position: "absolute",
    right: 4,
    top: -2,
    fontSize: 25,
    fontWeight: 900,
    color: "rgb(113, 113, 113)",
    zIndex: 1,
    cursor: "pointer"
};
//# sourceMappingURL=SweetAlertStyles.js.map

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/CardHeaderContext.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/CardHeaderContext.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

const context = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
context.displayName = 'CardHeaderContext';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (context);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/Nav.js":
/*!*************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/Nav.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types_extra_lib_all__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types-extra/lib/all */ "./node_modules/prop-types-extra/lib/all.js");
/* harmony import */ var prop_types_extra_lib_all__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types_extra_lib_all__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var uncontrollable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uncontrollable */ "./node_modules/uncontrollable/lib/esm/index.js");
/* harmony import */ var _restart_ui_Nav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @restart/ui/Nav */ "./node_modules/@restart/ui/esm/Nav.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");
/* harmony import */ var _NavbarContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NavbarContext */ "./node_modules/react-bootstrap/esm/NavbarContext.js");
/* harmony import */ var _CardHeaderContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CardHeaderContext */ "./node_modules/react-bootstrap/esm/CardHeaderContext.js");
/* harmony import */ var _NavItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./NavItem */ "./node_modules/react-bootstrap/esm/NavItem.js");
/* harmony import */ var _NavLink__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./NavLink */ "./node_modules/react-bootstrap/esm/NavLink.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");












const defaultProps = {
  justify: false,
  fill: false
};
const Nav = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef((uncontrolledProps, ref) => {
  const {
    as = 'div',
    bsPrefix: initialBsPrefix,
    variant,
    fill,
    justify,
    navbar,
    navbarScroll,
    className,
    activeKey,
    ...props
  } = (0,uncontrollable__WEBPACK_IMPORTED_MODULE_3__.useUncontrolled)(uncontrolledProps, {
    activeKey: 'onSelect'
  });
  const bsPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__.useBootstrapPrefix)(initialBsPrefix, 'nav');
  let navbarBsPrefix;
  let cardHeaderBsPrefix;
  let isNavbar = false;
  const navbarContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_NavbarContext__WEBPACK_IMPORTED_MODULE_6__["default"]);
  const cardHeaderContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_CardHeaderContext__WEBPACK_IMPORTED_MODULE_7__["default"]);

  if (navbarContext) {
    navbarBsPrefix = navbarContext.bsPrefix;
    isNavbar = navbar == null ? true : navbar;
  } else if (cardHeaderContext) {
    ({
      cardHeaderBsPrefix
    } = cardHeaderContext);
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_restart_ui_Nav__WEBPACK_IMPORTED_MODULE_8__["default"], {
    as: as,
    ref: ref,
    activeKey: activeKey,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, {
      [bsPrefix]: !isNavbar,
      [`${navbarBsPrefix}-nav`]: isNavbar,
      [`${navbarBsPrefix}-nav-scroll`]: isNavbar && navbarScroll,
      [`${cardHeaderBsPrefix}-${variant}`]: !!cardHeaderBsPrefix,
      [`${bsPrefix}-${variant}`]: !!variant,
      [`${bsPrefix}-fill`]: fill,
      [`${bsPrefix}-justified`]: justify
    }),
    ...props
  });
});
Nav.displayName = 'Nav';
Nav.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object.assign(Nav, {
  Item: _NavItem__WEBPACK_IMPORTED_MODULE_9__["default"],
  Link: _NavLink__WEBPACK_IMPORTED_MODULE_10__["default"]
}));

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/NavItem.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/NavItem.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createWithBsPrefix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createWithBsPrefix */ "./node_modules/react-bootstrap/esm/createWithBsPrefix.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_0__["default"])('nav-item'));

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/NavLink.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/NavLink.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _restart_ui_Anchor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @restart/ui/Anchor */ "./node_modules/@restart/ui/esm/Anchor.js");
/* harmony import */ var _restart_ui_NavItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @restart/ui/NavItem */ "./node_modules/@restart/ui/esm/NavItem.js");
/* harmony import */ var _restart_ui_SelectableContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @restart/ui/SelectableContext */ "./node_modules/@restart/ui/esm/SelectableContext.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







const defaultProps = {
  disabled: false
};
const NavLink = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({
  bsPrefix,
  className,
  as: Component = _restart_ui_Anchor__WEBPACK_IMPORTED_MODULE_3__["default"],
  active,
  eventKey,
  ...props
}, ref) => {
  bsPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__.useBootstrapPrefix)(bsPrefix, 'nav-link');
  const [navItemProps, meta] = (0,_restart_ui_NavItem__WEBPACK_IMPORTED_MODULE_5__.useNavItem)({
    key: (0,_restart_ui_SelectableContext__WEBPACK_IMPORTED_MODULE_6__.makeEventKey)(eventKey, props.href),
    active,
    ...props
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component, { ...props,
    ...navItemProps,
    ref: ref,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, bsPrefix, props.disabled && 'disabled', meta.isActive && 'active')
  });
});
NavLink.displayName = 'NavLink';
NavLink.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavLink);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/NavbarContext.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/NavbarContext.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
 // TODO: check

const context = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
context.displayName = 'NavbarContext';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (context);

/***/ }),

/***/ "./node_modules/react-intl-currency-input/dist/format-currency.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-intl-currency-input/dist/format-currency.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = formatCurrency;

var _big = _interopRequireDefault(__webpack_require__(/*! big.js */ "./node_modules/big.js/big.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function formatCurrency(value, localeConfig, currencyName) {
  var numberConfig = localeConfig.formats.number[currencyName];
  var formatter = new __webpack_require__.g.Intl.NumberFormat(localeConfig.locale, numberConfig);
  return formatter.format((0, _big["default"])(value));
}

/***/ }),

/***/ "./node_modules/react-intl-currency-input/dist/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-intl-currency-input/dist/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _formatCurrency = _interopRequireDefault(__webpack_require__(/*! ./format-currency */ "./node_modules/react-intl-currency-input/dist/format-currency.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var defaultConfig = {
  locale: 'en-US',
  formats: {
    number: {
      USD: {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }
    }
  }
};

var IntlCurrencyInput = function IntlCurrencyInput(_ref) {
  var InputComponent = _ref.component,
      value = _ref.value,
      defaultValue = _ref.defaultValue,
      config = _ref.config,
      currency = _ref.currency,
      max = _ref.max,
      autoFocus = _ref.autoFocus,
      autoSelect = _ref.autoSelect,
      autoReset = _ref.autoReset,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus,
      onKeyPress = _ref.onKeyPress,
      otherProps = _objectWithoutProperties(_ref, ["component", "value", "defaultValue", "config", "currency", "max", "autoFocus", "autoSelect", "autoReset", "onChange", "onBlur", "onFocus", "onKeyPress"]);

  var inputRef = (0, _react.useCallback)(function (node) {
    var isActive = node === document.activeElement;

    if (node && autoFocus && !isActive) {
      node.focus();
    }
  }, [autoFocus]);

  var _useState = (0, _react.useState)('0'),
      _useState2 = _slicedToArray(_useState, 2),
      maskedValue = _useState2[0],
      setMaskedValue = _useState2[1]; // to prevent a malformed config object


  var safeConfig = (0, _react.useMemo)(function () {
    return function () {
      var maximumFractionDigits = config.formats.number[currency].maximumFractionDigits;

      var finalConfig = _objectSpread(_objectSpread({}, defaultConfig), config); // at the moment this prevents problems when converting numbers
      // with zeroes in-between, otherwise 205 would convert to 25.


      finalConfig.formats.number[currency].minimumFractionDigits = maximumFractionDigits;
      return finalConfig;
    };
  }, [defaultConfig, config]);

  var clean = function clean(number) {
    if (typeof number === 'number') {
      return number;
    } // strips everything that is not a number (positive or negative)


    return Number(number.toString().replace(/[^0-9-]/g, ''));
  };

  var normalizeValue = function normalizeValue(number) {
    var _safeConfig = safeConfig(),
        maximumFractionDigits = _safeConfig.formats.number[currency].maximumFractionDigits;

    var safeNumber = number;

    if (typeof number === 'string') {
      safeNumber = clean(number);

      if (safeNumber % 1 !== 0) {
        safeNumber = safeNumber.toFixed(maximumFractionDigits);
      }
    } else {
      // all input numbers must be a float point (for the cents portion). This is a fallback in case of integer ones.
      safeNumber = Number.isInteger(number) ? Number(number) * Math.pow(10, maximumFractionDigits) : number.toFixed(maximumFractionDigits);
    } // divide it by 10 power the maximum fraction digits.


    return clean(safeNumber) / Math.pow(10, maximumFractionDigits);
  };

  var calculateValues = function calculateValues(inputFieldValue) {
    var value = normalizeValue(inputFieldValue);
    var maskedValue = (0, _formatCurrency["default"])(value, safeConfig(), currency);
    return [value, maskedValue];
  };

  var updateValues = function updateValues(value) {
    var _calculateValues = calculateValues(value),
        _calculateValues2 = _slicedToArray(_calculateValues, 2),
        calculatedValue = _calculateValues2[0],
        calculatedMaskedValue = _calculateValues2[1];

    if (!max || calculatedValue <= max) {
      setMaskedValue(calculatedMaskedValue);
      return [calculatedValue, calculatedMaskedValue];
    } else {
      return [normalizeValue(maskedValue), maskedValue];
    }
  };

  var handleChange = function handleChange(event) {
    event.preventDefault();

    var _updateValues = updateValues(event.target.value),
        _updateValues2 = _slicedToArray(_updateValues, 2),
        value = _updateValues2[0],
        maskedValue = _updateValues2[1];

    if (maskedValue) {
      onChange(event, value, maskedValue);
    }
  };

  var handleBlur = function handleBlur(event) {
    var _updateValues3 = updateValues(event.target.value),
        _updateValues4 = _slicedToArray(_updateValues3, 2),
        value = _updateValues4[0],
        maskedValue = _updateValues4[1];

    if (autoReset) {
      calculateValues(0);
    }

    if (maskedValue) {
      onBlur(event, value, maskedValue);
    }
  };

  var handleFocus = function handleFocus(event) {
    if (autoSelect) {
      event.target.select();
    }

    var _updateValues5 = updateValues(event.target.value),
        _updateValues6 = _slicedToArray(_updateValues5, 2),
        value = _updateValues6[0],
        maskedValue = _updateValues6[1];

    if (maskedValue) {
      onFocus(event, value, maskedValue);
    }
  };

  var handleKeyUp = function handleKeyUp(event) {
    return onKeyPress(event, event.key, event.keyCode);
  };

  (0, _react.useEffect)(function () {
    var currentValue = value || defaultValue || 0;

    var _calculateValues3 = calculateValues(currentValue),
        _calculateValues4 = _slicedToArray(_calculateValues3, 2),
        maskedValue = _calculateValues4[1];

    setMaskedValue(maskedValue);
  }, [currency, value, defaultValue, config]);
  return /*#__PURE__*/_react["default"].createElement(InputComponent, _extends({}, otherProps, {
    ref: inputRef,
    value: maskedValue,
    onChange: handleChange,
    onBlur: handleBlur,
    onFocus: handleFocus,
    onKeyUp: handleKeyUp
  }));
};

IntlCurrencyInput.propTypes = {
  defaultValue: _propTypes.number,
  value: _propTypes.number,
  max: _propTypes.number,
  component: _propTypes.node.isRequired,
  currency: _propTypes.string.isRequired,
  config: (0, _propTypes.shape)().isRequired,
  autoFocus: _propTypes.bool.isRequired,
  autoSelect: _propTypes.bool.isRequired,
  autoReset: _propTypes.bool.isRequired,
  onChange: _propTypes.func.isRequired,
  onBlur: _propTypes.func.isRequired,
  onFocus: _propTypes.func.isRequired,
  onKeyPress: _propTypes.func.isRequired
};
IntlCurrencyInput.defaultProps = {
  component: 'input',
  currency: 'USD',
  value: 0,
  config: defaultConfig,
  autoFocus: false,
  autoSelect: false,
  autoReset: false,
  onChange: function onChange(f) {
    return f;
  },
  onBlur: function onBlur(f) {
    return f;
  },
  onFocus: function onFocus(f) {
    return f;
  },
  onKeyPress: function onKeyPress(f) {
    return f;
  }
};
var _default = IntlCurrencyInput;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-js-pagination/dist/Page.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-js-pagination/dist/Page.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react-js-pagination/node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Page =
/*#__PURE__*/
function (_Component) {
  _inherits(Page, _Component);

  function Page() {
    _classCallCheck(this, Page);

    return _possibleConstructorReturn(this, _getPrototypeOf(Page).apply(this, arguments));
  }

  _createClass(Page, [{
    key: "handleClick",
    value: function handleClick(e) {
      var _this$props = this.props,
          isDisabled = _this$props.isDisabled,
          pageNumber = _this$props.pageNumber;
      e.preventDefault();

      if (isDisabled) {
        return;
      }

      this.props.onClick(pageNumber);
    }
  }, {
    key: "render",
    value: function render() {
      var _cx;

      var _this$props2 = this.props,
          pageText = _this$props2.pageText,
          pageNumber = _this$props2.pageNumber,
          activeClass = _this$props2.activeClass,
          itemClass = _this$props2.itemClass,
          linkClass = _this$props2.linkClass,
          activeLinkClass = _this$props2.activeLinkClass,
          disabledClass = _this$props2.disabledClass,
          isActive = _this$props2.isActive,
          isDisabled = _this$props2.isDisabled,
          href = _this$props2.href,
          ariaLabel = _this$props2.ariaLabel;
      var css = (0, _classnames["default"])(itemClass, (_cx = {}, _defineProperty(_cx, activeClass, isActive), _defineProperty(_cx, disabledClass, isDisabled), _cx));
      var linkCss = (0, _classnames["default"])(linkClass, _defineProperty({}, activeLinkClass, isActive));
      return _react["default"].createElement("li", {
        className: css,
        onClick: this.handleClick.bind(this)
      }, _react["default"].createElement("a", {
        className: linkCss,
        href: href,
        "aria-label": ariaLabel
      }, pageText));
    }
  }]);

  return Page;
}(_react.Component);

exports["default"] = Page;

_defineProperty(Page, "propTypes", {
  pageText: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element]),
  pageNumber: _propTypes["default"].number.isRequired,
  onClick: _propTypes["default"].func.isRequired,
  isActive: _propTypes["default"].bool.isRequired,
  isDisabled: _propTypes["default"].bool,
  activeClass: _propTypes["default"].string,
  activeLinkClass: _propTypes["default"].string,
  itemClass: _propTypes["default"].string,
  linkClass: _propTypes["default"].string,
  disabledClass: _propTypes["default"].string,
  href: _propTypes["default"].string
});

_defineProperty(Page, "defaultProps", {
  activeClass: "active",
  disabledClass: "disabled",
  itemClass: undefined,
  linkClass: undefined,
  activeLinkCLass: undefined,
  isActive: false,
  isDisabled: false,
  href: "#"
});

/***/ }),

/***/ "./node_modules/react-js-pagination/dist/Pagination.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-js-pagination/dist/Pagination.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react-js-pagination/node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _paginator = _interopRequireDefault(__webpack_require__(/*! paginator */ "./node_modules/paginator/index.js"));

var _Page = _interopRequireDefault(__webpack_require__(/*! ./Page */ "./node_modules/react-js-pagination/dist/Page.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Pagination =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Pagination, _React$Component);

  function Pagination() {
    _classCallCheck(this, Pagination);

    return _possibleConstructorReturn(this, _getPrototypeOf(Pagination).apply(this, arguments));
  }

  _createClass(Pagination, [{
    key: "isFirstPageVisible",
    value: function isFirstPageVisible(has_previous_page) {
      var _this$props = this.props,
          hideDisabled = _this$props.hideDisabled,
          hideNavigation = _this$props.hideNavigation,
          hideFirstLastPages = _this$props.hideFirstLastPages;
      if (hideFirstLastPages || hideDisabled && !has_previous_page) return false;
      return true;
    }
  }, {
    key: "isPrevPageVisible",
    value: function isPrevPageVisible(has_previous_page) {
      var _this$props2 = this.props,
          hideDisabled = _this$props2.hideDisabled,
          hideNavigation = _this$props2.hideNavigation;
      if (hideNavigation || hideDisabled && !has_previous_page) return false;
      return true;
    }
  }, {
    key: "isNextPageVisible",
    value: function isNextPageVisible(has_next_page) {
      var _this$props3 = this.props,
          hideDisabled = _this$props3.hideDisabled,
          hideNavigation = _this$props3.hideNavigation;
      if (hideNavigation || hideDisabled && !has_next_page) return false;
      return true;
    }
  }, {
    key: "isLastPageVisible",
    value: function isLastPageVisible(has_next_page) {
      var _this$props4 = this.props,
          hideDisabled = _this$props4.hideDisabled,
          hideNavigation = _this$props4.hideNavigation,
          hideFirstLastPages = _this$props4.hideFirstLastPages;
      if (hideFirstLastPages || hideDisabled && !has_next_page) return false;
      return true;
    }
  }, {
    key: "buildPages",
    value: function buildPages() {
      var pages = [];
      var _this$props5 = this.props,
          itemsCountPerPage = _this$props5.itemsCountPerPage,
          pageRangeDisplayed = _this$props5.pageRangeDisplayed,
          activePage = _this$props5.activePage,
          prevPageText = _this$props5.prevPageText,
          nextPageText = _this$props5.nextPageText,
          firstPageText = _this$props5.firstPageText,
          lastPageText = _this$props5.lastPageText,
          totalItemsCount = _this$props5.totalItemsCount,
          onChange = _this$props5.onChange,
          activeClass = _this$props5.activeClass,
          itemClass = _this$props5.itemClass,
          itemClassFirst = _this$props5.itemClassFirst,
          itemClassPrev = _this$props5.itemClassPrev,
          itemClassNext = _this$props5.itemClassNext,
          itemClassLast = _this$props5.itemClassLast,
          activeLinkClass = _this$props5.activeLinkClass,
          disabledClass = _this$props5.disabledClass,
          hideDisabled = _this$props5.hideDisabled,
          hideNavigation = _this$props5.hideNavigation,
          linkClass = _this$props5.linkClass,
          linkClassFirst = _this$props5.linkClassFirst,
          linkClassPrev = _this$props5.linkClassPrev,
          linkClassNext = _this$props5.linkClassNext,
          linkClassLast = _this$props5.linkClassLast,
          hideFirstLastPages = _this$props5.hideFirstLastPages,
          getPageUrl = _this$props5.getPageUrl;
      var paginationInfo = new _paginator["default"](itemsCountPerPage, pageRangeDisplayed).build(totalItemsCount, activePage);

      for (var i = paginationInfo.first_page; i <= paginationInfo.last_page; i++) {
        pages.push(_react["default"].createElement(_Page["default"], {
          isActive: i === activePage,
          key: i,
          href: getPageUrl(i),
          pageNumber: i,
          pageText: i + "",
          onClick: onChange,
          itemClass: itemClass,
          linkClass: linkClass,
          activeClass: activeClass,
          activeLinkClass: activeLinkClass,
          ariaLabel: "Go to page number ".concat(i)
        }));
      }

      this.isPrevPageVisible(paginationInfo.has_previous_page) && pages.unshift(_react["default"].createElement(_Page["default"], {
        key: "prev" + paginationInfo.previous_page,
        href: getPageUrl(paginationInfo.previous_page),
        pageNumber: paginationInfo.previous_page,
        onClick: onChange,
        pageText: prevPageText,
        isDisabled: !paginationInfo.has_previous_page,
        itemClass: (0, _classnames["default"])(itemClass, itemClassPrev),
        linkClass: (0, _classnames["default"])(linkClass, linkClassPrev),
        disabledClass: disabledClass,
        ariaLabel: "Go to previous page"
      }));
      this.isFirstPageVisible(paginationInfo.has_previous_page) && pages.unshift(_react["default"].createElement(_Page["default"], {
        key: "first",
        href: getPageUrl(1),
        pageNumber: 1,
        onClick: onChange,
        pageText: firstPageText,
        isDisabled: !paginationInfo.has_previous_page,
        itemClass: (0, _classnames["default"])(itemClass, itemClassFirst),
        linkClass: (0, _classnames["default"])(linkClass, linkClassFirst),
        disabledClass: disabledClass,
        ariaLabel: "Go to first page"
      }));
      this.isNextPageVisible(paginationInfo.has_next_page) && pages.push(_react["default"].createElement(_Page["default"], {
        key: "next" + paginationInfo.next_page,
        href: getPageUrl(paginationInfo.next_page),
        pageNumber: paginationInfo.next_page,
        onClick: onChange,
        pageText: nextPageText,
        isDisabled: !paginationInfo.has_next_page,
        itemClass: (0, _classnames["default"])(itemClass, itemClassNext),
        linkClass: (0, _classnames["default"])(linkClass, linkClassNext),
        disabledClass: disabledClass,
        ariaLabel: "Go to next page"
      }));
      this.isLastPageVisible(paginationInfo.has_next_page) && pages.push(_react["default"].createElement(_Page["default"], {
        key: "last",
        href: getPageUrl(paginationInfo.total_pages),
        pageNumber: paginationInfo.total_pages,
        onClick: onChange,
        pageText: lastPageText,
        isDisabled: paginationInfo.current_page === paginationInfo.total_pages,
        itemClass: (0, _classnames["default"])(itemClass, itemClassLast),
        linkClass: (0, _classnames["default"])(linkClass, linkClassLast),
        disabledClass: disabledClass,
        ariaLabel: "Go to last page"
      }));
      return pages;
    }
  }, {
    key: "render",
    value: function render() {
      var pages = this.buildPages();
      return _react["default"].createElement("ul", {
        className: this.props.innerClass
      }, pages);
    }
  }]);

  return Pagination;
}(_react["default"].Component);

exports["default"] = Pagination;

_defineProperty(Pagination, "propTypes", {
  totalItemsCount: _propTypes["default"].number.isRequired,
  onChange: _propTypes["default"].func.isRequired,
  activePage: _propTypes["default"].number,
  itemsCountPerPage: _propTypes["default"].number,
  pageRangeDisplayed: _propTypes["default"].number,
  prevPageText: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element]),
  nextPageText: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element]),
  lastPageText: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element]),
  firstPageText: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].element]),
  disabledClass: _propTypes["default"].string,
  hideDisabled: _propTypes["default"].bool,
  hideNavigation: _propTypes["default"].bool,
  innerClass: _propTypes["default"].string,
  itemClass: _propTypes["default"].string,
  itemClassFirst: _propTypes["default"].string,
  itemClassPrev: _propTypes["default"].string,
  itemClassNext: _propTypes["default"].string,
  itemClassLast: _propTypes["default"].string,
  linkClass: _propTypes["default"].string,
  activeClass: _propTypes["default"].string,
  activeLinkClass: _propTypes["default"].string,
  linkClassFirst: _propTypes["default"].string,
  linkClassPrev: _propTypes["default"].string,
  linkClassNext: _propTypes["default"].string,
  linkClassLast: _propTypes["default"].string,
  hideFirstLastPages: _propTypes["default"].bool,
  getPageUrl: _propTypes["default"].func
});

_defineProperty(Pagination, "defaultProps", {
  itemsCountPerPage: 10,
  pageRangeDisplayed: 5,
  activePage: 1,
  prevPageText: "⟨",
  firstPageText: "«",
  nextPageText: "⟩",
  lastPageText: "»",
  innerClass: "pagination",
  itemClass: undefined,
  linkClass: undefined,
  activeLinkClass: undefined,
  hideFirstLastPages: false,
  getPageUrl: function getPageUrl(i) {
    return "#";
  }
});

/***/ }),

/***/ "./node_modules/react-js-pagination/node_modules/react/cjs/react.development.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/react-js-pagination/node_modules/react/cjs/react.development.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/** @license React v16.14.0
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");
var checkPropTypes = __webpack_require__(/*! prop-types/checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var ReactVersion = '16.14.0';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  suspense: null
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var BEFORE_SLASH_RE = /^(.*)[\\\/]/;
function describeComponentFrame (name, source, ownerName) {
  var sourceInfo = '';

  if (source) {
    var path = source.fileName;
    var fileName = path.replace(BEFORE_SLASH_RE, '');

    {
      // In DEV, include code for a common special case:
      // prefer "folder/index.js" instead of just "index.js".
      if (/^index\./.test(fileName)) {
        var match = path.match(BEFORE_SLASH_RE);

        if (match) {
          var pathBeforeSlash = match[1];

          if (pathBeforeSlash) {
            var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
            fileName = folderName + '/' + fileName;
          }
        }
      }
    }

    sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
  } else if (ownerName) {
    sourceInfo = ' (created by ' + ownerName + ')';
  }

  return '\n    in ' + (name || 'Unknown') + sourceInfo;
}

var Resolved = 1;
function refineResolvedLazyComponent(lazyComponent) {
  return lazyComponent._status === Resolved ? lazyComponent._result : null;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return "Profiler";

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        return 'Context.Consumer';

      case REACT_PROVIDER_TYPE:
        return 'Context.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type.render);

      case REACT_LAZY_TYPE:
        {
          var thenable = type;
          var resolvedThenable = refineResolvedLazyComponent(thenable);

          if (resolvedThenable) {
            return getComponentName(resolvedThenable);
          }

          break;
        }
    }
  }

  return null;
}

var ReactDebugCurrentFrame = {};
var currentlyValidatingElement = null;
function setCurrentlyValidatingElement(element) {
  {
    currentlyValidatingElement = element;
  }
}

{
  // Stack implementation injected by the current renderer.
  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = ''; // Add an extra top frame while an element is being validated

    if (currentlyValidatingElement) {
      var name = getComponentName(currentlyValidatingElement.type);
      var owner = currentlyValidatingElement._owner;
      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));
    } // Delegate to the injected renderer-specific implementation


    var impl = ReactDebugCurrentFrame.getCurrentStack;

    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

/**
 * Used by act() to track whether you're inside an act() scope.
 */
var IsSomeRendererActing = {
  current: false
};

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner,
  IsSomeRendererActing: IsSomeRendererActing,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  _assign(ReactSharedInternals, {
    // These should not be included in production.
    ReactDebugCurrentFrame: ReactDebugCurrentFrame,
    // Shim for React DOM 16.0.0 which still destructured (but not used) this.
    // TODO: remove in React 17.0.
    ReactComponentTreeHook: {}
  });
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    printWarning('warn', format, args);
  }
}
function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var hasExistingStack = args.length > 0 && typeof args[args.length - 1] === 'string' && args[args.length - 1].indexOf('\n    in') === 0;

    if (!hasExistingStack) {
      var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
      var stack = ReactDebugCurrentFrame.getStackAddendum();

      if (stack !== '') {
        format += '%s';
        args = args.concat([stack]);
      }
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      throw new Error(message);
    } catch (x) {}
  }
}

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + "." + callerName;

    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }

    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};

{
  Object.freeze(emptyObject);
}
/**
 * Base class helpers for the updating state of a component.
 */


function Component(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

Component.prototype.setState = function (partialState, callback) {
  if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
    {
      throw Error( "setState(...): takes an object of state variables to update or a function which returns an object of state variables." );
    }
  }

  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

        return undefined;
      }
    });
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

_assign(pureComponentPrototype, Component.prototype);

pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };

  {
    Object.seal(refObject);
  }

  return refObject;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
      }
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
      }
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

function warnIfStringRefCannotBeAutoConverted(config) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://fb.me/react-strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

function createElement(type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;

      {
        warnIfStringRefCannotBeAutoConverted(config);
      }
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (!!(element === null || element === undefined)) {
    {
      throw Error( "React.cloneElement(...): The argument must be a React element, but you passed " + element + "." );
    }
  }

  var propName; // Original props are copied

  var props = _assign({}, element.props); // Reserved names are extracted


  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = false;
var userProvidedKeyEscapeRegex = /\/+/g;

function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

var POOL_SIZE = 10;
var traverseContextPool = [];

function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
  if (traverseContextPool.length) {
    var traverseContext = traverseContextPool.pop();
    traverseContext.result = mapResult;
    traverseContext.keyPrefix = keyPrefix;
    traverseContext.func = mapFunction;
    traverseContext.context = mapContext;
    traverseContext.count = 0;
    return traverseContext;
  } else {
    return {
      result: mapResult,
      keyPrefix: keyPrefix,
      func: mapFunction,
      context: mapContext,
      count: 0
    };
  }
}

function releaseTraverseContext(traverseContext) {
  traverseContext.result = null;
  traverseContext.keyPrefix = null;
  traverseContext.func = null;
  traverseContext.context = null;
  traverseContext.count = 0;

  if (traverseContextPool.length < POOL_SIZE) {
    traverseContextPool.push(traverseContext);
  }
}
/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */


function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    callback(traverseContext, children, // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {

      {
        // Warn about using Maps as children
        if (iteratorFn === children.entries) {
          if (!didWarnAboutMaps) {
            warn('Using Maps as children is deprecated and will be removed in ' + 'a future major release. Consider converting children to ' + 'an array of keyed ReactElements instead.');
          }

          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(children);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getComponentKey(child, ii++);
        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
      }
    } else if (type === 'object') {
      var addendum = '';

      {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
      }

      var childrenString = '' + children;

      {
        {
          throw Error( "Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + ")." + addendum );
        }
      }
    }
  }

  return subtreeCount;
}
/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */


function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}
/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof component === 'object' && component !== null && component.key != null) {
    // Explicit key
    return escape(component.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;
  func.call(context, child, bookKeeping.count++);
}
/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */


function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }

  var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  releaseTraverseContext(traverseContext);
}

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;
  var mappedChild = func.call(context, child, bookKeeping.count++);

  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, function (c) {
      return c;
    });
  } else if (mappedChild != null) {
    if (isValidElement(mappedChild)) {
      mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }

    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';

  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }

  var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  releaseTraverseContext(traverseContext);
}
/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */


function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children) {
  return traverseAllChildren(children, function () {
    return null;
  }, null);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, function (child) {
    return child;
  });
  return result;
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */


function onlyChild(children) {
  if (!isValidElement(children)) {
    {
      throw Error( "React.Children.only expected to receive a single React element child." );
    }
  }

  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
        error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
      }
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;

            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }

          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;

            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }

          return context.Consumer;
        }
      }
    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

function lazy(ctor) {
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _ctor: ctor,
    // React uses these fields to store the result.
    _status: -1,
    _result: null
  };

  {
    // In production, this would just set it on the object.
    var defaultProps;
    var propTypes;
    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          defaultProps = newDefaultProps; // Match production behavior more closely:

          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          propTypes = newPropTypes; // Match production behavior more closely:

          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      if (render.length !== 0 && render.length !== 2) {
        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
      }
    }

    if (render != null) {
      if (render.defaultProps != null || render.propTypes != null) {
        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
      }
    }
  }

  return {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };
}

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }

  return {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  if (!(dispatcher !== null)) {
    {
      throw Error( "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem." );
    }
  }

  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();

  {
    if (unstable_observedBits !== undefined) {
      error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://fb.me/rules-of-hooks' : '');
    } // TODO: add a more generic warning for invalid values.


    if (Context._context !== undefined) {
      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.

      if (realContext.Consumer === Context) {
        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }

  return dispatcher.useContext(Context, unstable_observedBits);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}
function useLayoutEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, deps);
}
function useCallback(callback, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, deps);
}
function useMemo(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, deps);
}
function useImperativeHandle(ref, create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, deps);
}
function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);

    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }

  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }

  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }

  element._store.validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
  }

  setCurrentlyValidatingElement(element);

  {
    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.', currentComponentErrorInfo, childOwner);
  }

  setCurrentlyValidatingElement(null);
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }

  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);

    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;

        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var name = getComponentName(type);
    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      setCurrentlyValidatingElement(element);
      checkPropTypes(propTypes, element.props, 'prop', name, ReactDebugCurrentFrame.getStackAddendum);
      setCurrentlyValidatingElement(null);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true;

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    setCurrentlyValidatingElement(fragment);
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        break;
      }
    }

    if (fragment.ref !== null) {
      error('Invalid attribute `ref` supplied to `React.Fragment`.');
    }

    setCurrentlyValidatingElement(null);
  }
}
function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    {
      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }
  }

  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}
var didWarnAboutDeprecatedCreateFactory = false;
function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;

  {
    if (!didWarnAboutDeprecatedCreateFactory) {
      didWarnAboutDeprecatedCreateFactory = true;

      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
    } // Legacy hook: remove it


    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}
function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);

  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }

  validatePropTypes(newElement);
  return newElement;
}

{

  try {
    var frozenObject = Object.freeze({});
    var testMap = new Map([[frozenObject, null]]);
    var testSet = new Set([frozenObject]); // This is necessary for Rollup to not consider these unused.
    // https://github.com/rollup/rollup/issues/1771
    // TODO: we can remove these if Rollup fixes the bug.

    testMap.set(0, 0);
    testSet.add(0);
  } catch (e) {
  }
}

var createElement$1 =  createElementWithValidation ;
var cloneElement$1 =  cloneElementWithValidation ;
var createFactory =  createFactoryWithValidation ;
var Children = {
  map: mapChildren,
  forEach: forEachChildren,
  count: countChildren,
  toArray: toArray,
  only: onlyChild
};

exports.Children = Children;
exports.Component = Component;
exports.Fragment = REACT_FRAGMENT_TYPE;
exports.Profiler = REACT_PROFILER_TYPE;
exports.PureComponent = PureComponent;
exports.StrictMode = REACT_STRICT_MODE_TYPE;
exports.Suspense = REACT_SUSPENSE_TYPE;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
exports.cloneElement = cloneElement$1;
exports.createContext = createContext;
exports.createElement = createElement$1;
exports.createFactory = createFactory;
exports.createRef = createRef;
exports.forwardRef = forwardRef;
exports.isValidElement = isValidElement;
exports.lazy = lazy;
exports.memo = memo;
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useDebugValue = useDebugValue;
exports.useEffect = useEffect;
exports.useImperativeHandle = useImperativeHandle;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
exports.version = ReactVersion;
  })();
}


/***/ }),

/***/ "./node_modules/react-js-pagination/node_modules/react/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-js-pagination/node_modules/react/index.js ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/react-js-pagination/node_modules/react/cjs/react.development.js");
}


/***/ }),

/***/ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "polyfill": () => (/* binding */ polyfill)
/* harmony export */ });
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}




/***/ }),

/***/ "./node_modules/react-table/dist/react-table.development.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-table/dist/react-table.development.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

(function (global, factory) {
   true ? factory(exports, __webpack_require__(/*! react */ "./node_modules/react/index.js")) :
  0;
}(this, (function (exports, React) { 'use strict';

  React = React && Object.prototype.hasOwnProperty.call(React, 'default') ? React['default'] : React;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];

    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }

    return (hint === "string" ? String : Number)(input);
  }

  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");

    return typeof key === "symbol" ? key : String(key);
  }

  var renderErr = 'Renderer Error ☝️';
  var actions = {
    init: 'init'
  };
  var defaultRenderer = function defaultRenderer(_ref) {
    var _ref$value = _ref.value,
        value = _ref$value === void 0 ? '' : _ref$value;
    return value;
  };
  var emptyRenderer = function emptyRenderer() {
    return React.createElement(React.Fragment, null, "\xA0");
  };
  var defaultColumn = {
    Cell: defaultRenderer,
    width: 150,
    minWidth: 0,
    maxWidth: Number.MAX_SAFE_INTEGER
  };

  function mergeProps() {
    for (var _len = arguments.length, propList = new Array(_len), _key = 0; _key < _len; _key++) {
      propList[_key] = arguments[_key];
    }

    return propList.reduce(function (props, next) {
      var style = next.style,
          className = next.className,
          rest = _objectWithoutPropertiesLoose(next, ["style", "className"]);

      props = _extends({}, props, {}, rest);

      if (style) {
        props.style = props.style ? _extends({}, props.style || {}, {}, style || {}) : style;
      }

      if (className) {
        props.className = props.className ? props.className + ' ' + className : className;
      }

      if (props.className === '') {
        delete props.className;
      }

      return props;
    }, {});
  }

  function handlePropGetter(prevProps, userProps, meta) {
    // Handle a lambda, pass it the previous props
    if (typeof userProps === 'function') {
      return handlePropGetter({}, userProps(prevProps, meta));
    } // Handle an array, merge each item as separate props


    if (Array.isArray(userProps)) {
      return mergeProps.apply(void 0, [prevProps].concat(userProps));
    } // Handle an object by default, merge the two objects


    return mergeProps(prevProps, userProps);
  }

  var makePropGetter = function makePropGetter(hooks, meta) {
    if (meta === void 0) {
      meta = {};
    }

    return function (userProps) {
      if (userProps === void 0) {
        userProps = {};
      }

      return [].concat(hooks, [userProps]).reduce(function (prev, next) {
        return handlePropGetter(prev, next, _extends({}, meta, {
          userProps: userProps
        }));
      }, {});
    };
  };
  var reduceHooks = function reduceHooks(hooks, initial, meta, allowUndefined) {
    if (meta === void 0) {
      meta = {};
    }

    return hooks.reduce(function (prev, next) {
      var nextValue = next(prev, meta);

      {
        if (!allowUndefined && typeof nextValue === 'undefined') {
          console.info(next);
          throw new Error('React Table: A reducer hook ☝️ just returned undefined! This is not allowed.');
        }
      }

      return nextValue;
    }, initial);
  };
  var loopHooks = function loopHooks(hooks, context, meta) {
    if (meta === void 0) {
      meta = {};
    }

    return hooks.forEach(function (hook) {
      var nextValue = hook(context, meta);

      {
        if (typeof nextValue !== 'undefined') {
          console.info(hook, nextValue);
          throw new Error('React Table: A loop-type hook ☝️ just returned a value! This is not allowed.');
        }
      }
    });
  };
  function ensurePluginOrder(plugins, befores, pluginName, afters) {
    if ( afters) {
      throw new Error("Defining plugins in the \"after\" section of ensurePluginOrder is no longer supported (see plugin " + pluginName + ")");
    }

    var pluginIndex = plugins.findIndex(function (plugin) {
      return plugin.pluginName === pluginName;
    });

    if (pluginIndex === -1) {
      {
        throw new Error("The plugin \"" + pluginName + "\" was not found in the plugin list!\nThis usually means you need to need to name your plugin hook by setting the 'pluginName' property of the hook function, eg:\n\n  " + pluginName + ".pluginName = '" + pluginName + "'\n");
      }
    }

    befores.forEach(function (before) {
      var beforeIndex = plugins.findIndex(function (plugin) {
        return plugin.pluginName === before;
      });

      if (beforeIndex > -1 && beforeIndex > pluginIndex) {
        {
          throw new Error("React Table: The " + pluginName + " plugin hook must be placed after the " + before + " plugin hook!");
        }
      }
    });
  }
  function functionalUpdate(updater, old) {
    return typeof updater === 'function' ? updater(old) : updater;
  }
  function useGetLatest(obj) {
    var ref = React.useRef();
    ref.current = obj;
    return React.useCallback(function () {
      return ref.current;
    }, []);
  } // SSR has issues with useLayoutEffect still, so use useEffect during SSR

  var safeUseLayoutEffect = typeof document !== 'undefined' ? React.useLayoutEffect : React.useEffect;
  function useMountedLayoutEffect(fn, deps) {
    var mountedRef = React.useRef(false);
    safeUseLayoutEffect(function () {
      if (mountedRef.current) {
        fn();
      }

      mountedRef.current = true; // eslint-disable-next-line
    }, deps);
  }
  function useAsyncDebounce(defaultFn, defaultWait) {
    if (defaultWait === void 0) {
      defaultWait = 0;
    }

    var debounceRef = React.useRef({});
    var getDefaultFn = useGetLatest(defaultFn);
    var getDefaultWait = useGetLatest(defaultWait);
    return React.useCallback(
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var _len2,
            args,
            _key2,
            _args2 = arguments;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                for (_len2 = _args2.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                  args[_key2] = _args2[_key2];
                }

                if (!debounceRef.current.promise) {
                  debounceRef.current.promise = new Promise(function (resolve, reject) {
                    debounceRef.current.resolve = resolve;
                    debounceRef.current.reject = reject;
                  });
                }

                if (debounceRef.current.timeout) {
                  clearTimeout(debounceRef.current.timeout);
                }

                debounceRef.current.timeout = setTimeout(
                /*#__PURE__*/
                _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee() {
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          delete debounceRef.current.timeout;
                          _context.prev = 1;
                          _context.t0 = debounceRef.current;
                          _context.next = 5;
                          return getDefaultFn().apply(void 0, args);

                        case 5:
                          _context.t1 = _context.sent;

                          _context.t0.resolve.call(_context.t0, _context.t1);

                          _context.next = 12;
                          break;

                        case 9:
                          _context.prev = 9;
                          _context.t2 = _context["catch"](1);
                          debounceRef.current.reject(_context.t2);

                        case 12:
                          _context.prev = 12;
                          delete debounceRef.current.promise;
                          return _context.finish(12);

                        case 15:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, null, [[1, 9, 12, 15]]);
                })), getDefaultWait());
                return _context2.abrupt("return", debounceRef.current.promise);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function () {
        return _ref2.apply(this, arguments);
      };
    }(), [getDefaultFn, getDefaultWait]);
  }
  function makeRenderer(instance, column, meta) {
    if (meta === void 0) {
      meta = {};
    }

    return function (type, userProps) {
      if (userProps === void 0) {
        userProps = {};
      }

      var Comp = typeof type === 'string' ? column[type] : type;

      if (typeof Comp === 'undefined') {
        console.info(column);
        throw new Error(renderErr);
      }

      return flexRender(Comp, _extends({}, instance, {
        column: column
      }, meta, {}, userProps));
    };
  }
  function flexRender(Comp, props) {
    return isReactComponent(Comp) ? React.createElement(Comp, props) : Comp;
  }

  function isReactComponent(component) {
    return isClassComponent(component) || typeof component === 'function' || isExoticComponent(component);
  }

  function isClassComponent(component) {
    return typeof component === 'function' && function () {
      var proto = Object.getPrototypeOf(component);
      return proto.prototype && proto.prototype.isReactComponent;
    }();
  }

  function isExoticComponent(component) {
    return typeof component === 'object' && typeof component.$$typeof === 'symbol' && ['react.memo', 'react.forward_ref'].includes(component.$$typeof.description);
  }

  function linkColumnStructure(columns, parent, depth) {
    if (depth === void 0) {
      depth = 0;
    }

    return columns.map(function (column) {
      column = _extends({}, column, {
        parent: parent,
        depth: depth
      });
      assignColumnAccessor(column);

      if (column.columns) {
        column.columns = linkColumnStructure(column.columns, column, depth + 1);
      }

      return column;
    });
  }
  function flattenColumns(columns) {
    return flattenBy(columns, 'columns');
  }
  function assignColumnAccessor(column) {
    // First check for string accessor
    var id = column.id,
        accessor = column.accessor,
        Header = column.Header;

    if (typeof accessor === 'string') {
      id = id || accessor;
      var accessorPath = accessor.split('.');

      accessor = function accessor(row) {
        return getBy(row, accessorPath);
      };
    }

    if (!id && typeof Header === 'string' && Header) {
      id = Header;
    }

    if (!id && column.columns) {
      console.error(column);
      throw new Error('A column ID (or unique "Header" value) is required!');
    }

    if (!id) {
      console.error(column);
      throw new Error('A column ID (or string accessor) is required!');
    }

    Object.assign(column, {
      id: id,
      accessor: accessor
    });
    return column;
  }
  function decorateColumn(column, userDefaultColumn) {
    if (!userDefaultColumn) {
      throw new Error();
    }

    Object.assign(column, _extends({
      // Make sure there is a fallback header, just in case
      Header: emptyRenderer,
      Footer: emptyRenderer
    }, defaultColumn, {}, userDefaultColumn, {}, column));
    Object.assign(column, {
      originalWidth: column.width
    });
    return column;
  } // Build the header groups from the bottom up

  function makeHeaderGroups(allColumns, defaultColumn, additionalHeaderProperties) {
    if (additionalHeaderProperties === void 0) {
      additionalHeaderProperties = function additionalHeaderProperties() {
        return {};
      };
    }

    var headerGroups = [];
    var scanColumns = allColumns;
    var uid = 0;

    var getUID = function getUID() {
      return uid++;
    };

    var _loop = function _loop() {
      // The header group we are creating
      var headerGroup = {
        headers: []
      }; // The parent columns we're going to scan next

      var parentColumns = [];
      var hasParents = scanColumns.some(function (d) {
        return d.parent;
      }); // Scan each column for parents

      scanColumns.forEach(function (column) {
        // What is the latest (last) parent column?
        var latestParentColumn = [].concat(parentColumns).reverse()[0];
        var newParent;

        if (hasParents) {
          // If the column has a parent, add it if necessary
          if (column.parent) {
            newParent = _extends({}, column.parent, {
              originalId: column.parent.id,
              id: column.parent.id + "_" + getUID(),
              headers: [column]
            }, additionalHeaderProperties(column));
          } else {
            // If other columns have parents, we'll need to add a place holder if necessary
            var originalId = column.id + "_placeholder";
            newParent = decorateColumn(_extends({
              originalId: originalId,
              id: column.id + "_placeholder_" + getUID(),
              placeholderOf: column,
              headers: [column]
            }, additionalHeaderProperties(column)), defaultColumn);
          } // If the resulting parent columns are the same, just add
          // the column and increment the header span


          if (latestParentColumn && latestParentColumn.originalId === newParent.originalId) {
            latestParentColumn.headers.push(column);
          } else {
            parentColumns.push(newParent);
          }
        }

        headerGroup.headers.push(column);
      });
      headerGroups.push(headerGroup); // Start scanning the parent columns

      scanColumns = parentColumns;
    };

    while (scanColumns.length) {
      _loop();
    }

    return headerGroups.reverse();
  }
  var pathObjCache = new Map();
  function getBy(obj, path, def) {
    if (!path) {
      return obj;
    }

    var cacheKey = typeof path === 'function' ? path : JSON.stringify(path);

    var pathObj = pathObjCache.get(cacheKey) || function () {
      var pathObj = makePathArray(path);
      pathObjCache.set(cacheKey, pathObj);
      return pathObj;
    }();

    var val;

    try {
      val = pathObj.reduce(function (cursor, pathPart) {
        return cursor[pathPart];
      }, obj);
    } catch (e) {// continue regardless of error
    }

    return typeof val !== 'undefined' ? val : def;
  }
  function getFirstDefined() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    for (var i = 0; i < args.length; i += 1) {
      if (typeof args[i] !== 'undefined') {
        return args[i];
      }
    }
  }
  function isFunction(a) {
    if (typeof a === 'function') {
      return a;
    }
  }
  function flattenBy(arr, key) {
    var flat = [];

    var recurse = function recurse(arr) {
      arr.forEach(function (d) {
        if (!d[key]) {
          flat.push(d);
        } else {
          recurse(d[key]);
        }
      });
    };

    recurse(arr);
    return flat;
  }
  function expandRows(rows, _ref) {
    var manualExpandedKey = _ref.manualExpandedKey,
        expanded = _ref.expanded,
        _ref$expandSubRows = _ref.expandSubRows,
        expandSubRows = _ref$expandSubRows === void 0 ? true : _ref$expandSubRows;
    var expandedRows = [];

    var handleRow = function handleRow(row, addToExpandedRows) {
      if (addToExpandedRows === void 0) {
        addToExpandedRows = true;
      }

      row.isExpanded = row.original && row.original[manualExpandedKey] || expanded[row.id];
      row.canExpand = row.subRows && !!row.subRows.length;

      if (addToExpandedRows) {
        expandedRows.push(row);
      }

      if (row.subRows && row.subRows.length && row.isExpanded) {
        row.subRows.forEach(function (row) {
          return handleRow(row, expandSubRows);
        });
      }
    };

    rows.forEach(function (row) {
      return handleRow(row);
    });
    return expandedRows;
  }
  function getFilterMethod(filter, userFilterTypes, filterTypes) {
    return isFunction(filter) || userFilterTypes[filter] || filterTypes[filter] || filterTypes.text;
  }
  function shouldAutoRemoveFilter(autoRemove, value, column) {
    return autoRemove ? autoRemove(value, column) : typeof value === 'undefined';
  }
  function unpreparedAccessWarning() {
    throw new Error('React-Table: You have not called prepareRow(row) one or more rows you are attempting to render.');
  }
  var passiveSupported = null;
  function passiveEventSupported() {
    // memoize support to avoid adding multiple test events
    if (typeof passiveSupported === 'boolean') return passiveSupported;
    var supported = false;

    try {
      var options = {
        get passive() {
          supported = true;
          return false;
        }

      };
      window.addEventListener('test', null, options);
      window.removeEventListener('test', null, options);
    } catch (err) {
      supported = false;
    }

    passiveSupported = supported;
    return passiveSupported;
  } //

  var reOpenBracket = /\[/g;
  var reCloseBracket = /\]/g;

  function makePathArray(obj) {
    return flattenDeep(obj) // remove all periods in parts
    .map(function (d) {
      return String(d).replace('.', '_');
    }) // join parts using period
    .join('.') // replace brackets with periods
    .replace(reOpenBracket, '.').replace(reCloseBracket, '') // split it back out on periods
    .split('.');
  }

  function flattenDeep(arr, newArr) {
    if (newArr === void 0) {
      newArr = [];
    }

    if (!Array.isArray(arr)) {
      newArr.push(arr);
    } else {
      for (var i = 0; i < arr.length; i += 1) {
        flattenDeep(arr[i], newArr);
      }
    }

    return newArr;
  }

  var defaultGetTableProps = function defaultGetTableProps(props) {
    return _extends({
      role: 'table'
    }, props);
  };

  var defaultGetTableBodyProps = function defaultGetTableBodyProps(props) {
    return _extends({
      role: 'rowgroup'
    }, props);
  };

  var defaultGetHeaderProps = function defaultGetHeaderProps(props, _ref) {
    var column = _ref.column;
    return _extends({
      key: "header_" + column.id,
      colSpan: column.totalVisibleHeaderCount,
      role: 'columnheader'
    }, props);
  };

  var defaultGetFooterProps = function defaultGetFooterProps(props, _ref2) {
    var column = _ref2.column;
    return _extends({
      key: "footer_" + column.id,
      colSpan: column.totalVisibleHeaderCount
    }, props);
  };

  var defaultGetHeaderGroupProps = function defaultGetHeaderGroupProps(props, _ref3) {
    var index = _ref3.index;
    return _extends({
      key: "headerGroup_" + index,
      role: 'row'
    }, props);
  };

  var defaultGetFooterGroupProps = function defaultGetFooterGroupProps(props, _ref4) {
    var index = _ref4.index;
    return _extends({
      key: "footerGroup_" + index
    }, props);
  };

  var defaultGetRowProps = function defaultGetRowProps(props, _ref5) {
    var row = _ref5.row;
    return _extends({
      key: "row_" + row.id,
      role: 'row'
    }, props);
  };

  var defaultGetCellProps = function defaultGetCellProps(props, _ref6) {
    var cell = _ref6.cell;
    return _extends({
      key: "cell_" + cell.row.id + "_" + cell.column.id,
      role: 'cell'
    }, props);
  };

  function makeDefaultPluginHooks() {
    return {
      useOptions: [],
      stateReducers: [],
      useControlledState: [],
      columns: [],
      columnsDeps: [],
      allColumns: [],
      allColumnsDeps: [],
      accessValue: [],
      materializedColumns: [],
      materializedColumnsDeps: [],
      useInstanceAfterData: [],
      visibleColumns: [],
      visibleColumnsDeps: [],
      headerGroups: [],
      headerGroupsDeps: [],
      useInstanceBeforeDimensions: [],
      useInstance: [],
      prepareRow: [],
      getTableProps: [defaultGetTableProps],
      getTableBodyProps: [defaultGetTableBodyProps],
      getHeaderGroupProps: [defaultGetHeaderGroupProps],
      getFooterGroupProps: [defaultGetFooterGroupProps],
      getHeaderProps: [defaultGetHeaderProps],
      getFooterProps: [defaultGetFooterProps],
      getRowProps: [defaultGetRowProps],
      getCellProps: [defaultGetCellProps],
      useFinalInstance: []
    };
  }

  actions.resetHiddenColumns = 'resetHiddenColumns';
  actions.toggleHideColumn = 'toggleHideColumn';
  actions.setHiddenColumns = 'setHiddenColumns';
  actions.toggleHideAllColumns = 'toggleHideAllColumns';
  var useColumnVisibility = function useColumnVisibility(hooks) {
    hooks.getToggleHiddenProps = [defaultGetToggleHiddenProps];
    hooks.getToggleHideAllColumnsProps = [defaultGetToggleHideAllColumnsProps];
    hooks.stateReducers.push(reducer);
    hooks.useInstanceBeforeDimensions.push(useInstanceBeforeDimensions);
    hooks.headerGroupsDeps.push(function (deps, _ref) {
      var instance = _ref.instance;
      return [].concat(deps, [instance.state.hiddenColumns]);
    });
    hooks.useInstance.push(useInstance);
  };
  useColumnVisibility.pluginName = 'useColumnVisibility';

  var defaultGetToggleHiddenProps = function defaultGetToggleHiddenProps(props, _ref2) {
    var column = _ref2.column;
    return [props, {
      onChange: function onChange(e) {
        column.toggleHidden(!e.target.checked);
      },
      style: {
        cursor: 'pointer'
      },
      checked: column.isVisible,
      title: 'Toggle Column Visible'
    }];
  };

  var defaultGetToggleHideAllColumnsProps = function defaultGetToggleHideAllColumnsProps(props, _ref3) {
    var instance = _ref3.instance;
    return [props, {
      onChange: function onChange(e) {
        instance.toggleHideAllColumns(!e.target.checked);
      },
      style: {
        cursor: 'pointer'
      },
      checked: !instance.allColumnsHidden && !instance.state.hiddenColumns.length,
      title: 'Toggle All Columns Hidden',
      indeterminate: !instance.allColumnsHidden && instance.state.hiddenColumns.length
    }];
  };

  function reducer(state, action, previousState, instance) {
    if (action.type === actions.init) {
      return _extends({
        hiddenColumns: []
      }, state);
    }

    if (action.type === actions.resetHiddenColumns) {
      return _extends({}, state, {
        hiddenColumns: instance.initialState.hiddenColumns || []
      });
    }

    if (action.type === actions.toggleHideColumn) {
      var should = typeof action.value !== 'undefined' ? action.value : !state.hiddenColumns.includes(action.columnId);
      var hiddenColumns = should ? [].concat(state.hiddenColumns, [action.columnId]) : state.hiddenColumns.filter(function (d) {
        return d !== action.columnId;
      });
      return _extends({}, state, {
        hiddenColumns: hiddenColumns
      });
    }

    if (action.type === actions.setHiddenColumns) {
      return _extends({}, state, {
        hiddenColumns: functionalUpdate(action.value, state.hiddenColumns)
      });
    }

    if (action.type === actions.toggleHideAllColumns) {
      var shouldAll = typeof action.value !== 'undefined' ? action.value : !state.hiddenColumns.length;
      return _extends({}, state, {
        hiddenColumns: shouldAll ? instance.allColumns.map(function (d) {
          return d.id;
        }) : []
      });
    }
  }

  function useInstanceBeforeDimensions(instance) {
    var headers = instance.headers,
        hiddenColumns = instance.state.hiddenColumns;
    var isMountedRef = React.useRef(false);

    if (!isMountedRef.current) ;

    var handleColumn = function handleColumn(column, parentVisible) {
      column.isVisible = parentVisible && !hiddenColumns.includes(column.id);
      var totalVisibleHeaderCount = 0;

      if (column.headers && column.headers.length) {
        column.headers.forEach(function (subColumn) {
          return totalVisibleHeaderCount += handleColumn(subColumn, column.isVisible);
        });
      } else {
        totalVisibleHeaderCount = column.isVisible ? 1 : 0;
      }

      column.totalVisibleHeaderCount = totalVisibleHeaderCount;
      return totalVisibleHeaderCount;
    };

    var totalVisibleHeaderCount = 0;
    headers.forEach(function (subHeader) {
      return totalVisibleHeaderCount += handleColumn(subHeader, true);
    });
  }

  function useInstance(instance) {
    var columns = instance.columns,
        flatHeaders = instance.flatHeaders,
        dispatch = instance.dispatch,
        allColumns = instance.allColumns,
        getHooks = instance.getHooks,
        hiddenColumns = instance.state.hiddenColumns,
        _instance$autoResetHi = instance.autoResetHiddenColumns,
        autoResetHiddenColumns = _instance$autoResetHi === void 0 ? true : _instance$autoResetHi;
    var getInstance = useGetLatest(instance);
    var allColumnsHidden = allColumns.length === hiddenColumns.length;
    var toggleHideColumn = React.useCallback(function (columnId, value) {
      return dispatch({
        type: actions.toggleHideColumn,
        columnId: columnId,
        value: value
      });
    }, [dispatch]);
    var setHiddenColumns = React.useCallback(function (value) {
      return dispatch({
        type: actions.setHiddenColumns,
        value: value
      });
    }, [dispatch]);
    var toggleHideAllColumns = React.useCallback(function (value) {
      return dispatch({
        type: actions.toggleHideAllColumns,
        value: value
      });
    }, [dispatch]);
    var getToggleHideAllColumnsProps = makePropGetter(getHooks().getToggleHideAllColumnsProps, {
      instance: getInstance()
    });
    flatHeaders.forEach(function (column) {
      column.toggleHidden = function (value) {
        dispatch({
          type: actions.toggleHideColumn,
          columnId: column.id,
          value: value
        });
      };

      column.getToggleHiddenProps = makePropGetter(getHooks().getToggleHiddenProps, {
        instance: getInstance(),
        column: column
      });
    });
    var getAutoResetHiddenColumns = useGetLatest(autoResetHiddenColumns);
    useMountedLayoutEffect(function () {
      if (getAutoResetHiddenColumns()) {
        dispatch({
          type: actions.resetHiddenColumns
        });
      }
    }, [dispatch, columns]);
    Object.assign(instance, {
      allColumnsHidden: allColumnsHidden,
      toggleHideColumn: toggleHideColumn,
      setHiddenColumns: setHiddenColumns,
      toggleHideAllColumns: toggleHideAllColumns,
      getToggleHideAllColumnsProps: getToggleHideAllColumnsProps
    });
  }

  var defaultInitialState = {};
  var defaultColumnInstance = {};

  var defaultReducer = function defaultReducer(state, action, prevState) {
    return state;
  };

  var defaultGetSubRows = function defaultGetSubRows(row, index) {
    return row.subRows || [];
  };

  var defaultGetRowId = function defaultGetRowId(row, index, parent) {
    return "" + (parent ? [parent.id, index].join('.') : index);
  };

  var defaultUseControlledState = function defaultUseControlledState(d) {
    return d;
  };

  function applyDefaults(props) {
    var _props$initialState = props.initialState,
        initialState = _props$initialState === void 0 ? defaultInitialState : _props$initialState,
        _props$defaultColumn = props.defaultColumn,
        defaultColumn = _props$defaultColumn === void 0 ? defaultColumnInstance : _props$defaultColumn,
        _props$getSubRows = props.getSubRows,
        getSubRows = _props$getSubRows === void 0 ? defaultGetSubRows : _props$getSubRows,
        _props$getRowId = props.getRowId,
        getRowId = _props$getRowId === void 0 ? defaultGetRowId : _props$getRowId,
        _props$stateReducer = props.stateReducer,
        stateReducer = _props$stateReducer === void 0 ? defaultReducer : _props$stateReducer,
        _props$useControlledS = props.useControlledState,
        useControlledState = _props$useControlledS === void 0 ? defaultUseControlledState : _props$useControlledS,
        rest = _objectWithoutPropertiesLoose(props, ["initialState", "defaultColumn", "getSubRows", "getRowId", "stateReducer", "useControlledState"]);

    return _extends({}, rest, {
      initialState: initialState,
      defaultColumn: defaultColumn,
      getSubRows: getSubRows,
      getRowId: getRowId,
      stateReducer: stateReducer,
      useControlledState: useControlledState
    });
  }

  var useTable = function useTable(props) {
    for (var _len = arguments.length, plugins = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      plugins[_key - 1] = arguments[_key];
    }

    // Apply default props
    props = applyDefaults(props); // Add core plugins

    plugins = [useColumnVisibility].concat(plugins); // Create the table instance

    var instanceRef = React.useRef({}); // Create a getter for the instance (helps avoid a lot of potential memory leaks)

    var getInstance = useGetLatest(instanceRef.current); // Assign the props, plugins and hooks to the instance

    Object.assign(getInstance(), _extends({}, props, {
      plugins: plugins,
      hooks: makeDefaultPluginHooks()
    })); // Allow plugins to register hooks as early as possible

    plugins.filter(Boolean).forEach(function (plugin) {
      plugin(getInstance().hooks);
    }); // Consume all hooks and make a getter for them

    var getHooks = useGetLatest(getInstance().hooks);
    getInstance().getHooks = getHooks;
    delete getInstance().hooks; // Allow useOptions hooks to modify the options coming into the table

    Object.assign(getInstance(), reduceHooks(getHooks().useOptions, applyDefaults(props)));

    var _getInstance = getInstance(),
        data = _getInstance.data,
        userColumns = _getInstance.columns,
        initialState = _getInstance.initialState,
        defaultColumn = _getInstance.defaultColumn,
        getSubRows = _getInstance.getSubRows,
        getRowId = _getInstance.getRowId,
        stateReducer = _getInstance.stateReducer,
        useControlledState = _getInstance.useControlledState; // Setup user reducer ref


    var getStateReducer = useGetLatest(stateReducer); // Build the reducer

    var reducer = React.useCallback(function (state, action) {
      // Detect invalid actions
      if (!action.type) {
        console.info({
          action: action
        });
        throw new Error('Unknown Action 👆');
      } // Reduce the state from all plugin reducers


      return [].concat(getHooks().stateReducers, Array.isArray(getStateReducer()) ? getStateReducer() : [getStateReducer()]).reduce(function (s, handler) {
        return handler(s, action, state, getInstance()) || s;
      }, state);
    }, [getHooks, getStateReducer, getInstance]); // Start the reducer

    var _React$useReducer = React.useReducer(reducer, undefined, function () {
      return reducer(initialState, {
        type: actions.init
      });
    }),
        reducerState = _React$useReducer[0],
        dispatch = _React$useReducer[1]; // Allow the user to control the final state with hooks


    var state = reduceHooks([].concat(getHooks().useControlledState, [useControlledState]), reducerState, {
      instance: getInstance()
    });
    Object.assign(getInstance(), {
      state: state,
      dispatch: dispatch
    }); // Decorate All the columns

    var columns = React.useMemo(function () {
      return linkColumnStructure(reduceHooks(getHooks().columns, userColumns, {
        instance: getInstance()
      }));
    }, [getHooks, getInstance, userColumns].concat(reduceHooks(getHooks().columnsDeps, [], {
      instance: getInstance()
    })));
    getInstance().columns = columns; // Get the flat list of all columns and allow hooks to decorate
    // those columns (and trigger this memoization via deps)

    var allColumns = React.useMemo(function () {
      return reduceHooks(getHooks().allColumns, flattenColumns(columns), {
        instance: getInstance()
      }).map(assignColumnAccessor);
    }, [columns, getHooks, getInstance].concat(reduceHooks(getHooks().allColumnsDeps, [], {
      instance: getInstance()
    })));
    getInstance().allColumns = allColumns; // Access the row model using initial columns

    var _React$useMemo = React.useMemo(function () {
      var rows = [];
      var flatRows = [];
      var rowsById = {};
      var allColumnsQueue = [].concat(allColumns);

      while (allColumnsQueue.length) {
        var column = allColumnsQueue.shift();
        accessRowsForColumn({
          data: data,
          rows: rows,
          flatRows: flatRows,
          rowsById: rowsById,
          column: column,
          getRowId: getRowId,
          getSubRows: getSubRows,
          accessValueHooks: getHooks().accessValue,
          getInstance: getInstance
        });
      }

      return [rows, flatRows, rowsById];
    }, [allColumns, data, getRowId, getSubRows, getHooks, getInstance]),
        rows = _React$useMemo[0],
        flatRows = _React$useMemo[1],
        rowsById = _React$useMemo[2];

    Object.assign(getInstance(), {
      rows: rows,
      initialRows: [].concat(rows),
      flatRows: flatRows,
      rowsById: rowsById // materializedColumns,

    });
    loopHooks(getHooks().useInstanceAfterData, getInstance()); // Get the flat list of all columns AFTER the rows
    // have been access, and allow hooks to decorate
    // those columns (and trigger this memoization via deps)

    var visibleColumns = React.useMemo(function () {
      return reduceHooks(getHooks().visibleColumns, allColumns, {
        instance: getInstance()
      }).map(function (d) {
        return decorateColumn(d, defaultColumn);
      });
    }, [getHooks, allColumns, getInstance, defaultColumn].concat(reduceHooks(getHooks().visibleColumnsDeps, [], {
      instance: getInstance()
    }))); // Combine new visible columns with all columns

    allColumns = React.useMemo(function () {
      var columns = [].concat(visibleColumns);
      allColumns.forEach(function (column) {
        if (!columns.find(function (d) {
          return d.id === column.id;
        })) {
          columns.push(column);
        }
      });
      return columns;
    }, [allColumns, visibleColumns]);
    getInstance().allColumns = allColumns;

    {
      var duplicateColumns = allColumns.filter(function (column, i) {
        return allColumns.findIndex(function (d) {
          return d.id === column.id;
        }) !== i;
      });

      if (duplicateColumns.length) {
        console.info(allColumns);
        throw new Error("Duplicate columns were found with ids: \"" + duplicateColumns.map(function (d) {
          return d.id;
        }).join(', ') + "\" in the columns array above");
      }
    } // Make the headerGroups


    var headerGroups = React.useMemo(function () {
      return reduceHooks(getHooks().headerGroups, makeHeaderGroups(visibleColumns, defaultColumn), getInstance());
    }, [getHooks, visibleColumns, defaultColumn, getInstance].concat(reduceHooks(getHooks().headerGroupsDeps, [], {
      instance: getInstance()
    })));
    getInstance().headerGroups = headerGroups; // Get the first level of headers

    var headers = React.useMemo(function () {
      return headerGroups.length ? headerGroups[0].headers : [];
    }, [headerGroups]);
    getInstance().headers = headers; // Provide a flat header list for utilities

    getInstance().flatHeaders = headerGroups.reduce(function (all, headerGroup) {
      return [].concat(all, headerGroup.headers);
    }, []);
    loopHooks(getHooks().useInstanceBeforeDimensions, getInstance()); // Filter columns down to visible ones

    var visibleColumnsDep = visibleColumns.filter(function (d) {
      return d.isVisible;
    }).map(function (d) {
      return d.id;
    }).sort().join('_');
    visibleColumns = React.useMemo(function () {
      return visibleColumns.filter(function (d) {
        return d.isVisible;
      });
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [visibleColumns, visibleColumnsDep]);
    getInstance().visibleColumns = visibleColumns; // Header Visibility is needed by this point

    var _calculateHeaderWidth = calculateHeaderWidths(headers),
        totalColumnsMinWidth = _calculateHeaderWidth[0],
        totalColumnsWidth = _calculateHeaderWidth[1],
        totalColumnsMaxWidth = _calculateHeaderWidth[2];

    getInstance().totalColumnsMinWidth = totalColumnsMinWidth;
    getInstance().totalColumnsWidth = totalColumnsWidth;
    getInstance().totalColumnsMaxWidth = totalColumnsMaxWidth;
    loopHooks(getHooks().useInstance, getInstance()) // Each materialized header needs to be assigned a render function and other
    // prop getter properties here.
    ;
    [].concat(getInstance().flatHeaders, getInstance().allColumns).forEach(function (column) {
      // Give columns/headers rendering power
      column.render = makeRenderer(getInstance(), column); // Give columns/headers a default getHeaderProps

      column.getHeaderProps = makePropGetter(getHooks().getHeaderProps, {
        instance: getInstance(),
        column: column
      }); // Give columns/headers a default getFooterProps

      column.getFooterProps = makePropGetter(getHooks().getFooterProps, {
        instance: getInstance(),
        column: column
      });
    });
    getInstance().headerGroups = React.useMemo(function () {
      return headerGroups.filter(function (headerGroup, i) {
        // Filter out any headers and headerGroups that don't have visible columns
        headerGroup.headers = headerGroup.headers.filter(function (column) {
          var recurse = function recurse(headers) {
            return headers.filter(function (column) {
              if (column.headers) {
                return recurse(column.headers);
              }

              return column.isVisible;
            }).length;
          };

          if (column.headers) {
            return recurse(column.headers);
          }

          return column.isVisible;
        }); // Give headerGroups getRowProps

        if (headerGroup.headers.length) {
          headerGroup.getHeaderGroupProps = makePropGetter(getHooks().getHeaderGroupProps, {
            instance: getInstance(),
            headerGroup: headerGroup,
            index: i
          });
          headerGroup.getFooterGroupProps = makePropGetter(getHooks().getFooterGroupProps, {
            instance: getInstance(),
            headerGroup: headerGroup,
            index: i
          });
          return true;
        }

        return false;
      });
    }, [headerGroups, getInstance, getHooks]);
    getInstance().footerGroups = [].concat(getInstance().headerGroups).reverse(); // The prepareRow function is absolutely necessary and MUST be called on
    // any rows the user wishes to be displayed.

    getInstance().prepareRow = React.useCallback(function (row) {
      row.getRowProps = makePropGetter(getHooks().getRowProps, {
        instance: getInstance(),
        row: row
      }); // Build the visible cells for each row

      row.allCells = allColumns.map(function (column) {
        var value = row.values[column.id];
        var cell = {
          column: column,
          row: row,
          value: value
        }; // Give each cell a getCellProps base

        cell.getCellProps = makePropGetter(getHooks().getCellProps, {
          instance: getInstance(),
          cell: cell
        }); // Give each cell a renderer function (supports multiple renderers)

        cell.render = makeRenderer(getInstance(), column, {
          row: row,
          cell: cell,
          value: value
        });
        return cell;
      });
      row.cells = visibleColumns.map(function (column) {
        return row.allCells.find(function (cell) {
          return cell.column.id === column.id;
        });
      }); // need to apply any row specific hooks (useExpanded requires this)

      loopHooks(getHooks().prepareRow, row, {
        instance: getInstance()
      });
    }, [getHooks, getInstance, allColumns, visibleColumns]);
    getInstance().getTableProps = makePropGetter(getHooks().getTableProps, {
      instance: getInstance()
    });
    getInstance().getTableBodyProps = makePropGetter(getHooks().getTableBodyProps, {
      instance: getInstance()
    });
    loopHooks(getHooks().useFinalInstance, getInstance());
    return getInstance();
  };

  function calculateHeaderWidths(headers, left) {
    if (left === void 0) {
      left = 0;
    }

    var sumTotalMinWidth = 0;
    var sumTotalWidth = 0;
    var sumTotalMaxWidth = 0;
    var sumTotalFlexWidth = 0;
    headers.forEach(function (header) {
      var subHeaders = header.headers;
      header.totalLeft = left;

      if (subHeaders && subHeaders.length) {
        var _calculateHeaderWidth2 = calculateHeaderWidths(subHeaders, left),
            totalMinWidth = _calculateHeaderWidth2[0],
            totalWidth = _calculateHeaderWidth2[1],
            totalMaxWidth = _calculateHeaderWidth2[2],
            totalFlexWidth = _calculateHeaderWidth2[3];

        header.totalMinWidth = totalMinWidth;
        header.totalWidth = totalWidth;
        header.totalMaxWidth = totalMaxWidth;
        header.totalFlexWidth = totalFlexWidth;
      } else {
        header.totalMinWidth = header.minWidth;
        header.totalWidth = Math.min(Math.max(header.minWidth, header.width), header.maxWidth);
        header.totalMaxWidth = header.maxWidth;
        header.totalFlexWidth = header.canResize ? header.totalWidth : 0;
      }

      if (header.isVisible) {
        left += header.totalWidth;
        sumTotalMinWidth += header.totalMinWidth;
        sumTotalWidth += header.totalWidth;
        sumTotalMaxWidth += header.totalMaxWidth;
        sumTotalFlexWidth += header.totalFlexWidth;
      }
    });
    return [sumTotalMinWidth, sumTotalWidth, sumTotalMaxWidth, sumTotalFlexWidth];
  }

  function accessRowsForColumn(_ref) {
    var data = _ref.data,
        rows = _ref.rows,
        flatRows = _ref.flatRows,
        rowsById = _ref.rowsById,
        column = _ref.column,
        getRowId = _ref.getRowId,
        getSubRows = _ref.getSubRows,
        accessValueHooks = _ref.accessValueHooks,
        getInstance = _ref.getInstance;

    // Access the row's data column-by-column
    // We do it this way so we can incrementally add materialized
    // columns after the first pass and avoid excessive looping
    var accessRow = function accessRow(originalRow, rowIndex, depth, parent, parentRows) {
      if (depth === void 0) {
        depth = 0;
      }

      // Keep the original reference around
      var original = originalRow;
      var id = getRowId(originalRow, rowIndex, parent);
      var row = rowsById[id]; // If the row hasn't been created, let's make it

      if (!row) {
        row = {
          id: id,
          original: original,
          index: rowIndex,
          depth: depth,
          cells: [{}] // This is a dummy cell

        }; // Override common array functions (and the dummy cell's getCellProps function)
        // to show an error if it is accessed without calling prepareRow

        row.cells.map = unpreparedAccessWarning;
        row.cells.filter = unpreparedAccessWarning;
        row.cells.forEach = unpreparedAccessWarning;
        row.cells[0].getCellProps = unpreparedAccessWarning; // Create the cells and values

        row.values = {}; // Push this row into the parentRows array

        parentRows.push(row); // Keep track of every row in a flat array

        flatRows.push(row); // Also keep track of every row by its ID

        rowsById[id] = row; // Get the original subrows

        row.originalSubRows = getSubRows(originalRow, rowIndex); // Then recursively access them

        if (row.originalSubRows) {
          var subRows = [];
          row.originalSubRows.forEach(function (d, i) {
            return accessRow(d, i, depth + 1, row, subRows);
          }); // Keep the new subRows array on the row

          row.subRows = subRows;
        }
      } else if (row.subRows) {
        // If the row exists, then it's already been accessed
        // Keep recursing, but don't worry about passing the
        // accumlator array (those rows already exist)
        row.originalSubRows.forEach(function (d, i) {
          return accessRow(d, i, depth + 1, row);
        });
      } // If the column has an accessor, use it to get a value


      if (column.accessor) {
        row.values[column.id] = column.accessor(originalRow, rowIndex, row, parentRows, data);
      } // Allow plugins to manipulate the column value


      row.values[column.id] = reduceHooks(accessValueHooks, row.values[column.id], {
        row: row,
        column: column,
        instance: getInstance()
      }, true);
    };

    data.forEach(function (originalRow, rowIndex) {
      return accessRow(originalRow, rowIndex, 0, undefined, rows);
    });
  }

  actions.resetExpanded = 'resetExpanded';
  actions.toggleRowExpanded = 'toggleRowExpanded';
  actions.toggleAllRowsExpanded = 'toggleAllRowsExpanded';
  var useExpanded = function useExpanded(hooks) {
    hooks.getToggleAllRowsExpandedProps = [defaultGetToggleAllRowsExpandedProps];
    hooks.getToggleRowExpandedProps = [defaultGetToggleRowExpandedProps];
    hooks.stateReducers.push(reducer$1);
    hooks.useInstance.push(useInstance$1);
    hooks.prepareRow.push(prepareRow);
  };
  useExpanded.pluginName = 'useExpanded';

  var defaultGetToggleAllRowsExpandedProps = function defaultGetToggleAllRowsExpandedProps(props, _ref) {
    var instance = _ref.instance;
    return [props, {
      onClick: function onClick(e) {
        instance.toggleAllRowsExpanded();
      },
      style: {
        cursor: 'pointer'
      },
      title: 'Toggle All Rows Expanded'
    }];
  };

  var defaultGetToggleRowExpandedProps = function defaultGetToggleRowExpandedProps(props, _ref2) {
    var row = _ref2.row;
    return [props, {
      onClick: function onClick() {
        row.toggleRowExpanded();
      },
      style: {
        cursor: 'pointer'
      },
      title: 'Toggle Row Expanded'
    }];
  }; // Reducer


  function reducer$1(state, action, previousState, instance) {
    if (action.type === actions.init) {
      return _extends({
        expanded: {}
      }, state);
    }

    if (action.type === actions.resetExpanded) {
      return _extends({}, state, {
        expanded: instance.initialState.expanded || {}
      });
    }

    if (action.type === actions.toggleAllRowsExpanded) {
      var value = action.value;
      var rowsById = instance.rowsById;
      var isAllRowsExpanded = Object.keys(rowsById).length === Object.keys(state.expanded).length;
      var expandAll = typeof value !== 'undefined' ? value : !isAllRowsExpanded;

      if (expandAll) {
        var expanded = {};
        Object.keys(rowsById).forEach(function (rowId) {
          expanded[rowId] = true;
        });
        return _extends({}, state, {
          expanded: expanded
        });
      }

      return _extends({}, state, {
        expanded: {}
      });
    }

    if (action.type === actions.toggleRowExpanded) {
      var id = action.id,
          setExpanded = action.value;
      var exists = state.expanded[id];
      var shouldExist = typeof setExpanded !== 'undefined' ? setExpanded : !exists;

      if (!exists && shouldExist) {
        var _extends2;

        return _extends({}, state, {
          expanded: _extends({}, state.expanded, (_extends2 = {}, _extends2[id] = true, _extends2))
        });
      } else if (exists && !shouldExist) {
        var _state$expanded = state.expanded,
            _ = _state$expanded[id],
            rest = _objectWithoutPropertiesLoose(_state$expanded, [id].map(_toPropertyKey));

        return _extends({}, state, {
          expanded: rest
        });
      } else {
        return state;
      }
    }
  }

  function useInstance$1(instance) {
    var data = instance.data,
        rows = instance.rows,
        rowsById = instance.rowsById,
        _instance$manualExpan = instance.manualExpandedKey,
        manualExpandedKey = _instance$manualExpan === void 0 ? 'expanded' : _instance$manualExpan,
        _instance$paginateExp = instance.paginateExpandedRows,
        paginateExpandedRows = _instance$paginateExp === void 0 ? true : _instance$paginateExp,
        _instance$expandSubRo = instance.expandSubRows,
        expandSubRows = _instance$expandSubRo === void 0 ? true : _instance$expandSubRo,
        _instance$autoResetEx = instance.autoResetExpanded,
        autoResetExpanded = _instance$autoResetEx === void 0 ? true : _instance$autoResetEx,
        getHooks = instance.getHooks,
        plugins = instance.plugins,
        expanded = instance.state.expanded,
        dispatch = instance.dispatch;
    ensurePluginOrder(plugins, ['useSortBy', 'useGroupBy', 'usePivotColumns', 'useGlobalFilter'], 'useExpanded');
    var getAutoResetExpanded = useGetLatest(autoResetExpanded);
    var isAllRowsExpanded = Boolean(Object.keys(rowsById).length && Object.keys(expanded).length);

    if (isAllRowsExpanded) {
      if (Object.keys(rowsById).some(function (id) {
        return !expanded[id];
      })) {
        isAllRowsExpanded = false;
      }
    } // Bypass any effects from firing when this changes


    useMountedLayoutEffect(function () {
      if (getAutoResetExpanded()) {
        dispatch({
          type: actions.resetExpanded
        });
      }
    }, [dispatch, data]);
    var toggleRowExpanded = React.useCallback(function (id, value) {
      dispatch({
        type: actions.toggleRowExpanded,
        id: id,
        value: value
      });
    }, [dispatch]);
    var toggleAllRowsExpanded = React.useCallback(function (value) {
      return dispatch({
        type: actions.toggleAllRowsExpanded,
        value: value
      });
    }, [dispatch]);
    var expandedRows = React.useMemo(function () {
      if (paginateExpandedRows) {
        return expandRows(rows, {
          manualExpandedKey: manualExpandedKey,
          expanded: expanded,
          expandSubRows: expandSubRows
        });
      }

      return rows;
    }, [paginateExpandedRows, rows, manualExpandedKey, expanded, expandSubRows]);
    var expandedDepth = React.useMemo(function () {
      return findExpandedDepth(expanded);
    }, [expanded]);
    var getInstance = useGetLatest(instance);
    var getToggleAllRowsExpandedProps = makePropGetter(getHooks().getToggleAllRowsExpandedProps, {
      instance: getInstance()
    });
    Object.assign(instance, {
      preExpandedRows: rows,
      expandedRows: expandedRows,
      rows: expandedRows,
      expandedDepth: expandedDepth,
      isAllRowsExpanded: isAllRowsExpanded,
      toggleRowExpanded: toggleRowExpanded,
      toggleAllRowsExpanded: toggleAllRowsExpanded,
      getToggleAllRowsExpandedProps: getToggleAllRowsExpandedProps
    });
  }

  function prepareRow(row, _ref3) {
    var getHooks = _ref3.instance.getHooks,
        instance = _ref3.instance;

    row.toggleRowExpanded = function (set) {
      return instance.toggleRowExpanded(row.id, set);
    };

    row.getToggleRowExpandedProps = makePropGetter(getHooks().getToggleRowExpandedProps, {
      instance: instance,
      row: row
    });
  }

  function findExpandedDepth(expanded) {
    var maxDepth = 0;
    Object.keys(expanded).forEach(function (id) {
      var splitId = id.split('.');
      maxDepth = Math.max(maxDepth, splitId.length);
    });
    return maxDepth;
  }

  var text = function text(rows, ids, filterValue) {
    rows = rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id];
        return String(rowValue).toLowerCase().includes(String(filterValue).toLowerCase());
      });
    });
    return rows;
  };

  text.autoRemove = function (val) {
    return !val;
  };

  var exactText = function exactText(rows, ids, filterValue) {
    return rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id];
        return rowValue !== undefined ? String(rowValue).toLowerCase() === String(filterValue).toLowerCase() : true;
      });
    });
  };

  exactText.autoRemove = function (val) {
    return !val;
  };

  var exactTextCase = function exactTextCase(rows, ids, filterValue) {
    return rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id];
        return rowValue !== undefined ? String(rowValue) === String(filterValue) : true;
      });
    });
  };

  exactTextCase.autoRemove = function (val) {
    return !val;
  };

  var includes = function includes(rows, ids, filterValue) {
    return rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id];
        return rowValue.includes(filterValue);
      });
    });
  };

  includes.autoRemove = function (val) {
    return !val || !val.length;
  };

  var includesAll = function includesAll(rows, ids, filterValue) {
    return rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id];
        return rowValue && rowValue.length && filterValue.every(function (val) {
          return rowValue.includes(val);
        });
      });
    });
  };

  includesAll.autoRemove = function (val) {
    return !val || !val.length;
  };

  var includesSome = function includesSome(rows, ids, filterValue) {
    return rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id];
        return rowValue && rowValue.length && filterValue.some(function (val) {
          return rowValue.includes(val);
        });
      });
    });
  };

  includesSome.autoRemove = function (val) {
    return !val || !val.length;
  };

  var includesValue = function includesValue(rows, ids, filterValue) {
    return rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id];
        return filterValue.includes(rowValue);
      });
    });
  };

  includesValue.autoRemove = function (val) {
    return !val || !val.length;
  };

  var exact = function exact(rows, ids, filterValue) {
    return rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id];
        return rowValue === filterValue;
      });
    });
  };

  exact.autoRemove = function (val) {
    return typeof val === 'undefined';
  };

  var equals = function equals(rows, ids, filterValue) {
    return rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id]; // eslint-disable-next-line eqeqeq

        return rowValue == filterValue;
      });
    });
  };

  equals.autoRemove = function (val) {
    return val == null;
  };

  var between = function between(rows, ids, filterValue) {
    var _ref = filterValue || [],
        min = _ref[0],
        max = _ref[1];

    min = typeof min === 'number' ? min : -Infinity;
    max = typeof max === 'number' ? max : Infinity;

    if (min > max) {
      var temp = min;
      min = max;
      max = temp;
    }

    return rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id];
        return rowValue >= min && rowValue <= max;
      });
    });
  };

  between.autoRemove = function (val) {
    return !val || typeof val[0] !== 'number' && typeof val[1] !== 'number';
  };

  var filterTypes = /*#__PURE__*/Object.freeze({
    __proto__: null,
    text: text,
    exactText: exactText,
    exactTextCase: exactTextCase,
    includes: includes,
    includesAll: includesAll,
    includesSome: includesSome,
    includesValue: includesValue,
    exact: exact,
    equals: equals,
    between: between
  });

  actions.resetFilters = 'resetFilters';
  actions.setFilter = 'setFilter';
  actions.setAllFilters = 'setAllFilters';
  var useFilters = function useFilters(hooks) {
    hooks.stateReducers.push(reducer$2);
    hooks.useInstance.push(useInstance$2);
  };
  useFilters.pluginName = 'useFilters';

  function reducer$2(state, action, previousState, instance) {
    if (action.type === actions.init) {
      return _extends({
        filters: []
      }, state);
    }

    if (action.type === actions.resetFilters) {
      return _extends({}, state, {
        filters: instance.initialState.filters || []
      });
    }

    if (action.type === actions.setFilter) {
      var columnId = action.columnId,
          filterValue = action.filterValue;
      var allColumns = instance.allColumns,
          userFilterTypes = instance.filterTypes;
      var column = allColumns.find(function (d) {
        return d.id === columnId;
      });

      if (!column) {
        throw new Error("React-Table: Could not find a column with id: " + columnId);
      }

      var filterMethod = getFilterMethod(column.filter, userFilterTypes || {}, filterTypes);
      var previousfilter = state.filters.find(function (d) {
        return d.id === columnId;
      });
      var newFilter = functionalUpdate(filterValue, previousfilter && previousfilter.value); //

      if (shouldAutoRemoveFilter(filterMethod.autoRemove, newFilter, column)) {
        return _extends({}, state, {
          filters: state.filters.filter(function (d) {
            return d.id !== columnId;
          })
        });
      }

      if (previousfilter) {
        return _extends({}, state, {
          filters: state.filters.map(function (d) {
            if (d.id === columnId) {
              return {
                id: columnId,
                value: newFilter
              };
            }

            return d;
          })
        });
      }

      return _extends({}, state, {
        filters: [].concat(state.filters, [{
          id: columnId,
          value: newFilter
        }])
      });
    }

    if (action.type === actions.setAllFilters) {
      var filters = action.filters;
      var _allColumns = instance.allColumns,
          _userFilterTypes = instance.filterTypes;
      return _extends({}, state, {
        // Filter out undefined values
        filters: functionalUpdate(filters, state.filters).filter(function (filter) {
          var column = _allColumns.find(function (d) {
            return d.id === filter.id;
          });

          var filterMethod = getFilterMethod(column.filter, _userFilterTypes || {}, filterTypes);

          if (shouldAutoRemoveFilter(filterMethod.autoRemove, filter.value, column)) {
            return false;
          }

          return true;
        })
      });
    }
  }

  function useInstance$2(instance) {
    var data = instance.data,
        rows = instance.rows,
        flatRows = instance.flatRows,
        rowsById = instance.rowsById,
        allColumns = instance.allColumns,
        userFilterTypes = instance.filterTypes,
        manualFilters = instance.manualFilters,
        _instance$defaultCanF = instance.defaultCanFilter,
        defaultCanFilter = _instance$defaultCanF === void 0 ? false : _instance$defaultCanF,
        disableFilters = instance.disableFilters,
        filters = instance.state.filters,
        dispatch = instance.dispatch,
        _instance$autoResetFi = instance.autoResetFilters,
        autoResetFilters = _instance$autoResetFi === void 0 ? true : _instance$autoResetFi;
    var setFilter = React.useCallback(function (columnId, filterValue) {
      dispatch({
        type: actions.setFilter,
        columnId: columnId,
        filterValue: filterValue
      });
    }, [dispatch]);
    var setAllFilters = React.useCallback(function (filters) {
      dispatch({
        type: actions.setAllFilters,
        filters: filters
      });
    }, [dispatch]);
    allColumns.forEach(function (column) {
      var id = column.id,
          accessor = column.accessor,
          columnDefaultCanFilter = column.defaultCanFilter,
          columnDisableFilters = column.disableFilters; // Determine if a column is filterable

      column.canFilter = accessor ? getFirstDefined(columnDisableFilters === true ? false : undefined, disableFilters === true ? false : undefined, true) : getFirstDefined(columnDefaultCanFilter, defaultCanFilter, false); // Provide the column a way of updating the filter value

      column.setFilter = function (val) {
        return setFilter(column.id, val);
      }; // Provide the current filter value to the column for
      // convenience


      var found = filters.find(function (d) {
        return d.id === id;
      });
      column.filterValue = found && found.value;
    });

    var _React$useMemo = React.useMemo(function () {
      if (manualFilters || !filters.length) {
        return [rows, flatRows, rowsById];
      }

      var filteredFlatRows = [];
      var filteredRowsById = {}; // Filters top level and nested rows

      var filterRows = function filterRows(rows, depth) {
        if (depth === void 0) {
          depth = 0;
        }

        var filteredRows = rows;
        filteredRows = filters.reduce(function (filteredSoFar, _ref) {
          var columnId = _ref.id,
              filterValue = _ref.value;
          // Find the filters column
          var column = allColumns.find(function (d) {
            return d.id === columnId;
          });

          if (!column) {
            return filteredSoFar;
          }

          if (depth === 0) {
            column.preFilteredRows = filteredSoFar;
          }

          var filterMethod = getFilterMethod(column.filter, userFilterTypes || {}, filterTypes);

          if (!filterMethod) {
            console.warn("Could not find a valid 'column.filter' for column with the ID: " + column.id + ".");
            return filteredSoFar;
          } // Pass the rows, id, filterValue and column to the filterMethod
          // to get the filtered rows back


          column.filteredRows = filterMethod(filteredSoFar, [columnId], filterValue);
          return column.filteredRows;
        }, rows); // Apply the filter to any subRows
        // We technically could do this recursively in the above loop,
        // but that would severely hinder the API for the user, since they
        // would be required to do that recursion in some scenarios

        filteredRows.forEach(function (row) {
          filteredFlatRows.push(row);
          filteredRowsById[row.id] = row;

          if (!row.subRows) {
            return;
          }

          row.subRows = row.subRows && row.subRows.length > 0 ? filterRows(row.subRows, depth + 1) : row.subRows;
        });
        return filteredRows;
      };

      return [filterRows(rows), filteredFlatRows, filteredRowsById];
    }, [manualFilters, filters, rows, flatRows, rowsById, allColumns, userFilterTypes]),
        filteredRows = _React$useMemo[0],
        filteredFlatRows = _React$useMemo[1],
        filteredRowsById = _React$useMemo[2];

    React.useMemo(function () {
      // Now that each filtered column has it's partially filtered rows,
      // lets assign the final filtered rows to all of the other columns
      var nonFilteredColumns = allColumns.filter(function (column) {
        return !filters.find(function (d) {
          return d.id === column.id;
        });
      }); // This essentially enables faceted filter options to be built easily
      // using every column's preFilteredRows value

      nonFilteredColumns.forEach(function (column) {
        column.preFilteredRows = filteredRows;
        column.filteredRows = filteredRows;
      });
    }, [filteredRows, filters, allColumns]);
    var getAutoResetFilters = useGetLatest(autoResetFilters);
    useMountedLayoutEffect(function () {
      if (getAutoResetFilters()) {
        dispatch({
          type: actions.resetFilters
        });
      }
    }, [dispatch, manualFilters ? null : data]);
    Object.assign(instance, {
      preFilteredRows: rows,
      preFilteredFlatRows: flatRows,
      preFilteredRowsById: rowsById,
      filteredRows: filteredRows,
      filteredFlatRows: filteredFlatRows,
      filteredRowsById: filteredRowsById,
      rows: filteredRows,
      flatRows: filteredFlatRows,
      rowsById: filteredRowsById,
      setFilter: setFilter,
      setAllFilters: setAllFilters
    });
  }

  actions.resetGlobalFilter = 'resetGlobalFilter';
  actions.setGlobalFilter = 'setGlobalFilter';
  var useGlobalFilter = function useGlobalFilter(hooks) {
    hooks.stateReducers.push(reducer$3);
    hooks.useInstance.push(useInstance$3);
  };
  useGlobalFilter.pluginName = 'useGlobalFilter';

  function reducer$3(state, action, previousState, instance) {
    if (action.type === actions.resetGlobalFilter) {
      return _extends({}, state, {
        globalFilter: instance.initialState.globalFilter || undefined
      });
    }

    if (action.type === actions.setGlobalFilter) {
      var filterValue = action.filterValue;
      var userFilterTypes = instance.userFilterTypes;
      var filterMethod = getFilterMethod(instance.globalFilter, userFilterTypes || {}, filterTypes);
      var newFilter = functionalUpdate(filterValue, state.globalFilter); //

      if (shouldAutoRemoveFilter(filterMethod.autoRemove, newFilter)) {
        var globalFilter = state.globalFilter,
            stateWithoutGlobalFilter = _objectWithoutPropertiesLoose(state, ["globalFilter"]);

        return stateWithoutGlobalFilter;
      }

      return _extends({}, state, {
        globalFilter: newFilter
      });
    }
  }

  function useInstance$3(instance) {
    var data = instance.data,
        rows = instance.rows,
        flatRows = instance.flatRows,
        rowsById = instance.rowsById,
        allColumns = instance.allColumns,
        userFilterTypes = instance.filterTypes,
        globalFilter = instance.globalFilter,
        manualGlobalFilter = instance.manualGlobalFilter,
        globalFilterValue = instance.state.globalFilter,
        dispatch = instance.dispatch,
        _instance$autoResetGl = instance.autoResetGlobalFilter,
        autoResetGlobalFilter = _instance$autoResetGl === void 0 ? true : _instance$autoResetGl,
        disableGlobalFilter = instance.disableGlobalFilter;
    var setGlobalFilter = React.useCallback(function (filterValue) {
      dispatch({
        type: actions.setGlobalFilter,
        filterValue: filterValue
      });
    }, [dispatch]); // TODO: Create a filter cache for incremental high speed multi-filtering
    // This gets pretty complicated pretty fast, since you have to maintain a
    // cache for each row group (top-level rows, and each row's recursive subrows)
    // This would make multi-filtering a lot faster though. Too far?

    var _React$useMemo = React.useMemo(function () {
      if (manualGlobalFilter || typeof globalFilterValue === 'undefined') {
        return [rows, flatRows, rowsById];
      }

      var filteredFlatRows = [];
      var filteredRowsById = {};
      var filterMethod = getFilterMethod(globalFilter, userFilterTypes || {}, filterTypes);

      if (!filterMethod) {
        console.warn("Could not find a valid 'globalFilter' option.");
        return rows;
      }

      allColumns.forEach(function (column) {
        var columnDisableGlobalFilter = column.disableGlobalFilter;
        column.canFilter = getFirstDefined(columnDisableGlobalFilter === true ? false : undefined, disableGlobalFilter === true ? false : undefined, true);
      });
      var filterableColumns = allColumns.filter(function (c) {
        return c.canFilter === true;
      }); // Filters top level and nested rows

      var filterRows = function filterRows(filteredRows) {
        filteredRows = filterMethod(filteredRows, filterableColumns.map(function (d) {
          return d.id;
        }), globalFilterValue);
        filteredRows.forEach(function (row) {
          filteredFlatRows.push(row);
          filteredRowsById[row.id] = row;
          row.subRows = row.subRows && row.subRows.length ? filterRows(row.subRows) : row.subRows;
        });
        return filteredRows;
      };

      return [filterRows(rows), filteredFlatRows, filteredRowsById];
    }, [manualGlobalFilter, globalFilterValue, globalFilter, userFilterTypes, allColumns, rows, flatRows, rowsById, disableGlobalFilter]),
        globalFilteredRows = _React$useMemo[0],
        globalFilteredFlatRows = _React$useMemo[1],
        globalFilteredRowsById = _React$useMemo[2];

    var getAutoResetGlobalFilter = useGetLatest(autoResetGlobalFilter);
    useMountedLayoutEffect(function () {
      if (getAutoResetGlobalFilter()) {
        dispatch({
          type: actions.resetGlobalFilter
        });
      }
    }, [dispatch, manualGlobalFilter ? null : data]);
    Object.assign(instance, {
      preGlobalFilteredRows: rows,
      preGlobalFilteredFlatRows: flatRows,
      preGlobalFilteredRowsById: rowsById,
      globalFilteredRows: globalFilteredRows,
      globalFilteredFlatRows: globalFilteredFlatRows,
      globalFilteredRowsById: globalFilteredRowsById,
      rows: globalFilteredRows,
      flatRows: globalFilteredFlatRows,
      rowsById: globalFilteredRowsById,
      setGlobalFilter: setGlobalFilter,
      disableGlobalFilter: disableGlobalFilter
    });
  }

  function sum(values, aggregatedValues) {
    // It's faster to just add the aggregations together instead of
    // process leaf nodes individually
    return aggregatedValues.reduce(function (sum, next) {
      return sum + (typeof next === 'number' ? next : 0);
    }, 0);
  }
  function min(values) {
    var min = values[0] || 0;
    values.forEach(function (value) {
      if (typeof value === 'number') {
        min = Math.min(min, value);
      }
    });
    return min;
  }
  function max(values) {
    var max = values[0] || 0;
    values.forEach(function (value) {
      if (typeof value === 'number') {
        max = Math.max(max, value);
      }
    });
    return max;
  }
  function minMax(values) {
    var min = values[0] || 0;
    var max = values[0] || 0;
    values.forEach(function (value) {
      if (typeof value === 'number') {
        min = Math.min(min, value);
        max = Math.max(max, value);
      }
    });
    return min + ".." + max;
  }
  function average(values) {
    return sum(null, values) / values.length;
  }
  function median(values) {
    if (!values.length) {
      return null;
    }

    var mid = Math.floor(values.length / 2);
    var nums = [].concat(values).sort(function (a, b) {
      return a - b;
    });
    return values.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
  }
  function unique(values) {
    return Array.from(new Set(values).values());
  }
  function uniqueCount(values) {
    return new Set(values).size;
  }
  function count(values) {
    return values.length;
  }

  var aggregations = /*#__PURE__*/Object.freeze({
    __proto__: null,
    sum: sum,
    min: min,
    max: max,
    minMax: minMax,
    average: average,
    median: median,
    unique: unique,
    uniqueCount: uniqueCount,
    count: count
  });

  var emptyArray = [];
  var emptyObject = {}; // Actions

  actions.resetGroupBy = 'resetGroupBy';
  actions.setGroupBy = 'setGroupBy';
  actions.toggleGroupBy = 'toggleGroupBy';
  var useGroupBy = function useGroupBy(hooks) {
    hooks.getGroupByToggleProps = [defaultGetGroupByToggleProps];
    hooks.stateReducers.push(reducer$4);
    hooks.visibleColumnsDeps.push(function (deps, _ref) {
      var instance = _ref.instance;
      return [].concat(deps, [instance.state.groupBy]);
    });
    hooks.visibleColumns.push(visibleColumns);
    hooks.useInstance.push(useInstance$4);
    hooks.prepareRow.push(prepareRow$1);
  };
  useGroupBy.pluginName = 'useGroupBy';

  var defaultGetGroupByToggleProps = function defaultGetGroupByToggleProps(props, _ref2) {
    var header = _ref2.header;
    return [props, {
      onClick: header.canGroupBy ? function (e) {
        e.persist();
        header.toggleGroupBy();
      } : undefined,
      style: {
        cursor: header.canGroupBy ? 'pointer' : undefined
      },
      title: 'Toggle GroupBy'
    }];
  }; // Reducer


  function reducer$4(state, action, previousState, instance) {
    if (action.type === actions.init) {
      return _extends({
        groupBy: []
      }, state);
    }

    if (action.type === actions.resetGroupBy) {
      return _extends({}, state, {
        groupBy: instance.initialState.groupBy || []
      });
    }

    if (action.type === actions.setGroupBy) {
      var value = action.value;
      return _extends({}, state, {
        groupBy: value
      });
    }

    if (action.type === actions.toggleGroupBy) {
      var columnId = action.columnId,
          setGroupBy = action.value;
      var resolvedGroupBy = typeof setGroupBy !== 'undefined' ? setGroupBy : !state.groupBy.includes(columnId);

      if (resolvedGroupBy) {
        return _extends({}, state, {
          groupBy: [].concat(state.groupBy, [columnId])
        });
      }

      return _extends({}, state, {
        groupBy: state.groupBy.filter(function (d) {
          return d !== columnId;
        })
      });
    }
  }

  function visibleColumns(columns, _ref3) {
    var groupBy = _ref3.instance.state.groupBy;
    // Sort grouped columns to the start of the column list
    // before the headers are built
    var groupByColumns = groupBy.map(function (g) {
      return columns.find(function (col) {
        return col.id === g;
      });
    }).filter(Boolean);
    var nonGroupByColumns = columns.filter(function (col) {
      return !groupBy.includes(col.id);
    });
    columns = [].concat(groupByColumns, nonGroupByColumns);
    columns.forEach(function (column) {
      column.isGrouped = groupBy.includes(column.id);
      column.groupedIndex = groupBy.indexOf(column.id);
    });
    return columns;
  }

  var defaultUserAggregations = {};

  function useInstance$4(instance) {
    var data = instance.data,
        rows = instance.rows,
        flatRows = instance.flatRows,
        rowsById = instance.rowsById,
        allColumns = instance.allColumns,
        flatHeaders = instance.flatHeaders,
        _instance$groupByFn = instance.groupByFn,
        groupByFn = _instance$groupByFn === void 0 ? defaultGroupByFn : _instance$groupByFn,
        manualGroupBy = instance.manualGroupBy,
        _instance$aggregation = instance.aggregations,
        userAggregations = _instance$aggregation === void 0 ? defaultUserAggregations : _instance$aggregation,
        plugins = instance.plugins,
        groupBy = instance.state.groupBy,
        dispatch = instance.dispatch,
        _instance$autoResetGr = instance.autoResetGroupBy,
        autoResetGroupBy = _instance$autoResetGr === void 0 ? true : _instance$autoResetGr,
        disableGroupBy = instance.disableGroupBy,
        defaultCanGroupBy = instance.defaultCanGroupBy,
        getHooks = instance.getHooks;
    ensurePluginOrder(plugins, ['useColumnOrder', 'useFilters'], 'useGroupBy');
    var getInstance = useGetLatest(instance);
    allColumns.forEach(function (column) {
      var accessor = column.accessor,
          defaultColumnGroupBy = column.defaultGroupBy,
          columnDisableGroupBy = column.disableGroupBy;
      column.canGroupBy = accessor ? getFirstDefined(column.canGroupBy, columnDisableGroupBy === true ? false : undefined, disableGroupBy === true ? false : undefined, true) : getFirstDefined(column.canGroupBy, defaultColumnGroupBy, defaultCanGroupBy, false);

      if (column.canGroupBy) {
        column.toggleGroupBy = function () {
          return instance.toggleGroupBy(column.id);
        };
      }

      column.Aggregated = column.Aggregated || column.Cell;
    });
    var toggleGroupBy = React.useCallback(function (columnId, value) {
      dispatch({
        type: actions.toggleGroupBy,
        columnId: columnId,
        value: value
      });
    }, [dispatch]);
    var setGroupBy = React.useCallback(function (value) {
      dispatch({
        type: actions.setGroupBy,
        value: value
      });
    }, [dispatch]);
    flatHeaders.forEach(function (header) {
      header.getGroupByToggleProps = makePropGetter(getHooks().getGroupByToggleProps, {
        instance: getInstance(),
        header: header
      });
    });

    var _React$useMemo = React.useMemo(function () {
      if (manualGroupBy || !groupBy.length) {
        return [rows, flatRows, rowsById, emptyArray, emptyObject, flatRows, rowsById];
      } // Ensure that the list of filtered columns exist


      var existingGroupBy = groupBy.filter(function (g) {
        return allColumns.find(function (col) {
          return col.id === g;
        });
      }); // Find the columns that can or are aggregating
      // Uses each column to aggregate rows into a single value

      var aggregateRowsToValues = function aggregateRowsToValues(leafRows, groupedRows, depth) {
        var values = {};
        allColumns.forEach(function (column) {
          // Don't aggregate columns that are in the groupBy
          if (existingGroupBy.includes(column.id)) {
            values[column.id] = groupedRows[0] ? groupedRows[0].values[column.id] : null;
            return;
          } // Aggregate the values


          var aggregateFn = typeof column.aggregate === 'function' ? column.aggregate : userAggregations[column.aggregate] || aggregations[column.aggregate];

          if (aggregateFn) {
            // Get the columnValues to aggregate
            var groupedValues = groupedRows.map(function (row) {
              return row.values[column.id];
            }); // Get the columnValues to aggregate

            var leafValues = leafRows.map(function (row) {
              var columnValue = row.values[column.id];

              if (!depth && column.aggregateValue) {
                var aggregateValueFn = typeof column.aggregateValue === 'function' ? column.aggregateValue : userAggregations[column.aggregateValue] || aggregations[column.aggregateValue];

                if (!aggregateValueFn) {
                  console.info({
                    column: column
                  });
                  throw new Error("React Table: Invalid column.aggregateValue option for column listed above");
                }

                columnValue = aggregateValueFn(columnValue, row, column);
              }

              return columnValue;
            });
            values[column.id] = aggregateFn(leafValues, groupedValues);
          } else if (column.aggregate) {
            console.info({
              column: column
            });
            throw new Error("React Table: Invalid column.aggregate option for column listed above");
          } else {
            values[column.id] = null;
          }
        });
        return values;
      };

      var groupedFlatRows = [];
      var groupedRowsById = {};
      var onlyGroupedFlatRows = [];
      var onlyGroupedRowsById = {};
      var nonGroupedFlatRows = [];
      var nonGroupedRowsById = {}; // Recursively group the data

      var groupUpRecursively = function groupUpRecursively(rows, depth, parentId) {
        if (depth === void 0) {
          depth = 0;
        }

        // This is the last level, just return the rows
        if (depth === existingGroupBy.length) {
          return rows.map(function (row) {
            return _extends({}, row, {
              depth: depth
            });
          });
        }

        var columnId = existingGroupBy[depth]; // Group the rows together for this level

        var rowGroupsMap = groupByFn(rows, columnId); // Peform aggregations for each group

        var aggregatedGroupedRows = Object.entries(rowGroupsMap).map(function (_ref4, index) {
          var groupByVal = _ref4[0],
              groupedRows = _ref4[1];
          var id = columnId + ":" + groupByVal;
          id = parentId ? parentId + ">" + id : id; // First, Recurse to group sub rows before aggregation

          var subRows = groupUpRecursively(groupedRows, depth + 1, id); // Flatten the leaf rows of the rows in this group

          var leafRows = depth ? flattenBy(groupedRows, 'leafRows') : groupedRows;
          var values = aggregateRowsToValues(leafRows, groupedRows, depth);
          var row = {
            id: id,
            isGrouped: true,
            groupByID: columnId,
            groupByVal: groupByVal,
            values: values,
            subRows: subRows,
            leafRows: leafRows,
            depth: depth,
            index: index
          };
          subRows.forEach(function (subRow) {
            groupedFlatRows.push(subRow);
            groupedRowsById[subRow.id] = subRow;

            if (subRow.isGrouped) {
              onlyGroupedFlatRows.push(subRow);
              onlyGroupedRowsById[subRow.id] = subRow;
            } else {
              nonGroupedFlatRows.push(subRow);
              nonGroupedRowsById[subRow.id] = subRow;
            }
          });
          return row;
        });
        return aggregatedGroupedRows;
      };

      var groupedRows = groupUpRecursively(rows);
      groupedRows.forEach(function (subRow) {
        groupedFlatRows.push(subRow);
        groupedRowsById[subRow.id] = subRow;

        if (subRow.isGrouped) {
          onlyGroupedFlatRows.push(subRow);
          onlyGroupedRowsById[subRow.id] = subRow;
        } else {
          nonGroupedFlatRows.push(subRow);
          nonGroupedRowsById[subRow.id] = subRow;
        }
      }); // Assign the new data

      return [groupedRows, groupedFlatRows, groupedRowsById, onlyGroupedFlatRows, onlyGroupedRowsById, nonGroupedFlatRows, nonGroupedRowsById];
    }, [manualGroupBy, groupBy, rows, flatRows, rowsById, allColumns, userAggregations, groupByFn]),
        groupedRows = _React$useMemo[0],
        groupedFlatRows = _React$useMemo[1],
        groupedRowsById = _React$useMemo[2],
        onlyGroupedFlatRows = _React$useMemo[3],
        onlyGroupedRowsById = _React$useMemo[4],
        nonGroupedFlatRows = _React$useMemo[5],
        nonGroupedRowsById = _React$useMemo[6];

    var getAutoResetGroupBy = useGetLatest(autoResetGroupBy);
    useMountedLayoutEffect(function () {
      if (getAutoResetGroupBy()) {
        dispatch({
          type: actions.resetGroupBy
        });
      }
    }, [dispatch, manualGroupBy ? null : data]);
    Object.assign(instance, {
      preGroupedRows: rows,
      preGroupedFlatRow: flatRows,
      preGroupedRowsById: rowsById,
      groupedRows: groupedRows,
      groupedFlatRows: groupedFlatRows,
      groupedRowsById: groupedRowsById,
      onlyGroupedFlatRows: onlyGroupedFlatRows,
      onlyGroupedRowsById: onlyGroupedRowsById,
      nonGroupedFlatRows: nonGroupedFlatRows,
      nonGroupedRowsById: nonGroupedRowsById,
      rows: groupedRows,
      flatRows: groupedFlatRows,
      rowsById: groupedRowsById,
      toggleGroupBy: toggleGroupBy,
      setGroupBy: setGroupBy
    });
  }

  function prepareRow$1(row) {
    row.allCells.forEach(function (cell) {
      var _row$subRows;

      // Grouped cells are in the groupBy and the pivot cell for the row
      cell.isGrouped = cell.column.isGrouped && cell.column.id === row.groupByID; // Placeholder cells are any columns in the groupBy that are not grouped

      cell.isPlaceholder = !cell.isGrouped && cell.column.isGrouped; // Aggregated cells are not grouped, not repeated, but still have subRows

      cell.isAggregated = !cell.isGrouped && !cell.isPlaceholder && ((_row$subRows = row.subRows) == null ? void 0 : _row$subRows.length);
    });
  }

  function defaultGroupByFn(rows, columnId) {
    return rows.reduce(function (prev, row, i) {
      // TODO: Might want to implement a key serializer here so
      // irregular column values can still be grouped if needed?
      var resKey = "" + row.values[columnId];
      prev[resKey] = Array.isArray(prev[resKey]) ? prev[resKey] : [];
      prev[resKey].push(row);
      return prev;
    }, {});
  }

  var reSplitAlphaNumeric = /([0-9]+)/gm; // Mixed sorting is slow, but very inclusive of many edge cases.
  // It handles numbers, mixed alphanumeric combinations, and even
  // null, undefined, and Infinity

  var alphanumeric = function alphanumeric(rowA, rowB, columnId) {
    var _getRowValuesByColumn = getRowValuesByColumnID(rowA, rowB, columnId),
        a = _getRowValuesByColumn[0],
        b = _getRowValuesByColumn[1]; // Force to strings (or "" for unsupported types)


    a = toString(a);
    b = toString(b); // Split on number groups, but keep the delimiter
    // Then remove falsey split values

    a = a.split(reSplitAlphaNumeric).filter(Boolean);
    b = b.split(reSplitAlphaNumeric).filter(Boolean); // While

    while (a.length && b.length) {
      var aa = a.shift();
      var bb = b.shift();
      var an = parseInt(aa, 10);
      var bn = parseInt(bb, 10);
      var combo = [an, bn].sort(); // Both are string

      if (isNaN(combo[0])) {
        if (aa > bb) {
          return 1;
        }

        if (bb > aa) {
          return -1;
        }

        continue;
      } // One is a string, one is a number


      if (isNaN(combo[1])) {
        return isNaN(an) ? -1 : 1;
      } // Both are numbers


      if (an > bn) {
        return 1;
      }

      if (bn > an) {
        return -1;
      }
    }

    return a.length - b.length;
  };
  function datetime(rowA, rowB, columnId) {
    var _getRowValuesByColumn2 = getRowValuesByColumnID(rowA, rowB, columnId),
        a = _getRowValuesByColumn2[0],
        b = _getRowValuesByColumn2[1];

    a = a.getTime();
    b = b.getTime();
    return compareBasic(a, b);
  }
  function basic(rowA, rowB, columnId) {
    var _getRowValuesByColumn3 = getRowValuesByColumnID(rowA, rowB, columnId),
        a = _getRowValuesByColumn3[0],
        b = _getRowValuesByColumn3[1];

    return compareBasic(a, b);
  }
  function string(rowA, rowB, columnId) {
    var _getRowValuesByColumn4 = getRowValuesByColumnID(rowA, rowB, columnId),
        a = _getRowValuesByColumn4[0],
        b = _getRowValuesByColumn4[1];

    a = a.split('').filter(Boolean);
    b = b.split('').filter(Boolean);

    while (a.length && b.length) {
      var aa = a.shift();
      var bb = b.shift();
      var alower = aa.toLowerCase();
      var blower = bb.toLowerCase(); // Case insensitive comparison until characters match

      if (alower > blower) {
        return 1;
      }

      if (blower > alower) {
        return -1;
      } // If lowercase characters are identical


      if (aa > bb) {
        return 1;
      }

      if (bb > aa) {
        return -1;
      }

      continue;
    }

    return a.length - b.length;
  }
  function number(rowA, rowB, columnId) {
    var _getRowValuesByColumn5 = getRowValuesByColumnID(rowA, rowB, columnId),
        a = _getRowValuesByColumn5[0],
        b = _getRowValuesByColumn5[1];

    var replaceNonNumeric = /[^0-9.]/gi;
    a = Number(String(a).replace(replaceNonNumeric, ''));
    b = Number(String(b).replace(replaceNonNumeric, ''));
    return compareBasic(a, b);
  } // Utils

  function compareBasic(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
  }

  function getRowValuesByColumnID(row1, row2, columnId) {
    return [row1.values[columnId], row2.values[columnId]];
  }

  function toString(a) {
    if (typeof a === 'number') {
      if (isNaN(a) || a === Infinity || a === -Infinity) {
        return '';
      }

      return String(a);
    }

    if (typeof a === 'string') {
      return a;
    }

    return '';
  }

  var sortTypes = /*#__PURE__*/Object.freeze({
    __proto__: null,
    alphanumeric: alphanumeric,
    datetime: datetime,
    basic: basic,
    string: string,
    number: number
  });

  actions.resetSortBy = 'resetSortBy';
  actions.setSortBy = 'setSortBy';
  actions.toggleSortBy = 'toggleSortBy';
  actions.clearSortBy = 'clearSortBy';
  defaultColumn.sortType = 'alphanumeric';
  defaultColumn.sortDescFirst = false;
  var useSortBy = function useSortBy(hooks) {
    hooks.getSortByToggleProps = [defaultGetSortByToggleProps];
    hooks.stateReducers.push(reducer$5);
    hooks.useInstance.push(useInstance$5);
  };
  useSortBy.pluginName = 'useSortBy';

  var defaultGetSortByToggleProps = function defaultGetSortByToggleProps(props, _ref) {
    var instance = _ref.instance,
        column = _ref.column;
    var _instance$isMultiSort = instance.isMultiSortEvent,
        isMultiSortEvent = _instance$isMultiSort === void 0 ? function (e) {
      return e.shiftKey;
    } : _instance$isMultiSort;
    return [props, {
      onClick: column.canSort ? function (e) {
        e.persist();
        column.toggleSortBy(undefined, !instance.disableMultiSort && isMultiSortEvent(e));
      } : undefined,
      style: {
        cursor: column.canSort ? 'pointer' : undefined
      },
      title: column.canSort ? 'Toggle SortBy' : undefined
    }];
  }; // Reducer


  function reducer$5(state, action, previousState, instance) {
    if (action.type === actions.init) {
      return _extends({
        sortBy: []
      }, state);
    }

    if (action.type === actions.resetSortBy) {
      return _extends({}, state, {
        sortBy: instance.initialState.sortBy || []
      });
    }

    if (action.type === actions.clearSortBy) {
      var sortBy = state.sortBy;
      var newSortBy = sortBy.filter(function (d) {
        return d.id !== action.columnId;
      });
      return _extends({}, state, {
        sortBy: newSortBy
      });
    }

    if (action.type === actions.setSortBy) {
      var _sortBy = action.sortBy;
      return _extends({}, state, {
        sortBy: _sortBy
      });
    }

    if (action.type === actions.toggleSortBy) {
      var columnId = action.columnId,
          desc = action.desc,
          multi = action.multi;
      var allColumns = instance.allColumns,
          disableMultiSort = instance.disableMultiSort,
          disableSortRemove = instance.disableSortRemove,
          disableMultiRemove = instance.disableMultiRemove,
          _instance$maxMultiSor = instance.maxMultiSortColCount,
          maxMultiSortColCount = _instance$maxMultiSor === void 0 ? Number.MAX_SAFE_INTEGER : _instance$maxMultiSor;
      var _sortBy2 = state.sortBy; // Find the column for this columnId

      var column = allColumns.find(function (d) {
        return d.id === columnId;
      });
      var sortDescFirst = column.sortDescFirst; // Find any existing sortBy for this column

      var existingSortBy = _sortBy2.find(function (d) {
        return d.id === columnId;
      });

      var existingIndex = _sortBy2.findIndex(function (d) {
        return d.id === columnId;
      });

      var hasDescDefined = typeof desc !== 'undefined' && desc !== null;
      var _newSortBy = []; // What should we do with this sort action?

      var sortAction;

      if (!disableMultiSort && multi) {
        if (existingSortBy) {
          sortAction = 'toggle';
        } else {
          sortAction = 'add';
        }
      } else {
        // Normal mode
        if (existingIndex !== _sortBy2.length - 1 || _sortBy2.length !== 1) {
          sortAction = 'replace';
        } else if (existingSortBy) {
          sortAction = 'toggle';
        } else {
          sortAction = 'replace';
        }
      } // Handle toggle states that will remove the sortBy


      if (sortAction === 'toggle' && // Must be toggling
      !disableSortRemove && // If disableSortRemove, disable in general
      !hasDescDefined && ( // Must not be setting desc
      multi ? !disableMultiRemove : true) && ( // If multi, don't allow if disableMultiRemove
      existingSortBy && // Finally, detect if it should indeed be removed
      existingSortBy.desc && !sortDescFirst || !existingSortBy.desc && sortDescFirst)) {
        sortAction = 'remove';
      }

      if (sortAction === 'replace') {
        _newSortBy = [{
          id: columnId,
          desc: hasDescDefined ? desc : sortDescFirst
        }];
      } else if (sortAction === 'add') {
        _newSortBy = [].concat(_sortBy2, [{
          id: columnId,
          desc: hasDescDefined ? desc : sortDescFirst
        }]); // Take latest n columns

        _newSortBy.splice(0, _newSortBy.length - maxMultiSortColCount);
      } else if (sortAction === 'toggle') {
        // This flips (or sets) the
        _newSortBy = _sortBy2.map(function (d) {
          if (d.id === columnId) {
            return _extends({}, d, {
              desc: hasDescDefined ? desc : !existingSortBy.desc
            });
          }

          return d;
        });
      } else if (sortAction === 'remove') {
        _newSortBy = _sortBy2.filter(function (d) {
          return d.id !== columnId;
        });
      }

      return _extends({}, state, {
        sortBy: _newSortBy
      });
    }
  }

  function useInstance$5(instance) {
    var data = instance.data,
        rows = instance.rows,
        flatRows = instance.flatRows,
        allColumns = instance.allColumns,
        _instance$orderByFn = instance.orderByFn,
        orderByFn = _instance$orderByFn === void 0 ? defaultOrderByFn : _instance$orderByFn,
        userSortTypes = instance.sortTypes,
        manualSortBy = instance.manualSortBy,
        defaultCanSort = instance.defaultCanSort,
        disableSortBy = instance.disableSortBy,
        flatHeaders = instance.flatHeaders,
        sortBy = instance.state.sortBy,
        dispatch = instance.dispatch,
        plugins = instance.plugins,
        getHooks = instance.getHooks,
        _instance$autoResetSo = instance.autoResetSortBy,
        autoResetSortBy = _instance$autoResetSo === void 0 ? true : _instance$autoResetSo;
    ensurePluginOrder(plugins, ['useFilters', 'useGlobalFilter', 'useGroupBy', 'usePivotColumns'], 'useSortBy');
    var setSortBy = React.useCallback(function (sortBy) {
      dispatch({
        type: actions.setSortBy,
        sortBy: sortBy
      });
    }, [dispatch]); // Updates sorting based on a columnId, desc flag and multi flag

    var toggleSortBy = React.useCallback(function (columnId, desc, multi) {
      dispatch({
        type: actions.toggleSortBy,
        columnId: columnId,
        desc: desc,
        multi: multi
      });
    }, [dispatch]); // use reference to avoid memory leak in #1608

    var getInstance = useGetLatest(instance); // Add the getSortByToggleProps method to columns and headers

    flatHeaders.forEach(function (column) {
      var accessor = column.accessor,
          defaultColumnCanSort = column.canSort,
          columnDisableSortBy = column.disableSortBy,
          id = column.id;
      var canSort = accessor ? getFirstDefined(columnDisableSortBy === true ? false : undefined, disableSortBy === true ? false : undefined, true) : getFirstDefined(defaultCanSort, defaultColumnCanSort, false);
      column.canSort = canSort;

      if (column.canSort) {
        column.toggleSortBy = function (desc, multi) {
          return toggleSortBy(column.id, desc, multi);
        };

        column.clearSortBy = function () {
          dispatch({
            type: actions.clearSortBy,
            columnId: column.id
          });
        };
      }

      column.getSortByToggleProps = makePropGetter(getHooks().getSortByToggleProps, {
        instance: getInstance(),
        column: column
      });
      var columnSort = sortBy.find(function (d) {
        return d.id === id;
      });
      column.isSorted = !!columnSort;
      column.sortedIndex = sortBy.findIndex(function (d) {
        return d.id === id;
      });
      column.isSortedDesc = column.isSorted ? columnSort.desc : undefined;
    });

    var _React$useMemo = React.useMemo(function () {
      if (manualSortBy || !sortBy.length) {
        return [rows, flatRows];
      }

      var sortedFlatRows = []; // Filter out sortBys that correspond to non existing columns

      var availableSortBy = sortBy.filter(function (sort) {
        return allColumns.find(function (col) {
          return col.id === sort.id;
        });
      });

      var sortData = function sortData(rows) {
        // Use the orderByFn to compose multiple sortBy's together.
        // This will also perform a stable sorting using the row index
        // if needed.
        var sortedData = orderByFn(rows, availableSortBy.map(function (sort) {
          // Support custom sorting methods for each column
          var column = allColumns.find(function (d) {
            return d.id === sort.id;
          });

          if (!column) {
            throw new Error("React-Table: Could not find a column with id: " + sort.id + " while sorting");
          }

          var sortType = column.sortType; // Look up sortBy functions in this order:
          // column function
          // column string lookup on user sortType
          // column string lookup on built-in sortType
          // default function
          // default string lookup on user sortType
          // default string lookup on built-in sortType

          var sortMethod = isFunction(sortType) || (userSortTypes || {})[sortType] || sortTypes[sortType];

          if (!sortMethod) {
            throw new Error("React-Table: Could not find a valid sortType of '" + sortType + "' for column '" + sort.id + "'.");
          } // Return the correct sortFn.
          // This function should always return in ascending order


          return function (a, b) {
            return sortMethod(a, b, sort.id, sort.desc);
          };
        }), // Map the directions
        availableSortBy.map(function (sort) {
          // Detect and use the sortInverted option
          var column = allColumns.find(function (d) {
            return d.id === sort.id;
          });

          if (column && column.sortInverted) {
            return sort.desc;
          }

          return !sort.desc;
        })); // If there are sub-rows, sort them

        sortedData.forEach(function (row) {
          sortedFlatRows.push(row);

          if (!row.subRows || row.subRows.length === 0) {
            return;
          }

          row.subRows = sortData(row.subRows);
        });
        return sortedData;
      };

      return [sortData(rows), sortedFlatRows];
    }, [manualSortBy, sortBy, rows, flatRows, allColumns, orderByFn, userSortTypes]),
        sortedRows = _React$useMemo[0],
        sortedFlatRows = _React$useMemo[1];

    var getAutoResetSortBy = useGetLatest(autoResetSortBy);
    useMountedLayoutEffect(function () {
      if (getAutoResetSortBy()) {
        dispatch({
          type: actions.resetSortBy
        });
      }
    }, [manualSortBy ? null : data]);
    Object.assign(instance, {
      preSortedRows: rows,
      preSortedFlatRows: flatRows,
      sortedRows: sortedRows,
      sortedFlatRows: sortedFlatRows,
      rows: sortedRows,
      flatRows: sortedFlatRows,
      setSortBy: setSortBy,
      toggleSortBy: toggleSortBy
    });
  }

  function defaultOrderByFn(arr, funcs, dirs) {
    return [].concat(arr).sort(function (rowA, rowB) {
      for (var i = 0; i < funcs.length; i += 1) {
        var sortFn = funcs[i];
        var desc = dirs[i] === false || dirs[i] === 'desc';
        var sortInt = sortFn(rowA, rowB);

        if (sortInt !== 0) {
          return desc ? -sortInt : sortInt;
        }
      }

      return dirs[0] ? rowA.index - rowB.index : rowB.index - rowA.index;
    });
  }

  var pluginName = 'usePagination'; // Actions

  actions.resetPage = 'resetPage';
  actions.gotoPage = 'gotoPage';
  actions.setPageSize = 'setPageSize';
  var usePagination = function usePagination(hooks) {
    hooks.stateReducers.push(reducer$6);
    hooks.useInstance.push(useInstance$6);
  };
  usePagination.pluginName = pluginName;

  function reducer$6(state, action, previousState, instance) {
    if (action.type === actions.init) {
      return _extends({
        pageSize: 10,
        pageIndex: 0
      }, state);
    }

    if (action.type === actions.resetPage) {
      return _extends({}, state, {
        pageIndex: instance.initialState.pageIndex || 0
      });
    }

    if (action.type === actions.gotoPage) {
      var pageCount = instance.pageCount,
          page = instance.page;
      var newPageIndex = functionalUpdate(action.pageIndex, state.pageIndex);
      var canNavigate = false;

      if (newPageIndex > state.pageIndex) {
        // next page
        canNavigate = pageCount === -1 ? page.length >= state.pageSize : newPageIndex < pageCount;
      } else if (newPageIndex < state.pageIndex) {
        // prev page
        canNavigate = newPageIndex > -1;
      }

      if (!canNavigate) {
        return state;
      }

      return _extends({}, state, {
        pageIndex: newPageIndex
      });
    }

    if (action.type === actions.setPageSize) {
      var pageSize = action.pageSize;
      var topRowIndex = state.pageSize * state.pageIndex;
      var pageIndex = Math.floor(topRowIndex / pageSize);
      return _extends({}, state, {
        pageIndex: pageIndex,
        pageSize: pageSize
      });
    }
  }

  function useInstance$6(instance) {
    var rows = instance.rows,
        _instance$autoResetPa = instance.autoResetPage,
        autoResetPage = _instance$autoResetPa === void 0 ? true : _instance$autoResetPa,
        _instance$manualExpan = instance.manualExpandedKey,
        manualExpandedKey = _instance$manualExpan === void 0 ? 'expanded' : _instance$manualExpan,
        plugins = instance.plugins,
        userPageCount = instance.pageCount,
        _instance$paginateExp = instance.paginateExpandedRows,
        paginateExpandedRows = _instance$paginateExp === void 0 ? true : _instance$paginateExp,
        _instance$expandSubRo = instance.expandSubRows,
        expandSubRows = _instance$expandSubRo === void 0 ? true : _instance$expandSubRo,
        _instance$state = instance.state,
        pageSize = _instance$state.pageSize,
        pageIndex = _instance$state.pageIndex,
        expanded = _instance$state.expanded,
        globalFilter = _instance$state.globalFilter,
        filters = _instance$state.filters,
        groupBy = _instance$state.groupBy,
        sortBy = _instance$state.sortBy,
        dispatch = instance.dispatch,
        data = instance.data,
        manualPagination = instance.manualPagination;
    ensurePluginOrder(plugins, ['useGlobalFilter', 'useFilters', 'useGroupBy', 'useSortBy', 'useExpanded'], 'usePagination');
    var getAutoResetPage = useGetLatest(autoResetPage);
    useMountedLayoutEffect(function () {
      if (getAutoResetPage()) {
        dispatch({
          type: actions.resetPage
        });
      }
    }, [dispatch, manualPagination ? null : data, globalFilter, filters, groupBy, sortBy]);
    var pageCount = manualPagination ? userPageCount : Math.ceil(rows.length / pageSize);
    var pageOptions = React.useMemo(function () {
      return pageCount > 0 ? [].concat(new Array(pageCount)).fill(null).map(function (d, i) {
        return i;
      }) : [];
    }, [pageCount]);
    var page = React.useMemo(function () {
      var page;

      if (manualPagination) {
        page = rows;
      } else {
        var pageStart = pageSize * pageIndex;
        var pageEnd = pageStart + pageSize;
        page = rows.slice(pageStart, pageEnd);
      }

      if (paginateExpandedRows) {
        return page;
      }

      return expandRows(page, {
        manualExpandedKey: manualExpandedKey,
        expanded: expanded,
        expandSubRows: expandSubRows
      });
    }, [expandSubRows, expanded, manualExpandedKey, manualPagination, pageIndex, pageSize, paginateExpandedRows, rows]);
    var canPreviousPage = pageIndex > 0;
    var canNextPage = pageCount === -1 ? page.length >= pageSize : pageIndex < pageCount - 1;
    var gotoPage = React.useCallback(function (pageIndex) {
      dispatch({
        type: actions.gotoPage,
        pageIndex: pageIndex
      });
    }, [dispatch]);
    var previousPage = React.useCallback(function () {
      return gotoPage(function (old) {
        return old - 1;
      });
    }, [gotoPage]);
    var nextPage = React.useCallback(function () {
      return gotoPage(function (old) {
        return old + 1;
      });
    }, [gotoPage]);
    var setPageSize = React.useCallback(function (pageSize) {
      dispatch({
        type: actions.setPageSize,
        pageSize: pageSize
      });
    }, [dispatch]);
    Object.assign(instance, {
      pageOptions: pageOptions,
      pageCount: pageCount,
      page: page,
      canPreviousPage: canPreviousPage,
      canNextPage: canNextPage,
      gotoPage: gotoPage,
      previousPage: previousPage,
      nextPage: nextPage,
      setPageSize: setPageSize
    });
  }

  actions.resetPivot = 'resetPivot';
  actions.togglePivot = 'togglePivot';
  var _UNSTABLE_usePivotColumns = function _UNSTABLE_usePivotColumns(hooks) {
    hooks.getPivotToggleProps = [defaultGetPivotToggleProps];
    hooks.stateReducers.push(reducer$7);
    hooks.useInstanceAfterData.push(useInstanceAfterData);
    hooks.allColumns.push(allColumns);
    hooks.accessValue.push(accessValue);
    hooks.materializedColumns.push(materializedColumns);
    hooks.materializedColumnsDeps.push(materializedColumnsDeps);
    hooks.visibleColumns.push(visibleColumns$1);
    hooks.visibleColumnsDeps.push(visibleColumnsDeps);
    hooks.useInstance.push(useInstance$7);
    hooks.prepareRow.push(prepareRow$2);
  };
  _UNSTABLE_usePivotColumns.pluginName = 'usePivotColumns';
  var defaultPivotColumns = [];

  var defaultGetPivotToggleProps = function defaultGetPivotToggleProps(props, _ref) {
    var header = _ref.header;
    return [props, {
      onClick: header.canPivot ? function (e) {
        e.persist();
        header.togglePivot();
      } : undefined,
      style: {
        cursor: header.canPivot ? 'pointer' : undefined
      },
      title: 'Toggle Pivot'
    }];
  }; // Reducer


  function reducer$7(state, action, previousState, instance) {
    if (action.type === actions.init) {
      return _extends({
        pivotColumns: defaultPivotColumns
      }, state);
    }

    if (action.type === actions.resetPivot) {
      return _extends({}, state, {
        pivotColumns: instance.initialState.pivotColumns || defaultPivotColumns
      });
    }

    if (action.type === actions.togglePivot) {
      var columnId = action.columnId,
          setPivot = action.value;
      var resolvedPivot = typeof setPivot !== 'undefined' ? setPivot : !state.pivotColumns.includes(columnId);

      if (resolvedPivot) {
        return _extends({}, state, {
          pivotColumns: [].concat(state.pivotColumns, [columnId])
        });
      }

      return _extends({}, state, {
        pivotColumns: state.pivotColumns.filter(function (d) {
          return d !== columnId;
        })
      });
    }
  }

  function useInstanceAfterData(instance) {
    instance.allColumns.forEach(function (column) {
      column.isPivotSource = instance.state.pivotColumns.includes(column.id);
    });
  }

  function allColumns(columns, _ref2) {
    var instance = _ref2.instance;
    columns.forEach(function (column) {
      column.isPivotSource = instance.state.pivotColumns.includes(column.id);
      column.uniqueValues = new Set();
    });
    return columns;
  }

  function accessValue(value, _ref3) {
    var column = _ref3.column;

    if (column.uniqueValues && typeof value !== 'undefined') {
      column.uniqueValues.add(value);
    }

    return value;
  }

  function materializedColumns(materialized, _ref4) {
    var instance = _ref4.instance;
    var allColumns = instance.allColumns,
        state = instance.state;

    if (!state.pivotColumns.length || !state.groupBy || !state.groupBy.length) {
      return materialized;
    }

    var pivotColumns = state.pivotColumns.map(function (id) {
      return allColumns.find(function (d) {
        return d.id === id;
      });
    }).filter(Boolean);
    var sourceColumns = allColumns.filter(function (d) {
      return !d.isPivotSource && !state.groupBy.includes(d.id) && !state.pivotColumns.includes(d.id);
    });

    var buildPivotColumns = function buildPivotColumns(depth, parent, pivotFilters) {
      if (depth === void 0) {
        depth = 0;
      }

      if (pivotFilters === void 0) {
        pivotFilters = [];
      }

      var pivotColumn = pivotColumns[depth];

      if (!pivotColumn) {
        return sourceColumns.map(function (sourceColumn) {
          // TODO: We could offer support here for renesting pivoted
          // columns inside copies of their header groups. For now,
          // that seems like it would be (1) overkill on nesting, considering
          // you already get nesting for every pivot level and (2)
          // really hard. :)
          return _extends({}, sourceColumn, {
            canPivot: false,
            isPivoted: true,
            parent: parent,
            depth: depth,
            id: "" + (parent ? parent.id + "." + sourceColumn.id : sourceColumn.id),
            accessor: function accessor(originalRow, i, row) {
              if (pivotFilters.every(function (filter) {
                return filter(row);
              })) {
                return row.values[sourceColumn.id];
              }
            }
          });
        });
      }

      var uniqueValues = Array.from(pivotColumn.uniqueValues).sort();
      return uniqueValues.map(function (uniqueValue) {
        var columnGroup = _extends({}, pivotColumn, {
          Header: pivotColumn.PivotHeader || typeof pivotColumn.header === 'string' ? pivotColumn.Header + ": " + uniqueValue : uniqueValue,
          isPivotGroup: true,
          parent: parent,
          depth: depth,
          id: parent ? parent.id + "." + pivotColumn.id + "." + uniqueValue : pivotColumn.id + "." + uniqueValue,
          pivotValue: uniqueValue
        });

        columnGroup.columns = buildPivotColumns(depth + 1, columnGroup, [].concat(pivotFilters, [function (row) {
          return row.values[pivotColumn.id] === uniqueValue;
        }]));
        return columnGroup;
      });
    };

    var newMaterialized = flattenColumns(buildPivotColumns());
    return [].concat(materialized, newMaterialized);
  }

  function materializedColumnsDeps(deps, _ref5) {
    var _ref5$instance$state = _ref5.instance.state,
        pivotColumns = _ref5$instance$state.pivotColumns,
        groupBy = _ref5$instance$state.groupBy;
    return [].concat(deps, [pivotColumns, groupBy]);
  }

  function visibleColumns$1(visibleColumns, _ref6) {
    var state = _ref6.instance.state;
    visibleColumns = visibleColumns.filter(function (d) {
      return !d.isPivotSource;
    });

    if (state.pivotColumns.length && state.groupBy && state.groupBy.length) {
      visibleColumns = visibleColumns.filter(function (column) {
        return column.isGrouped || column.isPivoted;
      });
    }

    return visibleColumns;
  }

  function visibleColumnsDeps(deps, _ref7) {
    var instance = _ref7.instance;
    return [].concat(deps, [instance.state.pivotColumns, instance.state.groupBy]);
  }

  function useInstance$7(instance) {
    var columns = instance.columns,
        allColumns = instance.allColumns,
        flatHeaders = instance.flatHeaders,
        getHooks = instance.getHooks,
        plugins = instance.plugins,
        dispatch = instance.dispatch,
        _instance$autoResetPi = instance.autoResetPivot,
        autoResetPivot = _instance$autoResetPi === void 0 ? true : _instance$autoResetPi,
        manaulPivot = instance.manaulPivot,
        disablePivot = instance.disablePivot,
        defaultCanPivot = instance.defaultCanPivot;
    ensurePluginOrder(plugins, ['useGroupBy'], 'usePivotColumns');
    var getInstance = useGetLatest(instance);
    allColumns.forEach(function (column) {
      var accessor = column.accessor,
          defaultColumnPivot = column.defaultPivot,
          columnDisablePivot = column.disablePivot;
      column.canPivot = accessor ? getFirstDefined(column.canPivot, columnDisablePivot === true ? false : undefined, disablePivot === true ? false : undefined, true) : getFirstDefined(column.canPivot, defaultColumnPivot, defaultCanPivot, false);

      if (column.canPivot) {
        column.togglePivot = function () {
          return instance.togglePivot(column.id);
        };
      }

      column.Aggregated = column.Aggregated || column.Cell;
    });

    var togglePivot = function togglePivot(columnId, value) {
      dispatch({
        type: actions.togglePivot,
        columnId: columnId,
        value: value
      });
    };

    flatHeaders.forEach(function (header) {
      header.getPivotToggleProps = makePropGetter(getHooks().getPivotToggleProps, {
        instance: getInstance(),
        header: header
      });
    });
    var getAutoResetPivot = useGetLatest(autoResetPivot);
    useMountedLayoutEffect(function () {
      if (getAutoResetPivot()) {
        dispatch({
          type: actions.resetPivot
        });
      }
    }, [dispatch, manaulPivot ? null : columns]);
    Object.assign(instance, {
      togglePivot: togglePivot
    });
  }

  function prepareRow$2(row) {
    row.allCells.forEach(function (cell) {
      // Grouped cells are in the pivotColumns and the pivot cell for the row
      cell.isPivoted = cell.column.isPivoted;
    });
  }

  var pluginName$1 = 'useRowSelect'; // Actions

  actions.resetSelectedRows = 'resetSelectedRows';
  actions.toggleAllRowsSelected = 'toggleAllRowsSelected';
  actions.toggleRowSelected = 'toggleRowSelected';
  actions.toggleAllPageRowsSelected = 'toggleAllPageRowsSelected';
  var useRowSelect = function useRowSelect(hooks) {
    hooks.getToggleRowSelectedProps = [defaultGetToggleRowSelectedProps];
    hooks.getToggleAllRowsSelectedProps = [defaultGetToggleAllRowsSelectedProps];
    hooks.getToggleAllPageRowsSelectedProps = [defaultGetToggleAllPageRowsSelectedProps];
    hooks.stateReducers.push(reducer$8);
    hooks.useInstance.push(useInstance$8);
    hooks.prepareRow.push(prepareRow$3);
  };
  useRowSelect.pluginName = pluginName$1;

  var defaultGetToggleRowSelectedProps = function defaultGetToggleRowSelectedProps(props, _ref) {
    var instance = _ref.instance,
        row = _ref.row;
    var _instance$manualRowSe = instance.manualRowSelectedKey,
        manualRowSelectedKey = _instance$manualRowSe === void 0 ? 'isSelected' : _instance$manualRowSe;
    var checked = false;

    if (row.original && row.original[manualRowSelectedKey]) {
      checked = true;
    } else {
      checked = row.isSelected;
    }

    return [props, {
      onChange: function onChange(e) {
        row.toggleRowSelected(e.target.checked);
      },
      style: {
        cursor: 'pointer'
      },
      checked: checked,
      title: 'Toggle Row Selected',
      indeterminate: row.isSomeSelected
    }];
  };

  var defaultGetToggleAllRowsSelectedProps = function defaultGetToggleAllRowsSelectedProps(props, _ref2) {
    var instance = _ref2.instance;
    return [props, {
      onChange: function onChange(e) {
        instance.toggleAllRowsSelected(e.target.checked);
      },
      style: {
        cursor: 'pointer'
      },
      checked: instance.isAllRowsSelected,
      title: 'Toggle All Rows Selected',
      indeterminate: Boolean(!instance.isAllRowsSelected && Object.keys(instance.state.selectedRowIds).length)
    }];
  };

  var defaultGetToggleAllPageRowsSelectedProps = function defaultGetToggleAllPageRowsSelectedProps(props, _ref3) {
    var instance = _ref3.instance;
    return [props, {
      onChange: function onChange(e) {
        instance.toggleAllPageRowsSelected(e.target.checked);
      },
      style: {
        cursor: 'pointer'
      },
      checked: instance.isAllPageRowsSelected,
      title: 'Toggle All Current Page Rows Selected',
      indeterminate: Boolean(!instance.isAllPageRowsSelected && instance.page.some(function (_ref4) {
        var id = _ref4.id;
        return instance.state.selectedRowIds[id];
      }))
    }];
  }; // eslint-disable-next-line max-params


  function reducer$8(state, action, previousState, instance) {
    if (action.type === actions.init) {
      return _extends({
        selectedRowIds: {}
      }, state);
    }

    if (action.type === actions.resetSelectedRows) {
      return _extends({}, state, {
        selectedRowIds: instance.initialState.selectedRowIds || {}
      });
    }

    if (action.type === actions.toggleAllRowsSelected) {
      var setSelected = action.value;
      var isAllRowsSelected = instance.isAllRowsSelected,
          rowsById = instance.rowsById,
          _instance$nonGroupedR = instance.nonGroupedRowsById,
          nonGroupedRowsById = _instance$nonGroupedR === void 0 ? rowsById : _instance$nonGroupedR;
      var selectAll = typeof setSelected !== 'undefined' ? setSelected : !isAllRowsSelected; // Only remove/add the rows that are visible on the screen
      //  Leave all the other rows that are selected alone.

      var selectedRowIds = Object.assign({}, state.selectedRowIds);

      if (selectAll) {
        Object.keys(nonGroupedRowsById).forEach(function (rowId) {
          selectedRowIds[rowId] = true;
        });
      } else {
        Object.keys(nonGroupedRowsById).forEach(function (rowId) {
          delete selectedRowIds[rowId];
        });
      }

      return _extends({}, state, {
        selectedRowIds: selectedRowIds
      });
    }

    if (action.type === actions.toggleRowSelected) {
      var id = action.id,
          _setSelected = action.value;
      var _rowsById = instance.rowsById,
          _instance$selectSubRo = instance.selectSubRows,
          selectSubRows = _instance$selectSubRo === void 0 ? true : _instance$selectSubRo,
          getSubRows = instance.getSubRows;
      var isSelected = state.selectedRowIds[id];
      var shouldExist = typeof _setSelected !== 'undefined' ? _setSelected : !isSelected;

      if (isSelected === shouldExist) {
        return state;
      }

      var newSelectedRowIds = _extends({}, state.selectedRowIds);

      var handleRowById = function handleRowById(id) {
        var row = _rowsById[id];

        if (row) {
          if (!row.isGrouped) {
            if (shouldExist) {
              newSelectedRowIds[id] = true;
            } else {
              delete newSelectedRowIds[id];
            }
          }

          if (selectSubRows && getSubRows(row)) {
            return getSubRows(row).forEach(function (row) {
              return handleRowById(row.id);
            });
          }
        }
      };

      handleRowById(id);
      return _extends({}, state, {
        selectedRowIds: newSelectedRowIds
      });
    }

    if (action.type === actions.toggleAllPageRowsSelected) {
      var _setSelected2 = action.value;

      var page = instance.page,
          _rowsById2 = instance.rowsById,
          _instance$selectSubRo2 = instance.selectSubRows,
          _selectSubRows = _instance$selectSubRo2 === void 0 ? true : _instance$selectSubRo2,
          isAllPageRowsSelected = instance.isAllPageRowsSelected,
          _getSubRows = instance.getSubRows;

      var _selectAll = typeof _setSelected2 !== 'undefined' ? _setSelected2 : !isAllPageRowsSelected;

      var _newSelectedRowIds = _extends({}, state.selectedRowIds);

      var _handleRowById = function _handleRowById(id) {
        var row = _rowsById2[id];

        if (!row.isGrouped) {
          if (_selectAll) {
            _newSelectedRowIds[id] = true;
          } else {
            delete _newSelectedRowIds[id];
          }
        }

        if (_selectSubRows && _getSubRows(row)) {
          return _getSubRows(row).forEach(function (row) {
            return _handleRowById(row.id);
          });
        }
      };

      page.forEach(function (row) {
        return _handleRowById(row.id);
      });
      return _extends({}, state, {
        selectedRowIds: _newSelectedRowIds
      });
    }

    return state;
  }

  function useInstance$8(instance) {
    var data = instance.data,
        rows = instance.rows,
        getHooks = instance.getHooks,
        plugins = instance.plugins,
        rowsById = instance.rowsById,
        _instance$nonGroupedR2 = instance.nonGroupedRowsById,
        nonGroupedRowsById = _instance$nonGroupedR2 === void 0 ? rowsById : _instance$nonGroupedR2,
        _instance$autoResetSe = instance.autoResetSelectedRows,
        autoResetSelectedRows = _instance$autoResetSe === void 0 ? true : _instance$autoResetSe,
        selectedRowIds = instance.state.selectedRowIds,
        _instance$selectSubRo3 = instance.selectSubRows,
        selectSubRows = _instance$selectSubRo3 === void 0 ? true : _instance$selectSubRo3,
        dispatch = instance.dispatch,
        page = instance.page,
        getSubRows = instance.getSubRows;
    ensurePluginOrder(plugins, ['useFilters', 'useGroupBy', 'useSortBy', 'useExpanded', 'usePagination'], 'useRowSelect');
    var selectedFlatRows = React.useMemo(function () {
      var selectedFlatRows = [];
      rows.forEach(function (row) {
        var isSelected = selectSubRows ? getRowIsSelected(row, selectedRowIds, getSubRows) : !!selectedRowIds[row.id];
        row.isSelected = !!isSelected;
        row.isSomeSelected = isSelected === null;

        if (isSelected) {
          selectedFlatRows.push(row);
        }
      });
      return selectedFlatRows;
    }, [rows, selectSubRows, selectedRowIds, getSubRows]);
    var isAllRowsSelected = Boolean(Object.keys(nonGroupedRowsById).length && Object.keys(selectedRowIds).length);
    var isAllPageRowsSelected = isAllRowsSelected;

    if (isAllRowsSelected) {
      if (Object.keys(nonGroupedRowsById).some(function (id) {
        return !selectedRowIds[id];
      })) {
        isAllRowsSelected = false;
      }
    }

    if (!isAllRowsSelected) {
      if (page && page.length && page.some(function (_ref5) {
        var id = _ref5.id;
        return !selectedRowIds[id];
      })) {
        isAllPageRowsSelected = false;
      }
    }

    var getAutoResetSelectedRows = useGetLatest(autoResetSelectedRows);
    useMountedLayoutEffect(function () {
      if (getAutoResetSelectedRows()) {
        dispatch({
          type: actions.resetSelectedRows
        });
      }
    }, [dispatch, data]);
    var toggleAllRowsSelected = React.useCallback(function (value) {
      return dispatch({
        type: actions.toggleAllRowsSelected,
        value: value
      });
    }, [dispatch]);
    var toggleAllPageRowsSelected = React.useCallback(function (value) {
      return dispatch({
        type: actions.toggleAllPageRowsSelected,
        value: value
      });
    }, [dispatch]);
    var toggleRowSelected = React.useCallback(function (id, value) {
      return dispatch({
        type: actions.toggleRowSelected,
        id: id,
        value: value
      });
    }, [dispatch]);
    var getInstance = useGetLatest(instance);
    var getToggleAllRowsSelectedProps = makePropGetter(getHooks().getToggleAllRowsSelectedProps, {
      instance: getInstance()
    });
    var getToggleAllPageRowsSelectedProps = makePropGetter(getHooks().getToggleAllPageRowsSelectedProps, {
      instance: getInstance()
    });
    Object.assign(instance, {
      selectedFlatRows: selectedFlatRows,
      isAllRowsSelected: isAllRowsSelected,
      isAllPageRowsSelected: isAllPageRowsSelected,
      toggleRowSelected: toggleRowSelected,
      toggleAllRowsSelected: toggleAllRowsSelected,
      getToggleAllRowsSelectedProps: getToggleAllRowsSelectedProps,
      getToggleAllPageRowsSelectedProps: getToggleAllPageRowsSelectedProps,
      toggleAllPageRowsSelected: toggleAllPageRowsSelected
    });
  }

  function prepareRow$3(row, _ref6) {
    var instance = _ref6.instance;

    row.toggleRowSelected = function (set) {
      return instance.toggleRowSelected(row.id, set);
    };

    row.getToggleRowSelectedProps = makePropGetter(instance.getHooks().getToggleRowSelectedProps, {
      instance: instance,
      row: row
    });
  }

  function getRowIsSelected(row, selectedRowIds, getSubRows) {
    if (selectedRowIds[row.id]) {
      return true;
    }

    var subRows = getSubRows(row);

    if (subRows && subRows.length) {
      var allChildrenSelected = true;
      var someSelected = false;
      subRows.forEach(function (subRow) {
        // Bail out early if we know both of these
        if (someSelected && !allChildrenSelected) {
          return;
        }

        if (getRowIsSelected(subRow, selectedRowIds, getSubRows)) {
          someSelected = true;
        } else {
          allChildrenSelected = false;
        }
      });
      return allChildrenSelected ? true : someSelected ? null : false;
    }

    return false;
  }

  var defaultInitialRowStateAccessor = function defaultInitialRowStateAccessor(row) {
    return {};
  };

  var defaultInitialCellStateAccessor = function defaultInitialCellStateAccessor(cell) {
    return {};
  }; // Actions


  actions.setRowState = 'setRowState';
  actions.setCellState = 'setCellState';
  actions.resetRowState = 'resetRowState';
  var useRowState = function useRowState(hooks) {
    hooks.stateReducers.push(reducer$9);
    hooks.useInstance.push(useInstance$9);
    hooks.prepareRow.push(prepareRow$4);
  };
  useRowState.pluginName = 'useRowState';

  function reducer$9(state, action, previousState, instance) {
    var _instance$initialRowS = instance.initialRowStateAccessor,
        initialRowStateAccessor = _instance$initialRowS === void 0 ? defaultInitialRowStateAccessor : _instance$initialRowS,
        _instance$initialCell = instance.initialCellStateAccessor,
        initialCellStateAccessor = _instance$initialCell === void 0 ? defaultInitialCellStateAccessor : _instance$initialCell,
        rowsById = instance.rowsById;

    if (action.type === actions.init) {
      return _extends({
        rowState: {}
      }, state);
    }

    if (action.type === actions.resetRowState) {
      return _extends({}, state, {
        rowState: instance.initialState.rowState || {}
      });
    }

    if (action.type === actions.setRowState) {
      var _extends2;

      var rowId = action.rowId,
          value = action.value;
      var oldRowState = typeof state.rowState[rowId] !== 'undefined' ? state.rowState[rowId] : initialRowStateAccessor(rowsById[rowId]);
      return _extends({}, state, {
        rowState: _extends({}, state.rowState, (_extends2 = {}, _extends2[rowId] = functionalUpdate(value, oldRowState), _extends2))
      });
    }

    if (action.type === actions.setCellState) {
      var _oldRowState$cellStat, _rowsById$_rowId, _rowsById$_rowId$cell, _extends3, _extends4;

      var _rowId = action.rowId,
          columnId = action.columnId,
          _value = action.value;

      var _oldRowState = typeof state.rowState[_rowId] !== 'undefined' ? state.rowState[_rowId] : initialRowStateAccessor(rowsById[_rowId]);

      var oldCellState = typeof (_oldRowState == null ? void 0 : (_oldRowState$cellStat = _oldRowState.cellState) == null ? void 0 : _oldRowState$cellStat[columnId]) !== 'undefined' ? _oldRowState.cellState[columnId] : initialCellStateAccessor((_rowsById$_rowId = rowsById[_rowId]) == null ? void 0 : (_rowsById$_rowId$cell = _rowsById$_rowId.cells) == null ? void 0 : _rowsById$_rowId$cell.find(function (cell) {
        return cell.column.id === columnId;
      }));
      return _extends({}, state, {
        rowState: _extends({}, state.rowState, (_extends4 = {}, _extends4[_rowId] = _extends({}, _oldRowState, {
          cellState: _extends({}, _oldRowState.cellState || {}, (_extends3 = {}, _extends3[columnId] = functionalUpdate(_value, oldCellState), _extends3))
        }), _extends4))
      });
    }
  }

  function useInstance$9(instance) {
    var _instance$autoResetRo = instance.autoResetRowState,
        autoResetRowState = _instance$autoResetRo === void 0 ? true : _instance$autoResetRo,
        data = instance.data,
        dispatch = instance.dispatch;
    var setRowState = React.useCallback(function (rowId, value) {
      return dispatch({
        type: actions.setRowState,
        rowId: rowId,
        value: value
      });
    }, [dispatch]);
    var setCellState = React.useCallback(function (rowId, columnId, value) {
      return dispatch({
        type: actions.setCellState,
        rowId: rowId,
        columnId: columnId,
        value: value
      });
    }, [dispatch]);
    var getAutoResetRowState = useGetLatest(autoResetRowState);
    useMountedLayoutEffect(function () {
      if (getAutoResetRowState()) {
        dispatch({
          type: actions.resetRowState
        });
      }
    }, [data]);
    Object.assign(instance, {
      setRowState: setRowState,
      setCellState: setCellState
    });
  }

  function prepareRow$4(row, _ref) {
    var instance = _ref.instance;
    var _instance$initialRowS2 = instance.initialRowStateAccessor,
        initialRowStateAccessor = _instance$initialRowS2 === void 0 ? defaultInitialRowStateAccessor : _instance$initialRowS2,
        _instance$initialCell2 = instance.initialCellStateAccessor,
        initialCellStateAccessor = _instance$initialCell2 === void 0 ? defaultInitialCellStateAccessor : _instance$initialCell2,
        rowState = instance.state.rowState;

    if (row) {
      row.state = typeof rowState[row.id] !== 'undefined' ? rowState[row.id] : initialRowStateAccessor(row);

      row.setState = function (updater) {
        return instance.setRowState(row.id, updater);
      };

      row.cells.forEach(function (cell) {
        if (!row.state.cellState) {
          row.state.cellState = {};
        }

        cell.state = typeof row.state.cellState[cell.column.id] !== 'undefined' ? row.state.cellState[cell.column.id] : initialCellStateAccessor(cell);

        cell.setState = function (updater) {
          return instance.setCellState(row.id, cell.column.id, updater);
        };
      });
    }
  }

  actions.resetColumnOrder = 'resetColumnOrder';
  actions.setColumnOrder = 'setColumnOrder';
  var useColumnOrder = function useColumnOrder(hooks) {
    hooks.stateReducers.push(reducer$a);
    hooks.visibleColumnsDeps.push(function (deps, _ref) {
      var instance = _ref.instance;
      return [].concat(deps, [instance.state.columnOrder]);
    });
    hooks.visibleColumns.push(visibleColumns$2);
    hooks.useInstance.push(useInstance$a);
  };
  useColumnOrder.pluginName = 'useColumnOrder';

  function reducer$a(state, action, previousState, instance) {
    if (action.type === actions.init) {
      return _extends({
        columnOrder: []
      }, state);
    }

    if (action.type === actions.resetColumnOrder) {
      return _extends({}, state, {
        columnOrder: instance.initialState.columnOrder || []
      });
    }

    if (action.type === actions.setColumnOrder) {
      return _extends({}, state, {
        columnOrder: functionalUpdate(action.columnOrder, state.columnOrder)
      });
    }
  }

  function visibleColumns$2(columns, _ref2) {
    var columnOrder = _ref2.instance.state.columnOrder;

    // If there is no order, return the normal columns
    if (!columnOrder || !columnOrder.length) {
      return columns;
    }

    var columnOrderCopy = [].concat(columnOrder); // If there is an order, make a copy of the columns

    var columnsCopy = [].concat(columns); // And make a new ordered array of the columns

    var columnsInOrder = []; // Loop over the columns and place them in order into the new array

    var _loop = function _loop() {
      var targetColumnId = columnOrderCopy.shift();
      var foundIndex = columnsCopy.findIndex(function (d) {
        return d.id === targetColumnId;
      });

      if (foundIndex > -1) {
        columnsInOrder.push(columnsCopy.splice(foundIndex, 1)[0]);
      }
    };

    while (columnsCopy.length && columnOrderCopy.length) {
      _loop();
    } // If there are any columns left, add them to the end


    return [].concat(columnsInOrder, columnsCopy);
  }

  function useInstance$a(instance) {
    var dispatch = instance.dispatch;
    instance.setColumnOrder = React.useCallback(function (columnOrder) {
      return dispatch({
        type: actions.setColumnOrder,
        columnOrder: columnOrder
      });
    }, [dispatch]);
  }

  defaultColumn.canResize = true; // Actions

  actions.columnStartResizing = 'columnStartResizing';
  actions.columnResizing = 'columnResizing';
  actions.columnDoneResizing = 'columnDoneResizing';
  actions.resetResize = 'resetResize';
  var useResizeColumns = function useResizeColumns(hooks) {
    hooks.getResizerProps = [defaultGetResizerProps];
    hooks.getHeaderProps.push({
      style: {
        position: 'relative'
      }
    });
    hooks.stateReducers.push(reducer$b);
    hooks.useInstance.push(useInstance$b);
    hooks.useInstanceBeforeDimensions.push(useInstanceBeforeDimensions$1);
  };

  var defaultGetResizerProps = function defaultGetResizerProps(props, _ref) {
    var instance = _ref.instance,
        header = _ref.header;
    var dispatch = instance.dispatch;

    var onResizeStart = function onResizeStart(e, header) {
      var isTouchEvent = false;

      if (e.type === 'touchstart') {
        // lets not respond to multiple touches (e.g. 2 or 3 fingers)
        if (e.touches && e.touches.length > 1) {
          return;
        }

        isTouchEvent = true;
      }

      var headersToResize = getLeafHeaders(header);
      var headerIdWidths = headersToResize.map(function (d) {
        return [d.id, d.totalWidth];
      });
      var clientX = isTouchEvent ? Math.round(e.touches[0].clientX) : e.clientX;
      var raf;
      var mostRecentClientX;

      var dispatchEnd = function dispatchEnd() {
        window.cancelAnimationFrame(raf);
        raf = null;
        dispatch({
          type: actions.columnDoneResizing
        });
      };

      var dispatchMove = function dispatchMove() {
        window.cancelAnimationFrame(raf);
        raf = null;
        dispatch({
          type: actions.columnResizing,
          clientX: mostRecentClientX
        });
      };

      var scheduleDispatchMoveOnNextAnimationFrame = function scheduleDispatchMoveOnNextAnimationFrame(clientXPos) {
        mostRecentClientX = clientXPos;

        if (!raf) {
          raf = window.requestAnimationFrame(dispatchMove);
        }
      };

      var handlersAndEvents = {
        mouse: {
          moveEvent: 'mousemove',
          moveHandler: function moveHandler(e) {
            return scheduleDispatchMoveOnNextAnimationFrame(e.clientX);
          },
          upEvent: 'mouseup',
          upHandler: function upHandler(e) {
            document.removeEventListener('mousemove', handlersAndEvents.mouse.moveHandler);
            document.removeEventListener('mouseup', handlersAndEvents.mouse.upHandler);
            dispatchEnd();
          }
        },
        touch: {
          moveEvent: 'touchmove',
          moveHandler: function moveHandler(e) {
            if (e.cancelable) {
              e.preventDefault();
              e.stopPropagation();
            }

            scheduleDispatchMoveOnNextAnimationFrame(e.touches[0].clientX);
            return false;
          },
          upEvent: 'touchend',
          upHandler: function upHandler(e) {
            document.removeEventListener(handlersAndEvents.touch.moveEvent, handlersAndEvents.touch.moveHandler);
            document.removeEventListener(handlersAndEvents.touch.upEvent, handlersAndEvents.touch.moveHandler);
            dispatchEnd();
          }
        }
      };
      var events = isTouchEvent ? handlersAndEvents.touch : handlersAndEvents.mouse;
      var passiveIfSupported = passiveEventSupported() ? {
        passive: false
      } : false;
      document.addEventListener(events.moveEvent, events.moveHandler, passiveIfSupported);
      document.addEventListener(events.upEvent, events.upHandler, passiveIfSupported);
      dispatch({
        type: actions.columnStartResizing,
        columnId: header.id,
        columnWidth: header.totalWidth,
        headerIdWidths: headerIdWidths,
        clientX: clientX
      });
    };

    return [props, {
      onMouseDown: function onMouseDown(e) {
        return e.persist() || onResizeStart(e, header);
      },
      onTouchStart: function onTouchStart(e) {
        return e.persist() || onResizeStart(e, header);
      },
      style: {
        cursor: 'col-resize'
      },
      draggable: false,
      role: 'separator'
    }];
  };

  useResizeColumns.pluginName = 'useResizeColumns';

  function reducer$b(state, action) {
    if (action.type === actions.init) {
      return _extends({
        columnResizing: {
          columnWidths: {}
        }
      }, state);
    }

    if (action.type === actions.resetResize) {
      return _extends({}, state, {
        columnResizing: {
          columnWidths: {}
        }
      });
    }

    if (action.type === actions.columnStartResizing) {
      var clientX = action.clientX,
          columnId = action.columnId,
          columnWidth = action.columnWidth,
          headerIdWidths = action.headerIdWidths;
      return _extends({}, state, {
        columnResizing: _extends({}, state.columnResizing, {
          startX: clientX,
          headerIdWidths: headerIdWidths,
          columnWidth: columnWidth,
          isResizingColumn: columnId
        })
      });
    }

    if (action.type === actions.columnResizing) {
      var _clientX = action.clientX;

      var _state$columnResizing = state.columnResizing,
          startX = _state$columnResizing.startX,
          _columnWidth = _state$columnResizing.columnWidth,
          _state$columnResizing2 = _state$columnResizing.headerIdWidths,
          _headerIdWidths = _state$columnResizing2 === void 0 ? [] : _state$columnResizing2;

      var deltaX = _clientX - startX;
      var percentageDeltaX = deltaX / _columnWidth;
      var newColumnWidths = {};

      _headerIdWidths.forEach(function (_ref2) {
        var headerId = _ref2[0],
            headerWidth = _ref2[1];
        newColumnWidths[headerId] = Math.max(headerWidth + headerWidth * percentageDeltaX, 0);
      });

      return _extends({}, state, {
        columnResizing: _extends({}, state.columnResizing, {
          columnWidths: _extends({}, state.columnResizing.columnWidths, {}, newColumnWidths)
        })
      });
    }

    if (action.type === actions.columnDoneResizing) {
      return _extends({}, state, {
        columnResizing: _extends({}, state.columnResizing, {
          startX: null,
          isResizingColumn: null
        })
      });
    }
  }

  var useInstanceBeforeDimensions$1 = function useInstanceBeforeDimensions(instance) {
    var flatHeaders = instance.flatHeaders,
        disableResizing = instance.disableResizing,
        getHooks = instance.getHooks,
        columnResizing = instance.state.columnResizing;
    var getInstance = useGetLatest(instance);
    flatHeaders.forEach(function (header) {
      var canResize = getFirstDefined(header.disableResizing === true ? false : undefined, disableResizing === true ? false : undefined, true);
      header.canResize = canResize;
      header.width = columnResizing.columnWidths[header.id] || header.originalWidth || header.width;
      header.isResizing = columnResizing.isResizingColumn === header.id;

      if (canResize) {
        header.getResizerProps = makePropGetter(getHooks().getResizerProps, {
          instance: getInstance(),
          header: header
        });
      }
    });
  };

  function useInstance$b(instance) {
    var plugins = instance.plugins,
        dispatch = instance.dispatch,
        _instance$autoResetRe = instance.autoResetResize,
        autoResetResize = _instance$autoResetRe === void 0 ? true : _instance$autoResetRe,
        columns = instance.columns;
    ensurePluginOrder(plugins, ['useAbsoluteLayout'], 'useResizeColumns');
    var getAutoResetResize = useGetLatest(autoResetResize);
    useMountedLayoutEffect(function () {
      if (getAutoResetResize()) {
        dispatch({
          type: actions.resetResize
        });
      }
    }, [columns]);
    var resetResizing = React.useCallback(function () {
      return dispatch({
        type: actions.resetResize
      });
    }, [dispatch]);
    Object.assign(instance, {
      resetResizing: resetResizing
    });
  }

  function getLeafHeaders(header) {
    var leafHeaders = [];

    var recurseHeader = function recurseHeader(header) {
      if (header.columns && header.columns.length) {
        header.columns.map(recurseHeader);
      }

      leafHeaders.push(header);
    };

    recurseHeader(header);
    return leafHeaders;
  }

  var cellStyles = {
    position: 'absolute',
    top: 0
  };
  var useAbsoluteLayout = function useAbsoluteLayout(hooks) {
    hooks.getTableBodyProps.push(getRowStyles);
    hooks.getRowProps.push(getRowStyles);
    hooks.getHeaderGroupProps.push(getRowStyles);
    hooks.getFooterGroupProps.push(getRowStyles);
    hooks.getHeaderProps.push(function (props, _ref) {
      var column = _ref.column;
      return [props, {
        style: _extends({}, cellStyles, {
          left: column.totalLeft + "px",
          width: column.totalWidth + "px"
        })
      }];
    });
    hooks.getCellProps.push(function (props, _ref2) {
      var cell = _ref2.cell;
      return [props, {
        style: _extends({}, cellStyles, {
          left: cell.column.totalLeft + "px",
          width: cell.column.totalWidth + "px"
        })
      }];
    });
    hooks.getFooterProps.push(function (props, _ref3) {
      var column = _ref3.column;
      return [props, {
        style: _extends({}, cellStyles, {
          left: column.totalLeft + "px",
          width: column.totalWidth + "px"
        })
      }];
    });
  };
  useAbsoluteLayout.pluginName = 'useAbsoluteLayout';

  var getRowStyles = function getRowStyles(props, _ref4) {
    var instance = _ref4.instance;
    return [props, {
      style: {
        position: 'relative',
        width: instance.totalColumnsWidth + "px"
      }
    }];
  };

  var cellStyles$1 = {
    display: 'inline-block',
    boxSizing: 'border-box'
  };

  var getRowStyles$1 = function getRowStyles(props, _ref) {
    var instance = _ref.instance;
    return [props, {
      style: {
        display: 'flex',
        width: instance.totalColumnsWidth + "px"
      }
    }];
  };

  var useBlockLayout = function useBlockLayout(hooks) {
    hooks.getRowProps.push(getRowStyles$1);
    hooks.getHeaderGroupProps.push(getRowStyles$1);
    hooks.getFooterGroupProps.push(getRowStyles$1);
    hooks.getHeaderProps.push(function (props, _ref2) {
      var column = _ref2.column;
      return [props, {
        style: _extends({}, cellStyles$1, {
          width: column.totalWidth + "px"
        })
      }];
    });
    hooks.getCellProps.push(function (props, _ref3) {
      var cell = _ref3.cell;
      return [props, {
        style: _extends({}, cellStyles$1, {
          width: cell.column.totalWidth + "px"
        })
      }];
    });
    hooks.getFooterProps.push(function (props, _ref4) {
      var column = _ref4.column;
      return [props, {
        style: _extends({}, cellStyles$1, {
          width: column.totalWidth + "px"
        })
      }];
    });
  };
  useBlockLayout.pluginName = 'useBlockLayout';

  function useFlexLayout(hooks) {
    hooks.getTableProps.push(getTableProps);
    hooks.getRowProps.push(getRowStyles$2);
    hooks.getHeaderGroupProps.push(getRowStyles$2);
    hooks.getFooterGroupProps.push(getRowStyles$2);
    hooks.getHeaderProps.push(getHeaderProps);
    hooks.getCellProps.push(getCellProps);
    hooks.getFooterProps.push(getFooterProps);
  }
  useFlexLayout.pluginName = 'useFlexLayout';

  var getTableProps = function getTableProps(props, _ref) {
    var instance = _ref.instance;
    return [props, {
      style: {
        minWidth: instance.totalColumnsMinWidth + "px"
      }
    }];
  };

  var getRowStyles$2 = function getRowStyles(props, _ref2) {
    var instance = _ref2.instance;
    return [props, {
      style: {
        display: 'flex',
        flex: '1 0 auto',
        minWidth: instance.totalColumnsMinWidth + "px"
      }
    }];
  };

  var getHeaderProps = function getHeaderProps(props, _ref3) {
    var column = _ref3.column;
    return [props, {
      style: {
        boxSizing: 'border-box',
        flex: column.totalFlexWidth ? column.totalFlexWidth + " 0 auto" : undefined,
        minWidth: column.totalMinWidth + "px",
        width: column.totalWidth + "px"
      }
    }];
  };

  var getCellProps = function getCellProps(props, _ref4) {
    var cell = _ref4.cell;
    return [props, {
      style: {
        boxSizing: 'border-box',
        flex: cell.column.totalFlexWidth + " 0 auto",
        minWidth: cell.column.totalMinWidth + "px",
        width: cell.column.totalWidth + "px"
      }
    }];
  };

  var getFooterProps = function getFooterProps(props, _ref5) {
    var column = _ref5.column;
    return [props, {
      style: {
        boxSizing: 'border-box',
        flex: column.totalFlexWidth ? column.totalFlexWidth + " 0 auto" : undefined,
        minWidth: column.totalMinWidth + "px",
        width: column.totalWidth + "px"
      }
    }];
  };

  actions.columnStartResizing = 'columnStartResizing';
  actions.columnResizing = 'columnResizing';
  actions.columnDoneResizing = 'columnDoneResizing';
  actions.resetResize = 'resetResize';
  function useGridLayout(hooks) {
    hooks.stateReducers.push(reducer$c);
    hooks.getTableProps.push(getTableProps$1);
    hooks.getHeaderProps.push(getHeaderProps$1);
    hooks.getRowProps.push(getRowProps);
  }
  useGridLayout.pluginName = 'useGridLayout';

  var getTableProps$1 = function getTableProps(props, _ref) {
    var instance = _ref.instance;
    var gridTemplateColumns = instance.visibleColumns.map(function (column) {
      var _instance$state$colum;

      if (instance.state.gridLayout.columnWidths[column.id]) return instance.state.gridLayout.columnWidths[column.id] + "px"; // When resizing, lock the width of all unset columns
      // instead of using user-provided width or defaultColumn width,
      // which could potentially be 'auto' or 'fr' units that don't scale linearly

      if ((_instance$state$colum = instance.state.columnResizing) == null ? void 0 : _instance$state$colum.isResizingColumn) return instance.state.gridLayout.startWidths[column.id] + "px";
      if (typeof column.width === 'number') return column.width + "px";
      return column.width;
    });
    return [props, {
      style: {
        display: "grid",
        gridTemplateColumns: gridTemplateColumns.join(" ")
      }
    }];
  };

  var getHeaderProps$1 = function getHeaderProps(props, _ref2) {
    var column = _ref2.column;
    return [props, {
      id: "header-cell-" + column.id,
      style: {
        position: "sticky",
        //enables a scroll wrapper to be placed around the table and have sticky headers
        gridColumn: "span " + column.totalVisibleHeaderCount
      }
    }];
  };

  var getRowProps = function getRowProps(props, _ref3) {
    var row = _ref3.row;

    if (row.isExpanded) {
      return [props, {
        style: {
          gridColumn: "1 / " + (row.cells.length + 1)
        }
      }];
    }

    return [props, {}];
  };

  function reducer$c(state, action, previousState, instance) {
    if (action.type === actions.init) {
      return _extends({
        gridLayout: {
          columnWidths: {}
        }
      }, state);
    }

    if (action.type === actions.resetResize) {
      return _extends({}, state, {
        gridLayout: {
          columnWidths: {}
        }
      });
    }

    if (action.type === actions.columnStartResizing) {
      var columnId = action.columnId,
          headerIdWidths = action.headerIdWidths;
      var columnWidth = getElementWidth(columnId);

      if (columnWidth !== undefined) {
        var startWidths = instance.visibleColumns.reduce(function (acc, column) {
          var _extends2;

          return _extends({}, acc, (_extends2 = {}, _extends2[column.id] = getElementWidth(column.id), _extends2));
        }, {});
        var minWidths = instance.visibleColumns.reduce(function (acc, column) {
          var _extends3;

          return _extends({}, acc, (_extends3 = {}, _extends3[column.id] = column.minWidth, _extends3));
        }, {});
        var maxWidths = instance.visibleColumns.reduce(function (acc, column) {
          var _extends4;

          return _extends({}, acc, (_extends4 = {}, _extends4[column.id] = column.maxWidth, _extends4));
        }, {});
        var headerIdGridWidths = headerIdWidths.map(function (_ref4) {
          var headerId = _ref4[0];
          return [headerId, getElementWidth(headerId)];
        });
        return _extends({}, state, {
          gridLayout: _extends({}, state.gridLayout, {
            startWidths: startWidths,
            minWidths: minWidths,
            maxWidths: maxWidths,
            headerIdGridWidths: headerIdGridWidths,
            columnWidth: columnWidth
          })
        });
      } else {
        return state;
      }
    }

    if (action.type === actions.columnResizing) {
      var clientX = action.clientX;
      var startX = state.columnResizing.startX;

      var _state$gridLayout = state.gridLayout,
          _columnWidth = _state$gridLayout.columnWidth,
          _minWidths = _state$gridLayout.minWidths,
          _maxWidths = _state$gridLayout.maxWidths,
          _state$gridLayout$hea = _state$gridLayout.headerIdGridWidths,
          _headerIdGridWidths = _state$gridLayout$hea === void 0 ? [] : _state$gridLayout$hea;

      var deltaX = clientX - startX;
      var percentageDeltaX = deltaX / _columnWidth;
      var newColumnWidths = {};

      _headerIdGridWidths.forEach(function (_ref5) {
        var headerId = _ref5[0],
            headerWidth = _ref5[1];
        newColumnWidths[headerId] = Math.min(Math.max(_minWidths[headerId], headerWidth + headerWidth * percentageDeltaX), _maxWidths[headerId]);
      });

      return _extends({}, state, {
        gridLayout: _extends({}, state.gridLayout, {
          columnWidths: _extends({}, state.gridLayout.columnWidths, {}, newColumnWidths)
        })
      });
    }

    if (action.type === actions.columnDoneResizing) {
      return _extends({}, state, {
        gridLayout: _extends({}, state.gridLayout, {
          startWidths: {},
          minWidths: {},
          maxWidths: {}
        })
      });
    }
  }

  function getElementWidth(columnId) {
    var _document$getElementB;

    var width = (_document$getElementB = document.getElementById("header-cell-" + columnId)) == null ? void 0 : _document$getElementB.offsetWidth;

    if (width !== undefined) {
      return width;
    }
  }

  exports._UNSTABLE_usePivotColumns = _UNSTABLE_usePivotColumns;
  exports.actions = actions;
  exports.defaultColumn = defaultColumn;
  exports.defaultGroupByFn = defaultGroupByFn;
  exports.defaultOrderByFn = defaultOrderByFn;
  exports.defaultRenderer = defaultRenderer;
  exports.emptyRenderer = emptyRenderer;
  exports.ensurePluginOrder = ensurePluginOrder;
  exports.flexRender = flexRender;
  exports.functionalUpdate = functionalUpdate;
  exports.loopHooks = loopHooks;
  exports.makePropGetter = makePropGetter;
  exports.makeRenderer = makeRenderer;
  exports.reduceHooks = reduceHooks;
  exports.safeUseLayoutEffect = safeUseLayoutEffect;
  exports.useAbsoluteLayout = useAbsoluteLayout;
  exports.useAsyncDebounce = useAsyncDebounce;
  exports.useBlockLayout = useBlockLayout;
  exports.useColumnOrder = useColumnOrder;
  exports.useExpanded = useExpanded;
  exports.useFilters = useFilters;
  exports.useFlexLayout = useFlexLayout;
  exports.useGetLatest = useGetLatest;
  exports.useGlobalFilter = useGlobalFilter;
  exports.useGridLayout = useGridLayout;
  exports.useGroupBy = useGroupBy;
  exports.useMountedLayoutEffect = useMountedLayoutEffect;
  exports.usePagination = usePagination;
  exports.useResizeColumns = useResizeColumns;
  exports.useRowSelect = useRowSelect;
  exports.useRowState = useRowState;
  exports.useSortBy = useSortBy;
  exports.useTable = useTable;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=react-table.development.js.map


/***/ }),

/***/ "./node_modules/react-table/index.js":
/*!*******************************************!*\
  !*** ./node_modules/react-table/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

if (false) {} else {
  module.exports = __webpack_require__(/*! ./dist/react-table.development.js */ "./node_modules/react-table/dist/react-table.development.js")
}


/***/ }),

/***/ "./resources/js/src/System/Admin/Expenses/Expenses.module.css":
/*!********************************************************************!*\
  !*** ./resources/js/src/System/Admin/Expenses/Expenses.module.css ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_Expenses_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./Expenses.module.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/System/Admin/Expenses/Expenses.module.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_Expenses_module_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_Expenses_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/src/components/Card/Card.module.css":
/*!**********************************************************!*\
  !*** ./resources/js/src/components/Card/Card.module.css ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_Card_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./Card.module.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/components/Card/Card.module.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_Card_module_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_Card_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/src/components/Card/Quantity/Quantity.module.css":
/*!***********************************************************************!*\
  !*** ./resources/js/src/components/Card/Quantity/Quantity.module.css ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_Quantity_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./Quantity.module.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/components/Card/Quantity/Quantity.module.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_Quantity_module_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_Quantity_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/src/components/Filter/Filter.module.css":
/*!**************************************************************!*\
  !*** ./resources/js/src/components/Filter/Filter.module.css ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_Filter_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./Filter.module.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/components/Filter/Filter.module.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_Filter_module_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_Filter_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/src/components/HeaderButtonPage/HeaderButtonPage.module.css":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/components/HeaderButtonPage/HeaderButtonPage.module.css ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_HeaderButtonPage_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./HeaderButtonPage.module.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/components/HeaderButtonPage/HeaderButtonPage.module.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_HeaderButtonPage_module_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_HeaderButtonPage_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/src/components/InputMoney/InputMoney.module.css":
/*!**********************************************************************!*\
  !*** ./resources/js/src/components/InputMoney/InputMoney.module.css ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_InputMoney_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./InputMoney.module.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/components/InputMoney/InputMoney.module.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_InputMoney_module_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_InputMoney_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/src/components/Message/Message.module.css":
/*!****************************************************************!*\
  !*** ./resources/js/src/components/Message/Message.module.css ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_Message_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./Message.module.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/components/Message/Message.module.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_Message_module_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_Message_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/src/components/Pagination/Paginate.module.css":
/*!********************************************************************!*\
  !*** ./resources/js/src/components/Pagination/Paginate.module.css ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_Paginate_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./Paginate.module.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/components/Pagination/Paginate.module.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_Paginate_module_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_Paginate_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/src/components/Select/Select.module.css":
/*!**************************************************************!*\
  !*** ./resources/js/src/components/Select/Select.module.css ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_Select_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./Select.module.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/components/Select/Select.module.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_Select_module_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_Select_module_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/src/components/Spinner/Spinner.css":
/*!*********************************************************!*\
  !*** ./resources/js/src/components/Spinner/Spinner.css ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_Spinner_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./Spinner.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/components/Spinner/Spinner.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_Spinner_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_Spinner_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/src/components/Table/Table.css":
/*!*****************************************************!*\
  !*** ./resources/js/src/components/Table/Table.css ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_Table_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./Table.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/components/Table/Table.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_Table_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_Table_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/uncontrollable/lib/esm/hook.js":
/*!*****************************************************!*\
  !*** ./node_modules/uncontrollable/lib/esm/hook.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useUncontrolled),
/* harmony export */   "useUncontrolledProp": () => (/* binding */ useUncontrolledProp)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./node_modules/uncontrollable/lib/esm/utils.js");



function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




function useUncontrolledProp(propValue, defaultValue, handler) {
  var wasPropRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(propValue !== undefined);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(defaultValue),
      stateValue = _useState[0],
      setState = _useState[1];

  var isProp = propValue !== undefined;
  var wasProp = wasPropRef.current;
  wasPropRef.current = isProp;
  /**
   * If a prop switches from controlled to Uncontrolled
   * reset its value to the defaultValue
   */

  if (!isProp && wasProp && stateValue !== defaultValue) {
    setState(defaultValue);
  }

  return [isProp ? propValue : stateValue, (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function (value) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (handler) handler.apply(void 0, [value].concat(args));
    setState(value);
  }, [handler])];
}


function useUncontrolled(props, config) {
  return Object.keys(config).reduce(function (result, fieldName) {
    var _extends2;

    var _ref = result,
        defaultValue = _ref[_utils__WEBPACK_IMPORTED_MODULE_3__.defaultKey(fieldName)],
        propsValue = _ref[fieldName],
        rest = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, [_utils__WEBPACK_IMPORTED_MODULE_3__.defaultKey(fieldName), fieldName].map(_toPropertyKey));

    var handlerName = config[fieldName];

    var _useUncontrolledProp = useUncontrolledProp(propsValue, defaultValue, props[handlerName]),
        value = _useUncontrolledProp[0],
        handler = _useUncontrolledProp[1];

    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rest, (_extends2 = {}, _extends2[fieldName] = value, _extends2[handlerName] = handler, _extends2));
  }, props);
}

/***/ }),

/***/ "./node_modules/uncontrollable/lib/esm/index.js":
/*!******************************************************!*\
  !*** ./node_modules/uncontrollable/lib/esm/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uncontrollable": () => (/* reexport safe */ _uncontrollable__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "useUncontrolled": () => (/* reexport safe */ _hook__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "useUncontrolledProp": () => (/* reexport safe */ _hook__WEBPACK_IMPORTED_MODULE_0__.useUncontrolledProp)
/* harmony export */ });
/* harmony import */ var _hook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hook */ "./node_modules/uncontrollable/lib/esm/hook.js");
/* harmony import */ var _uncontrollable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uncontrollable */ "./node_modules/uncontrollable/lib/esm/uncontrollable.js");



/***/ }),

/***/ "./node_modules/uncontrollable/lib/esm/uncontrollable.js":
/*!***************************************************************!*\
  !*** ./node_modules/uncontrollable/lib/esm/uncontrollable.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ uncontrollable)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./node_modules/uncontrollable/lib/esm/utils.js");



var _jsxFileName = "/Users/jquense/src/uncontrollable/src/uncontrollable.js";




function uncontrollable(Component, controlledValues, methods) {
  if (methods === void 0) {
    methods = [];
  }

  var displayName = Component.displayName || Component.name || 'Component';
  var canAcceptRef = _utils__WEBPACK_IMPORTED_MODULE_6__.canAcceptRef(Component);
  var controlledProps = Object.keys(controlledValues);
  var PROPS_TO_OMIT = controlledProps.map(_utils__WEBPACK_IMPORTED_MODULE_6__.defaultKey);
  !(canAcceptRef || !methods.length) ?  true ? invariant__WEBPACK_IMPORTED_MODULE_5___default()(false, '[uncontrollable] stateless function components cannot pass through methods ' + 'because they have no associated instances. Check component: ' + displayName + ', ' + 'attempting to pass through methods: ' + methods.join(', ')) : 0 : void 0;

  var UncontrolledComponent =
  /*#__PURE__*/
  function (_React$Component) {
    (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(UncontrolledComponent, _React$Component);

    function UncontrolledComponent() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
      _this.handlers = Object.create(null);
      controlledProps.forEach(function (propName) {
        var handlerName = controlledValues[propName];

        var handleChange = function handleChange(value) {
          if (_this.props[handlerName]) {
            var _this$props;

            _this._notifying = true;

            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }

            (_this$props = _this.props)[handlerName].apply(_this$props, [value].concat(args));

            _this._notifying = false;
          }

          if (!_this.unmounted) _this.setState(function (_ref) {
            var _extends2;

            var values = _ref.values;
            return {
              values: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])(Object.create(null), values, (_extends2 = {}, _extends2[propName] = value, _extends2))
            };
          });
        };

        _this.handlers[handlerName] = handleChange;
      });
      if (methods.length) _this.attachRef = function (ref) {
        _this.inner = ref;
      };
      var values = Object.create(null);
      controlledProps.forEach(function (key) {
        values[key] = _this.props[_utils__WEBPACK_IMPORTED_MODULE_6__.defaultKey(key)];
      });
      _this.state = {
        values: values,
        prevProps: {}
      };
      return _this;
    }

    var _proto = UncontrolledComponent.prototype;

    _proto.shouldComponentUpdate = function shouldComponentUpdate() {
      //let setState trigger the update
      return !this._notifying;
    };

    UncontrolledComponent.getDerivedStateFromProps = function getDerivedStateFromProps(props, _ref2) {
      var values = _ref2.values,
          prevProps = _ref2.prevProps;
      var nextState = {
        values: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])(Object.create(null), values),
        prevProps: {}
      };
      controlledProps.forEach(function (key) {
        /**
         * If a prop switches from controlled to Uncontrolled
         * reset its value to the defaultValue
         */
        nextState.prevProps[key] = props[key];

        if (!_utils__WEBPACK_IMPORTED_MODULE_6__.isProp(props, key) && _utils__WEBPACK_IMPORTED_MODULE_6__.isProp(prevProps, key)) {
          nextState.values[key] = props[_utils__WEBPACK_IMPORTED_MODULE_6__.defaultKey(key)];
        }
      });
      return nextState;
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      this.unmounted = true;
    };

    _proto.render = function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          innerRef = _this$props2.innerRef,
          props = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props2, ["innerRef"]);

      PROPS_TO_OMIT.forEach(function (prop) {
        delete props[prop];
      });
      var newProps = {};
      controlledProps.forEach(function (propName) {
        var propValue = _this2.props[propName];
        newProps[propName] = propValue !== undefined ? propValue : _this2.state.values[propName];
      });
      return react__WEBPACK_IMPORTED_MODULE_3__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, newProps, this.handlers, {
        ref: innerRef || this.attachRef
      }));
    };

    return UncontrolledComponent;
  }(react__WEBPACK_IMPORTED_MODULE_3__.Component);

  (0,react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_4__.polyfill)(UncontrolledComponent);
  UncontrolledComponent.displayName = "Uncontrolled(" + displayName + ")";
  UncontrolledComponent.propTypes = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    innerRef: function innerRef() {}
  }, _utils__WEBPACK_IMPORTED_MODULE_6__.uncontrolledPropTypes(controlledValues, displayName));
  methods.forEach(function (method) {
    UncontrolledComponent.prototype[method] = function $proxiedMethod() {
      var _this$inner;

      return (_this$inner = this.inner)[method].apply(_this$inner, arguments);
    };
  });
  var WrappedComponent = UncontrolledComponent;

  if (react__WEBPACK_IMPORTED_MODULE_3__.forwardRef) {
    WrappedComponent = react__WEBPACK_IMPORTED_MODULE_3__.forwardRef(function (props, ref) {
      return react__WEBPACK_IMPORTED_MODULE_3__.createElement(UncontrolledComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
        innerRef: ref,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }));
    });
    WrappedComponent.propTypes = UncontrolledComponent.propTypes;
  }

  WrappedComponent.ControlledComponent = Component;
  /**
   * useful when wrapping a Component and you want to control
   * everything
   */

  WrappedComponent.deferControlTo = function (newComponent, additions, nextMethods) {
    if (additions === void 0) {
      additions = {};
    }

    return uncontrollable(newComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, controlledValues, additions), nextMethods);
  };

  return WrappedComponent;
}

/***/ }),

/***/ "./node_modules/uncontrollable/lib/esm/utils.js":
/*!******************************************************!*\
  !*** ./node_modules/uncontrollable/lib/esm/utils.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "canAcceptRef": () => (/* binding */ canAcceptRef),
/* harmony export */   "defaultKey": () => (/* binding */ defaultKey),
/* harmony export */   "isProp": () => (/* binding */ isProp),
/* harmony export */   "uncontrolledPropTypes": () => (/* binding */ uncontrolledPropTypes)
/* harmony export */ });
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_0__);


var noop = function noop() {};

function readOnlyPropType(handler, name) {
  return function (props, propName) {
    if (props[propName] !== undefined) {
      if (!props[handler]) {
        return new Error("You have provided a `" + propName + "` prop to `" + name + "` " + ("without an `" + handler + "` handler prop. This will render a read-only field. ") + ("If the field should be mutable use `" + defaultKey(propName) + "`. ") + ("Otherwise, set `" + handler + "`."));
      }
    }
  };
}

function uncontrolledPropTypes(controlledValues, displayName) {
  var propTypes = {};
  Object.keys(controlledValues).forEach(function (prop) {
    // add default propTypes for folks that use runtime checks
    propTypes[defaultKey(prop)] = noop;

    if (true) {
      var handler = controlledValues[prop];
      !(typeof handler === 'string' && handler.trim().length) ?  true ? invariant__WEBPACK_IMPORTED_MODULE_0___default()(false, 'Uncontrollable - [%s]: the prop `%s` needs a valid handler key name in order to make it uncontrollable', displayName, prop) : 0 : void 0;
      propTypes[prop] = readOnlyPropType(handler, displayName);
    }
  });
  return propTypes;
}
function isProp(props, prop) {
  return props[prop] !== undefined;
}
function defaultKey(key) {
  return 'default' + key.charAt(0).toUpperCase() + key.substr(1);
}
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

function canAcceptRef(component) {
  return !!component && (typeof component !== 'function' || component.prototype && component.prototype.isReactComponent);
}

/***/ })

}]);