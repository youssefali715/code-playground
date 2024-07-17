let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasks = document.querySelector(".tasks");
let taskArray = [];

// Function for looping on array items
function addElements(myEle) {
  console.log(myEle);

  let div = document.createElement("div");
  div.className = "task";
  div.setAttribute("taskID", myEle.id);
  div.appendChild(document.createTextNode(myEle.title));

  let span = document.createElement("span");
  span.className = "del";
  span.appendChild(document.createTextNode("Done"));
  div.appendChild(span);
  console.log(div);

  tasks.appendChild(div);

  span.onclick = function () {
    myEle.status = true;
    div.style = "display:none";
    addToLocalStorage(taskArray);
  };
}

let previtems = JSON.parse(window.localStorage.getItem("tasks"));
if (previtems !== null){
for (let index = 0; index < previtems.length; index++) {
  if (previtems[index].status == true){
    continue;
  }
  taskArray.push(previtems[index]);
  addElements(previtems[index])
}
}

// Function for adding tasks to Array
function addTaskToArray (text){
  
  const task = {
    id: Date.now(),
    title: text,
    status: false,
  };
  
  taskArray.push(task)
  
  addElements(taskArray[taskArray.length - 1])
  addToLocalStorage(taskArray)
}


// Function for adding the tasks
submit.onclick = function () {
  if (input.value !== "") {
    addTaskToArray(input.value);
    input.value = "";
  }
} 

function addToLocalStorage (arr){
  window.localStorage.setItem('tasks', JSON.stringify(arr))
}