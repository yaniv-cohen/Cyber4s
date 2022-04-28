let height = 8;
let width = 8;
let table = document.createElement("table");
table.setAttribute('id','table');
document.getElementById("chessBoard").appendChild(table);
let canCastleW = [true, true]; //todo add cstle
let canCastleB = [true, true]; //todo add cstle
let last_selection = ["", "", "", ""];
let movedB = [0, 0, 0, 0, 0, 0, 0, 0]; //did the piece in the pawn row move? 0=no 1=yes
let movedW = [0, 0, 0, 0, 0, 0, 0, 0];//did the piece in the pawn row move? 0=no 1=yes
let beybladeDirectionW = 1;
let beybladeDirectionB = 3;
let current_player = "w";
let previous_board = [];
let turn_div = document.getElementById("turnDiv");
let body = document.getElementsByTagName("body")[0];
let nboard = [];
let board = [];
let legal_moves = [];
const KING = "k";
const QUEEN = "q";
const BISHOP = "b";
const KNIGHT = "n";
const ROOK = "r";
const PAWN = "p";
const WHITE = "w";
const BLACK = "b";





let previous_type = last_selection[2];
let previous_color = last_selection[3];



function get_class(type, color) {
    if (color === BLACK) {
        if (type === KING) {
            return "kingB";
        } else if (type === QUEEN) {
            return "queenB";
        } else if (type == BISHOP) {
            return "bishopB";
        } else if (type === KNIGHT) {
            return "knightB";
        } else if (type === ROOK) {
            return "rookB";
        } else if (type === PAWN) {
            return "pawnB";
        } else if (type == "t") {
            return "tankB";
        }
        else if (type == "pr") {
            return 'portalB';
        }
        else if (type == "by") {
            return 'beybladeB';
        }
    } else if (color == WHITE) {
        if (type === KING) {
            return "kingW";
        } else if (type === QUEEN) {
            return "queenW";
        } else if (type == BISHOP) {
            return "bishopW";
        } else if (type === KNIGHT) {
            return "knightW";
        } else if (type === ROOK) {
            return "rookW";
        } else if (type === PAWN) {
            return "pawnW";
        } else if (type == "t") {
            return "tankW";
        }
        else if (type == "pr") {
            return 'portalW';
        }
        else if (type == "by") {
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
function emptyAllSelection() {
    let cusid_ele = document.getElementsByClassName("option"); //wipe all options
    while (cusid_ele.length > 0) {
        var item = cusid_ele[0];
        item.classList.remove("option");
    }
}
function getLegalMovesByPiece(y, x, type, color, nboard) {
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
    if (type === ROOK) {
        //handle rook
        let moves =rook(y, x, color, nboard);
        for(let move of moves)
        {
            // table.children.classList.add('option');
            // document.getElementsByTagName('table')[0].rows(move[0]).cells(move[1]).classList.add('option');
            legal_moves[move[0]][move[1]] =1;
        }
    } else if (type == BISHOP) {
        //handle bishop
        bishop(y, x, color, nboard);
    } else if (type === QUEEN) {
        queen(y, x, color, nboard);
    } else if (type === KING) {
        king(y, x, color, nboard);
    } else if (type === KNIGHT) {
        knight(y, x, color, nboard);
    } else if (type === PAWN) {
        if (color == WHITE) {
            pawnW(y, x, color, nboard);
        } else if (color ===BLACK) {
            pawnB(y, x, color, nboard);
        }
    }
    else if (type == "pr") {
        console.log("call portal");
        portal(y, x, color, nboard);
    }
    else if (type == "t") {
        if (color == WHITE) {
            tankW(y, x, color, nboard);
        } else if (color === BLACK) {
            tankB(y, x, color, nboard);
        }
    }
    else if (type == "by") {
        beyblade(y, x, color, nboard);
    }

}



function getKingCoordinates(color, nboard) {
    for (let col = 0; col < height; col++) {
        for (let row = 0; row < width; row++) {
            if (nboard[row][col][0] === king && nboard[row][col][0] === color) {
                return ([y, x]);
            }

        }
    }
}