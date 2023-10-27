"use strict";
exports.id = 107;
exports.ids = [107];
exports.modules = {

/***/ 107:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ layouts_DefaultBlogBox)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/asset/images/blogimg.webp
/* harmony default export */ const blogimg = ({"src":"/_next/static/media/blogimg.9391adbf.webp","height":279,"width":414,"blurDataURL":"data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAADQAQCdASoIAAUAAkA4JaACdAD0h/vOAAD++HB6OPAPPR82wzuP7dEC43dU0l2oHsmYtge5fW/3n3IyL9vbsLCQAAA=","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./src/component/layouts/DefaultBlogBox.jsx




const DefaultBlogBox = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "col-lg-4",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "blogbox",
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "blogimgbox",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                    href: "#",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "blogimg",
                            children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                src: blogimg,
                                alt: "blogimg"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "blogdtl",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "bloglable",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            className: "very-small-text",
                                            children: "Blog"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            className: "small-text",
                                            children: "30/05/2023"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "blogttl",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                            children: "Importance of a power distribution unit in data center management"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "btnbox",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: "tertiary-btn",
                                                children: "Read More"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const layouts_DefaultBlogBox = (DefaultBlogBox);


/***/ })

};
;