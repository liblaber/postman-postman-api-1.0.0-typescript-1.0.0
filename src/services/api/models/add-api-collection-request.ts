// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { addApiCollection1, addApiCollection1Request, addApiCollection1Response } from './add-api-collection-1';
import { addApiCollection2, addApiCollection2Request, addApiCollection2Response } from './add-api-collection-2';
import { addApiCollection3, addApiCollection3Request, addApiCollection3Response } from './add-api-collection-3';

/**
 * The shape of the model inside the application code - what the users use
 */
export const addApiCollectionRequest = z.lazy(() => {
  return z.union([addApiCollection1, addApiCollection2, addApiCollection3]);
});

/**
 *
 * @typedef  {AddApiCollectionRequest} addApiCollectionRequest
 * @property {AddApiCollection1}
 * @property {AddApiCollection2}
 * @property {AddApiCollection3}
 */
export type AddApiCollectionRequest = z.infer<typeof addApiCollectionRequest>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const addApiCollectionRequestResponse = z.lazy(() => {
  return z.union([addApiCollection1Response, addApiCollection2Response, addApiCollection3Response]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const addApiCollectionRequestRequest = z.lazy(() => {
  return z.union([addApiCollection1Request, addApiCollection2Request, addApiCollection3Request]);
});
