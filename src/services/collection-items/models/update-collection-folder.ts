// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const updateCollectionFolder: any = z.lazy(() => {
  return z.object({
    data: z.any().optional(),
    meta: z.any().optional(),
    modelId: z.string().optional(),
    revision: z.number().optional(),
  });
});

/**
 *
 * @typedef  {UpdateCollectionFolder} updateCollectionFolder
 * @property {any} - The folder's updated information, including the updated properties. For a complete list of properties, refer to the [collection.json schema file](https://schema.postman.com/collection/json/v1.0.0/draft-07/collection.json).
 * @property {any} - A Postman-specific response that contains information about the internal performed operation.
 * @property {string} - The folder's ID.
 * @property {number} - An internal revision ID. Its value increments each time the resource changes. You can use this ID to track whether there were changes since the last time you fetched the resource.
 */
export type UpdateCollectionFolder = z.infer<typeof updateCollectionFolder>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const updateCollectionFolderResponse: any = z.lazy(() => {
  return z
    .object({
      data: z.any().optional(),
      meta: z.any().optional(),
      model_id: z.string().optional(),
      revision: z.number().optional(),
    })
    .transform((data) => ({
      data: data['data'],
      meta: data['meta'],
      modelId: data['model_id'],
      revision: data['revision'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const updateCollectionFolderRequest: any = z.lazy(() => {
  return z
    .object({
      data: z.any().nullish(),
      meta: z.any().nullish(),
      modelId: z.string().nullish(),
      revision: z.number().nullish(),
    })
    .transform((data) => ({
      data: data['data'],
      meta: data['meta'],
      model_id: data['modelId'],
      revision: data['revision'],
    }));
});
