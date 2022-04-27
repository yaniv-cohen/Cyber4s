const BOARD_SIZE = 8;
const WHITE_PLAYER = "white";
const BLACK_PLAYER = "black";

const PAWN = "pawn";
const ROOK = "rook";
const KNIGHT = "knight";
const BISHOP = "bishop";
const KING = "king";
const QUEEN = "queen";

const CHESS_BOARD_ID = "chess-board";

let boardData;
let table;
let selectedPiece;

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
    classes += "light-cell";
  } else {
    classes += "dark-cell";
  }
  cell.className = classes;
}

function showMovesForPiece(row, col) {
  // Clear all previous possible moves
  for (let i = 0; i < BOARD_SIZE; i++) {
    for (let j = 0; j < BOARD_SIZE; j++) {
      table.rows[i].cells[j].classList.remove("possible-move");
      table.rows[i].cells[j].classList.remove("selected");
    }
  }

  //copy this board to newBOardData
  for (let i = 0; i < boardData.pieces.length; i++) {
    newBoardData.pieces.push(boardData.pieces[i]);
  }
  // Show possible moves
  //piece is the piece we are getting the moves for
  const piece = boardData.getPiece(row, col);
  if (piece !== undefined) {
    //get all possible moves
    let possibleMoves =piece.getPossibleMoves(boardData);
    let type = piece.type;
    let oldY = row;
    let oldX = col;
    for (let possibleMove of possibleMoves) {
      //make the move in newBoardData
      let y = possibleMove[0];
      let x = possibleMove[1];
      console.log("y,x: " + y + "," + x);


      //i will make the move in the old board, and if it is a check i will set it to newBoardData
      

      console.log("type: " + type);
      piece.row = y;
      piece.col = x;
      // print avery line for test
      for (let i = 0; i < 8; i++) {
        // console.log("boardData.safeCellsWhite: " + i + " " + boardData.safeCellsBlack[i]);
      }
      console.log(boardData.getPiece(row, col));
      console.log("piece: " + piece.row);
   
      // if (boardData.isKingThreatened(boardData)) {


      // }
    }
//color the options
piece.row=row;
piece.col=col;
    for (let possibleMove of possibleMoves) {
      const cell = table.rows[possibleMove[0]].cells[possibleMove[1]];
      cell.classList.add("possible-move");
    }
  }

  table.rows[row].cells[col].classList.add("selected");
  selectedPiece = piece;
}

function onCellClick(event, row, col) {
  // for(let piece of boardData.pieces)

  //make oldBoardData a copy of all boardData pieces

  // selectedPiece - The current selected piece (selected in previous click)
  // row, col - the currently clicked cell - it may be empty, or have a piece.
  if (selectedPiece === undefined) {
    //what to do if i click on an empty cell with nothing selected

    if (boardData.getPiece(row, col)) {
      if (boardData.currentPlayer == boardData.getPiece(row, col).player) {
        showMovesForPiece(row, col);
        for (let p of newBoardData.pieces) {
          if (p.player != boardData.currentPlayer) {
            // console.log(!boardData.currentPlayer + " p: " + p.row + p.col + "  type: " + p.type);
            boardData.whiteCheck = boardData.isKingThreatened(
              boardData.currentPlayer
            );
            // console.log("boardData.whiteCheck: " + boardData.whiteCheck);
          }
        }
      }
    }
  } else {
    //if i click on a non-empty cell
    if (tryMove(selectedPiece, row, col)) {
      //if i can move to this non-empty cell
      selectedPiece.doubleJump = false;
      selectedPiece = undefined;
      // Recreate whole board - this is not efficient, but doesn't affect user experience

      // if (boardData.currentPlayer == WHITE_PLAYER) {
      //   boardData.whiteCheck = boardData.isKingThreatened(boardData.currentPlayer);
      //   console.log("boardData.whiteCheck: " + boardData.whiteCheck);
      // }
      // else {
      //   boardData.blackCheck = boardData.isKingThreatened(boardData.currentPlayer);
      // }

      createChessBoard(boardData);
      boardData.changePlayer();
    } else {
      //clear options
      for (let i = 0; i < BOARD_SIZE; i++) {
        for (let j = 0; j < BOARD_SIZE; j++) {
          table.rows[i].cells[j].classList.remove("possible-move");
          table.rows[i].cells[j].classList.remove("selected");
        }
      }
      //clear selected
      table.rows[row].cells[col].classList.remove("selected");
      if (
        boardData.getPiece(row, col) &&
        boardData.currentPlayer == boardData.getPiece(row, col).player
      ) {
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
  newBoardData = new BoardData(getInitialPieces());
  createChessBoard(boardData);
}

window.addEventListener("load", initGame);
