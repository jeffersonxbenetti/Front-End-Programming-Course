 // Escreva um programa que calcule a soma de dois números e exiba o resultado utilizando uma template string. Por exemplo, se os números forem 5 e 3, o programa deve exibir "A soma de 5 e 3 é igual a 8".

 const numberOne = 31
 const numberTwo = 29

 function soma(){
     return numberOne + numberTwo
 }

 console.log(`A soma de ${numberOne} e ${numberTwo} é igual a ${soma()}`)