window.onscroll = function() {
    "use strict";
    var scrollNum = document.documentElement.scrollTop;
    var scrollPercentage;
    var opacityNum;
    
    if (document.documentElement.scrollTop<=200 ) {
        scrollPercentage = scrollNum/200;
        opacityNum = 1- (scrollPercentage*0.7);
        document.getElementById("home-bkgd").style.opacity = opacityNum.toString();
    }
    else {
        document.getElementById("home-bkgd").style.opacity = 0.3;
    }

    if (document.documentElement.scrollTop<=200 ) {
        document.getElementById("floating-home-bodies").style.opacity = 0;
    }
    else if (document.documentElement.scrollTop <=750){
        scrollPercentage = (scrollNum-200)/550;
        opacityNum = (scrollPercentage);
        document.getElementById("floating-home-bodies").style.opacity = opacityNum.toString();
    }
    else {
        document.getElementById("floating-home-bodies").style.opacity = 1;
    }
}

window.onload = function() {

    //original image proportions
    let bkgdWidth = 1;
    let bkgdHeight = 0.595;
    //calculate window proportions;
    let winWidth, winHeight;
    if(window.innerWidth > window.innerHeight) {
        winWidth = 1;
        winHeight = window.innerHeight / window.innerWidth;
    }
    else if(window.innerWidth < window.innerHeight) {
        winHeight = 1;
        winWidth = window.innerWidth / window.innerHeight;
    }
    else {
        winHeight = 1;
        winWidth = 1;
    }

    //set bkgd
    if(winHeight<=0.595) {
        document.getElementById("home-bkgd").style.width = "100%";
        document.getElementById("home-bkgd").style.height = "100vh";
    }
    else {
        //calculations: 
        document.getElementById("home-bkgd").style.width = "100%"; //change percentage based on frame
        document.getElementById("home-bkgd").style.height = "100vh"; //keep
    }




    if(window.innerWidth > window.innerHeight) {
        document.getElementById("home-bkgd").style.width = "100%";
    }
}


