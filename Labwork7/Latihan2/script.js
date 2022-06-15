var marked = document.querySelectorAll('mark');
var myButton = document.querySelector('button');

function highlight() {
	var mark1 = marked[0];
	if (mark1.style.fontWeight){
		for (var mark of marked) {
			mark.style.removeProperty('color');
			mark.style.removeProperty('font-weight');
			mark.style.setProperty('background-color', 'white');
		}
	}
	else{
		for (var mark of marked) {
		mark.style.setProperty('color', 'red');
		mark.style.setProperty('background-color', 'yellow');
		mark.style.setProperty('font-weight', '900')
		}
	}
}

myButton.onclick = function(){
	highlight();
}