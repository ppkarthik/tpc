/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./hybris.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./events/cart.ts":
/*!************************!*\
  !*** ./events/cart.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar common_1 = __webpack_require__(/*! ./common */ \"./events/common.ts\");\nfunction addToCart(currency, products) {\n    var event = {\n        event: \"add_to_cart\",\n        ecommerce: {\n            currencyCode: currency,\n            add: {\n                products: common_1.getProductArray(products)\n            }\n        }\n    };\n    common_1.pushEvent(event);\n}\nexports.addToCart = addToCart;\nfunction removeFromCart(currency, products) {\n    var event = {\n        event: \"remove_cart\",\n        ecommerce: {\n            currencyCode: currency,\n            remove: {\n                products: common_1.getProductArray(products)\n            }\n        }\n    };\n    common_1.pushEvent(event);\n}\nexports.removeFromCart = removeFromCart;\n\n\n//# sourceURL=webpack:///./events/cart.ts?");

/***/ }),

/***/ "./events/checkout.ts":
/*!****************************!*\
  !*** ./events/checkout.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar common_1 = __webpack_require__(/*! ./common */ \"./events/common.ts\");\nfunction trackCheckoutProcessEvent(action, dim64, products) {\n    var event = {\n        event: \"checkout\",\n        dimension64: dim64,\n        ecommerce: {\n            checkout: {\n                actionField: action,\n                products: common_1.getProductArray(products)\n            }\n        }\n    };\n    common_1.pushEvent(event);\n}\nexports.trackCheckoutProcessEvent = trackCheckoutProcessEvent;\n\n\n//# sourceURL=webpack:///./events/checkout.ts?");

/***/ }),

/***/ "./events/common.ts":
/*!**************************!*\
  !*** ./events/common.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.pushEvent = function (event) {\n    return window.dataLayer && window.dataLayer.push(event);\n};\nexports.KEY_SITE_EVENTS = \"site_events\";\nexports.PAGE_VIEW = \"page_view\";\nexports.PAGE_VIEW_NAME = \"view_name\";\nexports.KEY_CURRENT_TIME = \"current_time\";\nexports.KEY_EVENT_NAME = \"event_name\";\nexports.KEY_LOCATION = \"location\";\nexports.PAGE_VIEW_INDEX_0 = \"consultant-account\";\nexports.PAGE_VIEW_INDEX_1 = \"ebiz-tools\";\nexports.PAGE_SUBSCRIPTION_SIGNUP = \"subscription-signup\";\nexports.PAGE_SUBSCRIPTION_CONFIRM = \"subscription-confirm\";\nexports.PAGE_MANAGE_SUBSCRIPTION = \"manage–subscription\";\nexports.PAGE_CANCEL = \"cancellation-confirmation\";\nexports.PAGE_CHANGE_SUBSCRIPTION = \"subscription-change\";\nexports.PAGE_TERMS = \"terms\";\nexports.PAGE_SUBSCRIPTION_SUSPENDED = \"subscription-suspended\";\nfunction getProduct(product) {\n    var productFromClickEvent = {\n        name: product.name,\n        id: product.id,\n        price: product.price,\n        category: product.category,\n        position: product.position\n    };\n    return productFromClickEvent;\n}\nexports.getProduct = getProduct;\nfunction getProductArray(products) {\n    return products.map(function (product) { return ({\n        name: product.name || undefined,\n        id: product.id || undefined,\n        price: product.price || undefined,\n        category: product.category || undefined,\n        quantity: product.quantity || 0,\n        variant: product.variant || undefined,\n        coupon: product.coupon || undefined,\n        list: product.list || undefined,\n        position: product.position || undefined\n    }); });\n}\nexports.getProductArray = getProductArray;\nfunction getActionField(actionField) {\n    var af = {\n        id: actionField.id,\n        affiliation: actionField.affiliation,\n        revenue: actionField.revenue,\n        shipping: actionField.shipping,\n        coupon: actionField.coupon\n    };\n    return af;\n}\nexports.getActionField = getActionField;\n\n\n//# sourceURL=webpack:///./events/common.ts?");

/***/ }),

