import type { Todo } from "../types/todo";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
  onEdit: (id: number) => void;
}

function TodoList({
  todos,
  onDelete,
  onToggle,
  onEdit
}: TodoListProps) {

  if (todos.length === 0) {
    return (
      <div className="empty-message">
        <p>No tasks found 🎉</p>
        <span>Add a task to get started.</span>
      </div>
    );
  }

  return (
    <div className="todo-list">

      {todos.map((todo) => ( //creates one TodoItem for every Todo.
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
          onEdit={onEdit}
        />
      ))}

    </div>
  );
}

export default TodoList;