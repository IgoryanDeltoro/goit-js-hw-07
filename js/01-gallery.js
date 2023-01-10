import { galleryItems } from "./gallery-items.js";
// Change code below this line

const divElementByClass = document.querySelector(".gallery");

divElementByClass.addEventListener("click", createModalWindow);

addGaleryOnPage();

function addGaleryOnPage() {
  const divElement = galleryItems
    .map(({ preview, original, description }) => {
      return ` <div class="gallery__item"><a class="gallery__link" href="large-image.jpg">
    <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></div>`;
    })
    .join("");

  divElementByClass.innerHTML = divElement;
}

function createModalWindow(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const largeImg = event.target.dataset.source;

  const instance = basicLightbox.create(
    `
    <img src="${largeImg}" width="800" height="600">
`,
    {
      onShow: () => document.addEventListener("keydown", hendleEventKeydown),
      onClose: () =>
        document.removeEventListener("keydown", hendleEventKeydown),
    }
  );

  instance.show();

  function hendleEventKeydown(event) {
    console.log(event);
    if (event.code !== "Escape") {
      return;
    }

    instance.close();
  }
}