/***/ "./events/consultant-communication.ts":
/*!********************************************!*\
  !*** ./events/consultant-communication.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar common_1 = __webpack_require__(/*! ./common */ \"./events/common.ts\");\nvar CONSULTANT_COMMUNICATION_SENT = \"consultant_communication_sent\";\nvar COMMUNICATION_COVER_PHOTO = \"cover_photo\";\nvar CUSTOM_CONTENT = \"custom_content\";\nvar SUBJECT_LINE_CHANGED = \"subject line\";\nvar BODY_COPY = \"body copy\";\nvar OPTIONAL_FIELD = \"optional_field\";\nvar SHOP_BUTTON = \"shop button\";\nvar HOST_BUTTON = \"host button\";\nvar JOIN_BUTTON = \"join button\";\nvar COMMUNICATION_TOPIC = \"communication_topic\";\nexports.sendEmailAction = function (_a) {\n    var _b, _c;\n    var selectedImage = _a.selectedImage, templateName = _a.templateName, isSubjectLineChanged = _a.isSubjectLineChanged, isEmailBodyChanged = _a.isEmailBodyChanged, shopCtaSelected = _a.shopCtaSelected, hostCtaSelected = _a.hostCtaSelected, joinCtaSelected = _a.joinCtaSelected;\n    var eventPayload = (_b = {},\n        _b[common_1.KEY_SITE_EVENTS] = (_c = {},\n            _c[common_1.PAGE_VIEW] = \"true\",\n            _c[CONSULTANT_COMMUNICATION_SENT] = \"true\",\n            _c),\n        _b[common_1.PAGE_VIEW_NAME] = [\"consultants-corner\", \"contacts\", \"email-confirmation\"],\n        _b[COMMUNICATION_COVER_PHOTO] = selectedImage,\n        _b[COMMUNICATION_TOPIC] = templateName,\n        _b[CUSTOM_CONTENT] = [],\n        _b[OPTIONAL_FIELD] = [],\n        _b);\n    isSubjectLineChanged &&\n        eventPayload[CUSTOM_CONTENT].push(SUBJECT_LINE_CHANGED);\n    isEmailBodyChanged && eventPayload[CUSTOM_CONTENT].push(BODY_COPY);\n    shopCtaSelected && eventPayload[OPTIONAL_FIELD].push(SHOP_BUTTON);\n    hostCtaSelected && eventPayload[OPTIONAL_FIELD].push(HOST_BUTTON);\n    joinCtaSelected && eventPayload[OPTIONAL_FIELD].push(JOIN_BUTTON);\n    common_1.pushEvent(eventPayload);\n};\n\n\n//# sourceURL=webpack:///./events/consultant-communication.ts?");

/***/ }),

/***/ "./events/index.ts":
/*!*************************!*\
  !*** ./events/index.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nfunction __export(m) {\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\n}\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__export(__webpack_require__(/*! ./common */ \"./events/common.ts\"));\n__export(__webpack_require__(/*! ./page-view */ \"./events/page-view.ts\"));\n__export(__webpack_require__(/*! ./consultant-communication */ \"./events/consultant-communication.ts\"));\n__export(__webpack_require__(/*! ./subscriptions */ \"./events/subscriptions.ts\"));\n__export(__webpack_require__(/*! ./page-refresh */ \"./events/page-refresh.ts\"));\n__export(__webpack_require__(/*! ./monthly-focus */ \"./events/monthly-focus.ts\"));\n__export(__webpack_require__(/*! ./cart */ \"./events/cart.ts\"));\n__export(__webpack_require__(/*! ./checkout */ \"./events/checkout.ts\"));\n__export(__webpack_require__(/*! ./product-detail-page */ \"./events/product-detail-page.ts\"));\n__export(__webpack_require__(/*! ./order */ \"./events/order.ts\"));\n__export(__webpack_require__(/*! ./product-impressions */ \"./events/product-impressions.ts\"));\n__export(__webpack_require__(/*! ./product-click */ \"./events/product-click.ts\"));\n\n\n//# sourceURL=webpack:///./events/index.ts?");

/***/ }),

