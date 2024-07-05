// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { publishMockMock, publishMockMockRequest, publishMockMockResponse } from './publish-mock-mock';

/**
 * The shape of the model inside the application code - what the users use
 */
export const publishMock = z.object({
  mock: publishMockMock.optional(),
});

/**
 *
 * @typedef  {PublishMock} publishMock
 * @property {PublishMockMock}
 */
export type PublishMock = z.infer<typeof publishMock>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const publishMockResponse = z
  .object({
    mock: publishMockMockResponse.optional(),
  })
  .transform((data) => ({
    mock: data['mock'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const publishMockRequest = z.object({ mock: publishMockMockRequest.nullish() }).transform((data) => ({
  mock: data['mock'],
}));
