
function onReady(){
    const ADD_TODO_FORM= document.getElementById("addToDoForm");
    let toDos=[];

    function renderTheUI(){
        const TODO_LIST= document.getElementById("toDoList");
        toDos.forEach(function(toDo){
          const NEW_LI = document.createElement("li");
          const CHECKBOX = document.createElement("input");
          CHECKBOX.type= "checkbox";

          NEW_LI.textContent= toDo.title;
          NEW_LI.appendChild(CHECKBOX);


          TODO_LIST.appendChild(NEW_LI);
        });
    }

    function createNewToDo (){
        const NEW_TODO_TEXT= document.getElementById("newToDoText");
        toDos.push({
          title: NEW_TODO_TEXT.value,
          complete: false
        });

        NEW_TODO_TEXT.value = "";
        renderTheUI();
  }

  ADD_TODO_FORM.addeventListener("submit", event => {
    event.preventDefault();
    createNewToDo();
  });

  renderTheUI();
}

window.onload = function(){
  onReady();
};
