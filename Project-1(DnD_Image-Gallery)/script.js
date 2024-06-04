const dropArea = document.getElementById("drop-area");
const inputFile = document.getElementById("input-file");
const imgView = document.getElementById("img-view");

inputFile.addEventListener("change", uploadImage);

let imgLinkList = [];

function uploadImage() {
  const imageLink = URL.createObjectURL(inputFile.files[0]);
  imgLinkList.push(imageLink);

  //   imgView.style.backgroundImage = `url(${imageLink})`;
  imgView.style.border = "none";
  imgView.style.textContent = "";
  imgView.style.padding = "";
  document.querySelector("#img-view img").src = imageLink;
}

dropArea.addEventListener("dragover", (e) => {
  e.preventDefault();
});
dropArea.addEventListener("drop", (e) => {
  e.preventDefault();

  inputFile.files = e.dataTransfer.files;
  uploadImage();
});
