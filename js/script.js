const popupContactUsOpen = document.querySelector('.openContactPopupButton');
const popupOpen = document.querySelector('.popup-contact-us');
const popupClose = document.querySelector('.close-contact');
const popupMapOpen = document.querySelector('.openMapPopupButton');
const mapOpen = document.querySelector('.popup-map');
const mapClose = document.querySelector('.close-map');

popupContactUsOpen.addEventListener("click", e => {
  e.preventDefault();
  popupOpen.classList.add('popup-contact-us-activate');
  console.log(popupOpen.classList);
});

popupClose.addEventListener("click", e => {
  e.preventDefault();
  popupOpen.classList.remove('popup-contact-us-activate');
  console.log(popupOpen.classList);
});

popupMapOpen.addEventListener("click", e => {
  e.preventDefault();
  mapOpen.classList.add('popup-map-activate');
  console.log(mapOpen.classList);
});

mapClose.addEventListener("click", e => {
  e.preventDefault();
  mapOpen.classList.remove('popup-map-activate');
  console.log(mapOpen.classList);
});



