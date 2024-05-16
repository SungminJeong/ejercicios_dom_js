const body = document.querySelector('body');
//1.1
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

for(const country of countries){
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    li.textContent = country;
    ul.appendChild(li);
    body.appendChild(ul);
}

//1.2 
document.querySelector('.fn-remove-me').remove();

//1.3
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const div = document.querySelector('div');
for(const car of cars){
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    li.textContent = car;
    ul.appendChild(li);
    if(div.dataset.function === 'printHere'){
        div.appendChild(ul)
    }
};

//1.4
const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

for(const country of countries2){
    const divs = document.createElement('div');
    divs.classList.add('divOfCountry')
    divs.innerHTML = `
    <h4>${country.title}</h4>
    <img src="${country.imgUrl}" alt="${country.title}">
    `
    body.appendChild(divs);
}

//1.5
const btn = document.createElement('button');
btn.innerText = 'Delete last one'
btn.addEventListener('click', () => {
    const divs = document.querySelectorAll('div');
    divs[divs.length - 1].remove()

});
body.appendChild(btn);

//1.6
const divOfcountry = document.querySelectorAll('.divOfCountry');

for(const item of divOfcountry){
    const delBtn = document.createElement('button');
    delBtn.innerText = "Delete";
    delBtn.addEventListener('click', (e) => {
        e.target.parentNode.remove()
    })
    item.appendChild(delBtn)
};



