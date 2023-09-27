const images = ["01.png", "02.png", "03.png"];

const chosenImages = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");

bgImage.src = `image/${chosenImages}`;
bgImage.classList = "bgImage";

document.body.appendChild(bgImage);
