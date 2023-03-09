import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const markupForGalleryItems = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
  })
  .join("");

galleryContainer.insertAdjacentHTML("beforeend", markupForGalleryItems);

galleryContainer.addEventListener("click", handleLinkClick);

function handleLinkClick(event) {
  event.preventDefault();
  const instanse = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height="600">`
  );
  instanse.show();
  galleryContainer.addEventListener("keydown", modalClose);
}

function modalClose(event) {
  console.log(event.code);
  if (event.code === "Escape") {
    instanse.close();
  }
}
