// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const createMockMock = z.object({
  collection: z.string(),
  environment: z.string().optional(),
  name: z.string().optional(),
  private_: z.boolean().optional(),
});

/**
 *
 * @typedef  {CreateMockMock} createMockMock
 * @property {string} - The unique ID of the mock's associated collection.
 * @property {string} - The unique ID of the mock's associated environment.
 * @property {string} - The mock server's name.
 * @property {boolean} - If true, the mock server is set private. By default, mock servers are public and can receive requests from anyone and anywhere.
 */
export type CreateMockMock = z.infer<typeof createMockMock>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const createMockMockResponse = z
  .object({
    collection: z.string(),
    environment: z.string().optional(),
    name: z.string().optional(),
    private: z.boolean().optional(),
  })
  .transform((data) => ({
    collection: data['collection'],
    environment: data['environment'],
    name: data['name'],
    private_: data['private'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const createMockMockRequest = z
  .object({
    collection: z.string().nullish(),
    environment: z.string().nullish(),
    name: z.string().nullish(),
    private_: z.boolean().nullish(),
  })
  .transform((data) => ({
    collection: data['collection'],
    environment: data['environment'],
    name: data['name'],
    private: data['private_'],
  }));
