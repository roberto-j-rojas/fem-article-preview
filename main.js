const overlay = document.querySelector(".overlay");
const shareButton = document.querySelector(".share-button");

shareButton.addEventListener("click", ()=>{
    overlay.classList.toggle("hidden");
    shareButton.classList.toggle("button--inverted");
})