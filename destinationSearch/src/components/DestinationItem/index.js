import './index.css'

const DestinationItem = props => {
  const {userDetails} = props
  const {id, name, imgUrl} = userDetails
  return (
    <li className="user-card-container">
      <img src={imgUrl} alt={name} />
      <p className="user-designation"> {name} </p>
    </li>
  )
}

export default DestinationItem
