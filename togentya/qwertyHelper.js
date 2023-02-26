/////////////////add
function addT(event){
event.preventDefault()
const taskt = input.value
const newTask = {
    id: Date.now(),
    text: taskt,
    done: false
}
tasks.push(newTask)
const cssClass = newTask.done ? "task-title task-title--done" : "task-title" ;
    const taskHTML = `
    <li  id = "${newTask.id}" class="list-group-item d-flex justify-content-between task-item">
    <span class="${cssClass}">${taskt}</span>
    <div class="task-item__buttons">
        <button type="button" data-action="done" class="btn-action">
            <img src="./img/tick.svg" alt="Done" width="18" height="18">
        </button>
        <button type="button" data-action="delete" class="btn-action">
            <img src="./img/cross.svg" alt="Done" width="18" height="18">
        </button>
    </div>
    </li> `
    taskList.insertAdjacentHTML('beforeend',taskHTML)
    input.value = ' '
    input.focus()
    if(taskList.children.length > 1){
        empty.classList.add('none')
    }
    saveLocalStorage()
    // saveCo()
    // check()
}
//////////////delete
function deleteT(event){
if(event.target.dataset.action == 'delete') {
    const parent = event.target.closest('.list-group-item')
    parent.remove()
    if(taskList.children.length === 1){
    empty.classList.remove('none')  
}
}
const id = Number(parent.id)
const index = tasks.findIndex(function (task) {
    return task.id === id
})
tasks.splice(index, 1)
saveLocalStorage()
// saveCo()
// check()
}
////////////////////complete
function completeT(event){
const parent2 = event.target.closest('.list-group-item')
const parq2 = parent2.querySelector('.task-title')
if(event.target.dataset.action === 'done'){
parq2.classList.toggle('task-title--done')
}
const id = parent2.id
let task = tasks.find(function (task) {
        return task.id == id 
}) 
// saveCo()
// task.done = true
saveLocalStorage()
}
// function check(){
// if(tasks.length === 0){
//     const emptyList = `
//     <li id="emptyList" class="list-group-item empty-list">
//     <img src="./img/leaf.svg" alt="Empty" width="48" class="mt-3">
//     <div class="empty-list__title">Список задач пуст</div>
//     </li> `
//     taskList.insertAdjacentHTML('afterbegin',emptyList)
// }
// if(tasks.length > 0){
//     const emptyListell = document.querySelector('#emptyList')
//     emptyListell ? emptyListell.remove(): null ;
// }
// }
// function saveCo(){
//     localStorage.setItem('tasks', JSON.stringify(tasks))
// }
function saveLocalStorage(){
 localStorage.setItem('taskHTML',taskList.innerHTML)
}