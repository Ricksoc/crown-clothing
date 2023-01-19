import { SignUpContainer } from "./SignUpForm.style";

import { useState } from "react";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";

import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields((prevFields) => ({ ...prevFields, [name]: value }));
  };

  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          inputProps={{
            type: "text",
            name: "displayName",
            value: displayName,
            required: true,
            onChange: handleChange,
          }}
        />
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
        <FormInput
          label="Confirm Password"
          inputProps={{
            type: "password",
            name: "confirmPassword",
            value: confirmPassword,
            required: true,
            onChange: handleChange,
          }}
        />
        <Button
          inputProps={{
            type: "submit",
          }}
        >
          Submit
        </Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
