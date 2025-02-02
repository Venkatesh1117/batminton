import React, { useState, useEffect } from "react";
import "./App.css";
import backgroundImage from "./images/img.jpg";
import TournamentLogo from "./components/TournamentLogo";
import PlayerCard from "./components/PlayerCard";
import ScoreBoard from "./components/ScoreBoard";
import CurrentMatches from "./components/CurrentMatches";

const API_URL = "https://dummyjson.com/c/36de-93a8-4aae-b379"; // Replace with actual API

const scores = [
  { team1: 11, team2: 21 },
  { team1: 21, team2: 15 },
  { team1: 22, team2: 21 },
];

const App = () => {
  const [matches, setMatches] = useState([]); // Store API data
  const [selectedMatch, setSelectedMatch] = useState(null);

  // Function to fetch and format matches
  const fetchMatches = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Failed to fetch matches");

      const data = await response.json();

      // Convert API response (object with court keys) to an array
      const formattedMatches = Object.values(data); // Extract values from the object

      setMatches(formattedMatches);
      if (!selectedMatch || !formattedMatches.some((m) => m.court === selectedMatch.court)) {
        setSelectedMatch(formattedMatches[0] || null);
      }
    } catch (error) {
      console.error("Error fetching matches:", error);
    }
  };

  // Fetch matches when the component mounts and refresh every 10 seconds
  useEffect(() => {
    fetchMatches(); // Initial call
    const interval = setInterval(fetchMatches, 10000); // Auto-refresh every 10 sec
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
                <div className="player-side">
                  {selectedMatch?.players?.map((player, index) => (
                    <PlayerCard key={index} player={player} />
                  ))}
                </div>

                <div className="score-side">
                  <ScoreBoard scores={scores} duration="1:19" />
                </div>

                <div className="player-side">
                  {selectedMatch?.players?.map((player, index) => (
                    <PlayerCard key={index} player={player} />
                  ))}
                </div>
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

      <div className="current-matches">
        <CurrentMatches matches={matches} onCourtClick={setSelectedMatch} />
      </div>
    </div>
  );
};

export default App;
