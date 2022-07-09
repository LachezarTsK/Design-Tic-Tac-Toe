
public class TicTacToe {

    private static final int NO_ONE_WINS = 0;
    private final int[] rows;
    private final int[] columns;
    private final int boardSize;
    private int diagonal;
    private int antiDiagonal;

    private record Player(int scoreOperation) {}
    private final Player[] players;

    public TicTacToe(int boardSize) {
        players = new Player[]{new Player(1), new Player(-1)};
        this.boardSize = boardSize;
        rows = new int[boardSize];
        columns = new int[boardSize];
        diagonal = 0;
        antiDiagonal = 0;
    }

    public int move(int row, int column, int player) {
        updateScores(row, column, players[player - 1]);
        return thereIsWinner(row, column) ? player : NO_ONE_WINS;
    }

    private void updateScores(int row, int column, Player player) {
        rows[row] += player.scoreOperation;
        columns[column] += player.scoreOperation;
        if (row == column) {
            diagonal += player.scoreOperation;
        }
        if (boardSize - row - 1 == column) {
            antiDiagonal += player.scoreOperation;
        }
    }

    private boolean thereIsWinner(int row, int column) {
        return (Math.abs(rows[row]) == boardSize) || (Math.abs(columns[column]) == boardSize)
                || (Math.abs(diagonal) == boardSize) || (Math.abs(antiDiagonal) == boardSize);
    }
}
