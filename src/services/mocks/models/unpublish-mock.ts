// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { unpublishMockMock, unpublishMockMockRequest, unpublishMockMockResponse } from './unpublish-mock-mock';

/**
 * The shape of the model inside the application code - what the users use
 */
export const unpublishMock = z.object({
  mock: unpublishMockMock.optional(),
});

/**
 *
 * @typedef  {UnpublishMock} unpublishMock
 * @property {UnpublishMockMock}
 */
export type UnpublishMock = z.infer<typeof unpublishMock>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const unpublishMockResponse = z
  .object({
    mock: unpublishMockMockResponse.optional(),
  })
  .transform((data) => ({
    mock: data['mock'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const unpublishMockRequest = z.object({ mock: unpublishMockMockRequest.nullish() }).transform((data) => ({
  mock: data['mock'],
}));
