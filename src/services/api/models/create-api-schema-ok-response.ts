// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import {
  createApiSchemaFiles2,
  createApiSchemaFiles2Request,
  createApiSchemaFiles2Response,
} from './create-api-schema-files-2';

/**
 * The shape of the model inside the application code - what the users use
 */
export const createApiSchemaOkResponse = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    type: z.string().optional(),
    files: z.array(createApiSchemaFiles2).optional(),
    createdAt: z.string().optional(),
    createdBy: z.string().optional(),
    updatedAt: z.string().optional(),
    updatedBy: z.string().optional(),
  });
});

/**
 * Information about the created API schema.
 * @typedef  {CreateApiSchemaOkResponse} createApiSchemaOkResponse - Information about the created API schema. - Information about the created API schema.
 * @property {string} - The schema's ID.
 * @property {CreateApiSchemaType2} - The schema's type.
 * @property {CreateApiSchemaFiles2[]} - The list of the schema's files.
 * @property {string} - The date and time at which the schema was created.
 * @property {string} - The user ID of the user that created the schema.
 * @property {string} - The date and time at which the schema was last updated.
 * @property {string} - The user ID of the user that updated the schema.
 */
export type CreateApiSchemaOkResponse = z.infer<typeof createApiSchemaOkResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const createApiSchemaOkResponseResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      type: z.string().optional(),
      files: z.array(createApiSchemaFiles2Response).optional(),
      createdAt: z.string().optional(),
      createdBy: z.string().optional(),
      updatedAt: z.string().optional(),
      updatedBy: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      type: data['type'],
      files: data['files'],
      createdAt: data['createdAt'],
      createdBy: data['createdBy'],
      updatedAt: data['updatedAt'],
      updatedBy: data['updatedBy'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const createApiSchemaOkResponseRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().nullish(),
      type: z.string().nullish(),
      files: z.array(createApiSchemaFiles2Request).nullish(),
      createdAt: z.string().nullish(),
      createdBy: z.string().nullish(),
      updatedAt: z.string().nullish(),
      updatedBy: z.string().nullish(),
    })
    .transform((data) => ({
      id: data['id'],
      type: data['type'],
      files: data['files'],
      createdAt: data['createdAt'],
      createdBy: data['createdBy'],
      updatedAt: data['updatedAt'],
      updatedBy: data['updatedBy'],
    }));
});
