import React from 'react'
import TaskItem from './TaskItem'

import styles from './TaskList.module.css'
import { basictasks } from './basic'

import useLocalStorage from '../hooks/useLocalStorage';

const Basics = () => {

  const [tasks, setTasks] = useLocalStorage('basic.tasks',basictasks.task);
  // console.log(tasks);

  const addTask = (task) => {
    // console.log(task);
    setTasks(prevState => [task,...prevState])
  }

    // var ts=JSON.parse(tasks);
    function update ()
    {
      if(basictasks.task.length<tasks.length)
      tasks.length=basictasks.task.length;
      for(var i=0;i<tasks.length;i++)
      {
        tasks[i].name=basictasks.task[i].name;
        tasks[i].link=basictasks.task[i].link;
        tasks[i].id=basictasks.task[i].id;
      }
    
      if(basictasks.task.length>tasks.length)
      {
        for(var i=tasks.length;i<basictasks.task.length;i++)
        {
          addTask(basictasks.task[i]);
        }
      }
    }

  const togglebsTask = (id) => {
    setTasks(prevState => prevState.map(t=> 
      (t.id===id)?{...t,checked:!t.checked}:t));
  }

  update();

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

export default Basics