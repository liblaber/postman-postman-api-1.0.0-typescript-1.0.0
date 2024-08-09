// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { getMocksMocks, getMocksMocksRequest, getMocksMocksResponse } from './get-mocks-mocks';

/**
 * The shape of the model inside the application code - what the users use
 */
export const getMocks = z.lazy(() => {
  return z.object({
    mocks: z.array(getMocksMocks).optional(),
  });
});

/**
 *
 * @typedef  {GetMocks} getMocks
 * @property {GetMocksMocks[]}
 */
export type GetMocks = z.infer<typeof getMocks>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const getMocksResponse = z.lazy(() => {
  return z
    .object({
      mocks: z.array(getMocksMocksResponse).optional(),
    })
    .transform((data) => ({
      mocks: data['mocks'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const getMocksRequest = z.lazy(() => {
  return z.object({ mocks: z.array(getMocksMocksRequest).nullish() }).transform((data) => ({
    mocks: data['mocks'],
  }));
});
