const videos = [
  {
    titulo: "Coca-Cola",
    arquivo: "videos/video1.mp4"
  },
  {
    titulo: "Tubaina",
    arquivo: "videos/video2.mp4"
  }
];

const container = document.getElementById("videoContainer");

videos.forEach(video => {
  const card = document.createElement("div");
  card.className = "video-card";

  const player = document.createElement("video");
  player.src = video.arquivo;
  player.controls = true;

  const titulo = document.createElement("p");
  titulo.className = "video-title";
  titulo.innerText = video.titulo;

  card.appendChild(player);
  card.appendChild(titulo);
  container.appendChild(card);
});
