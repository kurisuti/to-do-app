function onReady(){
  let toDos = [];
  const addToDoForm = document.getElementById("addToDoForm");

function renderTheUI(){
  const toDoList = document.getElementById("toDoList");
  toDos.textContent="";
  toDos.forEach(function(toDo){
      const new_Li = document.createElement("li");
      const CHECKBOX = document.createElement("input");
      CHECKBOX.type = "checkbox";

      new_Li.textContent= toDo.title;
      new_Li.appendChild(CHECKBOX);

      ToDo_List.appendChild(new_Li);
    });
  }

function createNewToDo (){
    const newToDoText = document.getElementById("newToDoText");
    if (!newToDoText.value) {return;}
    toDos.push({
      title: newToDoText.value,
      complete: false
    });
    newToDoText.value = "";
    renderTheUI();
}

addToDoForm.addEventListener("submit", event => {
      event.preventDefault();
      createNewToDo();
  });
renderTheUI();

}

window.onload=function() {
  onReady();
};
