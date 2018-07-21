// import react
// return nya <p> html
// trs styling juga
// trs export
// import ke dalam App.js

import React from "react";
import "./P.css";

// class Button extends React.Component {
//   render() {
//     return <button>{this.props.children}</button>;
//   }
// }

function P(props) {
  return <p style={{ fontsize: 24 }}>{props.children}</p>;
}

export default P;
