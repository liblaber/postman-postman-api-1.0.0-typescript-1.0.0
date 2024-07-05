// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const getApi1 = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  summary: z.string().optional(),
  createdAt: z.string().optional(),
  createdBy: z.number().optional(),
  updatedAt: z.string().optional(),
  updatedBy: z.number().optional(),
  description: z.string().optional(),
});

/**
 * The API's base data schema.
 * @typedef  {GetApi1} getApi1 - The API's base data schema. - The API's base data schema.
 * @property {string} - The API's ID.
 * @property {string} - The API's name.
 * @property {string} - The API's short summary.
 * @property {string} - The date and time at which the API was created.
 * @property {number} - The Postman ID of the user that created the API.
 * @property {string} - The date and time at which the API was updated.
 * @property {number} - The Postman ID of the user that updated the API.
 * @property {string} - The API's description.
 */
export type GetApi1 = z.infer<typeof getApi1>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const getApi1Response = z
  .object({
    id: z.string().optional(),
    name: z.string().optional(),
    summary: z.string().optional(),
    createdAt: z.string().optional(),
    createdBy: z.number().optional(),
    updatedAt: z.string().optional(),
    updatedBy: z.number().optional(),
    description: z.string().optional(),
  })
  .transform((data) => ({
    id: data['id'],
    name: data['name'],
    summary: data['summary'],
    createdAt: data['createdAt'],
    createdBy: data['createdBy'],
    updatedAt: data['updatedAt'],
    updatedBy: data['updatedBy'],
    description: data['description'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const getApi1Request = z
  .object({
    id: z.string().nullish(),
    name: z.string().nullish(),
    summary: z.string().nullish(),
    createdAt: z.string().nullish(),
    createdBy: z.number().nullish(),
    updatedAt: z.string().nullish(),
    updatedBy: z.number().nullish(),
    description: z.string().nullish(),
  })
  .transform((data) => ({
    id: data['id'],
    name: data['name'],
    summary: data['summary'],
    createdAt: data['createdAt'],
    createdBy: data['createdBy'],
    updatedAt: data['updatedAt'],
    updatedBy: data['updatedBy'],
    description: data['description'],
  }));
