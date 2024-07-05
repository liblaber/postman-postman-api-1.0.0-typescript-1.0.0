// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { elementType1 } from './element-type-1';

/**
 * The shape of the model inside the application code - what the users use
 */
export const requestsElement = z.object({
  id: z.string().optional(),
  type_: elementType1.optional(),
  name: z.string().optional(),
  summary: z.string().optional(),
});

/**
 * Information about the requested element.
 * @typedef  {RequestsElement} requestsElement - Information about the requested element. - Information about the requested element.
 * @property {string} - The element's ID.
 * @property {ElementType1} - The element type.
 * @property {string} - The element's name.
 * @property {string} - If applicable, the element's short summary.
 */
export type RequestsElement = z.infer<typeof requestsElement>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const requestsElementResponse = z
  .object({
    id: z.string().optional(),
    type: elementType1.optional(),
    name: z.string().optional(),
    summary: z.string().optional(),
  })
  .transform((data) => ({
    id: data['id'],
    type_: data['type'],
    name: data['name'],
    summary: data['summary'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const requestsElementRequest = z
  .object({
    id: z.string().nullish(),
    type_: elementType1.nullish(),
    name: z.string().nullish(),
    summary: z.string().nullish(),
  })
  .transform((data) => ({
    id: data['id'],
    type: data['type_'],
    name: data['name'],
    summary: data['summary'],
  }));
