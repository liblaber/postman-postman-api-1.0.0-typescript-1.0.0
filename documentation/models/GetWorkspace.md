# GetWorkspace

**Properties**

| Name      | Type                  | Required | Description                      |
| :-------- | :-------------------- | :------- | :------------------------------- |
| workspace | GetWorkspaceWorkspace | ❌       | Information about the workspace. |

# GetWorkspaceWorkspace

Information about the workspace.

**Properties**

| Name         | Type                    | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| :----------- | :---------------------- | :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id           | string                  | ❌       | The workspace's ID.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| name         | string                  | ❌       | The workspace's name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| type\_       | WorkspaceType2          | ❌       | The type of workspace.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| description  | string                  | ❌       | The workspace's description.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| visibility   | WorkspaceVisibility     | ❌       | The workspace's visibility. [Visibility](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#changing-workspace-visibility) determines who can access the workspace: - `personal` — Only you can access the workspace. - `team` — All team members can access the workspace. - `private` — Only invited team members can access the workspace ([**Professional** and **Enterprise** plans only](https://www.postman.com/pricing)). - `public` — Everyone can access the workspace. - `partner` — Only invited team members and [partners](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/partner-workspaces/) can access the workspace ([**Professional** and **Enterprise** plans only](https://www.postman.com/pricing)). |
| createdBy    | string                  | ❌       | The user ID of the user who created the workspace.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| updatedBy    | string                  | ❌       | The user ID of the user who last updated the workspace.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| createdAt    | string                  | ❌       | The date and time at which the workspace was created.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| updatedAt    | string                  | ❌       | The date and time at which the workspace was last updated.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| collections  | WorkspaceCollections[]  | ❌       | The workspace's collections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| environments | WorkspaceEnvironments[] | ❌       | The workspace's environments.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| mocks        | WorkspaceMocks[]        | ❌       | The workspace's mock servers.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| monitors     | WorkspaceMonitors[]     | ❌       | The workspace's monitors.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| apis         | WorkspaceApis[]         | ❌       | The workspace's APIs.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

# WorkspaceType2

The type of workspace.

**Properties**

| Name     | Type   | Required | Description |
| :------- | :----- | :------- | :---------- |
| personal | string | ✅       | "personal"  |
| team     | string | ✅       | "team"      |
| private  | string | ✅       | "private"   |
| public   | string | ✅       | "public"    |
| partner  | string | ✅       | "partner"   |

# WorkspaceVisibility

The workspace's visibility. [Visibility](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#changing-workspace-visibility) determines who can access the workspace: - `personal` — Only you can access the workspace. - `team` — All team members can access the workspace. - `private` — Only invited team members can access the workspace ([**Professional** and **Enterprise** plans only](https://www.postman.com/pricing)). - `public` — Everyone can access the workspace. - `partner` — Only invited team members and [partners](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/partner-workspaces/) can access the workspace ([**Professional** and **Enterprise** plans only](https://www.postman.com/pricing)).

**Properties**

| Name     | Type   | Required | Description |
| :------- | :----- | :------- | :---------- |
| personal | string | ✅       | "personal"  |
| team     | string | ✅       | "team"      |
| private  | string | ✅       | "private"   |
| public   | string | ✅       | "public"    |
| partner  | string | ✅       | "partner"   |

# WorkspaceCollections

Information about the collection.

**Properties**

| Name | Type   | Required | Description                 |
| :--- | :----- | :------- | :-------------------------- |
| id   | string | ❌       | The collection's ID.        |
| name | string | ❌       | The collection's name.      |
| uid  | string | ❌       | The collection's unique ID. |

# WorkspaceEnvironments

Information about the environment.

**Properties**

| Name | Type   | Required | Description                  |
| :--- | :----- | :------- | :--------------------------- |
| id   | string | ❌       | The environment's ID.        |
| name | string | ❌       | The environment's name.      |
| uid  | string | ❌       | The environment's unique ID. |

# WorkspaceMocks

Information about the mock server.

**Properties**

| Name        | Type    | Required | Description                                                                                                         |
| :---------- | :------ | :------- | :------------------------------------------------------------------------------------------------------------------ |
| id          | string  | ❌       | The mock server's ID.                                                                                               |
| name        | string  | ❌       | The mock server's name.                                                                                             |
| uid         | string  | ❌       | The mock server's unique ID.                                                                                        |
| deactivated | boolean | ❌       | If true, the mock server is not active. Mock servers deactivate when a linked collection or environment is deleted. |

# WorkspaceMonitors

Information about the monitor.

**Properties**

| Name | Type   | Required | Description              |
| :--- | :----- | :------- | :----------------------- |
| id   | string | ❌       | The monitor's ID.        |
| name | string | ❌       | The monitor's name.      |
| uid  | string | ❌       | The monitor's unique ID. |

# WorkspaceApis

Information about the API.

**Properties**

| Name | Type   | Required | Description          |
| :--- | :----- | :------- | :------------------- |
| id   | string | ❌       | The API's ID.        |
| name | string | ❌       | The API's name.      |
| uid  | string | ❌       | The API's unique ID. |

<!-- This file was generated by liblab | https://liblab.com/ -->
