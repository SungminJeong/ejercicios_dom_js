const body = document.querySelector('body');
//2.1
const div = document.createElement('div');
body.appendChild(div);
//2.2
const divConp = document.createElement('div');
const p = document.createElement('p');
divConp.appendChild(p);
body.appendChild(divConp)

//2.3
const divCon6p = document.createElement('div');
//body.appendChild(divCon6p);

for(let i = 0; i < 6; i++){
    let p = document.createElement('p');
    divCon6p.appendChild(p)
};
body.appendChild(divCon6p);

//2.4
const pConText = document.createElement('p');
pConText.innerHTML = 'Soy dinámico!';
body.appendChild(pConText);

//2.5
const h2 = document.querySelector('.fn-insert-here');
h2.textContent = 'Wubba Lubba dub dub';

//2.6
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul = document.createElement('ul');
for(const item of apps){
    let li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
};
body.appendChild(ul);

//2.7
const removeME = document.querySelectorAll('.fn-remove-me');
for(const delItem of removeME){
    delItem.remove();
};

//2.8
/*
2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
	Recuerda que no solo puedes insertar elementos con .appendChild. 
    */
/*
const container = document.createElement('div');
const smallContainer = document.createElement('div');

container.insertAdjacentHTML("beforeend", "<div><p>Voy en medio!</p></div>")
body.appendChild(container)
*/

/*
const losDos = document.querySelector('.losDos');
const entreP = document.createElement('p');
p.textContent = "Voy en medio!"
body.insertBefore(p, losDos)
*/
const dosDiv = document.querySelectorAll('div');
for(let i = 0; i < dosDiv.length; i++){
    //console.log(dosDiv[i])
    const entreP = document.createElement('p');
    p.textContent = "Voy en medio!"
    body.insertBefore(p, dosDiv[1]);
}

//2.9
const fn_insert_here = document.querySelectorAll('.fn-insert-here')
for(const i of fn_insert_here){
    let p = document.createElement('p');
    p.innerHTML = 'Voy dentro!'
    i.appendChild(p)
}