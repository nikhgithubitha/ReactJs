import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, updateSearch} = props
  const {suggestion} = suggestionDetails
  const changeValueType = () => {
    updateSearch(suggestion)
  }
  return (
    <li>
      <div className="pro">
        <p>{suggestion}</p>
        <button type="button" onClick={changeValueType}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
            alt="arrow"
          />
        </button>
      </div>
    </li>
  )
}

export default SuggestionItem
