// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import {
  addApiCollection1Data,
  addApiCollection1DataRequest,
  addApiCollection1DataResponse,
} from './add-api-collection-1-data';

/**
 * The shape of the model inside the application code - what the users use
 */
export const addApiCollection1 = z.lazy(() => {
  return z.object({
    data: addApiCollection1Data.optional(),
    operationType: z.string().optional(),
  });
});

/**
 *
 * @typedef  {AddApiCollection1} addApiCollection1
 * @property {AddApiCollection1Data}
 * @property {AddApiCollection1OperationType} - The `COPY_COLLECTION` method.
 */
export type AddApiCollection1 = z.infer<typeof addApiCollection1>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const addApiCollection1Response = z.lazy(() => {
  return z
    .object({
      data: addApiCollection1DataResponse.optional(),
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
export const addApiCollection1Request = z.lazy(() => {
  return z
    .object({ data: addApiCollection1DataRequest.nullish(), operationType: z.string().nullish() })
    .transform((data) => ({
      data: data['data'],
      operationType: data['operationType'],
    }));
});
