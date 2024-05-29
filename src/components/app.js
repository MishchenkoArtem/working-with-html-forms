import { button, widget } from './constans';

button.addEventListener('click', () => {
    widget.classList.toggle('body__popover_invisible');
});

document.querySelector('.body').addEventListener('click', (event) => {
    if (event.currentTarget.className === event.target.className) {
        widget.classList.add('body__popover_invisible');
    }
});
