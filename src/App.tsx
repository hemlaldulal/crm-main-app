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

// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Sidebar from "./pages/Sidebar";
// import ContactDetails from "./pages/Contact";
// import TableHeader from "./pages/TableHead";

// const Dashboard: React.FC = () => <div>Dashboard Page</div>;
// const Purchase: React.FC = () => <div>Purchase Page</div>;
// const Sales: React.FC = () => <div>Sales Page</div>;
// const Inventory: React.FC = () => <div>Inventory Page</div>;
// const CRM: React.FC = () => <div>CRM Page</div>;
// const ProductConfiguration: React.FC = () => (
//   <div>Product Configuration Page</div>
// );
// const PendingTask: React.FC = () => <div>Pending Task Page</div>;
// const CustomerRetention: React.FC = () => <div>Customer Retention Page</div>;
// const Setting: React.FC = () => <div>Setting Page</div>;

// const App: React.FC = () => {
//   return (
//     <Router>
//       <Sidebar />
//       <div className="ml-64 pt-14">
//         <Routes>
//           <Route path="/" element={<Dashboard />} />
//           <Route path="/purchase" element={<Purchase />} />
//           <Route path="/sales" element={<Sales />} />
//           <Route path="/inventory" element={<Inventory />} />
//           <Route path="/crm" element={<CRM />} />
//           <Route path="crm/contact" element={<ContactDetails />} />
//           <Route
//             path="/product-configuration"
//             element={<ProductConfiguration />}
//           />
//           <Route path="/pending-task" element={<PendingTask />} />
//           <Route path="/customer-retention" element={<CustomerRetention />} />
//           <Route path="/setting" element={<Setting />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;
