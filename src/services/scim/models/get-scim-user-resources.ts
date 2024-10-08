// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { resources, resourcesRequest, resourcesResponse } from './resources';

/**
 * The shape of the model inside the application code - what the users use
 */
export const getScimUserResources = z.lazy(() => {
  return z.object({
    resources: z.array(resources).optional(),
    itemsPerPage: z.number().optional(),
    schemas: z.array(z.string()).optional(),
    startIndex: z.number().optional(),
    totalResults: z.number().optional(),
  });
});

/**
 *
 * @typedef  {GetScimUserResources} getScimUserResources
 * @property {Resources[]} - A list of user resources.
 * @property {number} - The number of items per response page.
 * @property {string[]}
 * @property {number} - The index entry by which the returned results begin.
 * @property {number} - The total number of results found.
 */
export type GetScimUserResources = z.infer<typeof getScimUserResources>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const getScimUserResourcesResponse = z.lazy(() => {
  return z
    .object({
      Resources: z.array(resourcesResponse).optional(),
      itemsPerPage: z.number().optional(),
      schemas: z.array(z.string()).optional(),
      startIndex: z.number().optional(),
      totalResults: z.number().optional(),
    })
    .transform((data) => ({
      resources: data['Resources'],
      itemsPerPage: data['itemsPerPage'],
      schemas: data['schemas'],
      startIndex: data['startIndex'],
      totalResults: data['totalResults'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const getScimUserResourcesRequest = z.lazy(() => {
  return z
    .object({
      resources: z.array(resourcesRequest).nullish(),
      itemsPerPage: z.number().nullish(),
      schemas: z.array(z.string()).nullish(),
      startIndex: z.number().nullish(),
      totalResults: z.number().nullish(),
    })
    .transform((data) => ({
      Resources: data['resources'],
      itemsPerPage: data['itemsPerPage'],
      schemas: data['schemas'],
      startIndex: data['startIndex'],
      totalResults: data['totalResults'],
    }));
});
