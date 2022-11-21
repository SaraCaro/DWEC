let form = document.getElementById('form');
let input = document.getElementById('addItems');
let list = document.getElementById('groceryList');
let submit = document.getElementById('submit');
let clearItems = document.getElementById('clear');
let deleteButton = document.getElementsByClassName('delete');
let changeItem = document.getElementsByClassName('change');


form.addEventListener('submit', (event) => {
    event.preventDefault();
    let value = input.value;
    let li = document.createElement('li');
    let span = document.createElement('span');
    span.innerHTML = value;
    list.appendChild(li);
    li.appendChild(span);
    input.value = '';


    let deleteButton = document.createElement('button');
    let changeItem = document.createElement('button');
    deleteButton.innerHTML = 'X';
    changeItem.innerHTML = 'change';
    li.appendChild(deleteButton);
    li.appendChild(changeItem);

    deleteButton.className = 'delete';
    changeItem.className = 'change';

    for(let i = 0; i < deleteButton.length; i++) {
        deleteButton[i].addEventListener('click', (event) => {
            let li = event.target.parentElement;
            li.parentElement.removeChild(li);
        });
    }

    for(let i = 0; i < changeItem.length; i++) {
        changeItem[i].addEventListener('click', (event) => {
            let userValue = prompt('Enter new item');
            let li = event.target.parentElement;
            let span = li.firstElementChild;
            span.textContent = userValue;
        });
    }

    for(i = 0; i < list.children.length; i++) {
        localStorage.setItem('linea ' + i, list.children[i].textContent);
    }

});


clearItems.addEventListener('click', () => {
    while(list.firstChild) {
        list.removeChild(list.lastChild);
    }
});

