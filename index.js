const getTodoInput = document.querySelector("#todo-input");
const addToTodoBtn = document.querySelector("#addTodo");
const completedBtn = Array.from(document.querySelectorAll(".todo-list-content ul li label"));
const todoListUl = document.querySelector("ul");

addToTodoBtn.addEventListener("click", () => {
  if (getTodoInput.value === "") {
    addToTodoBtn.checked = false;
    alert("Can't Add Empty Item To List!!");
  } else {
    addToDoList();
  }
  setTimeout(() => {
    addToTodoBtn.checked = false;
    getTodoInput.value = "";
  }, 200);
});

getTodoInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault(); // Prevent form submission (if any)
    if (getTodoInput.value === "") {
      alert("Can't Add Empty Item To List!!");
    } else {
      addToDoList();
    }
    setTimeout(() => {
      addToTodoBtn.checked = false;
      getTodoInput.value = "";
    }, 200);
  }
});


completedBtn.forEach((btn)=>{
  btn.addEventListener("click", (e)=>{
    btn.classList.toggle("checked");
    const sibling = e.target.nextElementSibling;
    sibling.classList.toggle("underline")
  })
})

// FUNCTION SECTION
document.addEventListener("DOMContentLoaded", function() {
  // Retrieve todo list from local storage
  const savedList = JSON.parse(localStorage.getItem("todoList"));

  if (savedList) {
    // Iterate over the saved list items
    savedList.forEach(function(item) {
      // Create a temporary container element
      var tempContainer = document.createElement("div");
      tempContainer.innerHTML = item;

      // Get the first child of the container, which is the li element
      var li = tempContainer.firstChild;

      // Attach event listeners to the label and image within the li element
      var label = li.querySelector("label");
      var img = li.querySelector("img");

      label.addEventListener("click", function(e) {
        const crossedText = e.target.nextElementSibling;
        e.target.classList.toggle("checked");
        crossedText.classList.toggle("underline");
        updateLocalStorage();
      });

      img.addEventListener("click", function(e) {
        var getParentElement = e.target.parentElement;
        getParentElement.remove();
        updateLocalStorage();
      });

      // Append the li element to the todoListUl
      todoListUl.appendChild(li);
    });
  }
});

function addToDoList() {
  var li = document.createElement("li");
  var inputCheckbox = document.createElement("input");
  var label = document.createElement("label");
  var h4 = document.createElement("h4");
  var img = document.createElement("img");

  h4.textContent = getTodoInput.value;
  inputCheckbox.setAttribute("type", "checkbox");
  img.setAttribute("src", "images/icon-cross.svg");
  img.setAttribute("alt", "icon-cross");

  li.appendChild(inputCheckbox);
  li.appendChild(label);
  li.appendChild(h4);
  li.appendChild(img);

  todoListUl.appendChild(li);

  label.addEventListener("click", (e) => {
    const crossedText = e.target.nextElementSibling;
    e.target.classList.toggle("checked");
    crossedText.classList.toggle("underline");
    updateLocalStorage();
  });

  img.addEventListener("click", (e) => {
    var getParentElement = e.target.parentElement;
    getParentElement.remove();
    updateLocalStorage();
  });

  updateLocalStorage();
}

function updateLocalStorage() {
  const todoListItems = Array.from(todoListUl.children);
  const todoListArray = todoListItems.map(function(item) {
    return item.outerHTML;
  });
  localStorage.setItem("todoList", JSON.stringify(todoListArray));
}
