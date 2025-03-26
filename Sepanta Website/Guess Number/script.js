'use strict';

/*

console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent ='🎉 Correct Number! ';
document.querySelector('.number') .textContent=13;
document.querySelector('.score').textContent=20;

document.querySelector('.guess').value=23;
console.log(document.querySelector('.guess').value);

*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscorw = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// document.querySelector('.again').addEventListener('click', function () {
//   location.reload();
// });

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '🚩NO Number!';
    displayMessage('🚩NO Number!');

    // when player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number !';
    displayMessage('🎉 Correct Number !');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscorw) {
      highscorw = score;
      document.querySelector('.highscore').textContent = highscorw;
    }

    //   when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? 'Too high' : '📉too low!';
      displayMessage(guess > secretNumber ? 'Too high' : '📉too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.message').textContent = '💥YOu lost the game!';
      displayMessage('💥YOu lost the game!');

      document.querySelector('.score').textContent = 0;

      document.querySelector('body').style.backgroundColor = '#b72727';
      document.querySelector('.number').style.width = '30rem';
    }
  }

  // // when guess is too hight
  //   }
  //    else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too high';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '💥YOu lost the game!';

  //       document.querySelector('.score').textContent = 0;
  //     }

  //     //when is too low
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too low';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '💥YOu lost the game!';
  //       document.querySelector('.score').textContent = 0;
  //       document.querySelector('body').style.backgroundColor = '#b72727';
  //       document.querySelector('.number').style.width = '30rem';
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //   document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
