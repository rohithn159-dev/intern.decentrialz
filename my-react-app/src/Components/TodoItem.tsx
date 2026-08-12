import type { Todo } from "../types/todo";

interface TodoItemProps {
  todo: Todo;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
  onEdit: (id: number) => void;
}

function TodoItem({
  todo,
  onDelete,
  onToggle,
  onEdit
}: TodoItemProps) {

  return (
    <div
      className={`todo-item ${
        todo.completed ? "completed" : ""
      }`}
    >

      <div className="todo-content">

        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}//When the checkbox is clicked, send this Todo's ID to the onToggle function.
        />

        <span>{todo.text}</span>

      </div>

      <div className="todo-actions">

        <button
          className="edit-btn"
          onClick={() => onEdit(todo.id)}
        >
          Edit
        </button>

        <button
          className="delete-btn"
          onClick={() => onDelete(todo.id)}
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default TodoItem;