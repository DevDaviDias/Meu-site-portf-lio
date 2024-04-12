document.addEventListener('DOMContentLoaded', () => {
    const gameBoard = document.getElementById('gameBoard');
    let snake = [{x: 10, y: 10}];
    let food = {};
    let direction = 'right';
    let isGameOver = false;

    function createGrid() {
        for (let i = 0; i < 20; i++) {
            for (let j = 0; j < 20; j++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.id = `${j}-${i}`;
                gameBoard.appendChild(cell);
            }
        }
    }

    function drawSnake() {
        snake.forEach((segment, index) => {
            const snakeSegment = document.createElement('div');
            snakeSegment.style.gridColumn = segment.x + 1;
            snakeSegment.style.gridRow = segment.y + 1;
            if (index === 0) {
                snakeSegment.classList.add('snake-head');
            } else {
                snakeSegment.classList.add('snake-body');
            }
            gameBoard.appendChild(snakeSegment);
        });
    }

    function drawFood() {
        const foodElement = document.createElement('div');
        foodElement.style.gridColumn = food.x + 1;
        foodElement.style.gridRow = food.y + 1;
        foodElement.classList.add('food');
        gameBoard.appendChild(foodElement);
    }

    function generateFood() {
        let x = Math.floor(Math.random() * 20);
        let y = Math.floor(Math.random() * 20);
        food = { x, y };
        drawFood();
    }

    function moveSnake() {
        const head = { ...snake[0] };

        if (direction === 'right') head.x++;
        if (direction === 'left') head.x--;
        if (direction === 'up') head.y--;
        if (direction === 'down') head.y++;

        snake.unshift(head);

        if (head.x === food.x && head.y === food.y) {
            generateFood();
        } else {
            snake.pop();
        }
    }

    function checkGameOver() {
        const head = snake[0];
        if (head.x < 0 || head.x >= 20 || head.y < 0 || head.y >= 20) {
            return true;
        }
        for (let i = 1; i < snake.length; i++) {
            if (head.x === snake[i].x && head.y === snake[i].y) {
                return true;
            }
        }
        return false;
    }

    function updateGame() {
        if (isGameOver) return;

        gameBoard.innerHTML = '';

        moveSnake();
        if (checkGameOver()) {
            isGameOver = true;
            alert('Game Over!');
            return;
        }

        drawSnake();
    }

    document.addEventListener('keydown', (event) => {
        switch (event.key) {
            case 'ArrowUp':
                direction = 'up';
                break;
            case 'ArrowDown':
                direction = 'down';
                break;
            case 'ArrowLeft':
                direction = 'left';
                break;
            case 'ArrowRight':
                direction = 'right';
                break;
        }
    });

    createGrid();
    generateFood();
    setInterval(updateGame, 200);
});
