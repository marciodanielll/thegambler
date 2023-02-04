import ClientError from '../src/main/ClientError';

const NewClientError = new ClientError();

describe('Test ClientError', () => {
  it('Should return a bad request error', () => {
    const case1 = NewClientError.badRequest();
    expect(case1).toEqual({
      message: 'Bad Request',
      statusCode: 400,
      type: 'Bad Request',
      stack: NewClientError.stack,
    });
    const case2 = NewClientError.badRequest('Custom message');
    expect(case2).toEqual({
      message: 'Custom message',
      statusCode: 400,
      type: 'Bad Request',
      stack: NewClientError.stack,
    });
  });

  it('Should return a unauthorized error', () => {
    const case1 = NewClientError.unauthorized();
    expect(case1).toEqual({
      message: 'Unauthorized',
      statusCode: 401,
      type: 'Unauthorized',
      stack: NewClientError.stack,
    });
    const case2 = NewClientError.unauthorized('Custom message');
    expect(case2).toEqual({
      message: 'Custom message',
      statusCode: 401,
      type: 'Unauthorized',
      stack: NewClientError.stack,
    });
  });

  it('Should return a payment required error', () => {
    const case1 = NewClientError.paymentRequired();
    expect(case1).toEqual({
      message: 'Payment Required',
      statusCode: 402,
      type: 'Payment Required',
      stack: NewClientError.stack,
    });
    const case2 = NewClientError.paymentRequired('Custom message');
    expect(case2).toEqual({
      message: 'Custom message',
      statusCode: 402,
      type: 'Payment Required',
      stack: NewClientError.stack,
    });
  });

  it('Should return a forbidden error', () => {
    const case1 = NewClientError.forbidden();
    expect(case1).toEqual({
      message: 'Forbidden',
      statusCode: 403,
      type: 'Forbidden',
      stack: NewClientError.stack,
    });
    const case2 = NewClientError.forbidden('Custom message');
    expect(case2).toEqual({
      message: 'Custom message',
      statusCode: 403,
      type: 'Forbidden',
      stack: NewClientError.stack,
    });
  });

  it('Should return a not found error', () => {
    const case1 = NewClientError.notFound();
    expect(case1).toEqual({
      message: 'Not Found',
      statusCode: 404,
      type: 'Not Found',
      stack: NewClientError.stack,
    });
    const case2 = NewClientError.notFound('Custom message');
    expect(case2).toEqual({
      message: 'Custom message',
      statusCode: 404,
      type: 'Not Found',
      stack: NewClientError.stack,
    });
  });

  it('Should return a method not allowed error', () => {
    const case1 = NewClientError.methodNotAllowed();
    expect(case1).toEqual({
      message: 'Method Not Allowed',
      statusCode: 405,
      type: 'Method Not Allowed',
      stack: NewClientError.stack,
    });
    const case2 = NewClientError.methodNotAllowed('Custom message');
    expect(case2).toEqual({
      message: 'Custom message',
      statusCode: 405,
      type: 'Method Not Allowed',
      stack: NewClientError.stack,
    });
  });

  it('Should return a not acceptable error', () => {
    const case1 = NewClientError.notAcceptable();
    expect(case1).toEqual({
      message: 'Not Acceptable',
      statusCode: 406,
      type: 'Not Acceptable',
      stack: NewClientError.stack,
    });
    const case2 = NewClientError.notAcceptable('Custom message');
    expect(case2).toEqual({
      message: 'Custom message',
      statusCode: 406,
      type: 'Not Acceptable',
      stack: NewClientError.stack,
    });
  });

  it('Should return a proxy authentication required error', () => {
    const case1 = NewClientError.proxyAuthRequired();
    expect(case1).toEqual({
      message: 'Proxy Authentication Required',
      statusCode: 407,
      type: 'Proxy Authentication Required',
      stack: NewClientError.stack,
    });
    const case2 = NewClientError.proxyAuthRequired('Custom message');
    expect(case2).toEqual({
      message: 'Custom message',
      statusCode: 407,
      type: 'Proxy Authentication Required',
      stack: NewClientError.stack,
    });
  });

  it('Should return a request timeout error', () => {
    const case1 = NewClientError.requestTimeout();
    expect(case1).toEqual({
      message: 'Request Timeout',
      statusCode: 408,
      type: 'Request Timeout',
      stack: NewClientError.stack,
    });
    const case2 = NewClientError.requestTimeout('Custom message');
    expect(case2).toEqual({
      message: 'Custom message',
      statusCode: 408,
      type: 'Request Timeout',
      stack: NewClientError.stack,
    });
  });

  it('Should return a conflict error', () => {
    const case1 = NewClientError.conflict();
    expect(case1).toEqual({
      message: 'Conflict',
      statusCode: 409,
      type: 'Conflict',
      stack: NewClientError.stack,
    });
    const case2 = NewClientError.conflict('Custom message');
    expect(case2).toEqual({
      message: 'Custom message',
      statusCode: 409,
      type: 'Conflict',
      stack: NewClientError.stack,
    });
  });

  it('Should return a gone error', () => {
    const case1 = NewClientError.gone();
    expect(case1).toEqual({
      message: 'Gone',
      statusCode: 410,
      type: 'Gone',
      stack: NewClientError.stack,
    });
    const case2 = NewClientError.gone('Custom message');
    expect(case2).toEqual({
      message: 'Custom message',
      statusCode: 410,
      type: 'Gone',
      stack: NewClientError.stack,
    });
  });

  it('Should return a length required error', () => {
    const case1 = NewClientError.lengthRequired();
    expect(case1).toEqual({
      message: 'Length Required',
      statusCode: 411,
      type: 'Length Required',
      stack: NewClientError.stack,
    });
    const case2 = NewClientError.lengthRequired('Custom message');
    expect(case2).toEqual({
      message: 'Custom message',
      statusCode: 411,
      type: 'Length Required',
      stack: NewClientError.stack,
    });
  });

  it('Should return a precondition failed error', () => {
    const case1 = NewClientError.preconditionFailed();
    expect(case1).toEqual({
      message: 'Precondition Failed',
      statusCode: 412,
      type: 'Precondition Failed',
      stack: NewClientError.stack,
    });
    const case2 = NewClientError.preconditionFailed('Custom message');
    expect(case2).toEqual({
      message: 'Custom message',
      statusCode: 412,
      type: 'Precondition Failed',
      stack: NewClientError.stack,
    });
  });

  it('Should return a payload too large error', () => {
    const case1 = NewClientError.payloadTooLarge();
    expect(case1).toEqual({
      message: 'Payload Too Large',
      statusCode: 413,
      type: 'Payload Too Large',
      stack: NewClientError.stack,
    });
    const case2 = NewClientError.payloadTooLarge('Custom message');
    expect(case2).toEqual({
      message: 'Custom message',
      statusCode: 413,
      type: 'Payload Too Large',
      stack: NewClientError.stack,
    });
  });

  it('Should return a uri too long error', () => {
    const case1 = NewClientError.uriTooLong();
    expect(case1).toEqual({
      message: 'URI Too Long',
      statusCode: 414,
      type: 'URI Too Long',
      stack: NewClientError.stack,
    });
    const case2 = NewClientError.uriTooLong('Custom message');
    expect(case2).toEqual({
      message: 'Custom message',
      statusCode: 414,
      type: 'URI Too Long',
      stack: NewClientError.stack,
    });
  });

  it('Should return a unsupported media type error', () => {
    const case1 = NewClientError.unsupportedMediaType();
    expect(case1).toEqual({
      message: 'Unsupported Media Type',
      statusCode: 415,
      type: 'Unsupported Media Type',
      stack: NewClientError.stack,
    });
    const case2 = NewClientError.unsupportedMediaType('Custom message');
    expect(case2).toEqual({
      message: 'Custom message',
      statusCode: 415,
      type: 'Unsupported Media Type',
      stack: NewClientError.stack,
    });
  });

  it('Should return a range not satisfiable error', () => {
    const case1 = NewClientError.rangeNotSatisfiable();
    expect(case1).toEqual({
      message: 'Range Not Satisfiable',
      statusCode: 416,
      type: 'Range Not Satisfiable',
      stack: NewClientError.stack,
    });
    const case2 = NewClientError.rangeNotSatisfiable('Custom message');
    expect(case2).toEqual({
      message: 'Custom message',
      statusCode: 416,
      type: 'Range Not Satisfiable',
      stack: NewClientError.stack,
    });
  });

  it('Should return a expectation failed error', () => {
    const case1 = NewClientError.expectationFailed();
    expect(case1).toEqual({
      message: 'Expectation Failed',
      statusCode: 417,
      type: 'Expectation Failed',
      stack: NewClientError.stack,
    });
    const case2 = NewClientError.expectationFailed('Custom message');
    expect(case2).toEqual({
      message: 'Custom message',
      statusCode: 417,
      type: 'Expectation Failed',
      stack: NewClientError.stack,
    });
  });

  it('Should return a im a teapot error', () => {
    const case1 = NewClientError.iAmATeapot();
    expect(case1).toEqual({
      message: 'I\'m a teapot',
      statusCode: 418,
      type: 'I\'m a teapot',
      stack: NewClientError.stack,
    });
    const case2 = NewClientError.iAmATeapot('Custom message');
    expect(case2).toEqual({
      message: 'Custom message',
      statusCode: 418,
      type: 'I\'m a teapot',
      stack: NewClientError.stack,
    });
  });

  it('Should return a misdirected request error', () => {
    const case1 = NewClientError.misdirectedRequest();
    expect(case1).toEqual({
      message: 'Misdirected Request',
      statusCode: 421,
      type: 'Misdirected Request',
      stack: NewClientError.stack,
    });
    const case2 = NewClientError.misdirectedRequest('Custom message');
    expect(case2).toEqual({
      message: 'Custom message',
      statusCode: 421,
      type: 'Misdirected Request',
      stack: NewClientError.stack,
    });
  });

  it('Should return a unprocessable entity error', () => {
    const case1 = NewClientError.unprocessableEntity();
    expect(case1).toEqual({
      message: 'Unprocessable Entity',
      statusCode: 422,
      type: 'Unprocessable Entity',
      stack: NewClientError.stack,
    });
    const case2 = NewClientError.unprocessableEntity('Custom message');
    expect(case2).toEqual({
      message: 'Custom message',
      statusCode: 422,
      type: 'Unprocessable Entity',
      stack: NewClientError.stack,
    });
  });

  it('Should return a locked error', () => {
    const case1 = NewClientError.locked();
    expect(case1).toEqual({
      message: 'Locked',
      statusCode: 423,
      type: 'Locked',
      stack: NewClientError.stack,
    });
    const case2 = NewClientError.locked('Custom message');
    expect(case2).toEqual({
      message: 'Custom message',
      statusCode: 423,
      type: 'Locked',
      stack: NewClientError.stack,
    });
  });

  it('Should return a failed dependency error', () => {
    const case1 = NewClientError.failedDependency();
    expect(case1).toEqual({
      message: 'Failed Dependency',
      statusCode: 424,
      type: 'Failed Dependency',
      stack: NewClientError.stack,
    });
    const case2 = NewClientError.failedDependency('Custom message');
    expect(case2).toEqual({
      message: 'Custom message',
      statusCode: 424,
      type: 'Failed Dependency',
      stack: NewClientError.stack,
    });
  });

  it('Should return a too early error', () => {
    const case1 = NewClientError.tooEarly();
    expect(case1).toEqual({
      message: 'Too Early',
      statusCode: 425,
      type: 'Too Early',
      stack: NewClientError.stack,
    });
    const case2 = NewClientError.tooEarly('Custom message');
    expect(case2).toEqual({
      message: 'Custom message',
      statusCode: 425,
      type: 'Too Early',
      stack: NewClientError.stack,
    });
  });
  it('Should return a upgrade required error', () => {
    const case1 = NewClientError.upgradeRequired();
    expect(case1).toEqual({
      message: 'Upgrade Required',
      statusCode: 426,
      type: 'Upgrade Required',
      stack: NewClientError.stack,
    });
    const case2 = NewClientError.upgradeRequired('Custom message');
    expect(case2).toEqual({
      message: 'Custom message',
      statusCode: 426,
      type: 'Upgrade Required',
      stack: NewClientError.stack,
    });
  });

  it('Should return a precondition required error', () => {
    const case1 = NewClientError.preconditionRequired();
    expect(case1).toEqual({
      message: 'Precondition Required',
      statusCode: 428,
      type: 'Precondition Required',
      stack: NewClientError.stack,
    });
    const case2 = NewClientError.preconditionRequired('Custom message');
    expect(case2).toEqual({
      message: 'Custom message',
      statusCode: 428,
      type: 'Precondition Required',
      stack: NewClientError.stack,
    });
  });

  it('Should return a too many requests error', () => {
    const case1 = NewClientError.tooManyRequests();
    expect(case1).toEqual({
      message: 'Too Many Requests',
      statusCode: 429,
      type: 'Too Many Requests',
      stack: NewClientError.stack,
    });
    const case2 = NewClientError.tooManyRequests('Custom message');
    expect(case2).toEqual({
      message: 'Custom message',
      statusCode: 429,
      type: 'Too Many Requests',
      stack: NewClientError.stack,
    });
  });

  it('Should return a request header fields too large error', () => {
    const case1 = NewClientError.requestHeaderFieldsTooLarge();
    expect(case1).toEqual({
      message: 'Request Header Fields Too Large',
      statusCode: 431,
      type: 'Request Header Fields Too Large',
      stack: NewClientError.stack,
    });
    const case2 = NewClientError.requestHeaderFieldsTooLarge('Custom message');
    expect(case2).toEqual({
      message: 'Custom message',
      statusCode: 431,
      type: 'Request Header Fields Too Large',
      stack: NewClientError.stack,
    });
  });

  it('Should return a unavailable for legal reasons error', () => {
    const case1 = NewClientError.unavailableForLegalReasons();
    expect(case1).toEqual({
      message: 'Unavailable For Legal Reasons',
      statusCode: 451,
      type: 'Unavailable For Legal Reasons',
      stack: NewClientError.stack,
    });
    const case2 = NewClientError.unavailableForLegalReasons('Custom message');
    expect(case2).toEqual({
      message: 'Custom message',
      statusCode: 451,
      type: 'Unavailable For Legal Reasons',
      stack: NewClientError.stack,
    });
  });
});
