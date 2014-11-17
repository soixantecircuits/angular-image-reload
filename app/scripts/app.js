'use strict';

$(function(){
    var time = 500;
    var url = $('#image1').attr('src');
    var countUp = function () {
            $('#image1').attr('src', url + '?time='+Date.now());
            setTimeout(countUp, time);
    }
    setTimeout(countUp, time);
});
