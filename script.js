document.getElementById("addBtn").addEventListener("click", addTask);


function addTask() {
const input = document.getElementById("taskInput");
const taskText = input.value.trim();
if (!taskText) return;


const li = document.createElement("li");
li.textContent = taskText;


// toggle complete
li.addEventListener("click", () => {
li.classList.toggle("completed");
});


// remove button
const removeBtn = document.createElement("button");
removeBtn.textContent = "X";
removeBtn.className = "remove-btn";
removeBtn.addEventListener("click", (e) => {
e.stopPropagation();
li.remove();
});


li.appendChild(removeBtn);
document.getElementById("taskList").appendChild(li);


input.value = "";
}