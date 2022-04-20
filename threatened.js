function dangerStright(y, x, color, nboard) {
    console.log("color: " + color);
    for (let i = y - 1; i >= 0; i--) {
        let cell_type = nboard[i][x][0];
        let cell_color = nboard[i][x][1];

        //look up
        if (cell_color != color && (cell_type == "r" || cell_type == "q")) {
            //if diffrent color and rook or queen
            console.log("true");
            return true;
        } else if (
            cell_color == color ||
            (cell_color != color &&
                cell_color != "0" &&
                !(cell_type == "r" || cell_type == "q"))
        ) {
            //if hit same color or diffrent color but not rook or queen
            console.log("cell_type: " + cell_type);
            console.log("cell_color: " + cell_color);
            console.log("met same color or non r/q");
            break;
        }
    }

    for (let i = y + 1; i < height; i++) {
        let cell_type = nboard[i][x][0];
        let cell_color = nboard[i][x][1];
        //look down
        if (cell_color != color && (cell_type == "r" || cell_type == "q")) {
            //if diffrent color and rook or queen
            console.log("true");
            return true;
        } else if (
            cell_color == color ||
            (cell_color != color &&
                cell_color != "0" &&
                !(cell_type == "r" || cell_type == "q"))
        ) {
            //if hit same color or diffrent color but not rook or queen
            console.log("cell_type: " + cell_type);
            console.log("cell_color: " + cell_color);
            console.log("met same color or non r/q");
            break;
        }
    }

    for (let i = x - 1; i >= 0; i--) {
        //look left
        let cell_type = nboard[y][i][0];

        let cell_color = nboard[y][i][1];
        if (cell_color != color && (cell_type == "r" || cell_type == "q")) {
            //if diffrent color and rook or queen
            console.log("true");
            return true;
        } else if (
            cell_color == color ||
            (cell_color != color &&
                cell_color != "0" &&
                !(cell_type == "r" || cell_type == "q"))
        ) {
            //if hit same color or diffrent color but not rook or queen
            console.log("cell_type: " + cell_type);
            console.log("cell_color: " + cell_color);
            console.log("met same color or non r/q");
            break;
        }
    }
    for (let i = x + 1; i < width; i++) {
        let cell_type = nboard[y][i][0];
        let cell_color = nboard[y][i][1];
        //look right
        if (cell_color != color && (cell_type == "r" || cell_type == "q")) {
            //if diffrent color and rook or queen
            console.log("true");
            return true;
        } else if (
            cell_color == color ||
            (cell_color != color &&
                cell_color != "0" &&
                !(cell_type == "r" || cell_type == "q"))
        ) {
            //if hit same color or diffrent color but not rook or queen
            console.log("cell_type: " + cell_type);
            console.log("cell_color: " + cell_color);
            console.log("met same color or non r/q");
            break;
        }
    }
}

