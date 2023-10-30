import './index.css'

import {format} from 'date-fns'

const AppointmentItem = props => {
  const {contactDetails, toggleIsFavorite} = props
  const {title, date, isFavorite, id} = contactDetails

  const starImgUrl = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/star-filled-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/star-img.png'

  const onClickFavoriteIcon = () => {
    toggleIsFavorite(id)
  }

  return (
    <li className="pro">
      <div>
        <h1>{title}</h1>
        <p>`Date: ${format(new Date(date), 'dd MMMM yyyy, EEEE')}`</p>
      </div>
      <div>
        <button
          type="button"
          data-testid="star"
          className="favorite-icon-container"
          onClick={onClickFavoriteIcon}
        >
          <img src={starImgUrl} alt="star" />
        </button>
      </div>
    </li>
  )
}

export default AppointmentItem
