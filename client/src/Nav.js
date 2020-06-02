import React from 'react';
import CalculateFormular from './Calculater';

// start 버튼을 누르면 1초 뒤에 div박스에 1부터 9까지의 숫자 중 랜덤한 숫자가 출력된다.

function setRandomNumber(props) {
    return (
       <div className = 'setRandomNumber'>
           <div className = 'printNumber'>{props.number}</div>
           <button className = 'startBtn' onClick = {() => props.set(props.number)}></button>
           <CalculateFormular number = {props.number} />
       </div>
    )
}

export default setRandomNumber;