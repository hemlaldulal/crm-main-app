// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./pages/Navbar";
import LoginForm from "./pages/Login";
import SignupForm from "./pages/Signup";

const Home: React.FC = () => <div>Home Page</div>;
const Products: React.FC = () => <div>Products Page</div>;
const Contact: React.FC = () => <div>Contact Us Page</div>;

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
      </Routes>
    </Router>
  );
};

export default App;
