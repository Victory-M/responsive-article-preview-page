const shareEl = document.querySelector(".share");

// event listener
shareEl.addEventListener("click", onClick);

// function
function onClick() {
    shareEl.classList.add("active");
    shareEl.parentNode.classList.toggle("active");
}