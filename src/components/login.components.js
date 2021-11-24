import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import './login.css'

const Login = () => {
  const [state, setState] = useState({
    username: "",
    password: "",
  });
  const history = useHistory();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (state.password === "admin") {
      console.log("admin");
      history.push("/DashAdmin");
    } else if (state.password === "manager") {
      console.log("manager");
      history.push("/DashManager");
    } else if (state.password === "employee") {
      console.log("emp");
      history.push("/DashEmp");
    } else if (state.password === "user") {
      console.log("user");
      history.push("/DashUser");
    } else {
      console.log("wrong");
    }
  };

  const validateForm = (e) => {
    return state.username.length > 0 && state.password.length > 0;
  };

  return (
    <div className="LoginForm">
      <form id="LoginForm" onSubmit={handleLogin}>
        <label>User Name</label>
        <input
          type="text"
          id="username"
          value={state.username}
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          type="password"
          id="password"
          value={state.password}
          onChange={handleChange}
        />
        <input type="submit" id="submit" value="Login" disabled={!validateForm()} />
      </form>
    </div>
  );
};

export default Login;
