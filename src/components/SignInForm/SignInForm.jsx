import { SignUpContainer, ButtonsContainer } from "./SignInForm.styles";

import {
  signInWithGooglePopup,
  signInUserWithEmailAndPassword,
} from "../../utils/firebase/firebase";

import { useState } from "react";

import FormInput from "../FormInput/FormInput";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button";

const defaultFormFields = {
  email: "",
  password: "",
};
const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields((prevFields) => ({ ...prevFields, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };

  const logGoogleUser = async () => {
    await signInWithGooglePopup();
  };

  return (
    <SignUpContainer>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          inputProps={{
            type: "text",
            name: "email",
            value: email,
            required: true,
            onChange: handleChange,
          }}
        />
        <FormInput
          label="Password"
          inputProps={{
            type: "password",
            name: "password",
            value: password,
            required: true,
            onChange: handleChange,
          }}
        />
        <ButtonsContainer>
          <Button
            inputProps={{
              type: "submit",
            }}
          >
            Submit
          </Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            inputProps={{ type: "button", onClick: logGoogleUser }}
          >
            Google Sign In
          </Button>
        </ButtonsContainer>
      </form>
    </SignUpContainer>
  );
};

export default SignInForm;
