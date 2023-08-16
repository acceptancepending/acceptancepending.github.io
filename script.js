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


