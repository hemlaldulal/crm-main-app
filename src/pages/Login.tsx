import React, { useState } from "react";
import eyeOn from "../assets/eye_on.png";
import eyeOff from "../assets/eye_off.png";

const LoginSignup: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    loginEmail: "",
    loginPassword: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    signupEmail: "",
    signupPassword: "",
  });

  const [formErrors, setFormErrors] = useState({
    loginEmail: "",
    loginPassword: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    signupEmail: "",
    signupPassword: "",
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(e.target.value);
    setFormData({ ...formData, [name]: value });
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = { ...formErrors };
    newErrors.loginEmail = formData.loginEmail ? "" : "Email is required";
    newErrors.loginPassword = formData.loginPassword
      ? ""
      : "Password is required";
    if (formData.loginEmail && !validateEmail(formData.loginEmail)) {
      newErrors.loginEmail = "Email is not valid";
    }
    setFormErrors(newErrors);

    if (!newErrors.loginEmail && !newErrors.loginPassword) {
      console.log("Login form submitted", {
        loginEmail: formData.loginEmail,
        loginPassword: formData.loginPassword,
      });
    }
  };

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = { ...formErrors };
    newErrors.firstName = formData.firstName ? "" : "First name is required";
    newErrors.lastName = formData.lastName ? "" : "Last name is required";
    newErrors.phoneNumber = formData.phoneNumber
      ? ""
      : "Phone number is required";
    newErrors.signupEmail = formData.signupEmail ? "" : "Email is required";
    newErrors.signupPassword = formData.signupPassword
      ? ""
      : "Password is required";
    if (formData.signupEmail && !validateEmail(formData.signupEmail)) {
      newErrors.signupEmail = "Email is not valid";
    }
    setFormErrors(newErrors);

    if (
      !newErrors.firstName &&
      !newErrors.lastName &&
      !newErrors.phoneNumber &&
      !newErrors.signupEmail &&
      !newErrors.signupPassword
    ) {
      console.log("Signup form submitted", {
        firstName: formData.firstName,
        lastName: formData.lastName,
        phoneNumber: formData.phoneNumber,
        signupEmail: formData.signupEmail,
        signupPassword: formData.signupPassword,
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 flex items-center justify-center">
          Login or Signup
        </h1>
        <div className="flex justify-around mb-6">
          <button
            className={`border-b-2 pb-2 ${
              isLogin
                ? "border-blue-500 text-blue-500"
                : "border-transparent text-gray-500"
            }`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`border-b-2 pb-2 ${
              !isLogin
                ? "border-blue-500 text-blue-500"
                : "border-transparent text-gray-500"
            }`}
            onClick={() => setIsLogin(false)}
          >
            Create account
          </button>
        </div>
        {isLogin ? (
          <form onSubmit={handleLoginSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="loginEmail"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.loginEmail}
                onChange={handleInputChange}
              />
              {formErrors.loginEmail && (
                <p className="text-red-500 text-sm">{formErrors.loginEmail}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="loginPassword"
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.loginPassword}
                  onChange={handleInputChange}
                />
                <div
                  className="absolute inset-y-0 right-0 flex items-center px-4 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  <img
                    src={showPassword ? eyeOn : eyeOff}
                    alt="Toggle Password Visibility"
                    className="w-6 h-6"
                  />
                </div>
              </div>
              {formErrors.loginPassword && (
                <p className="text-red-500 text-sm">
                  {formErrors.loginPassword}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              Login
            </button>
            <p className="mt-4 text-center text-gray-600">
              Forgot password?{" "}
              <a href="#" className="text-blue-500">
                Click here
              </a>
            </p>
          </form>
        ) : (
          <form onSubmit={handleSignupSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700">First name</label>
                <input
                  type="text"
                  name="firstName"
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
                {formErrors.firstName && (
                  <p className="text-red-500 text-sm">{formErrors.firstName}</p>
                )}
              </div>
              <div>
                <label className="block text-gray-700">Last name</label>
                <input
                  type="text"
                  name="lastName"
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
                {formErrors.lastName && (
                  <p className="text-red-500 text-sm">{formErrors.lastName}</p>
                )}
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Phone number</label>
              <input
                type="text"
                name="phoneNumber"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.phoneNumber}
                onChange={handleInputChange}
              />
              {formErrors.phoneNumber && (
                <p className="text-red-500 text-sm">{formErrors.phoneNumber}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="signupEmail"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.signupEmail}
                onChange={handleInputChange}
              />
              {formErrors.signupEmail && (
                <p className="text-red-500 text-sm">{formErrors.signupEmail}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="signupPassword"
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.signupPassword}
                  onChange={handleInputChange}
                />
                <div
                  className="absolute inset-y-0 right-0 flex items-center px-4 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  <img
                    src={showPassword ? eyeOn : eyeOff}
                    alt="Toggle Password Visibility"
                    className="w-6 h-6"
                  />
                </div>
              </div>
              {formErrors.signupPassword && (
                <p className="text-red-500 text-sm">
                  {formErrors.signupPassword}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              Create account
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
