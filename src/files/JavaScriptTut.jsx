import React from "react";

const JavaScriptTut = () => {
  let name = "Ilya";
  alert(`hello ${1}`); // ?
  alert(`hello ${"name"}`); // ?
  alert(`hello ${name}`); // ?

  let userName = prompt("Enetr your name: ", " ")
  alert(userName)
  return <div>JavaScriptTut</div>;
};

export default JavaScriptTut;
