const popupContactUsOpen = document.querySelector('.contacts-button');
const popupOpen = document.querySelector('.popup-contact-us');
const popupClose = document.querySelector('.close-contact');
const popupMapOpen = document.querySelector('.openMapPopupButton');
const mapOpen = document.querySelector('.popup-map');
const mapClose = document.querySelector('.close-map');

popupContactUsOpen.addEventListener("click", e => {
  e.preventDefault();
  popupOpen.classList.add('popup-contact-us-activate');
  if (getComputedStyle(popupOpen).display === 'block') {
    console.log('Successfully added "Display: block" style to .popup-contact-us selector...')
  }
  else {
    alert('Cannot add "Display: block" style to .popup-map selector...')
  }
});

popupClose.addEventListener("click", e => {
  e.preventDefault();
  popupOpen.classList.remove('popup-contact-us-activate');
  if (getComputedStyle(popupOpen).display === 'none') {
    console.log('Successfully added "Display: none" style to .popup-contact-us selector...')
  }
  else {
    alert('Cannot add "Display: block" style to .popup-map selector...')
  }
});

popupMapOpen.addEventListener("click", e => {
  e.preventDefault();
  mapOpen.classList.add('popup-map-activate');
  if (getComputedStyle(mapOpen).display === 'block') {
    console.log('Successfully added "Display: block" style to .popup-map selector...')
  }
  else{
    alert('Cannot add "Display: block" style to .popup-map selector...')
  }
});

mapClose.addEventListener("click", e => {
  e.preventDefault();
  mapOpen.classList.remove('popup-map-activate');
  if (getComputedStyle(popupOpen).display === 'none') {
    console.log('Successfully added "Display: none" style to .popup-map selector...')
  }
  else {
    alert('Cannot add "Display: none" style to .popup-map selector...')
  }
});
