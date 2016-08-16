/*
Exercicio 1
Escreva uma função min que recebe dois argumentos e retorna o menor deles.
*/
function min (num1 , num2) {
  if (num1 < num2)
    return num1;
  else
    return num2;
}

/*
Exercicio 2
Defina uma função recursiva isEven que satisfaça as condições descritas acima. 
A função deve aceitar um número como parâmetro e retornar um valor Booleano.
Teste-a com os valores 50 e 75. Observe como ela se comporta com o valor -1. 
Por quê? Você consegue pensar em uma maneira de arrumar isso?
*/
function isEven (number) {
  if (number === 0)
    return true;
  else if (number === 1 || number === -1)
    return false;
  else
    if (number < 0)
      return isEven(number + 2);
    else
      return isEven(number - 2);
}

/*
Exercicio 3
Escreva uma função countBs que receba uma string como único argumento e retorna o número que indica quantos caracteres “B”, 
em maiúsculo, estão presentes na string.
Em seguida, escreva uma função chamada countChar que se comporta de forma parecida com countBs, 
exceto que ela recebe um segundo argumento que indica o caractere que será contado (ao invés de contar somente o caractere “B” em maiúsculo). 
Reescreva countBs para fazer essa nova funcionalidade.
*/
function countBs (str) {
  var counter = 0;
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === "B")
      counter++;
  }
  return counter;
}


function countChar (str, ch) {
  var counter = 0;
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === ch)
      counter++;
  }
  return counter;
}
