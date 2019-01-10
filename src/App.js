import React, { Component } from 'react'
import { Demo } from './components'

class App extends Component {
  render() {
    return <Demo initialPose="enter" pose="exit" />
  }
}

export default App
