import Input from "./formComponents/Input";
import useForm from "./useForm";

const Form = () => {
  const {
    signupInput,
    setSignUpInput,
    emailError,
    passwordError,
    handleClick,
  } = useForm();

  return (
    <form data-testid="form" title="Form" style={formStyle}>
      {emailError !== "" && <p style={{ color: "red" }}>{emailError}</p>}
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
      {passwordError !== "" && <p style={{ color: "red" }}>{passwordError}</p>}
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
