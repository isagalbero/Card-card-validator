Primeiramente o usuário deve inserir o número do cartão que deseja verificar, a função cardValidator() é invocada.

Esse mesmo número será armazenado e dividido na variável myCard e depois armazenado e invertido pela variável para ser validado.

É criada então um array dos números invertidos do cartão, ainda em string. A variável arrayReverse é percorrida por meio de um for, iniciando a contagem em 0 e incrementando 1; Logo após esse array é transformado em números inteiros com a função parseInt().

arrayReverse é percorrido por um segundo for começando na posição 1 e incrementado de 2, a variável result é criada para armazenar o produto das seleções pares.

Temos então a estrutura condicional onde se o valor da variável for maior ou igual a 10, uma outra variável transforma esse valor em strings com o método toString() e a variável split soma os valores em seus respectivos index, senão a variável apenas multiplica o valor por 2.

Loop finalizado.

A variável numSum é criada para armazenar o valor da soma dos números manipulados e isso é feito com o método reduce() que transforma o array em um único valor.

Por fim, a variável somatoria é criada para receber o resto do módulo de 10, a condição if faz se for idêntico a 0 retorna um alert dizendo 'Seu cartão é válido', caso contrário traz 'Seu cartão não é válido'.

Fim.
