import * as Modes from './gameModes'

export function IsTerminal(board) {
       
        for(var i = 0; i <= 6; i = i + 3) {
            if(board[i] !== "E" && board[i] === board[i + 1] && board[i + 1] == board[i + 2]) {
                return board[i];
            }
        }

        //check columns
        for(var i = 0; i <= 2 ; i++) {
            if(board[i] !== "E" && board[i] === board[i + 3] && board[i + 3] === board[i + 6]) {
                return board[i];
            }
        }

        //check diagonals
        for(var i = 0, j = 4; i <= 2 ; i = i + 2, j = j - 2) {
            if(board[i] !== "E" && board[i] == board[i + j] && board[i + j] === board[i + 2*j]) {
                return board[i];
            }
        }

        var available = board.filter((cell) => { return cell=="E"; });
        if(available.length == 0) {
            return "E";
        }
        else {
            return null;
        }
}



function evaluateAction(currentState, pos, o_moves, player = "O"){
    var newState = [...currentState.slice(0,pos), player, ...currentState.slice(pos+1)];
    let terminal = IsTerminal(newState);
    let retScore;
    if(terminal){
        if(terminal == "X"){
            return 10 - o_moves;
        } 
        else if(terminal == "O")
        {
            return o_moves - 10;
        }
        else
        {
            return 0;
        }
    }
    let newO_moves = player == "O" ? o_moves + 1 : o_moves;
    var availableActions = sortActions(newState, player=="X" ? "O" : "X", newO_moves);
    return availableActions[0].value;
}

function sortActions(currentState, player = "O", moves = 0){
    var availableActions = currentState.map((cell, idx) => {
        return {
            cell: cell,
            pos: idx, 
            value: 0
        }
    }).filter((el) => { 
        return el.cell=="E"; 
    });
    
    for (var elem of availableActions) {
        elem.value = evaluateAction(currentState, elem.pos, moves, player);
    }
    
    return availableActions.sort((el1, el2)=>{
        if (el1.value < el2.value) {
            return player == "O" ? -1 : 1;
        }
        if (el1.value > el2.value) {
            return player == "O" ? 1 : -1;
        }
        return 0;
    });    
}

function takeABlindMove(currentState) {
    var available = currentState.map((cell, idx) => {
        return {
            cell: cell,
            pos: idx, 
            value: 0
        }
    }).filter((el) => { 
        return el.cell=="E"; 
    });
    
    var randomCell = available[Math.floor(Math.random() * available.length)];
    return randomCell.pos;
}

export function takeANoviceMove(currentState) {
    var availableActions = sortActions(currentState);

    /*
        * take the optimal action 40% of the time, and take the 1st suboptimal action 60% of the time
        */
    var chosenAction;
    if(Math.random()*100 <= 40) {
        chosenAction = availableActions[0];
    }
    else {
        if(availableActions.length >= 2) {
            //if there is two or more available actions, choose the 1st suboptimal
            chosenAction = availableActions[1];
        }
        else {
            //choose the only available actions
            chosenAction = availableActions[0];
        }
    }

    return chosenAction.pos;
};

 export function takeAMasterMove(currentState) {
     var availableActions = sortActions(currentState);
     return availableActions[0].pos;
 }
 
 export function takeMove(currentState, mode){
     switch(mode){
         case Modes.BLIND:
            return takeABlindMove(currentState);
         case Modes.NOVICE:
            return takeANoviceMove(currentState);
         case Modes.MASTER:
            return takeAMasterMove(currentState);
         default:
          return -1;
     }
 }
 