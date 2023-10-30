const Box = (props) => {
  const { name, colour } = props;
  const container = `box-container ${colour}`;
  return (
    <div className={container}>
      <p>{name}</p>
    </div>
  );
};

const element = (
  <div className="bg-container">
    <h1>Boxes</h1>
    <div className="pro">
      <Box name="Small" colour="yellow" />
      <Box name="Medium" colour="blue" />
      <Box name="Large" colour="pink" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
