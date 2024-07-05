// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { source, sourceRequest, sourceResponse } from './source';
import { destination, destinationRequest, destinationResponse } from './destination';
import { merge, mergeRequest, mergeResponse } from './merge';
import { reviewers, reviewersRequest, reviewersResponse } from './reviewers';

/**
 * The shape of the model inside the application code - what the users use
 */
export const pullRequestGet = z.object({
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
  id: z.string().optional(),
  title: z.string().optional(),
  description: z.string().optional(),
  createdBy: z.string().optional(),
  updatedBy: z.string().optional(),
  comment: z.string().optional(),
  fortkType: z.string().optional(),
  source: source.optional(),
  destination: destination.optional(),
  status: z.string().optional(),
  merge: merge.optional(),
  reviewers: z.array(reviewers).optional(),
});

/**
 * 
 * @typedef  {PullRequestGet} pullRequestGet   
 * @property {string} - The date and time at which the pull request was created.
 * @property {string} - The date and time at which the pull request was updated.
 * @property {string} - The pull request's ID.
 * @property {string} - The pull request's title.
 * @property {string} - The pull request's description.
 * @property {string} - The ID of the user who created the pull request.
 * @property {string} - The ID of the user who last updated the pull request.
 * @property {string} - If the pull request is a `decline` status, an optoinal comment about why the pull request was declined.
 * @property {string} - The type of element the pull request was forked from.
 * @property {Source} - Information about the pull request's source (parent) element.
 * @property {Destination} - Information about the pull request destination element.
 * @property {string} - The pull request's current review status:
- `open` — The pull request is still open.
- `approved` — The pull request was approved by its reviewers.
- `declined` — The pull request was not approved by its reviewers.

 * @property {Merge} - Information about the current progress of the pull request's merge.
 * @property {Reviewers[]} - Information about the reviewers assigned to the pull request.
 */
export type PullRequestGet = z.infer<typeof pullRequestGet>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const pullRequestGetResponse = z
  .object({
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
    id: z.string().optional(),
    title: z.string().optional(),
    description: z.string().optional(),
    createdBy: z.string().optional(),
    updatedBy: z.string().optional(),
    comment: z.string().optional(),
    fortkType: z.string().optional(),
    source: sourceResponse.optional(),
    destination: destinationResponse.optional(),
    status: z.string().optional(),
    merge: mergeResponse.optional(),
    reviewers: z.array(reviewersResponse).optional(),
  })
  .transform((data) => ({
    createdAt: data['createdAt'],
    updatedAt: data['updatedAt'],
    id: data['id'],
    title: data['title'],
    description: data['description'],
    createdBy: data['createdBy'],
    updatedBy: data['updatedBy'],
    comment: data['comment'],
    fortkType: data['fortkType'],
    source: data['source'],
    destination: data['destination'],
    status: data['status'],
    merge: data['merge'],
    reviewers: data['reviewers'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const pullRequestGetRequest = z
  .object({
    createdAt: z.string().nullish(),
    updatedAt: z.string().nullish(),
    id: z.string().nullish(),
    title: z.string().nullish(),
    description: z.string().nullish(),
    createdBy: z.string().nullish(),
    updatedBy: z.string().nullish(),
    comment: z.string().nullish(),
    fortkType: z.string().nullish(),
    source: sourceRequest.nullish(),
    destination: destinationRequest.nullish(),
    status: z.string().nullish(),
    merge: mergeRequest.nullish(),
    reviewers: z.array(reviewersRequest).nullish(),
  })
  .transform((data) => ({
    createdAt: data['createdAt'],
    updatedAt: data['updatedAt'],
    id: data['id'],
    title: data['title'],
    description: data['description'],
    createdBy: data['createdBy'],
    updatedBy: data['updatedBy'],
    comment: data['comment'],
    fortkType: data['fortkType'],
    source: data['source'],
    destination: data['destination'],
    status: data['status'],
    merge: data['merge'],
    reviewers: data['reviewers'],
  }));
