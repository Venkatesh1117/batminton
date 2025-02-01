import React from "react";

const Sidebar = () => {
  return (
    <div className="side-bar-wrap">
      <div className="side-bar-outer">
        <div className="nav-side-bar">
          <div className="nav-logo">
            <a className="router1" href="/5221">
              <img
                src="https://extranet.bwfbadminton.com/docs/events/5199/logo-colour/Thailand Masters-2025.svg"
                alt="Tournament"
              />
            </a>
          </div>
        </div>

        <div className="side-bar-inner">
          <div className="side-bar-inner-scroll"></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;