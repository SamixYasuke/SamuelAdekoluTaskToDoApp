const completedBtn = Array.from(document.querySelectorAll(".todo-list-content ul li label"));
const todoInput = document.getElementById("todo-input");
const addTodoBtn = document.getElementById("addTodo");
const todolistContainer = document.querySelector(".todo-list-content ul");
const removeListBtn = document.querySelectorAll(".todo-list-content ul li img");

completedBtn.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        const target = e.target;
        btn.classList.toggle("checked");
        const todoContent = target.nextElementSibling;
        todoContent.classList.toggle("underline")
    });
});

addTodoBtn.addEventListener("click", () => {
    const input = todoInput.value;
    if (input === "") {
      alert("The Input Can't be empty");
      addTodoBtn.checked = false;
    } else {
      var li = document.createElement("li");
      var checkBoxInput = document.createElement("input");
      var p = document.createElement("p");
      var label = document.createElement("label");
      var image = document.createElement("img");
      image.setAttribute("src", "images/icon-cross.svg");
      checkBoxInput.setAttribute("type", "checkbox");
      p.textContent = input;
      li.appendChild(checkBoxInput);
      li.appendChild(label);
      li.appendChild(p);
      li.appendChild(image)
      todolistContainer.appendChild(li);
      saveTodoListItems();
    }
    setTimeout(() => {
      todoInput.value = "";
      addTodoBtn.checked = false;
    }, 1000);
});


removeListBtn.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        e.target.parentElement.remove();
        saveTodoListItems();
    });
})
  
function saveTodoListItems() {
    const todoItems = Array.from(todolistContainer.querySelectorAll("li")).map((li) => {
      return {
        checked: li.querySelector("input").checked,
        text: li.querySelector("p").textContent
      };
    });
    localStorage.setItem("todoListItems", JSON.stringify(todoItems));
}
  
function getLists() {
    const todoItems = JSON.parse(localStorage.getItem("todoListItems"));
    if (todoItems && todoItems.length > 0) {
      todoItems.forEach((item) => {
        var li = document.createElement("li");
        var checkBoxInput = document.createElement("input");
        var p = document.createElement("p");
        var label = document.createElement("label");
        checkBoxInput.setAttribute("type", "checkbox");
        checkBoxInput.checked = item.checked;
        p.textContent = item.text;
        li.appendChild(checkBoxInput);
        li.appendChild(label);
        li.appendChild(p);
        todolistContainer.appendChild(li);
      });
    }
}
  
getLists();
