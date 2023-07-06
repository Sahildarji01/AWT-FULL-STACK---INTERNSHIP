// function fade(){
//     $("img1").fadeOut();
//     $("img1").fadeToggle();
//     $("img1").fadeTo("fast","500px")
// }


$("document").ready(function(){
    $("#img1").mouseenter(function(){
        $("#img1").css("width","700px");
    });

    $("#img1").mouseleave(function(){
        $("#img1").css("width","500px");
    });
});