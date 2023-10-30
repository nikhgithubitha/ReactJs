import {Component} from 'react'
import './index.css'

class Home extends Component {
  state = {login: false}

  changeState = () => {
    this.setState(prevValue => ({login: !prevValue.login}))
  }

  render() {
    const {login} = this.state
    if (login === false) {
      return (
        <div className="container">
          <h1>Please Login</h1>
          <button type="button" onClick={this.changeState}>
            Login
          </button>
        </div>
      )
    }
    return (
      <div className="container">
        <h1>Welcome User</h1>
        <button type="button" onClick={this.changeState}>
          Logout
        </button>
      </div>
    )
  }
}

export default Home
