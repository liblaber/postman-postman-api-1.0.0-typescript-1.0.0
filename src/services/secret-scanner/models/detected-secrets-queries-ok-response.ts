// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import {
  detectedSecretsQueriesData,
  detectedSecretsQueriesDataRequest,
  detectedSecretsQueriesDataResponse,
} from './detected-secrets-queries-data';
import {
  detectedSecretsQueriesMeta,
  detectedSecretsQueriesMetaRequest,
  detectedSecretsQueriesMetaResponse,
} from './detected-secrets-queries-meta';

/**
 * The shape of the model inside the application code - what the users use
 */
export const detectedSecretsQueriesOkResponse: any = z.lazy(() => {
  return z.object({
    data: z.array(detectedSecretsQueriesData).optional(),
    meta: detectedSecretsQueriesMeta.optional(),
  });
});

/**
 *
 * @typedef  {DetectedSecretsQueriesOkResponse} detectedSecretsQueriesOkResponse
 * @property {DetectedSecretsQueriesData[]}
 * @property {DetectedSecretsQueriesMeta} - The response's meta information for paginated results.
 */
export type DetectedSecretsQueriesOkResponse = z.infer<typeof detectedSecretsQueriesOkResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const detectedSecretsQueriesOkResponseResponse: any = z.lazy(() => {
  return z
    .object({
      data: z.array(detectedSecretsQueriesDataResponse).optional(),
      meta: detectedSecretsQueriesMetaResponse.optional(),
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
export const detectedSecretsQueriesOkResponseRequest: any = z.lazy(() => {
  return z
    .object({
      data: z.array(detectedSecretsQueriesDataRequest).nullish(),
      meta: detectedSecretsQueriesMetaRequest.nullish(),
    })
    .transform((data) => ({
      data: data['data'],
      meta: data['meta'],
    }));
});
