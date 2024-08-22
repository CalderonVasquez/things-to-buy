/* eslint-disable react/prop-types */
import { useState } from "react";
import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import { nanoid } from "nanoid"

const App = (props) => {
  const [tasks, setTasks] = useState(props.tasks)

  const addTask = (name) => {
    const newTask = { id: `todo-${nanoid()}`, name, completed: false }
    setTasks([...tasks, newTask])
  }

  const toggleTaskCompleted = (id) => {
    setTasks(completedTasks => completedTasks.map(task =>
      id === task.id ? {...task, completed: !task.completed} : task))
  }

  const deleteTask = (id) => {
    setTasks(remainingTasks => remainingTasks.filter(task => id !== task.id))
  }

  const taskList = tasks?.map(task =>
    <Todo 
      key={task.id}
      name={task.name}
      id={task.name}
      completed={task.completed}
      toggleTaskCompleted={() => toggleTaskCompleted(task.id)}
      deleteTask={() => deleteTask(task.id)}
    />
  )

  const taskNoun = taskList.length === 1 ? "task" : "tasks";
  const headingText = `${taskList.length} ${taskNoun} remaining`

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">{headingText}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
          {taskList}
      </ul>
    </div>
  );
}

export default App;
