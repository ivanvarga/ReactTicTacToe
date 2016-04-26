import * as ActionTypes from '../actions/actionTypes'
import * as Board from '../game/board'
import * as Modes from '../game/gameModes'

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
           if(newState.winner == "E" || 
                newState.mode == Modes.HUMAN){
               return newState;
           }
           return makeMove(newState, Board.takeMove(newState.board, newState.mode));
        case ActionTypes.SET_MODE:
            return Object.assign({}, state, {
                mode: action.mode
            });
        case ActionTypes.RESTART:
        default:
        return  {
            board : ["E", "E", "E", "E", "E", "E", "E", "E", "E"],
            playing : "X",
            mode: null,
            winner : null
        };
    }
}
