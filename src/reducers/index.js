import * as ActionTypes from '../actions/actionTypes'
import * as Board from '../game/board'


function makeMove(state, cellId){
     let newBoard = [...state.board];
    newBoard[cellId] = state.playing;
    return Object.assign({}, state,{
        board : newBoard,
        playing : state.playing == "X" ? "O" : "X",
        winner : Board.IsTerminal(newBoard)
    });
}

export default function reducer(state, action) {
    
    switch(action.type){
        case ActionTypes.THICK:
           let newState = makeMove(state, action.cellId);
           if(newState.winner == "E"){
               return newState;
           }
           return makeMove(newState, Board.takeANoviceMove(newState.board));
        case ActionTypes.RESTART:
        default:
        return  {
            board : ["E", "E", "E", "E", "E", "E", "E", "E", "E"],
            playing : "X",
            winner : null
        };
    }
}
