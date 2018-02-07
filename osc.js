var keys = document.getElementsByTagName("button");
var synth;
// Tones
function playC() {
	synth = new Tone.Synth().toMaster();
	synth.triggerAttackRelease('C5', '2n');
}

function playD() {
	synth = new Tone.Synth().toMaster();
	synth.triggerAttackRelease('D5', '2n');
}

function playE() {
	synth = new Tone.Synth().toMaster();
	synth.triggerAttackRelease('E5', '2n');
}

function playF() {
	synth = new Tone.Synth().toMaster();
	synth.triggerAttackRelease('F5', '2n');
}

function playG() {
	synth = new Tone.Synth().toMaster();
	synth.triggerAttackRelease('G5', '2n');
}
function playA() {
	synth = new Tone.Synth().toMaster();
	synth.triggerAttackRelease('A5', '2n');
}
function playB() {
	synth = new Tone.Synth().toMaster();
	synth.triggerAttackRelease('B5', '2n');
}
function playC8va() {
	synth = new Tone.Synth().toMaster();
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