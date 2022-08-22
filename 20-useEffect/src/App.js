import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [todo, setTodo] = useState(null)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => setTodo(json))
  }, [])

  console.log('app render')

  return <div className="App">{toro && <h1>{todo.title}</h1>}</div>
}

export default App
