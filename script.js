const title = document.getElementById("title")
const artist = document.getElementById("artist")

async function nowplaying() {
  const response = await fetch("http://192.168.1.89:3000/nowplaying", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
  })
  if(!response.ok) {
    throw new Error ("Server offline");
  }

  const track = await response.json()
  
  if(track.nowPlaying) {
    title.textContent = `Now playing: ${track.name}`;
    artist.textContent = `By: ${track.artist}`;
  }
}

nowplaying();
setInterval(nowplaying, 30000);