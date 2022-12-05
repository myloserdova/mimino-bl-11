(() => {
  const refs = {
    openModalBtn: document.querySelector('.open-modal-price-button'),
    openModalBtn2: document.querySelector('.button-prices'),
    closeModalBtn: document.querySelector('.close-modal-price'),
    modal: document.querySelector('.modal-price__backdrop'),
    body: document.querySelector("body"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.openModalBtn2.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    refs.body.classList.toggle("is-scroll-disabled");
    
  }
})();