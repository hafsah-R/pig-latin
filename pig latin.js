

function pigLatin(){
//-------user input------
var
 word=document.getElementById("String").value;
 //--------------------
 
  let match=word.match(/[aouie]/i)
  let index=word.indexOf(match);
  
 switch(index){
 
    case 0:
    alert(word+"way");
    break;
    
    case -1:
    default:
   let con= word.substring(0,index);
    alert(word.replace(con,"")+con+"ay");
 }
}
