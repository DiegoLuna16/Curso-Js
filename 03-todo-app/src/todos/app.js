import html from "./app.html?raw";
import todoStore from "../store/todo.store";
import { Filters } from "../store/todo.store";
import { renderTodos} from "./use-cases/render-todos";
import { renderPending} from "./use-cases/render-pending";
import { Todo } from "./models/todo.model";

const ElementIDs = {
  TodoList: ".todo-list",
  NewTodoInput: "#new-todo-input",
  ClearedCompleted: ".clear-completed",
  TodoFilters: ".filtro",
  PendingCountLabel: '#pending-count',
};

export const App = (elementId) => {
  const displayTodos = () => {
    const todos = todoStore.getTodos(todoStore.getCurrentFilter());
    renderTodos(ElementIDs.TodoList, todos);
    updatePendingCount()
  };

  const updatePendingCount = () => {
    renderPending(ElementIDs.PendingCountLabel);
  }

  (() => {
    const app = document.createElement("div");
    app.innerHTML = html;
    document.querySelector(elementId).append(app);
    displayTodos();
    
  })();

  //ReferenciaS HTML
  const newDescriptionInput = document.querySelector(ElementIDs.NewTodoInput);
  const todoListUL = document.querySelector(ElementIDs.TodoList);
  const btnClearedCompleted = document.querySelector(
    ElementIDs.ClearedCompleted
  );
  const filtersLIs = document.querySelectorAll(ElementIDs.TodoFilters);

  //Listener
  newDescriptionInput.addEventListener("keyup", (evt) => {
    if (evt.keyCode !== 13) return;
    if (evt.target.value.trim().length === 0) return;
    todoStore.addTodo(evt.target.value);
    displayTodos();
    evt.target.value = "";
  });

  todoListUL.addEventListener("click", (evt) => {
    const element = evt.target.closest("[data-id]");
    todoStore.toggleTodo(element.getAttribute("data-id"));
    displayTodos();
  });

  todoListUL.addEventListener("click", (evt) => {
    const element = evt.target.closest("[data-id]");
    const button = document.querySelector(".destroy");
    if (evt.target.getAttribute("class") === button.classList[0]) {
      todoStore.deleteTodo(element.getAttribute("data-id"));
    }
    displayTodos();
  });

  btnClearedCompleted.addEventListener("click", () => {
    todoStore.deleteCompleted();
    displayTodos();
  });

  filtersLIs.forEach((element) => {
    element.addEventListener("click", (element) => {
      filtersLIs.forEach((el) => el.classList.remove("selected"));
      element.target.classList.add("selected");

      switch (element.target.text) {
        case "Todos":
          todoStore.setFilter(Filters.All);
          break;
        case "Pendientes":
          todoStore.setFilter(Filters.Pending);
          console.log(todoStore.setFilter(Filters.Pending));
          break;
        case "Completados":
          todoStore.setFilter(Filters.Completed);
          break;
      }
      displayTodos();
    });
  });
};
