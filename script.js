const toDoList = document.querySelector(".to-do-list");
const toDone = document.querySelector(".to-done");
const btn = document.querySelector(".btn");
const input = document.querySelector("input");
let input2 = input.value;

window.addEventListener("load", () => {
  input.focus();
});
toDoList.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target.classList.contains("btn")) {
    if (input.value === "") {
      alert("input field can not be blank");
    } else {
      e.target.parentElement.nextElementSibling.firstElementChild.innerHTML += ` <div class="par">
              <div class="del-icon icon ">
                <i class="fa-solid fa-calendar-xmark del "></i>
              </div>
              <p>${input.value}</p>
              <div class="icon"><i class="fa-regular fa-square-check check"></i></div>
            </div>`;
      input2 = input.value;
      input.value = "";
    }
  }
  if (e.target.classList.contains("check")) {
    console.log(e.target.parentElement.parentElement);
    e.target.parentElement.parentElement.parentElement.nextElementSibling.innerHTML += ` <div class="par">
              <div class="del-icon icon ">
              </div>
              <p>${input2}</p>
              <div class="icon"> <i class="fa-solid fa-calendar-xmark del"></i></div>
            </div>`;
    e.target.parentElement.parentElement.remove();
  }
  if (e.target.classList.contains("del")) {
    e.target.parentElement.parentElement.remove();
  }
});
