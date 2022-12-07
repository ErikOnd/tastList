function addNewTask() {
    let inputField = document.getElementById('newTask')
    newLi = document.createElement('li')
    newLi.innerText = inputField.value;
    let newTodo = document.getElementById('myTaskList')
    newTodo.appendChild(newLi);
    inputField.value = ''
}


function removeLast() {

    let lastTodo = document.querySelector('ul li:last-child')
    lastTodo.remove()
}


function removeFirst() {
    let firstTodo = document.querySelector('ul li')
    firstTodo.remove()
}


function getTasksAsArray() {

    let allTasks = document.getElementsByTagName('li')
    let tasksArray = [];

    for (let i of allTasks) {
        tasksArray.push(i.innerText)
    }
    return tasksArray

}

function changeTaskBackgroundColor() {
    let allTasks = document.getElementsByTagName('li')
    for (let i of allTasks) {
        i.style.backgroundColor = colorPicker.value
    }
}

let colorPicker = document.getElementById('colorPicker')
colorPicker.addEventListener('change', changeTaskBackgroundColor)



// Ex. 10

function bubblesort() {
    let allTasks = document.getElementsByTagName('li')
    let tasksArray = getTasksAsArray();

    let len = tasksArray.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (tasksArray[j] > tasksArray[j + 1]) {
                let tmp = tasksArray[j];
                tasksArray[j] = tasksArray[j + 1];
                tasksArray[j + 1] = tmp;
            }
        }
    }
    let x = tasksArray.length - 1;
    for (let i = allTasks.length - 1; i >= 0; i--) {
        allTasks[i].innerHTML = tasksArray[x]
        x--
    }
    return tasksArray;

}