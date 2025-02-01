import React from "react";
import './TournamentLogo.css';
const TournamentLogo = () => {
  return (
    <div className="nav-cat-logo">
      <a href="https://match-centre.bwfbadminton.com/5221" className="route-link-active">
        <img
          src="https://extranet.bwfbadminton.com/docs/tmt-category/WT_300.svg"
          className="logo"
          alt="Tournament Logo"
        />
      </a>
    </div>
  );
};

export default TournamentLogo;