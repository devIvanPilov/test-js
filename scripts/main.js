var clozeAnswer = document.getElementById('cloze1');
var checkAnswer = document.getElementById('checkButton');
var answerText = document.getElementById('message');

checkAnswer.addEventListener('click', check);

function check(){
  if(clozeAnswer.value == 'fill in'){
      answerText.innerHTML = "Correct!";
    } else {
      answerText.innerHTML = "Oops!";
    }
  }
