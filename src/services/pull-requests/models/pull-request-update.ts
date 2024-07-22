// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const pullRequestUpdate: any = z.lazy(() => {
  return z.object({
    title: z.string(),
    description: z.string().optional(),
    reviewers: z.array(z.string()),
  });
});

/**
 *
 * @typedef  {PullRequestUpdate} pullRequestUpdate
 * @property {string} - The pull request's updated title.
 * @property {string} - The updated pull request description.
 * @property {string[]} - An updated list of the pull request's assigned reviewers. This replaces all existing users assigned to the pull request with those you pass in the request body.
 */
export type PullRequestUpdate = z.infer<typeof pullRequestUpdate>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const pullRequestUpdateResponse: any = z.lazy(() => {
  return z
    .object({
      title: z.string(),
      description: z.string().optional(),
      reviewers: z.array(z.string()),
    })
    .transform((data) => ({
      title: data['title'],
      description: data['description'],
      reviewers: data['reviewers'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const pullRequestUpdateRequest: any = z.lazy(() => {
  return z
    .object({
      title: z.string().nullish(),
      description: z.string().nullish(),
      reviewers: z.array(z.string()).nullish(),
    })
    .transform((data) => ({
      title: data['title'],
      description: data['description'],
      reviewers: data['reviewers'],
    }));
});
