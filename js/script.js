let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcons = document.getElementById("ctrlIcon");

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};
ctrlIcons.addEventListener("click", function () {
  if (ctrlIcons.classList.contains("fa-pause")) {
    song.pause();
    ctrlIcons.classList.remove("fa-pause");
    ctrlIcons.classList.add("fa-play");
  } else {
    song.play();
    ctrlIcons.classList.add("fa-pause");
    ctrlIcons.classList.remove("fa-play");
  }
});
if (song.play()) {
  setInterval(function () {
    progress.value = song.currentTime;
  }, 500);
}

progress.addEventListener("change", function () {
  song.play();
  song.currentTime = progress.value;
  ctrlIcons.classList.add("fa-pause");
  ctrlIcons.classList.remove("fa-play");
});
