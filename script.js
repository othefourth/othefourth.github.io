document.getElementById('year').textContent = new Date().getFullYear();
const modal = document.getElementById('reelModal');
document.getElementById('reelButton').addEventListener('click', () => {
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
});
document.getElementById('modalClose').addEventListener('click', closeModal);
modal.addEventListener('click', e => { if(e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeModal(); });
function closeModal(){
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
}
