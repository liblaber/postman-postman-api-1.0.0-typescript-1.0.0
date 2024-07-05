// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { mockConfig1, mockConfig1Request, mockConfig1Response } from './mock-config-1';

/**
 * The shape of the model inside the application code - what the users use
 */
export const getMockMock = z.object({
  id: z.string().optional(),
  owner: z.string().optional(),
  uid: z.string().optional(),
  collection: z.string().optional(),
  mockUrl: z.string().optional(),
  name: z.string().optional(),
  config: mockConfig1.optional(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
  isPublic: z.boolean().optional(),
  deactivated: z.boolean().optional(),
  environment: z.string().optional(),
});

/**
 *
 * @typedef  {GetMockMock} getMockMock
 * @property {string} - The mock server's ID.
 * @property {string} - The ID of mock server's owner.
 * @property {string} - The mock server's unique ID.
 * @property {string} - The unique ID of the mock's associated collection.
 * @property {string} - The mock server URL.
 * @property {string} - The mock server's name.
 * @property {MockConfig1} - Information about the mock server's configuration.
 * @property {string} - The date and time at which the mock server was created.
 * @property {string} - The date and time at which the mock server was last updated.
 * @property {boolean} - If true, the mock server is public and visible to all users. This field does not indicate the mock server's access control status.
 * @property {boolean} - If true, the mock server is not active. Mock servers deactivate when a linked collection or environment is deleted.
 * @property {string} - The mock server's associated environment ID.
 */
export type GetMockMock = z.infer<typeof getMockMock>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const getMockMockResponse = z
  .object({
    id: z.string().optional(),
    owner: z.string().optional(),
    uid: z.string().optional(),
    collection: z.string().optional(),
    mockUrl: z.string().optional(),
    name: z.string().optional(),
    config: mockConfig1Response.optional(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
    isPublic: z.boolean().optional(),
    deactivated: z.boolean().optional(),
    environment: z.string().optional(),
  })
  .transform((data) => ({
    id: data['id'],
    owner: data['owner'],
    uid: data['uid'],
    collection: data['collection'],
    mockUrl: data['mockUrl'],
    name: data['name'],
    config: data['config'],
    createdAt: data['createdAt'],
    updatedAt: data['updatedAt'],
    isPublic: data['isPublic'],
    deactivated: data['deactivated'],
    environment: data['environment'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const getMockMockRequest = z
  .object({
    id: z.string().nullish(),
    owner: z.string().nullish(),
    uid: z.string().nullish(),
    collection: z.string().nullish(),
    mockUrl: z.string().nullish(),
    name: z.string().nullish(),
    config: mockConfig1Request.nullish(),
    createdAt: z.string().nullish(),
    updatedAt: z.string().nullish(),
    isPublic: z.boolean().nullish(),
    deactivated: z.boolean().nullish(),
    environment: z.string().nullish(),
  })
  .transform((data) => ({
    id: data['id'],
    owner: data['owner'],
    uid: data['uid'],
    collection: data['collection'],
    mockUrl: data['mockUrl'],
    name: data['name'],
    config: data['config'],
    createdAt: data['createdAt'],
    updatedAt: data['updatedAt'],
    isPublic: data['isPublic'],
    deactivated: data['deactivated'],
    environment: data['environment'],
  }));
