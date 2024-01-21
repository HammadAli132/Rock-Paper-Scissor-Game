const first = document.getElementById('first');
const second = document.getElementById('second');
const button = document.querySelector('#first > button');

button.addEventListener('click', () => {
    first.style.display = 'none';
    second.style.display = 'flex';
    second.style.flexDirection = 'column';
})