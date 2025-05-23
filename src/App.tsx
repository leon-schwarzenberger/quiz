import './App.css'
import { allTasks } from './tasks/tasks'
import { Board } from './Board'

function App() {


  

  return (
      <Board tasks={allTasks} />
  )
}

export default App
