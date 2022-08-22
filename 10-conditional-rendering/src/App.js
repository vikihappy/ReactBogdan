import './App.css'
import PetInfo from './components/Petinfo'

function App() {
  return (
    <div className="App">
      <PetInfo animal="dog" age="3" hasPet />
      <PetInfo animal="cat" age="7" hasPet={false} />
    </div>
  )
}

export default App
