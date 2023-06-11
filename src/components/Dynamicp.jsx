import React from 'react'
import TaskItem from './TaskItem'

import styles from './TaskList.module.css'
import { dptasks } from './dp'

import useLocalStorage from '../hooks/useLocalStorage';

const Dynamicp = () => {
  const [tasks, setTasks] = useLocalStorage('dp.tasks',dptasks.task);
  // console.log(tasks);

  const addTask = (task) => {
    // console.log(task);
    setTasks(prevState => [task,...prevState])
  }

    // var ts=JSON.parse(tasks);

  function update()
  {
    if(dptasks.task.length<tasks.length)
      tasks.length=dptasks.task.length;
    for(var i=0;i<tasks.length;i++)
    {
      tasks[i].name=dptasks.task[i].name;
      tasks[i].link=dptasks.task[i].link;
      tasks[i].id=dptasks.task[i].id;
    }
  
    if(dptasks.task.length>tasks.length)
    {
      for(var i=tasks.length;i<dptasks.task.length;i++)
      {
        addTask(dptasks.task[i]);
      }
    }
  }

  const toggledpTask = (id) => {
    setTasks(prevState => prevState.map(t=> 
      (t.id===id)?{...t,checked:!t.checked}:t));
  }

  update();

  return (
    <>
      <div className='heading-home'>
          <h1>Dynamic Programming Questions</h1>
      </div>
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
    </>
  )
}

export default Dynamicp