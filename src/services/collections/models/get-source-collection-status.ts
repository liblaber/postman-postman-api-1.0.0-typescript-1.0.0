// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import {
  getSourceCollectionStatusCollection,
  getSourceCollectionStatusCollectionRequest,
  getSourceCollectionStatusCollectionResponse,
} from './get-source-collection-status-collection';

/**
 * The shape of the model inside the application code - what the users use
 */
export const getSourceCollectionStatus = z.object({
  collection: getSourceCollectionStatusCollection.optional(),
});

/**
 *
 * @typedef  {GetSourceCollectionStatus} getSourceCollectionStatus
 * @property {GetSourceCollectionStatusCollection}
 */
export type GetSourceCollectionStatus = z.infer<typeof getSourceCollectionStatus>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const getSourceCollectionStatusResponse = z
  .object({
    collection: getSourceCollectionStatusCollectionResponse.optional(),
  })
  .transform((data) => ({
    collection: data['collection'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const getSourceCollectionStatusRequest = z
  .object({ collection: getSourceCollectionStatusCollectionRequest.nullish() })
  .transform((data) => ({
    collection: data['collection'],
  }));
