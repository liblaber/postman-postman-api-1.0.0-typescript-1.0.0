// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import {
  respondPanElementAddRequestResponse,
  respondPanElementAddRequestResponseRequest,
  respondPanElementAddRequestResponseResponse,
} from './respond-pan-element-add-request-response';

/**
 * The shape of the model inside the application code - what the users use
 */
export const privateApiNetworkRespondPanElementAddRequestRequest1 = z.lazy(() => {
  return z.object({
    response: respondPanElementAddRequestResponse.optional(),
    status: z.string(),
  });
});

/**
 *
 * @typedef  {PrivateApiNetworkRespondPanElementAddRequestRequest1} privateApiNetworkRespondPanElementAddRequestRequest1
 * @property {RespondPanElementAddRequestResponse} - The response to the user's request.
 * @property {RespondPanElementAddRequestStatus} - The request's status.
 */
export type PrivateApiNetworkRespondPanElementAddRequestRequest1 = z.infer<
  typeof privateApiNetworkRespondPanElementAddRequestRequest1
>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const privateApiNetworkRespondPanElementAddRequestRequest1Response = z.lazy(() => {
  return z
    .object({
      response: respondPanElementAddRequestResponseResponse.optional(),
      status: z.string(),
    })
    .transform((data) => ({
      response: data['response'],
      status: data['status'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const privateApiNetworkRespondPanElementAddRequestRequest1Request = z.lazy(() => {
  return z
    .object({ response: respondPanElementAddRequestResponseRequest.nullish(), status: z.string().nullish() })
    .transform((data) => ({
      response: data['response'],
      status: data['status'],
    }));
});
