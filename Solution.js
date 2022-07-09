
/**
 * @param {number} boardSize
 */
var TicTacToe = function (boardSize) {
    this.NO_ONE_WINS = 0;
    this.players = [new Player(1), new Player(-1)];
    this.boardSize = boardSize;
    this.rows = new Array(boardSize).fill(0);
    this.columns = new Array(boardSize).fill(0);
    this.diagonal = 0;
    this.antiDiagonal = 0;
};

/**
 * @param {number} scoreOperation
 */
function Player(scoreOperation) {
    this.scoreOperation = scoreOperation;
}

/** 
 * @param {number} row 
 * @param {number} column 
 * @param {number} player
 * @return {number}
 */
TicTacToe.prototype.move = function (row, column, player) {
    this.updateScores(row, column, this.players[player - 1]);
    return this.thereIsWinner(row, column) ? player : this.NO_ONE_WINS;

};

/** 
 * @param {number} row 
 * @param {number} column 
 * @param {Player} player
 * @return {void}
 */
TicTacToe.prototype.updateScores = function (row, column, player) {
    this.rows[row] += player.scoreOperation;
    this.columns[column] += player.scoreOperation;
    if (row === column) {
        this.diagonal += player.scoreOperation;
    }
    if (this.boardSize - row - 1 === column) {
        this.antiDiagonal += player.scoreOperation;
    }
};

/** 
 * @param {number} row 
 * @param {number} column 
 * @return {boolean}
 */
TicTacToe.prototype.thereIsWinner = function (row, column) {
    return (Math.abs(this.rows[row]) === this.boardSize) || (Math.abs(this.columns[column]) === this.boardSize)
            || (Math.abs(this.diagonal) === this.boardSize) || (Math.abs(this.antiDiagonal) === this.boardSize);
};
