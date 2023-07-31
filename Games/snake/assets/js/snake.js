//create 2d canvas
const canvas = document.getElementById("snakeGame");
const context = canvas.getContext("2d");

const box = 32;

//set ground image
const ground = new Image();
ground.src = "assets/imgs/base.png";

//set game over image
const gameover = new Image();
gameover.src = "assets/imgs/gameover.png";

//set snake food image
const foodImg = new Image();
foodImg.src = "assets/imgs/medicine.png";


let snake = [];

snake[0] = {
    x: 9 * box,
    y: 10 * box
};

//let the food spawn in a random area in the canvas
let food = {
    x: Math.floor(Math.random() * 17 + 1) * box,
    y: Math.floor(Math.random() * 15 + 3) * box
}

//set score
let score = 0;

//initial direction as variable
let d;

document.addEventListener("keydown", direction);

function direction(event) {
    //record keyboard press event
    let key = event.keyCode;
    //key 37 is arrow up key
    if (key == 37 && d != "RIGHT")
    {
        d = "LEFT";
    }
    //key 37 is arrow up key
    else if (key == 38 && d != "DOWN")
    {
        d = "UP";
    }
    //key 37 is arrow up key
    else if (key == 39 && d != "LEFT")
    {
        d = "RIGHT";
    }
    //key 37 is arrow up key
    else if (key == 40 && d != "UP")
    {
        d = "DOWN";
    }
}

function collision(head, array) {
    for (let i = 0; i < array.length; i++) {
        //if snake snake's head hits the snake body...
        if (head.x == array[i].x && head.y == array[i].y) {
            return true; //return collision is true
        }
    }
    return false;
}


function draw() {

    context.drawImage(ground, 0, 0); //draw the ground image

    for (let i = 0; i < snake.length; i++) {
        context.fillStyle = (i == 0) ? "yellow" : "yellow"; //snake body color red
        context.fillRect(snake[i].x, snake[i].y, box, box);

        context.strokeStyle = "gray"; //snake outline black
        context.strokeRect(snake[i].x, snake[i].y, box, box);
    }

    context.drawImage(foodImg, food.x, food.y); //draw food image on canvas

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (d == "LEFT") snakeX -= box;
    if (d == "UP") snakeY -= box;
    if (d == "RIGHT") snakeX += box;
    if (d == "DOWN") snakeY += box;

    //if snake collides with food
    if (snakeX == food.x && snakeY == food.y) {
        score++; //incrament score
        //then spawn the food in a random place again
        food = {
            x: Math.floor(Math.random() * 17 + 1) * box,
            y: Math.floor(Math.random() * 15 + 3) * box
        }

    } else {
        snake.pop();
    }


    let newHead = {
        x: snakeX,
        y: snakeY
    }

    //if snake collides with wall or itself, clear the game interval and draw the game over image
    if (snakeX < box || snakeX > 17 * box || snakeY < 3 * box || snakeY > 17 * box || collision(newHead, snake)) {
        clearInterval(game);
        context.drawImage(gameover, 10, 10);
    }

    snake.unshift(newHead);

    //show score
    context.fillStyle = "white";
    context.font = "35px Calibri";
    context.fillText(score, 3.2 * box, 1.6 * box);
}

let game = setInterval(draw, 100);

window.addEventListener("keydown", function(e) {
    //key strokes
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);
