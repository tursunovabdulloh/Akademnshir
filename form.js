// dark mode
const darkmodeBtn = document.getElementById("darkmodeBtn");
const darkmodeImg = document.getElementById("darkmodeImg");
darkmodeBtn.addEventListener("click", () => {
  if (document.body.classList.contains("light")) {
    document.body.classList.remove("light");
    darkmodeBtn.lastChild.textContent = "Light mode";
    darkmodeImg.setAttribute("src", "images/light-mode.png");
  } else {
    document.body.classList.add("light");
    darkmodeBtn.lastChild.textContent = "Dark mode";
    darkmodeImg.setAttribute("src", "images/dark-mode.png");
  }
});

// form
const searchInp = document.getElementById("searchInp");
const submitBtn = document.getElementById("submitBtn");
const productList = document.getElementById("productList");
const Todoform = document.getElementById("Todoform");

// Modal
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");
const editform = document.getElementById("editform");
const editInp = document.getElementById("editInp");

function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

overlay.addEventListener("click", () => {
  closeModal();
});

let todoArr = JSON.parse(localStorage.getItem("arr"))
  ? JSON.parse(localStorage.getItem("arr"))
  : [];
creatTodos();
Todoform.addEventListener("submit", (e) => {
  e.preventDefault();

  let todo = {
    id: Math.floor(Math.random() * 100000),
    text: searchInp.value,
    completed: false,
    time: "11 : 10",
  };
  todoArr.push(todo);
  localStorage.setItem("arr", JSON.stringify(todoArr));
  searchInp.value = "";
  creatTodos();
});

function creatTodos(data = todoArr) {
  productList.innerHTML = "";
  data.forEach(({ id, text, time, completed }) => {
    const li = document.createElement("li");

    li.classList.add("list-item");

    if (completed) {
      li.classList.add("disabled");
    }

    li.innerHTML = `<label id="check" class="label" onclick="completeTodo(${id})">
    <span></span>
    </label>
        <p>${text}</p>
        <p>${time}</p>
          <div id="rasm-div">
          <i class="fa-solid fa-pen-to-square rasim"style="color: #74c0fc" onclick="updateTodo(${id})"><i>
          <i class="fa-solid fa-trash-can trash-png" style="color: #3b9feb" onclick="delateTodo(${id})"></i>
          </div>`;
    productList.appendChild(li);
  });
}

function delateTodo(itemId) {
  todoArr = todoArr.filter(({ id }) => id !== itemId);
  localStorage.setItem("arr", JSON.stringify(todoArr));
  creatTodos(todoArr);
}

function updateTodo(itemid) {
  openModal();

  function onSubmit(e) {
    e.preventDefault();

    console.log(editInp.value);
    todoArr = todoArr.map((item) => {
      if (item.id === itemid) {
        return {
          ...item,
          text: editInp.value,
          completed: false,
        };
      }
      return item;
    });
    closeModal();
    e.target.reset();
    creatTodos();
    return editform.removeEventListener("submit", onSubmit);
  }
  editform.removeEventListener("submit", onSubmit);
}

function completeTodo(itemId) {
  console.log(itemId);
  todoArr = todoArr.map((item) => {
    if (item.id === itemId) {
      return {
        ...item,
        completed: !item.completed,
      };
    }
    return item;
  });
  console.log(todoArr);
  creatTodos();
}
