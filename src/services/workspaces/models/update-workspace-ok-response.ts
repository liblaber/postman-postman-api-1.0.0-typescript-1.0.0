// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import {
  updateWorkspaceWorkspace2,
  updateWorkspaceWorkspace2Request,
  updateWorkspaceWorkspace2Response,
} from './update-workspace-workspace-2';

/**
 * The shape of the model inside the application code - what the users use
 */
export const updateWorkspaceOkResponse: any = z.lazy(() => {
  return z.object({
    workspace: updateWorkspaceWorkspace2.optional(),
  });
});

/**
 *
 * @typedef  {UpdateWorkspaceOkResponse} updateWorkspaceOkResponse
 * @property {UpdateWorkspaceWorkspace2} - Information about the updated workspace.
 */
export type UpdateWorkspaceOkResponse = z.infer<typeof updateWorkspaceOkResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const updateWorkspaceOkResponseResponse: any = z.lazy(() => {
  return z
    .object({
      workspace: updateWorkspaceWorkspace2Response.optional(),
    })
    .transform((data) => ({
      workspace: data['workspace'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const updateWorkspaceOkResponseRequest: any = z.lazy(() => {
  return z.object({ workspace: updateWorkspaceWorkspace2Request.nullish() }).transform((data) => ({
    workspace: data['workspace'],
  }));
});
