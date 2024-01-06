"use strict";

const tip=document.getElementById("tip")
const total=document.getElementById("total")
const bill=document.getElementById("bill")
const decreaseTip=document.getElementById("decreaseTip")
const tipBtn=document.getElementById("tipBtn")
const increaseTip=document.getElementById("increaseTip")
const decreasePpl=document.getElementById("decreasePpl")
const ppl=document.getElementById("ppl")
const increasePpl=document.getElementById("increasePpl")

let billCounter=10;
let pplCounter=1;

decreaseTip.addEventListener("click",()=>{
   if(billCounter<=10){
    alert("Nelzyaaaa umensit!")
   }
   else{
    billCounter-=5;
   }
    tipBtn.textContent=`${billCounter}%`;
})
increaseTip.addEventListener("click",()=>{
    if(billCounter>=100){
        alert("?????")
    }
    else{
        billCounter+=5;
    }
    tipBtn.textContent=`${billCounter}%`;

})
decreasePpl.addEventListener("click",()=>{
    if(pplCounter<=1){
     alert("Nelzyaaaa umensit!")
    }
    else{
     pplCounter--;
    }
     ppl.textContent=pplCounter;
 })
 increasePpl.addEventListener("click",()=>{
     pplCounter++;
     ppl.textContent=pplCounter;
 
 })
 
 
 bill.addEventListener("input",()=>{
        const billValue=bill.value
        const totalTip=(billCounter*billValue)/100
        const tipOnPerson=totalTip/pplCounter
        const billOnPerson=(totalTip + + billValue)/pplCounter
        tip.textContent=`$${tipOnPerson}`;
        total.textContent=`$${billOnPerson}`;
})
     