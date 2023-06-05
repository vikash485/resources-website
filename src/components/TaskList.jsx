import TaskItem from './TaskItem'

import styles from './TaskList.module.css'
import { bstasks } from './bs'

// console.log(bstasks);

const TaskList = ({tasks, toggleTask}) => {
  return (
    <ul className={styles.tasks}>
        {
            bstasks.task.map(task=>(
                <TaskItem
                    ky={task.id}
                    link={task.link}
                    task={task.name}
                    checked={task.checked}
                    toggleTask={toggleTask}
                />
            ))
        }
    </ul>
  )
}

export default TaskList