# WorkspacesService

A list of all methods in the `WorkspacesService` service. Click on the method name to view detailed information about that method.

| Methods                                                           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| :---------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [getWorkspaces](#getworkspaces)                                   | Gets all [workspaces](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/creating-workspaces/). The response includes your workspaces and any workspaces that you have access to. **Note:** This endpoint's response contains the visibility field. Visibility determines who can access the workspace: - `personal` — Only you can access the workspace. - `team` — All team members can access the workspace. - `private` — Only invited team members can access the workspace ([**Professional** and **Enterprise** plans only](https://www.postman.com/pricing)). - `public` — Everyone can access the workspace. - `partner` — Only invited team members and [partners](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/partner-workspaces/) can access the workspace ([**Professional** and **Enterprise** plans only](https://www.postman.com/pricing)).                                                                                                                                  |
| [createWorkspace](#createworkspace)                               | Creates a new [workspace](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/creating-workspaces/). **Note:** This endpoint returns a 403 `Forbidden` response if the user does not have permission to create workspaces. [Admins and Super Admins](https://learning.postman.com/docs/collaborating-in-postman/roles-and-permissions/#team-roles) can configure workspace permissions to restrict users and/or user groups from creating workspaces or require approvals for the creation of team workspaces. ### Important We deprecated linking collections or environments between workspaces. We do not recommend that you do this. If you have a linked collection or environment, note the following: - The endpoint does not create a clone of a collection or environment. - Any changes you make to a linked collection or environment changes them in all workspaces. - If you delete a collection or environment linked between workspaces, the system deletes it in all the workspaces.                          |
| [getWorkspaceRoles](#getworkspaceroles)                           | Gets information about all roles in a workspace, based on the team's [plan](https://www.postman.com/pricing/).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [getWorkspace](#getworkspace)                                     | Gets information about a workspace. **Note:** This endpoint's response contains the `visibility` field. [Visibility](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#changing-workspace-visibility) determines who can access the workspace: - `personal` — Only you can access the workspace. - `team` — All team members can access the workspace. - `private` — Only invited team members can access the workspace ([**Professional** and **Enterprise** plans only](https://www.postman.com/pricing)). - `public` — Everyone can access the workspace. - `partner` — Only invited team members and [partners](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/partner-workspaces/) can access the workspace ([**Professional** and **Enterprise** plans only](https://www.postman.com/pricing)). ### Important We have deprecated the `name` and `uid` responses in the following array of objects: - `collections` - `environments` - `mocks` - `monitors` - `apis` |
| [updateWorkspace](#updateworkspace)                               | Updates a workspace. ### Important We deprecated linking collections or environments between workspaces. We do not recommend that you do this. If you have a linked collection or environment, note the following: - The endpoint does not create a clone of a collection or environment. - Any changes you make to a linked collection or environment changes them in all workspaces. - If you delete a collection or environment linked between workspaces, the system deletes it in all the workspaces.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [deleteWorkspace](#deleteworkspace)                               | Deletes an existing workspace. ### Important If you delete a workspace that has a linked collection or environment with another workspace, this will delete the collection and environment in all workspaces.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [getWorkspaceGlobalVariables](#getworkspaceglobalvariables)       | Gets a workspace's global [variables](https://learning.postman.com/docs/sending-requests/variables/#variable-scopes).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [updateWorkspaceGlobalVariables](#updateworkspaceglobalvariables) | Updates and replaces a workspace's global [variables](https://learning.postman.com/docs/sending-requests/variables/#variable-scopes). This endpoint replaces all existing global variables with the variables you pass in the request body.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [updateWorkspaceRoles](#updateworkspaceroles)                     | Updates the roles of [users](https://learning.postman.com/docs/collaborating-in-postman/roles-and-permissions/#team-roles) or [user groups](https://learning.postman.com/docs/collaborating-in-postman/user-groups/) in a workspace. To get a list of roles, use the `GET /workspace-roles` endpoint. **Note:** - This endpoint does not support the external [Partner or Guest roles](https://learning.postman.com/docs/collaborating-in-postman/roles-and-permissions/#team-roles). - This endpoint is restricted to 50 operations per call. - The request body must contain one unique action per user or user group. For example, you cannot add and remove multiple roles for a user in the same request body.                                                                                                                                                                                                                                                                                                                                   |

## getWorkspaces

Gets all [workspaces](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/creating-workspaces/). The response includes your workspaces and any workspaces that you have access to. **Note:** This endpoint's response contains the visibility field. Visibility determines who can access the workspace: - `personal` — Only you can access the workspace. - `team` — All team members can access the workspace. - `private` — Only invited team members can access the workspace ([**Professional** and **Enterprise** plans only](https://www.postman.com/pricing)). - `public` — Everyone can access the workspace. - `partner` — Only invited team members and [partners](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/partner-workspaces/) can access the workspace ([**Professional** and **Enterprise** plans only](https://www.postman.com/pricing)).

- HTTP Method: `GET`
- Endpoint: `/workspaces`

**Parameters**

| Name      | Type                                                      | Required | Description                                                                                                                                                                                    |
| :-------- | :-------------------------------------------------------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type      | [GetWorkspacesType](../models/GetWorkspacesType.md)       | ❌       | The type of workspace to filter the response by.                                                                                                                                               |
| createdBy | number                                                    | ❌       | Return only workspaces created by a specific user ID. For multiple users, pass this value as a comma-separated list of user IDs. The response only returns workspaces that you have access to. |
| include   | [GetWorkspacesInclude](../models/GetWorkspacesInclude.md) | ❌       | Include the following information in the endpoint's response: - `mocks:deactivated` — Include all deactivated mock servers in the response.                                                    |

**Return Type**

`GetWorkspaces`

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const type = GetWorkspacesType.PERSONAL;
  const include = GetWorkspacesInclude.MOCKSDEACTIVATED;

  const { data } = await postmanClient.workspaces.getWorkspaces({
    type: type,
    createdBy: 12345678,
    include: include,
  });

  console.log(data);
})();
```

## createWorkspace

Creates a new [workspace](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/creating-workspaces/). **Note:** This endpoint returns a 403 `Forbidden` response if the user does not have permission to create workspaces. [Admins and Super Admins](https://learning.postman.com/docs/collaborating-in-postman/roles-and-permissions/#team-roles) can configure workspace permissions to restrict users and/or user groups from creating workspaces or require approvals for the creation of team workspaces. ### Important We deprecated linking collections or environments between workspaces. We do not recommend that you do this. If you have a linked collection or environment, note the following: - The endpoint does not create a clone of a collection or environment. - Any changes you make to a linked collection or environment changes them in all workspaces. - If you delete a collection or environment linked between workspaces, the system deletes it in all the workspaces.

- HTTP Method: `POST`
- Endpoint: `/workspaces`

**Parameters**

| Name | Type                                                          | Required | Description       |
| :--- | :------------------------------------------------------------ | :------- | :---------------- |
| body | [CreateWorkspaceRequest](../models/CreateWorkspaceRequest.md) | ❌       | The request body. |

**Return Type**

`CreateWorkspaceOkResponse`

**Example Usage Code Snippet**

```typescript
import { CreateWorkspaceRequest, PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const workspaceType1 = WorkspaceType1.PERSONAL;

  const createWorkspaceWorkspace1: CreateWorkspaceWorkspace1 = {
    name: 'Team Workspace',
    type: workspaceType1,
    description: 'This is a team workspace.',
  };

  const input: CreateWorkspaceRequest = {
    workspace: createWorkspaceWorkspace1,
  };

  const { data } = await postmanClient.workspaces.createWorkspace(input);

  console.log(data);
})();
```

## getWorkspaceRoles

Gets information about all roles in a workspace, based on the team's [plan](https://www.postman.com/pricing/).

- HTTP Method: `GET`
- Endpoint: `/workspaces-roles`

**Return Type**

`GetWorkspaceRoles`

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await postmanClient.workspaces.getWorkspaceRoles();

  console.log(data);
})();
```

## getWorkspace

Gets information about a workspace. **Note:** This endpoint's response contains the `visibility` field. [Visibility](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#changing-workspace-visibility) determines who can access the workspace: - `personal` — Only you can access the workspace. - `team` — All team members can access the workspace. - `private` — Only invited team members can access the workspace ([**Professional** and **Enterprise** plans only](https://www.postman.com/pricing)). - `public` — Everyone can access the workspace. - `partner` — Only invited team members and [partners](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/partner-workspaces/) can access the workspace ([**Professional** and **Enterprise** plans only](https://www.postman.com/pricing)). ### Important We have deprecated the `name` and `uid` responses in the following array of objects: - `collections` - `environments` - `mocks` - `monitors` - `apis`

- HTTP Method: `GET`
- Endpoint: `/workspaces/{workspaceId}`

**Parameters**

| Name        | Type   | Required | Description         |
| :---------- | :----- | :------- | :------------------ |
| workspaceId | string | ✅       | The workspace's ID. |

**Return Type**

`GetWorkspace`

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await postmanClient.workspaces.getWorkspace('1f0df51a-8658-4ee8-a2a1-d2567dfa09a9');

  console.log(data);
})();
```

## updateWorkspace

Updates a workspace. ### Important We deprecated linking collections or environments between workspaces. We do not recommend that you do this. If you have a linked collection or environment, note the following: - The endpoint does not create a clone of a collection or environment. - Any changes you make to a linked collection or environment changes them in all workspaces. - If you delete a collection or environment linked between workspaces, the system deletes it in all the workspaces.

- HTTP Method: `PUT`
- Endpoint: `/workspaces/{workspaceId}`

**Parameters**

| Name        | Type                                                          | Required | Description         |
| :---------- | :------------------------------------------------------------ | :------- | :------------------ |
| body        | [UpdateWorkspaceRequest](../models/UpdateWorkspaceRequest.md) | ❌       | The request body.   |
| workspaceId | string                                                        | ✅       | The workspace's ID. |

**Return Type**

`UpdateWorkspaceOkResponse`

**Example Usage Code Snippet**

```typescript
import { PostmanClient, UpdateWorkspaceRequest } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const workspaceType3 = WorkspaceType3.PRIVATE_;

  const updateWorkspaceWorkspace1: UpdateWorkspaceWorkspace1 = {
    name: 'Test Workspace',
    type: workspaceType3,
    description: 'This is a test team workspace.',
  };

  const input: UpdateWorkspaceRequest = {
    workspace: updateWorkspaceWorkspace1,
  };

  const { data } = await postmanClient.workspaces.updateWorkspace('1f0df51a-8658-4ee8-a2a1-d2567dfa09a9', input);

  console.log(data);
})();
```

## deleteWorkspace

Deletes an existing workspace. ### Important If you delete a workspace that has a linked collection or environment with another workspace, this will delete the collection and environment in all workspaces.

- HTTP Method: `DELETE`
- Endpoint: `/workspaces/{workspaceId}`

**Parameters**

| Name        | Type   | Required | Description         |
| :---------- | :----- | :------- | :------------------ |
| workspaceId | string | ✅       | The workspace's ID. |

**Return Type**

`DeleteWorkspace`

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await postmanClient.workspaces.deleteWorkspace('1f0df51a-8658-4ee8-a2a1-d2567dfa09a9');

  console.log(data);
})();
```

