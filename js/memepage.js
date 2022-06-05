const memeId = new URLSearchParams(window.location.search).get('meme')
const imgShowMeme = document.querySelector("img")
const containerElement = document.querySelector(".container")
const addInpElement = document.querySelector(".addInp")
const InpGpElement = document.querySelector(".inputGp")
const leftElement = document.querySelector(".left")
if (isNaN(memeId)) {
    containerElement.style.display = "flex";
    containerElement.style.justifyContent = "center";
    containerElement.style.alignItems = "center";
    containerElement.innerHTML = `<h1>opss, not found a meme plz go to <a href="../"> home page</a>  </h1>`
} else if (Number(memeId) > 37) {
    containerElement.style.display = "flex";
    containerElement.style.justifyContent = "center";
    containerElement.style.alignItems = "center";
    containerElement.innerHTML = `<h1>opss, not found a meme plz go to <a href="../"> home page</a>  </h1>`
}
imgShowMeme.src = `meme/${memeId}.jpg`
    // end read params for show meme image
addInpElement.addEventListener("click", addTextBox)

function addTextBox() {

}
// make a drag and drop for text boxs