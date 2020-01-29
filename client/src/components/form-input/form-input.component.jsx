import React from "react";
import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel
} from "./form-input.styles";

const FormInputComponent = ({ handleChange, label, ...otherProps }) => (
  <GroupContainer>
    <FormInputContainer onChange={handleChange} {...otherProps} />
    {label && (
      <FormInputLabel className={otherProps.value.length ? "shrink" : ""}>
        {label}
      </FormInputLabel>
    )}
  </GroupContainer>
);

export default FormInputComponent;
