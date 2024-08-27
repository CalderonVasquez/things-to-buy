/* eslint-disable react/prop-types */

// import { useState } from "react";
import Todo from "./components/Todo";
// import { nanoid } from "nanoid"

const App = (props) => {

  const taskList = props.tasks.map(task =>
    <Todo 
      key={task.id}
      name={task.name}
      id={task.id}
      completed={task.completed}
    />
  )

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <form>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
      <div className="filters btn-group stack-exception">
        <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Show </span>
          <span>all</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Active</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Completed</span>
          <span className="visually-hidden"> tasks</span>
        </button>
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        {taskList}
      </ul>
    </div>
  );
}

export default App









// const App = (props) => {
//   return (
//     <div className="todoapp stack-large">
//       <h1>TodoMatic</h1>
//       <form>
//         <h2 className="label-wrapper">
//           <label htmlFor="new-todo-input" className="label__lg">
//             What needs to be done?
//           </label>
//         </h2>
//         <input
//           type="text"
//           id="new-todo-input"
//           className="input input__lg"
//           name="text"
//           autoComplete="off"
//         />
//         <button type="submit" className="btn btn__primary btn__lg">
//           Add
//         </button>
//       </form>
//       <div className="filters btn-group stack-exception">
//         <button type="button" className="btn toggle-btn" aria-pressed="true">
//           <span className="visually-hidden">Show </span>
//           <span>all</span>
//           <span className="visually-hidden"> tasks</span>
//         </button>
//         <button type="button" className="btn toggle-btn" aria-pressed="false">
//           <span className="visually-hidden">Show </span>
//           <span>Active</span>
//           <span className="visually-hidden"> tasks</span>
//         </button>
//         <button type="button" className="btn toggle-btn" aria-pressed="false">
//           <span className="visually-hidden">Show </span>
//           <span>Completed</span>
//           <span className="visually-hidden"> tasks</span>
//         </button>
//       </div>
//       <h2 id="list-heading">3 tasks remaining</h2>
//       <ul
//         role="list"
//         className="todo-list stack-large stack-exception"
//         aria-labelledby="list-heading">
//         <li className="todo stack-small">
//           <div className="c-cb">
//             <input id="todo-0" type="checkbox" defaultChecked />
//             <label className="todo-label" htmlFor="todo-0">
//               Eat
//             </label>
//           </div>
//           <div className="btn-group">
//             <button type="button" className="btn">
//               Edit <span className="visually-hidden">Eat</span>
//             </button>
//             <button type="button" className="btn btn__danger">
//               Delete <span className="visually-hidden">Eat</span>
//             </button>
//           </div>
//         </li>
//         <li className="todo stack-small">
//           <div className="c-cb">
//             <input id="todo-1" type="checkbox" />
//             <label className="todo-label" htmlFor="todo-1">
//               Sleep
//             </label>
//           </div>
//           <div className="btn-group">
//             <button type="button" className="btn">
//               Edit <span className="visually-hidden">Sleep</span>
//             </button>
//             <button type="button" className="btn btn__danger">
//               Delete <span className="visually-hidden">Sleep</span>
//             </button>
//           </div>
//         </li>
//         <li className="todo stack-small">
//           <div className="c-cb">
//             <input id="todo-2" type="checkbox" />
//             <label className="todo-label" htmlFor="todo-2">
//               Repeat
//             </label>
//           </div>
//           <div className="btn-group">
//             <button type="button" className="btn">
//               Edit <span className="visually-hidden">Repeat</span>
//             </button>
//             <button type="button" className="btn btn__danger">
//               Delete <span className="visually-hidden">Repeat</span>
//             </button>
//           </div>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default App;

// editing template

// const editingTemplate = (
//     <form className="stack-small">
//         <div className="form-group">
//             <label className="todo-label" htmlFor={id}>
//                 New name for {name}
//             </label>
//             <input id={id} className="todo-text" type="text" />
//         </div>
//         <div className="btn-group">
//             <button type="button" className="btn todo-cancel">
//                 Cancel
//                 <span className="visually-hidden">renaming {name}</span>
//             </button>
//             <button type="submit" className="btn btn__primary todo-edit">
//                 Save
//                 <span className="visually-hidden">new name for {name}</span>
//             </button>
//         </div>
//     </form>
// );
// const viewTemplate = (
//     <div className="stack-small">
//         <div className="c-cb">
//             <input
//                 id={id}
//                 type="checkbox"
//                 defaultChecked={completed}
//                 onChange={toggleTaskCompleted}
//             />
//             <label className="todo-label" htmlFor={id}>
//                 {name}
//             </label>
//         </div>
//         <div className="btn-group">
//             <button type="button" className="btn">
//                 Edit <span className="visually-hidden">{name}</span>
//             </button>
//             <button
//                 type="button"
//                 className="btn btn__danger"
//                 onClick={deleteTask}>
//                 Delete <span className="visually-hidden">{name}</span>
//             </button>
//         </div>
//     </div>
// );