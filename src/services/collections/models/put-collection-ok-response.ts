// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import {
  putCollectionCollection2,
  putCollectionCollection2Request,
  putCollectionCollection2Response,
} from './put-collection-collection-2';

/**
 * The shape of the model inside the application code - what the users use
 */
export const putCollectionOkResponse = z.lazy(() => {
  return z.object({
    collection: putCollectionCollection2.optional(),
  });
});

/**
 *
 * @typedef  {PutCollectionOkResponse} putCollectionOkResponse
 * @property {PutCollectionCollection2}
 */
export type PutCollectionOkResponse = z.infer<typeof putCollectionOkResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const putCollectionOkResponseResponse = z.lazy(() => {
  return z
    .object({
      collection: putCollectionCollection2Response.optional(),
    })
    .transform((data) => ({
      collection: data['collection'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const putCollectionOkResponseRequest = z.lazy(() => {
  return z.object({ collection: putCollectionCollection2Request.nullish() }).transform((data) => ({
    collection: data['collection'],
  }));
});
