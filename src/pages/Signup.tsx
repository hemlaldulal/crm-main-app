import React, { useState } from "react";
import axios from "axios";
import { Input } from "../components/Input/Input";
import { Button } from "../components/Button/Button";

const SignupForm: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-lg">
        <h2 className="text-2xl font-bold text-center">Signup</h2>
        <form className="space-y-6" onSubmit={handleSignup}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <Input
              name="email"
              type="email"
              size="medium"
              required={true}
              placeholder="Enter your email"
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <Input
              name="password"
              type="password"
              size="medium"
              required={true}
              placeholder="Enter your password"
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-center">
            <Button
              type="primary"
              flavor="default"
              label="Signup"
              buttonType="submit"
            />
          </div>
        </form>
        {message && <p className="text-center text-red-500">{message}</p>}
      </div>
    </div>
  );
};

export default SignupForm;
