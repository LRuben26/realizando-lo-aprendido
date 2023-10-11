import checkComplete from "./componetes/checkCom.js";
import deleteIcon from "./componetes/deleteCom.js";


(()=>{

    const btn = document.querySelector('[data-form-btn]')
    const createTask=(evento)=>{
        evento.preventDefault();
        const input= document.querySelector('[data-form-input]');
        // console.log(input.value);
        const value=input.value
        const list = document.querySelector('[data-list]');
        const task =document.createElement('li');
        task.classList.add('card')
        input.value='';
        const taskContent = document.createElement('div')
        const titleTask=document.createElement('span')
        titleTask.classList.add('task')
        titleTask.innerText=value;
        taskContent.appendChild(checkComplete());//
        taskContent.appendChild(titleTask);
    
            // const content ='
            // <i class="fas fa-trash-alt trashIcon icon"></i>`;
          //  i.classList.add
            //task.in
        task.appendChild(taskContent);
        task.appendChild(deleteIcon());
        list.appendChild(task);
    };
    
    btn.addEventListener('click',createTask);


})();
