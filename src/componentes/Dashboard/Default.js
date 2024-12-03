import React from "react";
import "./Dashboard.css";

const Default = () => {
  return (
    <>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 col-md-8 col-12 col-sm-12">
            <h1
              style={{
                fontSize: "40px",
                color: "#22252A",
                fontWeight: "580",
                marginBottom: ".5rem",
                letterSpacing: "0px",
              }}
            >
              Hello, Johan
            </h1>
            <p style={{ fontSize: "16px", color: "#676f7e" }}>
              Here's a summary of your account activity for this week.
            </p>
          </div>

          <div className="col-lg-4 col-md-4 col-12 col-sm-12 d-flex align-items-center">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="fs-4 duo-icon duo-icon-world"
                data-duoicon="world"
              >
                <path
                  fill="#0055FF"
                  d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Z"
                  class="duoicon-secondary-layer"
                  opacity=".3"
                ></path>
                <path
                  fill="#0055FF"
                  d="M12 4a7.988 7.988 0 0 0-6.335 3.114l-.165.221V9.02c0 1.25.775 2.369 1.945 2.809l.178.06 1.29.395c1.373.42 2.71-.697 2.577-2.096l-.019-.145-.175-1.049a1 1 0 0 1 .656-1.108l.108-.03.612-.14a2.667 2.667 0 0 0 1.989-3.263A7.987 7.987 0 0 0 12 4Zm2 9.4-1.564 1.251a.5.5 0 0 0-.041.744l1.239 1.239c.24.24.415.538.508.864l.175.613c.147.521.52.948 1.017 1.163a8.026 8.026 0 0 0 2.533-1.835l-.234-1.877a2 2 0 0 0-1.09-1.54l-1.47-.736A1 1 0 0 0 14 13.4Z"
                  class="duoicon-primary-layer"
                ></path>
              </svg>
            </span>
            <span style={{ paddingLeft: "10px" }}>
              <p style={{ fontSize: "14px" }}>San Francisco, CA – 8:00 PM</p>
            </span>
          </div>
        </div>

        <hr className="hr-line" />

        {/* <div className="row default2 gap-1">
          <div className="col-lg-3 col-md-3 col-sm-12 col-12 box1">hello</div>
          <div className="col-lg-3 col-md-3 col-sm-12 col-12 box1">c</div>
          <div className="col-lg-3 col-md-3 col-sm-12 col-12 box1">c</div>
          <div className="col-lg-3 col-md-3 col-sm-12 col-12 box1">xd</div>
        </div> */}
        {/* Summary Cards Section */}
        {/* <div className="summary-cards">
          <div className="card d-flex">
            <div className="card-content">
              <p className="card-title">Earned</p>
              <h3 className="card-value">$1,250</h3>
            </div>
            <div class="avatar avatar-lg bg-body text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="fs-4 duo-icon duo-icon-credit-card"
                data-duoicon="credit-card"
              >
                <path
                  fill="currentColor"
                  d="M22 10v7a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-7h20Z"
                  class="duoicon-secondary-layer"
                  opacity=".3"
                ></path>
                <path
                  fill="currentColor"
                  d="M19 4a3 3 0 0 1 3 3v1H2V7a3 3 0 0 1 3-3h14Zm-1 10h-3a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2Z"
                  class="duoicon-primary-layer"
                ></path>
              </svg>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <p className="card-title">Hours Logged</p>
              <h3 className="card-value">35.5 hrs</h3>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <p className="card-title">Avg. Time</p>
              <h3 className="card-value">2:55 hrs</h3>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <p className="card-title">Weekly Growth</p>
              <h3 className="card-value">14.5%</h3>
            </div>
          </div>
        </div> */}

        
      </div>
    </>
  );
};

export default Default;
