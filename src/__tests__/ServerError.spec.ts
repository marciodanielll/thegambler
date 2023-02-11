import ServerError from '../lib/ServerError';

const NewServerError = new ServerError();

describe('ServerError', () => {
  it('Should return a internal server error', () => {
    const case1 = NewServerError.internalServerError();
    expect(case1).toEqual({
      message: 'Internal Server Error',
      statusCode: 500,
      type: 'Internal Server Error',
      stack: NewServerError.stack,
    });

    const case2 = NewServerError.internalServerError('Custom message');
    expect(case2).toEqual({
      message: 'Custom message',
      statusCode: 500,
      type: 'Internal Server Error',
      stack: NewServerError.stack,
    });
  });

  it('Should return a not implemented error', () => {
    const case1 = NewServerError.notImplemented();
    expect(case1).toEqual({
      message: 'Not Implemented',
      statusCode: 501,
      type: 'Not Implemented',
      stack: NewServerError.stack,
    });

    const case2 = NewServerError.notImplemented('Custom message');
    expect(case2).toEqual({
      message: 'Custom message',
      statusCode: 501,
      type: 'Not Implemented',
      stack: NewServerError.stack,
    });
  });

  it('Should return a bad gateway error', () => {
    const case1 = NewServerError.badGateway();
    expect(case1).toEqual({
      message: 'Bad Gateway',
      statusCode: 502,
      type: 'Bad Gateway',
      stack: NewServerError.stack,
    });

    const case2 = NewServerError.badGateway('Custom message');
    expect(case2).toEqual({
      message: 'Custom message',
      statusCode: 502,
      type: 'Bad Gateway',
      stack: NewServerError.stack,
    });
  });

  it('Should return a service unavailable error', () => {
    const case1 = NewServerError.serviceUnavailable();
    expect(case1).toEqual({
      message: 'Service Unavailable',
      statusCode: 503,
      type: 'Service Unavailable',
      stack: NewServerError.stack,
    });

    const case2 = NewServerError.serviceUnavailable('Custom message');
    expect(case2).toEqual({
      message: 'Custom message',
      statusCode: 503,
      type: 'Service Unavailable',
      stack: NewServerError.stack,
    });
  });

  it('Should return a gateway timeout error', () => {
    const case1 = NewServerError.gatewayTimeout();
    expect(case1).toEqual({
      message: 'Gateway Timeout',
      statusCode: 504,
      type: 'Gateway Timeout',
      stack: NewServerError.stack,
    });

    const case2 = NewServerError.gatewayTimeout('Custom message');
    expect(case2).toEqual({
      message: 'Custom message',
      statusCode: 504,
      type: 'Gateway Timeout',
      stack: NewServerError.stack,
    });
  });

  it('Should return a http version not supported error', () => {
    const case1 = NewServerError.httpVersionNotSupported();
    expect(case1).toEqual({
      message: 'HTTP Version Not Supported',
      statusCode: 505,
      type: 'HTTP Version Not Supported',
      stack: NewServerError.stack,
    });

    const case2 = NewServerError.httpVersionNotSupported('Custom message');
    expect(case2).toEqual({
      message: 'Custom message',
      statusCode: 505,
      type: 'HTTP Version Not Supported',
      stack: NewServerError.stack,
    });
  });

  it('Should return a variant also negotiates error', () => {
    const case1 = NewServerError.variantAlsoNegotiates();
    expect(case1).toEqual({
      message: 'Variant Also Negotiates',
      statusCode: 506,
      type: 'Variant Also Negotiates',
      stack: NewServerError.stack,
    });

    const case2 = NewServerError.variantAlsoNegotiates('Custom message');
    expect(case2).toEqual({
      message: 'Custom message',
      statusCode: 506,
      type: 'Variant Also Negotiates',
      stack: NewServerError.stack,
    });
  });

  it('Should return a insufficient storage error', () => {
    const case1 = NewServerError.insufficientStorage();
    expect(case1).toEqual({
      message: 'Insufficient Storage',
      statusCode: 507,
      type: 'Insufficient Storage',
      stack: NewServerError.stack,
    });

    const case2 = NewServerError.insufficientStorage('Custom message');
    expect(case2).toEqual({
      message: 'Custom message',
      statusCode: 507,
      type: 'Insufficient Storage',
      stack: NewServerError.stack,
    });
  });

  it('Should return a loop detected error', () => {
    const case1 = NewServerError.loopDetected();
    expect(case1).toEqual({
      message: 'Loop Detected',
      statusCode: 508,
      type: 'Loop Detected',
      stack: NewServerError.stack,
    });

    const case2 = NewServerError.loopDetected('Custom message');
    expect(case2).toEqual({
      message: 'Custom message',
      statusCode: 508,
      type: 'Loop Detected',
      stack: NewServerError.stack,
    });
  });

  it('Should return a not extended error', () => {
    const case1 = NewServerError.notExtended();
    expect(case1).toEqual({
      message: 'Not Extended',
      statusCode: 510,
      type: 'Not Extended',
      stack: NewServerError.stack,
    });

    const case2 = NewServerError.notExtended('Custom message');
    expect(case2).toEqual({
      message: 'Custom message',
      statusCode: 510,
      type: 'Not Extended',
      stack: NewServerError.stack,
    });
  });

  it('Should return a network authentication required error', () => {
    const case1 = NewServerError.networkAuthenticationRequired();
    expect(case1).toEqual({
      message: 'Network Authentication Required',
      statusCode: 511,
      type: 'Network Authentication Required',
      stack: NewServerError.stack,
    });

    const case2 = NewServerError.networkAuthenticationRequired('Custom message');
    expect(case2).toEqual({
      message: 'Custom message',
      statusCode: 511,
      type: 'Network Authentication Required',
      stack: NewServerError.stack,
    });
  });
});
