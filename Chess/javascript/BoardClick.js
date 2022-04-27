 //on cell click
function boardClick(y, x) {
    let type = nboard[y][x][0];
    let color = nboard[y][x][1]; //color of the current clicked cell
    previous_type = last_selection[2];
    previous_color = last_selection[3];
  
    let selected_list = [];
    if (y == last_selection[0] && x == last_selection[1]) {
        sameCellClick(y, x);
    }
    else if (
        color == current_player ||
        previous_type == "0" ||
        legal_moves[y][x] != 0
    ) { //if can select or move here

        if (legal_moves[y][x] != 0) {
            if (previous_type != 0) {
                //if last click was on a unit
                console.log(legal_moves);
                moveHandler(y, x)
            }
            var cusid_ele = document.getElementsByClassName("option"); //wipe all options
            while (cusid_ele.length > 0) {
                var item = cusid_ele[0];
                item.classList.remove("option");
            }
            legal_moves = [
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
            ];
            selected_list = document.getElementsByClassName("selected"); //wipe selection
            if (selected_list.length > 0) {
                let sel_item = selected_list[0]; //clear old selected
                sel_item.classList.remove("selected");
            }
            if (type == "k") {
                if (color == "w") {
                    alert("Black Won");
                } else {
                    alert("White Won");
                }
            }
            changePlayer();
        } else if (type != "0") {
            //if i hit a non-empty cell that is not a valid move
            emptyAllSelection();


            selected_list = document.getElementsByClassName("selected"); //wipe selection
            if (selected_list.length > 0) {
                //if i already clicked

                let sel_item = selected_list[0]; //clear old selected
                sel_item.classList.remove("selected");
            }

            if (
                (y != last_selection[0] ||
                    x != last_selection[1]) &&
                type != "0"
            ) {
                //if clicked on diffrent unit of my color,
                table.rows[y].cells[x].classList.toggle("selected");

                getLegalMovesByPiece(y, x, type, color, nboard);
                last_selection = [y, x, type, color]; //remember what you clicked for the next click , position and color of last cell
            }
        }
    }
    else {
        console.log("reset selection");

        if(document.getElementsByClassName("selected")[0])
        {document.getElementsByClassName("selected")[0].classList.remove("selected");}
        emptyAllSelection();
        
        // let sel_item = sel_list[0];
        //     sel_item.classList.remove('selected');
    }
}

function sameCellClick(y, x) {
    table.rows[y].cells[x].classList.remove('selected');
    //contains the previous clicked cell, [y,x,type,color]
    last_selection = ["", "", "", ""];
    legal_moves = [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
    ];
    var cusid_ele = document.getElementsByClassName("option"); //wipe all options
    var optionsList = document.getElementsByClassName("option"); //wipe all options
    while (optionsList.length > 0) {
        var item = optionsList[0];
        item.classList.remove("option");
    }
}