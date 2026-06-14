import './App.css'

function App() {
  return (
    <main className="app">
      <h1>Color Cycle</h1>

      <div
        className="color-box"
        style={{ backgroundColor: '#0000FF' }}
        aria-label="Color preview"
      />

      <form className="controls" onSubmit={(e) => e.preventDefault()}>
        <div className="control-row">
          <label htmlFor="red">Red</label>
          <input id="red" type="text" defaultValue="00" maxLength={2} />
          <label htmlFor="red-inc">increment</label>
          <input id="red-inc" type="text" defaultValue="01" maxLength={2} />
        </div>

        <div className="control-row">
          <label htmlFor="green">Green</label>
          <input id="green" type="text" defaultValue="00" maxLength={2} />
          <label htmlFor="green-inc">increment</label>
          <input id="green-inc" type="text" defaultValue="01" maxLength={2} />
        </div>

        <div className="control-row">
          <label htmlFor="blue">Blue</label>
          <input id="blue" type="text" defaultValue="FF" maxLength={2} />
          <label htmlFor="blue-inc">increment</label>
          <input id="blue-inc" type="text" defaultValue="01" maxLength={2} />
        </div>
      </form>

      <button type="button" className="start-stop">
        Start
      </button>

      <p className="warning" role="alert"></p>
    </main>
  )
}

export default App
