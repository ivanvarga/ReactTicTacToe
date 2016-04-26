import * as React from 'react';
import {connect} from 'react-redux'
import * as Actions from '../actions/actions'
import { bindActionCreators } from 'redux'
import TicTacToeCell from './TicTacToeCell.js'
import ModeLink from './ModeLink'
import * as Modes from '../game/gameModes'

function mapAppStateToProps(state) {
  return {
    board: state.board,
    winner: state.winner, 
    mode: state.mode
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
        let {board, actions, winner, mode} = this.props;
        let selectMenu;
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
        if(!mode){
            let options = [{
                value:Modes.HUMAN,
                text:"Puny human"
            },{
                value:Modes.BLIND,
                text:"AI:Monkey"
            },{
                 value:Modes.NOVICE,
                text:"AI:ADHD"
            }, {
                 value:Modes.MASTER,
                text:"AI:Sensei"
            }].map((el)=>{
                return <ModeLink key={el.value} mode={el.value}>{el.text}</ModeLink>;
            });
            
            selectMenu = <div className="ingame">Select:  {options}</div>;
        }
        return (
            <div>
                <div className="board">
                    {cells}
                </div>
                <div className="control">
                    <div className="ingame" onClick={actions.Restart}>
                        <span className="link">Restart</span>
                    </div>
                    <div className="ingame">
                        {gameInfo}
                    </div>
                    {selectMenu}
                </div>
            </div>
        );
    }
}

export default connect(mapAppStateToProps, mapAppDispatchToProps)(TicTacToe);
