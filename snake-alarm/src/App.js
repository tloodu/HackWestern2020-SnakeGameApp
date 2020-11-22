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


    checkAlarmClock(){
        if(this.state.time == this.state.alarmTime) {
          alert("its time!");
        } else {
          console.log("not yet");
        }
      }   

    //renders as text
    render(){
      return (
        <div className = "background">
          <div className = "rectangle"></div>
          <div className = "logo">
            <h2>solaris</h2>
          </div>
          <div className = "clock"><h1>{this.state.time.toLocaleTimeString()}</h1></div>
          <div className = "alarmphrase"><h2>Set an Alarm &#128516;</h2></div>
          <div className= "timer">
            <form>
            <input className= "setTime" type="time" onChange={this.setAlarmTime}></input>
            </form>
          </div>
          <div className= "buttondiv">
            <a href= "testsnake.html"><button className= "button" type="button">Play Game</button></a>
          </div>
        </div>
      )

    }
}

export default App;