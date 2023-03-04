const images = [
  "https://fastly.picsum.photos/id/460/2560/1440.jpg?grayscale&hmac=gYTlnU0vd5GFtaoRyYVN2qWZAr1Vgibfvn7DH78wPX8",
  "https://fastly.picsum.photos/id/337/2560/1440.jpg?grayscale&hmac=Tr_1YjqGR-N0aIy1X20QxuSArGWJmcXXA-KatHlxdr0",
  "https://fastly.picsum.photos/id/218/2560/1440.jpg?grayscale&hmac=qtEwJnLtYRO6kkKOyxMnG7C4g1s6JQjoxdo9Y3h4hL0",
  "https://fastly.picsum.photos/id/419/2560/1440.jpg?grayscale&hmac=MbDcNzRvvPI65Z-ypGQRKdgLns3aWmM8iIqpmor2e_Q",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `${chosenImage}`;

document.body.style.backgroundImage = `url('${chosenImage}')`;
