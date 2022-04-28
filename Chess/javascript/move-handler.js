//called when i click on one of my units
function moveHandler(y, x) {

  let previousBoard = [];
  //make a shallow-copy of the board and call it previousBoard
  for (var row = 0; row < nboard.length; row++) {
    previousBoard[row] = [];
    for (var col = 0; col < nboard[row].length; col++) {
      previousBoard[row][col] = nboard[col][col].slice();

    }
  }
  if (previous_type ===PAWN && handlePawnSpecialMoves(y, x, previous_color)) {
    //did this pawn move?
    previous_type = QUEEN;
  } else if (previous_type == KING) {
    //if i moved a king
    handleKingSpecialMoves(y, x, nboard, previous_type, previous_color);
  } else if (previous_type == "by") {
    //if i moved a beyblade
    if (previous_color == WHITE) {
      beybladeDirectionW++;
      if (beybladeDirectionW <0 ) {
        beybladeDirectionW = 3;
      }
      let transform = 90 * beybladeDirectionW;
      table.rows[y].cells[x].style.transform = "rotate("+transform+"deg)";
    } else if (previous_color == BLACK) {
      beybladeDirectionB--;
      if (beybladeDirectionB > 3) {
        beybladeDirectionB = 0;
      }
      let transform = 90 * beybladeDirectionB;
      table.rows[y].cells[x].style.transform = "rotate("+transform+"deg)";
    }
  }

  moveActivePiece(y, x, previous_type, previous_color);
}
function handlePawnSpecialMoves(y, x, previous_color) {
  console.log("previous_color is " + previous_color + y);
  if (previous_color == WHITE && y == 0) {
    return ("q");

  } else if (previous_color == BLACK && y == height - 1) {
    return ('q');
  }
  else if (y == 1 || y == height - 1) {
    //did this pawn move?
    if (previous_color == WHITE) {
      movedW[x] = 1;
    } else if (previous_color == BLACK) {
      movedB[x] = 1;
    }
  }
}
function handleKingSpecialMoves(y, x, nboard, previous_type, previous_color) {
  if (previous_color == BLACK) {
    //castle black
    if (x == 2) {
      nboard[0][x + 1][0] = "r";
      nboard[0][x + 1][1] = BLACK;
      table.rows[y].cells[x + 1].classList.add("rookB");
      nboard[0][0][0] = "0";
      nboard[0][0][1] = "0";
      table.rows[0].cells[0].classList.remove("rookB");
    } else if (x == width + 2) {
      nboard[0][x - 1][0] = "r";
      nboard[0][x - 1][1] = BLACK;
      table.rows[y].cells[x - 1].classList.add("rookB");
      nboard[0][width - 1][0] = "0";
      nboard[0][width - 1][1] = "0";
      table.rows[0].cells[width - 1].classList.remove("rookB");
    }
    canCastleB[0] = false;
    canCastleB[1] = false;
  } else if (previous_color == WHITE) {
    //castle black
    if (x == last_selection[1] - 2) {
      nboard[y][x + 1][0] = "r";
      nboard[y][x + 1][1] = WHITE;
      table.rows[y].cells[x + 1].classList.add("rookW");
      nboard[y][0][0] = "0";
      nboard[y][0][1] = "0";
      table.rows[y].cells[0].classList.remove("rookW");
    } else if (x == last_selection[1] + 2) {
      nboard[y][x - 1][0] = "r";
      nboard[y][x - 1][1] = WHITE;
      table.rows[y].cells[x - 1].classList.add("rookW");
      nboard[y][width - 1][0] = "0";
      nboard[y][width - 1][1] = "0";
      table.rows[y].cells[width - 1].classList.remove("rookW");
    }
    canCastleW[0] = false;
    canCastleW[1] = false;
  }
}

function moveActivePiece(y, x, previous_type, previous_color) {
  nboard[y][x][0] = previous_type; //copy the old unit array to the new location
  nboard[y][x][1] = previous_color;
  nboard[last_selection[0]][last_selection[1]] = ["0", "0"]; //empty the last unit array
  let newClassList = "";
  if ((x + y) % 2 == 0) {
    newClassList = "cellW ";
  } else {
    newClassList = "cellB ";
  }
  newClassList += get_class(previous_type, previous_color);
  table.rows[y].cells[x].className = "";
  table.rows[y].cells[x].className = newClassList;
  resetCellClass(last_selection[0], last_selection[1], table);
}