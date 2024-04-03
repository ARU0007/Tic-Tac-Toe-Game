let boxes = document.querySelectorAll(".box");
let reset = document.querySelectorAll("#reset-btn");
let newGameBtn = document.querySelectorAll("#new-btn");
let msgContainer = document.querySelectorAll(".msg-container");
let msg = document.querySelectorAll("#msg");
let turnO = true; //players turn

const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (turnO) {
      //player O turn
      box.innerText = "O";
      turnO = false;
    } else {
      //player X turn
      box.innerText = "X";
      turnO = true;
    }
    checkWinner();
    box.disabled = true;
  });
});

const checkWinner = () => {
  for (let pattern of winPattern) {
    let position1val = boxes[pattern[0]].innerText;
    let position2val = boxes[pattern[1]].innerText;
    let position3val = boxes[pattern[2]].innerText;

    if (position1val != "" && position2val != "" && position3val != "") {
      if (position1val == position2val && position2val == position3val)
        console.log("Winner", pos1val);
    }
  }
};
