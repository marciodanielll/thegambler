import IResponse from './IResponse';

export default interface IServerError {
  internalServerError(message?: string): IResponse;
  notImplemented(message?: string): IResponse;
  badGateway(message?: string): IResponse;
  serviceUnavailable(message?: string): IResponse;
  gatewayTimeout(message?: string): IResponse;
  httpVersionNotSupported(message?: string): IResponse;
  variantAlsoNegotiates(message?: string): IResponse;
  insufficientStorage(message?: string): IResponse;
  loopDetected(message?: string): IResponse;
  notExtended(message?: string): IResponse;
  networkAuthenticationRequired(message?: string): IResponse;
}
