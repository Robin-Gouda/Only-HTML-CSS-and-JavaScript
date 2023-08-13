// variables decleared

let list = [];
let inp = document.getElementById("inp");
let todolist = document.getElementById("todolist");

//  functions decleared

const Clicked = () => {
  list.push(inp.value);
  inp.value = "";
  showList();
};
document.getElementById("btn").addEventListener("click", Clicked);

const deleteItem = (i) => {
  list.splice(i, 1);
  showList();
};

const editItem = (i) => {
  let newValue = prompt("Please enter new value");
  list.splice(i, 1, newValue);
  showList();
};

const showList = () => {
  todolist.innerHTML = "";
  list.forEach(function (n, i) {
    todolist.innerHTML +=
      "<li>" +
      n +
      "<a onclick='editItem(" +
      i +
      ")' >Edit</a><a onclick='deleteItem(" +
      i +
      ")' >&times;</a></li>";
  });
};
