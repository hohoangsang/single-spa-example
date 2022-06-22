import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Form,
  Input,
  notification,
  Spin,
  Typography,
} from "antd";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";

const { Title } = Typography;

const iconLoading = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export default function LoginPage() {
  const [api, contextHolder] = notification.useNotification();

  const [loadingSignIn, setLoadingSignIn] = useState(false);

  const navigate = useNavigate();

  const openErrorNotification = () => {
    const args = {
      message: "Faild to Sign In!",
      description: "Username or password is incorrect. Please try again",
    };

    notification.error(args);
  };

  const onFinish = (values: any) => {
    console.log(values);
    if (values.username !== "admin" || values.password !== "1") {
      return openErrorNotification();
    }

    localStorage.setItem("token", "new token");

    setLoadingSignIn(true);

    setTimeout(() => {
      navigate("/", { replace: true });
      setLoadingSignIn(true);
    }, 1000);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="login__container">
      <div className="login__form">
        <Title className="login__title">Sign In</Title>
        <Form
          name="login"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 19 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input
              allowClear
              style={{
                borderRadius: "10px",
              }}
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              style={{
                borderRadius: "10px",
              }}
            />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 5, span: 19 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 5, span: 19 }}>
            <Button
              type={"primary"}
              htmlType="submit"
              style={{
                borderRadius: "10px",
              }}
              disabled={loadingSignIn}
            >
              Sign in &nbsp;
              {loadingSignIn && <Spin indicator={iconLoading} />}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
