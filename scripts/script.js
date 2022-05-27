const storeScroll = () => {
  document.documentElement.dataset.scroll = window.scrollY;
};

document.addEventListener("scroll", storeScroll);

storeScroll();
