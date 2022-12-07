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
    console.log(lastTodo);
    lastTodo.remove()
}


function removeFirst() {
    let firstTodo = document.querySelector('ul li')
    firstTodo.remove()
}


function getTasksAsArray() {

    let output = '';

    let allTasks = document.getElementsByTagName('li')
    for (let i = 0; i < allTasks.length; i++) {
        output += allTasks[i].innerText + ', '
    }

    console.log(output)
}




function changeTaskBackgroundColor() {
    let allTasks = document.getElementsByTagName('li')
    for (let i = 0; i < allTasks.length; i++) {
        allTasks[i].style.backgroundColor = colorPicker.value
    }
}

let colorPicker = document.getElementById('colorPicker')
colorPicker.addEventListener('change', changeTaskBackgroundColor)



function bubbleSort() {
    let allTasks = document.getElementsByTagName('li')

    for (let i = 0; i < allTasks.length; i++) {

        // Last i elements are already in place 
        for (let j = 0; j < (allTasks.length - i - 1); j++) {

            // Checking if the item at present iteration
            // is greater than the next iteration
            if (allTasks[j].innerHTML > allTasks[j + 1]) {

                // If the condition is true then swap them
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }

    console.log(arr);

}