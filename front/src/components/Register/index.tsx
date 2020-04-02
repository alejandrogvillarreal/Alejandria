import React, { useState } from "react";
import { Link } from "react-router-dom";

// components
import CommonButton from "../Common/Button";
import CommonTextField from "../Common/TextField";
import AuthPage from "../Common/AuthPage";

// styled components
import { FormContainer, StyledDiv, LinksContainer } from "./Register.styles";

export default function Register() {
  return (
    <AuthPage title={"Sign Up"}>
      <FormContainer>
        <CommonTextField
          autoFocus={true}
          fullWidth={true}
          id="first_name"
          label="First name"
          name="first_name"
          value={"ale"}
        />
        <CommonTextField
          fullWidth={true}
          id="last_name"
          label="Last name"
          name="last_name"
          value={"villa"}
        />
        <CommonTextField
          fullWidth={true}
          id="email"
          label="Email Address"
          name="email"
          value={"ale@ale.com"}
        />
        <CommonTextField
          fullWidth={true}
          id="password"
          label="Password"
          name="password"
          value={"ale"}
        />
        <StyledDiv margin={"20px 0"}>
          <CommonButton
            color={"primary"}
            fullWidth={true}
            text={"Sign Up"}
            onClick={() => console.log("login")}
          />
        </StyledDiv>
        <LinksContainer>
          <Link to="/login">{"Already have an account? Sign in"}</Link>
        </LinksContainer>
      </FormContainer>
    </AuthPage>
  );
}
