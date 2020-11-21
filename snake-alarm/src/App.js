import React, { Component } from 'react'

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
        <h1>
          {this.state.time.toLocaleTimeString()}
        </h1>
      )
    }
}

export default App;