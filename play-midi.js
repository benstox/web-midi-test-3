var onMIDIFailure = function(e) {
    log("No access to MIDI devices or your browser doesn't support WebMIDI API. Please use WebMIDIAPIShim " + e);
};

$(document).ready(function() {

    WebMidi.enable(function(err) {
       if (err) console.log("An error occurred", err);
       console.log(WebMidi.outputs);
       WebMidi.outputs[0].playNote("C3");
     }, false);

});

