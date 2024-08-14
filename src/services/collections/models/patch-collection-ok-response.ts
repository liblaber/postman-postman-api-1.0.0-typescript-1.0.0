// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import {
  patchCollectionCollection2,
  patchCollectionCollection2Request,
  patchCollectionCollection2Response,
} from './patch-collection-collection-2';

/**
 * The shape of the model inside the application code - what the users use
 */
export const patchCollectionOkResponse = z.lazy(() => {
  return z.object({
    collection: patchCollectionCollection2.optional(),
  });
});

/**
 *
 * @typedef  {PatchCollectionOkResponse} patchCollectionOkResponse
 * @property {PatchCollectionCollection2}
 */
export type PatchCollectionOkResponse = z.infer<typeof patchCollectionOkResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const patchCollectionOkResponseResponse = z.lazy(() => {
  return z
    .object({
      collection: patchCollectionCollection2Response.optional(),
    })
    .transform((data) => ({
      collection: data['collection'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const patchCollectionOkResponseRequest = z.lazy(() => {
  return z.object({ collection: patchCollectionCollection2Request.nullish() }).transform((data) => ({
    collection: data['collection'],
  }));
});
