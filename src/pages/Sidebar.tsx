import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp, FaBars } from "react-icons/fa";

import dashboardIcon from "../assets/Dashboard.png";
import purchaseIcon from "../assets/purchase.png";
import salesIcon from "../assets/sales.png";
import inventoryIcon from "../assets/ic_outline-inventory.png";
import crmIcon from "../assets/Product_configuration.png";
import productConfigurationIcon from "../assets/Product_configuration.png";
import pendingTaskIcon from "../assets/pending-task.png";
import customerRetentionIcon from "../assets/customer_relation.png";
import settingIcon from "../assets/Setting.png";
import suppliers from "../assets/Suppliers.png";
import purchaseOder from "../assets/Purchase Order.png";
import purchaseReceive from "../assets/purchase Receive.png";
import purchaseReturn from "../assets/Purchase Return.png";
import pos from "../assets/order.png";
import salesReturn from "../assets/Sales return.png";
import category from "../assets/Category.png";
import priceCheck from "../assets/Price Check icon.png";
import pakageCube from "../assets/Pakage.png";
import contact from "../assets/contact.png";
import opportunity from "../assets/opportunity.png";
import reporting from "../assets/Reporting.png";
import openForm from "../assets/Open form icon.png";
import vendor from "../assets/vendor.png";

import ContactDetails from "./Contact";

const Sidebar: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex h-screen">
      <div
        className={`fixed top-0 left-0 h-full bg-[#0E84ED] border-r border-gray-300 flex flex-col p-4 gap-5 transition-all duration-300 ${
          isExpanded ? "w-[20%]" : "w-[65px]"
        }`}
      >
        <button
          onClick={toggleSidebar}
          className="text-white mb-10"
          aria-label="Toggle Sidebar"
        >
          <FaBars />
        </button>
        <Link
          to="/"
          className={`text-white flex items-center gap-2 ${
            isExpanded ? "justify-start" : "justify-center"
          }`}
        >
          <img src={dashboardIcon} alt="Dashboard" className="w-5 h-5" />
          {isExpanded && "Dashboard"}
        </Link>
        {[
          {
            name: "purchase",
            icon: purchaseIcon,
            links: [
              {
                to: "/purchase/order",
                img: purchaseOder,
                text: "Purchase Order",
              },
              {
                to: "/purchase/receive",
                img: purchaseReceive,
                text: "Purchase Receive",
              },
              {
                to: "/purchase/return",
                img: purchaseReturn,
                text: "Purchase Return",
              },
              { to: "/suppliers", img: suppliers, text: "Suppliers" },
            ],
          },
          {
            name: "sales",
            icon: salesIcon,
            links: [
              { to: "/sales", img: salesIcon, text: "Sales" },
              { to: "/pos", img: pos, text: "POS" },
              { to: "/sales/return", img: salesReturn, text: "Sales Return" },
            ],
          },
          {
            name: "inventory",
            icon: inventoryIcon,
            links: [
              { to: "/pos", img: pos, text: "POS" },
              { to: "/sales/account", img: category, text: "Sales A/C" },
              {
                to: "/journal/voucher",
                img: suppliers,
                text: "Journal Voucher",
              },
              { to: "/salary/account", img: priceCheck, text: "Salary A/C" },
              {
                to: "/employee/details",
                img: pakageCube,
                text: "Employee Details",
              },
              { to: "/tax", img: pakageCube, text: "Tax" },
            ],
          },
          {
            name: "crm",
            icon: crmIcon,
            links: [
              { to: "/crm/contact", img: contact, text: "Contacts" },
              {
                to: "/crm/sales-person",
                img: vendor,
                text: "Sales Person Assign",
              },
              {
                to: "/crm/opportunity",
                img: opportunity,
                text: "Opportunity Details",
              },
              { to: "/crm/form", img: openForm, text: "Form" },
              { to: "/crm/reporting", img: reporting, text: "Reporting" },
            ],
          },
          {
            name: "productConfiguration",
            icon: productConfigurationIcon,
            links: [
              { to: "/product/category", img: contact, text: "Category" },
              {
                to: "/product/sub-category",
                img: vendor,
                text: "Sub-Category",
              },
              { to: "/product/type", img: opportunity, text: "Product Type" },
              { to: "/product/group", img: openForm, text: "Product Group" },
              { to: "/product/master", img: openForm, text: "Product Master" },
            ],
          },
          {
            name: "pendingTask",
            icon: pendingTaskIcon,
            links: [
              { to: "/tasks/contacts", img: contact, text: "Contacts" },
              {
                to: "/tasks/sales-person",
                img: vendor,
                text: "Sales Person Assign",
              },
              {
                to: "/tasks/opportunity",
                img: opportunity,
                text: "Opportunity Details",
              },
              {
                to: "/tasks/customer-group",
                img: openForm,
                text: "Customer Group",
              },
            ],
          },
          {
            name: "customerRetention",
            icon: customerRetentionIcon,
            links: [
              { to: "/retention/contacts", img: contact, text: "Contacts" },
              {
                to: "/retention/sales-person",
                img: vendor,
                text: "Sales Person Assign",
              },
              {
                to: "/retention/opportunity",
                img: opportunity,
                text: "Opportunity Details",
              },
              {
                to: "/retention/customer-group",
                img: openForm,
                text: "Customer Group",
              },
            ],
          },
          {
            name: "setting",
            icon: settingIcon,
            links: [
              { to: "/settings/contacts", img: contact, text: "Contacts" },
              {
                to: "/settings/sales-person",
                img: vendor,
                text: "Sales Person Assign",
              },
              {
                to: "/settings/opportunity",
                img: opportunity,
                text: "Opportunity Details",
              },
              {
                to: "/settings/customer-group",
                img: openForm,
                text: "Customer Group",
              },
            ],
          },
        ].map(({ name, icon, links }) => (
          <div key={name}>
            <div
              className="text-white flex items-center gap-2 cursor-pointer"
              onClick={() => toggleSection(name)}
            >
              <img src={icon} alt={name} className="w-6 h-6" />
              {isExpanded && name.charAt(0).toUpperCase() + name.slice(1)}
              {openSection === name ? (
                <FaChevronUp className="ml-auto" />
              ) : (
                <FaChevronDown className="ml-auto" />
              )}
            </div>
            {openSection === name && isExpanded && (
              <div className="ml-8 mt-4">
                {links.map(({ to, img, text }) => (
                  <Link
                    key={text}
                    to={to}
                    className="text-white gap-2 mb-4 flex items-center"
                  >
                    <img src={img} alt={text} className="w-6 h-6" />
                    {text}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div
        className={`flex-1 p-4 transition-all duration-300 ${
          isExpanded ? "ml-[20%]" : "ml-[80px]"
        }`}
      >
        <ContactDetails />
      </div>
    </div>
  );
};

export default Sidebar;
