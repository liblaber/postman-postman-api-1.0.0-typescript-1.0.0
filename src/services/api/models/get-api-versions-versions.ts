// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const getApiVersionsVersions = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
    releaseNotes: z.string().optional(),
  });
});

/**
 * Information about the API version.
 * @typedef  {GetApiVersionsVersions} getApiVersionsVersions - Information about the API version. - Information about the API version.
 * @property {string} - The version's ID.
 * @property {string} - The version's name.
 * @property {string} - The date and time at which the version was created.
 * @property {string} - The date and time at which the version was last updated.
 * @property {string} - The version's release notes.
 */
export type GetApiVersionsVersions = z.infer<typeof getApiVersionsVersions>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const getApiVersionsVersionsResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      releaseNotes: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
      releaseNotes: data['releaseNotes'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const getApiVersionsVersionsRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().nullish(),
      name: z.string().nullish(),
      createdAt: z.string().nullish(),
      updatedAt: z.string().nullish(),
      releaseNotes: z.string().nullish(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
      releaseNotes: data['releaseNotes'],
    }));
});
