import React, { Component } from 'react';

import './Home.css';

function isEven(num){
  return num%2 === 0;
}

let startingBoard =[];
for(let i = 0; i<12; i++){
  for(let j = 0; i<12; j++){
    let outOfBounds = i<2 || i>9 || j<2 || j>9 ? true:false;
    let color;
    if(outOfBounds){
      color = 'red';
    } else if((isEven(i)&&isEven(j)) || !isEven(i)&&!isEven(j)){
      color = 'black';
    } else {
      color = 'white';
    }
    let obj = {
      row:i,
      col:j,
      color:color
    }
    startingBoard.push(obj)
  }
}

class Home extends Component {
  constructor(props){

    this.state = {
      board: startingBoard
    }
  }

  render() {
    
    return (
      <div className="home">

          Home Page

      </div>
    );
  }
}


export default Home;