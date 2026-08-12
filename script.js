const year = document.getElementById('year');
year.textContent = new Date().getFullYear();

const reel = document.querySelector('.reel');
const modal = document.getElementById('reelModal');
const close = document.getElementById('modalClose');

function openModal() {
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
}

function closeModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
}

reel.addEventListener('click', openModal);
close.addEventListener('click', closeModal);

modal.addEventListener('click', (event) => {
  if (event.target === modal) closeModal();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeModal();
});
