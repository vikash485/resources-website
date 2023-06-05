import { useState } from 'react'
import styles from './TaskItem.module.css'

import  {CheckIcon}  from '@heroicons/react/24/solid'

const TaskItem = ({task, toggleTask}) => {

    const [isChecked,setIsChecked]=useState(task.checked)

    const handleCheckboxChange = (e)=>{
        setIsChecked(!isChecked);
        toggleTask(task.id);
        // console.log(task.checked);
    }

    // console.log(checked);

    return (
        <li className={styles.task}>
            <div className={styles["task-group"]}>
                <input
                    type="checkbox"
                    className={styles.checkbox}
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    name={task.name}
                    id={task.id}
                />
                <label
                    htmlFor={task.id}
                    className={styles.label}
                >
                    <a href={task.link} target='_blank'>{task.name}</a>
                    
                    <p className={styles.checkmark}>
                        <CheckIcon strokeWidth={2} width={24} height={24}/>
                    </p>
                </label>
            </div>

        </li>
  )
}

export default TaskItem