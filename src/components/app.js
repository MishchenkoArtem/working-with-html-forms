import { button } from './constans';

const createWidget = ({ top }) => {
    const element = document.createElement('div');
    const elementTitle = document.createElement('h2');
    const elementText = document.createElement('p');

    element.classList.add('body__popover');
    elementTitle.classList.add('body__popover-title');
    elementText.classList.add('body__popover-text');

    elementTitle.textContent = 'Popover title';
    elementText.textContent = `And here's some amazing content. It's very engaging. Right?`;

    element.style.bottom = top + 60 + 'px';

    element.append(elementTitle, elementText);
    document.body.append(element);
}

button.addEventListener('click', () => {
    const { top } = button.getBoundingClientRect();

    if (document.querySelector('.body__popover')) {
        document.querySelector('.body__popover').remove();
        return;
    }

    createWidget({ top });
});

document.querySelector('.body').addEventListener('click', (event) => {
    if (!document.querySelector('.body__popover')) return;

    if (event.currentTarget.className === event.target.className) {
        document.querySelector('.body__popover').remove();
    }
});
