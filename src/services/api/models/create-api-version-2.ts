// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import {
  createApiVersion2Schemas,
  createApiVersion2SchemasRequest,
  createApiVersion2SchemasResponse,
} from './create-api-version-2-schemas';
import {
  createApiVersion2Collections,
  createApiVersion2CollectionsRequest,
  createApiVersion2CollectionsResponse,
} from './create-api-version-2-collections';

/**
 * The shape of the model inside the application code - what the users use
 */
export const createApiVersion2 = z.lazy(() => {
  return z.object({
    name: z.string(),
    branch: z.string(),
    schemas: z.array(createApiVersion2Schemas),
    collections: z.array(createApiVersion2Collections),
    releaseNotes: z.string().optional(),
  });
});

/**
 * Information about the API version.
 * @typedef  {CreateApiVersion2} createApiVersion2 - Information about the API version. - Information about the API version.
 * @property {string} - The version's name.
 * @property {string} - The branch ID.
 * @property {CreateApiVersion2Schemas[]} - A list of the version's schemas.
 * @property {CreateApiVersion2Collections[]} - A list of the version's collections.
 * @property {string} - Information about the API version release. For example, changelog notes.
 */
export type CreateApiVersion2 = z.infer<typeof createApiVersion2>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const createApiVersion2Response = z.lazy(() => {
  return z
    .object({
      name: z.string(),
      branch: z.string(),
      schemas: z.array(createApiVersion2SchemasResponse),
      collections: z.array(createApiVersion2CollectionsResponse),
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
export const createApiVersion2Request = z.lazy(() => {
  return z
    .object({
      name: z.string().nullish(),
      branch: z.string().nullish(),
      schemas: z.array(createApiVersion2SchemasRequest).nullish(),
      collections: z.array(createApiVersion2CollectionsRequest).nullish(),
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
