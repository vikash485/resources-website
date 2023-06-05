import React from 'react'
import TaskItem from './TaskItem'

import styles from './TaskList.module.css'
import { dptasks } from './dp'

import useLocalStorage from '../hooks/useLocalStorage';

const Dynamicp = () => {
  const [tasks, setTasks] = useLocalStorage('dp.tasks',dptasks.task);
  // console.log(tasks);

  for(var i=0;i<tasks.length;i++)
  {
    tasks[i].link=dptasks.task[i].link;
  }

  const toggledpTask = (id) => {
    setTasks(prevState => prevState.map(t=> 
      (t.id===id)?{...t,checked:!t.checked}:t));
  }

  return (
    <ul className={styles.tasks}>
        {
            tasks.map(task=>(
                <TaskItem
                    key={task.id}
                    link={task.link}
                    task={task}
                    checked={task.checked}
                    toggleTask={toggledpTask}
                />
            ))
        }
    </ul>
  )
}

export default Dynamicp