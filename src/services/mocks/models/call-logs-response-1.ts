// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { responseHeaders, responseHeadersRequest, responseHeadersResponse } from './response-headers';
import { responseBody, responseBodyRequest, responseBodyResponse } from './response-body';

/**
 * The shape of the model inside the application code - what the users use
 */
export const callLogsResponse1 = z.object({
  type_: z.string().optional(),
  statusCode: z.number().optional(),
  headers: responseHeaders.optional(),
  body: responseBody.optional(),
});

/**
 * The server response's response information.
 * @typedef  {CallLogsResponse1} callLogsResponse1 - The server response's response information. - The server response's response information.
 * @property {string} - The type of response.
 * @property {number} - The response's status code.
 * @property {ResponseHeaders} - The response's headers.
 * @property {ResponseBody} - The response's body information.
 */
export type CallLogsResponse1 = z.infer<typeof callLogsResponse1>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const callLogsResponse1Response = z
  .object({
    type: z.string().optional(),
    statusCode: z.number().optional(),
    headers: responseHeadersResponse.optional(),
    body: responseBodyResponse.optional(),
  })
  .transform((data) => ({
    type_: data['type'],
    statusCode: data['statusCode'],
    headers: data['headers'],
    body: data['body'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const callLogsResponse1Request = z
  .object({
    type_: z.string().nullish(),
    statusCode: z.number().nullish(),
    headers: responseHeadersRequest.nullish(),
    body: responseBodyRequest.nullish(),
  })
  .transform((data) => ({
    type: data['type_'],
    statusCode: data['statusCode'],
    headers: data['headers'],
    body: data['body'],
  }));
