import {Component} from 'react'

import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  changeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  updateSearch = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props

    const searchResults = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )
    return (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
        />
        <div className="pro">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
            alt="search icon"
          />

          <input
            type="search"
            value={searchInput}
            placeholder="Search Google"
            onChange={this.changeInput}
          />
        </div>
        <ul>
          {searchResults.map(eachSuggestion => (
            <SuggestionItem
              key={eachSuggestion.id}
              suggestionDetails={eachSuggestion}
              updateSearch={this.updateSearch}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default GoogleSuggestions
