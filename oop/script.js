const BOARD_SIZE = 8;
const WHITE_PLAYER = 'white';
const BLACK_PLAYER = 'black';

const PAWN = 'pawn';
const ROOK = 'rook';
const KNIGHT = 'knight';
const BISHOP = 'bishop';
const KING = 'king';
const QUEEN = 'queen';

const CHESS_BOARD_ID = 'chess-board';

let boardData;
let table;
let selectedPiece;

class BoardData {
  constructor(pieces) {
    this.pieces = pieces;
    this.currentPlayer = WHITE_PLAYER;
    this.safeCellsWhite = [
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1]
    ];
    this.whiteCheck = false;
    this.safeCellsBlack = [
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1]
    ];
    this.blackCheck = false;
  }

  // Returns piece in row, col, or undefined if not exists.
  getPiece(row, col) {
    for (const piece of this.pieces) {
      if (piece.row === row && piece.col === col) {
        return piece;
      }
    }
  }

  isEmpty(row, col) {
    return this.getPiece(row, col) === undefined;
  }

  isPlayer(row, col, player) {
    const piece = this.getPiece(row, col);
    return piece !== undefined && piece.player === player;
  }

  removePiece(row, col) {
    for (let i = 0; i < this.pieces.length; i++) {
      const piece = this.pieces[i];
      if (piece.row === row && piece.col === col) {
        // Remove piece at index i
        this.pieces.splice(i, 1);
      }
    }
  }
  changePlayer() {
    if (this.currentPlayer == WHITE_PLAYER) {
      this.currentPlayer = BLACK_PLAYER;
    }
    else {
      this.currentPlayer = WHITE_PLAYER;
    }

  }

  mapSafe() {
    //map all safe spots for current player's king
    this.safeCellsWhite = [
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1]
    ];
    this.safeCellsBlack = [
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1]
    ];
    if (boardData.currentPlayer == WHITE_PLAYER) {
      for (let enemy of boardData.pieces) {
        if (enemy.player == BLACK_PLAYER) {
          let arr = enemy.getPossibleEat(boardData);
          for (let i = 0; i < arr.length; i++) {
            boardData.safeCellsWhite[arr[i][0]][arr[i][1]] = 0;
          }
        }
      }
      for (let i = 0; i < 8; i++) {
        console.log("boardData.safeCellsWhite: " + i + " " + boardData.safeCellsWhite[i]);
      }
    }
    else if (boardData.currentPlayer == BLACK_PLAYER) {
      for (let enemy of boardData.pieces) {
        if (enemy.player == WHITE_PLAYER) {
          let arr = enemy.getPossibleEat(boardData);
          for (let i = 0; i < arr.length; i++) {
            boardData.safeCellsBlack[arr[i][0]][arr[i][1]] = 0;
          }
        }
      }
      for (let i = 0; i < 8; i++) {
        console.log("boardData.safeCellsWhite: " + i + " " + boardData.safeCellsBlack[i]);
      }
    }
  }

  isKingThreatened(player) {
    boardData.mapSafe();
    for (let piece of boardData.pieces) {
      // console.log("piece: " + piece.type);

      if (piece.type == KING && boardData.currentPlayer == piece.player) {
        console.log("king piece location is : " + piece.row + "" + piece.col);
        // if (player == WHITE_PLAYER) {
        // console.log(this.safeCellsWhite[piece.row][piece.col]);

        if (this.safeCellsWhite[piece.row][piece.col] == 0) {
          alert("check");
          return true;
        }
        // }
        else {
          // console.log(this.safeCellsBlack[piece.row][piece.col]);
          if (this.safeCellsBlack[piece.row][piece.col] == 0) {
            alert("check");
            return true;
          }
        }
      }
    }
    return false;
  }
}

function getInitialPieces() {
  let result = [];

  addFirstRowPieces(result, 0, WHITE_PLAYER);
  addFirstRowPieces(result, 7, BLACK_PLAYER);

  for (let i = 0; i < BOARD_SIZE; i++) {
    result.push(new Piece(1, i, PAWN, WHITE_PLAYER));
    result.push(new Piece(6, i, PAWN, BLACK_PLAYER));
  }
  return result;
}

