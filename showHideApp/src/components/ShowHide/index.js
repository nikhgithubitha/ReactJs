import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {first: false, last: false}

  firstName = () => {
    this.setState(preValue => ({first: !preValue.first}))
  }

  lastName = () => {
    this.setState(preState => ({last: !preState.last}))
  }

  renderAuthFirst = () => {
    const {first} = this.state
    if (first === true) {
      return <p className="add">Joe</p>
    }
    return null
  }

  renderAuthLast = () => {
    const {last} = this.state
    if (last === true) {
      return <p className="add">Jonas</p>
    }
    return null
  }

  render() {
    return (
      <div className="container">
        <h1>Show/Hide</h1>
        <div>
          <button type="button" className="button" onClick={this.firstName}>
            Show/Hide Firstname
          </button>
          <button type="button" className="button" onClick={this.lastName}>
            Show/Hide Lastname
          </button>
        </div>
        <div>
          {this.renderAuthFirst()}
          {this.renderAuthLast()}
        </div>
      </div>
    )
  }
}

export default ShowHide
