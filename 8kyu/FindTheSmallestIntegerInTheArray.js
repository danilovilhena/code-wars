class SmallestIntegerFinder {
    findSmallestInt(args) {
      let menorNumero = 10000000;
      for (let i=0; i<args.length; i++){
        if(args[i]<menorNumero){
          menorNumero = args[i];
        }
      }
      return menorNumero;
    }
  }