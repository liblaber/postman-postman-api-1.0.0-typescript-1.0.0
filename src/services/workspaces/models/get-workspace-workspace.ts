// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import {
  workspaceCollections,
  workspaceCollectionsRequest,
  workspaceCollectionsResponse,
} from './workspace-collections';
import {
  workspaceEnvironments,
  workspaceEnvironmentsRequest,
  workspaceEnvironmentsResponse,
} from './workspace-environments';
import { workspaceMocks, workspaceMocksRequest, workspaceMocksResponse } from './workspace-mocks';
import { workspaceMonitors, workspaceMonitorsRequest, workspaceMonitorsResponse } from './workspace-monitors';
import { workspaceApis, workspaceApisRequest, workspaceApisResponse } from './workspace-apis';

/**
 * The shape of the model inside the application code - what the users use
 */
export const getWorkspaceWorkspace = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    type: z.string().optional(),
    description: z.string().optional(),
    visibility: z.string().optional(),
    createdBy: z.string().optional(),
    updatedBy: z.string().optional(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
    collections: z.array(workspaceCollections).optional(),
    environments: z.array(workspaceEnvironments).optional(),
    mocks: z.array(workspaceMocks).optional(),
    monitors: z.array(workspaceMonitors).optional(),
    apis: z.array(workspaceApis).optional(),
  });
});

/**
 * Information about the workspace.
 * @typedef  {GetWorkspaceWorkspace} getWorkspaceWorkspace - Information about the workspace. - Information about the workspace.
 * @property {string} - The workspace's ID.
 * @property {string} - The workspace's name.
 * @property {WorkspaceType2} - The type of workspace.
 * @property {string} - The workspace's description.
 * @property {WorkspaceVisibility} - The workspace's visibility. [Visibility](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#changing-workspace-visibility) determines who can access the workspace:
- `personal` — Only you can access the workspace.
- `team` — All team members can access the workspace.
- `private` — Only invited team members can access the workspace ([**Professional** and **Enterprise** plans only](https://www.postman.com/pricing)).
- `public` — Everyone can access the workspace.
- `partner` — Only invited team members and [partners](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/partner-workspaces/) can access the workspace ([**Professional** and **Enterprise** plans only](https://www.postman.com/pricing)).

 * @property {string} - The user ID of the user who created the workspace.
 * @property {string} - The user ID of the user who last updated the workspace.
 * @property {string} - The date and time at which the workspace was created.
 * @property {string} - The date and time at which the workspace was last updated.
 * @property {WorkspaceCollections[]} - The workspace's collections.
 * @property {WorkspaceEnvironments[]} - The workspace's environments.
 * @property {WorkspaceMocks[]} - The workspace's mock servers.
 * @property {WorkspaceMonitors[]} - The workspace's monitors.
 * @property {WorkspaceApis[]} - The workspace's APIs.
 */
export type GetWorkspaceWorkspace = z.infer<typeof getWorkspaceWorkspace>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const getWorkspaceWorkspaceResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      type: z.string().optional(),
      description: z.string().optional(),
      visibility: z.string().optional(),
      createdBy: z.string().optional(),
      updatedBy: z.string().optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      collections: z.array(workspaceCollectionsResponse).optional(),
      environments: z.array(workspaceEnvironmentsResponse).optional(),
      mocks: z.array(workspaceMocksResponse).optional(),
      monitors: z.array(workspaceMonitorsResponse).optional(),
      apis: z.array(workspaceApisResponse).optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      type: data['type'],
      description: data['description'],
      visibility: data['visibility'],
      createdBy: data['createdBy'],
      updatedBy: data['updatedBy'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
      collections: data['collections'],
      environments: data['environments'],
      mocks: data['mocks'],
      monitors: data['monitors'],
      apis: data['apis'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const getWorkspaceWorkspaceRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().nullish(),
      name: z.string().nullish(),
      type: z.string().nullish(),
      description: z.string().nullish(),
      visibility: z.string().nullish(),
      createdBy: z.string().nullish(),
      updatedBy: z.string().nullish(),
      createdAt: z.string().nullish(),
      updatedAt: z.string().nullish(),
      collections: z.array(workspaceCollectionsRequest).nullish(),
      environments: z.array(workspaceEnvironmentsRequest).nullish(),
      mocks: z.array(workspaceMocksRequest).nullish(),
      monitors: z.array(workspaceMonitorsRequest).nullish(),
      apis: z.array(workspaceApisRequest).nullish(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      type: data['type'],
      description: data['description'],
      visibility: data['visibility'],
      createdBy: data['createdBy'],
      updatedBy: data['updatedBy'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
      collections: data['collections'],
      environments: data['environments'],
      mocks: data['mocks'],
      monitors: data['monitors'],
      apis: data['apis'],
    }));
});
