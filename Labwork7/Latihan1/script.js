const buttons = document.querySelectorAll('button');
const answer = document.querySelector('.answer');

buttons.forEach(function(button) {
  button.addEventListener('click', calculate);
});

function calculate(event) {
  const buttonClicked = event.target.value;
  if (buttonClicked === '=') {
    if (answer.value !== '') 
    {
      answer.value = eval(answer.value);
    }
  } 
  else if (buttonClicked === 'C') 
  {
    answer.value = '';
  } 
  else {
    answer.value += buttonClicked;
  }
}