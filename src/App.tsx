import './App.css'
import { questA } from './tasks/tasks'
import { Board } from './Board'

function App() {

  return (
      <Board tasks={questA} />
  )
}

export default App
