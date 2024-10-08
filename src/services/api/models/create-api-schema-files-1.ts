// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { filesRoot, filesRootRequest, filesRootResponse } from './files-root';

/**
 * The shape of the model inside the application code - what the users use
 */
export const createApiSchemaFiles1 = z.lazy(() => {
  return z.object({
    path: z.string().optional(),
    root: filesRoot.optional(),
    content: z.string().optional(),
  });
});

/**
 *
 * @typedef  {CreateApiSchemaFiles1} createApiSchemaFiles1
 * @property {string} - The schema's file path.
 * @property {FilesRoot} - Information about the schema's root file.
 * @property {string} - The schema file's stringified contents.
 */
export type CreateApiSchemaFiles1 = z.infer<typeof createApiSchemaFiles1>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const createApiSchemaFiles1Response = z.lazy(() => {
  return z
    .object({
      path: z.string().optional(),
      root: filesRootResponse.optional(),
      content: z.string().optional(),
    })
    .transform((data) => ({
      path: data['path'],
      root: data['root'],
      content: data['content'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const createApiSchemaFiles1Request = z.lazy(() => {
  return z
    .object({ path: z.string().nullish(), root: filesRootRequest.nullish(), content: z.string().nullish() })
    .transform((data) => ({
      path: data['path'],
      root: data['root'],
      content: data['content'],
    }));
});
