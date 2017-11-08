import React, { Component } from 'react';

import './Home.css';



class Home extends Component {
  constructor(props){
    super(props);

    let startingBoard =[[],[],[],[],[],[],[],[],[],[],[],[]];
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
        let obj = {row:i,col:j,color:color,outOfBounds:outOfBounds,piece:{num:0,val:0,small:false,big:false,major:false,name:'empty'}};
        startingBoard[i].push(obj);
      }
    }

    this.state = {
      board: startingBoard,
      PIECES: {
        e:{num:0,val:0,   small:false,big:false,major:false, name:'empty'},
        wP:{num:1,val:100,    small:true, big:false,major:false, name:'wP'},
        wN:{num:2,val:325,    small:false,big:true, major:false, name:'wN'},
        wB:{num:3,val:325,    small:true, big:false,major:false, name:'wB'},
        wR:{num:4,val:550,    small:false,big:true, major:false, name:'wR'},
        wQ:{num:5,val:1000,   small:false,big:false,major:true, name:'wQ'},
        wK:{num:6,val:50000,  small:false,big:false,major:true, name:'wK'},
        bP:{num:7,val:100,    small:true, big:false,major:false, name:'bP'},
        bN:{num:8,val:325,    small:false,big:true, major:false, name:'bN'},
        bB:{num:9,val:325,    small:false,big:true, major:false, name:'bB'},
        bR:{num:10,val:550,   small:false,big:true, major:false, name:'bR'},
        bQ:{num:11,val:1000,  small:false,big:false,major:true, name:'bQ'},
        bK:{num:12,val:50000, small:false,big:false,major:true, name:'bK'},
      },
      fiftyMove: 0,
      castle: {wQ:true,wK:true,bQ:true,bK:true},
    }
    this.isEven = this.isEven.bind(this);
    this.startNewGame = this.startNewGame.bind(this);
  }

  isEven(num){
    return num%2 === 0;
  }
  startNewGame(){
    let board = [... this.state.board];
    let x = this.state.PIECES;
    let startingBoardPieces = [ [x.bR,x.bN,x.bB,x.bQ,x.bK,x.bB,x.bN,x.bR],
                                [x.bP,x.bP,x.bP,x.bP,x.bP,x.bP,x.bP,x.bP],
                                [x.e, x.e, x.e, x.e, x.e, x.e, x.e, x.e,],
                                [x.e, x.e, x.e, x.e, x.e, x.e, x.e, x.e,],
                                [x.e, x.e, x.e, x.e, x.e, x.e, x.e, x.e,],
                                [x.e, x.e, x.e, x.e, x.e, x.e, x.e, x.e,],
                                [x.wP,x.wP,x.wP,x.wP,x.wP,x.wP,x.wP,x.wP],
                                [x.wR,x.wN,x.wB,x.wK,x.wQ,x.wB,x.wN,x.wR]];
    for(let i=0; i<12; i++){
      for(let j=0; j<12; j++){
        console.log(board[0])
        if(!board[i][j].outOfBounds){
          console.log('hit')
          // board.piece = startingBoardPieces[i][j];
        }
      }
    }
    this.setState({
      board:board
    })
  }

  render() {

    let board = this.state.board.map((row, i) => {
      row.map((tile, j) =>{
        let defaultName = 'That Was Silly';
        let color = {"background":tile.color}
        if(!tile.outOfBounds){
          return (
            <div style={color} className='singleTile' key={j}>
              {tile.piece.name?tile.piece.name:defaultName}
            </div>
          )
        }
      })
    })

    return (
      <div className="home">
        <section className='gameBoardWrapper'>
          {board}
        </section>
        <button onClick={this.startNewGame}>Start New Game</button>
      </div>
    );
  }
}


export default Home;