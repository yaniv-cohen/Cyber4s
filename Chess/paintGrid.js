paintGrid();

function dataBoardCreation(){
    nboard= [
        [["r", "b"], ["n", "b"], ["b", "b"], ["q", "b"], ["k", "b"], ["b", "b"], ["n", "b"], ["r", "b"],],
        [["p", "b"], ["p", "b"], ["t", "b"], ["p", "b"], ["p", "b"], ["t", "b"], ["p", "b"], ["p", "b"],],
        [["0", "0"], ["by", "b"], ["p", "b"], ["0", "0"], ["0", "0"], ["p", "b"], ["pr", "b"], ["0", "0"],],
        [["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"],],
        [["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"],],
        [["0", "0"], ["pr", "w"], ["p", "w"], ["0", "0"], ["0", "0"], ["p", "w"], ["0", "0"], ["0", "0"],],
        [["p", "w"], ["p", "w"], ["t", "w"], ["p", "w"], ["p", "w"], ["t", "w"], ["p", "w"], ["p", "w"],],
        [["r", "w"], ["n", "w"], ["b", "w"], ["q", "w"], ["k", "w"], ["b", "w"], ["n", "w"], ["r", "w"],],
    ];
    previous_board=[
        [["r", "b"], ["n", "b"], ["b", "b"], ["q", "b"], ["k", "b"], ["b", "b"], ["n", "b"], ["r", "b"],],
        [["p", "b"], ["p", "b"], ["t", "b"], ["p", "b"], ["p", "b"], ["t", "b"], ["p", "b"], ["p", "b"],],
        [["0", "0"], ["0", "0"], ["p", "b"], ["0", "0"], ["0", "0"], ["p", "b"], ["pr", "b"], ["0", "0"],],
        [["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"],],
        [["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"],],
        [["0", "0"], ["pr", "w"], ["p", "w"], ["0", "0"], ["0", "0"], ["p", "w"], ["by", "w"], ["0", "0"],],
        [["p", "w"], ["p", "w"], ["t", "w"], ["p", "w"], ["p", "w"], ["t", "w"], ["p", "w"], ["p", "w"],],
        [["r", "w"], ["n", "w"], ["b", "w"], ["q", "w"], ["k", "w"], ["b", "w"], ["n", "w"], ["r", "w"],],
    ]; //should use =nboard, but don't know if it is a pointer or not and haveno time.
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

function paintGrid() {
    dataBoardCreation();
    for (let i = 0; i < height; i++) {//paint the grid
        const row = table.insertRow();
        for (let k = 0; k < width; k++) {
            const cell = row.insertCell();
            let classes = "";
            if (i % 2 == k % 2) {
                cell.className = 'cellW';
                classes += "cellW"//redundant
            }
            else {
                cell.className = 'cellB';
                classes += "cellB"//redundant
            }
            cell.type = nboard[i][k][0];
            cell.color = nboard[i][k][1];
            cell.className = (classes);
            classes = get_class(cell.type, cell.color);
            
            if (classes.length > 0) {
                cell.classList.add(classes);
            }
            cell.addEventListener('click', () => {
                
                boardClick(i, k, cell.type);
            })
        }
        
    }

    // function updateGrid() {
    //     let board = document.getElementById('board');
    //     for (let i = 0; i < height; i++) {//paint the grid
    //         for (let k = 0; k < width; k++) {
    //             let cell = board.rows[i].cells[k];
    //             cell.classList.add('rookB');
    //             cell.i = i;
    //             cell.k = k;
    //             cell.type = board[i][k * 2];

    //             cell.addEventListener('click', () => {
    //                 showOptions(i, k);
    //             })
    //         }
    //     }

    // }
}
