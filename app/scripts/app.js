'use strict';

$(function(){
    var url = $('#image1').attr('src');
    var countUp = function () {
            $('#image1').attr('src', url + '?time='+Date.now());
            setTimeout(countUp, 1500);
    }
    setTimeout(countUp, 1500);
});
