function factorial(n){
  let fatorial = 1;
  if (n<0 || n>12){
    throw new RangeError();
  }
  for (let i = 1; i<n+1 ; i++){
    fatorial = fatorial * i;
  }
  return fatorial;
}