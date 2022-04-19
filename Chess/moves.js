
function rook(y, x, color, nboard) {
    // console.log('rook');

    for (let i = y - 1; i >= 0; i--) { //look up
        if (nboard[i][x][0] == "0") {
            table.rows[i].cells[x].classList.add('option');
            legal_moves[i][x] = 1;

        }

        else {

            if (color != nboard[i][x][1]) {
                table.rows[i].cells[x].classList.add('option');
                legal_moves[i][x] = 1;
            }
            break;
        }
    }

    for (let i = y + 1; i < height; i++) { //look down
        if (nboard[i][x][0] == "0") {
            table.rows[i].cells[x].classList.add('option');
            legal_moves[i][x] = 1;

        }
        else {
            if (color != nboard[i][x][1]) {
                table.rows[i].cells[x].classList.add('option');
                legal_moves[i][x] = 1;
            }
            break;
        }
    }
    for (let i = x - 1; i >= 0; i--) { //look left
        if (nboard[y][i][0] == "0") {
            table.rows[y].cells[i].classList.add('option');
            legal_moves[y][i] = 1;

        }
        else {

            if (color != nboard[y][i][1]) {
                table.rows[y].cells[i].classList.add('option');
                legal_moves[y][i] = 1;
            }
            break;
        }
    }

    for (let i = x + 1; i < width; i++) { //look right
        if (nboard[y][i][0] == "0") {
            table.rows[y].cells[i].classList.add('option');
            legal_moves[y][i] = 1;
        }
        else {

            if (color != nboard[y][i][1]) {
                table.rows[y].cells[i].classList.add('option');
                legal_moves[y][i] = 1;
            }
            break;
        }
    }

}
function bishop(y, x, color, nboard) {
    
    for (let i = 0; i < y && i < x; i++) {
        if (nboard[y - i - 1][x - i - 1][0] == "0") {//up left
            table.rows[y - i - 1].cells[x - i - 1].classList.add('option');
            legal_moves[y - i - 1][x - i - 1] = 1;
        }

        else {
            if (color != nboard[y - i - 1][(x - i - 1)][1]) {
                table.rows[y - i - 1].cells[x - i - 1].classList.add('option');
                legal_moves[y - i - 1][x - i - 1] = 1;
            }
            break;
        }

    }
    for (let i = 0; i < y && i < width - x - 1; i++) { //up right

        if (nboard[y - i - 1][x + i + 1][0] == "0") {
            table.rows[y - i - 1].cells[x + i + 1].classList.add('option');
            legal_moves[y - i - 1][x + i + 1] = 1;
        }

        else {
 
            if (color != nboard[y - i - 1][(x + i + 1)][1]) {
                table.rows[y - i - 1].cells[x + i + 1].classList.add('option');
                legal_moves[y - i - 1][x + i + 1] = 1;
            }
            break;
        }
    }

    

    for (let i = 0; i < height - y - 1 && i < width - x - 1; i++) {//down right
        if (nboard[y + i + 1][x + i + 1][0] == "0") {
            table.rows[y + i + 1].cells[x + i + 1].classList.add('option');
            legal_moves[y + i + 1][x + i + 1] = 1;
        }

        else {

            if (color != nboard[y + i + 1][(x + i + 1)][1]) {
                table.rows[y + i + 1].cells[x + i + 1].classList.add('option');
                legal_moves[y + i + 1][x + i + 1] = 1;
            }
            break;
        }
    }
    for (let i = 0; i < height - y - 1 && i < x; i++) {
        if (nboard[y + i + 1][x - i - 1][0] == "0") {
            table.rows[y + i + 1].cells[x - i - 1].classList.add('option');
            legal_moves[y + i + 1][x - i - 1] = 1;
        }

        else {

            if (color != nboard[y + i + 1][(x - i - 1)][1]) {
                table.rows[y + i + 1].cells[x - i - 1].classList.add('option');
                legal_moves[y + i + 1][x - i - 1] = 1;
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
    if (y > 0) {//top
        if (x > 0 && (nboard[y - 1][x - 1][0] == "0" || color != nboard[y - 1][x - 1][1])) {//top left
            table.rows[y - 1].cells[x - 1].classList.add('option');
            legal_moves[y - 1][x - 1] = 1;
        }

        if (nboard[y - 1][x][0] == "0" || color != nboard[y - 1][(x)][1]) {
            table.rows[y - 1].cells[x].classList.add('option');
            legal_moves[y - 1][x] = 1;
        }
        if (x < width - 1 && (nboard[y - 1][(x + 1)][0] == "0" || color != nboard[y - 1][x + 1][1])) {
            table.rows[y - 1].cells[x + 1].classList.add('option');
            legal_moves[y - 1][x + 1] = 1;
        }
    }
    if (y < height - 1) //bottom
    {
        if (x > 0 && (nboard[y + 1][(x - 1)][0] == "0" || color != nboard[y + 1][x - 1][1])) {
            table.rows[y + 1].cells[x - 1].classList.add('option');
            legal_moves[y + 1][x - 1] = 1;
        }
        if (nboard[y + 1][(x)][0] == "0" || color != nboard[y + 1][(x)][1]) {
            table.rows[y + 1].cells[x].classList.add('option');
            legal_moves[y + 1][x] = 1;
        }
        if (x < width - 1 && (nboard[y + 1][x + 1][0] == "0" || color != nboard[y + 1][x + 1][1])) {
            table.rows[y + 1].cells[x + 1].classList.add('option');
            legal_moves[y + 1][x + 1] = 1;
        }
    }
    if (x > 0 && (nboard[y][(x - 1)][0] == "0" || color != nboard[y][(x - 1)][1]))//left
    {

        table.rows[y].cells[x - 1].classList.add('option');
        legal_moves[y][x - 1] = 1;
    }
    if (x < width - 1 && (nboard[y][(x + 1)][0] == "0" || color != nboard[y][(x + 1)][1]))//right
    {

        table.rows[y].cells[x + 1].classList.add('option');
        legal_moves[y][x + 1] = 1;
    }
}
function pawnB(y, x, color, nboard) {

    if (y < height && (nboard[y + 1][x][0] == "0")) {
        table.rows[y + 1].cells[x].classList.add('option');
        legal_moves[y + 1][x] = 1;

        if ((movedB[x] == 0 && y == 1) && (nboard[y + 2][x][0] == "0"))//if i didn't move
        {
            table.rows[y + 2].cells[x].classList.add('option');
            // movedB[x] = 1;
            legal_moves[+2][x] = 1;
        }
    }

    if (y < height - 1 && x > 0 && nboard[y + 1][(x - 1)][1] == "w") {
        table.rows[y + 1].cells[x - 1].classList.add('option');
        legal_moves[y + 1][x - 1] = 1;
    }
    if (y < height - 1 && x < width - 1 && nboard[y + 1][(x + 1)][1] == "w") {
        table.rows[y + 1].cells[x + 1].classList.add('option');
        legal_moves[y + 1][x + 1] = 1;
    }

}
function pawnW(y, x, color, nboard) {

    if (y > 0 && (nboard[y - 1][x][0] == "0")) {
        table.rows[y - 1].cells[x].classList.add('option');
        legal_moves[y - 1][x] = 1;
        if ((movedW[x] == 0 && y == height - 2) && (nboard[y - 2][x][0] == "0"))//if i didn't move
        {
            table.rows[y - 2].cells[x].classList.add('option');
            // movedW[x] = 1;
            legal_moves[y - 2][x] = 1;
        }
    }
    
    if (y > 0 && x > 0 && nboard[y - 1][(x - 1)][1] == "b") {
        table.rows[y - 1].cells[x - 1].classList.add('option');
        legal_moves[y - 1][x - 1] = 1;
    }
    if (y > 0 && x < width - 1 && nboard[y - 1][(x + 1)][1] == "b") {
        table.rows[y - 1].cells[x + 1].classList.add('option');
        legal_moves[y - 1][x + 1] = 1;
    }

}
function knight(y, x, color, nboard) {
    
    if (y > 1) {//top
        if (x > 0 && (nboard[y - 2][x - 1][0] == "0" || color != nboard[y - 2][(x - 1)][1])) {
            table.rows[y - 2].cells[x - 1].classList.add('option');
            legal_moves[y - 2][x - 1] = 1;
        }
        
        if (x < width - 1 && (nboard[y - 2][(x + 1)][0] == "0" || color != nboard[y - 2][x + 1][1])) {
            table.rows[y - 2].cells[x + 1].classList.add('option');
            legal_moves[y - 2][x + 1] = 1;
        }
        
    }
    if (y < height - 2) {//bottom
        if (x > 0 && (nboard[y + 2][(x - 1)][0] == "0" || color != nboard[y + 2][x - 1][1])) {
            table.rows[y + 2].cells[x - 1].classList.add('option');
            legal_moves[y +2][x - 1] = 1;
        }
        if (x < width - 1 && (nboard[y + 2][(x + 1)][0] == "0" || color != nboard[y + 2][x + 1][1])) {
            table.rows[y + 2].cells[x + 1].classList.add('option');
            legal_moves[y +2][x + 1] = 1;
        }
       
    }
    if (x < width - 2) { //right
        if (y > 0 && (nboard[y - 1][(x + 2)][0] == "0" || color != nboard[y - 1][x + 2][1])) {
            table.rows[y - 1].cells[x + 2].classList.add('option');
            legal_moves[y -1][x + 2] = 1;
        }

        if (y < height - 1 && (nboard[y + 1][(x + 2)][0] == "0" || color != nboard[y + 1][x + 2][1])) {
            table.rows[y + 1].cells[x + 2].classList.add('option');
            legal_moves[y +1][x + 2] = 1;
        }

    }
    if (x >1) { //left
        if (y > 0 && (nboard[y - 1][(x - 2)][0] == "0" || color != nboard[y - 1][x - 2][1])) {
            table.rows[y - 1].cells[x - 2].classList.add('option');
            legal_moves[y -1][x - 2] = 1;
        }

        if (y < height - 1 && (nboard[y + 1][(x - 2)][0] == "0" || color != nboard[y + 1][x - 2][1])) {
            table.rows[y + 1].cells[x - 2].classList.add('option');
            legal_moves[y +1][x - 2] = 1;
        }
        
    }

}