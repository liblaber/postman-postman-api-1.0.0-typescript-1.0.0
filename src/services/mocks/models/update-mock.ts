// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { updateMockMock, updateMockMockRequest, updateMockMockResponse } from './update-mock-mock';

/**
 * The shape of the model inside the application code - what the users use
 */
export const updateMock = z.lazy(() => {
  return z.object({
    mock: updateMockMock.optional(),
  });
});

/**
 *
 * @typedef  {UpdateMock} updateMock
 * @property {UpdateMockMock}
 */
export type UpdateMock = z.infer<typeof updateMock>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const updateMockResponse = z.lazy(() => {
  return z
    .object({
      mock: updateMockMockResponse.optional(),
    })
    .transform((data) => ({
      mock: data['mock'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const updateMockRequest = z.lazy(() => {
  return z.object({ mock: updateMockMockRequest.nullish() }).transform((data) => ({
    mock: data['mock'],
  }));
});