/***/ "./events/monthly-focus.ts":
/*!*********************************!*\
  !*** ./events/monthly-focus.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar common_1 = __webpack_require__(/*! ./common */ \"./events/common.ts\");\nvar EVENT_CLICK_MONTHLY_FOCUS_COMPONENT = \"monthly_focus_component_click\";\nvar EVENT_NAME_CLICK_MONTHLY_FOCUS_COMPONENT = \"monthly focus component click\";\nexports.monthlyFocusClickAction = function () {\n    var _a, _b;\n    var eventPayload = (_a = {},\n        _a[common_1.KEY_SITE_EVENTS] = (_b = {},\n            _b[EVENT_CLICK_MONTHLY_FOCUS_COMPONENT] = \"true\",\n            _b),\n        _a[common_1.KEY_EVENT_NAME] = EVENT_NAME_CLICK_MONTHLY_FOCUS_COMPONENT,\n        _a);\n    common_1.pushEvent(eventPayload);\n};\n\n\n//# sourceURL=webpack:///./events/monthly-focus.ts?");

/***/ }),

/***/ "./events/order.ts":
/*!*************************!*\
  !*** ./events/order.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar common_1 = __webpack_require__(/*! ./common */ \"./events/common.ts\");\nfunction purchaseEvent(transaction) {\n    var event = {\n        event: \"purchase\",\n        ecommerce: {\n            purchase: {\n                actionField: common_1.getActionField(transaction.purchase.actionField),\n                products: common_1.getProductArray(transaction.purchase.products)\n            },\n            dimension64: transaction.dimension64,\n            dimension65: transaction.dimension65\n        }\n    };\n    common_1.pushEvent(event);\n}\nexports.purchaseEvent = purchaseEvent;\nfunction orderTransaction(actionField, products, dimension64, dimension65) {\n    var event = {\n        event: \"purchase\",\n        ecommerce: {\n            purchase: {\n                actionField: common_1.getActionField(actionField),\n                products: common_1.getProductArray(products)\n            },\n            dimension64: dimension64,\n            dimension65: dimension65\n        }\n    };\n    common_1.pushEvent(event);\n}\nexports.orderTransaction = orderTransaction;\n\n\n//# sourceURL=webpack:///./events/order.ts?");

/***/ }),

/***/ "./events/page-refresh.ts":
/*!********************************!*\
  !*** ./events/page-refresh.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar common_1 = __webpack_require__(/*! ./common */ \"./events/common.ts\");\nvar EVENT_SITE_REFRESH_CLICK = \"refresh_click\";\nvar EVENT_NAME_REFRESH_CLICK = \"refresh click\";\nvar EVENT_SITE_VIEW_ALL_PARTIES = \"view_all_parties\";\nvar EVENT_NAME_VIEW_ALL_PARTIES = \"view all parties\";\nexports.refreshClickAction = function () {\n    var _a, _b;\n    var eventPayload = (_a = {},\n        _a[common_1.KEY_SITE_EVENTS] = (_b = {},\n            _b[EVENT_SITE_REFRESH_CLICK] = \"true\",\n            _b),\n        _a[common_1.KEY_EVENT_NAME] = EVENT_NAME_REFRESH_CLICK,\n        _a);\n    common_1.pushEvent(eventPayload);\n};\nexports.showLinkAction = function () {\n    var _a, _b;\n    var eventPayload = (_a = {},\n        _a[common_1.KEY_SITE_EVENTS] = (_b = {},\n            _b[EVENT_SITE_VIEW_ALL_PARTIES] = \"true\",\n            _b),\n        _a[common_1.KEY_EVENT_NAME] = EVENT_NAME_VIEW_ALL_PARTIES,\n        _a[common_1.KEY_LOCATION] = \"top\",\n        _a);\n    common_1.pushEvent(eventPayload);\n};\n\n\n//# sourceURL=webpack:///./events/page-refresh.ts?");

/***/ }),

