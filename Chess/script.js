let height = 8;
let width = 8;
const table = document.createElement('table');
document.getElementById('chessBoard').appendChild(table);
let canCastleW = [true, true]; //todo add cstle
let canCastleB = [true, true]; //todo add cstle
let last_selection = ['', '', ''];
let movedB = [0, 0, 0, 0, 0, 0, 0, 0];
let movedW = [0, 0, 0, 0, 0, 0, 0, 0];
let current_player = "w";
class piece {
    constructor(type, color) {
        this.type = type;
        this.color = color;
    }
}

let turn_div = document.getElementById('turnDiv');

let body = document.getElementsByTagName('body')[0];
let nboard = [
    [["r", "b"], ["n", "b"], ["b", "b"], ["q", "b"], ["k", "b"], ["b", "b"], ["n", "b"], ["r", "b"]],
    [["p", "b"], ["p", "b"], ["t", "b"], ["p", "b"], ["p", "b"], ["t", "b"], ["p", "b"], ["p", "b"]],
    [["0", "0"], ["0", "0"], ["p", "b"], ["0", "0"], ["0", "0"], ["p", "b"], ["0", "0"], ["0", "0"]],
    [["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"]],
    [["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"]],
    [["0", "0"], ["0", "0"], ["p", "w"], ["0", "0"], ["0", "0"], ["p", "w"], ["0", "0"], ["0", "0"]],
    [["p", "w"], ["p", "w"], ["t", "w"], ["p", "w"], ["p", "w"], ["t", "w"], ["p", "w"], ["p", "w"]],
    [["r", "w"], ["n", "w"], ["b", "w"], ["q", "w"], ["k", "w"], ["b", "w"], ["n", "w"], ["r", "w"]]
];

let board = [];
for (let i = 0; i < height; i++) {
    board.push([]);
    for (let k = 0; k < width; k++) {
        board[i][k] = new piece(i, k, nboard[i][k][0], nboard[i][k][1]);
    }
}

console.log("board is " + board[4][2].type);



