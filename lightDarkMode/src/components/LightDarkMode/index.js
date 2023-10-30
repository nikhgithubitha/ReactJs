import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  changeTo = () => {
    this.setState(preValue => ({isDarkMode: !preValue.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    if (isDarkMode === true) {
      return (
        <div className="container">
          <h1>Click To Change Mode</h1>
          <button type="button" className="button" onClick={this.changeTo}>
            Light Mode
          </button>
        </div>
      )
    }
    return (
      <div className="container-light">
        <h1>Click To Change Mode</h1>
        <button type="button" className="button-light" onClick={this.changeTo}>
          Dark Mode
        </button>
      </div>
    )
  }
}
export default LightDarkMode
