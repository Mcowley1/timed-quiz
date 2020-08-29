var timerEl = document.getElementById('countdown');
var mainEL = document.getElementById('main');
var startBtn = document.getElementById('start');

var message = "Congrats! Hope you know about your mother lol";
var words = message.split(' ');

// timer that counts down from 5
function countdown() {
  var timeLeft = 5;

  var timeInterval = setInterval(function() {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + " time remaining";
      timeLeft--
    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + " time remaining";
      timeLeft--
    }
    else {
        timerEl.textContent = '';
        clearInterval(timeInterval);
        displayMessage();
    }

  }, 1000);
}

function displayMessage() {
  var wordCount = 0;

  var msgInterval = setInterval(function () {
    if (words[wordCount] === undefined) {
      clearInterval(msgInterval);
    } else {
      mainEL.textContent = words[wordCount];
      wordCount++;
    }
  }, 300);
}

startBtn.onclick = countdown;



