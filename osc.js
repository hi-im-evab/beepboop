var keys = document.getElementsByTagName("button");
var synth;
var synthDefault;
var synthDefaultPoly;
var synthA;
var synthB;

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
}

// synth must be instantiated in a function?
function makeMono(){
	
}

function makePoly(){
	synthDefault = new Tone.PolySynth().toMaster();
	synth = synthDefault;
	
	document.getElementById("synthChoice").value = "sDefault";
	//Custom sounds do Poly differently?

}

// Play Tones
function playNote(note){
	synth.triggerAttackRelease(note, '2n');
}

// Buttons
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