var page1=document.getElementById("all1")
var page2=document.getElementById("all2")
var page3=document.getElementById("all3")
var page4=document.getElementById("all4")
var page5=document.getElementById("all5")
var page6=document.getElementById("all6")
var page7=document.getElementById("all7")


var btn1=document.getElementById("allbtn1")
var btn2=document.getElementById("allbtn2")
var btn3=document.getElementById("allbtn3")
var btn4=document.getElementById("allbtn4")
var btn5=document.getElementById("allbtn5")

var steproww=document.getElementById("steproww")
var stepcoll=document.getElementById("stepcoll")

btn1.onclick=function(){
    page2.style.display ="flex"
    page1.style.display ="none";
    stepcoll.style.width="400px"
}
btn2.onclick=function(){
    page3.style.display ="flex"
    page2.style.display ="none";
    stepcoll.style.width="600px"
}
btn3.onclick=function(){
    page4.style.display ="flex"
    page3.style.display ="none";
    stepcoll.style.width="800px"
}
btn4.onclick=function(){
    page5.style.display ="flex"
    page4.style.display ="none";
    stepcoll.style.width="100%"
}
btn5.onclick=function(){
    page5.style.display ="none";
    page6.style.display ="flex"
    steproww.style.display="none";
    setTimeout(function(){
        
        page7.style.display ="flex"
    page6.style.display ="none";
    },2000);
    
}