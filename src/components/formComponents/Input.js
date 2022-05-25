const Input = (props) => {
  const { nameLabel, type, id, placeholder, keyState, setter } = props;

  const handleChange = (e) => {
    setter(e.target.value);
  };

  return (
    <>
      <label style={labelStyle} htmlFor={id}>
        {nameLabel}
      </label>
      <input
        role={id}
        value={keyState}
        onChange={handleChange}
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        style={inputsStyle}
      />
    </>
  );
};

const labelStyle = {
  marginBottom: 5,
};

const inputsStyle = {
  width: "100%",
  border: "1px solid #e4e4e4",
  maxWidth: "100%",
  padding: "12px 15px !important",
  background: "none",
  color: "#333",
  lineHeight: "1.42",
  borderRadius: "3px",
  fontSize: "1em",
  letterSpacing: "0em",
  outline: "none",
  marginBottom: "20px",
  height: 40,
  textAlign: "left",
  textIndent: "1rem",
};

export default Input;
