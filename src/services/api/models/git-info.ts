// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const gitInfo = z.object({
  domain: z.string().optional(),
  repository: z.string().optional(),
  organization: z.string().optional(),
  schemaFolder: z.string().optional(),
  collectionFolder: z.string().optional(),
});

/**
 * Information about the API's Git repository integration.
 * @typedef  {GitInfo} gitInfo - Information about the API's Git repository integration. - Information about the API's Git repository integration.
 * @property {string} - The domain at which the Git repository is hosted.
 * @property {string} - The repository's name.
 * @property {string} - The organization that owns the repository.
 * @property {string} - The API definition's repository folder location.
 * @property {string} - The API definition's collection repository folder location.
 */
export type GitInfo = z.infer<typeof gitInfo>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const gitInfoResponse = z
  .object({
    domain: z.string().optional(),
    repository: z.string().optional(),
    organization: z.string().optional(),
    schemaFolder: z.string().optional(),
    collectionFolder: z.string().optional(),
  })
  .transform((data) => ({
    domain: data['domain'],
    repository: data['repository'],
    organization: data['organization'],
    schemaFolder: data['schemaFolder'],
    collectionFolder: data['collectionFolder'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const gitInfoRequest = z
  .object({
    domain: z.string().nullish(),
    repository: z.string().nullish(),
    organization: z.string().nullish(),
    schemaFolder: z.string().nullish(),
    collectionFolder: z.string().nullish(),
  })
  .transform((data) => ({
    domain: data['domain'],
    repository: data['repository'],
    organization: data['organization'],
    schemaFolder: data['schemaFolder'],
    collectionFolder: data['collectionFolder'],
  }));
