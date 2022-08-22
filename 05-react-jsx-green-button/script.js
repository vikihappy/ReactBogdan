const App = ({ initialButtonText, initalClassesList }) => {
  const [buttonText, setButtonText] = React.useState(initialButtonText)
  const [classList, setClassesList] = React.useState(initalClassesList)

  const onButtonClick = () => {
    setButtonText('Hello from React')
    setClassesList('green-btn')
  }
  return (
    <div className="app">
      <button className={classList} onClick={onButtonClick}>
        {buttonText}
      </button>
    </div>
  )
}
const container = document.getElementById('app')
const root = ReactDOM.createRoot(container)
root.render(<App initialButtonText="Click me" initalClassesList="" />)
