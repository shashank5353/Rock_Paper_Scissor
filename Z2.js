console.log("hi");
let score=0;
let s=document.querySelector('#s');
let msg=document.querySelector("#msg");
let aic=document.querySelector("#ai");
let youc=document.querySelector("#you");
console.log(msg.innerText);
let choices=""
let ai="1"
let rps=["rock","paper","scissor"];
let ch=document.querySelectorAll(".choices");
ch.forEach((i)=>{
  i.onclick= ()=>{
    choices=i.getAttribute("id");
    a();
    war(choices);
    /*aic.innerText=rps[ai];
    youc.innerText=choices;*/
    aic.innerText="";
    youc.innerText="";
    youc.setAttribute("id",choices);
    aic.setAttribute("id",rps[ai]);
    //youc.style.backgroundImage=`ulr(/${choices}.jpg)`;
    console.log("you - "+choices,"ai - "+rps[ai]);
  }
});
function a(){
  ai=Math.floor(Math.random()*3);
  /*console.log(ai,rps[ai]);*/
}
function war(c){
  if (c==rps[0]){
    if(rps[ai]==c){
      console.log("draw!");
      rmsg="draw";
    }
    else if(rps[ai]=="scissor"){
      console.log("win");
      rmsg="win";
    }
    else{
      console.log("loss");
      rmsg="loss";
    }
  }
  else if (c==rps[1]){
    if(rps[ai]==c){
      console.log("draw!");
      rmsg="draw";
    }
    else if(rps[ai]==rps[0]){
      console.log("win");
      rmsg="win";
    }
    else{
      console.log("loss");
      rmsg="loss";
    }
  }
  else if (c==rps[2]){
    if(rps[ai]==c){
      console.log("draw!");
      rmsg="draw";
    }
    else if(rps[ai]==rps[1]){
      console.log("win");
      rmsg="win";
    }
    else{
      console.log("loss");
      rmsg="loss";
    }
  }
  if ("win"==rmsg){
    msg.style.backgroundColor="green"
    score++;
    s.innerText="SCORE - "+score;
  }
  else if("loss"==rmsg){
    msg.style.backgroundColor="red"
  }
  else{
    msg.style.backgroundColor="black"
  }
  msg.innerText=rmsg;
}