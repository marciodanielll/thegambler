
# The Gambler 🃏🃏🃏
---
## Motivação
O objetivo do The Gambler é fornecer uma solução simples para gerar objetos de erro em APIs RESTful construídas em Node.js. 

Ele oferece duas classes, a ``ClientError`` e a ``ServerError``, cada uma com métodos para gerar objetos de erro personalizados.

---
## Como instalar
```sh
$ npm install thegambler
```

----
## Métodos à disposição

<details>
  <summary><strong>Classe ClientError 🐞</strong></summary>

- badRequest
- paymentRequired
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

const clientError = new ClientError();
const serverError = new ServerError();

console.log(clienteError.badRequest('Custom message'));
/*
{
  statusCode: 400,
  message: 'Custom message',
  type: 'Bad Request',
  stack: 'Error\n' +
    '    at Object.<anonymous> (/Users/md/Desktop/teste/index.js:3:21)\n' +
    '    at Module._compile (node:internal/modules/cjs/loader:1105:14)\n' +
    ....
 }
*/

console.log(serverError.internalServerError('Custom message'));
/*
{
  statusCode: 500,
  message: 'Custom message',
  type: 'Internal Server Error',
  stack: 'Error\n' +
    '    at Object.<anonymous> (/Users/md/Desktop/teste/index.js:4:21)\n' +
    '    at Module._compile (node:internal/modules/cjs/loader:1105:14)\n' +
}
*/

/* Ou */

console.log(clienteError.badRequest());
/*
{
  statusCode: 400,
  message: 'Bad Request',
  type: 'Bad Request',
  stack: 'Error\n' +
    '    at Object.<anonymous> (/Users/md/Desktop/teste/index.js:3:21)\n' +
    '    at Module._compile (node:internal/modules/cjs/loader:1105:14)\n' +
...
}
*/
```

Todos os métodos de ambas classes retornam um objeto de erro com a estrutura a seguir:

| key | type | descrição|
|------------|--------------------------------------------|-----------------------------------------------------------------------------------------------|
| statusCode | number| O código de resposta que será enviado ao cliente, indicando o status da requisição.|
| message | string | A mensagem que será incluída no corpo da resposta, fornecendo informações sobre o erro.|
| type | string | Identifica o tipo de erro, facilitando o rastreamento de problemas através do gerenciamento de logs. |
| stack | string | É a pilha de chamadas de função que conduziu ao erro, permitindo a investigação detalhada do problema através do gerenciamento de logs. |


---

## Considerando uma API criada com o Express
### Exemplo de implementação na camada de Serviço ```(Service)```
```javascript
const { ClientError } = require('thegambler');
const { userModel } = require('../models');
const { generateToken } = require('../auth');

const login = ({ email, password }) => {
  const clientError = new ClientError();

  const user = userModel.getByEmail(email);
  
  if( user === null || password !== user.password)) {
    throw clientError.badRequest('Invalid Email or Password');
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

### Exemplo de uso com TypeScript

```typescript
import { NextFunction, Request, Response } from 'express';
import httpStatusCode from 'http-status-codes';
import { ClientError, ServerError } from 'thegambler';
import SaleService from '../../core/services/sale.service';
import {
  ISaleItemsResponse,
  ISaleForRequest,
  ISaleController,
} from '../../types/sales.type';

const { log } = console;

export default class SaleController implements ISaleController {
  private readonly saleService: SaleService;

  private readonly clientError: ClientError;

  private readonly serverError: ServerError;

  constructor() {
    this.saleService = new SaleService();
    this.clientError = new ClientError();
    this.serverError = new ServerError();
  }

  async getSaleById(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;

    try {
      const sales: ISaleItemsResponse[] | null = await this
      .saleService.getSaleById(Number(id));

      if (sales === null) {
        return next(this.clientError.notFound('Sale not found'));
      }

      return res.status(httpStatusCode.OK).json(sales);
    } catch (error) {
      log(error);

      return next(this.serverError.internalServerError());
    }
  }
```
----
  Se você encontrar algum ```erro``` ou ```bug``` no código, por favor, nos ajude abrindo uma [issue](https://github.com/marciodanielll/thegambler/issues).

  Se desejar contribuir com o projeto, sinta-se à vontade para enviar uma pull request com sugestões de melhorias e novas funcionalidades.


 ### Mantenedores
  - [Daniel (M.D.)](https://www.linkedin.com/in/marciodanielll/)  
  - [Marcley Rosa](https://www.linkedin.com/in/marcley-rosa-8169a6105/) </br>
  - [Henrique Baeta](https://www.linkedin.com/in/henriquebaetaleite/)

----
