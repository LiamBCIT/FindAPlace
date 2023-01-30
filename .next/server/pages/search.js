"use strict";
(() => {
var exports = {};
exports.id = 603;
exports.ids = [603];
exports.modules = {

/***/ 9605:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/noresult.1467d9c7.svg","height":197,"width":200});

/***/ }),

/***/ 8722:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SearchFilters)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2210);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4041);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_filterData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(559);
/* harmony import */ var _utils_fetchApi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7355);
/* harmony import */ var _assets_images_noresult_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9605);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__, _utils_fetchApi__WEBPACK_IMPORTED_MODULE_7__]);
([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__, _utils_fetchApi__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function SearchFilters() {
    const [filters] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_utils_filterData__WEBPACK_IMPORTED_MODULE_6__/* .filterData */ .c);
    const [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [locationData, setLocationData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [showLocations, setShowLocations] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const searchProperties = (filterValues)=>{
        const path = router.pathname;
        const { query  } = router;
        const values = (0,_utils_filterData__WEBPACK_IMPORTED_MODULE_6__/* .getFilterValues */ .i)(filterValues);
        values.forEach((item)=>{
            if (item.value && filterValues?.[item.name]) {
                query[item.name] = item.value;
            }
        });
        router.push({
            pathname: path,
            query: query
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (searchTerm !== "") {
            const fetchData = async ()=>{
                setLoading(true);
                const data = await (0,_utils_fetchApi__WEBPACK_IMPORTED_MODULE_7__/* .fetchApi */ .a)(`${_utils_fetchApi__WEBPACK_IMPORTED_MODULE_7__/* .baseUrl */ .F}/auto-complete?query=${searchTerm}`);
                setLoading(false);
                setLocationData(data?.hits);
            };
            fetchData();
        }
    }, [
        searchTerm
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
        bg: "gray.100",
        p: "4",
        justifyContent: "center",
        flexWrap: "wrap",
        children: [
            filters?.map((filter)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Select, {
                        onChange: (e)=>searchProperties({
                                [filter.queryName]: e.target.value
                            }),
                        placeholder: filter.placeholder,
                        w: "fit-content",
                        p: "2",
                        children: filter?.items?.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: item.value,
                                children: item.name
                            }, item.value))
                    })
                }, filter.queryName)),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                flexDir: "column",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                        onClick: ()=>setShowLocations(!showLocations),
                        border: "1px",
                        borderColor: "gray.200",
                        marginTop: "2",
                        children: "Search Location"
                    }),
                    showLocations && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                        flexDir: "column",
                        pos: "relative",
                        paddingTop: "2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
                                placeholder: "Type Here",
                                value: searchTerm,
                                w: "300px",
                                focusBorderColor: "gray.300",
                                onChange: (e)=>setSearchTerm(e.target.value)
                            }),
                            searchTerm !== "" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                                as: react_icons_md__WEBPACK_IMPORTED_MODULE_4__.MdCancel,
                                pos: "absolute",
                                cursor: "pointer",
                                right: "5",
                                top: "5",
                                zIndex: "100",
                                onClick: ()=>setSearchTerm("")
                            }),
                            loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Spinner, {
                                margin: "auto",
                                marginTop: "3"
                            }),
                            showLocations && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                height: "300px",
                                overflow: "auto",
                                children: [
                                    locationData?.map((location)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                            onClick: ()=>{
                                                searchProperties({
                                                    locationExternalIDs: location.externalID
                                                });
                                                setShowLocations(false);
                                                setSearchTerm(location.name);
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                                cursor: "pointer",
                                                bg: "gray.200",
                                                p: "2",
                                                borderBottom: "1px",
                                                borderColor: "gray.100",
                                                children: location.name
                                            })
                                        }, location.id)),
                                    !loading && !locationData?.length && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                                        justifyContent: "center",
                                        alignItems: "center",
                                        flexDir: "column",
                                        marginTop: "5",
                                        marginBottom: "5",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                src: _assets_images_noresult_svg__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                                fontSize: "xl",
                                                marginTop: "3",
                                                children: "Waiting to search!"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5628:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2210);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Property__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1055);
