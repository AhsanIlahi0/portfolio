#include <iostream>
#include <vector>
#include <cstdlib>
#include <ctime>
#include <stack>
#include <windows.h>

using namespace std;

struct Node {
    int x, y;
};

int foodX = 0, foodY = 0, direction = 0, score = 0;
vector<Node> snake;

void generateFood() {
    foodX = rand() % 18 + 2;   // Generate inside the walls
    foodY = rand() % 18 + 2;
}

void printBoard() {
    system("cls");   // Clear screen

    for (int i = 1; i <= 20; ++i) {
        for (int j = 1; j <= 20; ++j) {
            bool found = false;

            for (Node n : snake) {
                if (n.x == j && n.y == i) {
                    cout << "S";
                    found = true;
                    break;
                }
            }

            if (!found) {
                if (foodX == j && foodY == i)
                    cout << "F";
                else if (j == 1 || j == 20 || i == 1 || i == 20)
                    cout << "#";
                else
                    cout << " ";
            }
        }
        cout << endl;
    }

    cout << "Score: " << score << endl;
}

void startGame() {
    generateFood();

    snake.push_back({10, 10});   // Start in the center

    while (true) {
        printBoard();

        char input;
        cin >> input;

        if (input == 'w' && direction != 2) direction = 0;
        if (input == 'a' && direction != 3) direction = 1;
        if (input == 's' && direction != 0) direction = 2;
        if (input == 'd' && direction != 1) direction = 3;

        Node head = snake.back();
        Node newNode = head;

        switch (direction) {
            case 0: newNode.y--; break; // Up
            case 1: newNode.x--; break; // Left
            case 2: newNode.y++; break; // Down
            case 3: newNode.x++; break; // Right
        }

        snake.push_back(newNode);

        // Wall collision
        if (newNode.x == 1 || newNode.x == 20 ||
            newNode.y == 1 || newNode.y == 20) {
            cout << "Game Over! Score: " << score << endl;
            return;
        }

        // Self collision
        for (int i = 0; i < snake.size() - 1; i++) {
            if (snake[i].x == newNode.x &&
                snake[i].y == newNode.y) {
                cout << "Game Over! Score: " << score << endl;
                return;
            }
        }

        // Food collision
        if (newNode.x == foodX && newNode.y == foodY) {
            score++;
            generateFood();
        } else {
            snake.erase(snake.begin());
        }

        Sleep(1000);   // Pause for 1 second
    }
}

int main() {
    srand(time(nullptr));

    cout << "Welcome to Snake Game!" << endl;
    cout << "Use W A S D keys to move." << endl;
    cout << "Press any key then Enter to start..." << endl;

    char c;
    cin >> c;

    startGame();

    return 0;
}