var clozeAnswer = document.getElementById('cloze1').value;
var checkAnswer = document.getElementsByClassName('btn');
var answerText = document.getElementById('message');

checkAnswer.addEventListener('click', check);


function check(){
  if (clozeAnswer.value == 'fill in'){
    answerText.innerHTML = 'Correct!';
    answerText.style.color = 'green';
  } else {
    answerText.innerHTML = 'Wrong!';
    answerText.style.color = 'red';
  }
}
