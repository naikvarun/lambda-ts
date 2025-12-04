import pino from 'pino';
import {randomUUID} from "node:crypto";

const invocationId = randomUUID()

export const logger = pino(
  {
    level: 'info',
    formatters: {
      level: (label) => {
        return {level: label.toUpperCase(), invocationId};
      },
      log: (object) => {
        return {...object, invocationId};
      }
    },
    timestamp: pino.stdTimeFunctions.isoTime
  }
);
