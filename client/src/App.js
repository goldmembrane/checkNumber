import React from 'react';
import Nav from './Nav';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        number: 0,
        formular: null,
        randomNumber: 99,
        operator: {
          1: '+',
          2: '-',
        },
        isRight: 0,
        wrong: 0,
    }
  }

  componentDidMount() {
    this.setState({ formular: `${Math.floor(Math.random() * this.state.randomNumber) + 1}
    ${this.state.operator[Math.floor(Math.random() * 2) + 1]}
    ${Math.floor(Math.random() * this.state.randomNumber) + 1}
    ${this.state.operator[Math.floor(Math.random() * 2) + 1]}
    ${Math.floor(Math.random() * this.state.randomNumber) + 1}`})
  }

  setNumber() {
    this.setState({ number: Math.floor(Math.random() * 70) + 30 });
  };

  createRandomFormular() {

    this.setState(
      {
        formular: `${Math.floor(Math.random() * this.state.randomNumber) + 1}
        ${this.state.operator[Math.floor(Math.random() * 2) + 1]}
        ${Math.floor(Math.random() * this.state.randomNumber) + 1}
        ${this.state.operator[Math.floor(Math.random() * 2) + 1]}
        ${Math.floor(Math.random() * this.state.randomNumber) + 1}`,
      }
    );
  };

  incrementRight = () => {
    this.setState({ isRight: this.state.isRight + 1 });
  }

  incrementWrong = () => {
    this.setState({ isWrong: this.state.isWrong + 1 });
  }

  checkAnswer(value) {
    if ( eval(this.state.formular) === value ) {
      this.setState((state, props) => ({
        isRight: state.isRight + props.incrementRight
      }));
    }else {
      this.setState((state, props) => ({
        isWrong: state.isWrong + props.incrementWrong
      }));
    }
  }

  checkAnswerBelowNumber(value) {
    if ( eval(this.state.formular) < value ) {
      this.setState((state, props) => ({
        isRight: state.isRight + props.incrementRight
      }));
    }else {
      this.setState((state, props) => ({
        isWrong: state.isWrong + props.incrementWrong
      }));
    }
  }

  checkAnswerAmongNumber(value) {
    if ( eval(this.state.formular) > value ) {
      this.setState((state, props) => ({
        isRight: state.isRight + props.incrementRight
      }));
    }else {
      this.setState((state, props) => ({
        isWrong: state.isWrong + props.incrementWrong
      }));
    }
  }

  render() {
      return (
          <div>
              <Nav 
              set = {this.setNumber.bind(this)} 
              number = {this.state.number}
              create = {this.createRandomFormular.bind(this)}
              formular = {this.state.formular}
              correct = {this.checkAnswer.bind(this)}
              below = {this.checkAnswerBelowNumber.bind(this)}
              among = {this.checkAnswerAmongNumber.bind(this)}
              />
          </div>
      )
  }
}

export default App;