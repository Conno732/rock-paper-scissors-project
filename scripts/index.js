console.log('hello world!');



function computerPlay(){
    let choice = Math.floor(Math.random() * 10) % 3;
    switch (choice){
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        default:
            return 'Scissors';
    }
}

function getUserTurn(){
    //change method of input in future versions
    return prompt('Enter your move: Rock, Paper, Scissors'); 
}

function computeTurn(player, computer){
    let PR = 'Paper beats rock, ';
    let SP = 'Scissors beats paper, ';
    let RS = 'Rock beats scissors, ';
    let CW = 'computer wins.';
    let PW = 'player wins.'

    if (player === computer){
        return 'Both players played ' + player + ', it is a tie.';
    }
    if (player === 'Rock'){
        if (computer === 'Scissors'){
            return RS + PW;
        }
        if (computer === 'Paper'){
            return PR + CW;
        }
    }

    if (player === 'Paper'){
        if (computer === 'Rock'){
            return PR + PW;
        }
        if (computer === 'Scissors'){
            return SP + CW;
        }
    }

    if (player === 'Scissors'){
        if (computer === 'Rock'){
            return RS + CW;
        }
        if (computer === 'Paper'){
            return SP + PW;
        }
    }
}

function game(){
    let log = document.getElementById('log');
    for (let i = 0; i < 5; i++){
        tag = document.createElement('p');
        text = document.createTextNode(computeTurn(getUserTurn(), computerPlay()))
        tag.appendChild(text);
        log.appendChild(tag);
    }
}