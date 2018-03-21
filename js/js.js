/**
 * @name:   js1.js
 * @desc:   
 */

( function () {

    var

        carouselIndex   =   0,
        carouselArray   =   ["imgs/silverBanner1.jpg", "imgs/silverBanner2.jpg", "imgs/silverBanner3.jpg"],
        myPic           =   document.getElementById("mySilverBanner"),
        banner          =  100;


        /*fadeCarousel    =   function () {

            carouselIndex++;


            myPic.style.transition = "opacity 1s";

            fade();

            if( carouselIndex >= carouselArray.length) {
                carouselIndex = 0;
                unFade();
            }


            myPic.src = carouselArray[ carouselIndex];



            setTimeout(function () {
                fadeCarousel();

            }, 1000);



        }, //fadeCarousel


        fade = function () {
            myPic.style.opacity = 0;
        }, // fade


        unFade = function () {
            myPic.style.opacity = 1;
        }, // fade*/


        /*bindBtns    =   function () {


            $("#btn2").on("click",fadeIn);

        }; // bindBtns*/


      /*  fadeOut  =   function () {


            $("#mySilverBanner")
                .toggleClass("visible");


            if( $("#mySilverBanner").hasClass("visible")) {
                $("#mySilverBanner").fadeOut();
                $("#btn1").html("Read Less");
            } else {
                fadeIn();

            } //end if



        };// fadeOut





    $("#mySilverBanner").fadeIn();
    $("#btn1").html("Read More");

    fadeIn  =   function () {

        $("#mySilverBanner")
            .toggleClass("visible");


        if( $("#mySilverBanner").hasClass("visible")) {
            $("#mySilverBanner").fadeIn();
            $("#btn1").html("Read Less");
        } else {
            fadeOut();

        } //end if
       

    };// fadeIn*/
        



    fade       =    function () {

            


            if ( banner  == 100) {

                $("#mySilverBanner").fadeOut(8000);
                $("#mySilverBanner").delay(800);
                $("#mySilverBanner").fadeIn(8000);
                $("#mySilverBanner").delay(800);

            }



    };//fade


        
        
        init = function () {
            /*fadeCarousel();*/
            /*bindBtns();
            fadeOut();*/
            fade();
        } //init

    ;


window.addEventListener("load", init);


})() ;


