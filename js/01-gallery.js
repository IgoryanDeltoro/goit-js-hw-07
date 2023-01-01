import { galleryItems } from "./gallery-items.js";
// Change code below this line

const divElementByClass = document.querySelector(".gallery");

divElementByClass.addEventListener("click", hendleEventGalery);

addListOnPage();

function addListOnPage() {
  const liElement = galleryItems
    .map(({ preview, original, description }) => {
      return ` <div class="gallery__item"><a class="gallery__link" href="large-image.jpg">
    <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></div>`;
    })
    .join("");

  renderStringOfTagOnHtml(liElement);
}

function renderStringOfTagOnHtml(string) {
  divElementByClass.innerHTML = string;
}

function hendleEventGalery(event) {
  event.preventDefault();
  console.log(event.target);
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const largeImg = event.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${largeImg}" width="800" height="600">
`);

  instance.show();

  document.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
}