## getWorkspaceGlobalVariables

Gets a workspace's global [variables](https://learning.postman.com/docs/sending-requests/variables/#variable-scopes).

- HTTP Method: `GET`
- Endpoint: `/workspaces/{workspaceId}/global-variables`

**Parameters**

| Name        | Type   | Required | Description         |
| :---------- | :----- | :------- | :------------------ |
| workspaceId | string | ✅       | The workspace's ID. |

**Return Type**

`GetWorkspaceGlobalVariables`

**Example Usage Code Snippet**

```typescript
import { PostmanClient } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const { data } = await postmanClient.workspaces.getWorkspaceGlobalVariables('1f0df51a-8658-4ee8-a2a1-d2567dfa09a9');

  console.log(data);
})();
```

## updateWorkspaceGlobalVariables

Updates and replaces a workspace's global [variables](https://learning.postman.com/docs/sending-requests/variables/#variable-scopes). This endpoint replaces all existing global variables with the variables you pass in the request body.

- HTTP Method: `PUT`
- Endpoint: `/workspaces/{workspaceId}/global-variables`

**Parameters**

| Name        | Type                                                                                        | Required | Description         |
| :---------- | :------------------------------------------------------------------------------------------ | :------- | :------------------ |
| body        | [UpdateWorkspaceGlobalVariablesRequest](../models/UpdateWorkspaceGlobalVariablesRequest.md) | ❌       | The request body.   |
| workspaceId | string                                                                                      | ✅       | The workspace's ID. |

