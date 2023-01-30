const InputField = document.querySelector(".input-field textarea"),
    todoLists = document.querySelector(".todoLists")
    /*edit_task = document.querySelector(".todoLists .list #pen")*/




InputField.addEventListener("keyup", (e) => {
    let inputVal = InputField.value.trim();

    if (e.key === "Enter" && inputVal.length > 0) {
        let litag = `<li  class="list" >
          <input type="checkbox">
          <span  class="task">${inputVal}</span>
          <i  id="pen" class="uil-pen" onclick = "editTask(this)"></i>
          <i class="uil uil-trash-alt" onclick="deleteTask(this)"></i>
          </li>`;
        todoLists.insertAdjacentHTML("beforeend", litag);
        InputField.value = "";
    }

});

/*function handleStatus(e){
    const checkbox = e.querySelector("input");
    console.log(checkbox)
    checkbox.checked = checkbox.checked ? false : true;
}*/
function deleteTask(e) {
    e.parentElement.remove();
}

    function editTask(e) {
        // Récupération de l'élément à éditer
        let element = document.querySelector(".todoLists .list .task")
      
        // Modification du contenu en mode édition
        element.innerHTML = "<input type='text' id='editInput' value='" + element.innerText + "'>";
      
        // Ajout d'un bouton "Save"
        element.innerHTML += "<button onclick='save()'>Save</button>";
      }
      
      function save(e) {
        // Récupération de l'élément à éditer
        let element = document.querySelector(".todoLists .list .task")
        
        // Récupération de la valeur saisie
        let editInput = document.getElementById("editInput");
        let newValue = editInput.value;
        
        // Modification du contenu avec la nouvelle valeur
        element.innerText = newValue;
      }

      
      

      