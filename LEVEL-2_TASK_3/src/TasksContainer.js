import {Task} from "./Task";

function TasksContainer({ tasks,onDeleteTask,onToggle}) {
  return (
    <div id='tasks'>
      {tasks.map((task) => {
        return  <Task task={task} onDeleteTask={onDeleteTask} onToggle={onToggle}/>
      })}
    </div>
  );
}

export default TasksContainer;
