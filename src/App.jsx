import React, { useState } from 'react'

import './App.css'

import { Editor } from './components/editor/Editor'
import { Previewer } from './components/previewer/Previewer'

function App() {
  const [input, setInput] = useState('# hello \n\n## world!')

  function change(e) {
    setInput(e.target.value)
  }

  return (
    <div className="App">
      <div className="row">
        <div className="column">
          <Editor placeHolder={input} onChange={change} />
        </div>
        <div className="column">
          <Previewer input={input} />
        </div>
      </div>
    </div>
  )
}

export default App
