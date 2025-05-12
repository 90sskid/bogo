function selectCard(selectedCard) {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    card.classList.remove('active');
    const radio = card.querySelector('input[type="radio"]');
    radio.checked = false;
  });

  selectedCard.classList.add('active');
  const selectedRadio = selectedCard.querySelector('input[type="radio"]');
  selectedRadio.checked = true;

  const price = selectedCard.getAttribute('data-price');
  document.getElementById('totalPrice').textContent = parseFloat(price).toFixed(2);
}
