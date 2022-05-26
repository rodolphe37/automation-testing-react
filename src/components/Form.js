import { useState } from "react";
import Input from "./formComponents/Input";

const Form = () => {
  const [signupInput, setSignUpInput] = useState({
    email: "",
    password: "",
    password2: "",
  });
  const [error, setError] = useState({ email: "", password: "" });

  const handleClick = (e) => {
    e.preventDefault();
    if (!signupInput.email.includes("@")) {
      return setError({ email: "the email you input is invalid" });
    }
    if (signupInput.password !== signupInput.password2) {
      setError({ password: "Your password do no match" });
    }
  };

  return (
    <form data-testid="form" title="Form" style={formStyle}>
      {error.email !== "" && <p style={{ color: "red" }}>{error.email}</p>}
      <Input
        nameLabel="Email address"
        type="email"
        id="email"
        placeholder=""
        defaultValues={signupInput}
        keyState={signupInput.email}
        setter={setSignUpInput}
      />

      <Input
        nameLabel="Password"
        type="password"
        id="password"
        placeholder=""
        defaultValues={signupInput}
        keyState={signupInput.password}
        setter={setSignUpInput}
      />
      {error.password !== "" && (
        <p style={{ color: "red" }}>{error.password}</p>
      )}
      <Input
        nameLabel="Confirm Password"
        type="password"
        id="password2"
        placeholder=""
        defaultValues={signupInput}
        keyState={signupInput.password2}
        setter={setSignUpInput}
      />

      <button
        type="submit"
        className="btn btn-primary"
        onClick={handleClick}
        name="submit"
      >
        Submit
      </button>
    </form>
  );
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};
export default Form;
