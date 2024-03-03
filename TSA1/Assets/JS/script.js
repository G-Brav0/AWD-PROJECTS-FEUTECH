var cbtn = document.getElementById("color_btn");
cbtn.addEventListener("click", changeColors);

function changeColors() {
    var pageBody = document.querySelector(".page-body");
    pageBody.style.backgroundColor = pageBody.style.backgroundColor === "grey" ? "#019938" : "grey";
    pageBody.style.color = pageBody.style.color === "black" ? "#E6E6E6" : "black";
}
