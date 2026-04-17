import { useState } from "react";
import "../style/Home.scss";

import FaceExpression from "../../Expression/components/FaceExpression";
import Playlist from "../components/Playlist";
import Player from "../components/Player";
import MoodHistory from "../components/MoodCat";

export default function Home() {
  const [mood, setMood] = useState("neutral");

  return (
    <div className="app">
      {/* NAVBAR */}
      <div className="navbar">
        <div className="logo">Moodify</div>
        <div className="nav-right">
          <div className="profile">S</div>
        </div>
      </div>

      {/* GRID */}
      <div className="grid">

        <div className="camera-card">
          <FaceExpression mood={mood} setMood={setMood} />
        </div>

        <div className="history-card">
          <MoodHistory />
        </div>

        <div className="playlist-card">
          <Playlist mood={mood} />
        </div>

        <div className="player-area">
          <Player />
        </div>

      </div>
    </div>
  );
}