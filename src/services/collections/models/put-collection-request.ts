// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import {
  putCollectionCollection1,
  putCollectionCollection1Request,
  putCollectionCollection1Response,
} from './put-collection-collection-1';

/**
 * The shape of the model inside the application code - what the users use
 */
export const putCollectionRequest = z.lazy(() => {
  return z.object({
    collection: putCollectionCollection1.optional(),
  });
});

/**
 *
 * @typedef  {PutCollectionRequest} putCollectionRequest
 * @property {PutCollectionCollection1} - For a complete list of values, refer to the [collection.json schema file](https://schema.postman.com/json/collection/v2.1.0/collection.json).
 */
export type PutCollectionRequest = z.infer<typeof putCollectionRequest>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const putCollectionRequestResponse = z.lazy(() => {
  return z
    .object({
      collection: putCollectionCollection1Response.optional(),
    })
    .transform((data) => ({
      collection: data['collection'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const putCollectionRequestRequest = z.lazy(() => {
  return z.object({ collection: putCollectionCollection1Request.nullish() }).transform((data) => ({
    collection: data['collection'],
  }));
});
