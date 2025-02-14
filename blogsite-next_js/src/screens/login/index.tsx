"use client"
import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Card } from "antd";
import Link from "next/link";
import { LoginInput } from "@src/apis";

type LoginScreenProps = {
  onSignIn: (v: LoginInput) => Promise<void>;
};

const LoginScreen = ({ onSignIn }: LoginScreenProps) => {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: LoginInput) => {
    try {
      setLoading(true);
      await onSignIn(values);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#2b6cb0] to-[#718096]">
      <Card className="w-full max-w-md p-6 shadow-lg bg-white rounded-lg">
        <h1 className="text-3xl font-bold text-[#2b6cb0] text-center mb-6">
          Welcome Back
        </h1>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label={<span className="text-[#2d3748] font-medium">Email</span>}
            name="username"
            rules={[{ required: true, message: "Please enter your email!" }]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>
          <Form.Item
            label={<span className="text-[#2d3748] font-medium">Password</span>}
            name="password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>
          <Form.Item className="flex justify-between items-center">
            <Checkbox className="text-[#2d3748]">Remember me</Checkbox>
            <Link href="/forgot-password" className="text-[#2b6cb0] hover:underline">
              Forgot password?
            </Link>
          </Form.Item>
          <Form.Item>
            <Button
              loading={loading}
              type="primary"
              htmlType="submit"
              className="w-full bg-[#2b6cb0] border-none text-white font-semibold py-2 hover:bg-[#2c5282]"
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default LoginScreen;
