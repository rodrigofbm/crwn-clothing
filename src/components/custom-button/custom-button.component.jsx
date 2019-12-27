import React from "react";
import { ButtonContainer } from "./custom-button.styles";

const CustomButton = props => (
  <ButtonContainer {...props}>{props.children}</ButtonContainer>
);

export default CustomButton;
