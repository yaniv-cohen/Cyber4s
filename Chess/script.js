let height = 8;
let width = 8;
const table = document.createElement("table");
document.getElementById("chessBoard").appendChild(table);
let canCastleW = [true, true]; //todo add cstle
let canCastleB = [true, true]; //todo add cstle
let last_selection = ["", "", "", ""];
let movedB = [0, 0, 0, 0, 0, 0, 0, 0]; //did the piece in the pawn row move? 0=no 1=yes
let movedW = [0, 0, 0, 0, 0, 0, 0, 0];//did the piece in the pawn row move? 0=no 1=yes
let beybladeDirectionW =0;
let beybladeDirectionB =2;
let current_player = "w";
let previous_board =[];
let turn_div = document.getElementById("turnDiv");
let body = document.getElementsByTagName("body")[0];
let nboard =[];
let board = [];
let legal_moves =[];






let previous_type = last_selection[2];
let previous_color = last_selection[3];
function boardClick(y, x) {
    //on click
    let type = nboard[y][x][0];
    let color = nboard[y][x][1]; //color of the current clicked cell
     previous_type = last_selection[2];
     previous_color = last_selection[3];
    let legal = false;
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
                moveHandler(y,x)
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
                x != last_selection[1] ) &&
                type!="0"
            ) {
                //if clicked on diffrent unit of my color,
                table.rows[y].cells[x].classList.toggle("selected");
                
                getLegalByPiece(y, x, type, color, nboard);
                last_selection = [y, x, type, color]; //remember what you clicked for the next click , position and color of last cell
            } 
        }
    }
    else {
        console.log("reset selection");
        emptyAllSelection();
        table.rows[last_selection[0]].cells[last_selection[1]].classList.remove("selected");
        // let sel_item = sel_list[0];
        //     sel_item.classList.remove('selected');
    }
}
function sameCellClick(y, x) {
    table.rows[y].cells[x].classList.remove('selected');
    last_selection=["","","",""];
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

function get_class(type, color) {
    if (color == "b") {
        if (type == "k") {
            return "kingB";
        } else if (type == "q") {
            return "queenB";
        } else if (type == "b") {
            return "bishopB";
        } else if (type == "n") {
            return "knightB";
        } else if (type == "r") {
            return "rookB";
        } else if (type == "p") {
            return "pawnB";
        } else if (type == "t") {
            return "tankB";
        }
        else if(type =="pr"){
            return 'portalB';
        }
        else if(type =="by"){
            return 'beybladeB';
        }
    } else if (color == "w") {
        if (type == "k") {
            return "kingW";
        } else if (type == "q") {
            return "queenW";
        } else if (type == "b") {
            return "bishopW";
        } else if (type == "n") {
            return "knightW";
        } else if (type == "r") {
            return "rookW";
        } else if (type == "p") {
            return "pawnW";
        } else if (type == "t") {
            return "tankW";
        }
        else if(type =="pr"){
            return 'portalW';
        }
        else if(type =="by"){
            return 'beybladeW';
        }
    }
    return "";
}

function resetCellClass(y, x, table) {
    oldClassList = "";
    if ((y + x) % 2 == 0) {
        oldClassList = "cellW ";
    } else {
        oldClassList = "cellB ";
    }
    table.rows[y].cells[x].className = oldClassList;
}
function emptyAllSelection(){
    let cusid_ele = document.getElementsByClassName("option"); //wipe all options
    while (cusid_ele.length > 0) {
        var item = cusid_ele[0];
        item.classList.remove("option");
    }
}
function getLegalByPiece(y, x, type, color, nboard) {
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
    if (type == "r") {
        //handle rook
        rook(y, x, color, nboard);
    } else if (type == "b") {
        //handle bishop
        bishop(y, x, color, nboard);
    } else if (type == "q") {
        queen(y, x, color, nboard);
    } else if (type == "k") {
        king(y, x, color, nboard);
    } else if (type == "n") {
        knight(y, x, color, nboard);
    } else if (type == "p") {
        if (color == "w") {
            pawnW(y, x, color, nboard);
        } else if (color == "b") {
            pawnB(y, x, color, nboard);
        }
    } 
    else if (type == "pr") {
        console.log("call portal");
        portal(y, x, color, nboard);
    }
    else if (type == "t") {
        if (color == "w") {
            tankW(y, x, color, nboard);
        } else if (color == "b") {
            tankB(y, x, color, nboard);
        }
    }
    else if (type == "by") {
            beyblade(y, x, color, nboard);
    }

}
