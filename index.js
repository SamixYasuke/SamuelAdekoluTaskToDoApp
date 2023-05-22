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
  });

  img.addEventListener("click", (e)=>{
    var getParentElement;
    getParentElement = e.target.parentElement;
    getParentElement.remove();
  })
}
