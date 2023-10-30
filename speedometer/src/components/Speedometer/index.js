import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}
  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 10}))
  }
  onDecrement = () => {
    this.setState(prevState => ({count: prevState.count - 10}))
  }
  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1>Speedometer</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="count">speed is {count}mph</h1>
        <p>Min Limit is 0mph, Max Limit is 200mph</p>

        <button className="button" onClick={this.onIncrement}>
          Accelerate
        </button>
        <button className="button" onClick={this.onDecrement}>
          Apply brakes
        </button>
      </div>
    )
  }
}

export default Speedometer