/***/ "./events/page-view.ts":
/*!*****************************!*\
  !*** ./events/page-view.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar common_1 = __webpack_require__(/*! ./common */ \"./events/common.ts\");\nexports.pageViewAction = function (_a) {\n    var _b = _a.path, path = _b === void 0 ? window.location.pathname : _b, _c = _a.title, title = _c === void 0 ? document.title : _c;\n    var eventPayload = {\n        event: \"pageview\",\n        page: {\n            path: path,\n            title: title\n        }\n    };\n    common_1.pushEvent(eventPayload);\n};\n\n\n//# sourceURL=webpack:///./events/page-view.ts?");

/***/ }),

/***/ "./events/product-click.ts":
/*!*********************************!*\
  !*** ./events/product-click.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar common_1 = __webpack_require__(/*! ./common */ \"./events/common.ts\");\nfunction productClickThru(product, productClickedFrom) {\n    productClickedFrom = product.category != null ? product.category : productClickedFrom;\n    var event = {\n        event: \"product_click\",\n        ecommerce: {\n            detail: {\n                actionField: { list: productClickedFrom || undefined },\n                products: [common_1.getProduct(product)]\n            }\n        }\n    };\n    common_1.pushEvent(event);\n}\nexports.productClickThru = productClickThru;\n\n\n//# sourceURL=webpack:///./events/product-click.ts?");

/***/ }),

/***/ "./events/product-detail-page.ts":
/*!***************************************!*\
  !*** ./events/product-detail-page.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar common_1 = __webpack_require__(/*! ./common */ \"./events/common.ts\");\nfunction productDetailViews(subcategory, products) {\n    var event = {\n        event: \"product_detail_view\",\n        ecommerce: {\n            detail: {\n                actionField: { list: subcategory || undefined },\n                products: common_1.getProductArray(products)\n            }\n        }\n    };\n    common_1.pushEvent(event);\n}\nexports.productDetailViews = productDetailViews;\n\n\n//# sourceURL=webpack:///./events/product-detail-page.ts?");

/***/ }),

/***/ "./events/product-impressions.ts":
/*!***************************************!*\
  !*** ./events/product-impressions.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar common_1 = __webpack_require__(/*! ./common */ \"./events/common.ts\");\nfunction productImpressions(products) {\n    var event = {\n        event: \"product_impression\",\n        ecommerce: {\n            impressions: common_1.getProductArray(products)\n        }\n    };\n    common_1.pushEvent(event);\n}\nexports.productImpressions = productImpressions;\n\n\n//# sourceURL=webpack:///./events/product-impressions.ts?");

/***/ }),

