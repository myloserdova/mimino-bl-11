(() => {
  const refs = {
    openModalBtn: document.querySelector('.open-modal-book-room-button'),
    closeModalBtn: document.querySelector('.close-modal-button'),
    openModalBtn2: document.querySelector('.homepage-hotel__button'),
    modal: document.querySelector('.modal-book-room__backdrop'),
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