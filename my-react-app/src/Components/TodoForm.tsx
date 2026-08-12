/*function TodoForm() {
  return (
    <div>
      <input type="text" placeholder="Write a task" />
      <button type="button">Add</button>
    </div>
  )
}

export default TodoForm*/

import type { FormEvent } from "react";
//means our component receives three props.
interface TodoFormProps {
  task: string;//The current input value.
  setTask: (task: string) => void;//This is a function that receives a string.
  onAdd: () => void;//This is a function that doesn't receive anything.
}

function TodoForm({
  task,
  setTask,
  onAdd
}: TodoFormProps) {

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {//is TypeScript telling us This event comes from an HTML form.
    event.preventDefault();//prevents the browser from refreshing the page when we submit the form.
    onAdd();
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="What needs to be done?"
        value={task}
        onChange={(event) => setTask(event.target.value)}
      />

      <button type="submit">
        Add Task
      </button>

    </form>
  );
}

export default TodoForm;