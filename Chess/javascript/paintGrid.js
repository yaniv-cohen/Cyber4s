

function dataBoardCreation() {
    nboard = [
        [["r", "b"], ["n", "b"], ["b", "b"], ["q", "b"], ["k", "b"], ["b", "b"], ["n", "b"], ["r", "b"],],
        [["p", "b"], ["p", "b"], ["p", "b"], ["p", "b"], ["p", "b"], ["p", "b"], ["p", "b"], ["p", "b"],],
        [["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"],],
        [["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"],],
        [["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"],],
        [["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"],],
        [["p", "w"], ["p", "w"], ["p", "w"], ["p", "w"], ["p", "w"], ["p", "w"], ["p", "w"], ["p", "w"],],
        [["r", "w"], ["n", "w"], ["b", "w"], ["q", "w"], ["k", "w"], ["b", "w"], ["n", "w"], ["r", "w"],],
    ];
    let previous_Board = [];
    //make a shallow-copy of the board and call it previousBoard
    for (var row = 0; row < nboard.length; row++) {
        previous_Board[row] = [];
        for (var col = 0; col < nboard[row].length; col++) {
            previous_Board[row][col] = nboard[col][col].slice();

        }
    }
    // previous_board = [
    //     [["r", "b"], ["n", "b"], ["b", "b"], ["q", "b"], ["k", "b"], ["b", "b"], ["n", "b"], ["r", "b"],],
    //     [["p", "b"], ["p", "b"], ["p", "b"], ["p", "b"], ["p", "b"], ["p", "b"], ["p", "b"], ["p", "b"],],
    //     [["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"],],
    //     [["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"],],
    //     [["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"],],
    //     [["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"],],
    //     [["p", "w"], ["p", "w"], ["p", "w"], ["p", "w"], ["p", "w"], ["p", "w"], ["p", "w"], ["p", "w"],],
    //     [["r", "w"], ["n", "w"], ["b", "w"], ["q", "w"], ["k", "w"], ["b", "w"], ["n", "w"], ["r", "w"],],
    // ]; //should use =nboard, but don't know if it is a pointer or not and haveno time.
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
}

function paintGrid(tank, portal, beyblade) {
    dataBoardCreation();
    table.innerHTML = '';
    console.log("tank " + tank);
    if (tank) {
        nboard[1][2][0] = "t";
        nboard[1][5][0] = "t";
        nboard[6][2][0] = "t";
        nboard[6][5][0] = "t";
    }
    console.log("portal " + portal);
    if (portal) {
        nboard[5][1][0] = "pr";
        nboard[5][1][1] = "w";
        nboard[2][6][0] = "pr";
        nboard[2][6][1] = "b";

    }
    console.log("portal " + beyblade);
    if (beyblade) {
        nboard[2][1][0] = "by";
        nboard[2][1][1] = "b";
        nboard[5][6][0] = "by";
        nboard[5][6][1] = "w";
    }
    let previous_Board = [];
    //make a shallow-copy of the board and call it previousBoard
    for (var row = 0; row < nboard.length; row++) {
        previous_Board[row] = [];
        for (var col = 0; col < nboard[row].length; col++) {
            previous_Board[row][col] = nboard[col][col].slice();

        }
    }
    for (let row = 0; row < height; row++) {//paint the grid
        const rowElement = table.insertRow();
        for (let col = 0; col < width; col++) {
            const cell = rowElement.insertCell();

            //classes gives cell color and image of unit
            let classes = "";
            if ((row + col) % 2 == 0) {
                cell.className = 'cellW';
                classes += "cellW"//redundant
            }
            else {
                cell.className = 'cellB';
                classes += "cellB"//redundant
            }
            cell.type = nboard[row][col][0];
            cell.color = nboard[row][col][1];
            cell.className = (classes);

            classes = get_class(cell.type, cell.color);
            if (cell.type == "by" &&cell.color==BLACK) {
                let transform = 90 * beybladeDirectionB;
                cell.style.transform = "rotate(" + transform +"deg)";
            }
            if (classes.length > 0) {
                cell.classList.add(classes);
            }
            cell.addEventListener('click', () => {
                boardClick(row, col, cell.type);
            })
        }

    }
}
