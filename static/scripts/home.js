console.log('hello world')

var hidden = false;
var divBody = document.getElementById('divBody');

document.getElementById('changeColor').addEventListener('click', function() {
  var color = document.getElementById('backgroundColor').value;
  var body = document.getElementById('body');
  body.style.background = color;
});

document.getElementById('visToggle').addEventListener('click', function() {
  hidden = !hidden
  if(hidden) {
    divBody.style.display ='none';
  } else {
    divBody.style.display ='inline';
  }
});

function validateForm() {
  var name = document.getElementById('nameInput').value;
  var species = document.getElementById('speciesInput').value;
  var age = document.getElementById('ageInput').value;

  if (!name || !species || !age) {
    alert('Fields must not be blank')
    return false;
  }

  // console.log('>>>ageInput', typeof parseInt(ageInput));

  if (isNaN(parseInt(age)) || typeof parseInt(age) !== 'number') {
    if (age) {
      alert('Age field must be a number')
      return false;
    }
  }

  return true;
}
