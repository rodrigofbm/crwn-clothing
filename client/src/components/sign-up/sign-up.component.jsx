import React, { useState } from "react";
import { connect } from "react-redux";

import { createUserEmailStart } from "../../redux/user/user.actions";
import { SignUpContainer, SignUpTitle } from "./sign-up.styles";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

const SignUpComponent = ({ createUserEmailStart }) => {
  const [userData, setUserData] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const { displayName, email, password, confirmPassword } = userData;

  const handleSubmit = async e => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match!");

      return;
    }

    createUserEmailStart(displayName, email, password);
  };

  const handleChange = e => {
    const { name, value } = e.target;

    setUserData({ ...userData, [name]: value });
  };

  return (
    <SignUpContainer>
      <SignUpTitle>I do not have a account</SignUpTitle>
      <span>Sign up with your e-mail and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          handleChange={handleChange}
          label="Name"
          required
        />

        <FormInput
          type="email"
          name="email"
          value={email}
          handleChange={handleChange}
          label="E-mail"
          required
        />

        <FormInput
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
          label="Password"
          required
        />

        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          handleChange={handleChange}
          label="Confirm Password"
          required
        />

        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </SignUpContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  createUserEmailStart: (displayName, email, password) =>
    dispatch(createUserEmailStart({ displayName, email, password }))
});

export default connect(null, mapDispatchToProps)(SignUpComponent);
