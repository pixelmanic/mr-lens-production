import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../Hooks/useAuthContext";
import { Button, Form, Input } from "antd";
export default function Login() {
  const { dispatch } = useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [serverError, setServerError] = useState(null);

  let navigate = useNavigate();
  let handleClick = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:8000/admins/signup",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        const data = response.data;
        let updatedUser = {
          token: data.Token,
          name: data.email,
        };
        localStorage.setItem("token", updatedUser.token);
        dispatch({ type: "LOGIN", payload: updatedUser });
        navigate("/dashboard");
      })
      .catch((error) => {
        if (email && password) {
          setServerError(error.response.data.error);
        }
      });
  };

  const ErrorMessage = ({ error }) => {
    if (!error) {
      return null;
    }

    return <div style={{ color: "red", marginBottom: "1rem" }}>{error}</div>;
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center login"
      style={{ height: "100vh" }}
    >
      <Form
        name="basic"
        onSubmit={(e) => {}}
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
        onSubmitCapture={handleClick}
      >
        <Form.Item
          name={["user", "email"]}
          label="Email"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            placeholder="input Email"
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <ErrorMessage error={serverError} />
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
