/* eslint-disable react/prop-types */
import { useState } from "react"
import {nanoid} from "nanoid"
import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
}

const FILTER_NAMES = Object.keys(FILTER_MAP)

const App = (props) => {
  const [tasks, setTasks] = useState(props.tasks)
  const [filter, setFilter] = useState("All")

  const addTask = (name) => {
    const newTask = { id: `todo-${nanoid()}`, name, completed: false }
    setTasks([...tasks, newTask]);
  };

  const toggleTaskCompleted = (id) => {
    setTasks(updatedTask => updatedTask.map(task =>
      id === task.id ? {...task, completed: !task.completed} : task))
  }

  const deleteTask = (id) => {
    setTasks(remainingTasks => remainingTasks.filter(task => id !== task.id))
  }
  
  const editTask = (id, newName) => {
    setTasks(editTaskList => editTaskList.map(task => 
      id === task.id ? {...task, name: newName} : task))
  }

  const taskList = tasks
    .filter(FILTER_MAP[filter])
    .map((task) =>
    <Todo 
      key={task.id}
      id={task.id}
      name={task.name}
      completed={task.completed}
      toggleTaskCompleted={() => toggleTaskCompleted(task.id)}
      deleteTask={() => deleteTask(task.id)}
      editTask={editTask}
    />);
  
  const filterList = FILTER_NAMES.map(name => 
    <FilterButton
      key={name}
      name={name} 
      isPressed={name === filter}
      setFilter={() => setFilter(name)}
      />
  )
  
    const taskNoun = taskList.length !== 1 ? "tasks" : "task";
    const headingText = `${taskList.length} ${taskNoun} remaining`;

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        {filterList}
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
