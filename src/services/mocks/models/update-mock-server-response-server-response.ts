// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import {
  serverResponseHeaders2,
  serverResponseHeaders2Request,
  serverResponseHeaders2Response,
} from './server-response-headers-2';

/**
 * The shape of the model inside the application code - what the users use
 */
export const updateMockServerResponseServerResponse: any = z.lazy(() => {
  return z.object({
    name: z.string().optional(),
    statusCode: z.number().optional(),
    headers: z.array(serverResponseHeaders2).optional(),
    language: z.string().optional().nullable(),
    body: z.string().optional(),
  });
});

/**
 *
 * @typedef  {UpdateMockServerResponseServerResponse} updateMockServerResponseServerResponse
 * @property {string} - The server response's name.
 * @property {number} - The server response's 5xx HTTP response code. This property only accepts 5xx values.
 * @property {ServerResponseHeaders2[]} - The server response's request headers, such as Content-Type, Accept, encoding, and other information.
 * @property {ServerResponseLanguage2} - The server response's body language type.
 * @property {string} - The server response's body that returns when calling the mock server.
 */
export type UpdateMockServerResponseServerResponse = z.infer<typeof updateMockServerResponseServerResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const updateMockServerResponseServerResponseResponse: any = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      statusCode: z.number().optional(),
      headers: z.array(serverResponseHeaders2Response).optional(),
      language: z.string().optional().nullable(),
      body: z.string().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      statusCode: data['statusCode'],
      headers: data['headers'],
      language: data['language'],
      body: data['body'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const updateMockServerResponseServerResponseRequest: any = z.lazy(() => {
  return z
    .object({
      name: z.string().nullish(),
      statusCode: z.number().nullish(),
      headers: z.array(serverResponseHeaders2Request).nullish(),
      language: z.string().nullish(),
      body: z.string().nullish(),
    })
    .transform((data) => ({
      name: data['name'],
      statusCode: data['statusCode'],
      headers: data['headers'],
      language: data['language'],
      body: data['body'],
    }));
});
