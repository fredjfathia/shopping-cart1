function dec(number,prix, total,t1,t2,sum)
{
  var value = document.getElementById(number);
    var tot = document.getElementById(total) ;
    var tot1 = document.getElementById(t1) ;
    var tot2 = document.getElementById(t2) ;
   
    var pr=document.getElementById(prix) ;
    var summ=parseFloat(document.getElementById(sum).innerHTML) ;
    value = isNaN(value.value) || value===null ? 0 : parseInt(value.value,10);
    tot= tot===null ? 0 : parseFloat(tot.innerHTML);
    tot1= tot1===null ? 0 : parseFloat(tot1.innerHTML);
    tot2= tot2===null ? 0 : parseFloat(tot2.innerHTML);
    pr= pr===null ? 0 : parseFloat(pr.innerHTML);
   if(value<=0)
    value=0;
    else 
    value--;

  document.getElementById(number).value = value;
  tot=pr*value;
  document.getElementById(total).innerHTML = tot+'$';
  summ = isNaN(sum) ? 0 : summ;
  summ=tot+tot1+tot2;
  document.getElementById(sum).innerHTML = summ;
    
}

function inc(number,prix,total,t1,t2,sum)
{
  var value = document.getElementById(number);
  var tot =document.getElementById(total) ;
  var pr=document.getElementById(prix);
  var tot1 = document.getElementById(t1) ;
  var tot2 = document.getElementById(t2) ;
  var summ=parseFloat(document.getElementById(sum).innerHTML) ;

value = isNaN(value.value) || value===null ? 0 : parseInt(value.value ,10);
tot= tot===null ? 0 : parseFloat(tot.innerHTML);
tot1= tot1===null ? 0 : parseFloat(tot1.innerHTML);
tot2= tot2===null ? 0 : parseFloat(tot2.innerHTML);
pr= pr===null ? 0 : parseFloat(pr.innerHTML);
value++;

document.getElementById(number).value = value ;
tot=pr*value;
 
 document.getElementById(total).innerHTML = tot+'$';
 summ=tot+tot1+tot2;
 document.getElementById(sum).innerHTML = summ;

}

function redheart(heart)
{
  
  var bt=document.getElementById(heart);
  if(bt.style.color=="red") {
    bt.style.color="black";
  } else {
  bt.style.color="red";
}
}

function deleteart(ligne,tot,sum)
{
 var contentP = document.getElementById(ligne);
 var summ=parseFloat(document.getElementById(sum).innerHTML) ;
 var t = parseFloat(document.getElementById(tot).innerHTML) ;
  summ = isNaN(summ) ? 0 : summ;
  summ-=t;
 document.getElementById(sum).innerHTML = summ;
 contentP.remove();

}