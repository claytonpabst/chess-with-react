import React, { Component } from 'react';

import './Home.css';



class Home extends Component {
  constructor(props){
    super(props);

    let startingBoard =[];
    for(let i = 0; i<12; i++){
      for(let j = 0; j<12; j++){
        let outOfBounds = (i<2 || i>9 || j<2 || j>9) ? true:false;
        let color;
        if(outOfBounds){
          color = 'red';
        } else if((this.isEven(i)&&this.isEven(j)) || (!this.isEven(i)&&!this.isEven(j))){
          color = '#555';
        } else {
          color = 'white';
        }
        let obj = {row:i,col:j,color:color,outOfBounds:outOfBounds,}
        startingBoard.push(obj)
      }
    }

    this.state = {
      board: startingBoard,
      PIECES: {empty:0,wP:1,wN:2,wB:3,wR:4,wQ:5,wK:6,bP:7,bN:8,bB:9,bR:10,bQ:11,bK:12},
      fiftyMove: 0,
      castle: {wQ:true,wK:true,bQ:true,bK:true},

    }
    this.isEven = this.isEven.bind(this);
  }

  isEven(num){
    return num%2 === 0;
  }

  render() {

    let board = this.state.board.map((tile, i) => {
      let color = {"background":tile.color}
      if(!tile.outOfBounds){
        return (
          <div style={color} className='singleTile' key={i}>
            
          </div>
        )
      }
    })
    
    return (
      <div className="home">
        <section className='gameBoardWrapper'>
          {board}
        </section>  
      </div>
    );
  }
}


export default Home;