'use strict';
var locations = ['index.html', 'index2.html'];
function countUp() {
        window.location = locations[Math.floor(Math.random() * locations.length)];
        setTimeout(countUp, 1500);
    }

    setTimeout(countUp, 1500);