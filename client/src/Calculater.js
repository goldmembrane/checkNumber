import React from 'react';

const Calculater = (props) => (
  <div className = 'main-box'>
    <div className = 'formular-box'>{props.formular}</div>
    <button className = 'startBtn' onClick = {() => props.create(props.formular)}>Start!</button>
    <button className = 'answer' onClick = {() => {props.create(props.formular); props.below(props.formular)}}></button>
    <button className = 'answer' onClick = {() => {props.create(props.formular); props.correct(props.formular)}}></button>
    <button className = 'answer' onClick = {() => {props.create(props.formular); props.among(props.formular)}}></button>
  </div>
)

// isWrong의 갯수가 3이상이면
// game over 창을 띄운다.

export default Calculater;