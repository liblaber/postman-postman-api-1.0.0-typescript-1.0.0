// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import {
  createUpdateApiSchemaFileRoot,
  createUpdateApiSchemaFileRootRequest,
  createUpdateApiSchemaFileRootResponse,
} from './create-update-api-schema-file-root';

/**
 * The shape of the model inside the application code - what the users use
 */
export const createUpdateApiSchemaFileRequest = z.lazy(() => {
  return z.object({
    name: z.string().optional(),
    root: createUpdateApiSchemaFileRoot.optional(),
    content: z.string().optional(),
  });
});

/**
 * Information about schema file.
 * @typedef  {CreateUpdateApiSchemaFileRequest} createUpdateApiSchemaFileRequest - Information about schema file. - Information about schema file.
 * @property {string} - The schema file's name.
 * @property {CreateUpdateApiSchemaFileRoot} - Information about the schema's root file. This tag only applies to protobuf specifications.
 * @property {string} - The schema file's content.
 */
export type CreateUpdateApiSchemaFileRequest = z.infer<typeof createUpdateApiSchemaFileRequest>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const createUpdateApiSchemaFileRequestResponse = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      root: createUpdateApiSchemaFileRootResponse.optional(),
      content: z.string().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      root: data['root'],
      content: data['content'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const createUpdateApiSchemaFileRequestRequest = z.lazy(() => {
  return z
    .object({
      name: z.string().nullish(),
      root: createUpdateApiSchemaFileRootRequest.nullish(),
      content: z.string().nullish(),
    })
    .transform((data) => ({
      name: data['name'],
      root: data['root'],
      content: data['content'],
    }));
});
