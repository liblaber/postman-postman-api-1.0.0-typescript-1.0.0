// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import {
  createApiSchemaFiles1,
  createApiSchemaFiles1Request,
  createApiSchemaFiles1Response,
} from './create-api-schema-files-1';

/**
 * The shape of the model inside the application code - what the users use
 */
export const createApiSchemaRequest = z.lazy(() => {
  return z.object({
    type: z.string(),
    files: z.array(createApiSchemaFiles1),
  });
});

/**
 * Information about the API schema.
 * @typedef  {CreateApiSchemaRequest} createApiSchemaRequest - Information about the API schema. - Information about the API schema.
 * @property {CreateApiSchemaType1} - The schema's type.
 * @property {CreateApiSchemaFiles1[]} - The list of files that are part of the schema.
 */
export type CreateApiSchemaRequest = z.infer<typeof createApiSchemaRequest>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const createApiSchemaRequestResponse = z.lazy(() => {
  return z
    .object({
      type: z.string(),
      files: z.array(createApiSchemaFiles1Response),
    })
    .transform((data) => ({
      type: data['type'],
      files: data['files'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const createApiSchemaRequestRequest = z.lazy(() => {
  return z
    .object({ type: z.string().nullish(), files: z.array(createApiSchemaFiles1Request).nullish() })
    .transform((data) => ({
      type: data['type'],
      files: data['files'],
    }));
});
