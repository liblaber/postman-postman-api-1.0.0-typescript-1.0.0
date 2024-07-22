// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { getSecretTypesData, getSecretTypesDataRequest, getSecretTypesDataResponse } from './get-secret-types-data';
import { getSecretTypesMeta, getSecretTypesMetaRequest, getSecretTypesMetaResponse } from './get-secret-types-meta';

/**
 * The shape of the model inside the application code - what the users use
 */
export const getSecretTypes: any = z.lazy(() => {
  return z.object({
    data: z.array(getSecretTypesData).optional(),
    meta: getSecretTypesMeta.optional(),
  });
});

/**
 *
 * @typedef  {GetSecretTypes} getSecretTypes
 * @property {GetSecretTypesData[]}
 * @property {GetSecretTypesMeta}
 */
export type GetSecretTypes = z.infer<typeof getSecretTypes>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const getSecretTypesResponse: any = z.lazy(() => {
  return z
    .object({
      data: z.array(getSecretTypesDataResponse).optional(),
      meta: getSecretTypesMetaResponse.optional(),
    })
    .transform((data) => ({
      data: data['data'],
      meta: data['meta'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const getSecretTypesRequest: any = z.lazy(() => {
  return z
    .object({ data: z.array(getSecretTypesDataRequest).nullish(), meta: getSecretTypesMetaRequest.nullish() })
    .transform((data) => ({
      data: data['data'],
      meta: data['meta'],
    }));
});