/* harmony import */ var _components_SearchFilters__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8722);
/* harmony import */ var _assets_images_noresult_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9605);
/* harmony import */ var _utils_FetchApi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1066);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__, _components_Property__WEBPACK_IMPORTED_MODULE_6__, _components_SearchFilters__WEBPACK_IMPORTED_MODULE_7__, _utils_FetchApi__WEBPACK_IMPORTED_MODULE_9__]);
([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__, _components_Property__WEBPACK_IMPORTED_MODULE_6__, _components_SearchFilters__WEBPACK_IMPORTED_MODULE_7__, _utils_FetchApi__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const Search = ({ properties  })=>{
    const [searchFilters, setSearchFilters] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {
                cursor: "pointer",
                bg: "gray.100",
                borderBottom: "1px",
                borderColor: "gray.200",
                p: "2",
                fontWeight: "bold",
                fontSize: "lg",
                justifyContent: "center",
                alignItems: "center",
                onClick: ()=>setSearchFilters((prevFilters)=>!prevFilters),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {
                        children: "Search property by filters"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Icon, {
                        paddingLeft: "2",
                        w: "7",
                        as: react_icons_bs__WEBPACK_IMPORTED_MODULE_5__.BsFilter
                    })
                ]
            }),
            searchFilters && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SearchFilters__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {
                fontSize: "2xl",
                p: "4",
                fontWeight: "bold",
                children: [
                    "Properties ",
                    router.query.purpose
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {
                flewWrap: "wrap",
                children: properties.map((property)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Property__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        property: property
                    }, property.id))
            }),
            properties.length === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                marginTop: "5",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_3__.Image, {
                    alt: "No result",
                    src: _assets_images_noresult_svg__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z
                })
            })
        ]
    });
};
async function getServerSideProps({ query  }) {
    const purpose = query.purpose || "for-rent"; //default
    const rentFrequency = query.rentFrequency || "yearly";
    const minPrice = query.minPrice || "0";
    const maxPrice = query.maxPrice || "1000000";
    const roomsMin = query.roomsMin || "0";
    const bathsMin = query.bathsMin || "0";
    const sort = query.sort || "price-desc";
    const areaMax = query.areaMax || "35000";
    const locationExternalIDs = query.locationExternalIDs || "5002";
    const categoryExternalID = query.categoryExternalID || "4";
    const data = await (0,_utils_FetchApi__WEBPACK_IMPORTED_MODULE_9__/* .fetchApi */ .a)(`${_utils_FetchApi__WEBPACK_IMPORTED_MODULE_9__/* .baseUrl */ .F}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`);
    return {
        props: {
            properties: data?.hits
        }
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search);

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

/***/ 559:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ filterData),
/* harmony export */   "i": () => (/* binding */ getFilterValues)
/* harmony export */ });
const filterData = [
    {
        items: [
            {
                name: "Buy",
                value: "for-sale"
            },
            {
                name: "Rent",
                value: "for-rent"
            }
        ],
        placeholder: "Purpose",
        queryName: "purpose"
    },
    {
        items: [
            {
                name: "Daily",
                value: "daily"
            },
            {
                name: "Weekly",
                value: "weekly"
            },
            {
                name: "Monthly",
                value: "monthly"
            },
            {
                name: "Yearly",
                value: "yearly"
            }
        ],
        placeholder: "Rent Frequency",
        queryName: "rentFrequency"
    },
    {
        items: [
            {
                name: "10,000",
                value: "10000"
            },
            {
                name: "20,000",
                value: "20000"
            },
            {
                name: "30,000",
                value: "30000"
            },
            {
                name: "40,000",
                value: "40000"
            },
            {
                name: "50,000",
                value: "50000"
            },
            {
                name: "60,000",
                value: "60000"
            },
            {
                name: "85,000",
                value: "85000"
            }
        ],
        placeholder: "Min Price(AED)",
        queryName: "minPrice"
    },
    {
        items: [
            {
                name: "50,000",
                value: "50000"
            },
            {
                name: "60,000",
                value: "60000"
            },
            {
                name: "85,000",
                value: "85000"
            },
            {
                name: "110,000",
                value: "110000"
            },
            {
                name: "135,000",
                value: "135000"
            },
            {
                name: "160,000",
                value: "160000"
            },
            {
                name: "185,000",
                value: "185000"
            },
            {
                name: "200,000",
                value: "200000"
            },
            {
                name: "300,000",
                value: "300000"
            },
            {
                name: "400,000",
                value: "400000"
            },
            {
                name: "500,000",
                value: "500000"
            },
            {
                name: "600,000",
                value: "600000"
            },
            {
                name: "700,000",
                value: "700000"
            },
            {
                name: "800,000",
                value: "800000"
            },
            {
                name: "900,000",
                value: "900000"
            },
            {
                name: "1000,000",
                value: "1000000"
            }
        ],
        placeholder: "Max Price(AED)",
        queryName: "maxPrice"
    },
    {
        items: [
            {
                name: "Lowest Price",
                value: "price-asc"
            },
            {
                name: "Highest Price",
                value: "price-des"
            },
            {
                name: "Newest",
                value: "date-asc"
            },
            {
                name: "Oldest",
                value: "date-desc"
            },
            {
                name: "Verified",
                value: "verified-score"
            },
            {
                name: "City Level Score",
                value: "city-level-score"
            }
        ],
        placeholder: "Sort",
        queryName: "sort"
    },
    {
        items: [
            {
                name: "1000",
                value: "1000"
            },
            {
                name: "2000",
                value: "2000"
            },
            {
                name: "3000",
                value: "3000"
            },
            {
                name: "4000",
                value: "4000"
            },
            {
                name: "5000",
                value: "5000"
            },
            {
                name: "10000",
                value: "10000"
            },
            {
                name: "20000",
                value: "20000"
            }
        ],
        placeholder: "Max Area(sqft)",
        queryName: "areaMax"
    },
    {
        items: [
            {
                name: "1",
                value: "1"
            },
            {
                name: "2",
                value: "2"
            },
            {
                name: "3",
                value: "3"
            },
            {
                name: "4",
                value: "4"
            },
            {
                name: "5",
                value: "5"
            },
            {
                name: "6",
                value: "6"
            },
            {
                name: "7",
                value: "7"
            },
            {
                name: "8",
                value: "8"
            },
            {
                name: "9",
                value: "9"
            },
            {
                name: "10",
                value: "10"
            }
        ],
        placeholder: "Rooms",
        queryName: "roomsMin"
    },
    {
        items: [
            {
                name: "1",
                value: "1"
            },
            {
                name: "2",
                value: "2"
            },
            {
                name: "3",
                value: "3"
            },
            {
                name: "4",
                value: "4"
            },
            {
                name: "5",
                value: "5"
            },
            {
                name: "6",
                value: "6"
            },
            {
                name: "7",
                value: "7"
            },
            {
                name: "8",
                value: "8"
            },
            {
                name: "9",
                value: "9"
            },
            {
                name: "10",
                value: "10"
            }
        ],
        placeholder: "Baths",
        queryName: "bathsMin"
    },
    {
        items: [
            {
                name: "Furnished",
                value: "furnished"
            },
            {
                name: "Unfurnished",
                value: "unfurnished"
            }
        ],
        placeholder: "Furnish Type",
        queryName: "furnishingStatus"
    },
    {
        items: [
            {
                name: "Apartment",
                value: "4"
            },
            {
                name: "Townhouses",
                value: "16"
            },
            {
                name: "Villas",
                value: "3"
            },
            {
                name: "Penthouses",
                value: "18"
            },
            {
                name: "Hotel Apartments",
                value: "21"
            },
            {
                name: "Villa Compound",
                value: "19"
            },
            {
                name: "Residential Plot",
                value: "14"
            },
            {
                name: "Residential Floor",
                value: "12"
            },
            {
                name: "Residential Building",
                value: "17"
            }
        ],
        placeholder: "Property Type",
        queryName: "categoryExternalID"
    }
];
const getFilterValues = (filterValues)=>{
    const { purpose , rentFrequency , categoryExternalID , minPrice , maxPrice , areaMax , roomsMin , bathsMin , sort , locationExternalIDs  } = filterValues;
    const values = [
        {
            name: "purpose",
            value: purpose
        },
        {
            name: "rentFrequency",
            value: rentFrequency
        },
        {
            name: "minPrice",
            value: minPrice
        },
        {
            name: "maxPrice",
            value: maxPrice
        },
        {
            name: "areaMax",
            value: areaMax
        },
        {
            name: "roomsMin",
            value: roomsMin
        },
        {
            name: "bathsMin",
            value: bathsMin
        },
        {
            name: "sort",
            value: sort
        },
        {
            name: "locationExternalIDs",
            value: locationExternalIDs
        },
        {
            name: "categoryExternalID",
            value: categoryExternalID
        }
    ];
    return values;
};


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

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

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

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

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

/***/ 4041:
/***/ ((module) => {

module.exports = require("react-icons/md");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,121,676,664,675,851], () => (__webpack_exec__(5628)));
module.exports = __webpack_exports__;

})();