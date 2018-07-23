var keys = document.getElementsByClassName("key");
var chords = document.getElementsByClassName("chord");
var synth;
var synthDefault;
var synthDefaultPoly;
var synthA;
var synthB;
var meter = new Tone.Meter();

synthDefault = new Tone.Synth().toMaster();

synthDefaultPoly = new Tone.PolySynth().toMaster();

synthA = new Tone.Synth({
	oscillator : {
	type : 'fmsquare',
	modulationType : 'sawtooth',
	modulationIndex : 3,
	harmonicity: 3.4
  },
  envelope : {
	attack : 0.001,
	decay : 0.1,
	sustain: 0.1,
	release: 0.1
  }
}).toMaster()

synthB = new Tone.Synth({
	oscillator : {
	type : 'triangle8'
  },
  envelope : {
	attack : 2,
	decay : 1,
	sustain: 0.4,
	release: 4
  }
}).toMaster()

synth = synthDefault;

//synth.connect(meter);

function init() {
	if (synth !== synthDefaultPoly) {
		for (var i in chords) {
			chords[i].disabled = true;
		}
	}
	
	document.getElementById('chords_group').style.display = 'none';
}

// Choose synth 
function switchSynth() {
	var choice = document.getElementById("synthChoice");

	if (choice.value == "sDefault"){
		synth = synthDefault;
	}
	if (choice.value == "sDefaultPoly"){
		synth = synthDefaultPoly;
	}
	if (choice.value == "synthA") {
		synth = synthA;
	}
	if (choice.value == "synthB") {
		synth = synthB;
	}
	
	if (synth === synthDefaultPoly) {
		document.getElementById('chords_group').style.display = '';
		
		for (var i in chords) {
			chords[i].disabled = false;
		}
	} else {
		document.getElementById('chords_group').style.display = 'none';
		
		for (var i in chords) {
			chords[i].disabled = true;
		}
	}
}


// Play Tones
// TODO: tie animation to volume, making it act as a db meter
function playNote(note){
	var start, end;
	start = new Date();
	
	// Play note
	synth.triggerAttackRelease(note, '2n');
	
	// Run animation
	document.getElementById('note_marker').className += ' animate';
	
	// After 1 second, end animation
	setTimeout(function() {
		document.getElementById('note_marker').className = 'note_marker';
	}, 1000);
	
}

/* Buttons */
// Keys
keys[0].addEventListener('click', function() {
	playNote('C5');
});
keys[1].addEventListener('click', function() {
	playNote('D5');
});
keys[2].addEventListener('click', function() {
	playNote('E5');
});
keys[3].addEventListener('click', function() {
	playNote('F5');
});
keys[4].addEventListener('click', function() {
	playNote('G5');
});
keys[5].addEventListener('click', function() {
	playNote('A5');
});
keys[6].addEventListener('click', function() {
	playNote('B5');
});
keys[7].addEventListener('click', function() {
	playNote('C6');
});

// Chords
// C Maj
chords[0].addEventListener('click', function() {
	playNote('C5');
	playNote('E5');
	playNote('G5');
});

chords[1].addEventListener('click', function() {
	playNote('D5');
	playNote('F5');
	playNote('A5');
});
chords[2].addEventListener('click', function() {
	playNote('E5');
	playNote('G5');
	playNote('B5');
});
chords[3].addEventListener('click', function() {
	playNote('F5');
	playNote('A5');
	playNote('C6');
});
chords[4].addEventListener('click', function() {
	playNote('G5');
	playNote('B5');
	playNote('D6');
});



//Keystrokes
function keyboard(event) {
	var x = event.keyCode;
	// Q
	if (x == 113) {
		playNote('C5');
	}
	// W
	if (x == 119) {
		playNote('D5');
	}
	// E
	if (x == 101) {
		playNote('E5');
	}
	// R
	if (x == 114) {
		playNote('F5');
	}
	// T
	if (x == 116) {
		playNote('G5');
	}
	// Y
	if (x == 121) {
		playNote('A5');
	}
	// U
	if (x == 117) {
		playNote('B5');
	}
	// I
	if (x == 105) {
		playNote('C6');
	}
}

/* Find some way to consolidate button/keyboard code? too repetitive */