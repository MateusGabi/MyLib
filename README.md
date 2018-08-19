<!-- @format -->

[![Build Status](https://travis-ci.org/MateusGabi/MyLib.svg?branch=master)](https://travis-ci.org/MateusGabi/MyLib)

# Minha Lib

Obrigado por acessar esse repositório. Ele é basicamente um espaço no qual eu escrevo algumas funções em JavaScript de conforme for surgindo as necessidades. Eu sei que existem várias outras bibliotecas enormes e muito melhores, como RamdaJS e Lodash. Mas, você sabe né? Nada é tão bom quanto escrever o nosso próprio código.

## Contribuições

Você é livre para contribuir, claro, E é fácil! Basta fazer um _fork_ do projeto, codar e fazer um PR.

## Instalação

Fácil!

`npm install --save MateusGabi/MyLib`

ou

`yarn add https://github.com/MateusGabi/MyLib`

## Documentação

Existe várias funções que podem ser utilizadas.

### Uso

```javascript
import L from 'mylibjs'; // ou
import { mul, div } from 'mylibjs'; // ou

const L = require('mylibjs'); // ou
const { mul, div } = require('mylibjs');
```

### Funções

#### Div

Operação matemática de divisão.

```javascript
const { div } = require('mylibjs');

const a = 10;
const b = 5;

const x = div(b)(a); // a/b = 2

console.log(x); // 2

// other example
const half = div(2);
const y = [1, 2, 3, 4, 5].map(half); // [0.5, 1, 1.5, 2, 2.5]
```

#### Group By

Agrupa um array de objetos por um atributo. Recebe um nome de um atributo e um array de objetos. Retorna um objeto.

```javascript
const { groupBy } = require('mylibjs');

const users = [
  {
    age: 12,
    name: 'Alice',
    gender: 'female',
  },
  {
    age: 11,
    name: 'Bob',
    gender: 'male',
  },
  {
    age: 12,
    name: 'Charles',
    gender: 'male',
  },
  {
    age: 13,
    name: 'Diana',
    gender: 'female',
  },
  {
    age: 13,
    name: 'Eddard',
  },
];

const result = groupBy('gender')(users);

console.log('Result', result);
// {
//   female: [
//     { age: 12, name: 'Alice', gender: 'female' },
//     { age: 13, name: 'Diana', gender: 'female' }
//   ],
//   male: [
//     { age: 11, name: 'Bob', gender: 'male' },
//     { age: 12, name: 'Charles', gender: 'male' }
//   ],
//   undefined: [
//     { age: 13, name: 'Eddard' }
//   ]
// }
```

#### Has

Verifica se existe um atributo em um objeto. Recebe um nome de um atributo e um objeto. Retorna `boolean`.

```javascript
const { has } = require('mylibjs');

has('name')(null); // false
has('name')({}); // false
has('name')({ name: undefined }); // false
has('name')({ name: null }); // false
has('name')({ name: 'Alice' }); // true
has('age')({ age: 12 }); // true
has('age')({ age: 0 }); // true
```

#### Mul

Operação matemática de multiplicação.

```javascript
const { mul } = require('mylibjs');

const a = 10;
const b = 5;

const x = mul(b)(a); // a*b = 50

console.log(x); // 50

// other example
const double = mul(2);
const y = [1, 2, 3, 4, 5].map(double); // [2, 4, 6, 8, 10]
```

#### Pipe

Essa é a função mais legal. Ela recebe um objeto e um array de funções e aplica as funções nesse objeto de forma sequencial. Funciona semelhante a uma linha de produção de uma fábrica. Retorna um objeto.

```javascript
const { pipe, sum, mul } = require('mylibjs');

const val = pipe(
  10,
  sum(2), // 12
  mul(3) // 36
);

console.log(val); // 36
```

#### Sub

Operação matemática de subtração.

```javascript
const { sub } = require('mylibjs');

const a = 10;
const b = 5;

const x = sub(b)(a); // a - b = 5

console.log(x); // 5
```

#### Sum

Operação matemática de subtração.

```javascript
const { sum } = require('mylibjs');

const a = 10;
const b = 5;

const x = sub(b)(a); // a + b = 15

console.log(x); // 15
```
