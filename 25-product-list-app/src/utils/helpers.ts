export const formatPrice = (price: number) => '$' + price.toFixed(2);

export const scrollToTop = () =>
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
