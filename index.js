let input = document.querySelector("#task-input");
let add = document.querySelector("#addBtn");
let itemsContainer = document.querySelector(".to-do-list");
let listItem = localStorage.listItem ? JSON.parse(localStorage.listItem) : [];

const newList = () => {
  itemsContainer.innerHTML = ``;
  for (let i = listItem.length - 1; i >= 0; i--) {
    itemsContainer.innerHTML += `
        <li class="item">
        <p>${listItem[i]}</p>
          <div>
        <button onclick ="editTask(${i})">Edit</button>
        <button onclick ="deleteItem(${i})">Delete</button>
        </div>
        </li>
    `;
  }
};

const addItem = (item) => {
  if (item.length > 0) {
    // console.log("fuck")
    listItem.push(item);
    console.log(item);
    console.log(listItem);
    input.value = "";
  } else {
    alert("Please enter a task");
  }
  localStorage.setItem("listItem", JSON.stringify(listItem));
  newList();
};

const deleteTask = (index) => {
  let task = listItem[index];
  if (task != undefined) {
    listItem.splice(index, 1);
    localStorage.listItem = JSON.stringify(listItem);
    newList();
  } else {
    alert("task is deleted");
  }
};

const deleteItem = (index) => {
  let task = listItem[index];
  if (task != undefined) {
    listItem = listItem.filter((item, i) => item !== task);
    localStorage.setItem("listItem", JSON.stringify(listItem));
    newList();
  } else {
    alert("task is deleted");
  }
};

const editTask = (index) => {
  let task = listItem[index];
  if (task != undefined) {
    let ask = prompt(`edit ${task} to :`);
    if (ask.length > 0) {
      listItem[index] = ask;
      //   localStorage.listItem = JSON.stringify(listItem);
      localStorage.setItem("listItem", JSON.stringify(listItem));
      newList();
    } else {
      alert("no change");
    }
  }
};

add.addEventListener("click", () => addItem(input.value));
newList();
