import * as React from 'react';
import {connect} from 'react-redux'
import * as Actions from '../actions/actions'
import { bindActionCreators } from 'redux'

function mapCellStateToProps(state) {
  return {
    winner: state.winner
  };
}

function mapCellDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
    }
 }

class TicTacToeCell extends React.Component{
    
    render (){
        let color;
        let value;
        let clickHandler;
        let {actions, Id} = this.props;
        switch(this.props.tick) {
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
                if(!this.props.winner)
                {
                    clickHandler = () => actions.ThickCell(Id);
                }
        }   
        let colorStyle= {color:color};
        return (
            <div className="cell" onClick={clickHandler} style={colorStyle}>{value}</div>
        );
    }
}

export default connect(mapCellStateToProps, mapCellDispatchToProps)(TicTacToeCell);