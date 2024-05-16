//1.1
const button = document.querySelector('.showme');
console.log(button);
//1.2
const h1 = document.querySelector('#pillado');
console.log(h1);
//1.3
const p = document.querySelectorAll('p');
console.log(p);
//1.4
const pokemon = document.querySelectorAll('.pokemon');
console.log(pokemon);
//1.5
const testMe = document.querySelectorAll('[data-function]');
console.log(testMe)
//1.6
for(let i = 0; i < 3; i++){
    console.log(testMe[i])
};

