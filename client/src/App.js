import React from 'react';
import Nav from './Nav';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        number: 0,
    }
  }

  setNumber() {
    this.setState({number: Math.floor(Math.random() * 9) + 1});
  }


  render() {
      return (
          <div>
              <Nav set = {this.setNumber.bind(this)} number = {this.state.number} />
          </div>
      )
  }
}

export default App;