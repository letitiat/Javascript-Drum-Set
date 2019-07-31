const keyHover = 'hover';

// Creates function that plays sound
function playSound(keyCode) {

  // Two variables that returns element from audio and key from the parameter
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);

  if (!audio)
    return; // Stop the function from running all together

  // Makes audio play from start
  audio.currentTime = 0;
  audio.play();

  // Adds .playing to key div
  key.classList.add('playing');
}

//Creates a function that adds class list on Hover
function onHover(e) {
  this.classList.add(keyHover);
}

//Creates a function that removes class list on Hover
function removeHover(e) {
  this.classList.remove(keyHover);
}

// Creates function that gets key code from key press and passes it through playSound function
function playSoundOnType(e) {
  playSound(e.keyCode);
}

// Creates function that gets data-key attribute value from .key
function playSoundOnClick(mouse) {
  var keyCode = this.getAttribute('data-key');
  playSound(keyCode);
}

// Removes .playing from class list if propertyName IS NOT 'transform'
function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

// Gets an array of elements with the class .key
const keys = document.querySelectorAll('.key');
// Add removeTransition function to .key event listener on 'transitionend'
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
// Adds playSoundOnClick function to .key event listener on 'click'
keys.forEach(key => key.addEventListener('click', playSoundOnClick));

// Adds onHover function to .key event listener on 'mouseevent'
keys.forEach(key => key.addEventListener('mouseover', onHover));
// Removes onHover function to .key event listener on 'mouseevent'
keys.forEach(key => key.addEventListener('mouseleave', removeHover));

// Calls function playSound when valid key is down
window.addEventListener('keydown', playSoundOnType);
