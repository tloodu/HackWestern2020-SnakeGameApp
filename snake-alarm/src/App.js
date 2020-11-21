import React, { Component } from 'react'
import "./App.css"

//Clock App
class App extends Component{

    constructor(){
      super()
      this.state={time:new Date()}
    }

    //new date is created
    currentTime(){
      this.setState({
        time: new Date()
      })
    }

    //increments the clock every second
    componentWillMount(){
      setInterval(() => this.currentTime(),1000)
    }

    //renders as text
    render(){
      return (
        <div className = "clock">
          <div className = "rectangle"></div>
          <div className = "logo">
            <h2>solaris</h2>
          </div>
          <div className = "sun"></div>
          <h1>
            {this.state.time.toLocaleTimeString()}
          </h1>
        </div>
      )
    }
}

export default App;