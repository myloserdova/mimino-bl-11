(() => {
  const refs = {
    openModalBtn: document.querySelector('.hero__btn'),
    closeModalBtn: document.querySelector('.close-modal-button'),
    modal: document.querySelector('.modal-book-room__backdrop'),
    body: document.querySelector("body"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    refs.body.classList.toggle("is-scroll-disabled");
    
  }
})();




