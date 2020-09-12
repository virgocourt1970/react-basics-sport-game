function App(props) {
  return (
    <div>
      <h1>Welcome to the Sports Game starter!</h1>
      <em>
        This file represents the way your code should look after completing the{" "}
        <strong>Setup</strong> steps in the instructions.
        <Team
          name="Saluki"
          logo="https://siusalukis.com/images/2019/3/5/southernillinois_secondary_WhiteBackground.png"
        />
        <Team
          name="Cardinals"
          logo="https://collegefootballnews.com/wp-content/uploads/sites/83/2018/03/ball-state.jpg?w=1000&h=600&crop=1"
        />
      </em>
    </div>
  );
}
class Team extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      shotsTaken: 0,
    };
  }

  handleShot = () => {
    this.setState((state, props) => {
      return { shotsTaken: state.shotsTaken + 1 };
    });
    if (Math.random() > 0.5) {
      this.setState((state, props) => {
        return { score: state.score + 1 };
      });
    }
  };

  render() {
    return (
      <div>
        <div>{this.props.name}</div>
        <div>
          <img src={this.props.logo} alt="saluki" width="200" />
        </div>
        <div>Score {this.state.score}</div>
        <div>Shots Taken {this.state.shotsTaken}</div>
        <button onClick={this.handleShot}>Shoot</button>
      </div>
    );
  }
}

// Render the App
ReactDOM.render(<App />, document.getElementById("root"));
