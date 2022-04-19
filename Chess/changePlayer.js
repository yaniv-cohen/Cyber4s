function changePlayer() {
    current_player
    if (current_player == 'w') {
        current_player = 'b';
        turn_div.textContent = "current player is Black";
        
    }
    else {
        current_player = 'w';
        turn_div.textContent = "current player is White";
        turn_div.classList.toggle("whiteBody");
    }
    turn_div.classList.toggle("whiteTurn");
    turn_div.classList.toggle("blackTurn");

}