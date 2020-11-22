import React, { Component } from 'react'
import "./App.css"

//Clock App
class App extends Component{

    constructor(){
      super()
      this.state = {time:new Date(), alarmTime: ''};
      this.setAlarmTime = this.setAlarmTime.bind(this);
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

    setAlarmTime(event) {
      event.preventDefault();
      const inputAlarmTimeModified = event.target.value + ':00'
      this.setState({
        alarmTime: inputAlarmTimeModified
      })
    }

    setAlarmTime(event) {
      event.preventDefault();
      const inputAlarmTimeModified = event.target.value + ':00'
      this.setState({
        alarmTime: inputAlarmTimeModified
      })
    }

    //renders as text
    render(){
      return (
        <div className = "background">
          <div className = "rectangle"></div>
          <div className = "logo">
            <h2>solaris</h2>
          </div>
          <div className = "sun"></div>
          <div className = "clock"><h1>{this.state.time.toLocaleTimeString()}</h1></div>
          <div className = "alarmphrase"><h2>Set an Alarm &#128516;</h2></div>
          <div className = "setTime">
            <form>
            <input type="time" onChange={this.setAlarmTime}></input>
            </form>
          </div>
        </div>
      )

    }
}

export default App;