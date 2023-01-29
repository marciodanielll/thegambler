# The Gambler 🎲
Em construção 👷🏻‍♂️ 🛠️ 🚧 
---
## Motivação

O objetivo do The Gambler é fornecer uma solução eficiente e precisa para lidar com exceções em aplicativos RESTful. 

Ele oferece duas classes, a ``ClientError`` e a ``ServerError``, cada uma com métodos para gerar exceções personalizadas para diferentes tipos de erros HTTP, tanto os gerados pelo cliente quanto pelo próprio servidor.

---
## Como instalar
``npm install Loren Ipsum``

----
## Métodos à disposição

<details>
  <summary><strong>Classe Client Error 🐞</strong></summary>

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
  <summary><strong>Classe Server Error 🐞</strong></summary>

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


## Exemplos de uso
```javascript
import {ClientError } from 'thegambler'

const NewClientError = new ClientError();

throw NewClientError.bedRequest();

```
