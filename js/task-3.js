import images from './data/images.js';

const gallery = document.querySelector('#gallery');

const makeGallery = ({ url, alt }) => {
  return `
      <li class="item">
        <img class="image" src="${url}" alt="${alt}" width="380" height="300"/>
      </li>`;
};

const makeHTML = images.map(makeGallery).join('');

gallery.insertAdjacentHTML('beforeend', makeHTML);
