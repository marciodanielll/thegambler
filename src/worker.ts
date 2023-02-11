import fs from 'fs/promises';
import path from 'path';

const worker = async () => {
  const clientErrorPath = path.resolve(__dirname, '..', 'dist', 'lib', 'ClientError.js');
  const serverErrorPath = path.resolve(__dirname, '..', 'dist', 'lib', 'ServerError.js');

  const clienteErrorContent = await fs.readFile(clientErrorPath, 'utf-8');
  const serverErrorContent = await fs.readFile(serverErrorPath, 'utf-8');

  const newContent = clienteErrorContent
    .replace('Object.defineProperty(exports, "__esModule", { value: true });', '')
    .replace('exports.default = ClientError;', 'module.exports = ClientError;');

  const newClientErrorPath = path.resolve(__dirname, '..', 'lib', 'ClientError.js');

  await fs.writeFile(newClientErrorPath, newContent, 'utf-8');

  const newContent2 = serverErrorContent
    .replace('Object.defineProperty(exports, "__esModule", { value: true });', '')
    .replace('exports.default = ServerError;', 'module.exports = ServerError;');

  const newServerErrorPath = path.resolve(__dirname, '..', 'lib', 'ServerError.js');

  await fs.writeFile(newServerErrorPath, newContent2, 'utf-8');
};

worker();
