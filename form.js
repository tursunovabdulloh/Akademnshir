// form
const searchInp = document.getElementById("searchInp");
const submitBtn = document.getElementById("submitBtn");
const productList = document.getElementById("productList");
const Todoform = document.getElementById("Todoform");
let todoArr = [];
Todoform.addEventListener("submit", (e) => {
  e.preventDefault();
  todoArr.push(searchInp.value);
  searchInp.value = "";
  creatTodos(todoArr);
});

function creatTodos(data) {
  productList.innerHTML = "";
  data.forEach((item) => {
    const li = document.createElement("li");

    li.classList.add("list-item");
    li.innerHTML = item;

    li.addEventListener("dblclick", () => {
      delateTodo(item);
    });
    productList.append(li);
  });
}

function delateTodo(item) {
  let index = todoArr.indexOf(item);
  todoArr = todoArr.slice(0, index).concat(todoArr.slice(index + 1));
  creatTodos(todoArr);
}
