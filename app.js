function onReady(){
  let toDos = [];
  const add_ToDo_Form = document.getElementById("addToDoForm");

  function renderTheUI(){
    const toDoList = document.getElementById("toDoList");

    toDos.forEach(function(toDo){
      const New_Li document.createElement("li");
      const CHECKBOX = document.createElement("input");
      CHECKBOX.type = "checkbox";

      New_Li.textContent= toDo.title;
      New_Li.appendChild(checkbox);


      ToDo_List.appendChild(New_Li);
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

    add_ToDo_Form.addEventListener("submit", event => {
      event.preventDefault();
      createNewToDo();
    });

    renderTheUI();

  }

window.onload=function() {
  onReady();
};
