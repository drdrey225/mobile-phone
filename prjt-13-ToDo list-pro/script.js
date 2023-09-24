var allTask = [];
var editedIndex;

function displayTask() {

   disp.innerHTML = ""

   for (let index = 0; index < allTask.length; index++) {
      
      disp.innerHTML += `
      <main class="holder col-12 col-lg-4 py-5 mx-4 text-center rounded shadow bg-light my-2 holder" style=" width: 45vh; hight: 20vh; box-shadow: 1px 1px 5px black; " > 

         <h1>
            ${allTask[index].todo}
         </h1>
         <div>
            ${allTask[index].date}
         </div>
         <div>
            ${allTask[index].time}
         </div>
         <h4>
            ${allTask[index].text}
         </h4>

         <button onclick="editTask(${index})" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-outline-primary mx-1 py-2 px-4 mt-2 text-blue">
            Edit <img width="17" height="17" style="color: blue;" src="https://img.icons8.com/ios/50/000000/edit-text-file.png" alt="edit-text-file"/>
         </button>

         <button onclick="deleteTask(${index})" class="btn btn-danger py-2 px-4 mt-2 ">
            Delete <img width="17" height="17" style="color: white;" src="https://img.icons8.com/ios/20/000000/trash--v1.png" alt="trash--v1"/>
         </button>
      
      
      
      </main>
      `
   }
}


function createTask(){
if (todo.value == "",
   date.value == "",
   time.value == "",
   text.value == "") {
   alert("Please, input your to-do details!")
}else{
   var task = {
      todo: todo.value,
      date: date.value,
      time: time.value,
      text: text.value,
   }
   allTask.push(task)
   console.log(task)
   displayTask()
   todo.value=""
   date.value=""
   time.value=""
   text.value=""
   }

}


function deleteTask(index) {
   var response = confirm("Are you sure you want to delete?")
   if(!response){
      
   }else{
      allTask.splice(index,1)
      displayTask()
   }
   
}

function editTask(index) {
   editedIndex = index;
   console.log(index);
   displayTask();
   allTask.splice();
}

function saveChanges() {
   
   var replacement = {
      todo: editedTodo.value,
      date: editedDate.value,
      time: editedTime.value,
      text: editedText.value,
   }
   allTask.splice(editedIndex,1,replacement)
   displayTask() 
}  