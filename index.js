// JavaScript File
$(document).ready(function(){
    $("#cloud1").click(function(){
        SC.get('/tracks', { genres: 'pop' }, function(tracks){
            debugger;
        });
    });
});


