const header = document.querySelector('.header');
const main = document.querySelector('main');
const body = document.querySelector('body');
const overlays = document.querySelectorAll('.overlay');
const messageEl = document.querySelector('.message');

const nav = document.querySelector('.nav');
const navToggleBtn = document.querySelector('.mobile-nav-btn');
const navLinks = document.querySelectorAll('.nav__link');

const quantity = document.querySelector('#quantity');
const decreaseBtn = document.querySelector('#decrease');
const increaseBtn = document.querySelector('#increase');

const cart = document.querySelector('.cart');
const cartContent = document.querySelector('.cart__content');
const cartToggleBtn = document.querySelector('.cart-btn');
const cartNotification = document.querySelector('.cart__notification');
const addToCartBtn = document.querySelector('#add-to-cart');
const removeFromCartBtn = document.querySelector('.cart__delete-btn');
const cartList = document.querySelector('.cart__list');
const checkoutBtn = document.querySelector('#checkout');

const sliderEl = document.querySelector('.slider');
const previewCloseBtn = document.querySelector('.slider-close-btn');
const previewBtn = document.querySelector('.product__preview-btn');
const thumbnailsContainers = document.querySelectorAll('.product__thumbnails');
const thumnails = document.querySelectorAll('.product__thumbnail-btn');

// Adjust main top padding
const adjustPadding = function () {
  const headerHeight = header.getBoundingClientRect().height;
  main.style.paddingBlockStart = headerHeight + 'px';
};

// Navigation
const displayNavigation = function () {
  navToggleBtn.setAttribute('aria-expanded', true);
  nav.setAttribute('data-visible', true);
  addOverlay();
};
const hideNavigation = function () {
  navToggleBtn.setAttribute('aria-expanded', false);
  nav.setAttribute('data-visible', false);
  removeOverlay();
};
const navToggleHandler = function () {
  const visibility = nav.getAttribute('data-visible');
  visibility === 'false' ? displayNavigation() : hideNavigation();
  hideCart();
};

// Overlay
const addOverlay = function () {
  overlays.forEach(overlay => overlay.classList.remove('overlay-hidden'));
  navLinks.forEach(link => (link.style.color = 'hsl(220, 13%, 13%)'));
  hideMessage();
};
const removeOverlay = function () {
  overlays.forEach(overlay => overlay.classList.add('overlay-hidden'));
  navLinks.forEach(link => (link.style.color = 'hsl(219, 9%, 45%)'));
};

// Carousel
const slider = function () {
  const images = document.querySelectorAll('.slider__img');
  const previousBtn = document.querySelector('.slider__previous-btn');
  const nextBtn = document.querySelector('.slider__next-btn');

  let curImg = 0;
  const maxImg = images.length;

  const goToImg = function (imgToDisplay) {
    images.forEach((img, i) => {
      img.style.transform = `translateX(${100 * (i - imgToDisplay)}%)`;
    });

    const thumbnailsContainer = sliderEl.querySelector('.product__thumbnails');
    if (!thumbnailsContainer) return;

    const thumnail = thumbnailsContainer.querySelector(
      `.product__thumbnail-btn[data-product="${imgToDisplay + 1}"]`
    );
    updateThumbnails(thumbnailsContainer, thumnail);
  };

  const nextImg = function () {
    if (curImg === maxImg - 1) curImg = 0;
    else curImg++;
    goToImg(curImg);
  };

  const previousImg = function () {
    if (curImg === 0) curImg = maxImg - 1;
    else curImg--;
    goToImg(curImg);
  };

  previousBtn.addEventListener('click', previousImg);
  nextBtn.addEventListener('click', nextImg);

  sliderEl.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') previousImg();
    if (e.key === 'ArrowRight') nextImg();
  });
  goToImg(0);

  return goToImg;
};
const hideDesktopCarousel = function () {
  sliderEl.classList.remove('slider-desktop');
};
const displayPreview = function () {
  const index = document
    .querySelector('.product__preview')
    .querySelector('.product__thumbnail-btn--active')
    .getAttribute('data-product');
  updateCarousel(index);
  hideCart();
  addOverlay();
  sliderEl.classList.add('slider-desktop');
  sliderEl.focus();
};
const hideFixedElements = function () {
  hideNavigation();
  hideDesktopCarousel();
};

// Quantity
const decreaseQuantity = function () {
  quantity.value--;
  quantityChange();
};
const increaseQuantity = function () {
  quantity.value++;
  quantityChange();
};
const quantityChange = function () {
  if (quantity.value < 0) quantity.value = 0;
  if (quantity.value >= 100) quantity.value = 100;
};

// Cart
const displayCart = function () {
  cartToggleBtn.setAttribute('aria-expanded', true);
  cart.setAttribute('data-visible', true);
};
const hideCart = function () {
  cartToggleBtn.setAttribute('aria-expanded', false);
  cart.setAttribute('data-visible', false);
};
const cartToggleHandler = function () {
  const visibility = cart.getAttribute('data-visible');
  visibility === 'false' ? displayCart() : hideCart();
};
const clearCart = function () {};

