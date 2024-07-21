var btn = document.querySelector(".add-btn");
var task = document.getElementById("task-bar");

btn.addEventListener("click",()=>{
    addTask(task.value);
 });

function addTask(taskText){
   if(taskText !== ""){
      var taskList = document.getElementById("task-list");
      var newTask = document.createElement("div");
      newTask.className = "task";
      newTask.innerHTML = `<div class="checked"><img src="./images/circle.png"/></div>
                           <div class="content">${taskText}</div>
                           <div class="remove"><img src="./images/cross.png"/></div>`;
      taskList.appendChild(newTask);
      document.getElementById("task-bar").value = "";
      saveData();
      attachEventListeners(newTask);
    }
}

function attachEventListeners(taskElement) {
    var checked = taskElement.querySelector(".checked img");
    var content = taskElement.querySelector(".content").innerText;

    checked.addEventListener("click", function taskDone() {
        checked.src = "./images/checked.png";
        taskElement.querySelector(".content").innerHTML = `<strike>${content}</strike>`;
        saveData();
    });

    var remove = taskElement.querySelector(".remove img");
    remove.addEventListener("click", function clearTask() {
        taskElement.remove();
        saveData();
    });
}

var taskList = document.getElementById("task-list");
function saveData() {
    localStorage.setItem("data", taskList.innerHTML);
}

function showTask() {
    taskList.innerHTML = localStorage.getItem("data");
    var tasks = taskList.querySelectorAll(".task");
    tasks.forEach(task => {
        attachEventListeners(task);
    });
}
showTask();
