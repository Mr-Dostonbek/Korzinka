window.addEventListener('DOMContentLoaded', function() {

    const loader = document.querySelector('.loader');

    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = "none"
        }, 500);
    }, 2000);

    let products = document.querySelectorAll('.product'),
        buttons = document.querySelectorAll('button'),
        openBtn = document.querySelector('.open');

    function createCard() {
        let card = document.createElement('div'),
            field = document.createElement('div'),
            heading = document.createElement('h2'),
            closeBtn = document.createElement('button');

        card.classList.add('cart');
        field.classList.add('cart-field');
        closeBtn.classList.add('close');

        heading.textContent = "В нашей корзине";
        closeBtn.textContent = "Закрыть";

        document.body.appendChild(card);
        card.appendChild(heading);
        card.appendChild(field);
        card.appendChild(closeBtn)

    }

    createCard();

    let card = document.querySelector('.cart'),
        closeBtn = document.querySelector('.close'),
        field = document.querySelector('.cart-field ');

    openBtn.addEventListener('click', () => {
        card.style.display = "block";
    });

    closeBtn.addEventListener('click', () => {
        card.style.display = "none";
    });

    buttons.forEach((item, i) => {
        item.addEventListener('click', () => {
            var cloneItem = products[i].cloneNode(true),
                btn = cloneItem.querySelector('button');

            btn.remove();
            field.append(cloneItem);
            products[i].remove();

        });
    });

});