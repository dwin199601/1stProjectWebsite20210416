$(function () {


$("#buttonQA").click(function(){
$("#QAimage").slideToggle(1000)
$("#QAimage").css({"width" : "300px", "border-width": "1px", "border-style":"solid", "border-color": "#1d469e", "border-radius": "2px"});
});

$("#QAimage").hover(function(){

    $("#QAimage").animate({
        width: "350px",
    },1000);

    });

/*$("#QAimage").click(function(){
    $("#QAimage").hide(1000)
    });*/

});

$(function () {

    let sqlImg =  $("#SQLimage")
    $("#buttonSQL").click(function(){
        sqlImg.slideToggle(1000)
        sqlImg.css({"width" : "300px", "border-width": "1px", "border-style":"solid", "border-color": "#1d469e", "border-radius": "2px"});
    });
    
    $("#SQLimage").hover(function(){

        $("#SQLimage").animate({
            width: "350px",
        },1000);
    
        });

    /*$("#SQLimage").click(function(){
        sqlImg.hide(1000)
        });*/
    
    });

