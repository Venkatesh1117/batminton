import React from "react";
import './ScoreBoard.css';
import { FaRegClock } from 'react-icons/fa'; // Import clock icon from React Icons
const ScoreBoard = ({ scores, duration }) => {
  return (
    <div className="live-score-wrap">
      <div className="duration">
      <FaRegClock /> {/* React Icon clock */}
      &nbsp;{duration}
    </div>
      <div className="complete-game-wrap">
        {scores.map((game, index) => (
          <div className="complete-game" key={index}>
            <div className="game-score-team1">{game.team1}</div>
            <div className="game-score-team2-winner">{game.team2}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScoreBoard;