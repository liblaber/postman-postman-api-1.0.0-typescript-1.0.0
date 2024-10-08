// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const collectionInfo1 = z.lazy(() => {
  return z.object({
    name: z.string(),
    schema: z.string(),
  });
});

/**
 * An object that contains basic information about the collection. For a complete list of values, refer to the `definitions.info` entry in the [collection.json schema file](https://schema.postman.com/json/collection/v2.1.0/collection.json).
 * @typedef  {CollectionInfo1} collectionInfo1 - An object that contains basic information about the collection. For a complete list of values, refer to the `definitions.info` entry in the [collection.json schema file](https://schema.postman.com/json/collection/v2.1.0/collection.json). - An object that contains basic information about the collection. For a complete list of values, refer to the `definitions.info` entry in the [collection.json schema file](https://schema.postman.com/json/collection/v2.1.0/collection.json).
 * @property {string} - The collection's name.
 * @property {string} - A URL to the collection's schema.
 */
export type CollectionInfo1 = z.infer<typeof collectionInfo1>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const collectionInfo1Response = z.lazy(() => {
  return z
    .object({
      name: z.string(),
      schema: z.string(),
    })
    .transform((data) => ({
      name: data['name'],
      schema: data['schema'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const collectionInfo1Request = z.lazy(() => {
  return z.object({ name: z.string().nullish(), schema: z.string().nullish() }).transform((data) => ({
    name: data['name'],
    schema: data['schema'],
  }));
});
