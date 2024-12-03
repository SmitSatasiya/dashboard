import React, { useState } from "react";
import { FaUser, FaShoppingCart, FaFileAlt, FaSignInAlt } from "react-icons/fa";

const Sidebar = () => {
  const [openSection, setOpenSection] = useState("");
  const [selectedItem, setSelectedItem] = useState("default");

  // Function to toggle sections
  const toggleSection = (section) => {
    setOpenSection(openSection === section ? "" : section);
  };

  // Function to handle menu item selection
  const handleMenuItemClick = (menuItem) => {
    setSelectedItem(menuItem);
  };

  // Function to dynamically set styles
  const getDynamicStyle = (menuItem) => {
    return selectedItem === menuItem
      ? { backgroundColor: "#DBDDE1", borderRadius: "5px", color: "#000" }
      : {};
  };

  // Function to check if a parent section should be active
  const isParentActive = (items) => items.includes(selectedItem);

  return (
    <div
      className="d-flex flex-column vh-100 bg-light p-3"
      style={{ width: "250px" }}
    >
      <div>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="fs-4 text-secondary me-1 duo-icon duo-icon-box-2"
            data-duoicon="box-2"
          >
            <path
              fill="#F9BC06"
              d="m20.765 7.982.022.19.007.194v7.268a2.5 2.5 0 0 1-1.099 2.07l-.15.095-6.295 3.634-.124.067-.126.06v-8.99l7.765-4.588Z"
              class="duoicon-secondary-layer"
              opacity=".3"
            ></path>
            <path
              fill="#F9BC06"
              d="m13.25 2.567 6.294 3.634c.05.03.1.06.148.092L12 10.838 4.308 6.293a2.81 2.81 0 0 1 .148-.092l6.294-3.634a2.498 2.498 0 0 1 2.5 0Z"
              class="duoicon-primary-layer"
            ></path>
            <path
              fill="#F9BC06"
              d="M3.235 7.982 11 12.571v8.988a2.339 2.339 0 0 1-.25-.126l-6.294-3.634a2.502 2.502 0 0 1-1.25-2.165V8.366c0-.13.01-.258.03-.384h-.001Z"
              class="duoicon-secondary-layer"
              opacity=".3"
            ></path>
          </svg>
        </span>
        <h4 className="text-center mb-3" style={{ display: "inline-block" }}>
          Dashbrd
        </h4>
      </div>
      {/* Dashboards */}
      <div>
        <div
          className="d-flex justify-content-between align-items-center p-2"
          style={
            isParentActive(["default", "crypto", "saas"])
              ? {
                  backgroundColor: "#DBDDE1",
                  color: "#000",
                  borderRadius: "5px",
                }
              : { cursor: "pointer" }
          }
          onClick={() => toggleSection("dashboards")}
        >
          <span>📊 Dashboards</span>
          <span>{openSection === "dashboards" ? "-" : "+"}</span>
        </div>
        {openSection === "dashboards" && (
          <div className="ps-3">
            <a
              href="#"
              className="d-block p-2 text-decoration-none"
              style={getDynamicStyle("default")}
              onClick={() => handleMenuItemClick("default")}
            >
              Default
            </a>
            <a
              href="#"
              className="d-block p-2 text-decoration-none"
              style={getDynamicStyle("crypto")}
              onClick={() => handleMenuItemClick("crypto")}
            >
              Crypto
            </a>
            <a
              href="#"
              className="d-block p-2 text-decoration-none"
              style={getDynamicStyle("saas")}
              onClick={() => handleMenuItemClick("saas")}
            >
              SaaS
            </a>
          </div>
        )}
      </div>

      {/* Customers */}
      <div>
        <div
          className="d-flex justify-content-between align-items-center p-2"
          style={
            isParentActive(["customers", "customerDetails", "newCustomer"])
              ? {
                  backgroundColor: "#DBDDE1",
                  color: "#000",
                  borderRadius: "5px",
                }
              : { cursor: "pointer" }
          }
          onClick={() => toggleSection("customers")}
        >
          <span>
            <FaUser className="me-2" /> Customers
          </span>
          <span>{openSection === "customers" ? "-" : "+"}</span>
        </div>
        {openSection === "customers" && (
          <div className="ps-3">
            <a
              href="#"
              className="d-block p-2 text-decoration-none"
              style={getDynamicStyle("customers")}
              onClick={() => handleMenuItemClick("customers")}
            >
              Customers
            </a>
            <a
              href="#"
              className="d-block p-2 text-decoration-none"
              style={getDynamicStyle("customerDetails")}
              onClick={() => handleMenuItemClick("customerDetails")}
            >
              Customer Details
            </a>
            <a
              href="#"
              className="d-block p-2 text-decoration-none"
              style={getDynamicStyle("newCustomer")}
              onClick={() => handleMenuItemClick("newCustomer")}
            >
              New Customer
            </a>
          </div>
        )}
      </div>

      {/* Orders */}
      <div>
        <a
          href="#"
          className="d-flex align-items-center p-2 text-decoration-none"
          style={getDynamicStyle("orders")}
          onClick={() => handleMenuItemClick("orders")}
        >
          <FaShoppingCart className="me-2" /> Orders
        </a>
      </div>

      {/* Posts */}
      <div>
        <a
          href="#"
          className="d-flex align-items-center p-2 text-decoration-none"
          style={getDynamicStyle("posts")}
          onClick={() => handleMenuItemClick("posts")}
        >
          <FaFileAlt className="me-2" /> Posts
        </a>
      </div>

      {/* Authentication */}
      <div>
        <a
          href="#"
          className="d-flex align-items-center p-2 text-decoration-none"
          style={getDynamicStyle("authentication")}
          onClick={() => handleMenuItemClick("authentication")}
        >
          <FaSignInAlt className="me-2" /> Authentication
        </a>
      </div>

      {/* Documentation */}
      <div className="mt-auto">
        <h6 className="text-muted">Documentation</h6>
        <div className="ps-3">
          <a
            href="#"
            className="d-block p-2 text-decoration-none"
            style={getDynamicStyle("gettingStarted")}
            onClick={() => handleMenuItemClick("gettingStarted")}
          >
            Getting Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

// import React, { useState } from "react";
// import { FaUser, FaShoppingCart, FaFileAlt, FaSignInAlt } from "react-icons/fa";
// import "./Sidebar.css";

// const Sidebar1 = () => {
//   const [openSection, setOpenSection] = useState("");
//   const [selectedItem, setSelectedItem] = useState("default");

//   // Function to toggle sections
//   const toggleSection = (section) => {
//     setOpenSection(openSection === section ? "" : section);
//   };

//   // Function to handle menu item selection
//   const handleMenuItemClick = (menuItem) => {
//     setSelectedItem(menuItem);
//   };

//   // Function to dynamically set styles
//   const getDynamicStyle = (menuItem) => {
//     return selectedItem === menuItem
//       ? { backgroundColor: "#DBDDE1", borderRadius: "5px", color: "#22252A" }
//       : { color: "#676f7e" };
//   };

//   // Function to check if a parent section should be active
//   const isParentActive = (items) => items.includes(selectedItem);
//   return (
//     <>
//       <div
//         className="d-flex align-items-stretch flex-column vh-100 bg-light p-3"
//         style={{ backgroundColor: "#F7F7F8", width: "18rem", height: "100vh" }}
//       >
//         <div className="d-flex text-center p-2">
//           <span>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               class="fs-4 text-secondary me-1 duo-icon duo-icon-box-2"
//               data-duoicon="box-2"
//             >
//               <path
//                 fill="#F9BC06"
//                 d="m20.765 7.982.022.19.007.194v7.268a2.5 2.5 0 0 1-1.099 2.07l-.15.095-6.295 3.634-.124.067-.126.06v-8.99l7.765-4.588Z"
//                 class="duoicon-secondary-layer"
//                 opacity=".3"
//               ></path>
//               <path
//                 fill="#F9BC06"
//                 d="m13.25 2.567 6.294 3.634c.05.03.1.06.148.092L12 10.838 4.308 6.293a2.81 2.81 0 0 1 .148-.092l6.294-3.634a2.498 2.498 0 0 1 2.5 0Z"
//                 class="duoicon-primary-layer"
//               ></path>
//               <path
//                 fill="#F9BC06"
//                 d="M3.235 7.982 11 12.571v8.988a2.339 2.339 0 0 1-.25-.126l-6.294-3.634a2.502 2.502 0 0 1-1.25-2.165V8.366c0-.13.01-.258.03-.384h-.001Z"
//                 class="duoicon-secondary-layer"
//                 opacity=".3"
//               ></path>
//             </svg>
//           </span>
//           <h4
//             className="text-center mb-3"
//             style={{
//               display: "inline-block",
//               fontSize: "20px",
//               fontWeight: "700",
//               paddingLeft: "5px",
//               marginBottom: "1rem",
//             }}
//           >
//             Dashbrd
//           </h4>
//         </div>

//         {/* Dashboards */}
//         <div className="navbar-nav">
//           <div class="nav-item">
//             <div
//               className="d-flex justify-content-between align-items-center p-2"
//               style={
//                 isParentActive(["default", "crypto", "saas"])
//                   ? {
//                       backgroundColor: "#DBDDE1",
//                       color: "#000",
//                       borderRadius: "5px",
//                     }
//                   : { cursor: "pointer" }
//               }
//               onClick={() => toggleSection("dashboards")}
//             >
//               <span style={{ fontSize: "14px" }}>📊 Dashboards</span>
//               <span style={{ color: "#0002", cursor: "pointer" }}>
//                 {openSection === "dashboards" ? "×" : "+"}
//               </span>
//             </div>
//             {openSection === "dashboards" && (
//               <div className="ps-3 mt-1 dash1" style={{ fontSize: "14px" }}>
//                 <a
//                   href="#"
//                   className="d-block p-2 text-decoration-none"
//                   style={getDynamicStyle("default")}
//                   onClick={() => handleMenuItemClick("default")}
//                 >
//                   Default
//                 </a>
//                 <a
//                   href="#"
//                   className="d-block p-2 text-decoration-none"
//                   style={getDynamicStyle("crypto")}
//                   onClick={() => handleMenuItemClick("crypto")}
//                 >
//                   Crypto
//                 </a>
//                 <a
//                   href="#"
//                   className="d-block p-2 text-decoration-none"
//                   style={getDynamicStyle("saas")}
//                   onClick={() => handleMenuItemClick("saas")}
//                 >
//                   SaaS
//                 </a>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Customers */}
//         <div>
//           <div
//             className="d-flex justify-content-between align-items-center p-2"
//             style={
//               isParentActive(["customers", "customerDetails", "newCustomer"])
//                 ? {
//                     backgroundColor: "#DBDDE1",
//                     color: "#000",
//                     borderRadius: "5px",
//                   }
//                 : { cursor: "pointer" }
//             }
//             onClick={() => toggleSection("customers")}
//           >
//             <span style={{ fontSize: "14px" }}>
//               <FaUser className="me-2" /> Customers
//             </span>
//             <span style={{ color: "#0002", cursor: "pointer" }}>
//               {openSection === "customers" ? "-" : "+"}
//             </span>
//           </div>
//           {openSection === "customers" && (
//             <div className="ps-3 mt-1" style={{ fontSize: "14px" }}>
//               <a
//                 href="#"
//                 className="d-block p-2 text-decoration-none"
//                 style={getDynamicStyle("customers")}
//                 onClick={() => handleMenuItemClick("customers")}
//               >
//                 Customers
//               </a>
//               <a
//                 href="#"
//                 className="d-block p-2 text-decoration-none"
//                 style={getDynamicStyle("customerDetails")}
//                 onClick={() => handleMenuItemClick("customerDetails")}
//               >
//                 Customer Details
//               </a>
//               <a
//                 href="#"
//                 className="d-block p-2 text-decoration-none"
//                 style={getDynamicStyle("newCustomer")}
//                 onClick={() => handleMenuItemClick("newCustomer")}
//               >
//                 New Customer
//               </a>
//             </div>
//           )}
//         </div>

//         {/* Projects */}
//         <div>
//           <div
//             className="d-flex justify-content-between align-items-center p-2"
//             style={
//               isParentActive(["projects", "projectsDetails", "newProjects"])
//                 ? {
//                     backgroundColor: "#DBDDE1",
//                     color: "#000",
//                     borderRadius: "5px",
//                   }
//                 : { cursor: "pointer" }
//             }
//             onClick={() => toggleSection("projects")}
//           >
//             <span style={{ fontSize: "14px" }}>
//               <FaUser className="me-2" /> Projects
//             </span>
//             <span style={{ color: "#0002", cursor: "pointer" }}>
//               {openSection === "projects" ? "-" : "+"}
//             </span>
//           </div>
//           {openSection === "projects" && (
//             <div className="ps-3 mt-1" style={{ fontSize: "14px" }}>
//               <a
//                 href="#"
//                 className="d-block p-2 text-decoration-none"
//                 style={getDynamicStyle("projects")}
//                 onClick={() => handleMenuItemClick("projects")}
//               >
//                 Projects
//               </a>
//               <a
//                 href="#"
//                 className="d-block p-2 text-decoration-none"
//                 style={getDynamicStyle("projectsDetails")}
//                 onClick={() => handleMenuItemClick("projectsDetails")}
//               >
//                 Project Overview
//               </a>
//               <a
//                 href="#"
//                 className="d-block p-2 text-decoration-none"
//                 style={getDynamicStyle("newProjects")}
//                 onClick={() => handleMenuItemClick("newProjects")}
//               >
//                 New Project
//               </a>
//             </div>
//           )}
//         </div>

//         {/* Account */}
//         <div>
//           <div
//             className="d-flex justify-content-between align-items-center p-2"
//             style={
//               isParentActive(["account", "accountSettings"])
//                 ? {
//                     backgroundColor: "#DBDDE1",
//                     color: "#000",
//                     borderRadius: "5px",
//                   }
//                 : { cursor: "pointer" }
//             }
//             onClick={() => toggleSection("account")}
//           >
//             <span style={{ fontSize: "14px" }}>
//               <FaUser className="me-2" /> Account
//             </span>
//             <span style={{ color: "#0002", cursor: "pointer" }}>
//               {openSection === "account" ? "-" : "+"}
//             </span>
//           </div>
//           {openSection === "account" && (
//             <div className="ps-3 mt-1" style={{ fontSize: "14px" }}>
//               <a
//                 href="#"
//                 className="d-block p-2 text-decoration-none"
//                 style={getDynamicStyle("account")}
//                 onClick={() => handleMenuItemClick("account")}
//               >
//                 Account Overview
//               </a>
//               <a
//                 href="#"
//                 className="d-block p-2 text-decoration-none"
//                 style={getDynamicStyle("accountSettings")}
//                 onClick={() => handleMenuItemClick("accountSettings")}
//               >
//                 Account Setting
//               </a>
//             </div>
//           )}
//         </div>

//         {/* Orders */}
//         <div>
//           <div
//             className="d-flex justify-content-between align-items-center p-2"
//             style={
//               isParentActive(["orders", "invoice", "pricing"])
//                 ? {
//                     backgroundColor: "#DBDDE1",
//                     color: "#000",
//                     borderRadius: "5px",
//                   }
//                 : { cursor: "pointer" }
//             }
//             onClick={() => toggleSection("orders")}
//           >
//             <span style={{ fontSize: "14px" }}>
//               <FaUser className="me-2" /> Orders
//             </span>
//             <span style={{ color: "#0002", cursor: "pointer" }}>
//               {openSection === "orders" ? "-" : "+"}
//             </span>
//           </div>
//           {openSection === "orders" && (
//             <div className="ps-3 mt-1" style={{ fontSize: "14px" }}>
//               <a
//                 href="#"
//                 className="d-block p-2 text-decoration-none"
//                 style={getDynamicStyle("orders")}
//                 onClick={() => handleMenuItemClick("orders")}
//               >
//                 Orders
//               </a>
//               <a
//                 href="#"
//                 className="d-block p-2 text-decoration-none"
//                 style={getDynamicStyle("invoice")}
//                 onClick={() => handleMenuItemClick("invoice")}
//               >
//                 Invoice
//               </a>
//               <a
//                 href="#"
//                 className="d-block p-2 text-decoration-none"
//                 style={getDynamicStyle("pricing")}
//                 onClick={() => handleMenuItemClick("pricing")}
//               >
//                 Pricing
//               </a>
//             </div>
//           )}
//         </div>

//         {/* Posts */}
//         <div>
//           <div
//             className="d-flex justify-content-between align-items-center p-2"
//             style={
//               isParentActive(["categories", "posts", "newPost"])
//                 ? {
//                     backgroundColor: "#DBDDE1",
//                     color: "#000",
//                     borderRadius: "5px",
//                   }
//                 : { cursor: "pointer" }
//             }
//             onClick={() => toggleSection("posts")}
//           >
//             <span style={{ fontSize: "14px" }}>
//               <FaUser className="me-2" /> Posts
//             </span>
//             <span style={{ color: "#0002", cursor: "pointer" }}>
//               {openSection === "posts" ? "-" : "+"}
//             </span>
//           </div>
//           {openSection === "posts" && (
//             <div className="ps-3 mt-1" style={{ fontSize: "14px" }}>
//               <a
//                 href="#"
//                 className="d-block p-2 text-decoration-none"
//                 style={getDynamicStyle("categories")}
//                 onClick={() => handleMenuItemClick("categories")}
//               >
//                 Categories
//               </a>
//               <a
//                 href="#"
//                 className="d-block p-2 text-decoration-none"
//                 style={getDynamicStyle("posts")}
//                 onClick={() => handleMenuItemClick("posts")}
//               >
//                 Posts
//               </a>
//               <a
//                 href="#"
//                 className="d-block p-2 text-decoration-none"
//                 style={getDynamicStyle("newPost")}
//                 onClick={() => handleMenuItemClick("newPost")}
//               >
//                 New Post
//               </a>
//             </div>
//           )}
//         </div>

//         {/* Authentication */}
//         <div>
//           <div
//             className="d-flex justify-content-between align-items-center p-2"
//             style={
//               isParentActive(["signIn", "signUp", "passwordReset", "error"])
//                 ? {
//                     backgroundColor: "#DBDDE1",
//                     color: "#000",
//                     borderRadius: "5px",
//                   }
//                 : { cursor: "pointer" }
//             }
//             onClick={() => toggleSection("authentication")}
//           >
//             <span style={{ fontSize: "14px" }}>
//               <FaUser className="me-2" /> Authentication
//             </span>
//             <span style={{ color: "#0002", cursor: "pointer" }}>
//               {openSection === "authentication" ? "-" : "+"}
//             </span>
//           </div>
//           {openSection === "authentication" && (
//             <div className="ps-3 mt-1" style={{ fontSize: "14px" }}>
//               <a
//                 href="#"
//                 className="d-block p-2 text-decoration-none"
//                 style={getDynamicStyle("signIn")}
//                 onClick={() => handleMenuItemClick("signIn")}
//               >
//                 Sign in
//               </a>
//               <a
//                 href="#"
//                 className="d-block p-2 text-decoration-none"
//                 style={getDynamicStyle("signUp")}
//                 onClick={() => handleMenuItemClick("signUp")}
//               >
//                 Sign up
//               </a>
//               <a
//                 href="#"
//                 className="d-block p-2 text-decoration-none"
//                 style={getDynamicStyle("passwordReset")}
//                 onClick={() => handleMenuItemClick("passwordReset")}
//               >
//                 Password reset
//               </a>
//               <a
//                 href="#"
//                 className="d-block p-2 text-decoration-none"
//                 style={getDynamicStyle("error")}
//                 onClick={() => handleMenuItemClick("error")}
//               >
//                 Error
//               </a>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Sidebar1;
