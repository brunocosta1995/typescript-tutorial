const taskForm = document.querySelector<HTMLFormElement>(".form");
const formInput = document.querySelector<HTMLInputElement>(".form-input");
const taskList = document.querySelector<HTMLUListElement>(".list");

type TaskItem = {
  Description: string;
  isCompleted: boolean;
};

const allTasks: TaskItem[] = loadTasks();

function loadTasks() {
  const tasksStorage = localStorage.getItem("tasks");
  return tasksStorage ? JSON.parse(tasksStorage) : [];
}

allTasks.map(renderTask);

taskForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const taskDescription = formInput?.value;
  if (taskDescription) {
    const newTask: TaskItem = {
      Description: taskDescription,
      isCompleted: false,
    };
    addTask(newTask);
    renderTask(newTask);
    updateStorage();
    console.log(allTasks);
    formInput.value = "";
    return;
  }
  alert("Please enter with a description!");
});

function addTask(task: TaskItem): void {
  allTasks.push(task);
}

function renderTask(task: TaskItem): void {
  const liTask = document.createElement("li");
  liTask.textContent = task.Description;
  const taskCheckBox = document.createElement("input");
  taskCheckBox.type = "checkbox";
  taskCheckBox.checked = task.isCompleted;
  taskCheckBox.addEventListener('change', ()=>{
    task.isCompleted = !task.isCompleted;
    updateStorage();
  })
  liTask.appendChild(taskCheckBox);
  taskList?.appendChild(liTask);
}

function updateStorage() {
  localStorage.setItem("tasks", JSON.stringify(allTasks));
}
