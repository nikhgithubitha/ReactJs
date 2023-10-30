import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    heads: 0,
    tails: 0,
    total: 0,
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  changeRandom = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevValue => ({
        heads: prevValue.heads + 1,
        tails: prevValue.tails,
        total: prevValue.total + 1,
        imgUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      }))
    } else {
      this.setState(prevValue => ({
        heads: prevValue.heads,
        tails: prevValue.tails + 1,
        total: prevValue.total + 1,
        imgUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      }))
    }
  }

  render() {
    const {heads, tails, total, imgUrl} = this.state

    return (
      <div>
        <h1>Coin Toss Game</h1>
        <p>Heads (or) Tails </p>
        <img src={imgUrl} alt="toss result" />
        <button type="button" onClick={this.changeRandom}>
          Toss Coin
        </button>
        <div className="pro">
          <p>Total:{total} </p>
          <p>Heads:{heads}</p>
          <p>Tails:{tails}</p>
        </div>
      </div>
    )
  }
}

export default CoinToss
