// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const getSecretsLocationsData = z.lazy(() => {
  return z.object({
    isResourceDeleted: z.boolean().optional(),
    leakedBy: z.number().optional(),
    location: z.string().optional(),
    occurrences: z.number().optional(),
    parentResourceId: z.string().optional(),
    resourceId: z.string().optional(),
    resourceType: z.string().optional(),
    detectedAt: z.string().optional(),
    url: z.string().optional(),
  });
});

/**
 * Information about the secret finding locations.
 * @typedef  {GetSecretsLocationsData} getSecretsLocationsData - Information about the secret finding locations. - Information about the secret finding locations.
 * @property {boolean} - If true, the resource in which the secret was found was deleted.
 * @property {number} - The ID of the user who exposed the secret.
 * @property {string} - The location where the secret was found.
 * @property {number} - The number of times the secret occurs in the location.
 * @property {string} - The parent resource's unique ID. If the resource is a request, folder, or example, this value is a collection ID. If the resource is a collection, globals, or environment, this is the resource's ID.
 * @property {string} - The unique ID of the resource where the secret was detected.
 * @property {DataResourceType} - The type of resource in which the secret was detected.
 * @property {string} - The date and time at which the secret was detected.
 * @property {string} - The URL to the resource that contains the secret.
 */
export type GetSecretsLocationsData = z.infer<typeof getSecretsLocationsData>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const getSecretsLocationsDataResponse = z.lazy(() => {
  return z
    .object({
      isResourceDeleted: z.boolean().optional(),
      leakedBy: z.number().optional(),
      location: z.string().optional(),
      occurrences: z.number().optional(),
      parentResourceId: z.string().optional(),
      resourceId: z.string().optional(),
      resourceType: z.string().optional(),
      detectedAt: z.string().optional(),
      url: z.string().optional(),
    })
    .transform((data) => ({
      isResourceDeleted: data['isResourceDeleted'],
      leakedBy: data['leakedBy'],
      location: data['location'],
      occurrences: data['occurrences'],
      parentResourceId: data['parentResourceId'],
      resourceId: data['resourceId'],
      resourceType: data['resourceType'],
      detectedAt: data['detectedAt'],
      url: data['url'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const getSecretsLocationsDataRequest = z.lazy(() => {
  return z
    .object({
      isResourceDeleted: z.boolean().nullish(),
      leakedBy: z.number().nullish(),
      location: z.string().nullish(),
      occurrences: z.number().nullish(),
      parentResourceId: z.string().nullish(),
      resourceId: z.string().nullish(),
      resourceType: z.string().nullish(),
      detectedAt: z.string().nullish(),
      url: z.string().nullish(),
    })
    .transform((data) => ({
      isResourceDeleted: data['isResourceDeleted'],
      leakedBy: data['leakedBy'],
      location: data['location'],
      occurrences: data['occurrences'],
      parentResourceId: data['parentResourceId'],
      resourceId: data['resourceId'],
      resourceType: data['resourceType'],
      detectedAt: data['detectedAt'],
      url: data['url'],
    }));
});
