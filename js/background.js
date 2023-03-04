const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `https://picsum.photos/1000/1000?grayscale`;

document.body.style.backgroundImage =
  "url('https://picsum.photos/2560/1440?grayscale')";
