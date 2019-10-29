function onReady(){
  let toDos = [];
  const addToDoForm = document.getElementById("addToDoForm");
  let id = 0;

function renderTheUI(){
  const ToDo_List = document.getElementById("toDoList");
  ToDo_List.textContent = "";
  toDos.textContent="";

  toDos.forEach(function(toDo){
      const new_Li = document.createElement("li");
      const CHECKBOX = document.createElement("input");
      CHECKBOX.type = "checkbox";

      const DELETE_BTN = document.createElement("button");
      DELETE_BTN.textContent = "Delete!";

      DELETE_BTN.addEventListener("click", event => {
        toDos = toDos.filter(function(item){
          return item.id !== toDo.id;
        })
        renderTheUI();
      });

      new_Li.textContent= toDo.title;
      new_Li.appendChild(CHECKBOX);
      new_Li.appendChild(DELETE_BTN);

      ToDo_List.appendChild(new_Li);
    });
  }

function createNewToDo (){
    const newToDoText = document.getElementById("newToDoText");
    if (!newToDoText.value) {return;}
    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id
    });

    id++;

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
