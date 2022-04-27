function dangerStright(y, x, color, nboard) {

  for (let i = y - 1; i >= 0; i--) {
    let cell_type = nboard[i][x][0];
    let cell_color = nboard[i][x][1];

    //look up
    if (cell_color != color && (cell_type == "r" || cell_type == "q")) {
      //if diffrent color and rook or queen
     
      return true;
    } else if (
      cell_color == color ||
      (cell_color != color &&
        cell_color != "0" &&
        !(cell_type == "r" || cell_type == "q"))
    ) {
      //if hit same color or diffrent color but not rook or queen

      break;
    }
  }

  for (let i = y + 1; i < height; i++) {
    let cell_type = nboard[i][x][0];
    let cell_color = nboard[i][x][1];
    //look down
    if (cell_color != color && (cell_type == "r" || cell_type == "q")) {
      //if diffrent color and rook or queen

      return true;
    } else if (
      cell_color == color ||
      (cell_color != color &&
        cell_color != "0" &&
        !(cell_type == "r" || cell_type == "q"))
    ) {
      //if hit same color or diffrent color but not rook or queen
      break;
    }
  }

  for (let i = x - 1; i >= 0; i--) {
    //look left
    let cell_type = nboard[y][i][0];

    let cell_color = nboard[y][i][1];
    if (cell_color != color && (cell_type == "r" || cell_type == "q")) {
      //if diffrent color and rook or queen

      return true;
    } else if (
      cell_color == color ||
      (cell_color != color &&
        cell_color != "0" &&
        !(cell_type == "r" || cell_type == "q"))
    ) {
      //if hit same color or diffrent color but not rook or queen

      break;
    }
  }
  for (let i = x + 1; i < width; i++) {
    let cell_type = nboard[y][i][0];
    let cell_color = nboard[y][i][1];
    //look right
    if (cell_color != color && (cell_type == "r" || cell_type == "q")) {
      //if diffrent color and rook or queen

      return true;
    } else if (
      cell_color == color ||
      (cell_color != color &&
        cell_color != "0" &&
        !(cell_type == "r" || cell_type == "q"))
    ) {
      //if hit same color or diffrent color but not rook or queen

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

      return true;
    } else if (
      cell_color == color ||
      (cell_color != color &&
        cell_color != "0" &&
        !(cell_type == "b" || cell_type == "q"))
    ) {
      //if hit same color or diffrent color but not rook or queen

      break;
    }
  }
  for (let i = 0; i < y && i < width - x - 1; i++) {
    let cell_type = nboard[y - i - 1][x + i + 1][0];
    let cell_color = nboard[y - i - 1][x + i + 1][1];
    //up right

    if (cell_color != color && (cell_type == "b" || cell_type == "q")) {
      //if diffrent color and rook or queen

      return true;
    } else if (
      cell_color == color ||
      (cell_color != color &&
        cell_color != "0" &&
        !(cell_type == "b" || cell_type == "q"))
    ) {
      //if hit same color or diffrent color but not rook or queen

      break;
    }
  }

  for (let i = 0; i < height - y - 1 && i < x; i++) {
    let cell_type = nboard[y + i + 1][x - i - 1][0];
    let cell_color = nboard[y + i + 1][x - i - 1][1];
    //down right

    if (cell_color != color && (cell_type == "b" || cell_type == "q")) {
      //if diffrent color and rook or queen

      return true;
    } else if (
      cell_color == color ||
      (cell_color != color &&
        cell_color != "0" &&
        !(cell_type == "b" || cell_type == "q"))
    ) {
      //if hit same color or diffrent color but not rook or queen

      break;
    }
  }

  for (let i = 0; i < height - y - 1 && i < width - x - 1; i++) {
    let cell_type = nboard[y + i + 1][x + i + 1][0];
    let cell_color = nboard[y + i + 1][x + i + 1][1];
    if (cell_color != color && (cell_type == "b" || cell_type == "q")) {
      //if diffrent color and rook or queen

      return true;
    } else if (
      cell_color == color ||
      (cell_color != color &&
        cell_color != "0" &&
        !(cell_type == "b" || cell_type == "q"))
    ) {
      //if hit same color or diffrent color but not rook or queen

      break;
    }
  }
}
function dangerPawnBlack(y, x, color, nboard) {
  if (y >0 && x > 0) {
    let cell_type = nboard[y -1][x - 1][0];
    let cell_color = nboard[y - 1][x - 1][1];
    if (cell_color == "b" && cell_type == "p") {

      return true;
    }
  }
  if (y >0 && x < width - 1) {
    cell_type = nboard[y - 1][x + 1][0];
    cell_color = nboard[y - 1][x + 1][1];
    if (cell_color == "b" && cell_type == "p") {
      return true;
    }
  }
  return false;
}
function dangerPawnWhite(y, x, color, nboard) {
  if (y < height - 1 && x > 0) {
    let cell_type = nboard[y + 1][x - 1][0];
    let cell_color = nboard[y + 1][x - 1][1];
    if (cell_color == "w" && cell_type == "p") {

      return true;
    }
  }
  if (y < height - 1 && x < width - 1) {
    cell_type = nboard[y + 1][x + 1][0];
    cell_color = nboard[y + 1][x + 1][1];
    if (cell_color == "w" && cell_type == "p") {

      return true;
    }
  }
}
function dangerKnight(y, x, color, nboard){
    if (y > 1) {
        //top
        if (
            x > 0 &&
            (nboard[y - 2][x - 1][0] == "k" || color != nboard[y - 2][x - 1][1])
        ) {
            //.rows[y - 2].cells[x - 1].classList.add("option");
            //_moves[y - 2][x - 1] = 1;
        }

        if (
            x < width - 1 &&
            (nboard[y - 2][x + 1][0] == "0" || color != nboard[y - 2][x + 1][1])
        ) {
            //.rows[y - 2].cells[x + 1].classList.add("option");
            //_moves[y - 2][x + 1] = 1;
        }
    }
    if (y < height - 2) {
        //bottom
        if (
            x > 0 &&
            (nboard[y + 2][x - 1][0] == "0" || color != nboard[y + 2][x - 1][1])
        ) {
            //.rows[y + 2].cells[x - 1].classList.add("option");
            //_moves[y + 2][x - 1] = 1;
        }
        if (
            x < width - 1 &&
            (nboard[y + 2][x + 1][0] == "0" || color != nboard[y + 2][x + 1][1])
        ) {
            //.rows[y + 2].cells[x + 1].classList.add("option");
            //_moves[y + 2][x + 1] = 1;
        }
    }
    if (x < width - 2) {
        //right
        if (
            y > 0 &&
            (nboard[y - 1][x + 2][0] == "0" || color != nboard[y - 1][x + 2][1])
        ) {
            //.rows[y - 1].cells[x + 2].classList.add("option");
            //_moves[y - 1][x + 2] = 1;
        }

        if (
            y < height - 1 &&
            (nboard[y + 1][x + 2][0] == "0" || color != nboard[y + 1][x + 2][1])
        ) {
            //.rows[y + 1].cells[x + 2].classList.add("option");
            //_moves[y + 1][x + 2] = 1;
        }
    }
    if (x > 1) {
        //left
        if (
            y > 0 &&
            (nboard[y - 1][x - 2][0] == "0" || color != nboard[y - 1][x - 2][1])
        ) {
            //.rows[y - 1].cells[x - 2].classList.add("option");
            //_moves[y - 1][x - 2] = 1;
        }

        if (
            y < height - 1 &&
            (nboard[y + 1][x - 2][0] == "0" || color != nboard[y + 1][x - 2][1])
        ) {
            //.rows[y + 1].cells[x - 2].classList.add("option");
            //_moves[y + 1][x - 2] = 1;
        }
    }
}
function dangerKing(y, x, color, nboard) {
  if (y > 0) {
    //top up
    if (nboard[y - 1][x][0] == "k" && nboard[y-1][x][1] !=color) {
      return true;
    }
    if (x > 0) {
      //top left
      if (nboard[y - 1][x - 1][0] == "k" && nboard[y-1][x-1][1] !=color) {
        return true;
      }

      if (x < width - 1) {
        //top right
        if (nboard[y - 1][x + 1][0] == "k" && nboard[y-1][x+1][1] !=color) {
          return true;
        }
      }
    }
  }
  if (y < height - 1) {
    //bottom down
    if (nboard[y + 1][x][0] == "k" && nboard[y+1][x][1] !=color) {
      return true;
    }
    if (x > 0) {
      //top left
      if (nboard[y + 1][x - 1][0] == "k" && nboard[y+1][x-1][1] !=color) {
        return true;
      }

      if (x < width - 1) {
        //top right
        if (nboard[y + 1][x + 1][0] == "k" && nboard[y+1][x+1][1] !=color) {
          return true;
        }
      }
    }
  }
  if (x > 0) {
    if (nboard[y][x - 1][0] == "k" && nboard[y][x-1][1] !=color) {
      return true;
    }
  }
  if (x < width - 1) {
    if (nboard[y][x + 1][0] == "k" && nboard[y][x+1][1] !=color) {
      return true;
    }
  }
  return false;
}
function threatened(y, x, color, nboard) {
    console.log("color: " + color);
    console.log("white danger "+dangerPawnBlack(y, x, color, nboard));
  let specificColorDanger =
    (color == "w" && dangerPawnBlack(y, x, color, nboard)) ||
    (color == "b" && dangerPawnWhite(y, x, color, nboard));

  return (
    dangerStright(y, x, color, nboard) ||
    dangerDiagonal(y, x, color, nboard) ||
    specificColorDanger||
    dangerKing(y, x, color, nboard)||
    dangerKnight(y, x, color, nboard)
  );
}
