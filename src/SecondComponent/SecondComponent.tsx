import React from "react";

import { SecondComponentProps } from "./SecondComponent.types";

import "./SecondComponent.scss";

const SecondComponent: React.FC<SecondComponentProps> = ({ theme }) => (
  <div
    data-testid="test-component"
    className={`test-component test-component-${theme}`}
  >
    <h1 className="heading">I'm the test component</h1>
    <h2>Made with love by meeee</h2>
  </div>
);

export default SecondComponent;