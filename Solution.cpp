
#include <array>
#include <vector>
using namespace std;

class TicTacToe {
    
    inline static const int NO_ONE_WINS = 0;
    int boardSize;
    int diagonal;
    int antiDiagonal;
    vector<int> rows;
    vector<int> columns;

    struct Player {
        int scoreOperation{};
        Player(int scoreOperation) : scoreOperation {scoreOperation}{}
    };
    array<Player, 2>players{ Player(1), Player(-1)};

public:
    TicTacToe(int boardSize) {
        this->boardSize = boardSize;
        rows.resize(boardSize);
        columns.resize(boardSize);
        diagonal = 0;
        antiDiagonal = 0;
    }

    int move(int row, int column, int player) {
        updateScores(row, column, players[player - 1]);
        return thereIsWinner(row, column) ? player : NO_ONE_WINS;
    }

private:
    void updateScores(int row, int column, const Player& player) {
        rows[row] += player.scoreOperation;
        columns[column] += player.scoreOperation;
        if (row == column) {
            diagonal += player.scoreOperation;
        }
        if (boardSize - row - 1 == column) {
            antiDiagonal += player.scoreOperation;
        }
    }

    bool thereIsWinner(int row, int column) {
        return (abs(rows[row]) == boardSize) || (abs(columns[column]) == boardSize)
                || (abs(diagonal) == boardSize) || (abs(antiDiagonal) == boardSize);
    }
};
