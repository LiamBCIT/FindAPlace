"use strict";
(() => {
var exports = {};
exports.id = 547;
exports.ids = [547];
exports.modules = {

/***/ 7273:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "Z", ({
    enumerable: true,
    get: function() {
        return _objectWithoutPropertiesLoose;
    }
}));
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}


/***/ }),

/***/ 4413:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ImageSrollbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2210);
/* harmony import */ var react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(916);
/* harmony import */ var react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__]);
_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const LeftArrow = ()=>{
    const { scrollPrev  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_4__.VisibilityContext);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {
        justifyContent: "center",
        alignItems: "center",
        marginRight: "1",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {
            as: react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaArrowAltCircleLeft,
            onClick: ()=>scrollPrev(),
            fontSize: "2xl",
            cursor: "pointer",
            d: [
                "none",
                "none",
                "none",
                "block"
            ]
        })
    });
};
const RightArrow = ()=>{
    const { scrollNext  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_4__.VisibilityContext);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "1",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {
            as: react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaArrowAltCircleRight,
            onClick: ()=>scrollNext(),
            fontSize: "2xl",
            cursor: "pointer",
            d: [
                "none",
                "none",
                "none",
                "block"
            ]
        })
    });
};
function ImageSrollbar({ data  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_4__.ScrollMenu, {
        LeftArrow: LeftArrow,
        RightArrow: RightArrow,
        style: {
            overflow: "hidden"
        },
        children: data.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
                width: "910px",
                itemId: item.id,
                overflow: "hidden",
                p: "1",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                    placeholder: "blur",
                    blurDataURL: item.url,
                    src: item.url,
                    width: 1000,
                    height: 500,
                    sizes: "(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px"
                })
            }))
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6410:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6191);
/* harmony import */ var _chakra_ui_avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9082);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_go__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5856);
/* harmony import */ var react_icons_go__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_go__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var millify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9542);
/* harmony import */ var millify__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(millify__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_fetchApi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7355);
/* harmony import */ var _components_ImageScrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4413);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__, _chakra_ui_avatar__WEBPACK_IMPORTED_MODULE_2__, _utils_fetchApi__WEBPACK_IMPORTED_MODULE_7__, _components_ImageScrollbar__WEBPACK_IMPORTED_MODULE_8__]);
([_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__, _chakra_ui_avatar__WEBPACK_IMPORTED_MODULE_2__, _utils_fetchApi__WEBPACK_IMPORTED_MODULE_7__, _components_ImageScrollbar__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const PropertyDetails = ({ propertyDetails: { price , rentFrequency , rooms , title , baths , area , agency , isVerified , description , type , purpose , furnishingStatus , amenities , photos  }  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Box, {
        maxWidth: "1000px",
        margin: "auto",
        p: "4",
        children: [
            photos && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ImageScrollbar__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                data: photos
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Box, {
                w: "full",
                p: "6",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                        paddingTop: "2",
                        alignItems: "center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                paddingRight: "3",
                                color: "green.400",
                                children: isVerified && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_go__WEBPACK_IMPORTED_MODULE_5__.GoVerified, {})
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                fontWeight: "bold",
                                fontSize: "lg",
                                children: [
                                    "AED ",
                                    price,
                                    " ",
                                    rentFrequency && `/${rentFrequency}`
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Spacer, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_avatar__WEBPACK_IMPORTED_MODULE_2__.Avatar, {
                                size: "sm",
                                src: agency?.logo?.url
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                        alignItems: "center",
                        p: "1",
                        justifyContent: "space-between",
                        w: "250px",
                        color: "blue.400",
                        children: [
                            rooms,
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaBed, {}),
                            " | ",
                            baths,
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaBath, {}),
                            " | ",
                            millify__WEBPACK_IMPORTED_MODULE_6___default()(area),
                            " sqft ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__.BsGridFill, {})
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Box, {
                marginTop: "2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Text, {
                        fontSize: "lg",
                        marginBottom: "2",
                        fontWeight: "bold",
                        children: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Text, {
                        lineHeight: "2",
                        color: "gray.600",
                        children: description
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                flexWrap: "wrap",
                textTransform: "uppercase",
                justifyContent: "space-between",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                        justifyContent: "space-between",
                        w: "400px",
                        borderBottom: "1px",
                        borderColor: "gray.100",
                        p: "3",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                children: "Type"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                fontWeight: "bold",
                                children: type
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                        justifyContent: "space-between",
                        w: "400px",
                        borderBottom: "1px",
                        borderColor: "gray.100",
                        p: "3",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                children: "Purpose"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                fontWeight: "bold",
                                children: purpose
                            })
                        ]
                    }),
                    furnishingStatus && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                        justifyContent: "space-between",
                        w: "400px",
                        borderBottom: "1px",
                        borderColor: "gray.100",
                        p: "3",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                children: "Furnishing Status"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                fontWeight: "bold",
                                children: furnishingStatus
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Box, {
                children: [
                    amenities.length && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Text, {
                        fontSize: "2xl",
                        fontWeight: "black",
                        marginTop: "5",
                        children: "Facilites:"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                        flexWrap: "wrap",
                        children: amenities?.map((item)=>item?.amenities?.map((amenity)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                    fontWeight: "bold",
                                    color: "blue.400",
                                    fontSize: "l",
                                    p: "2",
                                    bg: "gray.200",
                                    m: "1",
                                    borderRadius: "5",
                                    children: amenity.text
                                }, amenity.text)))
                    })
                ]
            })
        ]
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PropertyDetails);
async function getServerSideProps({ params: { id  }  }) {
    const data = await (0,_utils_fetchApi__WEBPACK_IMPORTED_MODULE_7__/* .fetchApi */ .a)(`${_utils_fetchApi__WEBPACK_IMPORTED_MODULE_7__/* .baseUrl */ .F}/properties/detail?externalID=${id}`);
    return {
        props: {
            propertyDetails: data
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7355:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ baseUrl),
/* harmony export */   "a": () => (/* binding */ fetchApi)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const baseUrl = "https://bayut.p.rapidapi.com";
// headers: {
//     'X-RapidAPI-Key': '94637e7059mshd61b57766804045p141b41jsn3ae497a8a2fd',
//     'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
//   }
const fetchApi = async (url)=>{
    const { data  } = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(url, {
        headers: {
            "X-RapidAPI-Key": "94637e7059mshd61b57766804045p141b41jsn3ae497a8a2fd",
            "X-RapidAPI-Host": "bayut.p.rapidapi.com"
        }
    });
    return data;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9542:
/***/ ((module) => {

module.exports = require("millify");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 916:
/***/ ((module) => {

module.exports = require("react-horizontal-scrolling-menu");

/***/ }),

/***/ 567:
/***/ ((module) => {

module.exports = require("react-icons/bs");

/***/ }),

/***/ 6290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 5856:
/***/ ((module) => {

module.exports = require("react-icons/go");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9082:
/***/ ((module) => {

module.exports = import("@chakra-ui/avatar");;

/***/ }),

/***/ 6191:
/***/ ((module) => {

module.exports = import("@chakra-ui/layout");;

/***/ }),

/***/ 2210:
/***/ ((module) => {

module.exports = import("@chakra-ui/react");;

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,121,675], () => (__webpack_exec__(6410)));
module.exports = __webpack_exports__;

})();