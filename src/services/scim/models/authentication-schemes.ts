// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const authenticationSchemes = z.lazy(() => {
  return z.object({
    description: z.string().optional(),
    name: z.string().optional(),
    specUri: z.string().optional(),
    type: z.string().optional(),
  });
});

/**
 * Information about the scheme.
 * @typedef  {AuthenticationSchemes} authenticationSchemes - Information about the scheme. - Information about the scheme.
 * @property {string} - The scheme's description.
 * @property {string} - The scheme's friendly name.
 * @property {string} - A link to the scheme's specification documentation.
 * @property {string} - The scheme's type.
 */
export type AuthenticationSchemes = z.infer<typeof authenticationSchemes>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const authenticationSchemesResponse = z.lazy(() => {
  return z
    .object({
      description: z.string().optional(),
      name: z.string().optional(),
      specUri: z.string().optional(),
      type: z.string().optional(),
    })
    .transform((data) => ({
      description: data['description'],
      name: data['name'],
      specUri: data['specUri'],
      type: data['type'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const authenticationSchemesRequest = z.lazy(() => {
  return z
    .object({
      description: z.string().nullish(),
      name: z.string().nullish(),
      specUri: z.string().nullish(),
      type: z.string().nullish(),
    })
    .transform((data) => ({
      description: data['description'],
      name: data['name'],
      specUri: data['specUri'],
      type: data['type'],
    }));
});
