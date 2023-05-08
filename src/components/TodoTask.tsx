import { ITask } from "../interfaces";

interface TaskProps {
  task: ITask;
  deleteTask(task: string): void;
}

const TodoTask = ({ task, deleteTask }: TaskProps) => {
  return (
    <div className="task">
      <div className="content">
        <span>{task.task}</span>
        <span>{task.deadline}</span>
      </div>
      <button onClick={() => deleteTask(task.task)}>X</button>
    </div>
  );
};

export default TodoTask;
