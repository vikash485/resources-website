import ThemeSwitcher from './components/ThemeSwitcher';
import{BrowserRouter as Router, Routes, Route, Link}from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import NavBar from './components/Navbar';
import Binarysearch from './components/Binarysearch';
import Dynamicp from './components/Dynamicp';

function App() {
  // const [tasks, setTasks] = useState(bstasks.task);
  // console.log(tasks);
  // const [editedTask, setEditedTask] = useState(null);
  // const [isEditing, setIsEditing] = useState(false);


  // const toggleTask = (id) => {
  //   setTasks(prevState => prevState.map(t=> 
  //     (t.id===id)?{...t,checked:!t.checked}:t));
  // }
  
  return (
    <>
    <div>
        <Router>
          <NavBar/>
          <LoadingBar
            height={3}
            color='#f11946'
          />

      <div className='heading-home'>
        <h1>Recommendations for DSA Topics</h1>
        </div>
          <Routes>
            <Route path="/" ></Route>
            <Route path="/binarysearch" element={<Binarysearch/>}></Route>
            <Route path="/dynamicp" element={<Dynamicp/>}></Route>
          </Routes>
        </Router>
        </div>

        <ThemeSwitcher/>

      {/* <div className='container'>
      <Router>
        <ul className='tasks'>
          <li className='task'>
          <button className='btn'>
            <Link  element={<binarysearch toggleTask={toggleTask}/>}>Binary Search</Link>
          </button>
          </li>
          <li className='task'>
          <button className='btn'>
            <Link  element={<dynamicp toggleTask={toggleTask}/>}>Dynamic Programming</Link>
          </button>
          </li>
        </ul>
      </Router>
      </div> */}
    </>
  )
}

export default App
