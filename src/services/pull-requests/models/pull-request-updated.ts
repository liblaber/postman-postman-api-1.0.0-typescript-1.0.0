// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const pullRequestUpdated: any = z.lazy(() => {
  return z.object({
    createdAt: z.string().optional(),
    createdBy: z.string().optional(),
    description: z.string().optional(),
    destinationId: z.string().optional(),
    forkType: z.string().optional(),
    id: z.string().optional(),
    sourceId: z.string().optional(),
    status: z.string().optional(),
    title: z.string().optional(),
    updatedAt: z.string().optional(),
  });
});

/**
 *
 * @typedef  {PullRequestUpdated} pullRequestUpdated
 * @property {string} - The date and time at which the pull request was created.
 * @property {string} - The ID of the user who created the pull request.
 * @property {string} - The pull request's description.
 * @property {string} - The pull request's merge destination ID.
 * @property {string} - The type of forked element.
 * @property {string} - The pull request's ID.
 * @property {string} - The unique ID of the source element.
 * @property {PullRequestUpdatedStatus} - The pull request's status.
 * @property {string} - The pull request's title.
 * @property {string} - The date and time at which the pull request was updated.
 */
export type PullRequestUpdated = z.infer<typeof pullRequestUpdated>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const pullRequestUpdatedResponse: any = z.lazy(() => {
  return z
    .object({
      createdAt: z.string().optional(),
      createdBy: z.string().optional(),
      description: z.string().optional(),
      destinationId: z.string().optional(),
      forkType: z.string().optional(),
      id: z.string().optional(),
      sourceId: z.string().optional(),
      status: z.string().optional(),
      title: z.string().optional(),
      updatedAt: z.string().optional(),
    })
    .transform((data) => ({
      createdAt: data['createdAt'],
      createdBy: data['createdBy'],
      description: data['description'],
      destinationId: data['destinationId'],
      forkType: data['forkType'],
      id: data['id'],
      sourceId: data['sourceId'],
      status: data['status'],
      title: data['title'],
      updatedAt: data['updatedAt'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const pullRequestUpdatedRequest: any = z.lazy(() => {
  return z
    .object({
      createdAt: z.string().nullish(),
      createdBy: z.string().nullish(),
      description: z.string().nullish(),
      destinationId: z.string().nullish(),
      forkType: z.string().nullish(),
      id: z.string().nullish(),
      sourceId: z.string().nullish(),
      status: z.string().nullish(),
      title: z.string().nullish(),
      updatedAt: z.string().nullish(),
    })
    .transform((data) => ({
      createdAt: data['createdAt'],
      createdBy: data['createdBy'],
      description: data['description'],
      destinationId: data['destinationId'],
      forkType: data['forkType'],
      id: data['id'],
      sourceId: data['sourceId'],
      status: data['status'],
      title: data['title'],
      updatedAt: data['updatedAt'],
    }));
});
