const completedBtn = Array.from(document.querySelectorAll(".todo-list-content ul li label"));
const todoInput = document.getElementById("todo-input");
const addTodoBtn = document.getElementById("addTodo");
const todolistContainer = document.querySelector(".todo-list-content ul");

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
        let li = document.createElement("li");
        var checkBoxInput = document.createElement("input");
        var h4 = document.createElement("h4");
        var label = document.createElement("label");
        checkBoxInput.setAttribute("type", "checkbox");
        h4.textContent = input;
        li.appendChild(checkBoxInput);
        li.appendChild(label);
        li.appendChild(h4);
        todolistContainer.appendChild(li);
    }
    setTimeout(() => {
      todoInput.value = ""; // Corrected variable name
      addTodoBtn.checked = false;
    }, 1000);
});