const {bpm} = Tone.Transport

bpm.value = 120

document.getElementById('current-bpm').innerHTML = bpm.value

window.addEventListener('keydown', (e) => {
  e.stopPropagation();
  if (Tone.context.state !== 'running') {
    Tone.context.resume();
  }
  switch (e.key) {
    case 'ArrowUp':
      if (Tone.Transport.state === 'started'){
        letsStop();
      }
      bpm.value++
      document.getElementById('current-bpm').innerHTML = bpm.value.toFixed(0)
      break;
    case 'ArrowDown':
      if (Tone.Transport.state === 'started'){
        letsStop();
      }
      bpm.value--
      document.getElementById('current-bpm').innerHTML = bpm.value.toFixed(0)
      break;
    case 'Enter':
      if (Tone.Transport.state === 'started'){
        letsStop();
      } else {
        letsStart();
      }
      break;
    default:
      console.log('invalid input')
  }
  // console.log(e)
});

var player = new Tone.Player("https://s3.amazonaws.com/metronome-app/FKI_percussion_woodblock_022.wav").toMaster();

var loop = new Tone.Loop(function(time){
	//triggered every eighth note.
  // console.log(time);
  player.start(time);
}, "4n")

loop.start(0);

document.getElementById('play-button').addEventListener("click", () => {
  if (Tone.context.state !== 'running') {
    Tone.context.resume();
  }

  if (Tone.Transport.state === 'started'){
    letsStop();
  } else {
    letsStart();
  }
});

function letsStart() {
  Tone.Transport.start();
  document.getElementById('met-button').className = 'fas fa-stop'
}


function letsStop() {
  Tone.Transport.stop();
  document.getElementById('met-button').className = 'fas fa-play'
}
