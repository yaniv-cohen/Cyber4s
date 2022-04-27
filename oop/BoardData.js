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
                //   console.log("boardData.safeCellsWhite: " + i + " " + boardData.safeCellsWhite[i]);
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
            //print avery line for test
            // for (let i = 0; i < 8; i++) {
            //     // console.log("boardData.safeCellsWhite: " + i + " " + boardData.safeCellsBlack[i]);
            // }
        }
    }

    isKingThreatened(player) {
        console.log("isKingThreatened?");
        boardData.mapSafe();
        for (let piece of boardData.pieces) {
            // console.log("piece: " + piece.type);

            if (piece.type == KING && boardData.currentPlayer == piece.player) {
                // console.log("king piece location is : " + piece.row + "" + piece.col);

                // if (player == WHITE_PLAYER) {
                // console.log(this.safeCellsWhite[piece.row][piece.col]);

                if (this.safeCellsWhite[piece.row][piece.col] == 0) {
                    // alert("check");
                    console.log("is white king safe? " + true);
                    return true;
                }
                // }
                else {
                    // console.log(this.safeCellsBlack[piece.row][piece.col]);
                    if (this.safeCellsBlack[piece.row][piece.col] == 0) {
                        //   alert("check");
                        console.log("is black king safe? " + true);
                        return true;
                    }
                }
            }
        }
        return false;
    }
}