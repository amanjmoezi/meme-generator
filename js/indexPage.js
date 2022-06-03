let imgSrc = "";
let aTag = "";
const container = document.querySelector(".container")
for(i=0;i<=37;i++)
{
    imgSrc = i;
    aTag=i;
    let item = `
    <div class="items">
      <img src="meme/${imgSrc}.jpg"  alt="">
      <a href="memePage.html?meme=${aTag}" class="addBtn"><svg fill="#fff" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="AddIcon"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg></a>
    </div>`
   container.innerHTML += item 
}