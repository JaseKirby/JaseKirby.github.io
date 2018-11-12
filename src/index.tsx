import "./style.scss";
import * as React from "react";
import * as ReactDOM from "react-dom";

import data from "../jaseresume";
import {HomePage} from "./pages/homePage";


ReactDOM.render(
    <HomePage resume={data} />,
    document.getElementById("root")
);
