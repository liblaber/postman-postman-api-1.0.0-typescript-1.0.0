// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import {
  updatePanWorkspaceWorkspace,
  updatePanWorkspaceWorkspaceRequest,
  updatePanWorkspaceWorkspaceResponse,
} from './update-pan-workspace-workspace';

/**
 * The shape of the model inside the application code - what the users use
 */
export const updatePanWorkspace: any = z.lazy(() => {
  return z.object({
    workspace: updatePanWorkspaceWorkspace.optional(),
  });
});

/**
 *
 * @typedef  {UpdatePanWorkspace} updatePanWorkspace
 * @property {UpdatePanWorkspaceWorkspace}
 */
export type UpdatePanWorkspace = z.infer<typeof updatePanWorkspace>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const updatePanWorkspaceResponse: any = z.lazy(() => {
  return z
    .object({
      workspace: updatePanWorkspaceWorkspaceResponse.optional(),
    })
    .transform((data) => ({
      workspace: data['workspace'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const updatePanWorkspaceRequest: any = z.lazy(() => {
  return z.object({ workspace: updatePanWorkspaceWorkspaceRequest.nullish() }).transform((data) => ({
    workspace: data['workspace'],
  }));
});
