import React from "react";
import "./CurrentMatches.css";

const CurrentMatches = ({ matches }) => {
  return (
    <div className="current-matches">
      {/* Tournament Logo & Name */}
      <div className="tournament-header">
        <img
          src="https://extranet.bwfbadminton.com/docs/events/5199/logo-colour/Thailand Masters-2025.svg"
          alt="Thailand Masters 2025"
          className="tournament-logo"
        />
        <h3>Thailand Masters 2025</h3>
        <p>28 January - 2 February</p>
        <hr />
      </div>

      {/* Order of Play Button */}
      <a
        href="https://match-centre.bwfbadminton.com/5221"
        target="_blank"
        rel="noopener noreferrer"
        className="order-play-btn"
      >
        ORDER OF PLAY <span>↗</span>
      </a>

      {/* Live Matches Section */}
      <h4 className="live-title">Current Matches</h4>
      {matches.length === 0 ? (
        <p className="no-matches">Currently no live matches</p>
      ) : (
        <div className="matches-list">
          {matches.map((match, index) => (
            <div key={index} className="match-item">
              <span className="court-label">Court {match.court}</span>
              <span className="match-time">{match.time}</span>
              <span className="match-status">{match.status}</span>
              
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CurrentMatches;