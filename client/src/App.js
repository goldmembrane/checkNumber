import React from "react";
import Nav from "./game/Nav";
import GameOver from "./game/GameOver";
import RankingPage from "./game/RankingPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      formular: null,
      randomNumber: 99,
      operator: {
        1: "+",
        2: "-",
      },
      isRight: 0,
      isWrong: 0,
      isRankingOpen: false,
    };
  }

  setNumber() {
    this.setState({ number: Math.floor(Math.random() * 70) + 30 });
  }

  createRandomFormular() {
    this.setState({
      formular: `${Math.floor(Math.random() * this.state.randomNumber) + 1}
        ${this.state.operator[Math.floor(Math.random() * 2) + 1]}
        ${Math.floor(Math.random() * this.state.randomNumber) + 1}
        ${this.state.operator[Math.floor(Math.random() * 2) + 1]}
        ${Math.floor(Math.random() * this.state.randomNumber) + 1}`,
    });
  }

  checkAnswer() {
    if (eval(this.state.formular) === this.state.number) {
      this.setState({ isRight: this.state.isRight + 1 });
    } else {
      this.setState({ isWrong: this.state.isWrong + 1 });
    }
  }

  checkAnswerBelowNumber() {
    if (eval(this.state.formular) < this.state.number) {
      this.setState({ isRight: this.state.isRight + 1 });
    } else {
      this.setState({ isWrong: this.state.isWrong + 1 });
    }
  }

  checkAnswerAmongNumber() {
    if (eval(this.state.formular) > this.state.number) {
      this.setState({ isRight: this.state.isRight + 1 });
    } else {
      this.setState({ isWrong: this.state.isWrong + 1 });
    }
  }

  handleRankingButtonClick() {
    this.setState((prevState) => ({
      isRankingOpen: !prevState.isRankingOpen,
    }));
  }

  render() {
    return this.state.isWrong < 3 ? (
      <div>
        <Nav
          set={this.setNumber.bind(this)}
          number={this.state.number}
          create={this.createRandomFormular.bind(this)}
          formular={this.state.formular}
          correct={this.checkAnswer.bind(this)}
          below={this.checkAnswerBelowNumber.bind(this)}
          among={this.checkAnswerAmongNumber.bind(this)}
          open={this.handleRankingButtonClick.bind(this)}
          isOpen={this.state.isRankingOpen}
        />
        <RankingPage
          isOpen={this.state.isRankingOpen}
          open={this.handleRankingButtonClick.bind(this)}
        />
      </div>
    ) : (
      <div>
        <GameOver score={this.state.isRight} />
      </div>
    );
  }
}

export default App;
