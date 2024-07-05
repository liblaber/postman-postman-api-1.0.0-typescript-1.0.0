// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import {
  getCollectionPullRequestsData,
  getCollectionPullRequestsDataRequest,
  getCollectionPullRequestsDataResponse,
} from './get-collection-pull-requests-data';

/**
 * The shape of the model inside the application code - what the users use
 */
export const getCollectionPullRequests = z.object({
  data: z.array(getCollectionPullRequestsData).optional(),
});

/**
 *
 * @typedef  {GetCollectionPullRequests} getCollectionPullRequests
 * @property {GetCollectionPullRequestsData[]}
 */
export type GetCollectionPullRequests = z.infer<typeof getCollectionPullRequests>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const getCollectionPullRequestsResponse = z
  .object({
    data: z.array(getCollectionPullRequestsDataResponse).optional(),
  })
  .transform((data) => ({
    data: data['data'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const getCollectionPullRequestsRequest = z
  .object({ data: z.array(getCollectionPullRequestsDataRequest).nullish() })
  .transform((data) => ({
    data: data['data'],
  }));
