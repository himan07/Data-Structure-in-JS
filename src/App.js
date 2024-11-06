import React from "react";
import ArrayTraverse from "./files/ArrayTraverse";
import DelElement from "./files/DelElement";
import MeregeTwoArray from "./files/MeregeTwoArray.jsx";
import SearchEl from "./files/SearchEl.jsx";
import InsertElArr from "./files/InsertElArr.jsx";
import Problem from "./files/Problem.jsx";
import CircleInCircle from "./files/ProgrammingCom.jsx";
import ArrMergeWhile from "./files/ArrMergeWhile.jsx";
import ArraySorting from "./files/arraySorting.jsx";
import JavaScriptTut from "./files/JavaScriptTut.jsx";
import InterviewProblems from "./files/InterviewProblems.jsx";
import HundredProb from "./files/HundredProb.jsx";
import Counter from "./files/Counter.jsx";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "200px",
      }}
    >
      {/* <ArrayTraverse /> */}
      {/* <DelElement /> */}
      {/* <InsertElArr /> */}
      {/* <MeregeTwoArray /> */}
      {/* <ArrMergeWhile /> */}
      {/* <ArraySorting /> */}
      {/* <InterviewProblems /> */}
      {/* <HundredProb /> */}
      {/* <SearchEl /> */}
      {/* <Problem /> */}
      {/* <CircleInCircle /> */}
      <Counter />
      {/* <JavaScriptTut /> */}
    </div>
  );
};

export default App;
