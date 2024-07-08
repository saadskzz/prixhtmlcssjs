const images = document.querySelectorAll(".img");
const text = document.querySelectorAll(".contain-text p");

images.forEach((img) => {
  img.addEventListener("click", function () {
    const selectedImage = this.querySelector("img");
    console.log(selectedImage);
    const selectedText = this.querySelector("p");
    console.log(selectedText);
    images.forEach((imgs) => {
      if (imgs != selectedImage) imgs.querySelector("img").style.width = "";
      text.forEach((txt) => {
        txt.style.opacity = "";
      });
    });

    selectedImage.style.width = "400px";
    selectedText.style.opacity = 1;
  });
});
