"use strict";
exports.id = 508;
exports.ids = [508];
exports.modules = {

/***/ 6508:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ layouts_SectionTitle)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/component/layouts/SplitText.jsx


//const { Component, Children, PropTypes } = React
// if(typeof window !== 'undefined') {
//     window.WOW = require('wowjs');
// }
// new WOW.WOW().init();
const SplitText = (props)=>{
    return /*#__PURE__*/ jsx_runtime.jsx("span", {
        "aria-label": props.copy,
        role: props.role,
        className: "wow fadeInUp wordwrap",
        children: props.copy.split(" ").map(function(char, index) {
            //   let style = {"animation-delay": (0.5 + index / 10) + "s" }
            let customeVal = char;
            const totalLength = props.copy.split(" ").length;
            if (index !== totalLength - 1) {
                customeVal = char + " ";
            }
            return /*#__PURE__*/ jsx_runtime.jsx("span", {
                className: "word",
                "aria-hidden": "true",
                children: customeVal
            }, index);
        })
    });
};
/* harmony default export */ const layouts_SplitText = (SplitText);

;// CONCATENATED MODULE: ./src/component/layouts/SectionTitle.jsx



const SectionTitle = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "mafaContent",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "mafagrp",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-lg-6",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "mafaText",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                        className: "label-text",
                                        children: "About"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                        children: /*#__PURE__*/ jsx_runtime.jsx(layouts_SplitText, {
                                            copy: "Sarah Fossheim",
                                            role: "heading"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-lg-6",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "mafaText",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        children: "Elcom International is among the few trustworthy and specialized manufacturers of Electromechanical & Electronic components in India, serving its customers all over the globe since 1981. Our state-of-the-art manufacturing infrastructure and highly equipped testing laboratories have successfully acquired and reliably maintained multiple reputable certification standards."
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "btnbox",
                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            className: "elcom-btn primary-black-btn",
                                            href: "#",
                                            children: "Our Story"
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const layouts_SectionTitle = (SectionTitle);


/***/ })

};
;