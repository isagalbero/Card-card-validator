function cardValidator(creditCardNumber) {

  if (!creditCardNumber) {
    throw new Error("Não há parametro");
  } else if (creditCardNumber === "string") {
    throw new Error("Digite apenas numeros");
  } else if (creditCardNumber.toString().length < 10) {
    throw new Error("Há menos de 10 dígitos");
  }
  


  const myCard = creditCardNumber.toString().split("").reverse();
 

  for (let i = 0; i < myCard.length; i += 2) {
    myCard[i] = parseInt(myCard[i]);
  }

  for (let i = 1; i < myCard.length; i += 2) {

    const result = myCard[i] * 2;

    if (result >= 10) {

      var str = result.toString();
      var splitCard = parseInt(str[0]) + parseInt(str[1]);
      myCard[i] = splitCard;
    } else {
      myCard[i] = myCard[i] * 2;


    }
  }
  
  var numSum = myCard.reduce(function (acumulador, valorAtual) {

    return acumulador + valorAtual;
  });



  var somatoria = numSum % 10;

  if (somatoria === 0) {
    
    return true;
   
  } else {
 
    return false;
  
  }


}
cardValidator(5031433215406351);

module.exports.cardValidator = cardValidator;