function addFirstRowPieces(result, row, player) {
  result.push(new Piece(row, 0, ROOK, player));
  result.push(new Piece(row, 1, KNIGHT, player));
  result.push(new Piece(row, 2, BISHOP, player));
  result.push(new Piece(row, 3, KING, player));
  result.push(new Piece(row, 4, QUEEN, player));
  result.push(new Piece(row, 5, BISHOP, player));
  result.push(new Piece(row, 6, KNIGHT, player));
  result.push(new Piece(row, 7, ROOK, player));
}

// Adds an image to cell with the piece's image
function addImage(cell, player, name, row, col) {
  let classes = player + name + " ";
  if ((row + col) % 2 === 0) {
    classes += 'light-cell';
  } else {
    classes += 'dark-cell';
  }

  cell.className = classes;


}

function showMovesForPiece(row, col) {
  // Clear all previous possible moves
  for (let i = 0; i < BOARD_SIZE; i++) {
    for (let j = 0; j < BOARD_SIZE; j++) {
      table.rows[i].cells[j].classList.remove('possible-move');
      table.rows[i].cells[j].classList.remove('selected');
    }
  }

  // Show possible moves
  const piece = boardData.getPiece(row, col);
  if (piece !== undefined) {
    let possibleMoves = piece.getPossibleMoves(boardData);
    for (let possibleMove of possibleMoves) {
      const cell = table.rows[possibleMove[0]].cells[possibleMove[1]];
      cell.classList.add('possible-move');
    }
  }

  table.rows[row].cells[col].classList.add('selected');
  selectedPiece = piece;
}

function onCellClick(event, row, col) {

  oldBoardData.pieces = boardData.pieces;
  // selectedPiece - The current selected piece (selected in previous click)
  // row, col - the currently clicked cell - it may be empty, or have a piece.
  if (selectedPiece === undefined) {
    //what to do if i click on an empty cell with nothing selected
    console.log("currentPlayer: " + boardData.currentPlayer);



    if (boardData.getPiece(row, col)) {
      if (boardData.currentPlayer == boardData.getPiece(row, col).player) {
        showMovesForPiece(row, col);
      }
    }
  } else {




    //if i click on a non-empty cell
    if (tryMove(selectedPiece, row, col)) {
      //if i can move to this non-empty cell
      selectedPiece.doubleJump = false;
      selectedPiece = undefined;
      // Recreate whole board - this is not efficient, but doesn't affect user experience
      boardData.changePlayer();
      if (boardData.currentPlayer == WHITE_PLAYER) {
        boardData.whiteCheck = boardData.isKingThreatened(boardData.currentPlayer);
        console.log("boardData.whiteCheck: " + boardData.whiteCheck);
      }
      else {
        boardData.blackCheck = boardData.isKingThreatened(boardData.currentPlayer);
      }
      if (boardData.isKingThreatened == true) {
        boardData.pieces = oldBoardData.pieces;
      }
      else {
        createChessBoard(boardData);
      }
    }
    else {
      //clear options
      for (let i = 0; i < BOARD_SIZE; i++) {
        for (let j = 0; j < BOARD_SIZE; j++) {
          table.rows[i].cells[j].classList.remove('possible-move');
          table.rows[i].cells[j].classList.remove('selected');
        }
      }
      //clear selected
      table.rows[row].cells[col].classList.remove('selected');
      if (boardData.getPiece(row, col) && boardData.currentPlayer == boardData.getPiece(row, col).player) {
        showMovesForPiece(row, col);
      }

    }
  }
}

// Tries to actually make a move. Returns true if successful.
function tryMove(piece, row, col) {
  const possibleMoves = piece.getPossibleMoves(boardData);
  // possibleMoves looks like this: [[1,2], [3,2]]
  for (const possibleMove of possibleMoves) {
    // possibleMove looks like this: [1,2]
    if (possibleMove[0] === row && possibleMove[1] === col) {
      // There is a legal move
      boardData.removePiece(row, col);
      piece.row = row;
      piece.col = col;
      if (piece.doubleJump) {
        piece.doubleJump = false;
      }
      return true;
    }
  }
  return false;
}

function initGame() {
  // Create list of pieces (32 total)
  boardData = new BoardData(getInitialPieces());
  oldBoardData = new BoardData(getInitialPieces());
  createChessBoard(boardData);
}



window.addEventListener('load', initGame);