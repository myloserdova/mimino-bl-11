(() => {
  const refs = {
    openModalBtn: document.querySelector('.open-modal-price-button'),
    openModalBtn2: document.querySelector('.open-modal-price-button2'),
    openModalBtn3: document.querySelector('.open-modal-price-button3'),
    openModalBtn4: document.querySelector('.open-modal-price-button4'),
    closeModalBtn: document.querySelector('.close-modal-price'),
    modal: document.querySelector('.modal-price__backdrop'),
    body: document.querySelector("body"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.openModalBtn2.addEventListener("click", toggleModal);
  refs.openModalBtn3.addEventListener("click", toggleModal);
  refs.openModalBtn4.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    refs.body.classList.toggle("is-scroll-disabled");
    
  }
})();