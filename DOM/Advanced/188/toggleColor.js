var background = document.getElementsByTagName("div")[0];
var button = document.getElementsByTagName("button")[0];

button.addEventListener("click", function () {
    background.classList.toggle("pink");
});
