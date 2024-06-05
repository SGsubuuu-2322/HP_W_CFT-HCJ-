const dropArea = document.getElementById("drop-area");
const inputFile = document.getElementById("input-file");
const imgView = document.getElementById("img-view");
const uploadBtn = document.getElementById("upload-btn");

inputFile.addEventListener("change", uploadImage);

let imgLinkList = [] || JSON.parse(localStorage.getItem("imgLinkList"));

function uploadImage() {
  const imageLink = URL.createObjectURL(inputFile.files[0]);
  imgLinkList.push(imageLink);

  imgView.style.border = "none";
  imgView.style.textContent = "";
  imgView.style.padding = "";
  document.querySelector("#img-view img").src = imageLink;
}

uploadBtn.addEventListener("click", uploadImages);

function uploadImages() {
  localStorage.setItem("imgLinkList", JSON.stringify(imgLinkList));
}

dropArea.addEventListener("dragover", (e) => {
  e.preventDefault();
});
dropArea.addEventListener("drop", (e) => {
  e.preventDefault();

  inputFile.files = e.dataTransfer.files;
  uploadImage();
});
