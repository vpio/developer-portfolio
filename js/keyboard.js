document.getElementById('message').innerHTML = 'Initialize the Keyboard by picking 8 unique characters to be your octave'

var synth = new Tone.Synth().toMaster();
var selectedKeys = [];
var keyMap = [];
var octave = 4;

function changeOctave(isUp) {
  (isUp) ? octave++ : octave--
  document.getElementById('message').innerHTML = `Current Octave: ${octave}`
}

function displayNote(currentNote){
  document.getElementById('current-note').innerHTML = `<h1 style='font-size: 60px;'>${currentNote}</h1>`
}

function removeNote(){
  document.getElementById('current-note').innerHTML = null;
}

document.addEventListener('keydown', pianoPlayer)
document.addEventListener('keyup', removeNote)

var noteAsKeyCode = 65;
var unorderedNotes = [];
for (let i=0; i <=6; i++) {
  unorderedNotes.push(noteAsKeyCode)
  noteAsKeyCode++
}
var j = 0;
var orderedNotes = [];
var pointer;

function pianoPlayer(e){
  // initialize the keyboard here
  var offset = 2;
  if (keyMap.length <= 7 && !keyMap.includes(e.keyCode)) {
    keyMap.push(e.keyCode)
    selectedKeys.push(`<li><h3>${e.key}</h3></li>`)

    pointer = (j + offset) % unorderedNotes.length
    note = String.fromCharCode(unorderedNotes[pointer]).toUpperCase() + `${octave}`
    j++

    orderedNotes.push(unorderedNotes[pointer])

    if (keyMap.length === 8){
      document.getElementById('message').innerHTML = 'Keyboard Initialized!'
      document.getElementById('selectedKeys').innerHTML = selectedKeys.join('')
      document.getElementById('small-message').innerHTML = '<i>Change Octaves by using the Up and Down Arrow Keys!</i>'
    }
    synth.triggerAttackRelease(note, "8n")
  }

  else if (keyMap[keyMap.length - 1] === e.keyCode){
    note = String.fromCharCode(orderedNotes[keyMap.indexOf(e.keyCode)]).toUpperCase() + `${octave + 1}`
    displayNote(note);
    synth.triggerAttackRelease(note, "8n");
  }
  else if (keyMap.includes(e.keyCode)){
    note = String.fromCharCode(orderedNotes[keyMap.indexOf(e.keyCode)]).toUpperCase() + `${octave}`
    displayNote(note);
    synth.triggerAttackRelease(note, "8n");
  }
  else if (e.keyCode === 40 && octave >= 1){ changeOctave(false) }
  else if (e.keyCode === 38) { changeOctave(true) }
}
