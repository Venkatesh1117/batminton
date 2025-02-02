import React, { useState, useEffect } from "react";
import "./App.css";
import backgroundImage from "./images/img.jpg";
import TournamentLogo from "./components/TournamentLogo";
import PlayerCard from "./components/PlayerCard";
import ScoreBoard from "./components/ScoreBoard";
import CurrentMatches from "./components/CurrentMatches";
import { fetchMatches } from "./services/apiService"; // Import API function

const scores = [
  { team1: 11, team2: 21 },
  { team1: 21, team2: 15 },
  { team1: 22, team2: 21 },
];

const App = () => {
  const [matches, setMatches] = useState([]); // Store API data
  const [selectedMatch, setSelectedMatch] = useState(null);

  useEffect(() => {
    const getMatches = async () => {
      const fetchedMatches = await fetchMatches(); // Call API
      setMatches(fetchedMatches);
      if (!selectedMatch || !fetchedMatches.some((m) => m.court === selectedMatch?.court)) {
        setSelectedMatch(fetchedMatches[0] || null);
      }
    };

    getMatches(); // Initial call
    const interval = setInterval(getMatches, 10000); // Auto-refresh every 10 sec
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [selectedMatch]);

  return (
    <div className="main">
      <img className="image" src={backgroundImage} alt="Background" />
      <div className="content"></div>

      <div className="content-left">
        <div className="content-left-scroll">
          <div className="main-content-outer">
            <div className="live-match-outer">
              <div className="live-match-title">
                <TournamentLogo />
              </div>

              {/* Players & Scoreboard Section */}
              <div className="live-match-inner">
                {selectedMatch?.teams && selectedMatch.teams.length === 2 ? (
                  <>
                    {/* Team A Players */}
                    <div className="player-side">
                      {selectedMatch.teams[0].players.map((player, index) => (
                        <PlayerCard key={`teamA-${index}`} player={player} />
                      ))}
                    </div>

                    <div className="score-side">
                      <ScoreBoard scores={scores} duration="1:19" />
                    </div>

                    {/* Team B Players */}
                    <div className="player-side">
                      {selectedMatch.teams[1].players.map((player, index) => (
                        <PlayerCard key={`teamB-${index}`} player={player} />
                      ))}
                    </div>
                  </>
                ) : (
                  <p>No match selected</p>
                )}
              </div>

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

      <div className="current-matches" >
        <CurrentMatches matches={matches} onCourtClick={setSelectedMatch} />
      </div>
    </div>
  );
};

export default App;
