paintGrid();


function paintGrid() {
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
                
                showOptions(i, k, cell.type);
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