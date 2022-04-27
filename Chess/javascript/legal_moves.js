//the functions add the possible move to the list of legal moves- "legal_moves"
//and adds these cells to the "option" class
function rook(y, x, color, nboard) {
    let optionsList=[];
    if (color == "b") {
        if (y == 0 && x == 0) {
            canCastleB[0] = false;
        } else if (y == 0 && x == width - 1) {
            canCastleB[1] = false;
        }
    }
    if (color == "w") {
        if (y == height - 1 && x == 0) {
            canCastleW[0] = false;
        } else if (y == height - 1 && x == width - 1) {
            canCastleW[1] = false;
        }
    }

    for (let i = y - 1; i >= 0; i--) {
        //look up
        if (nboard[i][x][0] == "0") {
            optionsList.push([i,x]);
            table.rows[i].cells[x].classList.add("option");
            legal_moves[i][x] = 1;
        } else {
            if (color != nboard[i][x][1]) {
                optionsList.push([i,x]);
                table.rows[i].cells[x].classList.add("option");
                legal_moves[i][x] = 1;
            }
            break;
        }
    }

    for (let i = y + 1; i < height; i++) {
        //look down
        if (nboard[i][x][0] == "0") {
            optionsList.push([i,x]);
            table.rows[i].cells[x].classList.add("option");
            legal_moves[i][x] = 1;
        } else {
            if (color != nboard[i][x][1]) {
                optionsList.push([i,x]);
                table.rows[i].cells[x].classList.add("option");
                legal_moves[i][x] = 1;
            }
            break;
        }
    }
    for (let i = x - 1; i >= 0; i--) {
        //look left
        if (nboard[y][i][0] == "0") {
            optionsList.push([y,i]);
            table.rows[y].cells[i].classList.add("option");
            legal_moves[y][i] = 1;
        } else {
            if (color != nboard[y][i][1]) {
                optionsList.push([y,i]);
                table.rows[y].cells[i].classList.add("option");
                legal_moves[y][i] = 1;
            }
            break;
        }
        
    }

    for (let i = x + 1; i < width; i++) {
        //look right
        if (nboard[y][i][0] == "0") {
            optionsList.push([y,i]);
            table.rows[y].cells[i].classList.add("option");
            legal_moves[y][i] = 1;
        } else {
            if (color != nboard[y][i][1]) {
                optionsList.push([y,i]);
                table.rows[y].cells[i].classList.add("option");
                legal_moves[y][i] = 1;
            }
            break;
        }
    }
    return optionsList;
}
function bishop(y, x, color, nboard) {
    console.log(x);
    let currentY;
    let currentX;
    for (currentY = y - 1, currentX = x - 1;
        currentY >= 0 && currentX >= 0;
        currentY--, currentX--) {

        if (nboard[currentY][currentX][0] == "0") {
            //up left
            table.rows[currentY].cells[currentX].classList.add("option");
            legal_moves[currentY][currentX] = 1;
        } else {
            if (color != nboard[currentY][currentX][1]) {
                table.rows[currentY].cells[currentX].classList.add("option");
                legal_moves[currentY][currentX] = 1;
            }
            break;
        }
    }
    for (
        currentY = y - 1, currentX = x + 1;
        currentY >= 0 && currentX < width;
        currentY--, currentX++) {
        //up right

        if (nboard[currentY][currentX][0] == "0") {
            table.rows[currentY].cells[currentX].classList.add("option");
            legal_moves[currentY][currentX] = 1;
        } else {
            if (color != nboard[currentY][currentX][1]) {
                table.rows[currentY].cells[currentX].classList.add("option");
                legal_moves[currentY][currentX] = 1;
            }
            break;
        }
    }

    for (currentY = y+1,
        currentX =x-1;
       currentY<height&&
       currentX>=0;
        currentY++,
        currentX--) {
        //down right
        if (nboard[currentY][currentX][0] == "0") {
            table.rows[currentY].cells[currentX].classList.add("option");
            legal_moves[currentY][currentX] = 1;
        } else {
            if (color != nboard[currentY][currentX][1]) {
                table.rows[currentY].cells[currentX].classList.add("option");
                legal_moves[currentY][currentX] = 1;
            }
            break;
        }
    }
    for (currentY = y+1,
        currentX =x+1;
       currentY<height&&
       currentX<width;
        currentY++,
        currentX++) {
        if (nboard[currentY][currentX][0] == "0") {
            table.rows[currentY].cells[currentX].classList.add("option");
            legal_moves[currentY][currentX] = 1;
        } else {
            if (color != nboard[currentY][currentX][1]) {
                table.rows[currentY].cells[currentX].classList.add("option");
                legal_moves[currentY][currentX] = 1;
            }
            break;
        }
    }
}
function queen(y, x, color, nboard) {
    rook(y, x, color, nboard);
    //end of rook
    bishop(y, x, color, nboard);
}

