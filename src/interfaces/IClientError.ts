import IResponse from './IResponse';

export default interface IClientError {
  badRequest(message?: string): IResponse;
  unauthorized(message?: string): IResponse;
  forbidden(message?: string): IResponse;
  notFound(message?: string): IResponse;
  notAcceptable(message?: string): IResponse;
  proxyAuthRequired(message?: string): IResponse;
  requestTimeout(message?: string): IResponse;
  conflict(message?: string): IResponse;
  gone(message?: string): IResponse;
  lengthRequired(message?: string): IResponse;
  preconditionFailed(message?: string): IResponse;
  payloadTooLarge(message?: string): IResponse;
  uriTooLong(message?: string): IResponse;
  unsupportedMediaType(message?: string): IResponse;
  rangeNotSatisfiable(message?: string): IResponse;
  expectationFailed(message?: string): IResponse;
  iAmATeapot(message?: string): IResponse;
  misdirectedRequest(message?: string): IResponse;
  unprocessableEntity(message?: string): IResponse;
  locked(message?: string): IResponse;
  failedDependency(message?: string): IResponse;
  tooEarly(message?: string): IResponse;
  upgradeRequired(message?: string): IResponse;
  preconditionRequired(message?: string): IResponse;
  tooManyRequests(message?: string): IResponse;
  requestHeaderFieldsTooLarge(message?: string): IResponse;
  unavailableForLegalReasons(message?: string): IResponse;
}
