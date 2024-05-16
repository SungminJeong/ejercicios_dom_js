/*
1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
evento click que ejecute un console log con la información del evento del click

1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
*/

//1.1
const btn = document.querySelector('#btnToClick');
btn.addEventListener('click', (e) => {
    //const click = document.querySelector('.click')
    console.log(e)
});


//1.2

btn.addEventListener('click', () => {
    const focus = document.querySelector('.focus');
    console.log(focus.value)
    focus.value = '';
    focus.focus();
})

//1.3
const value = document.querySelector('.value');
value.addEventListener('input', () => {
    console.log(value.value)
})

//1.4
const albums = [
    "De Mysteriis Dom Sathanas",
    "Reign of Blood",
    "Ride the Lightning",
    "Painkiller",
    "Iron Fist",
];
const body = document.querySelector('body');
const ul = document.createElement('ul');
for(const album of albums){
    const li = document.createElement('li');
    li.innerText = album;
    ul.appendChild(li);
};
body.appendChild(ul);