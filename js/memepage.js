const memeId = new URLSearchParams(window.location.search).get('meme')
const imgShowMeme = document.querySelector("img")
const containerElement = document.querySelector(".container")
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