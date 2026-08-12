
import { useEffect, useState } from "react";
import { getTodos } from "./Services/todoApi";

import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";

import type { Todo } from "./types/todo";

import "./App.css";

type FilterType = "all" | "active" | "completed";

function App() {

  const loadTodos = async () => {
  const data = await getTodos();

  console.log(data);
};
useEffect(() => {
  loadTodos();
}, []);//calling the function

  
  // STATE
  

  const [todos, setTodos] = useState<Todo[]>(() => { //This stores our Todo array.

    const savedTodos = localStorage.getItem("todos");

    if (savedTodos) {
      return JSON.parse(savedTodos) as Todo[];
    }

    return [];
  });

  useEffect(() => {
    const loadTodos = async () => {
      const savedTodos = localStorage.getItem("todos");

      if (savedTodos) {
        return;
      }

      const apiTodos = await getTodos();

      const mappedTodos: Todo[] = apiTodos.map((todo) => ({
        id: todo.id,
        text: todo.title,
        completed: todo.completed
      }));

      setTodos(mappedTodos);
    };

    loadTodos();
  }, []);

  const [task, setTask] = useState<string>("");//This stores whatever the user types.

  const [filter, setFilter] =
    useState<FilterType>("all");


  
  // SAVE TODOS
  
     //Whenever todos changes, React runs this code.It saves the tasks into the browser.
  useEffect(() => {

    localStorage.setItem(
      "todos",
      JSON.stringify(todos)
    );

  }, [todos]);


  
  // ADD TODO
  

  const addTodo = () => {

    if (task.trim() === "") {//This prevents empty tasks.
      return;
    }
     //We create a Todo object.
    const newTodo: Todo = {
      id: Date.now(),
      text: task.trim(),
      completed: false
    };
     //...previousTodos keeps the existing tasks.Then newTodo is added.
    setTodos((previousTodos) => [
      ...previousTodos,
      newTodo
    ]);

    setTask("");
  };


  
  // DELETE TODO
  

  const deleteTodo = (id: number) => {

    setTodos((previousTodos) =>
      previousTodos.filter(
        (todo) => todo.id !== id
      )
    );
  };


  
  // TOGGLE TODO
  

  const toggleTodo = (id: number) => {

    setTodos((previousTodos) =>
      previousTodos.map((todo) =>
        todo.id === id//If it is the selected Todo:
          ? {
              ...todo,
              completed: !todo.completed//The ! changes: false-->True,True-->false
            }
          : todo
      )
    );
  };


  
  // EDIT TODO
  

  const editTodo = (id: number) => {
    //We first find the Todo:
    const todoToEdit = todos.find(
      (todo) => todo.id === id
    );

    if (!todoToEdit) {
      return;
    }
     //The user can enter new text.Then map() updates only that Todo.
    const newText = window.prompt(
      "Edit your task:",
      todoToEdit.text
    );

    if (!newText || newText.trim() === "") {
      return;
    }

    setTodos((previousTodos) =>
      previousTodos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              text: newText.trim()
            }
          : todo
      )
    );
  };


  
  // FILTER TODOS
  

  const filteredTodos = todos.filter((todo) => {

    if (filter === "active") {
      return !todo.completed;
    }

    if (filter === "completed") {
      return todo.completed;
    }

    return true;
  });


  
  // TASK COUNTS
  

  const activeCount = todos.filter(
    (todo) => !todo.completed
  ).length;

  const completedCount = todos.filter(
    (todo) => todo.completed
  ).length;


  
  // CLEAR COMPLETED
  

  const clearCompleted = () => {

    setTodos((previousTodos) =>
      previousTodos.filter(
        (todo) => !todo.completed
      )
    );
  };


  
  // UI
  

  return (
    <div className="app">

      <div className="todo-container">

        <header className="todo-header">

          <h1>My To-Do List</h1>

          <p>
            Organize your tasks and stay productive.
          </p>

        </header>


        <TodoForm
          task={task}
          setTask={setTask}
          onAdd={addTodo}
        />


        <div className="todo-stats">

          <span>
            {activeCount} active
          </span>

          <span>
            {completedCount} completed
          </span>

        </div>


        <div className="filter-buttons">

          <button
            className={
              filter === "all" ? "active-filter" : ""
            }
            onClick={() => setFilter("all")}
          >
            All
          </button>


          <button
            className={
              filter === "active"
                ? "active-filter"
                : ""
            }
            onClick={() => setFilter("active")}
          >
            Active
          </button>


          <button
            className={
              filter === "completed"
                ? "active-filter"
                : ""
            }
            onClick={() => setFilter("completed")}
          >
            Completed
          </button>

        </div>


        <TodoList
          todos={filteredTodos}
          onDelete={deleteTodo}
          onToggle={toggleTodo}
          onEdit={editTodo}
        />


        {completedCount > 0 && (

          <button
            className="clear-button"
            onClick={clearCompleted}
          >
            Clear Completed
          </button>

        )}

      </div>

    </div>
  );
}

export default App;


