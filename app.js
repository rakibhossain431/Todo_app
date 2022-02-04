let SubmitButton = document.querySelector('.rakib')
let list = document.querySelector('.list')
     
       
    
    // SubmitButton.addEventListener('submit', function(e) {
    //     e.preventDefault();
    //     const inputData = e.target.insert.value;
    //     console.log(inputData)
    // })

    function hendlSubmit(e){

        e.preventDefault();
        const inputData =  e.target.insert.value;
        
        const task = {
            id: Date.now(),
            task: inputData,
            isCompleted: false,
        }
        console.log(task);

        //  e.target.insert.value = "";
         e.target.reset();
    }
 

    SubmitButton.addEventListener('submit', hendlSubmit);