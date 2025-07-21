let clickCounter = 0;

function buttonClick() {
    if (clickCounter % 2 == 0) {
      document.getElementById('myButton').style.backgroundColor = 'yellow';
    } else {
      document.getElementById('myButton').style.backgroundColor = 'red';
    }
    clickCounter++;
    console.log(clickCounter);
}

let mySVG = document.getElementById('mySVG');

mySVG.addEventListener('click', () => {
    console.log('SVG is clicked');
})