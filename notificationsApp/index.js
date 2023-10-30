const Notification = (props) => {
  const { name, className, src } = props;
  const classContainer = `container ${className}`;
  return (
    <div className={classContainer}>
      <img src={src} className="logo" />
      <p>{name}</p>
    </div>
  );
};

const element = (
  <div className="bg-container">
    <h1>Notifications</h1>
    <Notification
      name="Information Message"
      className="blue"
      src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
    />
    <Notification
      name="Success Message"
      className="green"
      src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
    />
    <Notification
      name="Warning Message"
      className="yellow"
      src="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
    />
    <Notification
      name="Error Message"
      className="red"
      src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
