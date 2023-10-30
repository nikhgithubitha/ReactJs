import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {count: 0}

  leftSide = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevValue => ({
        count: prevValue.count - 1,
      }))
    } else {
      this.setState({count: 0})
    }
  }

  rightSide = () => {
    const {count} = this.state
    const {reviewsList} = this.props
    if (count < reviewsList.length - 1) {
      this.setState(prevValue => ({
        count: prevValue.count + 1,
      }))
    } else {
      this.setState({count: reviewsList.length - 1})
    }
  }

  render() {
    const {count} = this.state
    const {reviewsList} = this.props
    return (
      <div className="pro">
        <h1>Reviews</h1>
        <div className="pro style">
          <div>
            <button
              type="button"
              onClick={this.leftSide}
              data-testid="leftArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
              />
            </button>
          </div>
          <div>
            <img
              src={reviewsList[count].imgUrl}
              alt={reviewsList[count].username}
            />
            <p>{reviewsList[count].username}</p>
            <p className="colour">{reviewsList[count].companyName}</p>
            <p className="colour">{reviewsList[count].description}</p>
          </div>
          <div>
            <button
              type="button"
              onClick={this.rightSide}
              data-testid="rightArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
