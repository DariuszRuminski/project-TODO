let todoList = null;
let todoForm = null;
let todoSearch = null;

function addTask(text){
    const todo = document.createElement('div');
    todo.classList.add('todo-element');
    todoList.appendChild(todo);
    
    const todoBar = document.createElement('div');
    todoBar.classList.add('todo-element-bar');
    todo.appendChild(todoBar);
    
    const todoDate = document.createElement('h3');
    todoDate.classList.add('todo-element-date');
    const date = new Date();
    
    let dateDay = date.getDate();
    let dateMonth = (date.getMonth()+1);
    let dateMinutes = date.getMinutes();
    if(dateDay < 10){
        dateDay='0'+dateDay;
    }
    if(dateMonth < 10){
        dateMonth='0' + dateMonth;
    }
    if(dateMinutes<10){
        dateMinutes = '0' + dateMinutes;
    }
    
    const dateText = dateDay + '-' + dateMonth + '-' + date.getFullYear() + ' godz. ' + date.getHours() + ':' + dateMinutes;
    todoDate.innerText = dateText;
    todoBar.appendChild(todoDate);
    
    const todoDelete = document.createElement('button');
    todoDelete.classList.add('todo-element-delete');
    todoDelete.title = 'Usuń zadanie';
    todoDelete.innerHTML = '<span class="fas fa-times-circle"></span>';
    todoBar.appendChild(todoDelete);
    
    todoDelete.addEventListener('click', function(){
        todoDelete.parentElement.parentElement.remove();
    });
    
    
    const todoText = document.createElement('div');
    todoText.classList.add('todo-element-text');
    todoText.innerText = text;
    todo.appendChild(todoText);
}


document.addEventListener('DOMContentLoaded', function(){
    todoList = document.querySelector('#todoList');
    todoForm = document.querySelector('#todoForm');
    todoSearch = document.querySelector('#todoSearch');
    
    todoForm.addEventListener('submit', function(e){
        e.preventDefault();
        const textarea = this.querySelector('#todoMessage');
        if(textarea.value !== ''){
            addTask(textarea.value);
            textarea.value = '';
        }
    });
    
    todoSearch.addEventListener('input', function(){
        const text = this.value;
        const el = todoList.querySelectorAll('.todo-element');
        
        for(let e of el){
            const textElement = e.querySelector('.todo-element-text').innerText;
            
            if(textElement.indexOf(text) === -1){
                e.style.setProperty('display','none');
            }else{
                e.style.setProperty('display','');
            }
        }
    });
});