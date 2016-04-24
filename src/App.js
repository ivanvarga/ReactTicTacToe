import * as React from 'react';
import { NICE, SUPER_NICE } from './colors';

export class TicTacToe extends React.Component
{
    render() {
        return (
        <div className="board">
            <TicTacToeCell tick="X"></TicTacToeCell>
            <TicTacToeCell tick="X"></TicTacToeCell>
            <TicTacToeCell tick="X"></TicTacToeCell>
            <TicTacToeCell tick="X"></TicTacToeCell>
            <TicTacToeCell tick="X"></TicTacToeCell>
            <TicTacToeCell tick="X"></TicTacToeCell>
            <TicTacToeCell tick="X"></TicTacToeCell>
            <TicTacToeCell tick="X"></TicTacToeCell>
            <TicTacToeCell tick="X"></TicTacToeCell>
        </div>
        );
    }
}

class TicTacToeCell extends React.Component{
    render (){
        return (
            <div className="cell">{this.props.tick}</div>
        );
    }
}

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
        this.interval = setInterval(() => this.tick(), 1000);
    }

    tick() {
        this.setState({
            counter: this.state.counter + this.props.increment
        });
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <h1 style={{ color: this.props.color }}>
                Counter ({this.props.increment}): {this.state.counter}
            </h1>
        );
    }
}

class ListItem extends React.Component{
    render(){
        return(
            <li>{this.props.article} <input type="number" defaultValue={this.props.quantity}/></li>
        );
    }
}

export class GroceryList extends React.Component{
    render (){
        return(
            <ul>
                <ListItem article="Milk" quantity="3"></ListItem>
                <ListItem article="Eggs" quantity="3"></ListItem>
            </ul>
        );
    }
}
export class App extends React.Component {
    render() {
        return (
            <div>
                <Counter increment={1} color={NICE} />
                <Counter increment={5} color={SUPER_NICE} />
            </div>
        );
    }
}