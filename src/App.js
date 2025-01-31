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
                {/* Circular Left Icon */}
                {/* <div className="icon-left">
                  <img src="path_to_left_icon.png" alt="Left Icon" />
                </div> */}
                <ProfileCard
                  className="card"
                  style={{ left: "-20px",top: "20%" }}
                />

                {/* Circular Right Icon */}
                <div className="icon-right">
                  <img src="path_to_right_icon.png" alt="Right Icon" />
                </div>
             
              {/* <Avatar
        sx={{ bgcolor: A[500] }}
        alt="Remy Sharp"
        src="/broken-image.jpg"
      />
      <Avatar src="/broken-image.jpg" /> */}

              {/* Match Details */}
              <div className="match-details">
                <h1>Live Match Center</h1>
                <p>Follow all the latest badminton matches live.</p>
              </div>
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
