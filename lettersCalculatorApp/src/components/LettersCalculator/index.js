import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    word: '',
    count: 0,
  }

  changeText = event => {
    this.setState({word: event.target.value, count: event.target.value.length})
  }

  render() {
    const {word, count} = this.state
    return (
      <div className="bg">
        <div>
          <h1>Calculate the Letters you enter</h1>
          <label htmlFor="letter">Enter the Phrase</label>
          <br />
          <input
            id="letter"
            type="text"
            onChange={this.changeText}
            value={word}
          />
          <p className="pro">No.of letters: {count}</p>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
