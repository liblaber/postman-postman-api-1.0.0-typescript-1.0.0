// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const deleteMockServerResponseHeaders: any = z.lazy(() => {
  return z.object({
    key: z.string().optional(),
    value: z.string().optional(),
  });
});

/**
 *
 * @typedef  {DeleteMockServerResponseHeaders} deleteMockServerResponseHeaders
 * @property {string} - The request header's key value.
 * @property {string} - The request header's value.
 */
export type DeleteMockServerResponseHeaders = z.infer<typeof deleteMockServerResponseHeaders>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const deleteMockServerResponseHeadersResponse: any = z.lazy(() => {
  return z
    .object({
      key: z.string().optional(),
      value: z.string().optional(),
    })
    .transform((data) => ({
      key: data['key'],
      value: data['value'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const deleteMockServerResponseHeadersRequest: any = z.lazy(() => {
  return z.object({ key: z.string().nullish(), value: z.string().nullish() }).transform((data) => ({
    key: data['key'],
    value: data['value'],
  }));
});
