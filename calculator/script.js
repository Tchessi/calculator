const keys = [...document.querySelectorAll('.btn')];
const listKeyscode = keys.map(key => key.dataset.key);


document.addEventListener('keydown', (e) => console.log(e));