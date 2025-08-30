const books = document.querySelectorAll('.book');
const overlay = document.querySelector('.overlay');

// Könyvre kattintás logika
books.forEach(book => {
  book.addEventListener('click', () => {
    const id = book.dataset.id;

    book.classList.add('pulled');

    setTimeout(() => {
      overlay.classList.add('show');
      const card = document.querySelector(`.cards[data-id="${id}"]`);
      if(card) card.classList.add('show-cards');
    }, 600);
  });
});

// X gombok eseménykezelője
document.querySelectorAll('.escape').forEach(btn => {
  btn.addEventListener('click', () => {
    closeCard();
  });
});

// Overlay-re kattintás
overlay.addEventListener('click', closeCard);

// Függvény a kártya és könyv bezárásához
function closeCard() {
  overlay.classList.remove('show');
  document.querySelectorAll('.cards.show-cards').forEach(card => {
    const id = card.dataset.id;
    card.classList.remove('show-cards');
    const book = document.querySelector(`.book[data-id="${id}"]`);
    if(book) book.classList.remove('pulled');
  });
}
