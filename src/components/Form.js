import { useState } from "react";
import Input from "./formComponents/Input";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  return (
    <form data-testid="form" title="Form" style={formStyle}>
      <Input
        nameLabel="Email address"
        type="email"
        id="email"
        placeholder=""
        keyState={email}
        setter={setEmail}
      />
      <Input
        nameLabel="Password"
        type="password"
        id="password"
        placeholder=""
        keyState={password}
        setter={setPassword}
      />

      <Input
        nameLabel="Confirm Password"
        type="password"
        id="password2"
        placeholder=""
        keyState={password2}
        setter={setPassword2}
      />

      <button>Submit</button>
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
