import React from 'react'; 

export default function PlayList() {
  return (
    <div className="playlist">
      <form className="playlist-form">
        <input type="text" id="playlist-name" className="playlist-name" placeholder="New Playlist" />
        <button type="submit" className="playlist-save">SAVE PLAYLIST</button>
      </form>
    </div>
  );
}