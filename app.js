
function onReady(){
  const toDos= [];
  const addToDoForm= document.getElementById("addToDoForm");
  function createNewToDo(){
    const newToDoTect= document.getElementById("newToDoText");
    toDos.push({
      title: newToDoText.value,
      complete: false
      });
      newToDoText.value="";
    }
  function renderTheUI(){
    const toDoList = document.getElementById("toDoList");

    toDoList.textContent= "";

    toDos.forEach(function(toDo) {
      const newLi = document.createElement("li");
      const checkbox= document.createElemt ("input");
      checkbox.type="checkbox";

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
    });
  }

    addToDoForm.addEventListener("submit", event =>{
      event.preventDefault();
      createNewToDo();
    });

    }
    )
    const ADD_TODO_FORM= document.getElementById("addToDoForm");
    const NEW_TODO_TEXT= document.getElementById("newToDoText");
    const TODO_LIST= document.getElementById("toDoList");

  ADD_TODO_FORM.addEventListener("submit",(event) => {
    event.preventDefault();

    let title = NEW_TODO_TEXT.value;

    let newLi = document.createElement("li");// <li></li>
    let checkbox = document.createElement("input");
    checkbox.type="checkbox";
    checkbox.style.alignContent="flex-start";

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function(event){
      TODO_LIST.removeChild(this.parentElement);
    })

    newLi.textContent = title;
    newLi.appendChild(checkbox);
    newLi.appendChild(deleteBtn);
    TODO_LIST.appendChild(newLi);
    NEW_TODO_TEXT.value = "";
  });
};

window.onload = function(){
  onReady();
};
