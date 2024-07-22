// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const getScimServiceProviderConfigSort: any = z.lazy(() => {
  return z.object({
    supported: z.boolean().optional(),
  });
});

/**
 * Information about the sort configuration.
 * @typedef  {GetScimServiceProviderConfigSort} getScimServiceProviderConfigSort - Information about the sort configuration. - Information about the sort configuration.
 * @property {boolean} - If true, the feature is supported.
 */
export type GetScimServiceProviderConfigSort = z.infer<typeof getScimServiceProviderConfigSort>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const getScimServiceProviderConfigSortResponse: any = z.lazy(() => {
  return z
    .object({
      supported: z.boolean().optional(),
    })
    .transform((data) => ({
      supported: data['supported'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const getScimServiceProviderConfigSortRequest: any = z.lazy(() => {
  return z.object({ supported: z.boolean().nullish() }).transform((data) => ({
    supported: data['supported'],
  }));
});
