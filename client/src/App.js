import React, { Fragment } from "react";
import './App.css';

//components

import DropdownComponent from "./components/DropdownComponent";
import LikesList from "./components/LikesList";

function App() {
  return (
    <Fragment>
      <div className="container">
        <DropdownComponent />
        {/* <LikesList /> */}
      </div>
    </Fragment>
  );
}

export default App;
