const SubmitButton = document.querySelector('.form')
const tasksList = document.querySelector('.tasks-list')

tasksListArry = []

function hendlSubmit(e){
    e.preventDefault();
    
const inputData = e.target.insert.value;

    if(!e.target.insert.value) return;
    const task = {
        id : Date.now(),
        task:inputData,
        isCompleted:false
        
    }
    // e.target.insert.value = "";
    tasksListArry.unshift(task)
    
    e.target.reset();
    tasksList.dispatchEvent(new CustomEvent("updateTasks"))
}
    function displayTasks(){
        const html = tasksListArry.map(
            (item) =>  ` <li>
            <label id="${item.id}" class="todo-left ${item.isCompleted && "completed"}" for="item-${item.id}">
            <input type="checkbox" id="item-${item.id}" ${item.isCompleted && "checked"} value="${item.id}" />
            ${item.task}
            </label>

            <button type="button" class="edit" value="${item.id}">
            <svg xmlns="http://www.w3.org/2000/svg" class="edit-icon h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </button>

          <button type="button" class="delete" value="${item.id}">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

                 
            </li>`
        ). join("")
        
        tasksList.innerHTML = html;
    }

    function saveTasksIntoLocalStorage(){
        localStorage.setItem("tasksListArry", JSON.stringify(tasksListArry))
    }

    function displayTasksFromLocalStorage() {
        const saveData = JSON.parse(localStorage.getItem("tasksListArry"));

       if(Array.isArray(saveData) && saveData.length > 0){
        //    tasks = saveData
        // saveData.forEach((item) => tasksListArry.push(item))
        tasksListArry.push(...saveData)
           tasksList.dispatchEvent(new CustomEvent("updateTasks"))
           
        }
        
    }
    
    
    function conplitedTasks(id){
        console.log(id)
        const clickItem = tasksListArry.find((item) => item.id ===id)
        clickItem.isCompleted =! clickItem.isCompleted
        tasksList.dispatchEvent(new CustomEvent("updateTasks"))
    }
    
    function deleteTasks(id){
        
        const deleteItem = tasksListArry.filter((item) => item.id !== id)
        tasksListArry = deleteItem
        tasksList.dispatchEvent(new CustomEvent("updateTasks"))
   }

   function editeTasks(id){
       const editItem =  tasksListArry.find((item) => item.id ===id)
      const r =  SubmitButton.querySelector(".input").value = editItem.task
       console.log(SubmitButton.querySelector(".input").value)
   }
   

    SubmitButton.addEventListener('submit', hendlSubmit);
    tasksList.addEventListener("updateTasks", displayTasks )
    tasksList.addEventListener("updateTasks", saveTasksIntoLocalStorage)

    tasksList.addEventListener('click', (e) => {
        
       const id =  parseInt(e.target.id) || parseInt(e.target.value)
        if(e.target.matches("label.todo-left") || e.target.matches("input")){
            conplitedTasks(id)
        } 
        if(e.target.closest(".delete")){
            deleteTasks(parseInt(e.target.closest(".delete").value))
        }
        if(e.target.closest(".edit")){
            editeTasks(parseInt(e.target.closest(".edit").value))
        }
       
    })

    displayTasksFromLocalStorage()