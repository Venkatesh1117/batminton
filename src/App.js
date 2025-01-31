import React from "react";
import "./App.css";
import backgroundImage from "./images/img.jpg";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import ProfileCard from "./ProfileCard";

const App = () => {
  return (
    <div className="main">
      {/* Background Image */}
      <img className="image" src={backgroundImage} alt="Background" />

      {/* Gradient Overlay */}
      <div className="content"></div>

      {/* Main Content Section */}
      <div className="content-left">
        <div className="content-left-scroll">
          <div className="main-content-outer">
            <div className="live-match-outer">
              <div className="nav-cat-logo">
                {/* Logo */}
                <a
                  href="https://match-centre.bwfbadminton.com/5221"
                  className="route-link-active"
                >
                  <img
                    src="https://extranet.bwf.sport/docs/tmt-category/WT_300.svg"
                    className="logo"
                    alt="Tournament Logo"
                  />
                </a>
                </div>
                <div className="live-match-inner">
                  <div className="live-team1-wrap">
                    <div>
                      <div className="live-team1-player">
                        <div className="avatar-wrap">
                          <div id="player1" class="live-player-image">
                            <img src="https://extranet.bwfbadminton.com/images/profile_female.jpg" className="image1"/>  

                          </div>
                          <div className="avatar-flag">
                            <img src="https://extranet.bwfbadminton.com/docs/flags-svg/thailand.svg" className="flag1"/>


                          </div>
                          <div className="player-serve">
                            <img src="https://match-centre.bwfbadminton.com/img/serve-01.432d2878.svg" className="serve1"/>
                          </div>



                        </div>
                        <div className="live-player-name">
                          <span >
                          <span className="name1">
                          Laksika
                          </span>
  <br/>
                          <span className="name2">
                          KANLAHA
                          </span>
    </span>
                          </div>






                      </div>






                    </div>



                    <div>
                    <div className="live-team1-player">
                        <div className="avatar-wrap">
                          <div id="player1" class="live-player-image">
                            <img src="https://extranet.bwfbadminton.com/images/profile_female.jpg" className="image1"/>  

                          </div>
                          <div className="avatar-flag">
                            <img src="https://extranet.bwfbadminton.com/docs/flags-svg/thailand.svg" className="flag1"/>


                          </div>
                          <div className="player-serve">
                            <img src="https://match-centre.bwfbadminton.com/img/serve-01.432d2878.svg" className="serve1"/>
                          </div>



                        </div>
                        <div className="live-player-name">
                          <span >
                          <span className="name1">
                          Pathimas
                          </span>
  <br/>
                          <span className="name2">
                          KANLAHA
                          </span>
    </span>
                          </div>






                      </div>


                    </div>





                  </div>
                  {/* live-team1-wrap */}
                  < div className="live-score-wrap">
                  <div className="duration">
                    <img src="https://match-centre.bwfbadminton.com/img/clock.3b3b3b3b.svg"/>
                    "1:19"


                    </div>
                    <div className="complete-game-wrap">
                      <div className="complete-game">
                        <div className="game-score-team1">11
                          </div>
                          <div className="game-score-team2-winner">21
                          </div>
                        </div>
                        <div className="complete-game">
                        <div className="game-score-team1">21
                          </div>
                          <div className="game-score-team2-winner">11
                          </div>
                        </div>
                        <div className="complete-game">
                        <div className="game-score-team1">22
                          </div>
                          <div className="game-score-team2-winner">21
                          </div>
                        </div>



                      </div>



                   </div>






                   <div className="live-team1-wrap">
                    <div>
                      <div className="live-team1-player">
                        <div className="avatar-wrap">
                          <div id="player1" class="live-player-image">
                            <img src="https://extranet.bwfbadminton.com/images/profile_female.jpg" className="image1"/>  

                          </div>
                          <div className="avatar-flag">
                            <img src="https://extranet.bwfbadminton.com/docs/flags-svg/thailand.svg" className="flag1"/>


                          </div>
                          <div className="player-serve">
                            <img src="https://match-centre.bwfbadminton.com/img/serve-01.432d2878.svg" className="serve1"/>
                          </div>



                        </div>
                        <div className="live-player-name">
                          <span >
                          <span className="name1">
                          Laksika
                          </span>
  <br/>
                          <span className="name2">
                          KANLAHA
                          </span>
    </span>
                          </div>






                      </div>






                    </div>



                    <div>
                    <div className="live-team1-player">
                        <div className="avatar-wrap">
                          <div id="player1" class="live-player-image">
                            <img src="https://extranet.bwfbadminton.com/images/profile_female.jpg" className="image1"/>  

                          </div>
                          <div className="avatar-flag">
                            <img src="https://extranet.bwfbadminton.com/docs/flags-svg/thailand.svg" className="flag1"/>


                          </div>
                          <div className="player-serve">
                            <img src="https://match-centre.bwfbadminton.com/img/serve-01.432d2878.svg" className="serve1"/>
                          </div>



                        </div>
                        <div className="live-player-name">
                          <span >
                          <span className="name1">
                          Pathimas
                          </span>
  <br/>
                          <span className="name2">
                          KANLAHA
                          </span>
    </span>
                          </div>






                      </div>


                    </div>





                  </div>








                  </div>

                  {/* live-match-inner */}


                  <a href="https://bwfbadminton.com/players/head-to-head/?t1p1=74803&t1p2=56460&t2p1=86778&t2p2=80078" className="red-link">H2H</a>



                {/* Circular Left Icon */}
                {/* <div className="icon-left">
                  <img src="path_to_left_icon.png" alt="Left Icon" />
                </div> */}
                {/* <ProfileCard
                  className="card"
                  style={{ left: "-20px",top: "20%" }}
                /> */}

                {/* Circular Right Icon */}
                {/* <div className="icon-right">
                  <img src="path_to_right_icon.png" alt="Right Icon" />
                </div> */}
             
              {/* <Avatar
        sx={{ bgcolor: A[500] }}
        alt="Remy Sharp"
        src="/broken-image.jpg"
      />
      <Avatar src="/broken-image.jpg" /> */}

              {/* Match Details */}
              {/* <div className="match-details">
                <h1>Live Match Center</h1>
                <p>Follow all the latest badminton matches live.</p>
              </div> */}
              
            </div>
          </div>
        </div>
      </div>



      <div className="side-bar-wrap">
                  <div className="side-bar-outer">
                    <div className="nav-side-bar">
                      <div className="nav-logo">
                        <a className="router1" href="/5221">
                          <img src="https://extranet.bwfbadminton.com/docs/events/5199/logo-colour/Thailand Masters-2025.svg" />
                           </a>





                        </div>




                      </div>

<div className="side-bar-inner">
  <div className="side-bar-inner-scroll">







  </div>

  </div>


                    </div>

</div>




    </div>
  );
};

export default App;

// import ProfileCard from "./ProfileCard";

// function App() {
//   return (
//     <div className="App">
//       <ProfileCard />
//     </div>
//   );
// }

// export default App;
