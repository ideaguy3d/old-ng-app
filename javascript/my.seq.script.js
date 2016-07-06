/**
 * Created by Julius Hernandez on 12/1/2015.
 */

var seqElement = document.getElementById('sequence');

var options = {
    keyNavigation: true,
    fadeStepWhenSkipped: false,
    startingStepAnimatesIn: true
};

var mySequence = sequence(seqElement, options);

// =============== 2nd Sequence on homepage ==============

var seqElement2 = document.getElementById('sequence2');

var options2 = {
    keyNavigation: true,
    fadeStepWhenSkipped: false,
    autoplay: true,
    type: 500
};

var mySequence2 = sequence(seqElement2, options2);

