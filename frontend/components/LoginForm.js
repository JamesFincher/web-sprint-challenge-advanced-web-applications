import React, { useEffect, useState } from "react";
import PT from "prop-types";

const initialFormValues = {
  username: "",
  password: "",
};
export default function LoginForm(props) {
  const { login, message, spinnerOn, redirectToArticles } = props;
  const [values, setValues] = useState(initialFormValues);
  // ✨ where are my props? Destructure them here

  const onChange = (evt) => {
    const { id, value } = evt.target;
    setValues({ ...values, [id]: value });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    const payload = `{
      "username": "${values.username}",
      "password": "${values.password}"
    }`;
    const { username, password } = values;
    login(payload);

    // ✨ implement
  };

  const isDisabled = () => {
    // ✨ implement
    // Trimmed username must be >= 3, and
    // trimmed password must be >= 8 for
    // the button to become enabled
  };
  useEffect(() => {
    if (localStorage.token) {
      redirectToArticles();
    }
  }, []);

  return (
    <form id="loginForm" onSubmit={onSubmit}>
      <h2>Login</h2>
      <input
        maxLength={20}
        value={values.username}
        onChange={onChange}
        placeholder="Enter username"
        id="username"
      />
      <input
        maxLength={20}
        value={values.password}
        onChange={onChange}
        placeholder="Enter password"
        id="password"
      />
      <button disabled={isDisabled()} id="submitCredentials">
        Submit credentials
      </button>
    </form>
  );
}

// 🔥 No touchy: LoginForm expects the following props exactly:
LoginForm.propTypes = {
  login: PT.func.isRequired,
};
