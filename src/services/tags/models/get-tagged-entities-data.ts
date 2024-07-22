// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { entities, entitiesRequest, entitiesResponse } from './entities';

/**
 * The shape of the model inside the application code - what the users use
 */
export const getTaggedEntitiesData: any = z.lazy(() => {
  return z.object({
    entities: z.array(entities),
  });
});

/**
 * An object containing the paginated elements.
 * @typedef  {GetTaggedEntitiesData} getTaggedEntitiesData - An object containing the paginated elements. - An object containing the paginated elements.
 * @property {Entities[]} - A list of the Postman elements that contain the given tag.
 */
export type GetTaggedEntitiesData = z.infer<typeof getTaggedEntitiesData>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const getTaggedEntitiesDataResponse: any = z.lazy(() => {
  return z
    .object({
      entities: z.array(entitiesResponse),
    })
    .transform((data) => ({
      entities: data['entities'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const getTaggedEntitiesDataRequest: any = z.lazy(() => {
  return z.object({ entities: z.array(entitiesRequest).nullish() }).transform((data) => ({
    entities: data['entities'],
  }));
});
