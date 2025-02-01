import React from "react";
import "./PlayerCard.css";

const PlayerCard = ({ player }) => {
  return (
    <div className="avatar-wrap">
      {/* Player Avatar */}
      <div className="live-player-image">
        <img src={player.image} className="image1" alt="Player" />
        
        {/* Flag Inside Avatar */}
        <div className="avatar-flag">
          <img src={player.flag} className="flag1" alt="Flag" />
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