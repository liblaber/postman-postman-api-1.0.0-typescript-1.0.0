// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const createUpdateApiSchemaFileOkResponse = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  path: z.string().optional(),
  createdAt: z.string().optional(),
  createdBy: z.string().optional(),
  updatedAt: z.string().optional(),
  updatedBy: z.string().optional(),
});

/**
 * Information about the schema file.
 * @typedef  {CreateUpdateApiSchemaFileOkResponse} createUpdateApiSchemaFileOkResponse - Information about the schema file. - Information about the schema file.
 * @property {string} - The schema file's ID.
 * @property {string} - The schema file's name.
 * @property {string} - The file system path to the schema file.
 * @property {string} - The date and time at which the file was created.
 * @property {string} - The user ID of the user that created the file.
 * @property {string} - The date and time at which the file was last updated.
 * @property {string} - The user ID of the user that last updated the file.
 */
export type CreateUpdateApiSchemaFileOkResponse = z.infer<typeof createUpdateApiSchemaFileOkResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const createUpdateApiSchemaFileOkResponseResponse = z
  .object({
    id: z.string().optional(),
    name: z.string().optional(),
    path: z.string().optional(),
    createdAt: z.string().optional(),
    createdBy: z.string().optional(),
    updatedAt: z.string().optional(),
    updatedBy: z.string().optional(),
  })
  .transform((data) => ({
    id: data['id'],
    name: data['name'],
    path: data['path'],
    createdAt: data['createdAt'],
    createdBy: data['createdBy'],
    updatedAt: data['updatedAt'],
    updatedBy: data['updatedBy'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const createUpdateApiSchemaFileOkResponseRequest = z
  .object({
    id: z.string().nullish(),
    name: z.string().nullish(),
    path: z.string().nullish(),
    createdAt: z.string().nullish(),
    createdBy: z.string().nullish(),
    updatedAt: z.string().nullish(),
    updatedBy: z.string().nullish(),
  })
  .transform((data) => ({
    id: data['id'],
    name: data['name'],
    path: data['path'],
    createdAt: data['createdAt'],
    createdBy: data['createdBy'],
    updatedAt: data['updatedAt'],
    updatedBy: data['updatedBy'],
  }));
