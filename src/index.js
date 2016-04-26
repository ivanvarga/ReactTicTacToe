import * as React from 'react';
import ReactDOM from 'react-dom'; 
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './style.css';
import TicTacToe from './components/TicTacToe'
import reducer from './reducers/index.js'



let store = createStore(reducer)


ReactDOM.render(
    <Provider store={store}>
        <TicTacToe/>
    </Provider>, 
    document.getElementById('root')
 );


