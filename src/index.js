import React from "react";
import ReactDOM from "react-dom";
import PrimaryButton, { SecondaryButton, TertiaryButton } from "./components/Buttons";
import { GlobalStyle } from "./utils";


const App = () => (
  <div>
        <PrimaryButton>Hello World</PrimaryButton>
        <SecondaryButton>Ankit soni</SecondaryButton>
        <TertiaryButton>king of the world</TertiaryButton>
        <GlobalStyle />
  </div>
);

ReactDOM.render(<App />
     , document.querySelector("#root"));
