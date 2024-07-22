// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const updateWorkspaceWorkspace1: any = z.lazy(() => {
  return z.object({
    name: z.string().optional(),
    type: z.string().optional(),
    description: z.string().optional(),
  });
});

/**
 * 
 * @typedef  {UpdateWorkspaceWorkspace1} updateWorkspaceWorkspace1   
 * @property {string} - The workspace's new name.
 * @property {WorkspaceType3} - The new workspace visibility [type](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#changing-workspace-visibility). This property does not support the following workspace visibility changes:
- `private` to `public`, `public` to `private`, and `private` to `personal` for Free and Basic [plans](https://www.postman.com/pricing/).
- `public` to `personal` for team users.

 * @property {string} - The new workspace description.
 */
export type UpdateWorkspaceWorkspace1 = z.infer<typeof updateWorkspaceWorkspace1>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const updateWorkspaceWorkspace1Response: any = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      type: z.string().optional(),
      description: z.string().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      type: data['type'],
      description: data['description'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const updateWorkspaceWorkspace1Request: any = z.lazy(() => {
  return z
    .object({ name: z.string().nullish(), type: z.string().nullish(), description: z.string().nullish() })
    .transform((data) => ({
      name: data['name'],
      type: data['type'],
      description: data['description'],
    }));
});
