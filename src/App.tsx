import React, { FC, useState, ChangeEvent } from "react";
import { ITask } from "./interfaces";
import "./App.css";
import TodoTask from "./components/TodoTask";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const changeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = { task, deadline };
    setTodoList([...todoList, newTask]);
    setTask("");
    setDeadline(0);
  };

  const deleteTaskHandler = (taskName: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.task !== taskName;
      })
    );
  };

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Task..."
            name="task"
            value={task}
            onChange={changeHandler}
          />
          <input
            type="number"
            name="deadline"
            value={deadline}
            placeholder="Deadline (in Day)..."
            onChange={changeHandler}
          />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todoList">
        {todoList.map((task: ITask, key: number) => (
          <TodoTask key={key} task={task} deleteTask={deleteTaskHandler} />
        ))}
      </div>
    </div>
  );
};

export default App;
