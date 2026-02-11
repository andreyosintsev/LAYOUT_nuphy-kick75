document.addEventListener('DOMContentLoaded', () => {
    console.log('price-selector.js loaded!');
    const pricePanel = document.querySelector('.panel-single__price');

    if (!pricePanel) return console.warn('DOM: no .panel-single__price element found');

    const priceRadios = document.querySelectorAll('.form__radio');

    const initialRadio = document.querySelector('.form__radio:checked') || priceRadios[0];
    pricePanel.textContent = initialRadio.dataset.price;

    priceRadios.forEach(priceRadio => priceRadio.addEventListener('change', setPrice));

    function setPrice(e) {
        if (e.target && e.target.checked) {
            pricePanel.textContent = e.target.dataset.price;
        }
    }
})