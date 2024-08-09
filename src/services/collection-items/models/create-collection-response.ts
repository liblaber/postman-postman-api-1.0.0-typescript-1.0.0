// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const createCollectionResponse = z.lazy(() => {
  return z.object({
    data: z.any().optional(),
    meta: z.any().optional(),
    modelId: z.string().optional(),
    revision: z.number().optional(),
  });
});

/**
 *
 * @typedef  {CreateCollectionResponse} createCollectionResponse
 * @property {any} - Information about the response. For a complete list of properties, refer to the `definitions.request.responses` property in the [collection.json schema file](https://schema.postman.com/collection/json/v1.0.0/draft-07/collection.json).
 * @property {any} - A Postman-specific response that contains information about the internal performed operation.
 * @property {string} - The response's ID.
 * @property {number} - An internal revision ID. Its value increments each time the resource changes. You can use this ID to track whether there were changes since the last time you fetched the resource.
 */
export type CreateCollectionResponse = z.infer<typeof createCollectionResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const createCollectionResponseResponse = z.lazy(() => {
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
export const createCollectionResponseRequest = z.lazy(() => {
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
