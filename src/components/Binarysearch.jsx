import React from 'react'
import TaskItem from './TaskItem'

import styles from './TaskList.module.css'
import { bstasks } from './bs'

import useLocalStorage from '../hooks/useLocalStorage';

const Binarysearch = () => {

  const [tasks, setTasks] = useLocalStorage('bs.tasks',bstasks.task);
  // console.log(tasks);

  const addTask = (task) => {
    // console.log(task);
    setTasks(prevState => [task,...prevState])
  }

    // var ts=JSON.parse(tasks);
  for(var i=0;i<tasks.length;i++)
  {
    tasks[i].name=bstasks.task[i].name;
    tasks[i].link=bstasks.task[i].link;
  }

  if(bstasks.task.length>tasks.length)
  {
    for(var i=tasks.length;i<bstasks.task.length;i++)
    {
      addTask(bstasks.task[i]);
    }
  }

  const togglebsTask = (id) => {
    setTasks(prevState => prevState.map(t=> 
      (t.id===id)?{...t,checked:!t.checked}:t));
  }

  return (
    <>
      <div className='heading-home'>
              <h1>Binary Search Questions</h1>
      </div>
      <ul className={styles.tasks}>
          {
              tasks.map(task=>(
                  <TaskItem
                  key={task.id}
                  link={task.link}
                      task={task}
                      checked={task.checked}
                      toggleTask={togglebsTask}
                      />
              ))
            }
      </ul>
    </>
  )
}

export default Binarysearch