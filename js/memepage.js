const memeId = new URLSearchParams(window.location.search).get('meme')
const imgShowMeme = document.querySelector("img")
const containerElement = document.querySelector(".container")
const addInpElement = document.querySelector(".addInp")
const InpGpElement = document.querySelector(".inputGp")
const leftElement = document.querySelector(".left")
const resetBtnElement = document.querySelector(".resetBtn")
const saveBtnElement = document.querySelector(".saveBtn")
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
    if (InpGpElement.children.length > 5) {

    } else {
        let element = [document.createElement("span"), document.createElement("input"), document.createElement("input"), document.createElement("div")]
        element[0].id = `Sp${InpGpElement.children.length}`;
        element[1].type = "text";
        element[1].placeholder = "TEXT";
        element[2].type = "color";
        element[0].append(element[1])
        element[0].append(element[2])
        InpGpElement.insertBefore(element[0], InpGpElement.children[0])
        element[3].innerText = `#TEXT ${InpGpElement.children.length-2}`
        element[3].contentEditable = "true";
        element[3].classList.add("textShow")
        element[3].id = `Ts${InpGpElement.children.length-1}`
        leftElement.append(element[3]);
    }
    updateTextBox()
    editTextBox()
    ChangeColorTextBox()

}
// make a drag and drop for text boxs
function updateTextBox() {
    const textShowElement = document.querySelectorAll(".textShow")
    textShowElement.forEach((element) => {
        element.addEventListener("mousedown", () => {
            element.addEventListener("mousemove", moveDiv)
        })
        element.addEventListener("mouseup", () => {
            element.removeEventListener("mousemove", moveDiv)
        })
    })

    function moveDiv({ target, clientY, clientX }) {
        target.style.top = `${clientY}px`
        target.style.left = `${clientX}px`
        target.style.transform = `translate(-50%,-50%)`
    }
}
updateTextBox()
    // make edit textboxs

function editTextBox() {
    const TextBoxsInput = document.querySelectorAll(`input[type="text"]`);
    let textValue = null;
    TextBoxsInput.forEach((element) => {
        element.addEventListener("keypress", (e) => {
            textValue = e.target.value;
            textValueId = `Ts${e.target.parentElement.id.replace('Sp', '')}`;
            document.querySelector(`#${textValueId}`).innerText = textValue;
        });
    })


}
editTextBox()
    // make Change textboxs

function ChangeColorTextBox() {
    const TextBoxsInput = document.querySelectorAll(`input[type="color"]`);
    TextBoxsInput.forEach((element) => {
        element.addEventListener("input", (e) => {
            textValue = e.target.value;
            textValueId = `Ts${e.target.parentElement.id.replace('Sp', '')}`;
            document.querySelector(`#${textValueId}`).style.color = textValue;
        });
    })

}
ChangeColorTextBox()
    // make reset Btn
resetBtnElement.addEventListener("click", ResetMeme)

function ResetMeme() {
    let textShowElement = document.querySelectorAll(".textShow")
    const TextBoxsInput = document.querySelectorAll(`span`);
    console.log(TextBoxsInput);
    textShowElement.forEach((element) => {
        element.remove()
    })
    TextBoxsInput.forEach((element) => {
        element.remove()
    })
    addTextBox()
}