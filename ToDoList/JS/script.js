
function addItem() {
    var newItemInput = document.getElementById("newItemInput");
    var newItemValue = newItemInput.value;
 
    var newItem = document.createElement("li");
    newItem.textContent = newItemValue;
  
    var removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.onclick = function() {
      removeItem(newItem);
    };
    newItem.appendChild(removeButton);
  
    var todoList = document.getElementById("todoList");
    todoList.appendChild(newItem);
  
    newItemInput.value = "";
  }
  
  function removeItem(item) {
    var todoList = document.getElementById("todoList");
    todoList.removeChild(item);
  }
  