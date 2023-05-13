import Modal from './components/Modal/Modal';
import { useState } from 'react';
import style from './App.module.css'
import Container from './components/Container/Container'
import Button from './components/Button/Button';
import List from './components/List/List';
import Input from './components/Input/Input';

function App() {
  const [ isShow, setIsShow ] = useState(false)
  const [ newTask, setNewTask ] = useState('')
  const [ tasks, setTasks ] = useState([
    {
      id:1 , 
      task: 'coding'
    },
    {
      id:2,
      task: 'eat'
    },
    {
      id:3,
      task: 'sleep'
    }
  ])
  const handleShow = () => setIsShow(!isShow)

  console.log(newTask);  

  const handleAddTask = () =>{
    console.log('work')
    setTasks((prevState) => [...prevState,
      {
        id: Date.now(),
        task: newTask
      }
    ])
    handleShow();
  }

  return (
    <>
      <Container>
        <div className={style.wrapper}>
          { isShow && <Modal handleAddTask={handleAddTask} setNewTask={setNewTask} handleShow={handleShow}/> } 
          <Input placeholder={'Search...'}/>
          <Button handleClick={handleShow}><p>Add</p></Button>
          <List tasks={tasks}/>
        </div>
      </Container>
    </>
  );
}

export default App;
