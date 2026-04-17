import { useEffect, useState } from "react";
import { useSong } from "../hooks/useSong";
import "./playlist.scss";
export default function Playlist({ mood }) {
  const { song: currentSong, setSong } = useSong();
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    async function fetchSongs() {
      try {
        const res = await fetch(
          `http://localhost:3000/api/songs?mood=${mood}`
        );
        const data = await res.json();
        const fetchedSongs = data.songs;
        setSongs(fetchedSongs);
        if (fetchedSongs.length > 0) {
          setSong(fetchedSongs[0]);
        }
      } catch (error) {
        console.error("Error fetching songs:", error);
      }
    }
    fetchSongs();
  }, [mood]);
  return (
    <div className="playlist">
      <h2>🎵 {mood.charAt(0).toUpperCase() + mood.slice(1)} Playlist</h2>
      {songs.length === 0 && <p>No songs found</p>}
      {songs.map((song) => (
        <div
          key={song._id}
          className={`playlist-item ${
            currentSong?.url === song.url ? "active" : ""
          }`}
          onClick={() => setSong(song)}
        >
          <img src={song.posterUrl} alt={song.title} />
<span className="playlist-title">
  {song.title
    .replace(/(\s-\s.*|\[.*?\])/g, "")
    .replace("(320 Kbps)", "")
  }
</span>
        </div>
      ))}
    </div>
  );
}