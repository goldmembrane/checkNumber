import React from "react";
import Nav from "./game/Nav";
import RankingPage from "./game/RankingPage";
import GameOver from "./game/GameOver";
import * as get from "./game/modules/GetRanks";

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
      result: "",
      fetching: false,
      rank: [],
    };
    this.fetchRanks = this.fetchRanks.bind(this);
  }
  componentDidMount() {
    this.fetchRanks();
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

  gotoGameOver() {
    this.setState({ isWrong: this.state.isWrong + 3 });
  }

  checkAnswer() {
    if (eval(this.state.formular) === this.state.number) {
      this.setState((prevState) => ({
        isRight: prevState.isRight + 1,
        result: "o",
      }));
    } else {
      this.setState((prevState) => ({
        isWrong: prevState.isWrong + 1,
        result: "x",
      }));
    }
  }

  checkAnswerBelowNumber() {
    if (eval(this.state.formular) < this.state.number) {
      this.setState((prevState) => ({
        isRight: prevState.isRight + 1,
        result: "o",
      }));
    } else {
      this.setState((prevState) => ({
        isWrong: prevState.isWrong + 1,
        result: "x",
      }));
    }
  }

  checkAnswerAmongNumber() {
    if (eval(this.state.formular) > this.state.number) {
      this.setState((prevState) => ({
        isRight: prevState.isRight + 1,
        result: "o",
      }));
    } else {
      this.setState((prevState) => ({
        isWrong: prevState.isWrong + 1,
        result: "x",
      }));
    }
  }

  handleRankingButtonClick() {
    this.setState((prevState) => ({
      isRankingOpen: !prevState.isRankingOpen,
    }));
  }

  handelStart() {
    this.setState({ isStart: true });
  }

  clearNumber() {
    this.setState({
      number: 0,
      isWrong: 0,
      isRight: 0,
      formular: null,
      result: "",
      isStart: false,
    });
  }

  fetchRanks = async () => {
    this.setState({
      fetching: true,
    });
    const ranks = await get.getRanks();

    console.log(ranks.data);

    this.setState({
      rank: this.state.rank.concat(ranks.data),
      fetching: false,
    });
  };

  updateRanks = async () => {
    const ranks = await get.getRanks();

    console.log(ranks.data);
    this.setState({
      rank: this.state.rank.concat(ranks.data),
    });
  };

  render() {
    return (
      <div>
        <GameOver
          score={this.state.isRight}
          defeat={this.state.isWrong}
          clear={this.clearNumber.bind(this)}
          update={this.updateRanks.bind(this)}
        />
        {this.state.isWrong < 3 ? (
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
              wrong={this.state.isWrong}
              right={this.state.isRight}
              over={this.gotoGameOver.bind(this)}
              result={this.state.result}
            />
            <RankingPage
              isOpen={this.state.isRankingOpen}
              open={this.handleRankingButtonClick.bind(this)}
              rank={this.state.rank}
            />
          </div>
        ) : null}
      </div>
    );
  }
}
export default App;