/***/ "./events/subscriptions.ts":
/*!*********************************!*\
  !*** ./events/subscriptions.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar common_1 = __webpack_require__(/*! ./common */ \"./events/common.ts\");\nvar EVENT_CHANGE_SUBSCRIPTION = \"change_subscription\";\nvar EVENT_CANCEL_SUBSCRIPTION = \"cancel_subscription\";\nvar EVENT_CONFIRM_SUBSCRIPTION = \"confirm_subscription\";\nvar EVENT_NEW_SUBSCRIPTION_CONFIRMATION = \"new\";\nvar EVENT_MANAGE_PWS = \"manage_personal_website\";\nvar EVENT_VIEW_PWS = \"view_personal_website\";\nvar EVENT_VIEW_LINK = \"view link\";\nvar EVENT_MANAGE_LINK = \"manage link\";\nvar KEY_PAYMENT_TYPE = \"pmt_type\";\nvar KEY_CONFIRMATION_TYPE = \"confirmation_type\";\nvar KEY_OLD_SUBSCRIPTION = \"old_subscription\";\nvar KEY_SUBSCRIPTION_STATUS = \"subscription_status\";\nvar NOT_SUBSCRIBED = \"not subscribed\";\nvar KEY_LOCATION = \"location\";\nvar cancelSubscriptionAction;\ncancelSubscriptionAction = function () {\n    var _a, _b;\n    var eventPayload = (_a = {},\n        _a[common_1.KEY_SITE_EVENTS] = (_b = {},\n            _b[EVENT_CANCEL_SUBSCRIPTION] = \"true\",\n            _b),\n        _a[KEY_SUBSCRIPTION_STATUS] = [NOT_SUBSCRIBED],\n        _a);\n    common_1.pushEvent(eventPayload);\n};\nexports.changeSubscriptionAction = function (_a) {\n    var _b, _c;\n    var changeToSubscriptionType = _a.changeToSubscriptionType, currentPaymentMethod = _a.currentPaymentMethod, upcomingSubscriptionType = _a.upcomingSubscriptionType;\n    var eventPayload = (_b = {},\n        _b[common_1.KEY_SITE_EVENTS] = (_c = {},\n            _c[EVENT_CONFIRM_SUBSCRIPTION] = \"true\",\n            _c),\n        _b[KEY_SUBSCRIPTION_STATUS] = changeToSubscriptionType,\n        _b[KEY_PAYMENT_TYPE] = currentPaymentMethod,\n        _b[KEY_CONFIRMATION_TYPE] = EVENT_CHANGE_SUBSCRIPTION,\n        _b[KEY_OLD_SUBSCRIPTION] = upcomingSubscriptionType,\n        _b);\n    common_1.pushEvent(eventPayload);\n};\nexports.newSubscriptionAction = function (_a) {\n    var _b, _c;\n    var changeToSubscriptionType = _a.changeToSubscriptionType, currentPaymentMethod = _a.currentPaymentMethod, upcomingSubscriptionType = _a.upcomingSubscriptionType;\n    var eventPayload = (_b = {},\n        _b[common_1.KEY_SITE_EVENTS] = (_c = {},\n            _c[EVENT_CONFIRM_SUBSCRIPTION] = \"true\",\n            _c),\n        _b[KEY_SUBSCRIPTION_STATUS] = changeToSubscriptionType,\n        _b[KEY_PAYMENT_TYPE] = currentPaymentMethod,\n        _b[KEY_CONFIRMATION_TYPE] = EVENT_NEW_SUBSCRIPTION_CONFIRMATION,\n        _b[KEY_OLD_SUBSCRIPTION] = upcomingSubscriptionType,\n        _b);\n    common_1.pushEvent(eventPayload);\n};\nexports.viewPWSAction = function () {\n    var _a, _b;\n    var eventPayload = (_a = {},\n        _a[common_1.KEY_SITE_EVENTS] = (_b = {},\n            _b[EVENT_VIEW_PWS] = \"true\",\n            _b),\n        _a[KEY_LOCATION] = EVENT_VIEW_LINK,\n        _a);\n    common_1.pushEvent(eventPayload);\n};\nexports.managePWSAction = function () {\n    var _a, _b;\n    var eventPayload = (_a = {},\n        _a[common_1.KEY_SITE_EVENTS] = (_b = {},\n            _b[EVENT_MANAGE_PWS] = \"true\",\n            _b),\n        _a[KEY_LOCATION] = EVENT_MANAGE_LINK,\n        _a);\n    common_1.pushEvent(eventPayload);\n};\nexports.changeSubscriptionTypeAction = function () {\n    var _a, _b;\n    var eventPayload = (_a = {},\n        _a[common_1.KEY_SITE_EVENTS] = (_b = {},\n            _b[EVENT_CHANGE_SUBSCRIPTION] = \"true\",\n            _b),\n        _a);\n    common_1.pushEvent(eventPayload);\n};\nexports.submitPWSAction = function () {\n    var _a, _b;\n    var eventPayload = (_a = {},\n        _a[common_1.KEY_SITE_EVENTS] = (_b = {},\n            _b[EVENT_MANAGE_PWS] = \"true\",\n            _b),\n        _a);\n    common_1.pushEvent(eventPayload);\n};\n\n\n//# sourceURL=webpack:///./events/subscriptions.ts?");

/***/ }),

/***/ "./hybris.ts":
/*!*******************!*\
  !*** ./hybris.ts ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    result[\"default\"] = mod;\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar init = __importStar(__webpack_require__(/*! ./init-analytics */ \"./init-analytics.ts\"));\nvar events = __importStar(__webpack_require__(/*! ./events */ \"./events/index.ts\"));\nvar globalScope = {\n    init: init,\n    events: events\n};\n(function () {\n    window[\"PamperedChefCommonAnalytics\"] = globalScope;\n})();\n\n\n//# sourceURL=webpack:///./hybris.ts?");

