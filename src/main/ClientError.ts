import IClientError from '../interfaces/IClientError';
import IResponse from '../interfaces/IResponse';

export default class ClientError extends Error implements IClientError {
  badRequest(message?: string | undefined) {
    return {
      statusCode: 400,
      message: message || 'Bad Request',
      type: 'Bad Request',
      stack: this.stack,
    };
  }

  unauthorized(message?: string | undefined) {
    return {
      statusCode: 401,
      message: message || 'Unauthorized',
      type: 'Unauthorized',
      stack: this.stack,
    };
  }

  paymentRequired(message?: string | undefined) {
    return {
      statusCode: 402,
      message: message || 'Payment Required',
      type: 'Payment Required',
      stack: this.stack,
    };
  }

  forbidden(message?: string | undefined) {
    return {
      statusCode: 403,
      message: message || 'Forbidden',
      type: 'Forbidden',
      stack: this.stack,
    };
  }

  notFound(message?: string | undefined) {
    return {
      statusCode: 404,
      message: message || 'Not Found',
      type: 'Not Found',
      stack: this.stack,
    };
  }

  methodNotAllowed(message?: string | undefined) {
    return {
      statusCode: 405,
      message: message || 'Method Not Allowed',
      type: 'Method Not Allowed',
      stack: this.stack,
    };
  }

  notAcceptable(message?: string | undefined) {
    return {
      statusCode: 406,
      message: message || 'Not Acceptable',
      type: 'Not Acceptable',
      stack: this.stack,
    };
  }

  proxyAuthRequired(message?: string | undefined) {
    return {
      statusCode: 407,
      message: message || 'Proxy Authentication Required',
      type: 'Proxy Authentication Required',
      stack: this.stack,
    };
  }

  requestTimeout(message?: string | undefined) {
    return {
      statusCode: 408,
      message: message || 'Request Timeout',
      type: 'Request Timeout',
      stack: this.stack,
    };
  }

  conflict(message?: string | undefined) {
    return {
      statusCode: 409,
      message: message || 'Conflict',
      type: 'Conflict',
      stack: this.stack,
    };
  }

  gone(message?: string | undefined) {
    return {
      statusCode: 410,
      message: message || 'Gone',
      type: 'Gone',
      stack: this.stack,
    };
  }

  lengthRequired(message?: string | undefined) {
    return {
      statusCode: 411,
      message: message || 'Length Required',
      type: 'Length Required',
      stack: this.stack,
    };
  }

  preconditionFailed(message?: string | undefined) {
    return {
      statusCode: 412,
      message: message || 'Precondition Failed',
      type: 'Precondition Failed',
      stack: this.stack,
    };
  }

  payloadTooLarge(message?: string | undefined) {
    return {
      statusCode: 413,
      message: message || 'Payload Too Large',
      type: 'Payload Too Large',
      stack: this.stack,
    };
  }

  uriTooLong(message?: string | undefined) {
    return {
      statusCode: 414,
      message: message || 'URI Too Long',
      type: 'URI Too Long',
      stack: this.stack,
    };
  }

  unsupportedMediaType(message?: string | undefined) {
    return {
      statusCode: 415,
      message: message || 'Unsupported Media Type',
      type: 'Unsupported Media Type',
      stack: this.stack,
    };
  }

  rangeNotSatisfiable(message?: string | undefined) {
    return {
      statusCode: 416,
      message: message || 'Range Not Satisfiable',
      type: 'Range Not Satisfiable',
      stack: this.stack,
    };
  }

  expectationFailed(message?: string | undefined) {
    return {
      statusCode: 417,
      message: message || 'Expectation Failed',
      type: 'Expectation Failed',
      stack: this.stack,
    };
  }

  iAmATeapot(message?: string | undefined) {
    return {
      statusCode: 418,
      message: message || 'I\'m a teapot',
      type: 'I\'m a teapot',
      stack: this.stack,
    };
  }

  misdirectedRequest(message?: string | undefined) {
    return {
      statusCode: 421,
      message: message || 'Misdirected Request',
      type: 'Misdirected Request',
      stack: this.stack,
    };
  }

  unprocessableEntity(message?: string | undefined) {
    return {
      statusCode: 422,
      message: message || 'Unprocessable Entity',
      type: 'Unprocessable Entity',
      stack: this.stack,
    };
  }

  locked(message?: string | undefined) {
    return {
      statusCode: 423,
      message: message || 'Locked',
      type: 'Locked',
      stack: this.stack,
    };
  }

  failedDependency(message?: string | undefined) {
    return {
      statusCode: 424,
      message: message || 'Failed Dependency',
      type: 'Failed Dependency',
      stack: this.stack,
    };
  }

  tooEarly(message?: string | undefined): IResponse {
    return {
      statusCode: 425,
      message: message || 'Too Early',
      type: 'Too Early',
      stack: this.stack,
    };
  }

  upgradeRequired(message?: string | undefined) {
    return {
      statusCode: 426,
      message: message || 'Upgrade Required',
      type: 'Upgrade Required',
      stack: this.stack,
    };
  }

  preconditionRequired(message?: string | undefined) {
    return {
      statusCode: 428,
      message: message || 'Precondition Required',
      type: 'Precondition Required',
      stack: this.stack,
    };
  }

  tooManyRequests(message?: string | undefined) {
    return {
      statusCode: 429,
      message: message || 'Too Many Requests',
      type: 'Too Many Requests',
      stack: this.stack,
    };
  }

  requestHeaderFieldsTooLarge(message?: string | undefined) {
    return {
      statusCode: 431,
      message: message || 'Request Header Fields Too Large',
      type: 'Request Header Fields Too Large',
      stack: this.stack,
    };
  }

  unavailableForLegalReasons(message?: string | undefined) {
    return {
      statusCode: 451,
      message: message || 'Unavailable For Legal Reasons',
      type: 'Unavailable For Legal Reasons',
      stack: this.stack,
    };
  }
}
