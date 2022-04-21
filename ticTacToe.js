function initArray() {
    let initializedArray = []
    for (let i = 0; i < 9; i++) {
        initializedArray.push(false);
    }
    return initializedArray;
}


//All of these if statements could be combined, I just separated Horizontal, Vertical, and Diagonal readability
function checkWin(playerArray) {
    let winner = false;
    if ((playerArray[0] && playerArray[1] && playerArray[2]) || (playerArray[3] && playerArray[4] && playerArray[5]) || (playerArray[6] && playerArray[7] && playerArray[8])) {
        winner = true;
    }
    else if ((playerArray[0] && playerArray[3] && playerArray[6]) || (playerArray[1] && playerArray[4] && playerArray[7]) || (playerArray[2] && playerArray[5] && playerArray[8])) {
        winner = true;
    }
    else if ((playerArray[0] && playerArray[4] && playerArray[8]) || (playerArray[2] && playerArray[4] && playerArray[6])) {
        winner = true;
    }
    return winner;
}

function newGame() {
    //clears the player arrays
    xArray = initArray();
    oArray = initArray();
    xTurn = true;
    turns = 0;
    winner = false;

    //wipes the board
    $('.piece').attr('src', 'placeHolder.png');
    $('.piece').removeClass('picked');
    $('#turn_space').text('X\'s Turn');
    $('.piece').css('background-color', 'white');
}



let xArray = [];
let oArray = [];
let xTurn = true;
let turns = 0 

$('#new_game').click(newGame);

//All Game Play Below
$('.piece').click(function() {
    if($(this).hasClass('picked')) {
        $(this).css('background-color', 'red');
        setTimeout(() => {
            $(this).css('background-color', 'white');
        }, 400);
    }
    else {
        if (xTurn) {
            squareID = parseInt($(this).attr('id'));
            xArray[squareID] = true;
            $(this).attr('src', 'x.png');
            xTurn = false;
            turns++;
            $('#turn_space').text('O\'s Turn');
            $(this).addClass('picked');
            if (checkWin(xArray)){
                $('#turn_space').text('X Wins!!');
                $('.piece').addClass('picked');
                $('.piece').css('background-color', 'green');   
            }
            if (turns>8){
                $('#turn_space').text('Draw');
            }
        }
        else {
            squareID = parseInt($(this).attr('id'));
            oArray[squareID] = true;
            $(this).attr('src', 'o.png');
            xTurn = true;
            $('#turn_space').text('X\'s Turn');
            $(this).addClass('picked');
            turns++;
            if (checkWin(oArray)){
                $('#turn_space').text('O Wins!!');
                $('.piece').addClass('picked');  
                $('.piece').css('background-color', 'green');    
            }       
        }
    }
});
