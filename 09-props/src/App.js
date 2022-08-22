import './App.css'
import PetInfo from './components/Petinfo'

function App() {
  return (
    <div className="App">
      <PetInfo animal="dog" age="3" />
      <PetInfo animal="cat" age="7" />
    </div>
  )
}

export default App
