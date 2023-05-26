# AeroTour JavaScript Style Guide()

1. Não deve haver espaçamento dentro dos colchetes de uma matriz.
```javascript
//certo
const array = [1, 2, 3];
const matrix = [[1, 2], [3, 4]];

//errado
const array = [ 1, 2, 3 ];
const matrix = [[ 1, 2 ], [ 3, 4 ]];
```

2. As variáveis devem ser definidas no escopo mais próximo possível, em vez de serem levantadas para o topo do escopo da função.
```javascript
//certo
function example() {
  if (true) {
    let x = 10;
    console.log(x);
  }
}

//errado
function example() {
  if (true) {
    var x = 10;
    console.log(x);
  }
}
```

3. Colocação de chaves (chaves de bloco) para o estilo "1tbs" (abertura de chaves na mesma linha e fechamento em uma nova linha).
```javascript
//certo
if (condition) {
  console.log('True');
} else {
  console.log('False');
}

//errado
if (condition)
{
  console.log('True');
}
else {
  console.log('False');
}
```

4. As variáveis e propriedades sejam escritas no estilo camelCase (começando com letra minúscula e as palavras subsequentes em maiúscula).
```javascript
//certo
const primeiroNome = 'João';
const totalItens = 5;

//errado
const primeiro_nome = 'João';
const total_itens = 5;
```

5. Não deve haver espaçamento dentro dos colchetes em propriedades computadas.
```javascript
//certo
const obj = { prop: 'value' };
const dynamicProp = obj['prop'];

//errado
const obj = { prop: 'value' };
const dynamicProp = obj ['prop'];
```

6. Uso de chaves em blocos de instruções, mesmo quando elas são opcionais.
```javascript
//certo
if (condition) {
  console.log('True');
}

//errado
if (condition)
  console.log('True');
```

7. Linha em branco no final de cada arquivo.
```javascript
//certo
console.log('Olá Mundo');

//errado
console.log('Olá Mundo');  

```

8. Uso estrito do operador de igualdade (===) em vez do operador de igualdade solto (==), exceto para casos específicos onde o uso solto é justificado.
```javascript
//certo
if (x === 10) {
  console.log('Igualdade');
}

//errado
if (x == 10) {
  console.log('Igualdade');
}
```
9. Profundidade máxima permitida para aninhamento de blocos em 3.
```javascript
//certo
if (condition1) {
  if (condition2) {
    if (condition3) {
      console.log('chegamos ao maximo');
    }
  }
}

//errado
if (condition1) {
  if (condition2) {
    if (condition3) {
      if (condition4) {
        console.log('ultrapassamos o maximo');
      }
    }
  }
}
```

10. Comprimento máximo de uma linha de código em 80 caracteres.
```javascript
//certo
const longString =
  'Esta é uma String longa que respeita o limite de 80 caracteres.';

//errado
const longString = 'Esta é uma String longa demais e que não respeita o limite de 80 caracteres do Guia de Estilo Aerotour';
```

11. Número máximo de declarações permitidas em uma função em 15.
```javascript
//certo
function exemplo() {
  console.log('declaracao 1');
  //...
  console.log('declaracao 15');
}

//errado
function exemplo() {
  console.log('declaracao 1');
  //...
  console.log('declaracao 16');
}
```

12. Construtores de classes e funções sejam chamados com a primeira letra em maiúscula.
```javascript
//certo
class MyClass {
  constructor() {
    this.prop = 10;
  }
}
const myInstance = new MyClass();

//errado
class myClass {
  constructor() {
    this.prop = 10;
  }
}
const myInstance = new myClass();
```

13. Proibido a extensão de objetos nativos do JavaScript.
```javascript
//certo
if (!Array.prototype.customMethod) {
  Array.prototype.customMethod = function() {
    // Custom implementation
  };
}

//errado
Array.prototype.customMethod = function() {
  // Custom implementation
};
```

14. Proibido o uso misto de espaços e tabulações para indentação.
```javascript
//certo
function example() {
  console.log('Identação tabulada');
  if (true) {
    console.log('Identação espaçada');
  }
}

//errado
function example() {
  console.log('Identação tabulada');
  if (true) {
      console.log('Identação espaçada');
  }
}
```

15. Proibido espaços em branco no final de uma linha.
```javascript
//certo
const variable = 'value';

//errado
const variable = 'value';  
```

16. Evitar a declarações de variáveis e não usá-las.
```javascript
//certo
function example() {
  const usedVar = 'Used variable';
  console.log(usedVar);
}

//errado
function example() {
  const unusedVar = 'Unused variable';
}
```

17. Não usar variáveis ou funções antes de sua declaração.
```javascript
//certo
function example() {
  console.log('depois da definição');
}
example();

//errado
console.log('antes da definição');
function example() {
  example();
}
```

18. Não deve haver espaçamento dentro das chaves em objetos.
```javascript
//certo
const obj = {key: 'value'};
const { prop } = obj;

//errado
const obj = { key: 'value' };
const {prop} = obj;
```

19. Uso de aspas simples para strings.
```javascript
//certo
const singleQuotes = 'Olá Mundo';

//errado
const singleQuotes = "Olá Mundo";
```

20. Usar ponto e vírgula no final de cada instrução.
```javascript
//certo
const var1 = 'Declaração 1';
const var2 = 'Declaração 2';

//errado
const var1 = 'Declaração 1'
const var2 = 'Declaração 2'

```

21. Fazer uso de espaçamento antes e depois de palavras-chave.
```javascript
//certo
if (condicao) {
  console.log('Condição é verdadeira');
} else {
  console.log('Condição é falsa');
}

//errado
if(condicao) {
  console.log('Condição é verdadeira');
} else{
  console.log('Condição é falsa');
}

```

22. Fazer uso de espaçamento ao redor de operadores unários, como o operador de negação (!) ou o operador de incremento/decremento (++/--).
```javascript
//certo
const x = -5;
const y = ++x;

//errado
const x = - 5;
const y = ++ x;

```
