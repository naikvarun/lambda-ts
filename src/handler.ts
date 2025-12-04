import {Context,Handler} from "aws-lambda";
import {logger} from "./logger";

export const app: Handler = async (event: any, context: Context) => {
  logger.info(event);
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello World!',
    }),
  };
}
