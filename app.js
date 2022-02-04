let SubmitButton = document.querySelector('.rakib')
let list = document.querySelector('.list')
     
       
    
    // SubmitButton.addEventListener('submit', function(e) {
    //     e.preventDefault();
    //     const inputData = e.target.insert.value;
    //     console.log(inputData)
    // })
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
        

        //  e.target.insert.value = "";
        // amar icca ami jeta use kori reset/"";
         e.target.reset();

        const html = taskList.map(function(item) {
            return `<li>
            <input type="checkbox"/>
                ${item.task}
                <button>&times;<button/>
            </li>`
        }).join("")
        console.log(html);

        list.innerHTML = html;



         
    }
 

    SubmitButton.addEventListener('submit', hendlSubmit);