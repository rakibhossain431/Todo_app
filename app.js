let SubmitButton = document.querySelector('.rakib')
let list = document.querySelector('.list')
    const taskList = [];
    function hendlSubmit(e){

        e.preventDefault();
        const inputData =  e.target.insert.value;
        
        const task = {
            id: Date.now(),
            task: inputData,
            isCompleted: false,
        }
        taskList.push(task);
        localStoragData();
         e.target.reset();

        const html = taskList.map(function(item) {
            return `<li>
            <input type="checkbox"/>
                <span>${item.task}</span>
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                <button>&times;</button>
            </li>`
        }).join("")
        console.log(html);

        list.innerHTML = html;
         
    }
        function localStoragData(){

        }

    SubmitButton.addEventListener('submit', hendlSubmit);