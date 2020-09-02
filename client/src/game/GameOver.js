import React from "react";
import "./css/GameOver.scss";

class GameOver extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
    this.textChange = this.textChange.bind(this);
  }

  textChange(event) {
    this.setState({ text: event.target.value });
  }

  render() {
    return this.props.defeat > 2 ? (
      <div className="game-over-box">
        <div className="game-over">Game Over</div>
        <div className="score">your score: {this.props.score}</div>
        <div className="name-box">
          <label className="name-label">name:</label>
          <input
            type="text"
            className="write"
            value={this.state.text}
            onChange={this.textChange}
          />
        </div>
        <div className="save-box">
          <span className="save-temporary">Save score!</span>
          <button
            className="save"
            onClick={(e) => {
              e.preventDefault();
              fetch("http://localhost:8000/rank/post", {
                method: "POST",
                body: JSON.stringify({
                  score: this.props.score,
                  username: this.state.text,
                }),
                credentials: "include",
                headers: {
                  "Content-type": "application/json",
                },
              })
                .then((res) => {
                  if (res.status === 201) {
                    console.log("Save Success");
                  }
                })
                .catch((error) => {
                  console.log(error);
                });

              this.props.clear();
              this.props.update();
            }}
          >
            Save score!
          </button>
        </div>
      </div>
    ) : null;
  }
}

export default GameOver;
