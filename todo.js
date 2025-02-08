
const inputBox=document.getElementById('inputBox');
const btn=document.getElementById('btn');
const list=document.getElementById('list');

document.addEventListener("DOMContentLoaded", loadT);

const addtodo =()=>{
    const inputText= inputBox.value.trim();
    if (inputText.length<=0){
        alert("Please write task to add");
            return false;
    }
        //list item
    const li = document.createElement("li");   //DOM.....by this js can use html. 
      li.innerHTML=inputText;
   
    //Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";  
    deleteBtn.className = "delete-btn";
deleteBtn.onclick = () => {li.remove();  // delete on click....
  removeTaskFromStorage(inputText);    //remove task from LS
};
    li.appendChild(deleteBtn);
    list.appendChild(li);
    saveTaskToStorage(inputText) // save task to LS
    inputBox.value="";
};

btn.addEventListener('click', addtodo);

// save task to localStorage
const saveTaskToStorage = (task) => {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
};
//F...to load task from LS

function loadT(){
  let tasks=JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(task=> 
    { const li= document.createElement("li");
    li.innerHTML=task;

      
    const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn";

        deleteBtn.onclick = () => {li.remove(); // remove task from both ui/LS
          removeTaskFromStorage(task);
        };

        li.appendChild(deleteBtn);
        list.appendChild(li);

    
  });
}
const removeTaskFromStorage = (task) => {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];                      /// Remove task from LS
  tasks = tasks.filter(t => t !== task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

