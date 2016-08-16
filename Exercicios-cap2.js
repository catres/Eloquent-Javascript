/*
Exercicio 1
Escreva um programa que faça 7 chamadas a console.log() para retornar o seguinte triângulo.
#
##
###
####
#####
######
#######
*/
var tralha = "#";
for (var i = 1; i <= 7; i++) {
  console.log(tralha);
  tralha += "#";
}

/*
Exercicio 2
Escreva um programa que imprima (usando console.log()) todos os números de 1 a 100, exceto que, para números divisíveis por 3,
ele imprima Fizz ao invés do número, e para números divisíveis por 5 (e não 3), ele imprima Buzz.

Quando você tiver o programa funcionando, modifique-o para imprimir FizzBuzz para números que são divisíveis por ambos os números 3 e 5.
*/
for (var i = 1; i <= 100; i++) {
  if ((i % 3 === 0) && (i % 5 === 0)) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

/*
Exercicio 3
Escreva um programa que cria uma string que representa uma grade 8x8, usando novas linhas para separar os caracteres.
A cada posição da grade existe ou um espaço ou um caracter “#”, de forma que estes caracteres formem um tabuleiro de xadrez.

Passando esta string para console.log, ela deverá se parecer com isso:

# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
*/

var tabuleiro = "";
var pos1 = "#";
var pos2 = " ";
var tamanho = 8;

for (var i = 1; i <= tamanho ; i++) {
  for (var j = 1; j <= tamanho; j++) {
    if ((i + j) % 2 === 0) {
      tabuleiro += pos1;
    } else {
      tabuleiro += pos2;
    }
  }
  tabuleiro += "\n";
}
console.log(tabuleiro);
