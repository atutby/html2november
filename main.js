let cards = document.querySelectorAll(".portfolio__item");

cards.forEach(item => (item.style.cssText = `
border: 3px blue solid; border-radius: 10px; padding: 5px;
`))


button.addEventListener("click", (event) => {
  event.preventDefault();
  // event.stopPropagation();
  confirm('Вам уже исполнилось 18 лет?');
})