let legal_moves = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
];
function showOptions(y, x) { //on click
    // let type = board[y][x * 2]; nq
    let type = nboard[y][x][0];
    let color = nboard[y][x][1]; //color of the current clicked cell
    let legal = false;
    let sel_list = [];
    // for (let i = 0; i < legal_moves.length; i++) {
    //     if (legal_moves[y][x] == 1) {
    //         leagl = true;

    //     }


    // }
    if (nboard[y][x][1] == current_player || nboard[y][x][0] == "0" || legal_moves[y][x] != 0) {
        if (legal_moves[y][x] != 0) {
            if (nboard[last_selection[0]][last_selection[1]][0] != 0) {//if last click was on a unit
                if (nboard[last_selection[0]][last_selection[1]][0] == "p")//did this pawn move?
                {
                    if (nboard[last_selection[0]][last_selection[1]][1] == "w" && y == 0) {
                        nboard[last_selection[0]][last_selection[1]][0] = "q";
                    }
                    else if (nboard[last_selection[0]][last_selection[1]][1] == "b" && y == height - 1) {
                        nboard[last_selection[0]][last_selection[1]][0] = "q";
                    }
                    if (y == 1 || y == height - 1)//did this pawn move?
                    {
                        if (nboard[last_selection[0]][last_selection[1]][1] == "w") {
                            movedW[x] = 1;
                        }
                        else if (nboard[last_selection[0]][last_selection[1]][1] == "b") {
                            movedB[x] = 1;
                        }
                    }
                }
                if (nboard[last_selection[0]][last_selection[1]][0] == "k")//if i moved a king
                {
                    if (nboard[last_selection[0]][last_selection[1]][1] == "b") {//castle black
                        if (x == 2) {
                            nboard[0][x + 1][0] = "r";
                            nboard[0][x + 1][1] = "b";
                            table.rows[y].cells[x + 1].classList.add('rookB');
                            nboard[0][0][0] = "0";
                            nboard[0][0][1] = "0";
                            table.rows[0].cells[0].classList.remove('rookB');
                        }
                        else if (x ==width+  2) {
                            nboard[0][x - 1][0] = "r";
                            nboard[0][x - 1][1] = "b";
                            table.rows[y].cells[x - 1].classList.add('rookB');
                            nboard[0][width - 1][0] = "0";
                            nboard[0][width - 1][1] = "0";
                            table.rows[0].cells[width - 1].classList.remove('rookB');
                        }
                        canCastleB[0] = false;
                        canCastleB[1] = false;
                    }
                    else if (nboard[last_selection[0]][last_selection[1]][1] == "w") {//castle black
                        if (x == last_selection[1] - 2) {
                            nboard[y][x + 1][0] = "r";
                            nboard[y][x + 1][1] = "w";
                            table.rows[y].cells[x + 1].classList.add('rookW');
                            nboard[y][0][0] = "0";
                            nboard[y][0][1] = "0";
                            table.rows[y].cells[0].classList.remove('rookW');
                        }
                        else if (x == last_selection[1] + 2) {
                            nboard[y][x - 1][0] = "r";
                            nboard[y][x - 1][1] = "w";
                            table.rows[y].cells[x - 1].classList.add('rookW');
                            nboard[y][width - 1][0] = "0";
                            nboard[y][width - 1][1] = "0";
                            table.rows[y].cells[width - 1].classList.remove('rookW');
                        }
                        canCastleW[0] = false;
                        canCastleW[1] = false;
                    }
                }
                nboard[y][x] = nboard[last_selection[0]][last_selection[1]]; //copy the old unit array to the new location
                nboard[last_selection[0]][last_selection[1]] = ["0", "0"];//empty the last unit array
                let newClassList = '';
                if ((x + y) % 2 == 0) {
                    newClassList = 'cellW ';
                }
                else {
                    newClassList = 'cellB ';
                }

                newClassList += get_class(nboard[y][x][0], nboard[y][x][1]);
                table.rows[y].cells[x].className = '';
                table.rows[y].cells[x].className = newClassList;
                oldClassList = '';
                if ((last_selection[0] + last_selection[1]) % 2 == 0) {
                    oldClassList = 'cellW ';
                }
                else {
                    oldClassList = 'cellB ';
                }
                table.rows[last_selection[0]].cells[last_selection[1]].className = oldClassList;
            }
            var cusid_ele = document.getElementsByClassName('option'); //wipe all options
            while (cusid_ele.length > 0) {
                var item = cusid_ele[0];
                item.classList.remove('option');
            }
            legal_moves = [
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0]
            ];
            sel_list = document.getElementsByClassName('selected');//wipe selection
            if (sel_list.length > 0) {
                let sel_item = sel_list[0];//clear old selected
                sel_item.classList.remove('selected');
            }
            // if(current_player=='w')
            // {
            //     current_player='b';
            // }
            // else
            // {
            //     current_player='w';
            // }
            changePlayer();
            if (type == "k") {
                if (color == "w") {
                    alert("Black Won");

                }
                else {
                    alert("White Won");

                }
            }
        }
        else if (nboard[y][x][0] != '0') {//if i hit a non-empty cell that is not a valid move
            let cusid_ele = document.getElementsByClassName('option'); //wipe all options
            while (cusid_ele.length > 0) {
                var item = cusid_ele[0];
                item.classList.remove('option');
            }

            sel_list = document.getElementsByClassName('selected');//wipe selection
            if (sel_list.length > 0) { //if i already clicked

                let sel_item = sel_list[0];//clear old selected
                sel_item.classList.remove('selected');
            }

            if ((y != last_selection[0] || x != last_selection[1]) || sel_list.length == 0)//if clicked on diffrent
            {

                table.rows[y].cells[x].classList.toggle('selected');
                
                if (type == 'r') { //handle rook

                    rook(y, x, color, nboard);
                }
                else if (type == 'b') { //handle bishop
                    bishop(y, x, color, nboard);
                }
                else if (type == 'q') {
                    queen(y, x, color, nboard);
                }
                else if (type == 'k') {
                    king(y, x, color, nboard);
                }
                else if (type == "n") {

                    knight(y, x, color, nboard);
                }
                else if (type == 'p') {
                    if (color == "w") {

                        pawnW(y, x, color, nboard);
                    }
                    else if (color == "b") {

                        pawnB(y, x, color, nboard);
                    }
                }
                else if (type == 't') {
                    console.log("type: " + type);
                    
                    if (color == "w") {
                        console.log("color: " + color);
                        tankW(y, x, color, nboard);
                    }
                    else if (color == "b") {
                        tankB(y, x, color, nboard);
                    }
                }

                last_selection = [y, x, nboard[y][x][1]]; //remember what you clicked for the next click , position and color of last cell
            }
            else {
                table.rows[y].cells[x].classList.remove('selected');
                // let sel_item = sel_list[0];
                //     sel_item.classList.remove('selected');
            }
        }
    }
}




function get_class(type, color) {
    if (color == "b") {
        if (type == "k") {
            return ('kingB');
        }
        else if (type == "q") {
            return ('queenB');
        }
        else if (type == "b") {
            return ('bishopB');
        }
        else if (type == "n") {
            return ('knightB');
        }
        else if (type == "r") {
            return ('rookB');
        }
        else if (type == "p") {
            return ('pawnB');
        }
        else if (type == "t") {
            return ('tankB');
        }
    }
    else if (color == "w") {
        if (type == "k") {
            return ('kingW');
        }
        else if (type == "q") {
            return ('queenW');
        }
        else if (type == "b") {
            return ('bishopW');
        }
        else if (type == "n") {
            return ('knightW');
        }
        else if (type == "r") {
            return ('rookW');
        }
        else if (type == "p") {
            return ('pawnW');
        }
        else if (type == "t") {
            return ('tankW');
        }
    }
    return ('');
}
