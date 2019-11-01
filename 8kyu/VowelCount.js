function getCount(str) {
  var vowelsCount = 0;
  
  // enter your majic here
  for (let i = 0; i< str.length ; i++) {
    let value = str[i];
    if(value=='a'||value=='e'||value=='i'||value=='o'||value=='u'){
      vowelsCount++;
    }
  }
  return vowelsCount;
}
