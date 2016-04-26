import * as React from 'react';
import {connect} from 'react-redux'
import * as Actions from '../actions/actions'
import { bindActionCreators } from 'redux'
import TicTacToeCell from './TicTacToeCell.js'

function mapAppStateToProps(state) {
  return {
    board: state.board,
    winner: state.winner
  };
}

function mapAppDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
    }
 }


class TicTacToe extends React.Component
{
    render() {
        let gameInfo;
        let {board, actions, winner} = this.props;
        let cells = board.map((el, idx) =>{
            return (<TicTacToeCell tick={el}  Id={idx} key={idx}></TicTacToeCell>);
        });
        if(winner){
            if(winner != "E"){
                gameInfo = "Player " + winner +  " won" ;
            } else {
                gameInfo = "It's a draw";
            }
        }
        return (
            <div>
            <div className="control">
                    <div className="ingame" onClick={actions.Restart}>
                        Restart
                    </div>
                </div>
                <div className="board">
                    {cells}
                </div>
                <div className="control">

                    <div className="ingame">
                        {gameInfo}
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapAppStateToProps, mapAppDispatchToProps)(TicTacToe);
