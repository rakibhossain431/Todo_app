let SubmitButton = document.querySelector('.rakib')
let list = document.querySelector('.list')

    let taskList = [];
    function hendlSubmit(e){

        e.preventDefault();
        const inputData =  e.target.insert.value;
        
        const task = {
            id: Date.now(),
            task:inputData,
            isCompleted: false,
        }
        taskList.push(task);
        // console.log(taskList);
         e.target.reset();
         list.dispatchEvent(new CustomEvent("itemsUpdated"))
        

    }
            
        function addHtmlForListItem(items) {
                // Optional chaining
                // Sort circut Operator || Logical operrator
                // Sort circutint Operator
            
                return Array.isArray(items ) && items?.map(element => {
             
                   return `<li>
                     <input type="checkbox" />
                    
                    ${element.task}
                    
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z">
                     </path></svg>
                     <button value="${element.id}"> &times;</button>
                 </li>`
              
                }).join(" ") 

          
        }
        function displayTasks() {
             
            const html = addHtmlForListItem(taskList);
            
             
             list.innerHTML = html;
        }

         function saveItemIntoLocalStorage() {
            localStorage.setItem('tasks', JSON.stringify(taskList))
        }

         function displayTasksFromLocalStorage() {
            
            const tastsFromLs = JSON.parse(localStorage.getItem('tasks'));
            


         const html = addHtmlForListItem(tastsFromLs);

            list.innerHTML = html;  
        }
        displayTasksFromLocalStorage();


        function deletiteme(id) {

                const existingTasks = [...list.querySelectorAll('li')];

                const newItem = existingTasks.map(function(item){
                     item.querySelector('button').value != id
                })
                console.log(newItem);

        }
        
    // Event
    SubmitButton.addEventListener('submit', hendlSubmit);   
    list.addEventListener('itemsUpdated', displayTasks);
    list.addEventListener('itemsUpdated', saveItemIntoLocalStorage);
    list.addEventListener('click', function(e) {
        console.log(e.target.matches('button'));

                if(e.target.matches('button')){
                    e.target.closest('li').remove()
                }
    });