const Button = (props) => {
  const { name, className } = props;
  return <button className={className}>{name}</button>;
};

const Heading = (props) => {
  const { name, className } = props;
  return <h1 className={className}>{name}</h1>;
};

const Container = (props) => {
  const { className } = props;
  return <div className={className}></div>;
};

const element = (
  <div>
    <Container className="bg-container" />
    <Heading name="Social Buttons" className="heading" />
    <Button name="Like" className="button1" />
    <Button name="Comment" className="button2" />
    <Button name="Share" className="button3" />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
