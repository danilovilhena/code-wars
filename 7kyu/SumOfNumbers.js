function getSum( a,b ){
  let soma = 0;
   if(a<b){
     for(let i = a; i <= b; i++){
       soma+=i; 
     }
     return soma;
   }
   else if (a>b){
     for(let i = b; i <= a; i++){
       soma+=i;
     }
     return soma;
   }
   else{
     return a;
   }
}
