import React, { useState } from "react";
import "./Sidebar.css";
import { NavLink, useNavigate } from "react-router-dom";

const Sidebar1 = () => {
  const navigate = useNavigate();
  const [openSections, setOpenSections] = useState([]);

  const toggleSection = (section) => {
    setOpenSections((prevOpenSections) => {
      if (prevOpenSections.includes(section)) {
        return prevOpenSections.filter((item) => item !== section);
      } else {
        return [...prevOpenSections, section];
      }
    });
  };

  const [selectedItem, setSelectedItem] = useState("default");

  const handleMenuItemClick = (menuItem) => {
    setSelectedItem(menuItem);
  };

  const getDynamicStyle = (menuItem) => {
    return selectedItem === menuItem
      ? { backgroundColor: "#DBDDE1", borderRadius: "5px", color: "#22252A" }
      : { color: "#676f7e" };
  };

  const isParentActive = (items) => items.includes(selectedItem);

  return (
    <div
      className="d-flex align-items-stretch flex-column vh-100 bg-light p-3"
      style={{ backgroundColor: "#F7F7F8", width: "18rem", height: "100vh" }}
    >
      {/* Header */}
      <div className="d-flex text-center p-2">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fs-4 text-secondary me-1 duo-icon duo-icon-box-2"
          >
            <path
              fill="#F9BC06"
              d="m20.765 7.982.022.19.007.194v7.268a2.5 2.5 0 0 1-1.099 2.07l-.15.095-6.295 3.634-.124.067-.126.06v-8.99l7.765-4.588Z"
              opacity=".3"
            ></path>
            <path
              fill="#F9BC06"
              d="m13.25 2.567 6.294 3.634c.05.03.1.06.148.092L12 10.838 4.308 6.293a2.81 2.81 0 0 1 .148-.092l6.294-3.634a2.498 2.498 0 0 1 2.5 0Z"
            ></path>
            <path
              fill="#F9BC06"
              d="M3.235 7.982 11 12.571v8.988a2.339 2.339 0 0 1-.25-.126l-6.294-3.634a2.502 2.502 0 0 1-1.25-2.165V8.366c0-.13.01-.258.03-.384h-.001Z"
              opacity=".3"
            ></path>
          </svg>
        </span>
        <h4
          className="text-center mb-3"
          style={{
            display: "inline-block",
            fontSize: "20px",
            fontWeight: "700",
            paddingLeft: "5px",
            marginBottom: "1rem",
          }}
        >
          Dashbrd
        </h4>
      </div>

      {/* Section: Dashboards */}
      <div className="navbar-nav">
        <div className="nav-item">
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
            <span style={{ fontSize: "14px" }}>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  viewBox="0 -960 960 960"
                  width="20px"
                  fill="#434343"
                >
                  <path d="M219-144q-29 0-52-23t-23-52v-525q0-29.7 21.5-50.85Q187-816 216-816h528q29.7 0 50.85 21.15Q816-773.7 816-744v528q0 29-21.15 50.5T744-144H219Zm-3-72h228v-528H216v528Zm300 0h228v-264H516v264Zm0-336h228v-192H516v192Z" />
                </svg>
              </span>
              <span style={{ paddingLeft: "10px" }}>Dashboards</span>
            </span>
            <span style={{ color: "#0002", cursor: "pointer" }}>
              {openSections.includes("dashboards") ? "-" : "+"}
            </span>
          </div>
          {openSections.includes("dashboards") && (
            <div className="ps-3 mt-1 dash1" style={{ fontSize: "14px" }}>
              <NavLink
                to="/"
                className="d-block p-2 text-decoration-none"
                style={getDynamicStyle("default")}
                onClick={() => handleMenuItemClick("default")}
              >
                Default
              </NavLink>
              <NavLink
                to="/"
                className="d-block p-2 text-decoration-none"
                style={getDynamicStyle("crypto")}
                onClick={() => handleMenuItemClick("crypto")}
              >
                Crypto
              </NavLink>
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
      </div>

      {/* Repeat for other sections */}
      {[
        {
          title: "Customers",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#434343"
            >
              <path d="M96-192v-92q0-25.78 12.5-47.39T143-366q54-32 114.5-49T384-432q66 0 126.5 17T625-366q22 13 34.5 34.61T672-284v92H96Zm648 0v-92q0-42-19.5-78T672-421q39 8 75.5 21.5T817-366q22 13 34.5 34.67Q864-309.65 864-284v92H744ZM384-480q-60 0-102-42t-42-102q0-60 42-102t102-42q60 0 102 42t42 102q0 60-42 102t-102 42Zm336-144q0 60-42 102t-102 42q-8 0-15-.5t-15-2.5q25-29 39.5-64.5T600-624q0-41-14.5-76.5T546-765q8-2 15-2.5t15-.5q60 0 102 42t42 102ZM168-264h432v-20q0-6.47-3.03-11.76-3.02-5.3-7.97-8.24-47-27-99-41.5T384-360q-54 0-106 14t-99 42q-4.95 2.83-7.98 7.91-3.02 5.09-3.02 12V-264Zm216.21-288Q414-552 435-573.21t21-51Q456-654 434.79-675t-51-21Q354-696 333-674.79t-21 51Q312-594 333.21-573t51 21ZM384-264Zm0-360Z" />
            </svg>
          ),
          menuItems: ["customers", "customerDetails", "newCustomer"],
        },
        {
          title: "Projects",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#434343"
            >
              <path d="M323.79-288q15.21 0 25.71-10.29t10.5-25.5q0-15.21-10.29-25.71t-25.5-10.5q-15.21 0-25.71 10.29t-10.5 25.5q0 15.21 10.29 25.71t25.5 10.5Zm0-156q15.21 0 25.71-10.29t10.5-25.5q0-15.21-10.29-25.71t-25.5-10.5q-15.21 0-25.71 10.29t-10.5 25.5q0 15.21 10.29 25.71t25.5 10.5Zm0-156q15.21 0 25.71-10.29t10.5-25.5q0-15.21-10.29-25.71t-25.5-10.5q-15.21 0-25.71 10.29t-10.5 25.5q0 15.21 10.29 25.71t25.5 10.5ZM432-288h240v-72H432v72Zm0-156h240v-72H432v72Zm0-156h240v-72H432v72ZM216-144q-29.7 0-50.85-21.15Q144-186.3 144-216v-528q0-29.7 21.15-50.85Q186.3-816 216-816h528q29.7 0 50.85 21.15Q816-773.7 816-744v528q0 29.7-21.15 50.85Q773.7-144 744-144H216Zm0-72h528v-528H216v528Zm0-528v528-528Z" />
            </svg>
          ),
          menuItems: ["projects", "projectsDetails", "newProjects"],
        },
        {
          title: "Account",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#434343"
            >
              <path d="M480-480q-60 0-102-42t-42-102q0-60 42-102t102-42q60 0 102 42t42 102q0 60-42 102t-102 42ZM192-192v-96q0-23 12.5-43.5T239-366q55-32 116.29-49 61.29-17 124.5-17t124.71 17Q666-398 721-366q22 13 34.5 34t12.5 44v96H192Zm72-72h432v-24q0-5.18-3.03-9.41-3.02-4.24-7.97-6.59-46-28-98-42t-107-14q-55 0-107 14t-98 42q-5 4-8 7.72-3 3.73-3 8.28v24Zm216.21-288Q510-552 531-573.21t21-51Q552-654 530.79-675t-51-21Q450-696 429-674.79t-21 51Q408-594 429.21-573t51 21Zm-.21-72Zm0 360Z" />
            </svg>
          ),
          menuItems: ["Account overview", "Account setting"],
        },
        {
          title: "Orders",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#434343"
            >
              <path d="M263.79-96Q234-96 213-117.21t-21-51Q192-198 213.21-219t51-21Q294-240 315-218.79t21 51Q336-138 314.79-117t-51 21Zm432 0Q666-96 645-117.21t-21-51Q624-198 645.21-219t51-21Q726-240 747-218.79t21 51Q768-138 746.79-117t-51 21ZM253-696l83 192h301l82-192H253Zm-31-72h570q14 0 20.5 11t1.5 23L702.63-476.14Q694-456 676.5-444T637-432H317l-42 72h493v72H276q-43 0-63.5-36.15-20.5-36.16.5-71.85l52-90-131-306H48v-72h133l41 96Zm114 264h301-301Z" />
            </svg>
          ),
          menuItems: ["orders", "invoice", "pricing"],
        },
        {
          title: "Posts",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#5f6368"
            >
              <path d="M288-192v-480H96v-96h480v96H384v480h-96Zm360 0v-288H528v-96h336v96H744v288h-96Z" />
            </svg>
          ),
          menuItems: ["categories", "posts", "newPost"],
        },
        {
          title: "Authentication",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#5f6368"
            >
              <path d="M480-144v-72h264v-528H480v-72h264q29.7 0 50.85 21.15Q816-773.7 816-744v528q0 29.7-21.15 50.85Q773.7-144 744-144H480Zm-72-168-51-51 81-81H144v-72h294l-81-81 51-51 168 168-168 168Z" />
            </svg>
          ),
          menuItems: ["signIn", "signUp", "passwordReset", "error"],
        },
      ].map((section) => (
        <div key={section.title}>
          <div
            className="d-flex justify-content-between align-items-center p-2"
            style={
              isParentActive(section.menuItems)
                ? {
                    backgroundColor: "#DBDDE1",
                    color: "#000",
                    borderRadius: "5px",
                  }
                : { cursor: "pointer" }
            }
            onClick={() => toggleSection(section.title)}
          >
            <span style={{ fontSize: "14px" }}>
              <span style={{ paddingRight: "10px" }}>{section.icon}</span>
              <span>{section.title}</span>
            </span>
            <span style={{ color: "#0002", cursor: "pointer" }}>
              {openSections.includes(section.title) ? "-" : "+"}
            </span>
          </div>
          {openSections.includes(section.title) && (
            <div className="ps-3 mt-1" style={{ fontSize: "14px" }}>
              {section.menuItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="d-block p-2 text-decoration-none"
                  style={getDynamicStyle(item)}
                  onClick={() => handleMenuItemClick(item)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}

      {/* Documentation Section */}
      <div className="mt-5">
        <h6
          className="ps-2"
          style={{ fontSize: "14px", color: "#22252A", fontWeight: "600" }}
        >
          Documentation
        </h6>
        <div className="mt-3" style={{ fontSize: "14px" }}>
          <a
            href="#"
            className="d-block p-2 text-decoration-none"
            style={getDynamicStyle("gettingStarted")}
            onClick={() => handleMenuItemClick("gettingStarted")}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                width="20px"
                fill="#5f6368"
              >
                <path d="M216-216h336v-192h192v-336H216v528Zm0 72q-29.7 0-50.85-21.15Q144-186.3 144-216v-528q0-29.7 21.15-50.85Q186.3-816 216-816h528q29.7 0 50.85 21.15Q816-773.7 816-744v360L576-144H216Zm72-264v-72h192v72H288Zm0-144v-72h384v72H288Zm-72 336v-528 528Z" />
              </svg>{" "}
            </span>
            <span className="ps-2">Getting Started</span>
          </a>
        </div>

        <div className="mt-1" style={{ fontSize: "14px" }}>
          <a
            href="#"
            className="d-block p-2 text-decoration-none"
            style={getDynamicStyle("componentes")}
            onClick={() => handleMenuItemClick("componentes")}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                width="20px"
                fill="#5f6368"
              >
                <path d="M444-189v-270L216-591v270l228 132Zm72 0 228-131v-270L516-459v270Zm-36-333 235-135-236-135-234 135 235 135ZM180-258q-17.1-9.88-26.55-26.06Q144-300.23 144-320v-320q0-19.77 9.45-35.94Q162.9-692.12 180-702l263-152q17-10 37-10t37 10l263 152q17.1 9.88 26.55 26.06Q816-659.77 816-640v320q0 19.77-9.45 35.94Q797.1-267.88 780-258L516-105q-17.13 10-36.07 10Q461-95 444-105L180-258Zm300-222Z" />
              </svg>
            </span>
            <span className="ps-2">Componentes</span>
          </a>
        </div>

        <div className="mt-1" style={{ fontSize: "14px" }}>
          <a
            href="#"
            className="d-block p-2 text-decoration-none"
            style={getDynamicStyle("changelog")}
            onClick={() => handleMenuItemClick("changelog")}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                width="20px"
                fill="#5f6368"
              >
                <path d="M323.79-288q15.21 0 25.71-10.29t10.5-25.5q0-15.21-10.29-25.71t-25.5-10.5q-15.21 0-25.71 10.29t-10.5 25.5q0 15.21 10.29 25.71t25.5 10.5Zm0-156q15.21 0 25.71-10.29t10.5-25.5q0-15.21-10.29-25.71t-25.5-10.5q-15.21 0-25.71 10.29t-10.5 25.5q0 15.21 10.29 25.71t25.5 10.5Zm0-156q15.21 0 25.71-10.29t10.5-25.5q0-15.21-10.29-25.71t-25.5-10.5q-15.21 0-25.71 10.29t-10.5 25.5q0 15.21 10.29 25.71t25.5 10.5ZM432-288h240v-72H432v72Zm0-156h240v-72H432v72Zm0-156h240v-72H432v72ZM216-144q-29.7 0-50.85-21.15Q144-186.3 144-216v-528q0-29.7 21.15-50.85Q186.3-816 216-816h528q29.7 0 50.85 21.15Q816-773.7 816-744v528q0 29.7-21.15 50.85Q773.7-144 744-144H216Zm0-72h528v-528H216v528Zm0-528v528-528Z" />
              </svg>
            </span>
            <span className="ps-2">Changelog</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar1;
