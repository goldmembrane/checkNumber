import React from 'react';


class Calculater extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        randomNumber: 0,
        operator: {
            1: '+',
            2: '-',
            3: '*',
        },
        formulars: null,
    }
  }
  createRandom() {
    this.setState({randomNumber: 
      Math.floor(Math.random() * 99) + 1});
  };

  createFormular() {
    let formular = 
      `${this.state.randomNumber} + ${this.state.operator[Math.floor(Math.random() * 4) + 1]} +
       ${this.state.randomNumber} + ${this.state.operator[Math.floor(Math.random() * 4) + 1]} +
       ${this.state.randomNumber}`
    
    this.setState({formulars: formular});
  }

}

export default Calculater;