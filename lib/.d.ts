declare module 'thegambler' {
  export class ClientError extends Error {
    badRequest(message?: string): {
      statusCode: number;
      message: string;
      type: string;
      stack: string | null
    };
    unauthorized(message?: string): {
      statusCode: number;
      message: string;
      type: string;
      stack: string | null;
    };
    paymentRequired(message?: string): {
      statusCode: number;
      message: string;
      type: string;
      stack: string | null;
    };
    forbidden(message?: string): {
      statusCode: number;
      message: string;
      type: string;
      stack: string | null;
    };
    notFound(message?: string): {
      statusCode: number;
      message: string;
      type: string;
      stack: string | null;
    };
    methodNotAllowed(message?: string): {
      statusCode: number;
      message: string;
      type: string;
      stack: string | null;
    };
    notAcceptable(message?: string): {
      statusCode: number;
      message: string;
      type: string;
      stack: string | null;
    };
    proxyAuthRequired(message?: string): {
      statusCode: number;
      message: string;
      type: string;
      stack: string | null;
    };
    requestTimeout(message?: string): {
      statusCode: number;
      message: string;
      type: string;
      stack: string | null;
    };
    conflict(message?: string): {
      statusCode: number;
      message: string;
      type: string;
      stack: string | null;
    };
    gone(message?: string): {
      statusCode: number;
      message: string;
      type: string;
      stack: string | null;
    };
    lengthRequired(message?: string): {
      statusCode: number;
      message: string;
      type: string;
      stack: string | null;
    };
    preconditionFailed(message?: string): {
      statusCode: number;
      message: string;
      type: string;
      stack: string | null;
    };
    payloadTooLarge(message?: string): {
      statusCode: number;
      message: string;
      type: string;
      stack: string | null;
    };
    uriTooLong(message?: string): {
      statusCode: number;
      message: string;
      type: string;
      stack: string | null;
    };
    unsupportedMediaType(message?: string): {
      statusCode: number;
      message: string;
      type: string;
      stack: string | null;
    };
    rangeNotSatisfiable(message?: string): {
      statusCode: number;
      message: string;
      type: string;
      stack: string | null;
    };
    expectationFailed(message?: string): {
      statusCode: number;
      message: string;
      type: string;
      stack: string | null;
    };
    iAmATeapot(message?: string): {
      statusCode: number;
      message: string;
      type: string;
      stack: string | null;
    };
    misdirectedRequest(message?: string): {
      statusCode: number;
      message: string;
      type: string;
      stack: string | null;
    };
    unprocessableEntity(message?: string): {
      statusCode: number;
      message: string;
      type: string;
      stack: string | null;
    };
    locked(message?: string): {
      statusCode: number;
      message: string;
      type: string;
      stack: string | null;
    };
    failedDependency(message?: string): {
      statusCode: number;
      message: string;
      type: string;
      stack: string | null;
    };
    upgradeRequired(message?: string): {
      statusCode: number;
      message: string;
      type: string;
      stack: string | null;
    };
    preconditionRequired(message?: string): {
      statusCode: number;
      message: string;
      type: string;
      stack: string | null;
    };
    tooManyRequests(message?: string): {
      statusCode: number;
      message: string;
      type: string;
      stack: string | null;
    };
    requestHeaderFieldsTooLarge(message?: string): {
      statusCode: number;
      message: string;
      type: string;
      stack: string | null;
    };
    unavailableForLegalReasons(message?: string): {
      statusCode: number;
      message: string;
      type: string;
      stack: string | null;
    };
  }

  export class ServerError extends Error {
    internalServerError(message?: string): {
      statusCode: number;
      message: string;
      type: string;
      stack: string | null;
    };
    notImplemented(message?: string): {
      statusCode: number;
      message: string;
      type: string;
      stack: string | null;
    };
    badGateway(message?: string): {
      statusCode: number;
      message: string;
      type: string;
      stack: string | null;
    };
    serviceUnavailable(message?: string): {
      statusCode: number;
      message: string;
      type: string;
      stack: string | null;
    };
    gatewayTimeout(message?: string): {
      statusCode: number;
      message: string;
      type: string;
      stack: string | null;
    };
    httpVersionNotSupported(message?: string): {
      statusCode: number;
      message: string;
      type: string;
      stack: string | null;
    };
    variantAlsoNegotiates(message?: string): {
      statusCode: number;
      message: string;
      type: string;
      stack: string | null;
    };
    insufficientStorage(message?: string): {
      statusCode: number;
      message: string;
      type: string;
      stack: string | null;
    };
    loopDetected(message?: string): {
      statusCode: number;
      message: string;
      type: string;
      stack: string | null;
    };
    notExtended(message?: string): {
      statusCode: number;
      message: string;
      type: string;
      stack: string | null;
    };
    networkAuthenticationRequired(message?: string): {
      statusCode: number;
      message: string;
      type: string;
      stack: string | null;
    };
  }
}