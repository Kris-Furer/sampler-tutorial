window.addEventListener('load', () =>  {
  const sounds = document.querySelectorAll('.sound');

  const darkBtn = document.getElementById('darkBtn')

  const pads = document.querySelectorAll('.pads div');
  const visual = document.querySelector('.visual');
  const colors = [
    '#784ae7',
    '#ad1f8e',
    '#93df34',
    '#e8f008',
    '#e758a9',
    '#19eeda'
]

darkBtn.onclick = function(){
document.body.classList.toggle('darkmode')
};


// get sound going
pads.forEach((pad, index) => {
 pad.addEventListener('click', function(){
   sounds[index].currentTime = 0
   sounds[index].play();
   createBubbles(index);
 });
});

//Create funtion that makes bubbles
const createBubbles = (index) => {
  const bubble = document.createElement('div');

  visual.appendChild(bubble);
  bubble.style.backgroundColor = colors[index]
  bubble.style.animation = 'jump 1s ease';
  bubble.addEventListener('animationEnd', function(){
    visual.removeChild(bubble)
  })
}


});
