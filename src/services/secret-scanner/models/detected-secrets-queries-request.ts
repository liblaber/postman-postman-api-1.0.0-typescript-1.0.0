// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const detectedSecretsQueriesRequest = z.lazy(() => {
  return z.object({
    resolved: z.boolean().optional(),
    secretTypes: z.array(z.string()).optional(),
    statuses: z.array(z.string()).optional(),
    workspaceIds: z.array(z.string()).optional(),
    workspaceVisiblities: z.array(z.string()).optional(),
  });
});

/**
 *
 * @typedef  {DetectedSecretsQueriesRequest} detectedSecretsQueriesRequest
 * @property {boolean} - If true, return secrets with a `resolved` status.
 * @property {string[]} - A list of secrets types to query. For a list of valid IDs, use the GET `/secret-types` endpoint.
 * @property {Statuses[]} - A list of the types of resolution statuses to query.
 * @property {string[]} - A list of workspaces IDs to query.
 * @property {WorkspaceVisiblities[]} - A list of workspace [visibility settings](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#changing-workspace-visibility) to query. This currently supports the `team` and `public` settings.
 */
export type DetectedSecretsQueriesRequest = z.infer<typeof detectedSecretsQueriesRequest>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const detectedSecretsQueriesRequestResponse = z.lazy(() => {
  return z
    .object({
      resolved: z.boolean().optional(),
      secretTypes: z.array(z.string()).optional(),
      statuses: z.array(z.string()).optional(),
      workspaceIds: z.array(z.string()).optional(),
      workspaceVisiblities: z.array(z.string()).optional(),
    })
    .transform((data) => ({
      resolved: data['resolved'],
      secretTypes: data['secretTypes'],
      statuses: data['statuses'],
      workspaceIds: data['workspaceIds'],
      workspaceVisiblities: data['workspaceVisiblities'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const detectedSecretsQueriesRequestRequest = z.lazy(() => {
  return z
    .object({
      resolved: z.boolean().nullish(),
      secretTypes: z.array(z.string()).nullish(),
      statuses: z.array(z.string()).nullish(),
      workspaceIds: z.array(z.string()).nullish(),
      workspaceVisiblities: z.array(z.string()).nullish(),
    })
    .transform((data) => ({
      resolved: data['resolved'],
      secretTypes: data['secretTypes'],
      statuses: data['statuses'],
      workspaceIds: data['workspaceIds'],
      workspaceVisiblities: data['workspaceVisiblities'],
    }));
});
