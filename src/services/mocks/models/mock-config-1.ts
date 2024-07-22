// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const mockConfig1: any = z.lazy(() => {
  return z.object({
    headers: z.array(z.string()).optional(),
    matchBody: z.boolean().optional(),
    matchQueryParams: z.boolean().optional(),
    matchWildcards: z.boolean().optional(),
    serverResponseId: z.string().optional().nullable(),
  });
});

/**
 * Information about the mock server's configuration.
 * @typedef  {MockConfig1} mockConfig1 - Information about the mock server's configuration. - Information about the mock server's configuration.
 * @property {string[]} - A list of the mock server's headers.
 * @property {boolean} - If true, match the request body.
 * @property {boolean} - If true, match query parameters.
 * @property {boolean} - If true, use wildcard variable matching.
 * @property {string} - The ID of mock server's default response for requests. All calls to the mock server will return the defined response.
 */
export type MockConfig1 = z.infer<typeof mockConfig1>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const mockConfig1Response: any = z.lazy(() => {
  return z
    .object({
      headers: z.array(z.string()).optional(),
      matchBody: z.boolean().optional(),
      matchQueryParams: z.boolean().optional(),
      matchWildcards: z.boolean().optional(),
      serverResponseId: z.string().optional().nullable(),
    })
    .transform((data) => ({
      headers: data['headers'],
      matchBody: data['matchBody'],
      matchQueryParams: data['matchQueryParams'],
      matchWildcards: data['matchWildcards'],
      serverResponseId: data['serverResponseId'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const mockConfig1Request: any = z.lazy(() => {
  return z
    .object({
      headers: z.array(z.string()).nullish(),
      matchBody: z.boolean().nullish(),
      matchQueryParams: z.boolean().nullish(),
      matchWildcards: z.boolean().nullish(),
      serverResponseId: z.string().nullish(),
    })
    .transform((data) => ({
      headers: data['headers'],
      matchBody: data['matchBody'],
      matchQueryParams: data['matchQueryParams'],
      matchWildcards: data['matchWildcards'],
      serverResponseId: data['serverResponseId'],
    }));
});
