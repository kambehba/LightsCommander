function myFunction() {
    //document.getElementById("d1").style.fill = "yellow";
    //setTimeout(() => { document.getElementById("d1").style.fill = "red"; document.getElementById("d2").style.fill = "yellow"; }, 1000);
    //setTimeout(() => { document.getElementById("d2").style.fill = "red"; document.getElementById("d1").style.fill = "yellow"; }, 1000);

   
    //$("d1").css({ "fill": "blue" });
    var t1 = 1000;
    var t2 = 2000;
    var t3 = 3000;
    var t4 = 4000;

    for (var i = 0; i < 5; i++) {

        setTimeout(function () {

            document.getElementById("d1").style.fill = "red"; document.getElementById("d2").style.fill = "white"; document.getElementById("d3").style.fill = "white"; document.getElementById("d4").style.fill = "white";
        }, t1);


        setTimeout(function () {

            document.getElementById("d1").style.fill = "white"; document.getElementById("d2").style.fill = "red"; document.getElementById("d3").style.fill = "white"; document.getElementById("d4").style.fill = "white";
        }, t2);

        setTimeout(function () {

            document.getElementById("d1").style.fill = "white"; document.getElementById("d2").style.fill = "white"; document.getElementById("d3").style.fill = "red"; document.getElementById("d4").style.fill = "white";
        }, t3);

        setTimeout(function () {

            document.getElementById("d1").style.fill = "white"; document.getElementById("d2").style.fill = "white"; document.getElementById("d3").style.fill = "white"; document.getElementById("d4").style.fill = "red";
        }, t4); 

        t1 += 4000;
        t2 += 4000;
        t3 += 4000;
        t4 += 4000;

    }

 
      

    


   
   
   
 
    return "ss";
}

function alertFunc() {

    document.getElementById("d1").style.fill = "red";
    setTimeout(alertFunc, 3000);
}

