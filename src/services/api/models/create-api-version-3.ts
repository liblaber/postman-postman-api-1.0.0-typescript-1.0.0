// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import {
  createApiVersion3Schemas,
  createApiVersion3SchemasRequest,
  createApiVersion3SchemasResponse,
} from './create-api-version-3-schemas';
import {
  createApiVersion3Collections,
  createApiVersion3CollectionsRequest,
  createApiVersion3CollectionsResponse,
} from './create-api-version-3-collections';

/**
 * The shape of the model inside the application code - what the users use
 */
export const createApiVersion3 = z.lazy(() => {
  return z.object({
    name: z.string(),
    branch: z.string(),
    schemas: z.array(createApiVersion3Schemas),
    collections: z.array(createApiVersion3Collections),
    releaseNotes: z.string().optional(),
  });
});

/**
 * Information about the API version.
 * @typedef  {CreateApiVersion3} createApiVersion3 - Information about the API version. - Information about the API version.
 * @property {string} - The version's name.
 * @property {string} - The branch ID.
 * @property {CreateApiVersion3Schemas[]} - A list of the version's schemas.
 * @property {CreateApiVersion3Collections[]} - A list of the version's collections.
 * @property {string} - Information about the API version release. For example, changelog notes.
 */
export type CreateApiVersion3 = z.infer<typeof createApiVersion3>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const createApiVersion3Response = z.lazy(() => {
  return z
    .object({
      name: z.string(),
      branch: z.string(),
      schemas: z.array(createApiVersion3SchemasResponse),
      collections: z.array(createApiVersion3CollectionsResponse),
      releaseNotes: z.string().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      branch: data['branch'],
      schemas: data['schemas'],
      collections: data['collections'],
      releaseNotes: data['releaseNotes'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const createApiVersion3Request = z.lazy(() => {
  return z
    .object({
      name: z.string().nullish(),
      branch: z.string().nullish(),
      schemas: z.array(createApiVersion3SchemasRequest).nullish(),
      collections: z.array(createApiVersion3CollectionsRequest).nullish(),
      releaseNotes: z.string().nullish(),
    })
    .transform((data) => ({
      name: data['name'],
      branch: data['branch'],
      schemas: data['schemas'],
      collections: data['collections'],
      releaseNotes: data['releaseNotes'],
    }));
});
