// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import {
  createMockServerResponseServerResponse,
  createMockServerResponseServerResponseRequest,
  createMockServerResponseServerResponseResponse,
} from './create-mock-server-response-server-response';

/**
 * The shape of the model inside the application code - what the users use
 */
export const createMockServerResponse = z.lazy(() => {
  return z.object({
    serverResponse: createMockServerResponseServerResponse.optional(),
  });
});

/**
 *
 * @typedef  {CreateMockServerResponse} createMockServerResponse
 * @property {CreateMockServerResponseServerResponse}
 */
export type CreateMockServerResponse = z.infer<typeof createMockServerResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const createMockServerResponseResponse = z.lazy(() => {
  return z
    .object({
      serverResponse: createMockServerResponseServerResponseResponse.optional(),
    })
    .transform((data) => ({
      serverResponse: data['serverResponse'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const createMockServerResponseRequest = z.lazy(() => {
  return z.object({ serverResponse: createMockServerResponseServerResponseRequest.nullish() }).transform((data) => ({
    serverResponse: data['serverResponse'],
  }));
});
