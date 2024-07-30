import React, { useState } from "react";
import { Link } from "react-router-dom";
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

import { FaChevronDown, FaChevronUp, FaBars } from "react-icons/fa";

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
    <>
      <div className="flex items-start">
        <div
          className={`fixed top-0 left-0 h-screen bg-[#0E84ED] border-r border-gray-300 flex flex-col p-8 gap-7 ${
            isExpanded ? "w-[276PX]" : "basis-[5%]"
          }`}
        >
          <button onClick={toggleSidebar} className="text-white mb-4">
            <FaBars />
          </button>
          <Link to="/" className="text-white flex items-center gap-2">
            <img src={dashboardIcon} alt="Dashboard" className="w-6 h-6" />
            {isExpanded && "Dashboard"}
          </Link>
          <div>
            <div
              className="text-white flex items-center gap-2 cursor-pointer"
              onClick={() => toggleSection("purchase")}
            >
              <img src={purchaseIcon} alt="Purchase" className="w-6 h-6 " />
              {isExpanded && "Purchase"}
              {openSection === "purchase" ? (
                <FaChevronUp className="ml-auto" />
              ) : (
                <FaChevronDown className="ml-auto" />
              )}
            </div>
            {openSection === "purchase" && isExpanded && (
              <div className="ml-8 mt-4">
                <Link
                  to="/purchase/order"
                  className="text-white gap-2 mb-4 flex  "
                >
                  <img
                    src={purchaseOder}
                    alt="Purchase Order"
                    className="w-6 h-6"
                  />
                  Purchase Order
                </Link>
                <Link
                  to="/purchase/order"
                  className="text-white h-4px  gap-2 mb-4 flex  "
                >
                  <img
                    src={purchaseReceive}
                    alt="Purchase Order"
                    className="w-6 h-6"
                  />
                  Purchase Receive
                </Link>
                <Link
                  to="/purchase/order"
                  className="text-white gap-2 mb-4 flex  "
                >
                  <img
                    src={purchaseReturn}
                    alt="Purchase Order"
                    className="w-6 h-6"
                  />
                  Purchase Return
                </Link>
                <Link
                  to="/purchase/order"
                  className="text-white gap-2 mb-4 flex  "
                >
                  <img
                    src={suppliers}
                    alt="Purchase Order"
                    className="w-6 h-6"
                  />
                  Suppliers
                </Link>
              </div>
            )}
          </div>
          <div>
            <div
              className="text-white flex items-center gap-2 cursor-pointer"
              onClick={() => toggleSection("sales")}
            >
              <img src={salesIcon} alt="Sales" className="w-6 h-6" />
              {isExpanded && "Sales"}
              {openSection === "sales" ? (
                <FaChevronUp className="ml-auto" />
              ) : (
                <FaChevronDown className="ml-auto" />
              )}
            </div>
            {openSection === "sales" && isExpanded && (
              <div className="ml-8 mt-4 ">
                <Link
                  to="/purchase/order"
                  className="text-white gap-2 mb-4 flex  "
                >
                  <img
                    src={salesIcon}
                    alt="Purchase Order"
                    className="w-6 h-6"
                  />
                  Sales
                </Link>
                <Link
                  to="/purchase/order"
                  className="text-white gap-2 mb-4 flex  "
                >
                  <img src={pos} alt="Purchase Order" className="w-6 h-6" />
                  POS
                </Link>
                <Link
                  to="/purchase/order"
                  className="text-white gap-2 mb-4 flex  "
                >
                  <img
                    src={salesReturn}
                    alt="Purchase Order"
                    className="w-6 h-6"
                  />
                  Sales Return
                </Link>
              </div>
            )}
          </div>
          <div>
            <div
              className="text-white flex items-center gap-2 cursor-pointer"
              onClick={() => toggleSection("inventory")}
            >
              <img src={inventoryIcon} alt="Inventory" className="w-6 h-6" />
              {isExpanded && "Inventory"}
              {openSection === "inventory" ? (
                <FaChevronUp className="ml-auto" />
              ) : (
                <FaChevronDown className="ml-auto" />
              )}
            </div>
            {openSection === "inventory" && isExpanded && (
              <div className="ml-8 mt-4">
                <Link
                  to="/purchase/order"
                  className="text-white gap-2 mb-4 flex  "
                >
                  <img src={pos} alt="Purchase Order" className="w-6 h-6" />
                  POS
                </Link>
                <Link
                  to="/purchase/order"
                  className="text-white gap-2 mb-4 flex  "
                >
                  <img
                    src={category}
                    alt="Purchase Order"
                    className="w-6 h-6"
                  />
                  Sales A/C
                </Link>
                <Link
                  to="/purchase/order"
                  className="text-white gap-2 mb-4 flex  "
                >
                  <img
                    src={suppliers}
                    alt="Purchase Order"
                    className="w-6 h-6"
                  />
                  Journal Voucher
                </Link>
                <Link
                  to="/purchase/order"
                  className="text-white gap-2 mb-4 flex  "
                >
                  <img
                    src={priceCheck}
                    alt="Purchase Order"
                    className="w-6 h-6"
                  />
                  Salary A/C
                </Link>
                <Link
                  to="/purchase/order"
                  className="text-white gap-2 mb-4 flex  "
                >
                  <img
                    src={pakageCube}
                    alt="Purchase Order"
                    className="w-6 h-6"
                  />
                  Employee Details
                </Link>
                <Link
                  to="/purchase/order"
                  className="text-white gap-2 mb-4 flex  "
                >
                  <img
                    src={pakageCube}
                    alt="Purchase Order"
                    className="w-6 h-6"
                  />
                  Tax
                </Link>
              </div>
            )}
          </div>
          <div>
            <div
              className="text-white flex items-center gap-2 cursor-pointer"
              onClick={() => toggleSection("crm")}
            >
              <img src={crmIcon} alt="CRM" className="w-6 h-6" />
              {isExpanded && "CRM"}
              {openSection === "crm" ? (
                <FaChevronUp className="ml-auto" />
              ) : (
                <FaChevronDown className="ml-auto" />
              )}
            </div>
            {openSection === "crm" && isExpanded && (
              <div className="ml-8 mt-4">
                <Link
                  to="/purchase/order"
                  className="text-white gap-2 mb-4 flex  "
                >
                  <img src={contact} alt="Purchase Order" className="w-6 h-6" />
                  Contacts
                </Link>
                <Link
                  to="/purchase/order"
                  className="text-white gap-2 mb-4 flex  "
                >
                  <img src={vendor} alt="Purchase Order" className="w-6 h-6" />
                  Sales Person Assign
                </Link>
                <Link
                  to="/purchase/order"
                  className="text-white gap-2 mb-4 flex  "
                >
                  <img
                    src={opportunity}
                    alt="Purchase Order"
                    className="w-6 h-6"
                  />
                  Opportunity Details
                </Link>
                <Link
                  to="/purchase/order"
                  className="text-white gap-2 mb-4 flex  "
                >
                  <img
                    src={openForm}
                    alt="Purchase Order"
                    className="w-6 h-6"
                  />
                  Form
                </Link>
                <Link
                  to="/purchase/order"
                  className="text-white gap-2 mb-4 flex  "
                >
                  <img
                    src={reporting}
                    alt="Purchase Order"
                    className="w-6 h-6"
                  />
                  Reporting
                </Link>
              </div>
            )}
          </div>
          <div>
            <div
              className="text-white flex items-center gap-2 cursor-pointer"
              onClick={() => toggleSection("productConfiguration")}
            >
              <img
                src={productConfigurationIcon}
                alt="Product Configuration"
                className="w-6 h-6"
              />
              {isExpanded && "Product Configuration"}
              {openSection === "productConfiguration" ? (
                <FaChevronUp className="ml-auto" />
              ) : (
                <FaChevronDown className="ml-auto" />
              )}
            </div>
            {openSection === "productConfiguration" && isExpanded && (
              <div className="ml-8 mt-4">
                <Link
                  to="/purchase/order"
                  className="text-white gap-2 mb-4 flex  "
                >
                  <img src={contact} alt="Purchase Order" className="w-6 h-6" />
                  Category
                </Link>
                <Link
                  to="/purchase/order"
                  className="text-white gap-2 mb-4 flex  "
                >
                  <img src={vendor} alt="Purchase Order" className="w-6 h-6" />
                  Sub-Category
                </Link>
                <Link
                  to="/purchase/order"
                  className="text-white gap-2 mb-4 flex  "
                >
                  <img
                    src={opportunity}
                    alt="Purchase Order"
                    className="w-6 h-6"
                  />
                  Product Type
                </Link>
                <Link
                  to="/purchase/order"
                  className="text-white gap-2 mb-4 flex  "
                >
                  <img
                    src={openForm}
                    alt="Purchase Order"
                    className="w-6 h-6"
                  />
                  Product Group
                </Link>
                <Link
                  to="/purchase/order"
                  className="text-white gap-2 mb-4 flex  "
                >
                  <img
                    src={openForm}
                    alt="Purchase Order"
                    className="w-6 h-6"
                  />
                  Product Master
                </Link>
              </div>
            )}
          </div>
          <div>
            <div
              className="text-white flex items-center gap-2 cursor-pointer"
              onClick={() => toggleSection("pendingTask")}
            >
              <img
                src={pendingTaskIcon}
                alt="Pending Task"
                className="w-6 h-6"
              />
              {isExpanded && "Pending Task"}
              {openSection === "pendingTask" ? (
                <FaChevronUp className="ml-auto" />
              ) : (
                <FaChevronDown className="ml-auto" />
              )}
            </div>
            {openSection === "pendingTask" && isExpanded && (
              <div className="ml-8 mt-4">
                <Link
                  to="/purchase/order"
                  className="text-white gap-2 mb-4 flex  "
                >
                  <img src={contact} alt="Purchase Order" className="w-6 h-6" />
                  Contacts
                </Link>
                <Link
                  to="/purchase/order"
                  className="text-white gap-2 mb-4 flex  "
                >
                  <img src={vendor} alt="Purchase Order" className="w-6 h-6" />
                  Sales Person Assign
                </Link>
                <Link
                  to="/purchase/order"
                  className="text-white gap-2 mb-4 flex  "
                >
                  <img
                    src={opportunity}
                    alt="Purchase Order"
                    className="w-6 h-6"
                  />
                  Opportunity Details
                </Link>
                <Link
                  to="/purchase/order"
                  className="text-white gap-2 mb-4 flex  "
                >
                  <img
                    src={openForm}
                    alt="Purchase Order"
                    className="w-6 h-6"
                  />
                  Customer Group
                </Link>
              </div>
            )}
          </div>
          <div>
            <div
              className="text-white flex items-center gap-2 cursor-pointer"
              onClick={() => toggleSection("customerRetention")}
            >
              <img
                src={customerRetentionIcon}
                alt="Customer Retention"
                className="w-6 h-6"
              />
              {isExpanded && "Customer Retention"}
              {openSection === "customerRetention" ? (
                <FaChevronUp className="ml-auto" />
              ) : (
                <FaChevronDown className="ml-auto" />
              )}
            </div>
            {openSection === "customerRetention" && isExpanded && (
              <div className="ml-8 mt-4">
                <Link
                  to="/purchase/order"
                  className="text-white gap-2 mb-4 flex  "
                >
                  <img src={contact} alt="Purchase Order" className="w-6 h-6" />
                  Contacts
                </Link>
                <Link
                  to="/purchase/order"
                  className="text-white gap-2 mb-4 flex  "
                >
                  <img src={vendor} alt="Purchase Order" className="w-6 h-6" />
                  Sales Person Assign
                </Link>
                <Link
                  to="/purchase/order"
                  className="text-white gap-2 mb-4 flex  "
                >
                  <img
                    src={opportunity}
                    alt="Purchase Order"
                    className="w-6 h-6"
                  />
                  Opportunity Details
                </Link>
                <Link
                  to="/purchase/order"
                  className="text-white gap-2 mb-4 flex  "
                >
                  <img
                    src={openForm}
                    alt="Purchase Order"
                    className="w-6 h-6"
                  />
                  Customer Group
                </Link>
              </div>
            )}
          </div>
          <div>
            <div
              className="text-white flex items-center gap-2 cursor-pointer"
              onClick={() => toggleSection("setting")}
            >
              <img src={settingIcon} alt="Settings" className="w-6 h-6" />
              {isExpanded && "Settings"}
              {openSection === "setting" ? (
                <FaChevronUp className="ml-auto" />
              ) : (
                <FaChevronDown className="ml-auto" />
              )}
            </div>
            {openSection === "setting" && isExpanded && (
              <div className="ml-8 mt-4">
                <Link
                  to="/purchase/order"
                  className="text-white gap-2 mb-4 flex  "
                >
                  <img src={contact} alt="Purchase Order" className="w-6 h-6" />
                  Contacts
                </Link>
                <Link
                  to="/purchase/order"
                  className="text-white gap-2 mb-4 flex  "
                >
                  <img src={vendor} alt="Purchase Order" className="w-6 h-6" />
                  Sales Person Assign
                </Link>
                <Link
                  to="/purchase/order"
                  className="text-white gap-2 mb-4 flex  "
                >
                  <img
                    src={opportunity}
                    alt="Purchase Order"
                    className="w-6 h-6"
                  />
                  Opportunity Details
                </Link>
                <Link
                  to="/purchase/order"
                  className="text-white gap-2 mb-4 flex  "
                >
                  <img
                    src={openForm}
                    alt="Purchase Order"
                    className="w-6 h-6"
                  />
                  Customer Group
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className="flex-1 basis">{/* Main content here */}</div>
      </div>
    </>
  );
};

export default Sidebar;
