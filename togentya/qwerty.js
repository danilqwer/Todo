const fotmat = document.querySelector('#form')
const input = document.querySelector('#taskInput')
const list = document.querySelector('#emptyList')
const taskList = document.querySelector('#tasksList')
const empty = document.querySelector('#emptyList')
let tasks = []
if(localStorage.getItem('taskHTML')){
    taskList.innerHTML = localStorage.getItem('taskHTML')
}
// if(localStorage.getItem('tasks')){
//  tasks = JSON.parse(localStorage.getItem('tasks'))
// }
// tasks.forEach(function( task )){
//     const cssClass = task.done ? "task-title task-title--done" : "task-title" ;
//     const taskHTML = `
//     <li  id = "${task.id}" class="list-group-item d-flex justify-content-between task-item">
//     <span class="${cssClass}">${task}</span>
//     <div class="task-item__buttons">
//         <button type="button" data-action="done" class="btn-action">
//             <img src="./img/tick.svg" alt="Done" width="18" height="18">
//         </button>
//         <button type="button" data-action="delete" class="btn-action">
//             <img src="./img/cross.svg" alt="Done" width="18" height="18">
//         </button>
//     </div>
//     </li> `
//     taskList.insertAdjacentHTML('beforeend',taskHTML)
// }
// check()
fotmat.addEventListener('submit' , addT)
taskList.addEventListener('click', deleteT)
taskList.addEventListener('click',completeT)
