export default interface IResponse {
  message: string;
  statusCode: number;
  type: string;
  stack: string | undefined;
}