function dangerDiagonal(y, x, color, nboard) {
    for (let i = 0; i < y && i < x; i++) {
        let cell_type = nboard[y - i - 1][x - i - 1][0];
        let cell_color = nboard[y - i - 1][x - i - 1][1];

        if (cell_color != color && (cell_type == "b" || cell_type == "q")) {
            //if diffrent color and rook or queen
            console.log("true");
            return true;
        } else if (
            cell_color == color ||
            (cell_color != color &&
                cell_color != "0" &&
                !(cell_type == "b" || cell_type == "q"))
        ) {
            //if hit same color or diffrent color but not rook or queen
            console.log("cell_type: " + cell_type);
            console.log("cell_color: " + cell_color);
            console.log("met same color or non b/q");
            break;
        }
    }
    for (let i = 0; i < y && i < width - x - 1; i++) {
        let cell_type = nboard[y - i - 1][x + i + 1][0];
        let cell_color = nboard[y - i - 1][x + i + 1][1];
        //up right

        if (cell_color != color && (cell_type == "b" || cell_type == "q")) {
            //if diffrent color and rook or queen
            console.log("true");
            return true;
        } else if (
            cell_color == color ||
            (cell_color != color &&
                cell_color != "0" &&
                !(cell_type == "b" || cell_type == "q"))
        ) {
            //if hit same color or diffrent color but not rook or queen
            console.log("cell_type: " + cell_type);
            console.log("cell_color: " + cell_color);
            console.log("met same color or non b/q");
            break;
        }
    }

    for (let i = 0; i < height - y - 1 && i < x; i++) {
        let cell_type = nboard[y + i + 1][x - i - 1][0];
        let cell_color = nboard[y + i + 1][x - i - 1][1];
        //down right

        if (cell_color != color && (cell_type == "b" || cell_type == "q")) {
            //if diffrent color and rook or queen
            console.log("true");
            return true;
        } else if (
            cell_color == color ||
            (cell_color != color &&
                cell_color != "0" &&
                !(cell_type == "b" || cell_type == "q"))
        ) {
            //if hit same color or diffrent color but not rook or queen
            console.log("cell_type: " + cell_type);
            console.log("cell_color: " + cell_color);
            console.log("met same color or non b/q");
            break;
        }
    }

    for (let i = 0; i < height - y - 1 && i<width-x-1; i++) {
        let cell_type = nboard[y + i + 1][x + i + 1][0];
        let cell_color = nboard[y + i + 1][x + i + 1][1];
        if (cell_color != color && (cell_type == "b" || cell_type == "q")) {
            //if diffrent color and rook or queen
            console.log("true");
            return true;
        } else if (
            cell_color == color ||
            (cell_color != color &&
                cell_color != "0" &&
                !(cell_type == "b" || cell_type == "q"))
        ) {
            //if hit same color or diffrent color but not rook or queen
            console.log("cell_type: " + cell_type);
            console.log("cell_color: " + cell_color);
            console.log("met same color or non b/q");
            break;
        }
    }
}
function dangerPawnBlack(y, x, color, nboard) {
    if (y < height - 1 && x > 0) {
        let cell_type = nboard[y + 1][x - 1][0];
        let cell_color = nboard[y + 1][x - 1][1];
        if (cell_color == "b" && cell_type == "p") {
            console.log("black pawn in sight left");
            return true;
        }
    }
    if (y < height - 1 && x < width - 1) {
        cell_type = nboard[y + 1][x + 1][0];
        cell_color = nboard[y + 1][x + 1][1];
        if (cell_color == "b" && cell_type == "p") {
            console.log("black pawn in sight right");
            return true;
        }
    }
}
function dangerPawnWhite(y, x, color, nboard) {
    if (y < height-1 && x > 0) {
        let cell_type = nboard[y + 1][x - 1][0];
        let cell_color = nboard[y + 1][x - 1][1];
        if (cell_color == "w" && cell_type == "p") {
            console.log("white pawn in sight left");
            return true;
        }
    }
    if (y < height-1 && x < width - 1) {
        cell_type = nboard[y + 1][x + 1][0];
        cell_color = nboard[y + 1][x + 1][1];
        if (cell_color == "w" && cell_type == "p") {
            console.log("white pawn in sight right");
            return true;
        }
    }
}
function dangerKing() {
    for (let i = 0; i < y && i < x; i++) {
        let cell_type = nboard[y - i - 1][x - i - 1][0];
        let cell_color = nboard[y - i - 1][x - i - 1][1];

        if (cell_color != color && (cell_type == "b" || cell_type == "q")) {
            //if diffrent color and rook or queen
            console.log("true");
            return true;
        } else if (
            cell_color == color ||
            (cell_color != color &&
                cell_color != "0" &&
                !(cell_type == "b" || cell_type == "q"))
        ) {
            //if hit same color or diffrent color but not rook or queen
            console.log("cell_type: " + cell_type);
            console.log("cell_color: " + cell_color);
            console.log("met same color or non b/q");
            break;
        }
    }


    if (y > 0) {
        //top
        //top left
        if (
            x > 0 &&
            (nboard[y - 1][x - 1][0] == "0" || color != nboard[y - 1][x - 1][1]) &&
            !threatened(y - 1, x - 1, color, nboard)
        ) {
            //top left

            table.rows[y - 1].cells[x - 1].classList.add("option");
            legal_moves[y - 1][x - 1] = 1;
        }
        //top stright
        if (
            (nboard[y - 1][x][0] == "0" || color != nboard[y - 1][x][1]) &&
            !threatened(y - 1, x, color, nboard)
        ) {
            table.rows[y - 1].cells[x].classList.add("option");
            legal_moves[y - 1][x] = 1;
        }
        //top right
        if (
            x < width - 1 &&
            (nboard[y - 1][x + 1][0] == "0" || color != nboard[y - 1][x + 1][1]) &&
            !threatened(y - 1, x + 1, color, nboard)
        ) {
            table.rows[y - 1].cells[x + 1].classList.add("option");
            legal_moves[y - 1][x + 1] = 1;
        }
    }
    if (y < height - 1) {
        //bottom
        if (
            x > 0 &&
            (nboard[y + 1][x - 1][0] == "0" || color != nboard[y + 1][x - 1][1]) &&
            !threatened(y + 1, x - 1, color, nboard)
        ) {
            table.rows[y + 1].cells[x - 1].classList.add("option");
            legal_moves[y + 1][x - 1] = 1;
        }
        if (
            (nboard[y + 1][x][0] == "0" || color != nboard[y + 1][x][1]) &&
            !threatened(y + 1, x, color, nboard)
        ) {
            table.rows[y + 1].cells[x].classList.add("option");
            legal_moves[y + 1][x] = 1;
        }
        if (
            x < width - 1 &&
            (nboard[y + 1][x + 1][0] == "0" || color != nboard[y + 1][x + 1][1]) &&
            !threatened(y + 1, x + 1, color, nboard)
        ) {
            table.rows[y + 1].cells[x + 1].classList.add("option");
            legal_moves[y + 1][x + 1] = 1;
        }
    }
    if (
        x > 0 &&
        (nboard[y][x - 1][0] == "0" || color != nboard[y][x - 1][1]) &&
        !threatened(y, x - 1, color, nboard)
    ) {
        //left
        table.rows[y].cells[x - 1].classList.add("option");
        legal_moves[y][x - 1] = 1;
    }
    if (
        x < width - 1 &&
        (nboard[y][x + 1][0] == "0" || color != nboard[y][x + 1][1]) &&
        !threatened(y, x + 1, color, nboard)
    ) {
        //right
        table.rows[y].cells[x + 1].classList.add("option");
        legal_moves[y][x + 1] = 1;
    }
    if (canCastleB[0] && color == "b") {
        //castle black

        //castle left
        if (
            nboard[0][x - 1][0] == "0" &&
            nboard[0][x - 2][0] == "0" &&
            nboard[0][x - 3][0] == "0" &&
            nboard[0][x - 4][0] == "r" &&
            nboard[0][x - 4][1] == "b"
        ) {
            table.rows[y].cells[x - 2].classList.add("option");
            legal_moves[y][x - 2] = 1;
            console.log("legal_moves: " + legal_moves[y][x - 2]);
        }
        //castle right
        if (
            nboard[0][x + 1][0] == "0" &&
            nboard[0][x + 2][0] == "0" &&
            nboard[0][x + 3][0] == "r" &&
            nboard[0][x + 3][1] == "b"
        ) {
            table.rows[y].cells[x + 2].classList.add("option");
            legal_moves[y][x + 2] = 1;
            console.log("legal_moves: " + legal_moves[y][x + 2]);
        }
    }
    if (canCastleW[0] && color == "w") {
        //castle white
        console.log("color: " + color);

        //castle left
        if (
            nboard[y][x - 1][0] == "0" &&
            nboard[y][x - 2][0] == "0" &&
            nboard[y][x - 3][0] == "0" &&
            nboard[y][x - 4][0] == "r" &&
            nboard[y][x - 4][1] == "w"
        ) {
            table.rows[y].cells[x - 2].classList.add("option");
            legal_moves[y][x - 2] = 1;
        }

        //castle right
        if (
            nboard[y][x + 1][0] == "0" &&
            nboard[y][x + 2][0] == "0" &&
            nboard[y][x + 3][0] == "r" &&
            nboard[y][x + 3][1] == "w"
        ) {
            table.rows[y].cells[x + 2].classList.add("option");
            legal_moves[y][x + 2] = 1;
        }
    }


}
function threatened(y, x, color, nboard) {
    let specificColorDanger =
        (color == "w" && dangerPawnBlack(y, x, color, nboard)) ||
        (color == "b" && dangerPawnWhite(y, x, color, nboard));
    return (
        dangerStright(y, x, color, nboard) ||
        dangerDiagonal(y, x, color, nboard) ||
        specificColorDanger
    );
}