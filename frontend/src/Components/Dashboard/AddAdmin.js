import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../Hooks/useAuthContext";
import { Button, Form, Input } from "antd";
import "./Styles/AAstyle.css"

export default function AddAdmin() {
  const { dispatch } = useAuthContext();
  const [email, setEmail] = useState("");
  const [error, seterror] = useState("");
  const [password, setPassword] = useState("");
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
        navigate("/dashboard/viewadmins");
      })
      .catch((error) => {
        console.error(error.response.data.error);
        seterror(error.response.data.error);
      });
  };
  return (
    <div className="d-flex align-items-center justify-content-center login">
      <div className="aaMainDiv">
        <h1 className="aah1">Add an Admin</h1>
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
            <Input.Password placeholder="input password"/>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Add
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