**Return Type**

`UpdateWorkspaceGlobalVariablesOkResponse`

**Example Usage Code Snippet**

```typescript
import { GlobalVariable, PostmanClient, UpdateWorkspaceGlobalVariablesRequest } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const globalVariableType = GlobalVariableType.DEFAULT_;

  const globalVariable: GlobalVariable = {
    key: 'variableName',
    type: globalVariableType,
    value: 'variableValue',
    enabled: true,
  };

  const input: UpdateWorkspaceGlobalVariablesRequest = {
    values: [globalVariable],
  };

  const { data } = await postmanClient.workspaces.updateWorkspaceGlobalVariables(
    '1f0df51a-8658-4ee8-a2a1-d2567dfa09a9',
    input,
  );

  console.log(data);
})();
```

## updateWorkspaceRoles

Updates the roles of [users](https://learning.postman.com/docs/collaborating-in-postman/roles-and-permissions/#team-roles) or [user groups](https://learning.postman.com/docs/collaborating-in-postman/user-groups/) in a workspace. To get a list of roles, use the `GET /workspace-roles` endpoint. **Note:** - This endpoint does not support the external [Partner or Guest roles](https://learning.postman.com/docs/collaborating-in-postman/roles-and-permissions/#team-roles). - This endpoint is restricted to 50 operations per call. - The request body must contain one unique action per user or user group. For example, you cannot add and remove multiple roles for a user in the same request body.

- HTTP Method: `PATCH`
- Endpoint: `/workspaces/{workspaceId}/roles`

**Parameters**

| Name        | Type                                                                    | Required | Description         |
| :---------- | :---------------------------------------------------------------------- | :------- | :------------------ |
| body        | [UpdateWorkspaceRolesRequest](../models/UpdateWorkspaceRolesRequest.md) | ❌       | The request body.   |
| workspaceId | string                                                                  | ✅       | The workspace's ID. |

**Return Type**

`UpdateWorkspaceRolesOkResponse`

**Example Usage Code Snippet**

```typescript
import { PostmanClient, UpdateWorkspaceRolesRequest } from 'postman_client';

(async () => {
  const postmanClient = new PostmanClient({
    apiKey: 'YOUR_API_KEY',
  });

  const rolesPath2 = RolesPath2._USER;

  const valueRole2 = ValueRole2._1;

  const rolesValue2: RolesValue2 = {
    id: '12345678',
    role: valueRole2,
  };

  const updateWorkspaceRolesRoles1: UpdateWorkspaceRolesRoles1 = {
    op: 'add',
    path: rolesPath2,
    value: [rolesValue2],
  };

  const input: UpdateWorkspaceRolesRequest = {
    roles: [updateWorkspaceRolesRoles1],
  };

  const { data } = await postmanClient.workspaces.updateWorkspaceRoles('1f0df51a-8658-4ee8-a2a1-d2567dfa09a9', input);

  console.log(data);
})();
```

<!-- This file was generated by liblab | https://liblab.com/ -->
