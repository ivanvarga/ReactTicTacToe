import * as React from 'react';



export class TicTacToe extends React.Component
{
    render() {
        let cells = this.props.game.board.map((el, idx) =>{
            return (<TicTacToeCell tick={el} key={idx}></TicTacToeCell>);
        });
        return (
        <div className="board">
            {cells}
        </div>
        );
    }
}


class TicTacToeCell extends React.Component{
    
    render (){
        let color;
        let value;
        let clickHandler;
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
                clickHandler = this.props.onCellClick;
        }   
        let colorStyle= {color:color};
        return (
            <div className="cell" onClick={clickHandler} style={colorStyle}>{value}</div>
        );
    }
}
