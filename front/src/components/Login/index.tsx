import React, { useState } from "react";
import { Link } from "react-router-dom";

// components
import CommonButton from "../Common/Button";
import CommonTextField from "../Common/TextField";
import AuthPage from "../Common/AuthPage";

// styled components
import { FormContainer, ButtonContainer, LinksContainer } from "./Login.styles";

export default function Login() {
  return (
    <AuthPage title={"Sign In"}>
      <FormContainer>
        <CommonTextField
          autoFocus={true}
          fullWidth={true}
          id="email"
          label="Email Address"
          name="email"
          value={"ale"}
        />
        <CommonTextField
          fullWidth={true}
          id="password"
          label="Password"
          name="password"
          value={"ale"}
        />
        <ButtonContainer>
          <CommonButton
            color={"primary"}
            fullWidth={true}
            text={"Sign In"}
            onClick={() => console.log("login")}
          />
        </ButtonContainer>
        <LinksContainer>
          <Link to="/register">{"Don't have an account? Sign Up"}</Link>
        </LinksContainer>
      </FormContainer>
    </AuthPage>
  );
}
