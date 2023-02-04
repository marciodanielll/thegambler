# The Gambler 🎲
Em construção 👷🏻‍♂️ 🛠️ 🚧 
---
## Motivação

O objetivo do The Gambler é fornecer uma solução eficiente e precisa para lidar com exceções em aplicativos RESTful. 

Ele oferece duas classes, a ``ClientError`` e a ``ServerError``, cada uma com métodos para gerar exceções personalizadas para diferentes tipos de erros.

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
## Como usar

```javascript
const { ClientError } = require('thegambler');

const NewClientError = new ClientError();

throw NewClienteError.badRequest('Custom message');
// Ou
throw NewCliente.badRequest();
// Quando não for informado um argumento, a mensagem padrão será o nome do método, neste caso, 'Bad Request'
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
- ***statusCode***: o código de resposta que será enviado ao cliente, indicando o status da requisição;
- ***message***: a mensagem que será incluída no corpo da resposta, fornecendo informações sobre o erro;
- ***type****: identifica o tipo de erro, facilitando o rastreamento de problemas através do gerenciamento de logs;
- ***stack***: é a pilha de chamadas de função que conduziu ao erro, permitindo a investigação detalhada do problema através do gerenciamento de logs.
---
### Exemplo de implementação na camada de Serviço ```(Service)```
```javascript
const login = ({ email, password }) => {
  const user = Model.getByEmail(email);
  
  if( user === null || password !== user.password)) {
    throw new ClientError.badRequest('Invalid Email or Password');
  }

  return { token: generateToken({email, id: user.id }) } ;
};
```
### Exemplo de gerenciamento de exceções no Controller
```javascript
const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const { token } = Service.login({ email, password });
    res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};
```
### Exemplo de manipulação do objeto de erro em um Middleware de Tratamento de Erro
```javascript
const handlerErrors = (err, _req, res, _next) => {
  console.error(err);
  const statusCode = err.statusCode || 500;
  const message =  statusCode !== 500 ? err.message : 'Internal Server Error';
  res.status(statusCode).json({ message });
};
```

----
  Se você encontrar algum ```erro``` ou ```bug``` no código, por favor, nos ajude abrindo uma [issue](https://github.com/marciodanielll/thegambler/issues).

  Se desejar contribuir com o projeto, sinta-se à vontade para enviar uma pull request com sugestões de melhorias e novas funcionalidades.


  Mantenedor [M.D.](https://www.linkedin.com/in/marciodanielll/)  
  Apoiador [Marcley Rosa](https://www.linkedin.com/in/marcley-rosa-8169a6105/)

----