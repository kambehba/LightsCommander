
var to1;
var to2;
var to3;
var to4;
var isStop = false;

function RunLeftRight() {

  
    var t1 = 1000;
    var t2 = 2000;
    var t3 = 3000;
    var t4 = 4000;
    
        to1 = setTimeout(function () {

            document.getElementById("d1").style.fill = "red"; document.getElementById("d2").style.fill = "white"; document.getElementById("d3").style.fill = "white"; document.getElementById("d4").style.fill = "white";
        }, t1);


        to2 = setTimeout(function () {

            document.getElementById("d1").style.fill = "white"; document.getElementById("d2").style.fill = "red"; document.getElementById("d3").style.fill = "white"; document.getElementById("d4").style.fill = "white";
        }, t2);

        to3 = setTimeout(function () {

            document.getElementById("d1").style.fill = "white"; document.getElementById("d2").style.fill = "white"; document.getElementById("d3").style.fill = "red"; document.getElementById("d4").style.fill = "white";
        }, t3);

        to4 = setTimeout(function () {

            document.getElementById("d1").style.fill = "white"; document.getElementById("d2").style.fill = "white"; document.getElementById("d3").style.fill = "white"; document.getElementById("d4").style.fill = "red";
        }, t4); 

        t1 += 4000;
        t2 += 4000;
        t3 += 4000;
        t4 += 4000;
    return "sucess";
}

function RunRightLeft() {

    var t1 = 1000;
    var t2 = 2000;
    var t3 = 3000;
    var t4 = 4000;
     
        to1 = setTimeout(function () {

            document.getElementById("d4").style.fill = "red"; document.getElementById("d3").style.fill = "white"; document.getElementById("d2").style.fill = "white"; document.getElementById("d1").style.fill = "white";
        }, t1);


        to2 = setTimeout(function () {

            document.getElementById("d4").style.fill = "white"; document.getElementById("d3").style.fill = "red"; document.getElementById("d2").style.fill = "white"; document.getElementById("d1").style.fill = "white";
        }, t2);

        to3 = setTimeout(function () {

            document.getElementById("d4").style.fill = "white"; document.getElementById("d3").style.fill = "white"; document.getElementById("d2").style.fill = "red"; document.getElementById("d1").style.fill = "white";
        }, t3);

        to4 = setTimeout(function () {

            document.getElementById("d4").style.fill = "white"; document.getElementById("d3").style.fill = "white"; document.getElementById("d2").style.fill = "white"; document.getElementById("d1").style.fill = "red";
        }, t4);

        t1 += 4000;
        t2 += 4000;
        t3 += 4000;
        t4 += 4000;

    return "sucess";
}

function dothis() {
    isStop = true;
    clearTimeout(to1);
    clearTimeout(to2);
    clearTimeout(to3);
    clearTimeout(to4);

    return "ss";
}

