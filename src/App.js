import REACT, {useState} from "react"
import "./App.css"

import {HeaderImage} from "./headerImage/headerImage"

function App() {
  const [ready, setReady] =  useState(false)
  if(ready) {
    <div>
      <HeaderImage/>
    </div>
  }
  return (
    <div className="App">
      <h1>Under Maintanance</h1>
    </div>
  )
}

export default App;
