
function playSound(e) {

  // Two variables that returns element from audio and key from html based on data-key
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if(!audio)
    return; // Stop the function from running all together

  // Makes audio play from start
  audio.currentTime = 0;
  audio.play();

  // Adds .playing to key div
  key.classList.add('playing');
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

// Calls function playSound when valid key is down
window.addEventListener('keydown', playSound);
