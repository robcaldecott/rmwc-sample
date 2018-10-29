import React from "react";
import ReactDOM from "react-dom";
import "typeface-roboto";
import "./index.scss";
import { Button } from "@rmwc/button";
import { DangerButton } from "./DangerButton";

const App = () => (
  <>
    <Button raised>I love RMWC!</Button>
    <DangerButton>Use SCSS modules!</DangerButton>
  </>
);

ReactDOM.render(<App />, document.getElementById("root"));
