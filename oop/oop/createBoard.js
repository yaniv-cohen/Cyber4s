function createChessBoard(boardData) {
    table = document.getElementById(CHESS_BOARD_ID);
    if (table !== null) {
      table.remove();
    }
  
    // Create empty chess board HTML:
    table = document.createElement('table');
    table.id = CHESS_BOARD_ID;
    document.body.appendChild(table);
    for (let row = 0; row < BOARD_SIZE; row++) {
      const rowElement = table.insertRow();
      for (let col = 0; col < BOARD_SIZE; col++) {
        const cell = rowElement.insertCell();
        if ((row + col) % 2 === 0) {
          cell.className = 'light-cell';
        } else {
          cell.className = 'dark-cell';
        }
        cell.addEventListener('click', (event) => onCellClick(event, row, col));
      }
    }
  
    // Add pieces images to board
    for (let piece of boardData.pieces) {
      const cell = table.rows[piece.row].cells[piece.col];
      // console.log("piece.player, piece.type: " + piece.player+ piece.type);
      addImage(cell, piece.player, piece.type,piece.row,piece.col);  
    }
  }