// Message
const renderMessage = function (message) {
  messageEl.textContent = message;
  messageEl.classList.remove('hidden');
  setTimeout(() => hideMessage(), 2500);
};
const hideMessage = function () {
  messageEl.classList.add('hidden');
  messageEl.textContent = '';
};

const removeItemFromCart = function () {
  this.parentElement.remove();
  if (cartList.children.length === 0) {
    cartNotification.classList.remove('hidden');
    checkoutBtn.classList.add('hidden');
  }
  updateCartImg();
};

// Updates
const updateCart = function () {
  const priceEl = document.querySelector('.product__price-current');
  const price = +priceEl.getAttribute('data-price');
  const itemQuantity = +quantity.value;
  const productQuantity = document.querySelectorAll('.cart__item').length;
  const maxProduct = 4;

  if (!itemQuantity) {
    renderMessage('Choose quantity!');
    return;
  }

  if (productQuantity === maxProduct - 1) {
    renderMessage('Your cart is full!');
    return;
  }

  const total = price * itemQuantity;

  const markup = `
  <li class="cart__item">
    <img
      src=".//assets/images/image-product-1-thumbnail.jpg"
      alt=""
      class="cart__item-img"
      aria-hidden="true"
    />
    <div class="cart__item-info">
      <span class="cart__item-name"
        >Fall Limited Edition Sneakers</span
      >
      <div class="cart__item-price">
        <span class="item-price">$${price}</span> x
        <span class="item-quantity" data-quantity="${itemQuantity}">${itemQuantity}</span>
        <span class="item-total-price">$${total}</span>
      </div>
    </div>
    <button class="cart__item-delete-btn">
      <img
        src="./assets/images/icon-delete.svg"
        alt=""
        aria-hidden="true"
      />
    </button>
  </li>
  `;

  cartNotification.classList.add('hidden');
  cartList.insertAdjacentHTML('afterbegin', markup);
  checkoutBtn.classList.remove('hidden');

  const deleteBtn = document.querySelector('.cart__item-delete-btn');
  deleteBtn.addEventListener('click', removeItemFromCart);

  displayCart();
  updateCartImg();
};
const updateCartImg = function () {
  const getAllQuantity = function () {
    const quantity = Array.from(products)
      .map(
        product =>
          +product.querySelector('.item-quantity').getAttribute('data-quantity')
      )
      .reduce((acc, value) => acc + value, 0);
    return quantity;
  };

  const status = document.querySelector('.cart-status');
  const products = [...document.querySelectorAll('.cart__item')];
  const quantity = getAllQuantity();

  if (!quantity) {
    status.textContent = '';
    status.setAttribute('data-visible', false);
  } else {
    status.textContent = `${quantity}`;
    status.setAttribute('data-visible', true);
  }
};

const updateThumbnails = function (container, target) {
  container
    .querySelectorAll('.product__thumbnail-btn')
    .forEach(thumbnail =>
      thumbnail.classList.remove('product__thumbnail-btn--active')
    );
  target.classList.add('product__thumbnail-btn--active');
};
const updateImage = function (e) {
  const target = e.target;
  const targetBtn = target.closest('.product__thumbnail-btn');
  if (!targetBtn) return;

  updateThumbnails(this, targetBtn);

  const image =
    this.parentElement.querySelector('.product__preview-img') ||
    this.parentElement.querySelector('.slider__img');
  if (!image) return;

  const index = targetBtn.getAttribute('data-product');
  image.classList.contains('product__preview-img')
    ? updatePreview(index)
    : updateCarousel(index);
};
const updatePreview = function (index) {
  const image = document.querySelector('.product__preview-img');
  image.setAttribute('src', `./assets/images/image-product-${index}.jpg`);
};
// Get goToImage function from the slider
const updateCarousel = function (index) {
  const inner = slider();
  inner(index - 1);
};

// Listeners
const init = function () {
  window.addEventListener('load', adjustPadding);
  window.addEventListener('resize', adjustPadding);
  navToggleBtn.addEventListener('click', navToggleHandler);
  cartToggleBtn.addEventListener('click', cartToggleHandler);
  overlays.forEach(overlay =>
    overlay.addEventListener('click', hideFixedElements)
  );
  decreaseBtn.addEventListener('click', decreaseQuantity);
  increaseBtn.addEventListener('click', increaseQuantity);
  quantity.addEventListener('change', quantityChange);
  previewBtn.addEventListener('click', displayPreview);
  previewCloseBtn.addEventListener('click', hideFixedElements);
  thumbnailsContainers.forEach(thumbnail =>
    thumbnail.addEventListener('click', updateImage)
  );
  addToCartBtn.addEventListener('click', updateCart);
  slider();
};
init();
