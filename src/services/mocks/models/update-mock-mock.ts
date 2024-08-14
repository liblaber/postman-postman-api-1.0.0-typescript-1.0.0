// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { mockConfig2, mockConfig2Request, mockConfig2Response } from './mock-config-2';

/**
 * The shape of the model inside the application code - what the users use
 */
export const updateMockMock = z.lazy(() => {
  return z.object({
    name: z.string().optional(),
    environment: z.string().optional(),
    description: z.string().optional(),
    private: z.boolean().optional(),
    versionTag: z.string().optional(),
    config: mockConfig2.optional(),
  });
});

/**
 *
 * @typedef  {UpdateMockMock} updateMockMock
 * @property {string} - The mock server's name.
 * @property {string} - The associated environment's unique ID.
 * @property {string} - The mock server's description.
 * @property {boolean} - If true, the mock server is set private. By default, mock servers are public and can receive requests from anyone and anywhere.
 * @property {string} - The API's version tag ID.
 * @property {MockConfig2} - The mock server's configuration settings.
 */
export type UpdateMockMock = z.infer<typeof updateMockMock>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const updateMockMockResponse = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      environment: z.string().optional(),
      description: z.string().optional(),
      private: z.boolean().optional(),
      versionTag: z.string().optional(),
      config: mockConfig2Response.optional(),
    })
    .transform((data) => ({
      name: data['name'],
      environment: data['environment'],
      description: data['description'],
      private: data['private'],
      versionTag: data['versionTag'],
      config: data['config'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const updateMockMockRequest = z.lazy(() => {
  return z
    .object({
      name: z.string().nullish(),
      environment: z.string().nullish(),
      description: z.string().nullish(),
      private: z.boolean().nullish(),
      versionTag: z.string().nullish(),
      config: mockConfig2Request.nullish(),
    })
    .transform((data) => ({
      name: data['name'],
      environment: data['environment'],
      description: data['description'],
      private: data['private'],
      versionTag: data['versionTag'],
      config: data['config'],
    }));
});
