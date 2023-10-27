import React from "react";


//const { Component, Children, PropTypes } = React

// if(typeof window !== 'undefined') {
//     window.WOW = require('wowjs');
// }

// new WOW.WOW().init();

const SplitText = (props) => {
    return(     
        <span aria-label={props.copy} role={props.role} className="wow fadeInUp wordwrap" >
            {props.copy.split(" ").map(function(char, index){
            //   let style = {"animation-delay": (0.5 + index / 10) + "s" }
              let customeVal = char
              const totalLength = props.copy.split(" ").length
              if(index !== (totalLength - 1)){
                customeVal = char + ' '
              }
              return <span
                className="word"
                aria-hidden="true"
                key={index}
                // style={style}
                >
                    {customeVal}
              </span>;
            })}
          </span>
      );
  }
  

export default SplitText;