var keys = document.getElementsByTagName("button");
var synth;
var synthDefault;
var synthA;
var synthB;


// Choose synth 
function switchSynth() {
	var choice = document.getElementById("synthChoice");

	if (choice.value == "sDefault"){
		synth = synthDefault;
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
	synthDefault = new Tone.Synth().toMaster();
	synth = synthDefault;
	
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
}

function makePoly(){
	synthDefault = new Tone.PolySynth().toMaster();
	synth = synthDefault;
	
	document.getElementById("synthChoice").value = "sDefault";
	//Custom sounds do Poly differently?
/* 	synthA = new Tone.PolySynth({
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

	synthB = new Tone.PolySynth({
		oscillator : {
		type : 'triangle8'
	  },
	  envelope : {
		attack : 2,
		decay : 1,
		sustain: 0.4,
		release: 4
	  }
	}).toMaster() */
}

// Play Tones
function playC() {
	synth.triggerAttackRelease('C5', '2n');
}
function playD() {
	synth.triggerAttackRelease('D5', '2n');
}
function playE() {
	synth.triggerAttackRelease('E5', '2n');
}
function playF() {
	synth.triggerAttackRelease('F5', '2n');
}
function playG() {
	synth.triggerAttackRelease('G5', '2n');
}
function playA() {
	synth.triggerAttackRelease('A5', '2n');
}
function playB() {
	synth.triggerAttackRelease('B5', '2n');
}
function playC8va() {
	synth.triggerAttackRelease('C6', '2n');
}

// Buttons
keys[0].addEventListener('click', function() {
	playC();
});
keys[1].addEventListener('click', function() {
	playD();
});
keys[2].addEventListener('click', function() {
	playE();
});
keys[3].addEventListener('click', function() {
	playF();
});
keys[4].addEventListener('click', function() {
	playG();
});
keys[5].addEventListener('click', function() {
	playA();
});
keys[6].addEventListener('click', function() {
	playB();
});
keys[7].addEventListener('click', function() {
	playC8va();
});

//Keystrokes
function keyboard(event) {
	var x = event.keyCode;
	// Q
	if (x == 113) {
		playC();
	}
	// W
	if (x == 119) {
		playD();
	}
	// E
	if (x == 101) {
		playE();
	}
	// R
	if (x == 114) {
		playF();
	}
	// T
	if (x == 116) {
		playG();
	}
	// Y
	if (x == 121) {
		playA();
	}
	// U
	if (x == 117) {
		playB();
	}
	// I
	if (x == 105) {
		playC8va();
	}
}