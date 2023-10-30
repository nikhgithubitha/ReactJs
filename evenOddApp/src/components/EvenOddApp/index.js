import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0, type: 'Even'}

  randomNumber = () => {
    const random = Math.ceil(Math.random() * 100)
    this.setState(
      prevState => ({count: prevState.count + random}),
      () => {
        // Callback function to update the type state after count is updated
        const {count} = this.state
        const value = count % 2 === 0 ? 'Even' : 'Odd'
        this.setState({type: value})
      },
    )
  }

  render() {
    const {count, type} = this.state
    return (
      <div>
        <h1> Count {count}</h1>
        <p>Count is {type}</p>
        <button type="button" onClick={this.randomNumber}>
          Increment
        </button>
        <p>*Increase By Random Number between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
