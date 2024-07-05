// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { versionSchemas, versionSchemasRequest, versionSchemasResponse } from './version-schemas';
import { versionCollections, versionCollectionsRequest, versionCollectionsResponse } from './version-collections';

/**
 * The shape of the model inside the application code - what the users use
 */
export const version = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
  releaseNotes: z.string().optional(),
  schemas: z.array(versionSchemas).optional(),
  collections: z.array(versionCollections).optional(),
});

/**
 * Information about the API version.
 * @typedef  {Version} version - Information about the API version. - Information about the API version.
 * @property {string} - The version's ID.
 * @property {string} - The version's name.
 * @property {string} - The date and time at which the version was created.
 * @property {string} - The date and time at which the version was last updated.
 * @property {string} - The version's release notes.
 * @property {VersionSchemas[]}
 * @property {VersionCollections[]}
 */
export type Version = z.infer<typeof version>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const versionResponse = z
  .object({
    id: z.string().optional(),
    name: z.string().optional(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
    releaseNotes: z.string().optional(),
    schemas: z.array(versionSchemasResponse).optional(),
    collections: z.array(versionCollectionsResponse).optional(),
  })
  .transform((data) => ({
    id: data['id'],
    name: data['name'],
    createdAt: data['createdAt'],
    updatedAt: data['updatedAt'],
    releaseNotes: data['releaseNotes'],
    schemas: data['schemas'],
    collections: data['collections'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const versionRequest = z
  .object({
    id: z.string().nullish(),
    name: z.string().nullish(),
    createdAt: z.string().nullish(),
    updatedAt: z.string().nullish(),
    releaseNotes: z.string().nullish(),
    schemas: z.array(versionSchemasRequest).nullish(),
    collections: z.array(versionCollectionsRequest).nullish(),
  })
  .transform((data) => ({
    id: data['id'],
    name: data['name'],
    createdAt: data['createdAt'],
    updatedAt: data['updatedAt'],
    releaseNotes: data['releaseNotes'],
    schemas: data['schemas'],
    collections: data['collections'],
  }));
