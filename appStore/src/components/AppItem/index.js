import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {imageURL, appName} = appDetails
  return (
    <>
      <li className="project-item-container">
        <img className="project-item-image" src={imageURL} alt={appName} />
        <p className="project-item-description">{appName}</p>
      </li>
    </>
  )
}

export default AppItem
