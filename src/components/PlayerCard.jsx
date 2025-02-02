import React from "react";
import "./PlayerCard.css";
import { MdSportsTennis } from "react-icons/md"; // Import Shuttlecock icon

const PlayerCard = ({ player }) => {
  return (
    <div className="avatar-wrap">
      {/* Player Avatar */}
      <div className="live-player-avatar">
        <div className="live-player-image">
          <img 
            src={player.image} 
            className="image1" 
            alt={`${player.name} ${player.surname}`} 
          />
        </div>

        {/* Show Shuttlecock Icon Only If Player is Serving */}
        {player.isServing && <MdSportsTennis className="shuttlecock-icon" />}

        {/* Flag Inside Avatar */}
        <div className="avatar-flag">
          <img 
            src={player.flag} 
            className="flag1" 
            alt={`${player.name}'s country flag`} 
          />
        </div>
      </div>

      {/* Player Name */}
      <div className="live-player-name">
        <span className="name1">{player.name}</span>
        <br />
        <span className="name2">{player.surname}</span>
      </div>
    </div>
  );
};

export default PlayerCard;
