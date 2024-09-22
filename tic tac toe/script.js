let box = document.querySelectorAll("li");
let count = 0;
let x = [];
let o = [];
let game = true

box.forEach((boxx) => {
  boxx.addEventListener("click", function() {
    if (boxx.innerHTML === "" && game) {
      messageDisplay(count);

      if (count % 2 === 0) {
        crossHTML = `
        <div class="cross">&times;</div>
        `;
        boxx.innerHTML = crossHTML;

        let num1 = this.className;
        num1 = parseInt(num1);
        x.push(num1);
        x.sort(function (a, b) {
          return a - b;
        });
        console.log(x);

        let final = judge(x);

        if (final) {
          game = false;

          var end = Date.now() + 2 * 1000;

          var colors = ["#bb0000", "#ffffff"];

          (function frame() {
            confetti({
              particleCount: 2,
              angle: 60,
              spread: 55,
              origin: {x: 0},
              colors: colors,
            });
            confetti({
              particleCount: 2,
              angle: 120,
              spread: 55,
              origin: {x: 1},
              colors: colors,
            });

            if (Date.now() < end) {
              requestAnimationFrame(frame);
            }
          })();

          document.querySelector(".message").innerHTML = '<button class="reset" ><h1>P1 WINS</h1><h1>Restart</h1></button>';
          document.querySelector(".reset").addEventListener("click", function () {
              reset();
              messageDisplay();
            });

          console.log("P1WIN");
        }
        
      }
      else {
        circleHTML = `
        <div class="circle">&times;</div>
        `;
        turnHTML = `
        <h2>P1 turn</h2>
        `;
        boxx.innerHTML = circleHTML;
        let num2 = this.className;
        num2 = parseInt(num2);
        o.push(num2);
        o.sort(function (a, b) {
          return a - b;
        });
        let final = judge(o);
        if (final) {
          
          game = false;

          var end = Date.now() + 2 * 1000;

          var colors = ["#bb0000", "#ffffff"];

          (function frame() {
            confetti({
              particleCount: 2,
              angle: 60,
              spread: 55,
              origin: {x: 0},
              colors: colors,
            });
            confetti({
              particleCount: 2,
              angle: 120,
              spread: 55,
              origin: {x: 1},
              colors: colors,
            });

            if (Date.now() < end) {
              requestAnimationFrame(frame);
            }
          })();

          document.querySelector(".message").innerHTML =
            '<button class="reset" ><h1>P2 WINS</h1><h1>Restart</h1></button>';
          document
            .querySelector(".reset")
            .addEventListener("click", function () {
              reset();
              messageDisplay();
            });
        }
        
      }
    }
    count++;
  });
});

function judge(array) {
  let towin = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  let size = towin.length;

  for (let i = 0; i < size; i++) {
    let triple = towin[i];
    let count = 0;

    for (let j = 0; j < 3; j++) {
      if (array.indexOf(triple[j]) !== -1) {
        count++;
      }
    }

    if (count === 3) {
      return true;
    }
  } 
    if(count === 8 ) {
      document.querySelector(".message").innerHTML =
            '<button class="reset" ><h1>DRAW</h1><h1>Restart</h1></button>';
          document
            .querySelector(".reset")
            .addEventListener("click", function () {
              reset();
              messageDisplay();
            });
            game = false
    }
    return false;
}

function messageDisplay(count) {
  console.log(count);
  if (count % 2 === 0) {
    messageHTML = `
      <h1>P2 Turn</h1>
    `;
    document.querySelector(".message").innerHTML = messageHTML;
  } else {
    messageHTML = `
            <h1>P1 Turn</h1>
        `;
    document.querySelector(".message").innerHTML = messageHTML;
  }
}

window.onload = function () {
  messageDisplay();
};

function reset() {
  box.forEach((boxx) => {
    boxx.innerHTML = "";
  });
  x = [];
  o = [];
  count = 0;
  game = true;
}
