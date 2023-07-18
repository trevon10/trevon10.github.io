function resizeVideo() {
    var videoContainer = document.getElementById("Container");
    var video = document.getElementById("Video");
    var aspectRatio = 16 / 9; // Adjust the aspect ratio as needed

    var containerWidth = videoContainer.offsetWidth;
    var containerHeight = containerWidth / aspectRatio;

    video.style.width = containerWidth + "px";
    video.style.height = containerHeight + "px";
  }

  window.addEventListener("resize", resizeVideo);
  resizeVideo();