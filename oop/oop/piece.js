class Piece {
    constructor(row, col, type, player) {
      this.row = row;
      this.col = col;
      this.type = type;
      this.player = player;
      if(this.type=="pawn")
      {
        this.doubleJump=true;

      }
    }
  
    getOpponent() {
      if (this.player === WHITE_PLAYER) {
        return BLACK_PLAYER;
      }
      return WHITE_PLAYER;
    }

    getPossibleEat(boardData) {
      // Get moves
      let moves;
      if (this.type === PAWN) {
        moves = this.getPawnEat(boardData);
      } else if (this.type === ROOK) {
        moves = this.getRookMoves(boardData);
      } else if (this.type === KNIGHT) {
        moves = this.getKnightMoves(boardData);
      } else if (this.type === BISHOP) {
        moves = this.getBishopMoves(boardData);
      } else if (this.type === KING) {
        moves = this.getKingMoves(boardData);
      } else if (this.type === QUEEN) {
        moves = this.getQueenMoves(boardData);
      } else {
        console.log("Unknown type", type)
      }
  
      // Get filtered absolute moves
      let filteredMoves = [];
      for (const absoluteMove of moves) {
        const absoluteRow = absoluteMove[0];
        const absoluteCol = absoluteMove[1];
        if (absoluteRow >= 0 && absoluteRow <= 7 && absoluteCol >= 0 && absoluteCol <= 7) {
          filteredMoves.push(absoluteMove);
        }
      }
      return filteredMoves;
    }
    getPossibleMoves(boardData) {
      // Get moves
      let moves;
      if (this.type === PAWN) {
        moves = this.getPawnMoves(boardData);
      } else if (this.type === ROOK) {
        moves = this.getRookMoves(boardData);
      } else if (this.type === KNIGHT) {
        moves = this.getKnightMoves(boardData);
      } else if (this.type === BISHOP) {
        moves = this.getBishopMoves(boardData);
      } else if (this.type === KING) {
        moves = this.getKingMoves(boardData);
      } else if (this.type === QUEEN) {
        moves = this.getQueenMoves(boardData);
      } else {
        console.log("Unknown type", type)
      }
      //if i am in check
      if(boardData.player==WHITE_PLAYER&& boardData.whiteCheck)
      {
        // check every move if it still is in check
        let oldBoardData = Object.assign({}, boardData);
        let row = this.row;
        let col =this.col;
        for(let move of moves)
        {
          //draw new boarddata
          if (tryMove(this, this.row, this.col)) {
            //if i can move to this non-empty cell
            boardData.removePiece(row, col);
            // .row = row;
            // piece.col = col;
            // Recreate whole board - this is not efficient, but doesn't affect user experience
          }


        }
      }

      // Get filtered absolute moves
      let filteredMoves = [];
      for (const absoluteMove of moves) {
        const absoluteRow = absoluteMove[0];
        const absoluteCol = absoluteMove[1];
        if (absoluteRow >= 0 && absoluteRow <= 7 && absoluteCol >= 0 && absoluteCol <= 7) {
          filteredMoves.push(absoluteMove);
        }
      }
      return filteredMoves;
    }
  
    getPawnMoves(boardData) {
      let result = [];
      let direction = 1;
      
      if (this.player === BLACK_PLAYER) {
        direction = -1;
      }
  
      let position = [this.row + direction, this.col];
      if (boardData.isEmpty(position[0], position[1])) {
        result.push(position);
      }
  
      position = [this.row + direction, this.col + direction];
      if (boardData.isPlayer(position[0], position[1], this.getOpponent())) {
        result.push(position);
      }
  
      position = [this.row + direction, this.col - direction];
      if (boardData.isPlayer(position[0], position[1], this.getOpponent())) {
        result.push(position);
      }
      
      if (this.doubleJump&&boardData.isEmpty(position[0], position[1])) {
        
        position = [this.row + direction*2, this.col];
        result.push(position);
      }
  
      return result;
    }
    getPawnEat(boardData)
    {
      let result = [];
      let direction = 1;
      let position;
      if (this.player === BLACK_PLAYER) {
        direction = -1;
      }
      // let position = [this.row + direction, this.col];
      // if (boardData.isEmpty(position[0], position[1])) {
      //   result.push(position);
      // }
  
      position = [this.row + direction, this.col + direction];

        result.push(position);
      
  
      position = [this.row + direction, this.col - direction];

        result.push(position);
      
      

  
      return result;
    }
  
    getRookMoves(boardData) {
      let result = [];
      result = result.concat(this.getMovesInDirection(-1, 0, boardData));
      result = result.concat(this.getMovesInDirection(1, 0, boardData));
      result = result.concat(this.getMovesInDirection(0, -1, boardData));
      result = result.concat(this.getMovesInDirection(0, 1, boardData));
      return result;
    }
  
    getMovesInDirection(directionRow, directionCol, boardData) {
      let result = [];
  
      for (let i = 1; i < BOARD_SIZE; i++) {
        let row = this.row + directionRow * i;
        let col = this.col + directionCol * i;
        if (boardData.isEmpty(row, col)) {
          result.push([row, col]);
        } else if (boardData.isPlayer(row, col, this.getOpponent())) {
          result.push([row, col]);
         
          return result;
        } else if (boardData.isPlayer(row, col, this.player)) {
         
          return result;
        }
      }
    
      return result;
    }
  
    getKnightMoves(boardData) {
      let result = [];
      const relativeMoves = [[2, 1], [2, -1], [-2, 1], [-2, -1], [-1, 2], [1, 2], [-1, -2], [1, -2]];
      for (let relativeMove of relativeMoves) {
        let row = this.row + relativeMove[0];
        let col = this.col + relativeMove[1];
        if (!boardData.isPlayer(row, col, this.player)) {
          result.push([row, col]);
        }
      }
      return result;
    }
  
    getBishopMoves(boardData) {
      let result = [];
      result = result.concat(this.getMovesInDirection(-1, -1, boardData));
      result = result.concat(this.getMovesInDirection(-1, 1, boardData));
      result = result.concat(this.getMovesInDirection(1, -1, boardData));
      result = result.concat(this.getMovesInDirection(1, 1, boardData));
      return result;
    }
  
    getKingMoves(boardData) {
      let result = [];
      const relativeMoves = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
      for (let relativeMove of relativeMoves) {
        let row = this.row + relativeMove[0];
        let col = this.col + relativeMove[1];
        if (!boardData.isPlayer(row, col, this.player)) {
          result.push([row, col]);
        }
      }
      return result;
    }
  
    getQueenMoves(boardData) {
      let result = this.getBishopMoves(boardData);
      result = result.concat(this.getRookMoves(boardData));
      return result;
    }
  }