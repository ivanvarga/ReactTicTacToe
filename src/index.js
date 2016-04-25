import * as React from 'react';
import ReactDOM from 'react-dom'; 
import {TicTacToe } from './App';
import { createStore } from 'redux'

import './style.css';

const reducer = (state, action) => {
    if(typeof state === 'undefined'){
       return  {
            board : ["E", "E", "E", "E", "E", "E", "E", "E", "E"],
            playing : "X"
        };
    }
    
    switch(action.type){
        case "tick":
            let newBoard = [...state.board];
            newBoard[action.cellId] = state.playing;
            return Object.assign({}, state,{
                board : newBoard,
                playing : state.playing == "X" ? "O" : "X"
            });
        default:
            return state;
    }
}

let store = createStore(reducer)

function render (){
    ReactDOM.render(<TicTacToe game={store.getState()}/>, document.getElementById('root'));
}

render();
store.subscribe(render);
