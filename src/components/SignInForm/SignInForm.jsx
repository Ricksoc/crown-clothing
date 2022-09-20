import "./SignInForm.scss";

import {
  signInWithGooglePopup,
  signInUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";

import { useState } from "react";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";

const SignInForm = () => {
  const defaultFormFields = {
    email: "",
    password: "",
  };

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
      const { user } = await signInUserWithEmailAndPassword(email, password);
      console.log(user);
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
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  return (
    <div className="sign-up-container">
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
        <div className="buttons-container">
          <Button
            inputProps={{
              type: "submit",
            }}
          >
            Submit
          </Button>
          <Button
            buttonType="google"
            inputProps={{ type: "button", onClick: logGoogleUser }}
          >
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