function king(y, x, color, nboard) {
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

        }
    }
    if (canCastleW[0] && color == "w") {
        //castle white


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

function pawnB(y, x, color, nboard) {
    if (y < height && nboard[y + 1][x][0] == "0") {
        table.rows[y + 1].cells[x].classList.add("option");
        legal_moves[y + 1][x] = 1;

        if (movedB[x] == 0 && y == 1 && nboard[y + 2][x][0] == "0") {
            //if i didn't move
            table.rows[y + 2].cells[x].classList.add("option");
            // movedB[x] = 1;
            legal_moves[y + 2][x] = 1;
        }
    }

    if (y < height - 1 && x > 0 && nboard[y + 1][x - 1][1] == "w") {
        table.rows[y + 1].cells[x - 1].classList.add("option");
        legal_moves[y + 1][x - 1] = 1;
    }
    if (y < height - 1 && x < width - 1 && nboard[y + 1][x + 1][1] == "w") {
        table.rows[y + 1].cells[x + 1].classList.add("option");
        legal_moves[y + 1][x + 1] = 1;
    }
}
function pawnW(y, x, color, nboard) {
    if (y > 0 && nboard[y - 1][x][0] == "0") {
        table.rows[y - 1].cells[x].classList.add("option");
        legal_moves[y - 1][x] = 1;
        if (movedW[x] == 0 && y == height - 2 && nboard[y - 2][x][0] == "0") {
            //if i didn't move
            table.rows[y - 2].cells[x].classList.add("option");
            // movedW[x] = 1;
            legal_moves[y - 2][x] = 1;
        }
    }

    if (y > 0 && x > 0 && nboard[y - 1][x - 1][1] == "b") {
        table.rows[y - 1].cells[x - 1].classList.add("option");
        legal_moves[y - 1][x - 1] = 1;
    }
    if (y > 0 && x < width - 1 && nboard[y - 1][x + 1][1] == "b") {
        table.rows[y - 1].cells[x + 1].classList.add("option");
        legal_moves[y - 1][x + 1] = 1;
    }
}

function knight(y, x, color, nboard) {
    if (y > 1) {
        //top
        if (
            x > 0 &&
            (nboard[y - 2][x - 1][0] == "0" || color != nboard[y - 2][x - 1][1])
        ) {
            table.rows[y - 2].cells[x - 1].classList.add("option");
            legal_moves[y - 2][x - 1] = 1;
        }

        if (
            x < width - 1 &&
            (nboard[y - 2][x + 1][0] == "0" || color != nboard[y - 2][x + 1][1])
        ) {
            table.rows[y - 2].cells[x + 1].classList.add("option");
            legal_moves[y - 2][x + 1] = 1;
        }
    }
    if (y < height - 2) {
        //bottom
        if (
            x > 0 &&
            (nboard[y + 2][x - 1][0] == "0" || color != nboard[y + 2][x - 1][1])
        ) {
            table.rows[y + 2].cells[x - 1].classList.add("option");
            legal_moves[y + 2][x - 1] = 1;
        }
        if (
            x < width - 1 &&
            (nboard[y + 2][x + 1][0] == "0" || color != nboard[y + 2][x + 1][1])
        ) {
            table.rows[y + 2].cells[x + 1].classList.add("option");
            legal_moves[y + 2][x + 1] = 1;
        }
    }
    if (x < width - 2) {
        //right
        if (
            y > 0 &&
            (nboard[y - 1][x + 2][0] == "0" || color != nboard[y - 1][x + 2][1])
        ) {
            table.rows[y - 1].cells[x + 2].classList.add("option");
            legal_moves[y - 1][x + 2] = 1;
        }

        if (
            y < height - 1 &&
            (nboard[y + 1][x + 2][0] == "0" || color != nboard[y + 1][x + 2][1])
        ) {
            table.rows[y + 1].cells[x + 2].classList.add("option");
            legal_moves[y + 1][x + 2] = 1;
        }
    }
    if (x > 1) {
        //left
        if (
            y > 0 &&
            (nboard[y - 1][x - 2][0] == "0" || color != nboard[y - 1][x - 2][1])
        ) {
            table.rows[y - 1].cells[x - 2].classList.add("option");
            legal_moves[y - 1][x - 2] = 1;
        }

        if (
            y < height - 1 &&
            (nboard[y + 1][x - 2][0] == "0" || color != nboard[y + 1][x - 2][1])
        ) {
            table.rows[y + 1].cells[x - 2].classList.add("option");
            legal_moves[y + 1][x - 2] = 1;
        }
    }
}
function tankW(y, x, color, nboard) {
    if (y > 0) {
        legal_moves[y - 1][x] = 1; //destroy up
        table.rows[y - 1].cells[x].classList.add("option");
        if (y > 1 && legal_moves[y - 1][x][1] == "w") {

            table.rows[y - 1].cells[x].classList.add("option");
        }
        if (x > 0) {
            //destroy up left
            legal_moves[y - 1][x - 1] = 1;
            table.rows[y - 1].cells[x - 1].classList.add("option");
        }
        if (x < width - 1) {
            //destroy up right
            legal_moves[y - 1][x + 1] = 1;
            table.rows[y - 1].cells[x + 1].classList.add("option");
        }
    }
    //TO DO: tank destroy
    // else {
    //     legal_moves[height - 1][x] = 1; //destroy up
    //     table.rows[height - 1].cells[x].classList.add("option");
    //     if (x == 0) {
    //         //destroy up left
    //         legal_moves[height - 1][width - 1] = 1;
    //         table.rows[height - 1].cells[width - 1].classList.add("option");
    //     }
    //     else {
    //         legal_moves[height - 1][x - 1] = 1;
    //         table.rows[height - 1].cells[x - 1].classList.add("option");
    //     }
    //     if (x == width - 1) {
    //         //destroy up right
    //         legal_moves[height - 1][0] = 1;
    //         table.rows[height - 1].cells[0].classList.add("option");
    //     }
    //     else {
    //         legal_moves[height - 1][x + 1] = 1;
    //         table.rows[height - 1].cells[x + 1].classList.add("option");
    //     }

    // }
}
function tankB(y, x, color, nboard) {
    if (y < height - 1) {
        legal_moves[y + 1][x] = 1; //destroy up
        table.rows[y + 1].cells[x].classList.add("option");
        if (x > 0) {
            //destroy up left
            legal_moves[y + 1][x - 1] = 1;
            table.rows[y + 1].cells[x - 1].classList.add("option");
        }
        if (x < width - 1) {
            //destroy up right
            legal_moves[y + 1][x + 1] = 1;
            table.rows[y + 1].cells[x + 1].classList.add("option");
        }
    }
}
function portal(y, x, color, nboard) {
    console.log("portal");
    //look up
    if (y < height - 1) {
        if (nboard[y + 1][x][0] == "0") {
            legal_moves[y + 1][x] = 1;
            table.rows[y + 1].cells[x].classList.add("option");

        } else {
            if (color != nboard[y + 1][x][1]) {
                legal_moves[y + 1][x] = 1;
                table.rows[y + 1].cells[x].classList.add("option");

            }

        }
    }
    // look down
    if (y > 0) {
        if (nboard[y - 1][x][0] == "0") {
            table.rows[y - 1].cells[x].classList.add("option");
            legal_moves[y - 1][x] = 1;
        } else {
            if (color != nboard[y - 1][x][1]) {
                table.rows[y - 1].cells[x].classList.add("option");
                legal_moves[y - 1][x] = 1;
            }

        }
    }
    //look left
    for (let i = x - 1; true; i--) {
        //look left
        if (i < 0) {
            i = width - 1;
        }
        if (nboard[y][i][0] == "0") {
            table.rows[y].cells[i].classList.add("option");
            legal_moves[y][i] = 1;
        } else {
            if (color != nboard[y][i][1]) {
                table.rows[y].cells[i].classList.add("option");
                legal_moves[y][i] = 1;
            }
            break;
        }

    }

    //look right
    for (let i = x + 1; true; i++) {
        //look right
        if (i > width - 1) {
            i = 0;
        }
        if (nboard[y][i][0] == "0") {
            table.rows[y].cells[i].classList.add("option");
            legal_moves[y][i] = 1;
        } else {
            if (color != nboard[y][i][1]) {
                table.rows[y].cells[i].classList.add("option");
                legal_moves[y][i] = 1;
            }
            break;
        }

    }
}
function beyblade(y, x, color, nboard) {
    if (color == "w") {
        direction = beybladeDirectionW;
        beybladeDirectionW %= 4;
    }
    else if (color == "b") {
        direction = beybladeDirectionB;
        beybladeDirectionB %= 4;
    }
    switch (direction) {
        case (0):
            for (let i = y - 1; i >= 0; i--) {
                //look up
                if (nboard[i][x][0] == "0") {
                    table.rows[i].cells[x].classList.add("option");
                    legal_moves[i][x] = 1;
                } else {
                    if (color != nboard[i][x][1]) {
                        table.rows[i].cells[x].classList.add("option");
                        legal_moves[i][x] = 1;
                    }
                    break;
                }
            }
            break;
        case (1):
            for (let i = x + 1; i < width; i++) {
                //look right
                if (nboard[y][i][0] == "0") {
                    table.rows[y].cells[i].classList.add("option");
                    legal_moves[y][i] = 1;
                } else {
                    if (color != nboard[y][i][1]) {
                        table.rows[y].cells[i].classList.add("option");
                        legal_moves[y][i] = 1;
                    }
                    break;
                }
            }
            break;
        case (2):
            for (let i = y + 1; i < height; i++) {
                //look down
                if (nboard[i][x][0] == "0") {
                    table.rows[i].cells[x].classList.add("option");
                    legal_moves[i][x] = 1;
                } else {
                    if (color != nboard[i][x][1]) {
                        table.rows[i].cells[x].classList.add("option");
                        legal_moves[i][x] = 1;
                    }
                    break;
                }
            }
            break;
        case (3):
            for (let i = x - 1; i >= 0; i--) {
                //look left
                if (nboard[y][i][0] == "0") {
                    table.rows[y].cells[i].classList.add("option");
                    legal_moves[y][i] = 1;
                } else {
                    if (color != nboard[y][i][1]) {
                        table.rows[y].cells[i].classList.add("option");
                        legal_moves[y][i] = 1;
                    }
                    break;
                }
            }
            break;
    }
    if (y > 0) {
        //top
        //top left
        if (
            x > 0 &&
            (nboard[y - 1][x - 1][0] == "0" || color != nboard[y - 1][x - 1][1])) {
            //top left

            table.rows[y - 1].cells[x - 1].classList.add("option");
            legal_moves[y - 1][x - 1] = 1;
        }
        //top stright
        if (
            (nboard[y - 1][x][0] == "0" || color != nboard[y - 1][x][1])) {
            table.rows[y - 1].cells[x].classList.add("option");
            legal_moves[y - 1][x] = 1;
        }
        //top right
        if (
            x < width - 1 &&
            (nboard[y - 1][x + 1][0] == "0" || color != nboard[y - 1][x + 1][1])) {
            table.rows[y - 1].cells[x + 1].classList.add("option");
            legal_moves[y - 1][x + 1] = 1;
        }
    }
    if (y < height - 1) {
        //bottom
        if (
            x > 0 &&
            (nboard[y + 1][x - 1][0] == "0" || color != nboard[y + 1][x - 1][1])
        ) {
            table.rows[y + 1].cells[x - 1].classList.add("option");
            legal_moves[y + 1][x - 1] = 1;
        }
        if (
            (nboard[y + 1][x][0] == "0" || color != nboard[y + 1][x][1])
        ) {
            table.rows[y + 1].cells[x].classList.add("option");
            legal_moves[y + 1][x] = 1;
        }
        if (
            x < width - 1 &&
            (nboard[y + 1][x + 1][0] == "0" || color != nboard[y + 1][x + 1][1])
        ) {
            table.rows[y + 1].cells[x + 1].classList.add("option");
            legal_moves[y + 1][x + 1] = 1;
        }
    }
    if (
        x > 0 &&
        (nboard[y][x - 1][0] == "0" || color != nboard[y][x - 1][1])
    ) {
        //left
        table.rows[y].cells[x - 1].classList.add("option");
        legal_moves[y][x - 1] = 1;
    }
    if (
        x < width - 1 &&
        (nboard[y][x + 1][0] == "0" || color != nboard[y][x + 1][1])
    ) {
        //right
        table.rows[y].cells[x + 1].classList.add("option");
        legal_moves[y][x + 1] = 1;
    }
}




