import React from "react";
import ReactDom from "react-dom";

function Hello() {
  return <h4> Hi im Dawid This is my first Component </h4>;
}

ReactDom.render(<Hello />, document.getElementById("root"));
