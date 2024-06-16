const app = document.getElementById("app");
app.style.width = "50%";
app.style.height = "50%";
app.style.border = "2px solid black";
app.style.borderRadius = "20px";
app.style.backgroundColor = "white";
app.style.textAlign = "center";
app.style.padding = "10px";
app.style.display = "flex";
app.style.justifyContent = "center";
app.style.alignItems = "center";
app.style.flexDirection = "column";
app.innerHTML = "<h1>List_Items</h1>";
const ul = document.createElement("ul");
app.append(ul);
const listItem = 5;
for (let i = 0; i < listItem; i++) {
  const li = document.createElement("li");
  li.innerText = `Item - ${i + 1}`;
  ul.append(li);
  //   console.log(`Item - ${i + 1}`);
}
