// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import {
  addApiCollection3Data,
  addApiCollection3DataRequest,
  addApiCollection3DataResponse,
} from './add-api-collection-3-data';

/**
 * The shape of the model inside the application code - what the users use
 */
export const addApiCollection3: any = z.lazy(() => {
  return z.object({
    data: addApiCollection3Data.optional(),
    operationType: z.string().optional(),
  });
});

/**
 *
 * @typedef  {AddApiCollection3} addApiCollection3
 * @property {AddApiCollection3Data} - Information about the collection's contents, such as requests and responses. For a complete list of values, refer to the [collection.json schema file](https://schema.postman.com/json/collection/v2.1.0/collection.json).
 * @property {AddApiCollection3OperationType} - The `CREATE_NEW` method.
 */
export type AddApiCollection3 = z.infer<typeof addApiCollection3>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const addApiCollection3Response: any = z.lazy(() => {
  return z
    .object({
      data: addApiCollection3DataResponse.optional(),
      operationType: z.string().optional(),
    })
    .transform((data) => ({
      data: data['data'],
      operationType: data['operationType'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const addApiCollection3Request: any = z.lazy(() => {
  return z
    .object({ data: addApiCollection3DataRequest.nullish(), operationType: z.string().nullish() })
    .transform((data) => ({
      data: data['data'],
      operationType: data['operationType'],
    }));
});
