import * as React from 'react';
import {connect} from 'react-redux'
import * as Actions from '../actions/actions'
import { bindActionCreators } from 'redux'

function mapCellStateToProps(state) {
  return {
    running: state.mode && !state.winner
  };
}

function mapCellDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
    }
 }

const TicTacToeCell= (props) => {

        let color;
        let value;
        let clickHandler;
        let {actions, Id, running, tick} = props;
        switch(tick) {
            case "X":
                color = "green";
                value = "X";
                break;
            case "O":
                color = "red";
                value = "O";
                break;
            default:
                color = "";
                if(running)
                {
                    clickHandler = () => actions.ThickCell(Id);
                }
        }   
        let colorStyle= {color:color};
        return (
            <div className="cell" onClick={clickHandler} style={colorStyle}>{value}</div>
        );
}

export default connect(mapCellStateToProps, mapCellDispatchToProps)(TicTacToeCell);