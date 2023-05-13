import Modal from './components/Modal/Modal';
import { useState } from 'react';
import style from './App.module.css'
import Container from './components/Container/Container'
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import TodoCard from './components/TodoCard/TodoCard';
import Select from './components/Select/Select';

function App() {
  const [ isShow, setIsShow ] = useState(false)
  const [ newTask, setNewTask ] = useState('')
  const [ search, setSearch ] = useState('')
  const [ currentEdit, setCurrentEdit ] = useState(null) 
  const [ tasks, setTasks ] = useState([
    {
      id:1 , 
      task: 'coding',
      completed: false
    },
    {
      id:2,
      task: 'eat',
      completed: false
    },
    {
      id:3,
      task: 'sleep',
      completed: false
    }
  ])
  const [ filter, setFilter ] = useState('all');

  const handleShow = () => setIsShow(!isShow)

  console.log(newTask);  

  const handleAddTask = () =>{
    if(newTask.length < 1) return
     
    setTasks((prevState) => [...prevState,
      {
        id: Date.now(),
        task: newTask,
        completed: false
      }
    ])
    setNewTask('')
    handleShow();
  }

  const handleDone = (id) => {
    const newList = tasks.map(task => {
      if(task.id === id){
        return {...task, completed: !task.completed}
      }else{
        return task
      }
    })
    setTasks([...newList])
  }

  const handleDelete = (id) => {
    const deletedLedList = tasks.filter(task => task.id !== id)
    setTasks([...deletedLedList])
  }

  const handeleSearch = (event) => {
    setSearch(event.target.value)
  }

  const handleEdit = (editTask) => {
    setCurrentEdit(null)
    const editList = tasks.map(task => {
      if(task.id === editTask.id){
        return editTask
      }else{
        return task
      }
    })
    setTasks([...editList])
  }

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') {
        return task.completed
    } else if (filter === 'notCompleted') {
        return !task.completed
    } else {
        return task.task.toLowerCase().includes(search.toLowerCase())
    }
  })

  return (
    <>
      <Container>
        <div className={style.wrapper}>
          { isShow && <Modal handleAddTask={handleAddTask} setNewTask={setNewTask} handleShow={handleShow}/> } 
          <Button handleClick={handleShow}><p>Add</p></Button>
          <Input name={'search'} placeholder={'Search...'} onChange={handeleSearch}/>
          <Select handleFilter={(value) => setFilter(value)} />
          {filteredTasks.map(task => 
            <TodoCard 
            handleDone={handleDone}
            handleDelete={handleDelete}
            handleSelectEdit={setCurrentEdit}
            handleEdit={handleEdit}
            isEdit={ currentEdit === task.id}
            key={task.id} 
            task={task}/>)}
        </div>
      </Container>
    </>
  );
}

export default App;