/***/ }),

/***/ "./init-analytics.ts":
/*!***************************!*\
  !*** ./init-analytics.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar isProductionSite = window.location.hostname === \"www.pamperedchef.com\" ||\n    window.location.hostname === \"www.pamperedchef.ca\";\nexports.addHeadScripts = function () {\n    var dlScriptEl = document.createElement(\"script\");\n    dlScriptEl.appendChild(document.createTextNode(\"\\n        /* Define GTM Data Layer */\\n            var _dl = {\\n                \\\"virtual_pageview_flag\\\" : \\\"true\\\" // Flag alerts GTM trigger to not fire the default pageview tag.\\n            };\\n            var dataLayer = [_dl];\\n\\n            // _trackAnalytics function will be available globally on page load coming from gtm configuration\\n\\n            var _trackAnalytics = function(o) {\\n                window._trackAnalyticsEvents = window._trackAnalyticsEvents || [];\\n                window._trackAnalyticsEvents.push(o);\\n            };\\n        \"));\n    var gtmScriptEl = document.createElement(\"script\");\n    var gaScriptEl = document.createElement(\"script\");\n    if (isProductionSite) {\n        gtmScriptEl.appendChild(document.createTextNode(\"\\n            /** Google Tag Manager **/\\n            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push(\\n                {'gtm.start': new Date().getTime(),event:'gtm.js'}\\n                );var f=d.getElementsByTagName(s)[0],\\n                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\\n                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\\n                })(window,document,'script','dataLayer','GTM-N7HXL7');\\n            /** End Google Tag Manager **/\\n        \"));\n    }\n    else {\n        gtmScriptEl.appendChild(document.createTextNode(\"\\n            /** Google Tag Manager **/\\n            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\\n                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\\n                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\\n                'https://www.googletagmanager.com/gtm.js?id='+i+dl+ '&gtm_auth=g_2IVWNeZtGx5cGbQ3_GQQ&gtm_preview=env-1207&gtm_cookies_win=x';f.parentNode.insertBefore(j,f);\\n                })(window,document,'script','dataLayer','GTM-N7HXL7');\\n            /** End Google Tag Manager **/\\n        \"));\n    }\n    gaScriptEl.appendChild(document.createTextNode(\"\\n        /** Google Analytics **/\\n        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\\n            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\\n            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\\n        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');\\n\\n        // TODO : replace GA code for prod during build\\n        ga('create', 'UA-30325608-1', 'auto');\\n        ga('send', 'pageview');\\n        /** End Google Analytics **/\\n        \"));\n    document.head.appendChild(dlScriptEl);\n    document.head.appendChild(gtmScriptEl);\n    document.head.appendChild(gaScriptEl);\n};\nexports.addBodyScripts = function () {\n    var tmScript = document.createElement(\"noscript\");\n    if (isProductionSite) {\n        tmScript.innerHTML = \"\\n        <!-- Google Tag Manager (noscript) -->\\n        <iframe src=\\\"https://www.googletagmanager.com/ns.html?id=GTM-N7HXL7\\\" height=\\\"0\\\" width=\\\"0\\\" style=\\\"display:none;visibility:hidden\\\"></iframe>\\n        <!-- End Google Tag Manager (noscript) -->\";\n    }\n    else {\n        tmScript.innerHTML = \"\\n        <!-- Google Tag Manager (noscript) -->\\n        <iframe src=\\\"https://www.googletagmanager.com/ns.html?id=GTM-N7HXL7&gtm_auth=g_2IVWNeZtGx5cGbQ3_GQQ&gtm_preview=env-1207&gtm_cookies_win=x\\\"\\n            height=\\\"0\\\" width=\\\"0\\\" style=\\\"display:none;visibility:hidden\\\"></iframe>\\n        <!-- End Google Tag Manager (noscript) -->\";\n    }\n    document.body.insertBefore(tmScript, document.body.firstChild);\n};\nexports.initAnalytics = function () {\n    exports.addHeadScripts();\n    exports.addBodyScripts();\n};\n\n\n//# sourceURL=webpack:///./init-analytics.ts?");

/***/ })

/******/ });