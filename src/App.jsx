/* eslint-disable react/prop-types */
import { useState } from "react";
import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import { nanoid } from "nanoid"

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
}

const FILTER_NAMES = Object.keys(FILTER_MAP);



const App = (props) => {
  const [tasks, setTasks] = useState(props.tasks)
  const [filter, setFilter] = useState("All")

  const addTask = (name) => {
    const newTask = { id: `todo-${nanoid()}`, name, completed: false }
    setTasks([...tasks, newTask])
  }

  const editTask = (id, newName) => {
    setTasks(editedTaskList => editedTaskList.map(task =>
      id === task.id ? {...task, name: newName} : tasks))
  }

  const toggleTaskCompleted = (id) => {
    setTasks(updatedTask => updatedTask.map(task =>
      id === task.id ? {...task, completed: !task.completed} : task))
  }

  const deleteTask = (id) => {
    setTasks(remainingTasks => remainingTasks.filter(task => id !== task.id))
  }

  const taskList = tasks?.map((task) =>
    <Todo 
      key={task.id}
      name={task.name}
      id={task.id}
      completed={task.completed}
      toggleTaskCompleted={() => toggleTaskCompleted(task.id)}
      deleteTask={() => deleteTask(task.id)}
      editTask={editTask}
    />)
  
  const filterList = FILTER_NAMES.map((name) => 
    <FilterButton
      key={name} 
      name={name}
      isPressed={name === filter}
      setFilter={() => setFilter(name)}
      />
  )
  
  const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
  const headingText = `${taskList.length} ${tasksNoun} remaining`;


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
