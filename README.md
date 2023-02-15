
# The Gambler 🃏🃏🃏
---
## Motivação
O objetivo do The Gambler é fornecer uma solução simples para gerar objetos de erro em APIs RESTful construídas em Node.js. 

Ele oferece duas classes, a ``ClientError`` e a ``ServerError``, cada uma com métodos para gerar objetos de erro personalizados.

---
## Como instalar
``npm install thegambler``

----
## Métodos à disposição

<details>
  <summary><strong>Classe ClientError 🐞</strong></summary>

- badRequest
- unauthorized
- forbidden
- notFound
- notAcceptable
- proxyAuthRequired
- requestTimeout
- conflict
- gone
- lengthRequired
- preconditionFailed
- payloadTooLarge
- uriTooLong
- unsupportedMediaType
- rangeNotSatisfiable
- expectationFailed
- iAmATeapot
- misdirectedRequest
- unprocessableEntity
- locked
- failedDependency
- tooEarly
- upgradeRequired
- preconditionRequired
- tooManyRequests
- requestHeaderFieldsTooLarge
- unavailableForLegalReasons
</details>

<details>
  <summary><strong>Classe ServerError 🐞</strong></summary>

- internalServerError
- notImplemented
- badGateway
- serviceUnavailable
- gatewayTimeout
- httpVersionNotSupported
- variantAlsoNegotiates
- insufficientStorage
- loopDetected
- notExtended
- networkAuthenticationRequired
</details>

---
## Como manipulá-lo

```javascript
const { ClientError, ServerError } = require('thegambler');

const NewClientError = new ClientError();
const NewServerError = new ServerError();

console.log(NewClienteError.badRequest('Custom message'));
console.log(NewServerError.internalServerError('Custom message'));

// Ou
console.log(NewClienteError.badRequest());
/*
Quando não for informado um argumento, a mensagem padrão
   será o nome do método, neste caso, 'Bad Request'
*/
```

Todos os métodos de ambas classes retornam um objeto de erro com a estrutura a seguir:

```javascript
{
  statusCode: Number,
  message: String,
  type: String,
  stack: String,
};
```
- **statusCode**: o código de resposta que será enviado ao cliente, indicando o status da requisição;
- **message**: a mensagem que será incluída no corpo da resposta, fornecendo informações sobre o erro;
- **type**: identifica o tipo de erro, facilitando o rastreamento de problemas através do gerenciamento de logs;
- **stack**: é a pilha de chamadas de função que conduziu ao erro, permitindo a investigação detalhada do problema através do gerenciamento de logs.
---

## Considerando uma API criada com o Express
### Exemplo de implementação na camada de Serviço ```(Service)```
```javascript
const { ClientError } = require('thegambler');
const { userModel } = require('../models');
const { generateToken } = require('../auth');

const login = ({ email, password }) => {
  const NewClientError = new ClientError();

  const user = userModel.getByEmail(email);
  
  if( user === null || password !== user.password)) {
    throw NewClientError.badRequest('Invalid Email or Password');
  }

  return { token: generateToken({ email, id: user.id }) } ;
};
```
### Exemplo de gerenciamento de exceções no Controller
```javascript
const { userService } = require('../services');

const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const { token } = userService.login({ email, password });

    res.status(200).json({ token });
  } catch (error) {

    next(error);
  }
};
```
### Exemplo de manipulação do objeto de erro em um Middleware de Tratamento de Erro
```javascript
const handlerErrors = (err, _req, res, _next) => {
  console.log(err);

  const statusCode = err.statusCode || 500;

  const message = statusCode !== 500
    ? err.message
    : 'Internal Server Error';

  res.status(statusCode).json({ message });
};
```
----
  Se você encontrar algum ```erro``` ou ```bug``` no código, por favor, nos ajude abrindo uma [issue](https://github.com/marciodanielll/thegambler/issues).

  Se desejar contribuir com o projeto, sinta-se à vontade para enviar uma pull request com sugestões de melhorias e novas funcionalidades.

  Mantenedor [M.D.](https://www.linkedin.com/in/marciodanielll/)  
  Apoiador [Marcley Rosa](https://www.linkedin.com/in/marcley-rosa-8169a6105/)
  Apoiador [Henrique Baeta](https://www.linkedin.com/in/henriquebaetaleite/)
  
----
