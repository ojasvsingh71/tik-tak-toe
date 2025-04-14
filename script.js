let boxes = document.querySelectorAll(".boxes");
let winner_msg = document.querySelector(".hide");
let msg = document.querySelector("#msg");
let new_game = document.querySelector("#new_game");
let refresh = document.querySelector("#refresh");

const winpatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let turn = true;

const wincheck = () => {
    for (let j of winpatterns) {
        let first_num = boxes[j[0]].innerText;
        let sec_num = boxes[j[1]].innerText;
        let thrd_num = boxes[j[2]].innerText;
        if (first_num !== "" && first_num === sec_num && sec_num === thrd_num) {
            let winner = boxes[j[0]].innerText;
            winnermsg(winner);
            disableboxes();
        }
    }
};

const winnermsg = (winner) => {
    msg.innerText = `Congratulations! Winner is ${winner}`;
    winner_msg.classList.remove("hide");
};

const disableboxes = () => {
    boxes.forEach((box) => (box.disabled = true));
};

const enablesboxes = () => {
    boxes.forEach((box) => (box.disabled = false));
};

const game = () => {
    boxes.forEach((box) => {
        box.addEventListener("click", () => {
            if (turn) {
                box.innerText = "X";
                box.classList.add("X");
            } else {
                box.innerText = "O";
                box.classList.add("O");
            }
            box.disabled = true;
            turn = !turn;
            wincheck();
        });
    });
};

game();

const reset = () => {
    enablesboxes();
    winner_msg.classList.add("hide");
    boxes.forEach((box) => {
        box.innerText = "";
        box.className = "boxes";
    });
    turn = true; 
};

new_game.addEventListener("click", reset);
refresh.addEventListener("click", reset);
