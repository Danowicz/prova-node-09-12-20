import * as dotenv from 'dotenv';

dotenv.config();

const SERVER_PORT = process.env.SERVER_PORT || 3000;
const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const API_NAME = process.env.API_NAME;
const API_VERSION = process.env.API_VERSION;

const config = {
  server: {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
  },
  api: {
    name: API_NAME,
    version: API_VERSION
  }
}

export default config;