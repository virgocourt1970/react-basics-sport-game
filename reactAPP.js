function App(props) {
  return (
    <div>
      <Game venue="Kenzie Arena" />
      <Game venue="Amazon Stadium" />
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

    this.shotSound = new Audio("./basket.mp3");
    this.shotBasket = new Audio("./Swish+2.wav");
  }

  handleShot = () => {
    this.shotSound.play();
    this.setState((state, props) => {
      return { shotsTaken: state.shotsTaken + 1 };
    });
    if (Math.random() > 0.5) {
      this.shotBasket.play();
      this.setState((state, props) => {
        return { score: state.score + 1 };
      });
    }
  };

  resetGame = () => {
    this.setState((state, props) => ({
      resetCount: state.resetCount + 1,
      SalukiTeamStats: {
        shots: 0,
        score: 0,
      },
      CardinalTeamStats: {
        shots: 0,
        score: 0,
      },
    }));
  };

  render() {
    let percentage = "";
    if (this.state.shotsTaken > 0) {
      let stats = (this.state.score / this.state.shotsTaken) * 100;
      percentage = stats + "%";
    }

    return (
      <div>
        <div>{this.props.name}</div>
        <div>
          <img src={this.props.logo} alt="saluki" width="200" />
        </div>
        <div>Score {this.state.score}</div>
        <div>Shots Taken {this.state.shotsTaken}</div>
        {percentage}
        <button onClick={this.handleShot}>Shoot</button>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to {this.props.venue}</h1>
        <Team
          name="Saluki"
          logo="https://siusalukis.com/images/2019/3/5/southernillinois_secondary_WhiteBackground.png"
        />
        <Team
          name="Cardinals"
          logo="https://collegefootballnews.com/wp-content/uploads/sites/83/2018/03/ball-state.jpg?w=1000&h=600&crop=1"
        />
      </div>
    );
  }
}

// Render the App
ReactDOM.render(<App />, document.getElementById("root"));
