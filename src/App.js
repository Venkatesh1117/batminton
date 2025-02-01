import React from "react";
import "./App.css";
import backgroundImage from "./images/img.jpg";
import TournamentLogo from "./components/TournamentLogo";
import PlayerCard from "./components/PlayerCard";
import ScoreBoard from "./components/ScoreBoard";
import CurrentMatches from "./components/CurrentMatches";

const matches = [
  { court: 1, time: "12:30", status: "Playing" },
  { court: 2, time: "12:45", status: "Upcoming" },
];

const players = [
  {
    name: "Laknfkdsfnk",
    surname: "KANLAHA",
    flag: "https://extranet.bwfbadminton.com/docs/flags-svg/thailand.svg",
    image: "https://extranet.bwfbadminton.com/images/profile_female.jpg",
    isServing: true,
  },
  {
    name: "Pathimas",
    surname: "KANLAHA",
    flag: "https://extranet.bwfbadminton.com/docs/flags-svg/thailand.svg",
    image: "https://extranet.bwfbadminton.com/images/profile_female.jpg",
    isServing: false,
  },
];

const scores = [
  { team1: 11, team2: 21 },
  { team1: 21, team2: 15 },
  { team1: 22, team2: 21 },
];

const App = () => {
  return (
    <div className="main">
      {/* Fixed Background Image */}
      <img className="image" src={backgroundImage} alt="Background" />
      <div className="content"></div>

      {/* Left Side - Match Content */}
      <div className="content-left">
        <div className="content-left-scroll">
          <div className="main-content-outer">
            <div className="live-match-outer">
              <div className="live-match-title">
              <TournamentLogo />
              </div>

              {/* Players & Scoreboard Section */}
              <div className="live-match-inner">
                {/* Left Column - Player 1 */}
                <div className="player-side">
    {players.slice(0, 2).map((player, index) => (
      <PlayerCard key={index} player={player} />
    ))}
  </div>

                {/* Middle Column - Scoreboard */}
                <div className="score-side">
                  <ScoreBoard scores={scores} duration="1:19" />
                </div>

                {/* Right Column - Player 2 */}
                <div className="player-side">
    {players.slice(0, 2).map((player, index) => (
      <PlayerCard key={index} player={player} />
    ))}
  </div>
              </div>

              {/* Head-to-Head Link */}
              <a
                href="https://bwfbadminton.com/players/head-to-head/?t1p1=74803&t1p2=56460&t2p1=86778&t2p2=80078"
                className="red-link"
              >
                H2H
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Current Matches */}
      <div className="current-matches">
        <CurrentMatches matches={matches} />
      </div>
    </div>
  );
};

export default App;