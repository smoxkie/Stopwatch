let second=0;
let minute=0;
let hour=0;
let timer=null;
function stopwatch(){
  second++;
  
  if(second===60){
    second=0;
    minute++;
  }
  if(minute==60){
    minute=0;
    hour++;
  }

  let h=hour<10?"0"+hour:hour
  let m=minute<10?"0"+minute:minute
  let s=second<10?"0"+second:second
  document.getElementById("display").innerHTML=h+":"+m+":"+s;
}
function watchStart(){
    if(timer!=null){
        clearInterval(timer)
        timer=null;
    }
    else{

        timer= setInterval(stopwatch,1000)
    }
 
   
}
function stoptimer(){
    clearInterval(timer);
}
function reset(){
    clearInterval(timer);
    timer=null;
    hour=0;
    minute=0;
    second=0;
    document.getElementById("display").innerHTML="00:00:00"
}