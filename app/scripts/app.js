'use strict';

$(function(){
    var locations = ['views/about.html', 'views/main.html'];
    var countUp = function () {
        var pageurl = locations[Math.floor(Math.random() * locations.length)];
        $.ajax({url:pageurl, success: function(data){
            window.URL.revokeObjectURL($('#image1').attr('src'));
            window.URL.revokeObjectURL($('#image2').attr('src'));
            $('#content').html(data);
            $('#image1').attr('src', $('#image1').attr('src') + '?time='+Date.now());
            $('#image2').attr('src', $('#image2').attr('src') + '?time='+Date.now());

            setTimeout(countUp, 1500);
        }});
    }
    setTimeout(countUp, 1500);
});
