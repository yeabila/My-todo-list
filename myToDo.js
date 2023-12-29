function toDo(){
    let task = document.getElementById('display')
    let doList = document.getElementById('lists')

    if(task.value !== ''){
        let taskItem = document.createElement('li')
        taskItem.innerText = task.value
        doList.appendChild(taskItem)

        taskItem.value = ''
    
        taskItem.addEventListener('click', ()=>{
            taskItem.style.color = 'red'
            taskItem.style.cursor = 'pointer'
            taskItem.style.textDecoration = 'line-through'
            
        })
    }


}