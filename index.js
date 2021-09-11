const imageBackgrounds = () => {
  let images = [
    "https://images.pexels.com/photos/4186329/pexels-photo-4186329.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/2129947/pexels-photo-2129947.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/4050430/pexels-photo-4050430.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  ];

  document.getElementsByClassName("background-video")[0].style.display = "none";

  const container = document.getElementsByClassName("ellipses-container")[0];
  container.style.backgroundImage = `linear-gradient(to bottom right, rgba(255, 255, 255, 0.3), black), url(${images[0]})`;

  let i = 1;
  setInterval(() => {
    container.style.backgroundImage = `linear-gradient(to bottom right, rgba(255, 255, 255, 0.3), black), url(${images[i]})`;
    i < images.length - 1 ? i++ : (i = 0);
  }, 15000);
};

const videoBackgrounds = () => {
  let videos = [
    "./Assets/Videos/And You'Re An Actress - Kossher Moments.mp4",
    "./Assets/Videos/Better Stop Now - Kossher Moments.mp4",
    "./Assets/Videos/Tell Me What You Love - Kossher Moments.mp4",
  ];

  const video = document.getElementById("bg-vid");
  video.setAttribute("src", videos[0]);

  let i = 1;
  setInterval(() => {
    video.setAttribute("src", videos[i]);
    i < videos.length - 1 ? i++ : (i = 0);
  }, 15000);
};

const smoothScroll = () => {
  const position = document.getElementById("page-title");
  console.log(position.innerHTML);
  if (position.innerHTML === "home") {
    window.location = "#roadmap";
  } else {
    window.location = "#home";
  }
};
