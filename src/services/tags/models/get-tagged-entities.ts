// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import {
  getTaggedEntitiesData,
  getTaggedEntitiesDataRequest,
  getTaggedEntitiesDataResponse,
} from './get-tagged-entities-data';
import {
  getTaggedEntitiesMeta,
  getTaggedEntitiesMetaRequest,
  getTaggedEntitiesMetaResponse,
} from './get-tagged-entities-meta';

/**
 * The shape of the model inside the application code - what the users use
 */
export const getTaggedEntities = z.lazy(() => {
  return z.object({
    data: getTaggedEntitiesData.optional(),
    meta: getTaggedEntitiesMeta.optional(),
  });
});

/**
 *
 * @typedef  {GetTaggedEntities} getTaggedEntities
 * @property {GetTaggedEntitiesData} - An object containing the paginated elements.
 * @property {GetTaggedEntitiesMeta} - The response's pagination information.
 */
export type GetTaggedEntities = z.infer<typeof getTaggedEntities>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const getTaggedEntitiesResponse = z.lazy(() => {
  return z
    .object({
      data: getTaggedEntitiesDataResponse.optional(),
      meta: getTaggedEntitiesMetaResponse.optional(),
    })
    .transform((data) => ({
      data: data['data'],
      meta: data['meta'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const getTaggedEntitiesRequest = z.lazy(() => {
  return z
    .object({ data: getTaggedEntitiesDataRequest.nullish(), meta: getTaggedEntitiesMetaRequest.nullish() })
    .transform((data) => ({
      data: data['data'],
      meta: data['meta'],
    }));
});
