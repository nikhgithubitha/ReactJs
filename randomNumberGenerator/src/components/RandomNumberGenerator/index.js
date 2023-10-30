import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  randomNumber = () => {
    const getRandom = Math.ceil(Math.random() * 100)
    this.setState({number: getRandom})
  }

  render() {
    const {number} = this.state
    return (
      <div className="bgContainer">
        <div className="cardContainer">
          <h1 className="heading">Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button type="button" className="button" onClick={this.randomNumber}>
            Generate
          </button>
          <p className="heading">{number}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
