import React, { useState } from "react"
import Posts from "./Posts"

import "./App.css"

const App = () => {
  const [inputValue, setValue] = useState("")
  const [searchItem, setSearchItem] = useState(inputValue)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearchItem(inputValue)
    setValue("")
  }

  return (
    <div className="ui two column centered grid">
      <div className="column">
        <div className="ui search">
          <form onSubmit={handleSubmit}>
            <div className="ui icon input">
              <input
                className="prompt"
                type="text"
                value={inputValue}
                placeholder="Search"
                onChange={(e) => setValue(e.target.value)}
              />
              <i className="search icon"></i>
            </div>
          </form>
          <Posts searchItem={searchItem} />
        </div>
      </div>
    </div>
  )
}

export default App
