import { galleryItems } from "./gallery-items.js";
// Change code below this line

const listElementByClass = document.querySelector(".gallery");

addGaleryOnPage();

function addGaleryOnPage() {
  const liElement = galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join("");

  listElementByClass.innerHTML = liElement;
}

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
});
